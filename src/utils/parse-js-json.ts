import { pick } from 'lodash-es'
import { newFunction } from 'util-ex'

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
export function parseJsJson(input: string, scope?: Record<string, any>) {
  if (scope) { scope = filterValidFnScope(scope) }
  if (scope) {
    const argNames = Object.keys(scope)
    if (argNames.length) {
      const argValues = Object.values(scope)
      // If a scope is provided, it is used as the global object for the function.
      return newFunction('expression', argNames, `return ${input}`)(...argValues)
    }
  }
  // Dynamically creates a function using newFunction that, when executed, returns the parsed JSON object.
  const fn = newFunction('expression', [], `return ${input}`)
  return fn()
}

const JsIdentifierRegex = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/
const isValidJsIdentifier = (str: string) => JsIdentifierRegex.test(str);

export function filterValidFnScope(scope?: Record<string, any>) {
  if (scope) {
    const argNames = Object.keys(scope).filter(name => isValidJsIdentifier(name) && scope![name] !== null)
    if (argNames.length) {
      scope = pick(scope, argNames)
      return scope
    }
  }
}
