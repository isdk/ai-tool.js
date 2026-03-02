import { describe, it, expect } from 'vitest';
import { parseObjectArguments, ObjectArgsToArgsInfo, parseCommand } from './index';

describe('Edge Cases and Complex Scenarios', () => {
  it('should handle extreme nesting of different types', async () => {
    const argsStr = 'arr=[{a: [1, (2+3)]}, 4], val=5';
    const result = await parseObjectArguments(argsStr);
    expect(result.arr).toEqual([{a: [1, 5]}, 4]);
    expect(result.val).toBe(5);
  });

  it('should handle complex escaped characters', async () => {
    // Input String: s1="\\\"", s2='it\'s "cool"'
    // In JS source, we need to escape the backslashes to represent the above input.
    const argsStr = 's1="\\\\\\"", s2=\'it\\\'s "cool"\'';
    const result = await parseObjectArguments(argsStr);

    // s1: "\\" (escaped \) + "\"" (escaped ") -> literal \"
    expect(result.s1).toBe('\\"');
    // s2: "it" + "\'s" (escaped ') + " \"cool\"" -> literal it's "cool"
    expect(result.s2).toBe("it's \"cool\"");
  });

  it('should handle consecutive delimiters and empty values', async () => {
    const argsStr = 'a=1, , , b=2';
    const result = await parseObjectArguments(argsStr);
    expect(result).toEqual({ a: 1, 1: undefined, 2: undefined, b: 2 });
  });

  it('should handle ObjectArgsToArgsInfo correctly', () => {
    const obj = { 0: 'a', 1: 'b', name: 'c' };
    const info = ObjectArgsToArgsInfo(obj);
    expect(info.args).toEqual(['a', 'b']);
    expect(info.namedArgs).toEqual({ name: 'c' });
  });

  it('should handle ObjectArgsToArgsInfo deduplication', () => {
    const obj = { 0: 'a', name: 'a' }; // name equals positional 0
    const info = ObjectArgsToArgsInfo(obj);
    expect(info.args).toEqual(['a']);
    expect(info.namedArgs).toEqual({}); // 'name' should be removed as it matches args[0]
  });

  it('should handle complex path expressions in scope', async () => {
    const scope = { a: { b: { c: 42 } } };
    const result = await parseObjectArguments('a.b.c', scope);
    expect(result).toBe(42);
  });

  it('should support parseCommand without args', async () => {
    const commandStr = 'test';
    let result = await parseCommand(commandStr);
    expect(result?.command).toBe('test');
    expect(result?.args).toBeUndefined();

    result = await parseCommand('test()');
    expect(result?.command).toBe('test');
    expect(result?.args).toBeUndefined();
  });
});
