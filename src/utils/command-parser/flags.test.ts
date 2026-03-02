import { describe, it, expect } from 'vitest';
import { parseCommand, parseObjectArguments } from './api';
import { CMD_ARG_FLAG_SYMBOL } from './types';

describe('command-CmdArgParser flags', () => {
  it('should support simple boolean flags with default prefix !', async () => {
    const result = await parseCommand('cmd(!debug, query="test")', undefined, { flagPrefix: '!' });
    expect(result?.flags).toBeDefined();
    expect(result?.flags?.debug).toBeTruthy();
    expect(result?.flags?.debug[CMD_ARG_FLAG_SYMBOL]).toBe('!');
    expect(result?.args).toEqual({ query: 'test' });
  });

  it('should support flags with values', async () => {
    const result = await parseCommand('cmd(!mode="fast", !count=10)', undefined, { flagPrefix: '!' });
    expect(result?.flags?.mode.toString()).toBe('fast');
    expect(result?.flags?.count.valueOf()).toBe(10);
    expect(result?.flags?.mode[CMD_ARG_FLAG_SYMBOL]).toBe('!');
    expect(result?.flags?.count[CMD_ARG_FLAG_SYMBOL]).toBe('!');
  });

  it('should support multiple flag prefixes', async () => {
    const result = await parseCommand('cmd(!debug, #cache=true)', undefined, { flagPrefix: ['!', '#'] });
    expect(result?.flags?.debug).toBeTruthy();
    expect(result?.flags?.debug[CMD_ARG_FLAG_SYMBOL]).toBe('!');
    expect(result?.flags?.cache).toBeTruthy();
    expect(result?.flags?.cache[CMD_ARG_FLAG_SYMBOL]).toBe('#');
  });

  it('should isolate flags from normal arguments', async () => {
    const result = await parseObjectArguments('!debug, a=1', undefined, { flagPrefix: '!' });
    // result should be simplified to 1 (because !debug is isolated)
    expect(result).toMatchObject({a: 1});
    expect(result.flags.debug).toBeTruthy();
  });

  it('should support Chinese flag names', async () => {
    const result = await parseCommand('cmd(!调试, !参数="值")', undefined, { flagPrefix: '!' });
    expect(result?.flags?.['调试']).toBeTruthy();
    expect(result?.flags?.['参数'].toString()).toBe('值');
  });

  it('should treat ! as part of raw value if NOT in flagPrefix', async () => {
    const result = await parseObjectArguments('!notAFlag');
    // !notAFlag is an invalid identifier, so evaluateExpression catches ReferenceError and returns raw string
    expect(result).toBe('!notAFlag');
  });

  describe('raiseReferenceError control', () => {
    it('should throw ReferenceError when raiseReferenceError is true', async () => {
      const promise = parseObjectArguments('notDefined', {}, { raiseReferenceError: true });
      await expect(promise).rejects.toThrow(ReferenceError);
    });

    it('should NOT throw ReferenceError when raiseReferenceError is false even if raiseError is true', async () => {
      const result = await parseObjectArguments('notDefined', {}, { raiseError: true, raiseReferenceError: false });
      expect(result).toBeUndefined(); // Simple identifier returns undefined on ReferenceError
    });

    it('should throw other errors (SyntaxError) when raiseError is true even if raiseReferenceError is false', async () => {
      const promise = parseObjectArguments('1 + (2', {}, { raiseError: true, raiseReferenceError: false });
      await expect(promise).rejects.toThrow(SyntaxError);
    });

    it('should return raw string for complex expression on ReferenceError when not raising', async () => {
      const result = await parseObjectArguments('a + b', {}, { raiseReferenceError: false });
      expect(result).toBe('a + b');
    });
  });
});
