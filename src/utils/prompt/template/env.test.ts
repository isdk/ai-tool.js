import { expandEnv, expandObjEnv } from './env';

describe('expandEnv', () => {
  let originalProcessEnv: NodeJS.ProcessEnv;

  beforeEach(() => {
    originalProcessEnv = { ...process.env };
  });

  afterEach(() => {
    process.env = originalProcessEnv;
  });

  it('should expand environment variables correctly', () => {
    process.env = { VAR1: 'value1', VAR2: 'value2' };
    const options = {
      parsed: {
        KEY1: '${VAR1}',
        KEY2: '${VAR2}',
        KEY3: 'non-interpolated value',
      },
    };

    const result = expandEnv(options);

    expect(result.parsed).toEqual({
      KEY1: 'value1',
      KEY2: 'value2',
      KEY3: 'non-interpolated value',
    });
  });

  it('should use custom processEnv if provided', () => {
    const customProcessEnv = { VAR1: 'custom value' };
    const options = {
      processEnv: customProcessEnv,
      parsed: {
        KEY1: '${VAR1}',
      },
    };

    const result = expandEnv(options);

    expect(result.parsed!.KEY1).toBe('custom value');
  });

  it('should not interpolate if environment variable is already set in process.env', () => {
    process.env.KEY1 = 'pre-set value';
    const options = {
      parsed: {
        KEY1: '${VAR1}',
      },
    };

    const result = expandEnv(options);

    expect(result.parsed!.KEY1).toBe('pre-set value');
  });

  it('expands self without a recursive call stack error', () => {
    const dotenv = {
      processEnv: {},
      parsed: {
        EXPAND_SELF: '$EXPAND_SELF'
      }
    }
    const parsed = expandEnv(dotenv).parsed
    expect(parsed!.EXPAND_SELF).toStrictEqual('$EXPAND_SELF') // because it ends up accessing parsed[key].
  })
});

describe('expandObjEnv', () => {
  it('should expand environment variables in a string', () => {
    process.env.TEST_VAR = 'test';
    const result = expandObjEnv('This is a test: ${TEST_VAR}');
    expect(result).toBe('This is a test: test');
    delete process.env.TEST_VAR;
  });

  it('should not change a string without environment variables', () => {
    const result = expandObjEnv('This is a test');
    expect(result).toBe('This is a test');
  });

  it('should expand environment variables in an object', () => {
    process.env.TEST_VAR = 'test';
    const result = expandObjEnv({ key: 'This is a test: ${TEST_VAR}' });
    expect(result).toEqual({ key: 'This is a test: test' });
    delete process.env.TEST_VAR;
  });

  it('should not change an object without environment variables', () => {
    const obj = { key: 'This is a test' };
    const result = expandObjEnv(obj);
    expect(result).toBe(obj);
  });

  it('should expand environment variables in an array', () => {
    process.env.TEST_VAR = 'test';
    const result = expandObjEnv(['This is a test: ${TEST_VAR}']);
    expect(result).toEqual(['This is a test: test']);
    delete process.env.TEST_VAR;
  });

  it('should not change an array without environment variables', () => {
    const arr = ['This is a test'];
    const result = expandObjEnv(arr);
    expect(result).toBe(arr);
  });

  it('should handle nested objects and arrays', () => {
    process.env.TEST_VAR = 'test';
    const result = expandObjEnv({ key1: 'This is a test: ${TEST_VAR}', key2: [{ nested: 'Nested test: ${TEST_VAR}' }] });
    expect(result).toEqual({ key1: 'This is a test: test', key2: [{ nested: 'Nested test: test' }] });
    delete process.env.TEST_VAR;
  });

  it('should handle circular references in objects', () => {
    const obj: any = {};
    obj.key = obj;
    const result = expandObjEnv(obj);
    expect(result).toBe(obj);
  });

  it('should handle circular references in arrays', () => {
    const arr: any[] = [];
    arr.push(arr);
    const result = expandObjEnv(arr);
    expect(result).toBe(arr);
  });
});