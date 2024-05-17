import { select } from '../src/builtins'

describe('Jinjia builtins functions', () => {
  describe('select function', () => {
    test('selects a random element from an array', () => {
      const fruits = ['apple', 'banana', 'cherry'];
      const result = select(fruits);
      expect(fruits).toContain(result);
    });

    test('selects a specific indexed element from an array', () => {
      const fruits = ['apple', 'banana', 'cherry'];
      expect(select(fruits, 1)).toBe('banana');
    });

    test('selects the last element from an array using negative index', () => {
      const fruits = ['apple', 'banana', 'cherry'];
      expect(select(fruits, -1)).toBe('cherry');
    });

    test('selects a random property from an object', () => {
      const fruitBasket = { fruit1: 'apple', fruit2: 'banana', fruit3: 'cherry' };
      const values = Object.values(fruitBasket);
      const result = select(fruitBasket);
      expect(values).toContain(result);
    });

    test('selects a specific property from an object', () => {
      const fruitBasket = { fruit1: 'apple', fruit2: 'banana', fruit3: 'cherry' };
      expect(select(fruitBasket, 'fruit2')).toEqual('banana');
    });

    test('selects a random character from a string', () => {
      const str = 'hello';
      const result = select(str);
      expect(str).toContain(result);
    });

    test('selects a specific indexed character from a string', () => {
      const str = 'hello';
      expect(select(str, 1)).toBe('e');
    });

    test('selects the last character from a string using negative index', () => {
      const str = 'hello';
      expect(select(str, -1)).toBe('o');
    });

    // It's good practice to also test edge cases, such as when the input is not an array/object/string
    test('returns undefined for unsupported types', () => {
      expect(select(123)).toBeUndefined();
      expect(select(true)).toBeUndefined();
      expect(select(null)).toBeUndefined();
      expect(select(undefined)).toBeUndefined();
    });
  });
})