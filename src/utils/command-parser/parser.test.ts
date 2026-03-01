import { describe, it, expect, vi } from 'vitest';
import { Parser } from './parser';
import { Lexer } from './lexer';

// Mock evaluator to test Parser structural logic in isolation
vi.mock('./evaluator', () => ({
  evaluate: async (ctx: any) => ctx.rawValue
}));

describe('Parser (Structural Logic)', () => {
  it('should split top-level arguments correctly', async () => {
    const lexer = new Lexer('1, 2, 3');
    const parser = new Parser(lexer);
    const result = await parser.parse();
    expect(result.args).toEqual(['1', '2', '3']);
  });

  it('should handle balanced brackets (nested structures)', async () => {
    const lexer = new Lexer('arr=[1, 2], obj={a: 1, b: 2}');
    const parser = new Parser(lexer);
    const result = await parser.parse();
    // Reassembled RAW value should preserve exact spaces from input slice
    expect(result.kvArgs.arr).toBe('[1, 2]');
    expect(result.kvArgs.obj).toBe('{a: 1, b: 2}');
    // Named arguments are excluded from positional args by default
    expect(result.args).toEqual([]);
  });

  it('should correctly identify named arguments and auto-name positional identifiers', async () => {
    const lexer = new Lexer('key="value", posArg');
    const parser = new Parser(lexer);
    const result = await parser.parse();
    // name = key, value = original slice including quotes
    expect(result.kvArgs.key).toBe('"value"');
    
    // posArg is positional, but also an identifier, so it maps to kvArgs too
    expect(result.args[0]).toBe('posArg');
    expect(result.kvArgs.posArg).toBe('posArg');
    
    // Total positional args: 1 (key was excluded)
    expect(result.args.length).toBe(1);
  });

  it('should handle empty arguments', async () => {
    const lexer = new Lexer('a, , b');
    const parser = new Parser(lexer);
    const result = await parser.parse();
    // 'a' and 'b' are IDs, so they also appear in kvArgs
    expect(result.args).toEqual(['a', undefined, 'b']);
    expect(result.kvArgs.a).toBe('a');
    expect(result.kvArgs.b).toBe('b');
  });

  it('should handle complex nested structures', async () => {
    const lexer = new Lexer('a=(1 + (2, 3)), b=[{c: [1, 2]}, 3]');
    const parser = new Parser(lexer);
    const result = await parser.parse();
    // Original slice preserves inner spaces
    expect(result.kvArgs.a).toBe('(1 + (2, 3))');
    expect(result.kvArgs.b).toBe('[{c: [1, 2]}, 3]');
    expect(result.args).toEqual([]);
  });
});
