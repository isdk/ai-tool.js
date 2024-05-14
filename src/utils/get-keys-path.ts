function isObject(value: any): value is object {
  return !!value && value.constructor === Object
}

/**
 * Retrieves an array of all key paths as strings for a nested object or array.
 * @param value - The object or array to extract the paths from.
 * @returns - An array of strings containing all the key paths.
 *
 * @example
* ```
* const obj = { a: { b: { c: 1 } }, d: [0, { e: 2 }] };
* console.log(getKeysPath(obj)); // Output: ['a.b.c', 'd[0]', 'd[1].e']
* ```
*/
export function getKeysPath<TValue extends object>(value: TValue): string[] {
  if (!value) return []
  return getKeys(value, [], '')
}

/**
 * Retrieves an array of all key paths as strings for a nested object or array.
 * @param obj - The object or array to extract the paths from.
 * @param paths - An array representing the current path.
 * @param dot - The prefix used to join key path segments for object, default is '.'.
 * @returns - An array of strings containing all the key paths.
 *
 * @example
 * ```
 * const obj = { a: { b: { c: 1 } }, d: [0, { e: 2 }] };
 * console.log(getKeys(obj)); // Output: ['a.b.c', 'd[0]', 'd[1].e']
 * ```
 */
function getKeys(obj: any, paths: string[], dot = '.'): string[] {
  // Perform a depth-first search, traversing each key until the deepest leaf node
  if (Array.isArray(obj)) {
    return obj.flatMap((item, i) => getKeys(item, [...paths, `[${i}]`]))
  }

  if (isObject(obj)) {
    return Object.entries(obj).flatMap(([k, v]) =>
      getKeys(v, [...paths, dot + k])
    )
  }

  // Recursive traversal ends here, indicating the current node is a leaf node
  // At this point, `paths` contains the complete path to this leaf node's key
  // Concatenate the path parts and return the result as a string
  return [paths.join('')]
}
