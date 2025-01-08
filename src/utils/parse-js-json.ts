import { pick } from 'lodash-es'
import { newFunction } from 'util-ex'
import { parseObjectArguments } from './parse-command'

/**
 * Parses a JavaScript string into a JSON object.
 * @param input The string to be parsed into JSON.
 * @returns The parsed JSON object. If parsing fails, undefined is returned.
 *
 * @example
 * // This will return a JSON object with key 'name' and value 'John'.
 * const jsonString = '({name: "John"})';
 * const json = parseJsJson(jsonString);
 * console.log(json); // { name: 'John' }
 */
export async function parseJsJson(input: string, scope?: Record<string, any>) {
  if (scope) { scope = filterValidFnScope(scope) }
  if (scope) {
    input = input.trim()
    if (input.startsWith('{') && input.endsWith('}')) {
      const result = await parseObjectArguments(input.slice(1, -1), scope,{assigner: ':', ignoreIndexNamed: true})
      return result
    }
  }
  return parseJsJsonSimpleSync(input, scope)
}

export function parseJsJsonSimpleSync(input: string, scope?: Record<string, any>) {
  if (scope) { scope = filterValidFnScope(scope) }
  if (scope) {
    const argNames = Object.keys(scope)
    if (argNames.length) {
      const argValues = Object.values(scope)
      // If a scope is provided, it is used as the global object for the function.
      let c = 0
      while(c++ < 100) try {
        return newFunction('expression', argNames, `return ${input}`)(...argValues)
      } catch(err) {
        if (err instanceof ReferenceError) {
          const match = /(.+)\s+is not defined/.exec(err.message)
          if (!match) { throw err }
          argNames.push(match[1])
          argValues.push(undefined)
        } else {
          throw err
        }
      }
    }
  }
  // Dynamically creates a function using newFunction that, when executed, returns the parsed JSON object.
  const fn = newFunction('expression', [], `return ${input}`)
  return fn()
}

const JsIdentifierRegex = /^[a-zA-Z_$][0-9a-zA-Z_$.]*$/
const isValidJsIdentifier = (str: string) => JsIdentifierRegex.test(str);

export function filterValidFnScope(scope?: Record<string, any>) {
  if (scope) {
    const keys = Object.keys(scope)
    const len = keys.length
    const argNames = keys.filter(name => isValidJsIdentifier(name) && scope![name] !== null)
    if (len === argNames.length) {
      return scope
    } else if (argNames.length) {
      scope = pick(scope, argNames)
      return scope
    }
  }
}
