import { Lexer } from './lexer';
import { Parser } from './parser';
import { ParserOptions, ParseResult } from './types';

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
 * 收敛规则：
 * 1. 当 simplify 为 true 时：
 * 2. 如果结果中仅包含两个 entry，且一个是索引 0，另一个是字符串键，且它们的值严格相等，则收敛为该值。
 *    (例如：{ 0: 25, age: 25 } -> 25)
 * 3. 如果没有命名参数，且只有一个位置参数，返回该参数值。
 * 4. 如果没有命名参数，且有多个位置参数，返回位置参数数组。
 * 5. 其它情况返回合并后的对象。
 */
export function simplifyResult(result: ParseResult, options?: ParserOptions): any {
  if (options?.simplify === false) {
    return toMergedObject(result, options);
  }

  const merged = toMergedObject(result, options);
  const keys = Object.keys(merged);

  // 特殊情况：单值同值收敛 (例如：{ 0: 20, age: 20 })
  if (keys.length === 2) {
    const hasZero = '0' in merged || 0 in merged;
    if (hasZero) {
      const otherKey = keys.find(k => k !== '0');
      if (otherKey !== undefined && isNaN(Number(otherKey)) && merged[0] === merged[otherKey]) {
        return merged[0];
      }
    }
  }

  // 位置参数兜底
  if (Object.keys(result.kvArgs).length === 0) {
    if (result.args.length === 1) return result.args[0];
    return result.args.filter((_, i) => i in result.args);
  }
  
  return merged;
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
  }
  return args
}

/**
 * 解析命令字符串。
 * 
 * @param commandStr 命令字符串，如 'myCmd(arg1, k=v)'
 * @param scope 评估作用域
 * @param options 解析配置选项
 * @returns { command: string, args: any }
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
  if (rawArgs) {
    args = await parseObjectArguments(rawArgs, scope, options);
  }

  return { command: commandName.trim(), args };
}
