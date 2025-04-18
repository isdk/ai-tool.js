import { mergeWith } from 'lodash-es'

const regexInheritMerge = /^\s*@inheritMerge\s*(?:[(]\s*(?<arg>\.start|\.end|false)[)])?/

/**
 * Merges multiple source objects into the target object with a custom merging strategy.
 *
 * @param target The target object, whose properties will be overridden or merged by source object values.
 * @param source Source objects, whose properties will be merged into the target object.
 * @returns The merged target object.
 *
 * This function performs deep merging using the following rules:
 * - For non-array properties, standard deep merging is applied.
 * - For arrays, a custom merging strategy is used based on the first element of the target array:
 *   - **`@inheritMerge(.start)`** or no marker: Prepend the target array to the source array. defaults to this.
 *   - **`@inheritMerge(.end)`**: Append the source array to the end of the target array.
 *   - **`@inheritMerge(false)`**, **`@inheritMerge(no)`**, or **`@inheritMerge(not)`**: Replace the target array with the source array.
 *
 * @example
 * ```typescript
 * // Example 1: Default behavior (.start)
 * const target = {
 *   items: ['item1', 'item2']
 * };
 * const source = {
 *   items: ['item3', 'item4']
 * };
 * console.log(defaultsWithConcat(target, source).items);
 * // Output: ['item3', 'item4', 'item1', 'item2']
 *
 * // Example 2: Append behavior (.end)
 * const target = {
 *   items: ['@inheritMerge(.end)', 'item1', 'item2']
 * };
 * const source = {
 *   items: ['item3', 'item4']
 * };
 * console.log(defaultsWithConcat(target, source).items);
 * // Output: ['item1', 'item2', 'item3', 'item4']
 *
 * // Example 3: Replace behavior (false)
 * const target = {
 *   items: ['@inheritMerge(false)', 'item1', 'item2']
 * };
 * const source = {
 *   items: ['item3', 'item4']
 * };
 * console.log(defaultsWithConcat(target, source).items);
 * // Output: ['item3', 'item4']
 * ```
 */
export function defaultsWithConcat(target: any, ...source: any[]) {
  return mergeWith(target, ...source, (objValue, srcValue) => {
    if (Array.isArray(objValue) && Array.isArray(srcValue)) {
      return mergeArray(objValue, srcValue)
    } else if (objValue !== undefined && typeof objValue !== 'object') {
      return objValue
    }
  })
}

/**
 * Merges two arrays based on a custom strategy defined by the first element of the target array.
 *
 * The first element of the target array can contain a special marker (`@inheritMerge`) to control the merging behavior:
 * - `@inheritMerge(false)` or `@inheritMerge(no)` or `@inheritMerge(not)`: Replace the target array with the source array.
 * - `@inheritMerge(.end)`: Append the source array to the end of the target array.
 * - `@inheritMerge(.start)` or no marker: Prepend the target array to the source array.
 *
 * @param targetArr The target array to be merged.
 * @param srcArr The source array to merge into the target array.
 * @returns The merged array based on the specified strategy.
 *
 * @example
 * ```typescript
 * // Example 1: Default behavior (.start)
 * const target = ['item1', 'item2'];
 * const source = ['item3', 'item4'];
 * console.log(mergeArray(target, source)); // Output: ['item3', 'item4', 'item1', 'item2']
 *
 * // Example 2: Append behavior (.end)
 * const target = ['@inheritMerge(.end)', 'item1', 'item2'];
 * const source = ['item3', 'item4'];
 * console.log(mergeArray(target, source)); // Output: ['item1', 'item2', 'item3', 'item4']
 *
 * // Example 3: Replace behavior (false)
 * const target = ['@inheritMerge(false)', 'item1', 'item2'];
 * const source = ['item3', 'item4'];
 * console.log(mergeArray(target, source)); // Output: ['item3', 'item4']
 * ```
 */
export function mergeArray(targetArr: any[], srcArr: any[]) {
  const firstLine = targetArr[0]
  let mergedWay: string = '.start'
  // const hasInitStatement = targetArr.some((line) => typeof line === 'string' && line.trim() === '$initDone')
  // if (hasInitStatement) {
  //   // filter out the $initDone statement for srcArr
  //   srcArr = srcArr.filter((line) => typeof line !== 'string' || line.trim() !== '$initDone')
  // }

  if (typeof firstLine === 'string') {
    const match = regexInheritMerge.exec(firstLine)
    if (match) {
      if (match.groups?.arg) mergedWay = match.groups?.arg
      targetArr = targetArr.slice(1)
    }
  } else if (firstLine && typeof firstLine === 'object' && firstLine.hasOwnProperty('@inheritMerge')) {
    mergedWay = firstLine['@inheritMerge'] || mergedWay
    targetArr = targetArr.slice(1)
  }
  if (mergedWay) {mergedWay = mergedWay.toLowerCase()}
  if (mergedWay === 'false' || mergedWay === 'no' || mergedWay === 'not') {
    targetArr = srcArr
  } else if (mergedWay === '.end') {
    targetArr = targetArr.concat(srcArr)
  } else { // defaults to .start
    targetArr = srcArr.concat(targetArr)
  }

  return targetArr
}
