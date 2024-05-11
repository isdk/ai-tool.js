import { parseJsJson } from './parse-js-json'

describe('parseJsJson', () => {
  it('should parse a valid JSON string', () => {
    const input = '{"name": "John", "age": 30}';
    const result = parseJsJson(input);
    expect(result).toEqual({ name: 'John', age: 30 });
  });

  it('should parse a valid JS JSON string', () => {
    const input = `{name: 'John', age: 30}`;
    const result = parseJsJson(input);
    expect(result).toEqual({ name: 'John', age: 30 });
  });


  it('should throw SyntaxError for invalid JSON string', () => {
    const input = '{"name": "John", "age": 30';
    expect(() => parseJsJson(input)).toThrow(SyntaxError);
  });

  it('should handle empty string input', () => {
    const input = '';
    const result = parseJsJson(input);
    expect(result).toBeUndefined();
  });

  // Add more test cases if needed
});