/**
 * 行内化样式模式
 * - 'auto': 根据阈值自动决定
 * - 'always': 始终行内化 (除非包含换行符)
 * - 'never': 始终使用块状样式
 */
export type TextifyInlineStyleMode = 'auto' | 'always' | 'never';

/**
 * 字符串引用策略 (是否用引号包裹)
 * - 'auto': 遇到特殊字符、保留字或数字外观时自动加引号
 * - 'always': 所有字符串始终加引号
 * - 'never': 尽可能不加引号
 */
export type TextifyStringQuoting = 'auto' | 'always' | 'never';

/**
 * 行内化详细配置
 */
export interface TextifyInlineOptions {
  /** 模式 (默认：'auto') */
  mode?: TextifyInlineStyleMode;
  /** 自动行内化的字符长度阈值 (默认：40) */
  threshold?: number;
  /** 逗号和冒号后是否保留空格 (默认：true) */
  spaceAfterSeparator?: boolean;
  /** 括号/大括号内侧是否保留空格 (默认：false) */
  spaceInBraces?: boolean;
}

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
 * **高级特性：**
 * - **智能行内化 (Inline Style)**: 自动将短对象或数组转换为 `{a: 1}` 格式。
 * - **混合模式 (Mixed Mode)**: 根据内容长度自动决定嵌套项是行内还是块状显示。
 * - **自动引用 (Auto Quoting)**: 智能识别需要引号包裹的字符串（包含特殊字符、保留字或数字外观）。
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
  /**
   * 行内化配置
   * - 'auto': 基于阈值自动切换 (默认)
   * - 'always': 强制行内化 (遇到换行符除外)
   * - 'never': 强制块状化
   */
  inlineStyle?: TextifyInlineStyleMode | TextifyInlineOptions;
  /**
   * 字符串引用策略 (是否加双引号)
   * - 'auto': 遇到特殊字符 (:, #, [, ], {, }, *, -, ")、首尾空格、保留字或数字外观时自动加引号 (默认)
   * - 'always': 所有字符串始终加引号
   * - 'never': 除非结构必须，否则不加引号
   */
  stringQuoting?: TextifyStringQuoting;
}

interface ResolvedOptions {
  indent: string;
  arrayPrefix: string;
  objectPrefix: string;
  maxDepth: number;
  ensureNewLineForMultiline: boolean;
  inline: Required<TextifyInlineOptions>;
  stringQuoting: TextifyStringQuoting;
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

    const inlineOpt = typeof options.inlineStyle === 'string'
      ? { mode: options.inlineStyle }
      : (options.inlineStyle ?? {});

    this.options = {
      indent: typeof options.indent === 'number'
        ? ' '.repeat(options.indent)
        : (options.indent ?? '  '),
      arrayPrefix: options.arrayPrefix ?? '-',
      objectPrefix: options.objectPrefix ?? '*',
      maxDepth: options.maxDepth ?? 10,
      ensureNewLineForMultiline: options.ensureNewLineForMultiline ?? false,
      stringQuoting: options.stringQuoting ?? 'auto',
      inline: {
        mode: inlineOpt.mode ?? 'auto',
        threshold: inlineOpt.threshold ?? 40,
        spaceAfterSeparator: inlineOpt.spaceAfterSeparator ?? true,
        spaceInBraces: inlineOpt.spaceInBraces ?? false,
      },
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

  private shouldQuote(value: string): boolean {
    const q = this.options.stringQuoting;
    if (q === 'always') return true;
    if (q === 'never') return false;

    // auto 模式
    if (value === '') return true;

    // 1. 结构分隔符或引用，在任何位置都必须包裹 (由于行内化 Flow Style 需求)
    // 注意：已移除 * 和 -，它们仅在出现在开头且冲突时才需要包裹
    if (/[:#,[\]{}"]/.test(value)) return true;

    // 2. 检查开头冲突 (由用户建议：更精确的判定，避免“偷懒”式全局检查)
    // 只有当字符串以当前配置的前缀开头时，才为了避免解析歧义而加引号
    const ap = this.options.arrayPrefix.trim();
    const op = this.options.objectPrefix.trim();
    if (ap.length && value.startsWith(ap)) return true;
    if (op.length && value.startsWith(op)) return true;

    // 3. 首尾空格
    if (value !== value.trim()) return true;
    // 保留字
    const reserved = ['true', 'false', 'null', 'undefined', 'nan', 'infinity'];
    if (reserved.includes(value.toLowerCase())) return true;
    // 看起来像数字 (且非空)
    if (value.length > 0 && !isNaN(Number(value))) return true;

    return false;
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
      case DataType.STRING: {
        const str = value as string;
        return this.shouldQuote(str) ? `"${str.replace(/"/g, '\\"')}"` : str;
      }
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

  private serializeInline(value: any, depth: number): string | null {
    if (depth >= this.options.maxDepth) return '[Max Depth Exceeded]';

    const type = this.getDataType(value);

    if (type === DataType.ARRAY) {
      const arr = value as any[];
      if (arr.length === 0) return '[]';
      if (this.seen.has(arr)) return '[Circular]';
      this.seen.add(arr);

      const items: string[] = [];
      for (const item of arr) {
        const s = this.serializeInline(item, depth + 1);
        if (s === null) {
          this.seen.delete(arr);
          return null;
        }
        items.push(s);
      }
      this.seen.delete(arr);

      const space = this.options.inline.spaceInBraces ? ' ' : '';
      const sep = this.options.inline.spaceAfterSeparator ? ', ' : ',';
      return `[${space}${items.join(sep)}${space}]`;
    }

    if (type === DataType.OBJECT) {
      const obj = value as Record<string, any>;
      const keys = Object.keys(obj);
      if (keys.length === 0) return '{}';
      if (this.seen.has(obj)) return '[Circular]';
      this.seen.add(obj);

      const pairs: string[] = [];
      for (const key of keys) {
        const val = obj[key];
        const s = this.serializeInline(val, depth + 1);
        if (s === null) {
          this.seen.delete(obj);
          return null;
        }
        const sep = this.options.inline.spaceAfterSeparator ? ': ' : ':';
        pairs.push(`${key}${sep}${s}`);
      }
      this.seen.delete(obj);

      const space = this.options.inline.spaceInBraces ? ' ' : '';
      const sep = this.options.inline.spaceAfterSeparator ? ', ' : ',';
      return `{${space}${pairs.join(sep)}${space}}`;
    }

    // 原始类型
    const str = this.serializePrimitive(value);
    // 如果原始类型本身包含换行符，则无法行内化
    return str.includes('\n') ? null : str;
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

      // 判定是否为行内化后的容器
      const isInlined = !isSpecial && !isEmpty && (itemStr[0] === '{' || itemStr[0] === '[') && !itemStr.includes('\n');

      const p = this.options.arrayPrefix;
      // 对于非空的嵌套数组，且非行内化时，采用阶梯式 (Block Style) 显示
      if (type === DataType.ARRAY && !isEmpty && !isSpecial && !isInlined) {
        // 只有前缀非空时才换行，否则直接返回缩进后的内容
        return p.length
          ? `${p}\n${this.indentText(itemStr, this.options.indent)}`
          : this.indentText(itemStr, this.options.indent);
      } else {
        // 普通项、行内容器或紧凑对象 (- a: 1)：前缀 + 空格(如果需要) + 内容
        const hasSpace = this.options.inline.spaceAfterSeparator;
        const separator = (p.length && !p.endsWith(' ') && hasSpace) ? ' ' : '';
        const prefixed = `${p}${separator}${itemStr}`;
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

      // 判定是否为行内化后的容器
      const isInlined = !isSpecial && !isEmpty && (valStr[0] === '{' || valStr[0] === '[') && !valStr.includes('\n');

      // 判定是否为需要换行的复杂块状容器 (Block Style)
      const isBlockContainer = (valType === DataType.OBJECT || valType === DataType.ARRAY) && !isEmpty && !isSpecial && !isInlined;

      const prefixPart = (p.length && !p.endsWith(' ')) ? `${p} ` : p;
      const hasSpace = this.options.inline.spaceAfterSeparator;

      if (isBlockContainer) {
        // 块状容器值换行，冒号后不加空格
        const header = `${prefixPart}${key}:`;
        return `${header}\n${this.indentText(valStr, this.options.indent)}`;
      } else {
        // 简单值或行内化容器紧跟在 key 后面
        const header = `${prefixPart}${key}:${hasSpace ? ' ' : ''}`;
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
    const isContainer = type === DataType.ARRAY || type === DataType.OBJECT;

    // 1. 对于容器项，尝试进行行内化 (Flow Style)
    if (isContainer && this.options.inline.mode !== 'never') {
      const inlineResult = this.serializeInline(value, depth);
      if (inlineResult !== null) {
        const shouldInline =
          this.options.inline.mode === 'always' ||
          inlineResult.length <= this.options.inline.threshold;

        if (shouldInline) return inlineResult;
      }
    }

    // 2. 如果不满足行内化条件，回退到块状显示 (Block Style)
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
