import { parseJsJson } from './parse-js-json'

describe('parseJsJson', () => {
  it('should parse a valid JSON string', async () => {
    const input = '{"name": "John", "age": 30}';
    const result = await parseJsJson(input);
    expect(result).toEqual({ name: 'John', age: 30 });
  });

  it('should parse a valid JS JSON string', async () => {
    const input = `{name: 'John', age: 30}`;
    const result = await parseJsJson(input);
    expect(result).toEqual({ name: 'John', age: 30 });
  });


  it('should throw SyntaxError for invalid JSON string', async () => {
    const input = '{"name": "John", "age": 30';
    await expect(parseJsJson(input)).rejects.toThrow(SyntaxError);
  });

  it('should handle empty string input', async () => {
    const input = '';
    const result = await parseJsJson(input);
    expect(result).toBeUndefined();
  });

  it('should parse JS JSON with scope', async () => {
    const input = `{name, age: age + 10}`;
    const result = await parseJsJson(input, {name: 'John', age: 20});
    expect(result).toEqual({ name: 'John', age: 30 });
  });

  it('should parse JS JSON with some invalid scope', async () => {
    const input = `{name, age: age + 10}`;
    const result = await parseJsJson(input, {name: 'John', age: 20, 0: '124'});
    expect(result).toEqual({ name: 'John', age: 30 });
  });

  it('should parse JS JSON with scope and undefined value', async () => {
    const input = `{name, age: age + 10, nosuch: unknown}`;
    const result = await parseJsJson(input, {name: 'John', age: 20});
    expect(result).toEqual({ name: 'John', age: 30, nosuch: undefined });
  });
});