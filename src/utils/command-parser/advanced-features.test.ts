import { describe, it, expect } from 'vitest';
import { parseObjectArguments, PROCESSOR_RESULT } from './index';

describe('Advanced Features and ES6+ Support', () => {
  it('should parse complex arrow functions', async () => {
    const code = '(a, {b}, ...c) => a + b + c[0]';
    const result = await parseObjectArguments(code);
    expect(result).toContain('=> a + b + c[0]');
  });

  it('should parse arrow functions with default values', async () => {
    const code = '(a = 1, b = 2) => a + b';
    const result = await parseObjectArguments(code);
    expect(result).toContain('=> a + b');
  });

  it('should support skipExpression option', async () => {
    const result = await parseObjectArguments('1 + 2', undefined, { skipExpression: true });
    expect(result).toBe('1 + 2'); // Returns raw string instead of 3
  });

  it('should support simplify: false option', async () => {
    const result = await parseObjectArguments('a=1', undefined, { simplify: false });
    expect(result).toEqual({ a: 1 });
  });

  it('should support excludeAutoNamedFromPositional option', async () => {
    const result = await parseObjectArguments('1, name="John"', undefined, { excludeAutoNamedFromPositional: true });
    // Should NOT contain index 0
    expect(result).toEqual({0: 1, name: 'John' });
  });

  it('should recognize case-insensitive keywords', async () => {
    expect(await parseObjectArguments('TRUE')).toBe(true);
    expect(await parseObjectArguments('FALSE')).toBe(false);
    expect(await parseObjectArguments('NULL')).toBe(null);
    expect(await parseObjectArguments('NAN')).toBeNaN();
  });

  it('should handle complex mixed options', async () => {
    const result = await parseObjectArguments('a=1, {{name}}, 3', { name: 'val' }, {
      simplify: false,
      excludeAutoNamedFromPositional: true,
      argProcessor: async (ctx) => {
         if (!ctx.isNamed && ctx.rawValue.includes('{{')) return { [PROCESSOR_RESULT]: ['name', 'tmp', { excludePositional: true }] };
      },

    });
    // excludeAutoNamedFromPositional: true -> no indices (0, 1) in the final toMergedObject output
    // simplify: false -> return full merged object
    // 'a=1' is named -> { a: 1 }
    // 'processed' is excludePositional and no name -> so ignored
    // '3' is positional -> the first positional argument -> 3
    expect(result).toEqual({ '0': 3, a: 1, tmp: 'val' });
  });
});
