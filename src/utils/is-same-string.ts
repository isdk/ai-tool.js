import { xxhash } from "./hash"

/**
 * Compares two strings to check if they are the same.
 *
 * This function first checks if the strings have the same length. If they do, it compares the strings character by character.
 * If the strings are not the same length, it returns false immediately.
 *
 * @param str1 - The first string to compare.
 * @param str2 - The second string to compare.
 * @returns A boolean indicating whether the two strings are the same.
 */
export function isSameString(str1: string, str2: string): boolean {
  let result = str1.length === str2.length
  if (result) {
    const hash1 = xxhash(str1)
    const hash2 = xxhash(str2)
    result = hash1.every((value, index) => value === hash2[index])
  }
  return result
}
