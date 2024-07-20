import { IntSet } from './intset'; // Assuming IntSet is in the same directory

describe('IntSet', () => {
  let intSet: IntSet;

  beforeEach(() => {
    intSet = new IntSet();
  });

  describe('add()', () => {
    it('adds an element to the set', () => {
      intSet.add(1);
      expect(intSet.has(1)).toBe(true);
    });

    it('can add multiple elements', () => {
      intSet.add(1);
      intSet.add(2);
      expect(intSet.has(1)).toBe(true);
      expect(intSet.has(2)).toBe(true);
    });
  });

  describe('delete()', () => {
    it('removes an element from the set', () => {
      intSet.add(1);
      expect(intSet.has(1)).toBe(true);
      intSet.delete(1);
      expect(intSet.has(1)).toBe(false);
    });

    it('does not affect other elements when deleting one', () => {
      intSet.add(1);
      intSet.add(2);
      intSet.delete(1);
      expect(intSet.has(1)).toBe(false);
      expect(intSet.has(2)).toBe(true);
    });
  });

  describe('has()', () => {
    it('returns true for existing elements', () => {
      intSet.add(1);
      expect(intSet.has(1)).toBe(true);
    });

    it('returns false for non-existing elements', () => {
      expect(intSet.has(1)).toBe(false);
    });
  });

  describe('clear()', () => {
    it('removes all elements from the set', () => {
      intSet.add(1);
      expect(intSet.has(0)).toBe(false);
      expect(intSet.has(1)).toBe(true);
      intSet.add(2);
      expect(intSet.has(0)).toBe(false);
      expect(intSet.has(1)).toBe(true);
      expect(intSet.has(2)).toBe(true);
      intSet.clear();
      Array(8).forEach((_, i) => expect(intSet.has(i)).toBe(false))
    });
  });

  describe('multiple operations', () => {
    it('handles multiple add, delete, and clear operations', () => {
      intSet.add(0);
      expect(intSet.has(0)).toBe(true);
      expect(intSet.has(1)).toBe(false);
      intSet.add(1);
      expect(intSet.has(0)).toBe(true);
      expect(intSet.has(1)).toBe(true);
      intSet.delete(0);
      expect(intSet.has(0)).toBe(false);
      expect(intSet.has(1)).toBe(true);
      intSet.clear();
      Array(8).forEach((_, i) => expect(intSet.has(i)).toBe(false))
      intSet.add(3);
      Array(8).forEach((_, i) => expect(intSet.has(i)).toBe(i ===3 ? true:false))
    });
  });

  describe('others', () => {
    it('could valueOf', () => {
      intSet.add(1)
      const i = new IntSet(2) + (intSet as any)
      expect(i).toBe(4);
    });

    it('could toString', () => {
      intSet.add(1)
      const i = '' + intSet
      expect(i).toBe('2');
    });
    it('could json', () => {
      intSet.add(1)
      const i = JSON.stringify(intSet)
      expect(i).toBe('2');
    });
  });
});
