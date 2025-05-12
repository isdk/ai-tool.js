import { vi } from 'vitest';
import { funcWithMeta, ToolFunc } from './tool-func';

describe('funcWithMeta', () => {
  it('should return the function with merged metadata when meta is an object', () => {
    const testFn = () => {};
    const meta = { key: 'value' };

    const result = funcWithMeta(testFn, meta);

    expect(result).toBe(testFn);
    expect((result as any).key).toBe('value');
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
