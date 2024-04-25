/**
 * Retrieves all string keys from the given enumeration(number).
 *
 * @param enumType - The enumeration type with numeric values for which to retrieve keys.
 * @returns An array containing all string keys of the specified enumeration.
 */
export function getAllEnumKeys<T extends object>(enumType: T): Array<keyof typeof enumType> {
  return Object.keys(enumType).filter(k => Number.isNaN(Number(k))) as Array<keyof typeof enumType>;
}
