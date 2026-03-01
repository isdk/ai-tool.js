import { describe, it, expect } from 'vitest';
import { parseObjectArguments, parseCommand, AIArgProcessor } from './index';

describe('command-parser', () => {
  describe('parseObjectArguments', () => {
    it('should parse basic arguments', async () => {
      const result = await parseObjectArguments('123, "hello", true, null');
      expect(result).toEqual([123, 'hello', true, null]);
    });

    it('should parse named arguments and NOT simplify them to single values', async () => {
      const result = await parseObjectArguments('name="John"');
      // Should return an object with the key, because it's NOT a positional-and-named match
      expect(result).toEqual({ name: 'John' });
    });

    it('should parse mixed named and positional arguments', async () => {
      const result = await parseObjectArguments('name="John", 30');
      // namedExcludePositional: true by default, so 30 is at index 0
      expect(result).toEqual({ name: 'John', 0: 30 });
    });

    it('should handle nested arrays (the bug fix)', async () => {
      const result = await parseObjectArguments('arr=[1, [2, 3]], val=5');
      expect(result.arr).toEqual([1, [2, 3]]);
      expect(result.val).toEqual(5);
    });

    it('should parse choice syntax with processor', async () => {
      const result = await parseObjectArguments('|plant|animal:2:separator=";"', undefined, { argProcessor: AIArgProcessor });
      expect(result).toEqual({
        choice: {
          items: ['plant', 'animal'],
          maxPick: 2,
          separator: ';'
        }
      });
    });

    it('should NOT parse choice syntax WITHOUT processor', async () => {
      const result = await parseObjectArguments('|plant|animal');
      // Should be treated as raw string or expression (which fails and returns string)
      expect(result).toBe('|plant|animal');
    });

    it('should parse templates WITH processor', async () => {
      const scope = { name: 'World' };
      const result = await parseObjectArguments('msg="Hello {{name}}"', scope, { argProcessor: AIArgProcessor });
      expect(result).toEqual({ msg: 'Hello World' });
    });

    it('should NOT parse templates WITHOUT processor', async () => {
      const scope = { name: 'World' };
      const result = await parseObjectArguments('msg="Hello {{name}}"', scope);
      // Returns the raw template string
      expect(result).toEqual({ msg: 'Hello {{name}}' });
    });

    it('should evaluate JS expressions', async () => {
      const result = await parseObjectArguments('val=(1 + 2) * 3, str="a" + "b"');
      expect(result.val).toBe(9);
      expect(result.str).toBe('ab');
    });

    it('should handle empty arguments', async () => {
      const result = await parseObjectArguments('a=1, , b=2');
      // namedExcludePositional: true, so empty arg is at index 0
      expect(result).toEqual({ a: 1, 0: undefined, b: 2 });
    });
  });
});
