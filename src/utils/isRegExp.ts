import {isRegExp as _isRegExp, isRegExpStr } from 'util-ex'

/**
 * Checks if the provided value is a regular expression.
 *
 * This function determines whether the given value is a regular expression
 * by using both string-based and object-based validation methods.
 *
 * @param value - The value to be checked for being a regular expression
 * @returns `true` if the value is a regular expression, otherwise `false`
 *
 * @example
 * ```typescript
 * isRegExp(/abc/); // true
 * isRegExp(new RegExp('abc')); // true
 * isRegExp('/abc/'); // true
 * isRegExp('abc'); // false
 * isRegExp(123); // false
 * ```
 */
export function isRegExp(value: any) {
  const result = isRegExpStr(value)
  return result || _isRegExp(value)
}
