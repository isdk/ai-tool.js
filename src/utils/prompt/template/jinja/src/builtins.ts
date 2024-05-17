export function randomInt(to: number, from: number = 0) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

/**
 * Selects an element from the given object, array, or string.
 * @param obj Can be an object, array, or string to select from.
 * @param index Optional, specifies the index or key to select. Negative values indicate indices from the end.
 * @returns The selected element, or `undefined` if the input is empty or not provided.
 *
 * @example
 * // Selecting an element from an array
 * const array = ['apple', 'banana', 'cherry']
 * console.log(select(array)) // Random element from the array
 * console.log(select(array, 1)) // Second element
 * console.log(select(array, -1)) // Last element
 *
 * @example
 * // Selecting a property from an object
 * const obj = { fruit1: 'apple', fruit2: 'banana', fruit3: 'cherry' }
 * console.log(select(obj)) // Random property from the object
 * console.log(select(obj, 'fruit2')) // Property with key 'fruit2'
 *
 * @example
 * // Selecting a character from a string
 * const str = 'hello'
 * console.log(select(str)) // Random character from the string
 * console.log(select(str, 1)) // Second character
 * console.log(select(str, -1)) // Last character
 */
export function select(obj: any|any[], index?: number|string) {
  if (Array.isArray(obj) || typeof obj === 'string') {
    if (index === undefined) {
      index = randomInt(obj.length - 1)
    } else if (typeof index === 'string') {
      index = parseInt(index)
    }
    // index less 0 means from the end
    if (index < 0) {
      index = obj.length + index
    }
    return obj[index]
  } else if (obj && typeof obj === 'object') {
    if (index === undefined) {
      const keys = Object.keys(obj)
      index = keys[randomInt(keys.length - 1)]
    }
    return obj[index]
  }
}

export const builtins = {
  randomInt,
  select,
}
