import { PromptTemplate, type PromptTemplateOptions } from "./prompt";
import { filterValidFnScope, parseJsJsonSimpleSync } from './parse-js-json'
import { get as getByPath, omitBy } from "lodash-es";
import { newFunction } from "util-ex";

type ArgInfo = [boolean, string]
type ArgProcessor = (arg: ArgInfo, ix: number, scope?: Record<string, any>, options?: ParseObjectArgumentOptions) => string|void|Promise<string|void>

export interface AIChoiceConfig {
  items?: string[]
  maxPick?: number
  minPick?: number
  separator?: string
  prefix?: string
  type?: 'random'|'ai'
  end?: string
}

export interface ParseObjectArgumentOptions {
  delimiter?: string
  assigner?: string
  argProcessor?: ArgProcessor
  returnArrayOnly?: boolean
  templateFormat?: string
  templateData?: Record<string, any>
  ignoreIndexNamed?: boolean
  preserveUnresolvedName?: boolean
  skipExpression?: boolean
  raiseError?: boolean
}

/**
 * Asynchronously parses a string of object arguments into an actual object.
 * @param argsStr The string of arguments to be parsed.
 * @param scope An optional scope object that provides values for variables during parsing.
 * @param options An optional configuration object containing the delimiter and argument processor.
 * @returns The parsed object or undefined.
 *
 * This function first parses the argument string into an object string and then converts it
 * into a proper JavaScript/JSON object based on the parsing results and configuration options.
 * It handles the conversion of single objects, arrays, and key-value pairs. The default delimiter
 * between parameters is a comma (`,`), but this can be customized using the `options.delimiter`.
 * Parameter assignment always uses an equal sign (`=`) and cannot be modified.
 *
 * The function returns:
 * - An object if the input string represents a set of key-value pairs.
 * - An array if the input string represents a sequence of elements, where each element can be
 *   parsed as a number (indices are used as keys).
 * - A single value if the input string represents a single value or a single key-value pair.
 * - `undefined` if the input string is empty or cannot be parsed into a valid object.
 *
 * @example
 * ```typescript
 * // Example call with default delimiter
 * const result = await parseObjectArguments("name=John,age=30");
 * console.log(result); // Output: { name: 'John', age: '30' }
 *
 * // Example call with custom delimiter
 * const resultCustomDelimiter = await parseObjectArguments("name=John|age=30", undefined, { delimiter: '|' });
 * console.log(resultCustomDelimiter); // Output: { name: 'John', age: '30' }
 *
 * // Example with a single value
 * const singleValue = await parseObjectArguments("42");
 * console.log(singleValue); // Output: 42
 *
 * // Example with an array
 * const arrayResult = await parseObjectArguments("1,2,3");
 * console.log(arrayResult); // Output: [1, 2, 3]
 * ```
 */
export async function parseObjectArguments(argsStr: string, scope?: Record<string, any>, options?: ParseObjectArgumentOptions) {
  const args = parseObjectArgumentsAsArgInfos(argsStr, scope, options);
  return parseObjectArgumentInfos(args, scope, options)
}

function isIncreasing(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= arr[i - 1]) {
          return false;
      }
  }
  return true;
}


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
      // convert to array
      args = Object.values(args) // keys.sort((a,b) => parseInt(a) - parseInt(b)).map(k => args[k])
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

export function simplifyObjectArguments(args: any) {
  if (args && !Array.isArray(args) && typeof args === 'object') {
    const entries = Object.entries(args)
    const keys = Object.keys(args)
    if (entries.length === 1 && args[0] !== undefined) {
      args =  args[0]
    } else if (keys.every(k => !isNaN(parseInt(k)))) {
      // convert to array
      args = keys.sort((a,b) => parseInt(a) - parseInt(b)).map(k => args[k])
    } else if (entries.length === 2 && entries[0][0] === '0' && entries[0][1] === entries[1][1]) {
      // { '0': 3, n: 3 }
      args = args[0]
    }
  }
  return args
}

export async function parseObjectArgumentInfos(args: ArgInfo[], scope?: Record<string, any>, options?: ParseObjectArgumentOptions) {
  if (args.length) {
    const _args = await Promise.all(args.map((argInfo, ix) => parseObjectArgInfo(argInfo, ix, scope, options)))
    const returnArrayOnly = options?.returnArrayOnly
    let result: any
    if (_args?.length) {
      const jsonStr = `{${_args.map((arg: string) => arg).join(',')}}`
      result = parseJsJsonSimpleSync(jsonStr, scope)
    }

    if (result && !returnArrayOnly) {
      result = simplifyObjectArguments(result)
    }
    return result
  }
}

export function ChoiceArgProcessor(argInfo: ArgInfo, _ix: number, scope?: Record<string, any>, options?: ParseObjectArgumentOptions) {
  const [isNamedArg, arg] = argInfo
  if (!isNamedArg && arg[0] === '|') {
   return 'choice: {' + parseChoiceInfo(arg, scope, options) + '}'
  }
}

export async function TemplateArgProcessor([isNamedArg, arg]: ArgInfo, ix: number, scope?: Record<string, any>, options?: ParseObjectArgumentOptions) {
  if (!scope) {scope = {}}
  let name: string
  let value: string
  if (isNamedArg) {
    const pair = arg.split(':')
    name = pair[0].trim()
    value = pair[1].trim()
  } else {
    value = arg
    name = ix + ''
  }
  const data = {...omitBy(scope, (v, k) => !k || k[0] === '_' || typeof v === 'function'), ...options?.templateData}

  const formatOpts: PromptTemplateOptions = {template: value, data }
  if (options?.templateFormat) {
    formatOpts.templateFormat = options.templateFormat
  }
  const content = await PromptTemplate.formatIf(formatOpts) as string
  if (content) {
    value = isQuoted(content) ? content : JSON.stringify(content)
    return name + ':' + value
  }
}

export async function AIArgProcessor(argInfo: ArgInfo, ix: number, scope?: Record<string, any>, options?: ParseObjectArgumentOptions) {
  let result = ChoiceArgProcessor(argInfo, ix, scope, options)
  if (!result) {
    result = await TemplateArgProcessor(argInfo, ix, scope, options)
  }
  return result
}

export function isQuoted(s: string) {
  const c = s[0]
  return (c === '"' || c === "'") && s[s.length-1] === c
}

export function isStrWrapped(s: string, pairs = ['""', "''", '{}']) {
  return pairs.some(pair => s[0] === pair[0] && s[s.length-1] === pair[1])
}

export function ensureQuoted(s: string, quoteChar = '"') {
  if (!isQuoted(s)) {
    return quoteChar + s + quoteChar
  }
  return s
}

function wrapQuotes(strs: string[], quoteChar = '"') {
  // check the item whether already quoted or not
  return strs.map(str => ensureQuoted(str, quoteChar))
}

function parseChoiceInfo(argsStr: string, scope?: Record<string, any>, options?: ParseObjectArgumentOptions) {
  const args = parseObjectArgumentsAsArgInfos(argsStr, scope, {...options, delimiter: ':'})
  const hasPicked = {} as Record<keyof AIChoiceConfig, boolean>
  const result = args.map(([isNamedArg, arg]: ArgInfo, ix: number) => {
    if (isNamedArg) {
      const firstSepIndex = arg.indexOf(':')
      const key = arg.slice(0, firstSepIndex).trim()
      if (hasPicked[key]) { throw new Error('Only one ' + key + ' is allowed') }
      hasPicked[key] = true
      return arg
    } else {
      if (arg[0] === '|') {
        if (hasPicked.items) { throw new Error('Only one items is allowed') }
        hasPicked.items = true
        return 'items:[' + wrapQuotes(arg.split('|').filter(Boolean)) + ']'
      }
      const maxPick = parseInt(arg.trim())
      if (!isNaN(maxPick)) {
        if (hasPicked.maxPick) { throw new Error('Only one maxPick is allowed') }
        hasPicked.maxPick = true
        return 'maxPick:' + maxPick
      }
      if (arg === 'random' || arg === 'ai') {
        hasPicked.type = true
        return 'type:"' + arg + '"'
      }
      if (isQuoted(arg)) {
        if (hasPicked.separator) { throw new Error('Only one separator is allowed') }
        hasPicked.separator = true
        return 'separator:' + arg
      }
    }
  })
  return result
}

export function quoteStr(str: string) {
  // escape str with '"', avoiding already escaped '"'
  return '"' + str.replace(/(?<!\\)"(?!\\)/g, '\\"') + '"';
}

const JSKeywords = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity']

function isNonQuotedArg(arg: string) {
  return isStrWrapped(arg) || !Number.isNaN(parseFloat(arg)) || JSKeywords.includes(arg) || isArrowFunctionExpression(arg)
}

async function getExpressionResult(arg: string, scope: any, raiseReferenceError?: boolean) {
  const fn = newFunction('async expression', [], `return ${arg};`, filterValidFnScope(scope))
  let result: any
  try {
    result = await fn.call(this)
  } catch(err) {
    if (raiseReferenceError || !(err instanceof ReferenceError)) {
      throw err
    }
  }
  switch (typeof result) {
    case 'number':
    case 'boolean':
    case 'undefined':
      return result
    case 'function':
      return fn.toString()
    default:
      return JSON.stringify(result)
  }
}


async function getArgValue(value: string, scope?: any, options?: ParseObjectArgumentOptions) {
  let result: any = value
  if (['true', 'false'].includes(value.toLowerCase())) {
    result = result.toLowerCase()
  } else if (!(isNonQuotedArg(value) || (scope && getByPath(scope, value) !== undefined))) {
    if (!isArrowFunctionExpression(value)) try {
      if (options?.skipExpression) {
        result = quoteStr(value)
      } else {
        result = await getExpressionResult.call(this, value, scope, options?.preserveUnresolvedName)
      }
    } catch(e) {
      result = quoteStr(value)
    }
  }
  return result
}

export async function parseObjectArgInfo(argInfo: ArgInfo, ix: number, scope?: Record<string, any>, options?: ParseObjectArgumentOptions) {
  const [isNamedArg, arg] = argInfo
  const argProcessor = options?.argProcessor
  const ignoreIndexNamed = options?.ignoreIndexNamed
  if (typeof argProcessor === 'function') {
    const result = await argProcessor(argInfo, ix, scope, options)
    if (result) {return result}
  }
  if (isNamedArg) {
    const ix = arg.indexOf(':')
    const k = arg.slice(0, ix).trim()
    const v = await getArgValue(arg.slice(ix+1).trim(), scope, options)

    return k + ':' + v
  } else {
    const _arg = arg.trim()

    if (scope && getByPath(scope, _arg) !== undefined) {
      const result = (!ignoreIndexNamed ?  ix+':'+ _arg + ',' : '')  + '"' + _arg +'":' + _arg
      return result
    } else {
      const v = await getArgValue(arg.trim(), scope, options)
      return ix+':'+ v
    }
  }
}

/*
async function parseObjectArgumentsAsStr(argsStr: string, scope?: Record<string, any>, options?: {delimiter?: string, argProcessor?: ArgProcessor}) {
  const args = parseObjectArgumentsAsArgInfos(argsStr, scope, options);
  return args.length ? Promise.all(args.map((argInfo, ix) => parseObjectArgInfo(argInfo, ix, scope, options?.argProcessor))) : undefined;
}
*/

/**
 * Parses an object arguments string into an array of ArgInfo.
 *
 * This function processes a parameter string and parses it according to specific rules, allowing for custom delimiters.
 * It can handle quotes, escape characters, and expressions within brackets. The parsing is designed to interpret
 * object literal strings from dynamic languages, such as JSON objects or similar custom formats.
 *
 * @param argsStr The string containing the arguments to be parsed.
 * @param scope An optional scope object used for further processing of the parsed arguments. Default is undefined.
 * @param options Parsing options, including:
 *   - delimiter: The character used to separate arguments. Default is ','.
 *   - argProcessor: An optional instance of ArgProcessor used for further processing of the parsed arguments.
 * @returns An array of parsed argument information, where each item contains a boolean indicating whether the argument is named,
 *          and the string representation of the argument.
 */
export function parseObjectArgumentsAsArgInfos(argsStr: string, scope?: Record<string, any>, options?: ParseObjectArgumentOptions) {
  const delimiter = options?.delimiter ?? ','
  const assigner = options?.assigner ?? '='
  // Stores the parsed argument information.
  let args: ArgInfo[] = [];
  // Indicates whether we are inside quotes.
  let inQuotes = false;
  // The type of current quote (either `"` or `'`).
  let quoteChar = '';
  // The current argument string being parsed.
  let arg = '';
  // Indicates whether the current argument is named.
  let isNamedArg = false;
  // Indicates whether we are inside brackets, and what type of bracket.
  let isInBracket = ''

  for (let i = 0; i < argsStr.length; i++) {
    const char = argsStr[i];

    // If the delimiter is encountered and we are not inside quotes or brackets, consider an argument complete.
    if (char === delimiter && !inQuotes && !isInBracket) {
      arg = arg.trim()
      if (arg.endsWith(':')) {arg += 'undefined'}
      args.push([isNamedArg, arg]);
      arg = '';
      isNamedArg = false
    } else if (char === '\\') {
      arg += char
      i++
      arg += argsStr[i]
    } else if ((char === '(' || char === '[') && !inQuotes) {
      isInBracket = char === '(' ? ')' : ']'
      arg += char
    } else if (isInBracket && char === isInBracket) {
      isInBracket = ''
      arg += char
    } else if (char === '{' && !inQuotes) {
      // Handles expressions or objects within curly braces.
      let j = i
      let _inQuotes = false
      let _quoteChar = ''
      let _char
      let _level = -1
      while (j < argsStr.length && ((_char = argsStr[j]) !== '}' || _inQuotes || _level > 0)) {
        if (_char === '\\') {
          j++
        } else if (_char === '{' && !_inQuotes) {
          _level++
        } else if (_char === '}' && !_inQuotes) {
          _level--
        } else if (_char === '"' || _char === '\'') {
          if (_inQuotes && char === _quoteChar) {
            _inQuotes = false;
          } else if (!_inQuotes) {
            _inQuotes = true;
            _quoteChar = char;
          }
        }
        j++
      }
      if (j < argsStr.length) {
         // Add the matched curly brace content to the argument string.
        arg += argsStr.substring(i, j+1)
        i = j
      }
    } else if (char === '"' || char === '\'') {
      if (inQuotes && char === quoteChar) {
        inQuotes = false;
      } else if (!inQuotes) {
        inQuotes = true;
        quoteChar = char;
      }
      arg += char
    } else if (char === assigner && !inQuotes && !isNamedArg && /^[\p{L}\p{N}_ ]+$/u.test(arg)) {
      // Handles the assignment operator.
      // Convert the equal sign to a colon to match internal handling logic.
      arg += ':'
      isNamedArg = true
    } else {
      arg += char
    }
  }

  // the last arg
  if (arg) {
    arg = arg.trim()
    if (arg.endsWith(':')) {arg += 'undefined'}
    args.push([isNamedArg, arg]);
  }

  return args
}

export async function parseCommand(commandStr: string, scope?: Record<string, any>, options?: ParseObjectArgumentOptions): Promise<{ command: string, args?: Record<string, any> }|undefined> {
  const pattern = /^([^(]+)(?:\((.*)\))?$/;
  const match = commandStr.match(pattern);

  if (!match) {
    if (options?.raiseError) {throw new Error("Invalid command format")}
    return
  }

  const [, commandName, rawArgs] = match;
  let args: Record<string, any>|undefined;
  if (rawArgs) {
    args = await parseObjectArguments(rawArgs, scope, options);
  }

  return { command: commandName.trim(), args };
}

export interface ReplacePlacehoderOptions {
  startChar?: string|string[]
  endChar?: string|string[]
  placeholder?: string
  placehoders?: string[]
}

const defaultPlaceholderName = '__PlacEhoLdeR_'

/**
 * Replaces substrings in the given content with placeholders.
 *
 * @param content - The string content to process.
 * @param options - Optional configuration object with the following properties:
 *   - `startChar` - The starting character(s) of the substrings to replace. Can be a single character or an array of characters. Defaults to `["\"", "'"]`.
 *   - `endChar` - The ending character(s) of the substrings to replace. Can be a single character or an array of characters. Defaults to the value of `startChar`.
 *   - `placeholder` - The prefix for the placeholder names. Defaults to `defaultPlaceholderName`.
 *   - `placehoders` - An array of placeholders to use instead of generating new one.
 * @returns An array containing:
 *   - `content` - The modified content with placeholders.
 *   - `placehoders` - An array of the original substrings that were replaced.
 * @throws {Error} If the lengths of `startChar` and `endChar` are not the same.
 */
export function replaceWithPlaceholder(content: string, options?: ReplacePlacehoderOptions) {
  let start =options?.startChar ? (Array.isArray(options.startChar) ? options.startChar : [options.startChar]) : ['"', "'"]
  let end = options?.endChar ? (Array.isArray(options.endChar) ? options.endChar : [options.endChar]) : start
  if (start.length !== end.length) {
    throw new Error('start and end characters must have the same length')
  }
  const placeholder = options?.placeholder ?? defaultPlaceholderName
  const isSame = start.every((s, i) => s === end[i])

  const placehoders = options?.placehoders ?? []
  if (isSame) {
    start = start.map(c => '\\' + c)
    const regex = new RegExp(`(?<!\\\\)(${start.join('|')}).*?(?<!\\\\)\\1`)
    let match: RegExpMatchArray|null
    while ((match = regex.exec(content)) !== null) {
      const placeholderName = `${placeholder}${placehoders.length}`
      content = content.replace(match[0], placeholderName)
      placehoders.push(match[0])
    }
  } else {
    start = start.map(c => '\\' + c)
    end = end.map(c => '\\' + c)
    for (let i = 0; i < start.length; i++) {
      const regex = new RegExp(`(?<!\\\\)${start[i]}.*?(?<!\\\\)${end[i]}`)
      let match: RegExpMatchArray|null
      while ((match = regex.exec(content)) !== null) {
        const placeholderName = `${placeholder}${placehoders.length}`
        content = content.replace(match[0], placeholderName)
        placehoders.push(match[0])
      }
    }
  }

  return [ content, placehoders ] as [string, string[]]
}

/**
 * Restores the original substrings from placeholders in the given content.
 *
 * @param content - The string content containing placeholders to be restored.
 * @param placehoders - An array of the original substrings that were replaced by placeholders.
 * @param options - Optional configuration object with the following properties:
 *   - `placeholder` - The prefix for the placeholder names. Defaults to `__PlacEhoLdeR_`.
 * @returns The modified content with the original substrings restored.
 *
 * @example
 * ```typescript
 * const contentWithPlaceholders = "Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!";
 * const originalSubstrings = ["World", "the site"];
 * const restoredContent = restoreFromPlacehoders(contentWithPlaceholders, originalSubstrings);
 * console.log(restoredContent); // Output: "Hello World, welcome to the site!"
 * ```
 */
export function restoreFromPlacehoders(content: string, placehoders: string[], options?: ReplacePlacehoderOptions) {
  const placeholderName = options?.placeholder ?? defaultPlaceholderName
  return placehoders.reduce((acc, placeholder, i) => acc.replace(new RegExp(placeholderName+i, 'g'), placeholder), content)
}

const ParameterRegExp = "[a-zA-Z_$][a-zA-Z_\\d$]*"
const ParametersRegExp = `${ParameterRegExp}\\s*(,\\s*${ParameterRegExp})*`
const ArrowFunctionRegExp = new RegExp(`^\\s*(\\(\\s*\\)|${ParameterRegExp}|\\(${ParametersRegExp}\\))\\s*=>`);
// const ArrowFunctionRegExp = /^\s*(\(\)|[a-zA-Z_$][\w\d$]*|\(([a-zA-Z_$][\w\d$]*))(\s*,\s*([a-zA-Z_$][\w\d$]*))*\)\s*=>/;

function isArrowFunctionExpression(code: string) {
  return ArrowFunctionRegExp.test(code);
}

/*
function escapeSpecialChars(str: string) {
  // Build a map to store special characters and their corresponding escape sequences
  const escapeMap = {
      '\n': '\\n',
      '\r': '\\r',
      '\t': '\\t',
      '\b': '\\b',
      '\f': '\\f',
      '\\': '\\\\' // Backslash needs two backslashes to escape
  };

  // Use a regular expression to match special characters and escape them
  return str.replace(/\\?[\n\r\t\b\f\\]/g, (match) => {
    // Check if the character is already escaped
    if (match.startsWith('\\') && match.length > 1) {
        return match; // Return the already escaped character
    } else {
        return escapeMap[match]; // Escape the character
    }
  });
}
*/