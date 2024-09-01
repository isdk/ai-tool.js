import { PromptTemplate, type PromptTemplateOptions } from "./prompt";
import { filterValidFnScope, parseJsJson } from './parse-js-json'
import { get as getByPath } from "lodash-es";
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
  argProcessor?: ArgProcessor
  returnArrayOnly?: boolean
  templateFormat?: string
  templateData?: Record<string, any>
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

export function simplifyObjectArguments(args: any) {
  if (args) {
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
      const jsonStr = `{${_args.map((arg: string) => escapeSpecialChars(arg)).join(',')}}`
      result = parseJsJson(jsonStr, scope)
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
  if (!scope) {return}
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
  const data = {...scope, ...options?.templateData}

  const formatOpts: PromptTemplateOptions = {template: value, data }
  if (options?.templateFormat) {
    formatOpts.templateFormat = options.templateFormat
  }
  const content = await PromptTemplate.formatIf(formatOpts) as string
  if (content) {
    value = content
    return name + ':' + quoteStr(value)
  }
}

export async function AIArgProcessor(argInfo: ArgInfo, ix: number, scope?: Record<string, any>, options?: ParseObjectArgumentOptions) {
  let result = ChoiceArgProcessor(argInfo, ix, scope, options)
  if (!result) {
    result = await TemplateArgProcessor(argInfo, ix, scope, options)
  }
  return result
}

function isQuotedStr(s: string) {
  const c = s[0]
  return (c === '"' || c === "'") && s[s.length-1] === c
}

function isQuoted(s: string, pairs = ['""', "''", '{}']) {
  return pairs.some(pair => s[0] === pair[0] && s[s.length-1] === pair[1])
}

function wrapQuotes(strs: string[], quoteChar = '"') {
  // check the item whether already quoted or not
  return strs.map(str => {
    if (isQuotedStr(str)) {
      return str
    } else {
      return quoteChar + str + quoteChar
    }
  })
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
      if (isQuotedStr(arg)) {
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
  return isQuoted(arg) || !Number.isNaN(parseFloat(arg)) || JSKeywords.includes(arg) || isArrowFunctionExpression(arg)
}

async function getExpressionResult(arg: string, scope: any) {
  const fn = newFunction('async expression', [], `return ${arg};`, filterValidFnScope(scope))
  let result = await fn.call(this)
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

export async function parseObjectArgInfo(argInfo: ArgInfo, ix: number, scope?: Record<string, any>, options?: ParseObjectArgumentOptions) {
  const [isNamedArg, arg] = argInfo
  const argProcessor = options?.argProcessor
  if (typeof argProcessor === 'function') {
    const result = await argProcessor(argInfo, ix, scope, options)
    if (result) {return result}
  }
  if (isNamedArg) {
    const ix = arg.indexOf(':')
    const k = arg.slice(0, ix).trim()
    const v = arg.slice(ix+1).trim()
    if (!isNonQuotedArg(v) && (!scope || getByPath(scope, v) === undefined)) {
      return k + ':' + quoteStr(v)
    }
    if (!isArrowFunctionExpression(arg)) try {
      const result = await getExpressionResult.call(this, v, scope)
      return k+':'+ result
    } catch(e) {}

    return arg
  } else {
    const _arg = arg.trim()
    if (scope && getByPath(scope, _arg) !== undefined) {
      return ix+':'+_arg + ', "' + _arg +'":' + _arg
    } else if (isNonQuotedArg(_arg)) {
      return ix+':'+_arg
    } else {
      if (!isArrowFunctionExpression(arg)) try {
        const result = await getExpressionResult.call(this, _arg, scope)
        return ix+':'+ result
      } catch(e) {}

      return ix+':'+ quoteStr(_arg)
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
    } else if (char === '=' && !inQuotes && !isNamedArg && /^[\p{L}\p{N}_ ]+$/u.test(arg)) {
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

export async function parseCommand(commandStr: string, scope?: Record<string, any>, options?: ParseObjectArgumentOptions): Promise<{ command: string, args?: Record<string, any> }> {
  const pattern = /^([^(]+)(?:\((.*)\))?$/;
  const match = commandStr.match(pattern);

  if (!match) {
      throw new Error("Invalid command format");
  }

  const [, commandName, rawArgs] = match;
  let args: Record<string, any>|undefined;
  if (rawArgs) {
    args = await parseObjectArguments(rawArgs, scope, options);
  }

  return { command: commandName.trim(), args };
}


const ArrowFunctionRegExp = /^\s*\(\)|[a-zA-Z_$][\w\d$]*|\(([a-zA-Z_$][\w\d$]*)(\s*,\s*([a-zA-Z_$][\w\d$]*))*\)\s*=>/;

function isArrowFunctionExpression(code: string) {
  return ArrowFunctionRegExp.test(code);
}

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
    if (match.startsWith('\\')) {
        return match; // Return the already escaped character
    } else {
        return escapeMap[match]; // Escape the character
    }
  });
}
