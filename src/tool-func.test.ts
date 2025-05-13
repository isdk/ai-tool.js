import { vi } from 'vitest';
import { funcGetMeta, funcWithMeta, FuncMetaSymbol, ToolFunc } from './tool-func';

describe('funcWithMeta', () => {
  it('should return the function with merged metadata when meta is an object', () => {
    const testFn = () => {};
    const meta = { key: 'value' };

    const result = funcWithMeta(testFn, meta);

    expect(result).toBe(testFn);
    expect((testFn[FuncMetaSymbol] as any).key).toBe('value');
  });

  it('should return undefined when meta is null', () => {
    const testFn = () => {};
    const result = funcWithMeta(testFn, null);
    expect(result).toBeUndefined();
  });

  it('should return undefined when meta is not an object', () => {
    const testFn = () => {};
    const nonObjectValues = [123, 'string', true, undefined];

    nonObjectValues.forEach(value => {
      const result = funcWithMeta(testFn, value);
      expect(result).toBeUndefined();
    });
  });

  it('should call assign on ToolFunc instance if meta is an object', () => {
    class TestToolFunc extends ToolFunc {}
    const toolFunc = new TestToolFunc('testFunc', {});
    const meta = { title: 'toolValue' };

    const spy = vi.spyOn(toolFunc, 'assign');

    const result = funcWithMeta(toolFunc, meta);

    expect(spy).toHaveBeenCalledWith(meta);
    expect(result).toBe(toolFunc);
    expect(toolFunc.title).toBe('toolValue');
  });

  it('should not call assign on ToolFunc if meta is invalid', () => {
    class TestToolFunc extends ToolFunc {}
    const toolFunc = new TestToolFunc('testFunc', {});
    const spy = vi.spyOn(toolFunc, 'assign');

    const result = funcWithMeta(toolFunc, null);

    expect(spy).not.toHaveBeenCalled();
    expect(result).toBeUndefined();
  });
});

describe('funcGetMeta', () => {
  // A simple test function for metadata testing
  function testFunction() {}

  it('should return undefined when no metadata is attached', () => {
    const result = funcGetMeta(testFunction);
    expect(result).toBeUndefined();
  });

  it('should retrieve metadata correctly when set via funcWithMeta', () => {
    const meta = { author: 'Alice', version: '1.0' };
    funcWithMeta(testFunction, meta);

    const result = funcGetMeta(testFunction);
    expect(result).toEqual(meta);
  });

  it('should return undefined if the input function has no FuncMetaSymbol property', () => {
    // @ts-ignore - Deliberately removing symbol property for testing
    delete testFunction[FuncMetaSymbol];

    const result = funcGetMeta(testFunction);
    expect(result).toBeUndefined();
  });

  it('should handle ToolFunc instances and return their metadata as plain objects', () => {
    class TestToolFunc extends ToolFunc {}
    const toolFuncInstance = new TestToolFunc('testFunc', {});

    // Assign metadata using funcWithMeta
    const meta = { description: 'A test function' };
    funcWithMeta(toolFuncInstance, meta);

    const result = funcGetMeta(toolFuncInstance);
    expect(result).toEqual(expect.objectContaining(meta));
  });

  it('should return undefined when input is neither a function nor ToolFunc', () => {
    const result = funcGetMeta({} as any); // Non-function input
    expect(result).toBeUndefined();
  });
});
