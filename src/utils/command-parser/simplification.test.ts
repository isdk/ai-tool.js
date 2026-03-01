import { describe, it, expect } from 'vitest';
import { parseObjectArguments, ObjectArgsToArgsInfo, simplifyObjectArguments } from './index';

describe('command-parser new simplification logic', () => {
  describe('granular simplify options', () => {
    it('should respect singleValue: false', async () => {
      const result = await parseObjectArguments('123', undefined, { 
        simplify: { singleValue: false } 
      });
      // Should be [123] instead of 123
      expect(result).toEqual([123]);
    });

    it('should respect identicalPair: false', async () => {
      const scope = { id: 101 };
      // Using 'id' instead of 'id=101' to trigger idAsName (positional -> named mapping)
      const result = await parseObjectArguments('id', scope, { 
        simplify: { identicalPair: false } 
      });
      // Should be { 0: 101, id: 101 } instead of 101
      expect(result).toEqual({ 0: 101, id: 101 });
    });

    it('should respect purePositionalAsArray: false', async () => {
      const result = await parseObjectArguments('1, 2', undefined, { 
        simplify: { purePositionalAsArray: false } 
      });
      // Should be { 0: 1, 1: 2 } instead of [1, 2]
      expect(result).toEqual({ 0: 1, 1: 2 });
    });
  });

  describe('mode: array', () => {
    it('should return array and attach kvArgs as non-enumerable', async () => {
      const result = await parseObjectArguments('123, name="John"', undefined, { 
        simplify: { mode: 'array' } 
      });
      
      expect(Array.isArray(result)).toBe(true);
      expect(result).toEqual([123]);
      expect(result.kvArgs).toEqual({ name: 'John' });
      
      // Verify non-enumerable
      expect(Object.keys(result)).not.toContain('kvArgs');
    });

    it('should include positional index if idAsName is true (default)', async () => {
        const scope = { id: 101 };
        const result = await parseObjectArguments('id', scope, { 
          simplify: { mode: 'array' } 
        });
        expect(result).toEqual([101]);
        expect(result.kvArgs).toEqual({ id: 101 });
    });
  });

  describe('mode: object', () => {
    it('should return merged object', async () => {
      const result = await parseObjectArguments('123, name="John"', undefined, { 
        simplify: { mode: 'object' } 
      });
      expect(result).toEqual({ 0: 123, name: 'John' });
    });
  });

  describe('mode: map', () => {
    it('should return { args, kvArgs }', async () => {
      const result = await parseObjectArguments('123, name="John"', undefined, { 
        simplify: { mode: 'map' } 
      });
      expect(result).toEqual({
        args: [123],
        kvArgs: { name: 'John' }
      });
    });
  });

  describe('mode: array edge cases', () => {
    it('should handle sparse arrays', async () => {
      const result = await parseObjectArguments('123, , 456', undefined, { 
        simplify: { mode: 'array' } 
      });
      expect(result.length).toBe(3);
      expect(result[0]).toBe(123);
      expect(result[1]).toBeUndefined();
      expect(result[2]).toBe(456);
    });

    it('should handle empty arguments', async () => {
      const result = await parseObjectArguments('', undefined, { 
        simplify: { mode: 'array' } 
      });
      // parseObjectArguments returns undefined for empty string before simplifyResult
      expect(result).toBeUndefined();
    });
  });

  describe('ignoreIndexNamed option', () => {
    it('should exclude positional index if it is already named and ignoreIndexNamed is true', async () => {
      const scope = { id: 101 };
      const result = await parseObjectArguments('id', scope, { 
        ignoreIndexNamed: true,
        simplify: { mode: 'object' }
      });
      // 0: 101 should be ignored because 'id' (which is at index 0) is already in kvArgs
      expect(result).toEqual({ id: 101 });
      expect(result[0]).toBeUndefined();
    });

    it('should NOT exclude positional index if ignoreIndexNamed is false', async () => {
      const scope = { id: 101 };
      const result = await parseObjectArguments('id', scope, { 
        ignoreIndexNamed: false,
        simplify: { mode: 'object' }
      });
      expect(result).toEqual({ 0: 101, id: 101 });
    });
  });

  describe('Restoration functions (ObjectArgsToArgsInfo)', () => {
    it('should restore single value', () => {
      const info = ObjectArgsToArgsInfo(123);
      expect(info).toEqual({ args: [123] });
    });

    it('should restore pure array', () => {
      const info = ObjectArgsToArgsInfo([1, 2]);
      expect(info).toEqual({ args: [1, 2] });
    });

    it('should restore merged object with identical pairs', () => {
      // simulate the object before simplification: {0: 101, id: 101}
      const info = ObjectArgsToArgsInfo({ 0: 101, id: 101 });
      expect(info).toEqual({ args: [101], kvArgs: {} });
    });

    it('should restore complex mixed object', () => {
      const info = ObjectArgsToArgsInfo({ 0: 'pos0', name: 'John', age: 30 });
      expect(info).toEqual({ 
        args: ['pos0'], 
        kvArgs: { name: 'John', age: 30 } 
      });
    });

    it('should restore object with only named arguments', () => {
        const info = ObjectArgsToArgsInfo({ name: 'John' });
        expect(info).toEqual({ args: [], kvArgs: { name: 'John' } });
    });
  });

  describe('simplifyObjectArguments (Legacy utility)', () => {
    it('should simplify single entry object', () => {
      expect(simplifyObjectArguments({ 0: 123 })).toBe(123);
    });

    it('should simplify identical pair object', () => {
      expect(simplifyObjectArguments({ 0: 101, id: 101 })).toBe(101);
    });

    it('should convert pure indexed object to array', () => {
      expect(simplifyObjectArguments({ 0: 'a', 1: 'b' })).toEqual(['a', 'b']);
    });
  });

  describe('default auto behavior (regression and fixes)', () => {
    it('should simplify single value', async () => {
      const result = await parseObjectArguments('123');
      expect(result).toBe(123);
    });

    it('should NOT simplify named argument "id=101" to single value by default', async () => {
      const result = await parseObjectArguments('id=101');
      // Because id=101 is named and doesn't occupy positional 0 by default
      expect(result).toEqual({ id: 101 });
    });

    it('should simplify identical pair from positional identifier', async () => {
      const scope = { id: 101 };
      const result = await parseObjectArguments('id', scope);
      // id (positional) -> 101, id (named) -> 101. Match!
      expect(result).toBe(101);
    });

    it('should simplify pure positional to array', async () => {
      const result = await parseObjectArguments('1, 2');
      expect(result).toEqual([1, 2]);
    });

    it('should return object for mixed arguments', async () => {
      const result = await parseObjectArguments('123, name="John"');
      expect(result).toEqual({ 0: 123, name: 'John' });
    });
  });
});
