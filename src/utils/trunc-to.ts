
/**
 * Truncates(Round) a number to a specified number of decimal places.
 *
 * @param {number} n - The number to truncate.
 * @param {number} dec - The number of decimal places to truncate to (default is 2).
 * @param {number} up - The amount to round up by before truncating (default is 0.5).
 *
 * @example
 * // returns 1.235
 * truncTo(1.2345, 3)
 *
 * @example
 * // returns 1.24
 * truncTo(1.2345, 2, 0.6)
 *
 * @returns {number} The truncated number.
 */
export function truncTo(n: number, dec=2, up=0.5) {
  const d = 10**dec;
  return Math.trunc((n + Number.EPSILON + up/d) * d) / d;
}
