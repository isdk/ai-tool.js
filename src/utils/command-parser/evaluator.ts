import { newFunction } from "util-ex";
import { filterValidFnScope } from "../parse-js-json";
import { ParserOptions, ArgContext, UNRESOLVED_SYMBOL, PROCESSOR_RESULT } from "./types";
import { get as getByPath } from "lodash-es";

/**
 * 评估一个参数的值。
 *
 * 优先级：
 * 1. 尝试调用自定义处理器 (ArgProcessor)。
 * 2. 如果处理器返回的是源码字符串，递归调用 evaluateExpression。
 * 3. 默认执行 evaluateExpression (处理字面量、作用域变量和 JS 表达式)。
 */
export async function evaluate(ctx: ArgContext): Promise<any> {
  const { scope, options, rawValue } = ctx;
  const { argProcessor } = options;

  // 1. 优先给予 ArgProcessor 处理机会
  if (typeof argProcessor === 'function') {
    const result = await argProcessor(ctx);
    if (result !== undefined) {
      // A. 如果处理器返回的是普通字符串，视为“待二次评估的源码”，遵循统一样律
      if (typeof result === 'string') {
        return await evaluateExpression(result, scope, options);
      }

      // B. 如果是带 Symbol 协议的结果对象
      if (result && typeof result === 'object' && result[PROCESSOR_RESULT]) {
          const [val, name, pOptions] = result[PROCESSOR_RESULT];
          // 如果包装内部的值是字符串，也需进行二次评估（如模板渲染结果）
          if (typeof val === 'string') {
              const evaluatedVal = await evaluateExpression(val, scope, options);
              return { [PROCESSOR_RESULT]: [evaluatedVal, name, pOptions] };
          }
      }

      return result;
    }
  }

  // 2. 默认评估逻辑 (引号字符串、数字、布尔及 JS 表达式)
  return await evaluateExpression(rawValue, scope, options);
}

/**
 * 评估一个表达式字符串的值。
 *
 * 逻辑顺序：
 * 1. 检查是否跳过评估。
 * 2. 匹配简单的 JS 字面量 (true, false, null, undefined, NaN, Infinity)。
 * 3. 检查是否为数字。
 * 4. 在 scope 中进行路径查找 (getByPath)。
 * 5. 尝试作为 JS 表达式或箭头函数执行。
 * 6. 捕获 ReferenceError：根据选项决定是回退原始文本还是返回 undefined。
 * 7. 最终回退：处理带引号的字符串脱壳。
 */
export async function evaluateExpression(code: string, scope: any, options: ParserOptions) {
  const trimmed = code.trim();
  if (!trimmed) return undefined;

  if (options.skipExpression) {
    return trimmed;
  }

  // 1. 处理简单字面量 (忽略大小写)
  const lower = trimmed.toLowerCase();
  if (lower === 'true') return true;
  if (lower === 'false') return false;
  if (lower === 'null') return null;
  if (lower === 'undefined') return undefined;
  if (lower === 'nan') return NaN;
  if (lower === 'infinity') return Infinity;

  const num = Number(trimmed);
  if (!isNaN(num) && trimmed !== '') return num;

  // 2. 作用域直接查找 (Path Lookup)
  if (scope && getByPath(scope, trimmed) !== undefined) {
    return getByPath(scope, trimmed);
  }

  // 3. 尝试通过 newFunction 执行 JS 逻辑
  try {
    const fn = newFunction('async expression', [], `return ${trimmed};`, filterValidFnScope(scope || {}));
    const result = await fn.call(null);
    // 特殊处理：如果是函数定义，则返回原始函数代码
    if (typeof result === 'function') {
      return trimmed;
    }
    return result;
  } catch (err) {
    if (options.raiseError) throw err;

    // 处理 ReferenceError (变量未定义)
    if (err instanceof ReferenceError && options.preserveUnresolvedName) {
      // 返回带 Symbol 标记的对象，以便 Parser 识别并跳过 idAsName 逻辑
      return { [UNRESOLVED_SYMBOL]: trimmed };
    }

    // 处理带引号的字符串脱壳 (Unquoting)
    if ((trimmed.startsWith('"') && trimmed.endsWith('"')) ||
        (trimmed.startsWith("'") && trimmed.endsWith("'")) ||
        (trimmed.startsWith('`') && trimmed.endsWith('`'))) {
      try {
        // 使用 newFunction 安全地解开字符串字面量转义
        const unescapeFn = newFunction(`return ${trimmed};`);
        console.log('🚀 ~ file: evaluator.ts:107 ~ unescapeFn:', unescapeFn)
        return unescapeFn();
      } catch (e) {
        // 解开失败则回退到简单的 substring
        return trimmed.substring(1, trimmed.length - 1);
      }
    }

    // 默认行为：如果是 ReferenceError 则返回 undefined（除非显式开启 preserveUnresolvedName）
    if (err instanceof ReferenceError) {
      return undefined;
    }

    // 其它无法识别的情况返回原始文本
    return trimmed;
  }
}
