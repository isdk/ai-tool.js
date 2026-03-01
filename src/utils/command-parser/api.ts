import { Lexer } from './lexer';
import { Parser } from './parser';
import { ParserOptions, ParseResult, SimplifyOptions } from './types';

/**
 * 解析对象风格的参数字符串。
 *
 * @param argsStr 参数字符串，如 '1, name="John", age=25'
 * @param scope 评估作用域，用于解析变量
 * @param options 解析配置选项
 * @returns 解析后的结果。可能是单值、数组或对象（取决于 simplify 选项）。
 */
export async function parseObjectArguments(argsStr: string, scope?: Record<string, any>, options?: ParserOptions): Promise<any> {
  if (!argsStr || !argsStr.trim()) return undefined;

  const lexer = new Lexer(argsStr, options);
  const parser = new Parser(lexer, { ...options, scope });
  const result = await parser.parse();

  if (options?.returnArrayOnly) {
    return toMergedObject(result, options);
  }

  return simplifyResult(result, options);
}

/**
 * 将解析结果合并为一个扁平化的对象。
 *
 * 逻辑：
 * 1. 复制所有命名参数到结果。
 * 2. 遍历位置参数，如果 ignoreIndexNamed 为 true，则跳过已命名的索引位。
 */
export function toMergedObject(result: ParseResult, options?: ParserOptions): any {
  const merged: any = { ...result.kvArgs };
  result.args.forEach((val, i) => {
    if (val !== undefined || (i in result.args)) {
      if (options?.ignoreIndexNamed && result.namedIndices.has(i)) {
        return; // 跳过已经被命名的索引位
      }
      merged[i] = val;
    }
  });
  return merged;
}

/**
 * 简化解析结果。
 *
 * 收敛逻辑受 options.simplify 配置影响。
 */
export function simplifyResult(result: ParseResult, options?: ParserOptions): any {
  const simplify = options?.simplify;

  // 如果显式设置为 false，则退化为返回合并对象
  if (simplify === false) {
    return toMergedObject(result, options);
  }

  // 默认简化配置
  const defaultSimplify: SimplifyOptions = {
    singleValue: true,
    identicalPair: true,
    purePositionalAsArray: true,
    mode: 'auto'
  };

  const config: SimplifyOptions = typeof simplify === 'object'
    ? { ...defaultSimplify, ...simplify }
    : defaultSimplify;

  const { args, kvArgs, flags } = result;
  const mode = config.mode || 'auto';
  let res: any;
  let isSimplified = false;

  // 1. 强制模式处理
  if (mode === 'map') {
    const mapResult: any = { args, kvArgs };
    if (flags && Object.keys(flags).length > 0) {
      mapResult.flags = flags;
    }
    return mapResult;
  }

  if (mode === 'array') {
    res = [...args];
    isSimplified = true;
    Object.defineProperty(res, 'kvArgs', {
      value: { ...kvArgs },
      enumerable: false,
      writable: true,
      configurable: true
    });
  } else if (mode === 'object') {
    res = toMergedObject(result, options);
    isSimplified = true;
  } else {
    // 2. 自动收敛 (mode === 'auto')
    const merged = toMergedObject(result, options);
    const keys = Object.keys(merged);
    const kvKeys = Object.keys(kvArgs);

    // [等值对简化] (identicalPair)
    // 必须正好只有 2 个 Entry，一个是索引 0，一个是命名 Key，且值相等
    if (config.identicalPair && keys.length === 2 && kvKeys.length === 1) {
      const hasZero = '0' in merged || 0 in merged;
      if (hasZero) {
        const otherKey = kvKeys[0];
        if (merged[0] === merged[otherKey]) {
          res = merged[0];
          isSimplified = true;
        }
      }
    }

    // [纯位置参数处理]
    if (!isSimplified && kvKeys.length === 0) {
      // [单值化] (singleValue)
      if (config.singleValue && args.length === 1) {
        res = args[0];
        isSimplified = true;
      } else if (config.purePositionalAsArray) {
        // [纯位置数组化] (purePositionalAsArray)
        res = args.filter((_, i) => i in args);
        isSimplified = true;
      }
    }

    if (!isSimplified) {
      res = merged;
    }
  }

  if (res !== undefined && res !== null && (typeof res === 'object' || typeof res === 'function')) {
    if (Object.keys(flags).length > 0) {
      Object.defineProperty(res, 'flags', {
        value: { ...flags },
        enumerable: false,
        writable: true,
        configurable: true
      });
    }
  }

  return res;
}

/**
 * 深度简化对象风格的参数。
 * 主要用于在获取最终 args 后的二次收敛。
 */
export function simplifyObjectArguments(args: any) {
  if (args && !Array.isArray(args) && typeof args === 'object') {
    const entries = Object.entries(args)
    const keys = Object.keys(args)
    if (entries.length === 1 && args[0] !== undefined) {
      args =  args[0]
    } else if (keys.every(k => !isNaN(parseInt(k)))) {
      args = keys.sort((a,b) => parseInt(a) - parseInt(b)).map(k => args[k])
    } else if (entries.length === 2 && (entries[0][0] === '0' || entries[1][0] === '0')) {
        const zeroIdx = entries[0][0] === '0' ? 0 : 1;
        const otherIdx = 1 - zeroIdx;
        if (entries[zeroIdx][1] === entries[otherIdx][1]) {
            args = entries[zeroIdx][1];
        }
    }
  }
  return args
}

function isIncreasing(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) return false;
  }
  return true;
}

/**
 * 将解析得到的对象转换为 args 和 kvArgs 的信息结构。
 * 兼容处理各种简化后的形态。
 */
export function ObjectArgsToArgsInfo(args: any): {args: any[], kvArgs?: Record<string, any>} {
  if (args && !Array.isArray(args) && typeof args === 'object') {
    const entries = Object.entries(args)
    const keys = Object.keys(args)
    const nums = keys.filter(k => !isNaN(parseInt(k)))
    if (entries.length === 1) {
      if (args[0] !== undefined) {
        args = [args[0]]
      } else {
        args = {args: [], kvArgs: args}
      }
    } else if (keys.every(k => !isNaN(parseInt(k))) && isIncreasing(keys.map(k => parseInt(k)))) {
      args = Object.values(args)
    } else if (nums[0] === '0' && isIncreasing(nums.map(k => parseInt(k)))) {
      const kvArgs = entries.filter(([k, v]) => isNaN(parseInt(k)))
      args = entries.filter(([k, v]) => !isNaN(parseInt(k))).map(([k, v]) => v)
      let i = 0
      const canDeleted: number[] = []
      while (i < kvArgs.length && kvArgs[i][1] === args[i]) {
        canDeleted.push(i)
        i++
      }
      while (canDeleted.length) {
        kvArgs.splice(canDeleted.pop()!, 1)
      }
      args = {args, kvArgs: Object.fromEntries(kvArgs)}
    } else {
      args = {args: [], kvArgs: args}
    }
  }
  if (Array.isArray(args)) {
    args = {args}
  } else if (!args || typeof args !== 'object' || args.args === undefined) {
    args = {args: args === undefined ? [] : [args]}
  }
  return args
}

/**
 * 解析命令字符串。
 *
 * @param commandStr 命令字符串，如 'myCmd(arg1, k=v)'
 * @param scope 评估作用域
 * @param options 解析配置选项
 * @returns { command: string, args: any, flags?: Record<string, any> }
 */
export async function parseCommand(commandStr: string, scope?: Record<string, any>, options?: ParserOptions) {
  const pattern = /^([^(]+)(?:\((.*)\))?$/;
  const match = commandStr.match(pattern);

  if (!match) {
    if (options?.raiseError) {throw new Error("Invalid command format")}
    return;
  }

  const [, commandName, rawArgs] = match;
  let args: any;
  let flags: Record<string, any> | undefined;

  if (rawArgs) {
    const lexer = new Lexer(rawArgs, options);
    const parser = new Parser(lexer, { ...options, scope });
    const result = await parser.parse();

    flags = result.flags;
    if (options?.returnArrayOnly) {
      args = toMergedObject(result, options);
    } else {
      args = simplifyResult(result, options);
    }
  }

  const result: any = { command: commandName.trim(), args };
  if (flags && Object.keys(flags).length > 0) {
    result.flags = flags;
  }
  return result;
}
