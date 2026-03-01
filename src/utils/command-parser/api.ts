import { Lexer } from './lexer';
import { Parser } from './parser';
import { ParserOptions, ParseResult, SimplifyOptions } from './types';

/**
 * Parses an object-style argument string into a structured result.
 * Supports positional args, named args, JS expressions, and custom processors.
 *
 * @param argsStr The argument string to parse.
 * @param scope Optional evaluation scope for resolving variables.
 * @param options Parser configuration options.
 * @returns The parsed and simplified result.
 *
 * @example
 * ```ts
 * // 1. Simple positional
 * await parseObjectArguments("123") // returns 123
 *
 * // 2. Multiple positional
 * await parseObjectArguments("1, 2, 3") // returns [1, 2, 3]
 *
 * // 3. Named arguments
 * await parseObjectArguments("name='John', age=25") // returns {name: 'John', age: 25}
 *
 * // 4. Mixed (idAsName enabled by default)
 * await parseObjectArguments("John, age=25") // returns {0: 'John', John: 'John', age: 25}
 * ```
 */
export async function parseObjectArguments(argsStr: string, scope?: Record<string, any>, options?: ParserOptions): Promise<any> {
  if (!argsStr || !argsStr.trim()) return undefined;

  const lexer = new Lexer(argsStr, options);
  const parser = new Parser(lexer, { ...options, scope });
  const result = await parser.parse();

  return simplifyResult(result, options);
}

/**
 * Merges parsing results into a single flattened object.
 * Numeric indices are used for positional arguments.
 *
 * @param result The raw parse result.
 * @param options Parser configuration options.
 * @returns A merged object containing all arguments.
 */
export function toMergedObject(result: ParseResult, options?: ParserOptions): any {
  const merged: any = { ...result.namedArgs };
  result.args.forEach((val, i) => {
    if (val !== undefined || (i in result.args)) {
      if (options?.excludeAutoNamedFromPositional && result.namedIndices.has(i)) {
        return; // Skip indices that are already named
      }
      merged[i] = val;
    }
  });
  return merged;
}

/**
 * Simplifies the raw parsing result into a more intuitive format.
 * The behavior is controlled by `options.simplify`.
 *
 * @param result The raw parse result.
 * @param options Parser configuration options.
 * @returns A simplified value, array, or object.
 */
export function simplifyResult(result: ParseResult, options?: ParserOptions): any {
  const simplify = options?.simplify;

  // If explicitly set to false, fall back to returning a merged object
  if (simplify === false) {
    return toMergedObject(result, options);
  }

  // Default simplification configuration
  const defaultSimplify: SimplifyOptions = {
    singleValue: true,
    identicalPairSingular: true,
    purePositionalAsArray: true,
    mode: 'auto'
  };

  const config: SimplifyOptions = typeof simplify === 'object'
    ? { ...defaultSimplify, ...simplify }
    : defaultSimplify;

  const { args, namedArgs, flags } = result;
  const mode = config.mode || 'auto';
  let res: any;
  let isSimplified = false;

  // 1. Mandatory mode handling
  if (mode === 'map') {
    const mapResult: any = { args, namedArgs };
    if (flags && Object.keys(flags).length > 0) {
      mapResult.flags = flags;
    }
    return mapResult;
  }

  if (mode === 'array') {
    res = [...args];
    isSimplified = true;
    Object.defineProperty(res, 'namedArgs', {
      value: { ...namedArgs },
      enumerable: false,
      writable: true,
      configurable: true
    });
  } else if (mode === 'object') {
    res = toMergedObject(result, options);
    isSimplified = true;
  } else {
    // 2. Automatic convergence (mode === 'auto')
    const merged = toMergedObject(result, options);
    const keys = Object.keys(merged);
    const kvKeys = Object.keys(namedArgs);

    // [Identical Pair Simplification]
    // Converge to a single value if we have {0: val, key: val}
    if (config.identicalPairSingular && keys.length === 2 && kvKeys.length === 1) {
      const hasZero = '0' in merged || 0 in merged;
      if (hasZero) {
        const otherKey = kvKeys[0];
        if (merged[0] === merged[otherKey]) {
          res = merged[0];
          isSimplified = true;
        }
      }
    }

    // [Pure Positional Argument Handling]
    if (!isSimplified && kvKeys.length === 0) {
      // [Single Value Simplification]
      if (config.singleValue && args.length === 1) {
        res = args[0];
        isSimplified = true;
      } else if (config.purePositionalAsArray) {
        // [Pure Positional as Array]
        res = args.filter((_, i) => i in args);
        isSimplified = true;
      }
    }

    if (!isSimplified) {
      res = merged;
    }
  }

  // Attach non-enumerable flags property if present
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
 * Deeply simplifies object-style arguments (recursive convergence).
 * Useful for normalizing complex argument structures.
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
 * Normalizes various simplified result formats back into an `{args, namedArgs}` info structure.
 *
 * @example
 * ```ts
 * ObjectArgsToArgsInfo("val") // returns {args: ["val"]}
 * ObjectArgsToArgsInfo([1, 2]) // returns {args: [1, 2]}
 * ObjectArgsToArgsInfo({name: "John"}) // returns {args: [], namedArgs: {name: "John"}}
 * ```
 */
export function ObjectArgsToArgsInfo(args: any): {args: any[], namedArgs?: Record<string, any>} {
  if (args && !Array.isArray(args) && typeof args === 'object') {
    const entries = Object.entries(args)
    const keys = Object.keys(args)
    const nums = keys.filter(k => !isNaN(parseInt(k)))
    if (entries.length === 1) {
      if (args[0] !== undefined) {
        args = [args[0]]
      } else {
        args = {args: [], namedArgs: args}
      }
    } else if (keys.every(k => !isNaN(parseInt(k))) && isIncreasing(keys.map(k => parseInt(k)))) {
      args = Object.values(args)
    } else if (nums[0] === '0' && isIncreasing(nums.map(k => parseInt(k)))) {
      const namedArgs = entries.filter(([k, v]) => isNaN(parseInt(k)))
      args = entries.filter(([k, v]) => !isNaN(parseInt(k))).map(([k, v]) => v)
      let i = 0
      const canDeleted: number[] = []
      while (i < namedArgs.length && namedArgs[i][1] === args[i]) {
        canDeleted.push(i)
        i++
      }
      while (canDeleted.length) {
        namedArgs.splice(canDeleted.pop()!, 1)
      }
      args = {args, namedArgs: Object.fromEntries(namedArgs)}
    } else {
      args = {args: [], namedArgs: args}
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
 * Parses a full command string including the command name and its parenthesized arguments.
 *
 * @param commandStr The command string, e.g., 'myCmd(arg1, k=v, !flag)'
 * @param scope Evaluation scope.
 * @param options Parser configuration options.
 * @returns An object containing the command name, parsed args, and optional flags.
 *
 * @example
 * ```ts
 * await parseCommand("sum(1, 2)") // returns {command: "sum", args: [1, 2]}
 * await parseCommand("search(query='abc', !caseSensitive)") // returns {command: "search", args: {query: 'abc'}, flags: {caseSensitive: true}}
 * ```
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
    args = simplifyResult(result, options);
  }

  const result: any = { command: commandName.trim(), args };
  if (flags && Object.keys(flags).length > 0) {
    result.flags = flags;
  }
  return result;
}


