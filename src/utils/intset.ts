/**
 * Represents a set of integers using a bit field.
 * Each bit in the bit field represents an integer starting from 0,
 * where the flag value 0 represents the 0th bit, 1 represents the 1st bit, and so on.
 */
export class IntSet {
  /**
   * The internal bit field used to store set members.
   * @private
   */
  bitField: number = 0;

  /**
   * Adds an element to the set.
   *
   * @param flag - The flag value representing the bit position to set.
   *              Note: the flag value 0 represents the 0th bit, and so on.
   */
  add(flag: number): void {
    this.bitField |= (1 << flag);
  }

  /**
   * Removes an element from the set.
   *
   * @param flag - The flag value representing the bit position to set. 0 represents the 0th bit
   */
  delete(flag: number): void {
    this.bitField &= ~(1 << flag);
  }

  /**
   * Determines whether an element is in the set.
   *
   * @param flag - The flag value representing the bit position to set. 0 represents the 0th bit
   * @returns true if the element is in the set; otherwise, false.
   */
  has(flag: number): boolean {
    return (this.bitField & (1 << flag)) !== 0;
  }

  /**
   * Clears all elements from the set.
   */
  clear(): void {
    this.bitField = 0;
  }
}
