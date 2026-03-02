import { describe, it, expect } from 'vitest';
import { parseObjectArguments, parseCommand, AIArgProcessor } from './index';

describe('command-CmdArgParser', () => {
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

  describe('Unicode and Special Identifiers', () => {
    it('should support $中文 as a parameter name', async () => {
      const result = await parseObjectArguments('$参数="值", $another="value"');
      expect(result).toEqual({
        '$参数': '值',
        '$another': 'value'
      });
    });

    it('should support 中文 (without $) as a parameter name', async () => {
      const result = await parseObjectArguments('中文="值"');
      expect(result).toEqual({ '中文': '值' });
    });

    it('should support Unicode characters in identifiers (idAsName)', async () => {
      const scope = { '$变量': '实际值', '中文变量': 123 };
      const result1 = await parseObjectArguments('$变量', scope);
      expect(result1).toBe('实际值');

      const result2 = await parseObjectArguments('中文变量', scope);
      expect(result2).toBe(123);
    });

    it('should support mixed Unicode identifiers in parseCommand', async () => {
      const commandStr = 'test($参数="值", 中文="another")';
      const result = await parseCommand(commandStr);
      expect(result?.command).toBe('test');
      expect(result?.args).toEqual({
        '$参数': '值',
        '中文': 'another'
      });
    });
  });
});
