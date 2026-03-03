/**
 * 文本化配置选项
 *
 * @description
 * 该工具旨在生成易于人类阅读的、类 YAML 格式的文本表示。
 *
 * **核心渲染规则：**
 * 1. **对象数组 (Object Array)**: 采用 YAML 风格的紧凑模式。
 *    当对象作为数组项时，会忽略对象自身的 `objectPrefix`，并将第一个键值对紧跟在数组前缀 `-` 后。
 *    示例：`[{a: 1, b: 2}]` -> `- a: 1\n  b: 2`
 *
 * 2. **嵌套数组 (Nested Array)**: 采用阶梯式 (Block Style)。
 *    内层数组会从新的一行开始，并相对于父级缩进。
 *    示例：`[[1, 2]]` -> `-\n  - 1\n  - 2`
 *
 * 3. **多行字符串对齐**: 自动计算前缀和键名的长度，确保多行文本的后续行与首行左对齐。
 *
 * **暂不支持的特性 (Limitations):**
 * - 紧凑行内式 (Flow Style): 如 `[1, 2, 3]` 或 `{a: 1}` 的单行 JSON 风格表示。
 * - 紧凑嵌套式 (Dash-Dash Style): 如 `- - item`。
 * - 混合行内化: 暂不会根据数组长度自动决定是否行内化显示。
 */
export interface TextifyOptions {
  /** 缩进单位，可以是空格数或具体的字符串 (默认：2 个空格) */
  indent?: string | number;
  /** 数组项前缀 (默认：'-') */
  arrayPrefix?: string;
  /** 对象键值对前缀 (默认：'*') */
  objectPrefix?: string;
  /** 最大递归深度，防止过深 (默认：10) */
  maxDepth?: number;
  /**
   * 是否确保多行字符串强制换行
   * (默认：false)
   */
  ensureNewLineForMultiline?: boolean;
}

/** @deprecated 请改用 TextifyOptions */
export type StringifyOptions = TextifyOptions;

interface ResolvedOptions {
  indent: string;
  arrayPrefix: string;
  objectPrefix: string;
  maxDepth: number;
  ensureNewLineForMultiline: boolean;
}

enum DataType {
  NULL = 'null',
  UNDEFINED = 'undefined',
  BOOLEAN = 'boolean',
  NUMBER = 'number',
  STRING = 'string',
  SYMBOL = 'symbol',
  FUNCTION = 'function',
  DATE = 'date',
  ARRAY = 'array',
  OBJECT = 'object',
}

class Serializer {
  private seen: WeakSet<object>;
  private options: ResolvedOptions;

  constructor(options: TextifyOptions) {
    this.seen = new WeakSet();
    this.options = {
      indent: typeof options.indent === 'number'
        ? ' '.repeat(options.indent)
        : (options.indent ?? '  '),
      arrayPrefix: options.arrayPrefix ?? '-',
      objectPrefix: options.objectPrefix ?? '*',
      maxDepth: options.maxDepth ?? 10,
      ensureNewLineForMultiline: options.ensureNewLineForMultiline ?? false,
    };
  }

  private getDataType(value: any): DataType {
    if (value === null) return DataType.NULL;
    if (value === undefined) return DataType.UNDEFINED;
    if (Array.isArray(value)) return DataType.ARRAY;

    const type = Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
    if (type === 'date') return DataType.DATE;
    if (type === 'function') return DataType.FUNCTION;
    if (type === 'symbol') return DataType.SYMBOL;

    return type as DataType;
  }

  /** 全量缩进：给每一行都加上缩进字符串 */
  private indentText(text: string, indentStr: string): string {
    return text
      .split('\n')
      .map(line => (line.length ? indentStr + line : line))
      .join('\n');
  }

  /** 补齐缩进：除第一行外，后续行加上指定长度的空格，用于在前缀后对齐内容 */
  private padSubsequentLines(text: string, length: number): string {
    const lines = text.split('\n');
    if (lines.length <= 1) return text;
    const padding = ' '.repeat(length);
    return (
      lines[0] +
      '\n' +
      lines
        .slice(1)
        .map(line => (line.length ? padding + line : line))
        .join('\n')
    );
  }

  private serializePrimitive(value: any): string {
    const type = this.getDataType(value);

    switch (type) {
      case DataType.NULL:
      case DataType.UNDEFINED:
        return String(value);
      case DataType.BOOLEAN:
      case DataType.NUMBER:
        return String(value);
      case DataType.STRING:
        return value;
      case DataType.FUNCTION:
        return `[Function: ${value.name || 'anonymous'}]`;
      case DataType.SYMBOL:
        return value.toString();
      case DataType.DATE:
        return value.toISOString();
      default:
        return String(value);
    }
  }

  private serializeArray(value: any[], depth: number): string {
    if (value.length === 0) return '[]';
    if (this.seen.has(value)) return '[Circular]';
    this.seen.add(value);
    if (depth >= this.options.maxDepth) return '[Max Depth Exceeded]';

    const lines = value.map((item) => {
      const type = this.getDataType(item);
      // 如果子项是对象，标记 isInsideArray = true 以启用紧凑模式
      const itemStr = this.serialize(item, depth + 1, type === DataType.OBJECT);

      const isEmpty = itemStr === '[]' || itemStr === '{}';
      const isSpecial =
        itemStr.startsWith('[Circular]') || itemStr.startsWith('[Max Depth');

      const p = this.options.arrayPrefix;
      // 对于非空的嵌套数组，采用阶梯式 (Block Style) 显示，更易读
      if (type === DataType.ARRAY && !isEmpty && !isSpecial) {
        // 只有前缀非空时才换行，否则直接返回缩进后的内容
        return p.length
          ? `${p}\n${this.indentText(itemStr, this.options.indent)}`
          : this.indentText(itemStr, this.options.indent);
      } else {
        // 普通项或紧凑对象：前缀 + 空格(如果需要) + 内容
        const separator = (p.length && !p.endsWith(' ')) ? ' ' : '';
        const prefixed = `${p}${separator}${itemStr}`;
        // 如果 itemStr 为空，trimEnd 移除多余的分隔符空格
        const result = itemStr.length ? prefixed : prefixed.trimEnd();
        return this.padSubsequentLines(result, p.length + separator.length);
      }
    });

    this.seen.delete(value);
    return lines.join('\n');
  }

  private serializeObject(
    value: Record<string, any>,
    depth: number,
    isInsideArray: boolean,
  ): string {
    const keys = Object.keys(value);
    if (keys.length === 0) return '{}';
    if (this.seen.has(value)) return '[Circular]';
    this.seen.add(value);
    if (depth >= this.options.maxDepth) return '[Max Depth Exceeded]';

    // 如果该对象是在数组内直接显示的，则省略对象前缀（YAML 风格）
    const p = isInsideArray ? '' : this.options.objectPrefix;

    const lines = keys.map((key) => {
      const val = value[key];
      const valType = this.getDataType(val);
      const valStr = this.serialize(val, depth + 1, false);

      const isEmpty = valStr === '{}' || valStr === '[]';
      const isSpecial =
        valStr.startsWith('[Circular]') || valStr.startsWith('[Max Depth');
      const isComplex =
        (valType === DataType.OBJECT || valType === DataType.ARRAY) &&
        !isEmpty &&
        !isSpecial;

      const prefixPart = (p.length && !p.endsWith(' ')) ? `${p} ` : p;

      if (isComplex) {
        // 复杂容器值换行，冒号后不加空格
        const header = `${prefixPart}${key}:`;
        return `${header}\n${this.indentText(valStr, this.options.indent)}`;
      } else {
        // 简单值紧跟在 key 后面
        const header = `${prefixPart}${key}: `;
        const result = valStr.length ? header + valStr : header.trimEnd();
        return this.padSubsequentLines(result, header.length);
      }
    });

    this.seen.delete(value);
    return lines.join('\n');
  }

  public serialize(
    value: any,
    depth: number = 0,
    isInsideArray: boolean = false,
  ): string {
    const type = this.getDataType(value);

    if (type === DataType.ARRAY) {
      return this.serializeArray(value, depth);
    }

    if (type === DataType.OBJECT) {
      return this.serializeObject(value, depth, isInsideArray);
    }

    return this.serializePrimitive(value);
  }
}

/**
 * 将任意数据转换为易读的类 YAML 文本
 *
 * @param data - 要转换的数据
 * @param options - 配置选项
 * @returns 格式化后的文本字符串
 *
 * @example
 * ```ts
 * const text = textify([{ name: 'Alice', age: 20 }, { name: 'Bob' }]);
 * // 输出:
 * // - name: Alice
 * //   age: 20
 * // - name: Bob
 * ```
 */
export function textify(data: any, options?: TextifyOptions): string {
  const serializer = new Serializer(options ?? {});
  let result = serializer.serialize(data);

  if (options?.ensureNewLineForMultiline) {
    if (result.includes('\n') && !result.startsWith('\n')) {
      result = '\n' + result;
    }
  }

  return result;
}
