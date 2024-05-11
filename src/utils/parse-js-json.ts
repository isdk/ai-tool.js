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
export function parseJsJson(input: string) {
  // Dynamically creates a function using newFunction that, when executed, returns the parsed JSON object.
  const fn = newFunction('expression', [], `return ${input}`)
  return fn()
}
