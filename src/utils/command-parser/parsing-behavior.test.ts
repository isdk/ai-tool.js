import { describe, it, expect } from 'vitest';
import { parseObjectArguments, parseCommand } from './index';
import { PROCESSOR_RESULT } from './types';

describe('New Logic Implementation', () => {
  describe('idAsName and Simplification', () => {
    it('should map positional identifier to name and simplify to single value', async () => {
      const scope = { user: 'John' };
      // user is an identifier, so it maps to 0: 'John' and user: 'John'
      // Since they are equal and there are only 2 entries, it simplifies to 'John'
      const result = await parseObjectArguments('user', scope);
      expect(result).toBe('John');
    });

    it('should NOT map if idAsName is false', async () => {
      const scope = { user: 'John' };
      const result = await parseObjectArguments('user', scope, { idAsName: false });
      // Only positional 0 exists
      expect(result).toBe('John');
      // If we use simplify=false to see the structure:
      const raw = await parseObjectArguments('user', scope, { idAsName: false, simplify: false });
      expect(raw).toEqual({ 0: 'John' });
    });
  });

  describe('namedExcludePositional', () => {
    it('should NOT count named arguments in positional index', async () => {
      const result = await parseObjectArguments('k1="v1", "pos1"', undefined, { namedExcludePositional: true, simplify: false });
      expect(result).toEqual({ k1: 'v1', 0: 'pos1' });
    });

    it('should count named arguments if namedExcludePositional is false', async () => {
      const result = await parseObjectArguments('k1="v1", "pos1"', undefined, { namedExcludePositional: false, simplify: false });
      // k1 is at index 0, pos1 is at index 1
      expect(result).toEqual({ k1: 'v1', 0: 'v1', 1: 'pos1' });
    });
  });

  describe('preserveUnresolvedName', () => {
    it('should return undefined for unresolved name by default', async () => {
      const result = await parseObjectArguments('noSuchValue');
      expect(result).toBeUndefined();
    });

    it('should return raw string for unresolved name if preserveUnresolvedName is true', async () => {
      const result = await parseObjectArguments('noSuchValue', undefined, { preserveUnresolvedName: true });
      expect(result).toBe('noSuchValue');
    });

    it('should handle complex unresolved expressions', async () => {
      const result = await parseObjectArguments('foo - bar', undefined, { preserveUnresolvedName: true });
      expect(result).toBe('foo - bar');
    });

    it('should still evaluate valid expressions when others are unresolved', async () => {
      const scope = { a: 10 };
      const result = await parseObjectArguments('a + 5, unresolved', scope, { preserveUnresolvedName: true });
      // unresolved should NOT be in namedArgs via idAsName because it's an unresolved fallback
      // Since no named arguments exist, it simplifies to an array
      expect(result).toEqual([ 15, 'unresolved' ]);
    });
  });

  describe('Symbol Protocol for Processors', () => {
    it('should handle PROCESSOR_RESULT with [value, name]', async () => {
      const mockProcessor = async (ctx: any) => {
        return {
          [PROCESSOR_RESULT]: ['customValue', 'customKey']
        };
      };
      // 'anything' is an ID, but since processor suggests 'customKey', it should skip idAsName
      const result = await parseObjectArguments('anything', undefined, { argProcessor: mockProcessor, simplify: false });
      expect(result).toEqual({ customKey: undefined });
      expect(result.anything).toBeUndefined(); // Verification of priority
    });

    it('should handle PROCESSOR_RESULT with [value, name] with preserveUnresolvedName', async () => {
      const mockProcessor = async (ctx: any) => {
        return {
          [PROCESSOR_RESULT]: ['customValue', 'customKey']
        };
      };
      // 'anything' is an ID, but since processor suggests 'customKey', it should skip idAsName
      const result = await parseObjectArguments('anything', undefined, { argProcessor: mockProcessor, simplify: false, preserveUnresolvedName: true });
      expect(result).toEqual({ customKey: 'customValue' });
      expect(result.anything).toBeUndefined(); // Verification of priority
    });
  });

  describe('Strict simplifyResult', () => {
    it('should simplify {0: val, key: val} to val', async () => {
      const result = await parseObjectArguments('age', { age: 25 });
      expect(result).toBe(25);
    });

    it('should NOT simplify if values are different', async () => {
      // Different named arguments should not be simplified to single value
      const result = await parseObjectArguments('k1=1, k2=2', undefined, { simplify: true });
      expect(result).toEqual({ k1: 1, k2: 2 });
    });

    it('should NOT simplify if positional and named values are different', async () => {
      // Positional 0 is 10, but name "age" is 20 -> Not simplified
      const result = await parseObjectArguments('10, age=20', undefined, { simplify: true });
      expect(result).toEqual({ 0: 10, age: 20 });
    });

    it('should NOT simplify if there are more than 2 entries', async () => {
      const result = await parseObjectArguments('age, name="John"', { age: 25 });
      // { 0: 25, age: 25, name: 'John' } -> 3 entries
      expect(result).toEqual({ 0: 25, age: 25, name: 'John' });
    });
  });

  describe('String Unquoting and Escaping', () => {
    it('should handle escaped quotes in strings', async () => {
      const result = await parseObjectArguments('"a "quoted" s"');
      expect(result).toBe('a "quoted" s');
    });

    it('should handle backslashes in strings', async () => {
      const result = await parseObjectArguments('"c:\windows"');
      expect(result).toBe('c:\windows');
    });
  });
});
