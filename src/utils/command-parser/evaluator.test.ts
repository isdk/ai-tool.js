import { describe, it, expect } from 'vitest';
import { evaluate } from './evaluator';
import { ChoiceArgProcessor, TemplateArgProcessor, PROCESSOR_RESULT, UNRESOLVED_SYMBOL } from './index';

const createCtx = (rawValue: string, scope = {}, options = {}) => ({
  rawValue,
  scope,
  options,
  index: 0,
  isNamed: false,
  tokens: [],
  parser: null as any
});

describe('Evaluator', () => {
  it('should evaluate simple JS types', async () => {
    expect(await evaluate(createCtx('123'))).toBe(123);
    expect(await evaluate(createCtx('true'))).toBe(true);
    expect(await evaluate(createCtx('null'))).toBe(null);
    expect(await evaluate(createCtx('undefined'))).toBeUndefined();
  });

  it('should look up values in scope', async () => {
    const scope = { x: 10, user: { name: 'John' } };
    expect(await evaluate(createCtx('x', scope))).toBe(10);
    expect(await evaluate(createCtx('user.name', scope))).toBe('John');
  });

  it('should evaluate JS expressions', async () => {
    expect(await evaluate(createCtx('1 + 2'))).toBe(3);
    expect(await evaluate(createCtx('"a" + "b"'))).toBe('ab');
  });

  it('should handle Choice syntax WITH ChoiceArgProcessor', async () => {
    const result = await evaluate(createCtx('|a|b:maxPick=2', {}, { argProcessor: ChoiceArgProcessor }));
    // Processor returns [PROCESSOR_RESULT]: [choiceObj, 'choice', {excludePositional}]
    expect(result[PROCESSOR_RESULT][0]).toEqual({
      items: ['a', 'b'],
      maxPick: 2
    });
    expect(result[PROCESSOR_RESULT][1]).toBe('choice');
  });

  it('should NOT handle Choice syntax WITHOUT processor', async () => {
    const result = await evaluate(createCtx('|a|b:maxPick=2'));
    // Should be treated as raw string or expression (which fails and returns string)
    expect(result).toBe('|a|b:maxPick=2');
  });

  it('should handle templates WITH TemplateArgProcessor', async () => {
    const scope = { name: 'World' };
    const result = await evaluate(createCtx('Hello {{name}}', scope, { argProcessor: TemplateArgProcessor, preserveUnresolvedName: true }));
    // TemplateResult is 'Hello World'. 
    // TemplateArgProcessor quotes it to '"Hello World"'.
    // evaluateExpression('"Hello World"') -> 'Hello World'.
    // Evaluator returns it wrapped in PROCESSOR_RESULT because it needs to preserve potential metadata for Parser.
    expect(result[PROCESSOR_RESULT][0]).toBe('Hello World');
  });

  it('should handle arrow functions', async () => {
    const result = await evaluate(createCtx('(a, b) => a + b'));
    expect(result).toContain('=> a + b');
  });

  it('should fallback to raw string if evaluation fails', async () => {
    const result = await evaluate(createCtx('some unresolved text'));
    expect(result).toBe('some unresolved text');
  });

  it('should preserve unresolved name if option is set', async () => {
    const result = await evaluate(createCtx('unresolved', {}, { preserveUnresolvedName: true }));
    expect(result[UNRESOLVED_SYMBOL]).toBe('unresolved');
  });

  it('should handle quoted string unquoting fallback when first evaluation fails', async () => {
    // Case 1: First evaluation fails due to scope error, but unquoting succeeds
    const scope = {};
    Object.defineProperty(scope, 'err', {
      get() { throw new Error('scope error'); },
      enumerable: true
    });
    // This will trigger the catch block in evaluateExpression because filterValidFnScope(scope) will throw
    const result1 = await evaluate(createCtx('"hello"', scope));
    expect(result1).toBe('hello');

    // Case 2: First evaluation fails, and unquoting also fails (SyntaxError in "loosely quoted" string)
    // isQuoted returns true for '"a" "b"', but it's not a valid JS string literal
    const result2 = await evaluate(createCtx('"a" "b"'));
    expect(result2).toBe('a" "b');
  });
});
