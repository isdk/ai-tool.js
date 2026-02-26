import { describe, it, expect } from 'vitest';
import { prependNewlineIfMultiline } from './prependNewlineIfMultiline';

describe('prependNewlineIfMultiline', () => {
  it('should not add newline to single line text', () => {
    expect(prependNewlineIfMultiline('hello')).toBe('hello');
    expect(prependNewlineIfMultiline('single line')).toBe('single line');
  });

  it('should add newline to multiline text that does not start with newline', () => {
    expect(prependNewlineIfMultiline('first\nsecond')).toBe('\nfirst\nsecond');
    expect(prependNewlineIfMultiline('line1\nline2\nline3')).toBe('\nline1\nline2\nline3');
  });

  it('should not add newline to multiline text that already starts with newline', () => {
    expect(prependNewlineIfMultiline('\nfirst\nsecond')).toBe('\nfirst\nsecond');
    expect(prependNewlineIfMultiline('\nline1\nline2')).toBe('\nline1\nline2');
  });

  it('should handle empty string', () => {
    expect(prependNewlineIfMultiline('')).toBe('');
  });

  it('should handle string with only whitespace', () => {
    expect(prependNewlineIfMultiline('   ')).toBe('   ');
    expect(prependNewlineIfMultiline('\t\t')).toBe('\t\t');
    expect(prependNewlineIfMultiline(' \n ')).toBe(' \n ');
  });

  it('should handle text starting with spaces followed by multiple lines', () => {
    expect(prependNewlineIfMultiline('  first line\nsecond line')).toBe('\n  first line\nsecond line');
    expect(prependNewlineIfMultiline('\tfirst line\nsecond line')).toBe('\n\tfirst line\nsecond line');
  });

  it('should handle text that starts with newline but is single line after newline', () => {
    expect(prependNewlineIfMultiline('\nonly one line')).toBe('\nonly one line');
  });

  it('should handle text with Windows-style line endings', () => {
    expect(prependNewlineIfMultiline('first\r\nsecond')).toBe('\nfirst\r\nsecond');
    expect(prependNewlineIfMultiline('\r\nfirst\r\nsecond')).toBe('\r\nfirst\r\nsecond');
  });

  it('should handle null and undefined inputs gracefully (type safety)', () => {
    // @ts-expect-error Testing invalid input type
    expect(prependNewlineIfMultiline(null)).toBe(null);
    // @ts-expect-error Testing invalid input type
    expect(prependNewlineIfMultiline(undefined)).toBe(undefined);
  });

  it('should process strings with various whitespace characters at the beginning', () => {
    expect(prependNewlineIfMultiline(' \t first\nsecond')).toBe('\n \t first\nsecond');
    expect(prependNewlineIfMultiline('\n \t first\nsecond')).toBe('\n \t first\nsecond');
  });
});