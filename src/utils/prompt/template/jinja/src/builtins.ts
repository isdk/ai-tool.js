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

export function tojson(value: any, indent?: number|{indent?: number, depth?: number}, depth?: number) {
  if (indent && typeof indent === 'object') {
    if (indent.depth) {depth = indent.depth}
    indent = indent.indent
  }
  // return JSON.stringify(value, null, indent)
  return toJSON(value, indent, depth)
}

export const builtins = {
  randomInt,
  select,
  tojson,
}


// modified from https://github.com/huggingface/huggingface.js/blob/master/packages/jinja/src/runtime.ts
/**
 * Helper function to convert runtime values to JSON
 * @param input The runtime value to convert
 * @param [indent] The number of spaces to indent, or null for no indentation
 * @param [depth] The current depth of the object
 * @returns JSON representation of the input
 */
function toJSON(input: any, indent?: number | null, depth?: number): string {
  let result = ''
	const currentDepth = depth ?? 0;
  if (input === null) {
    result = 'null'
  } else {
    const type = typeof input;
    switch (type) {
      case "undefined": // JSON.stringify(undefined) -> undefined
        result = "null";
      case "number":
      case "string":
      case "boolean":
        return JSON.stringify(input);
      case "object": {
        const indentValue = indent ? " ".repeat(indent) : "";
        const basePadding = "\n" + indentValue.repeat(currentDepth);
        const childrenPadding = basePadding + indentValue; // Depth + 1

        if (Array.isArray(input)) {
          const core = input.map((x) => toJSON(x, indent, currentDepth + 1));
          return indent
            ? `[${childrenPadding}${core.join(`,${childrenPadding}`)}${basePadding}]`
            : `[${core.join(", ")}]`;
        } else {
          // ObjectValue
          const core = Array.from(Object.entries(input)).map(([key, value]) => {
            const v = `"${key}": ${toJSON(value, indent, currentDepth + 1)}`;
            return indent ? `${childrenPadding}${v}` : v;
          });
          return indent ? `{${core.join(",")}${basePadding}}` : `{${core.join(", ")}}`;
        }
      }
      default:
        // e.g., FunctionValue
        throw new Error(`Cannot convert to JSON: ${type}`);
    }
  }
  return result
}
