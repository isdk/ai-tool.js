import { formatTextWithSpace } from './format-text-with-space'

describe('formatTextWithSpace', () => {
  it('should replace delimiters with spaces and capitalize the first letter of each word', () => {
    expect(formatTextWithSpace('hello_world')).toBe('Hello World');
    expect(formatTextWithSpace('this-is-a-test')).toBe('This Is A Test');
    expect(formatTextWithSpace('hello-world_this_is_a_test')).toBe('Hello World This Is A Test');
  });

  it('should handle custom delimiters', () => {
    expect(formatTextWithSpace('this-is-a-test', { delimiter: /-/g })).toBe('This Is A Test');
    expect(formatTextWithSpace('hello-world_this#is#a@test', { delimiter: /[-_#@]/g })).toBe('Hello World This Is A Test');
  });

  it('should not capitalize the first letter of each word when isCapitalizeFirstLetter is false', () => {
    expect(formatTextWithSpace('hello_world', { capitalize: false })).toBe('hello world');
    expect(formatTextWithSpace('this-is-a-test', { capitalize: false, delimiter: /-/ })).toBe('this is a test');
  });

  it('should handle empty strings', () => {
    expect(formatTextWithSpace('')).toBe('');
  });

  it('should handle strings without delimiters', () => {
    expect(formatTextWithSpace('helloWorld')).toBe('HelloWorld');
    expect(formatTextWithSpace('helloWorld', { capitalize: false })).toBe('helloWorld');
  });

  it('should handle strings with multiple spaces', () => {
    expect(formatTextWithSpace('hello__world')).toBe('Hello World');
    expect(formatTextWithSpace('hello--world', { delimiter: /-/ })).toBe('Hello World');
  });

  it('should handle strings with mixed delimiters', () => {
    expect(formatTextWithSpace('hello_world-this_is_a_test')).toBe('Hello World This Is A Test');
  });

  it('should handle special characters in delimiters', () => {
    expect(formatTextWithSpace('hello0_2world23', { delimiter: /[0-9_-]/g, capitalize: false })).toBe('hello world');
  });
});