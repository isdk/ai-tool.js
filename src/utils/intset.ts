/**
 * Represents a set of integers using a bit field.
 * Each bit in the bit field represents an integer starting from 0,
 * where the flag value 0 represents the 0th bit, 1 represents the 1st bit, and so on.
 */
export class IntSet {

  static has(bitField: number, flag: number) {
    return (bitField & (1 << flag)) !== 0;
  }

  static add(bitField: number, flag: number) {
    return bitField | (1 << flag);
  }

  static delete(bitField: number, flag: number) {
    return bitField & ~(1 << flag);
  }

  // bitField: The internal bit field used to store set members.
  constructor(private bitField: number = 0) { }

  /**
   * Adds an element to the set.
   *
   * @param flag - The flag value representing the bit position to set.
   *              Note: the flag value 0 represents the 0th bit, and so on.
   */
  add(flag: number) {
    this.bitField |= (1 << flag);
    return this
  }

  /**
   * Removes an element from the set.
   *
   * @param flag - The flag value representing the bit position to set. 0 represents the 0th bit
   */
  delete(flag: number) {
    this.bitField &= ~(1 << flag);
    return this
  }

  /**
   * Determines whether an element is in the set.
   *
   * @param flag - The flag value representing the bit position to set. 0 represents the 0th bit
   * @returns true if the element is in the set; otherwise, false.
   */
  has(flag: number): boolean {
    return IntSet.has(this.bitField, flag);
  }

  /**
   * Clears all elements from the set.
   */
  clear() {
    this.bitField = 0;
    return this
  }

  valueOf() {
    return this.bitField
  }

  toString() {
    return this.bitField.toString()
  }

  toJSON() {
    return this.bitField
  }
}
