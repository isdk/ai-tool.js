import { describe, it, expect } from 'vitest';
import { replaceWithPlaceholder, restoreFromPlacehoders } from './utils';

describe('replaceWithPlaceholder', () => {
  test('replaces double-quoted strings', () => {
    const content = 'Hello "World", welcome to "the site"!';
    const [result, placeholders] = replaceWithPlaceholder(content);
    expect(result).toBe('Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!');
    expect(placeholders).toEqual(['"World"', '"the site"']);
  });

  test('replaces single-quoted strings', () => {
    const content = "Hello 'World', welcome to 'the site'!";
    const [result, placeholders] = replaceWithPlaceholder(content, { startChar: "'", endChar: "'" });
    expect(result).toBe("Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!");
    expect(placeholders).toEqual(["'World'", "'the site'"]);
  });

  test('replaces mixed quotes', () => {
    const content = 'Hello "World", welcome to \'the site\'!';
    const [result, placeholders] = replaceWithPlaceholder(content, { startChar: ['"', "'"], endChar: ['"', "'"] });
    expect(result).toBe('Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!');
    expect(placeholders).toEqual(['"World"', "'the site'"]);
  });

  test('throws error if start and end chars have different lengths', () => {
    expect(() => replaceWithPlaceholder('Hello "World"', { startChar: ['"', "'"], endChar: ['"'] })).toThrow('start and end characters must have the same length');
  });

  test('replaces double-quoted strings with escape characters', () => {
    const content = 'Hello "World", welcome to "the \\"site\\"!"';
    const [result, placeholders] = replaceWithPlaceholder(content);
    expect(result).toBe('Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1');
    expect(placeholders).toEqual(['"World"', '"the \\"site\\"!"']);
  });

  test('replaces single-quoted strings with escape characters', () => {
    const content = "Hello 'World\\', welcome to \\'the \\'site\\'!'?";
    const [result, placeholders] = replaceWithPlaceholder(content, { startChar: "'", endChar: "'" });
    expect(result).toBe("Hello __PlacEhoLdeR_0?");
    expect(placeholders).toEqual(["'World\\', welcome to \\'the \\'site\\'!'"]);
  });

  test('replaces strings with custom start and end chars', () => {
    const content = 'Hello <World>, welcome to <the site>!';
    const [result, placeholders] = replaceWithPlaceholder(content, { startChar: '<', endChar: '>' });
    expect(result).toBe('Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!');
    expect(placeholders).toEqual(['<World>', '<the site>']);
  });

  test('replaces strings with mixed custom start and end chars', () => {
    const content = 'Hello <World>, welcome to [the site]!';
    const [result, placeholders] = replaceWithPlaceholder(content, { startChar: ['<', '['], endChar: ['>', ']'] });
    expect(result).toBe('Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!');
    expect(placeholders).toEqual(['<World>', '[the site]']);
  });
});

describe('restoreFromPlacehoders', () => {
  test('restores double-quoted strings', () => {
    const contentWithPlaceholders = 'Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!';
    const originalSubstrings = ['"World"', '"the site"'];
    const restoredContent = restoreFromPlacehoders(contentWithPlaceholders, originalSubstrings);
    expect(restoredContent).toBe('Hello "World", welcome to "the site"!');
  });

  test('restores single-quoted strings', () => {
    const contentWithPlaceholders = "Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!";
    const originalSubstrings = ["'World'", "'the site'"];
    const restoredContent = restoreFromPlacehoders(contentWithPlaceholders, originalSubstrings);
    expect(restoredContent).toBe("Hello 'World', welcome to 'the site'!");
  });

  test('restores mixed quotes', () => {
    const contentWithPlaceholders = 'Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!';
    const originalSubstrings = ['"World"', "'the site'"];
    const restoredContent = restoreFromPlacehoders(contentWithPlaceholders, originalSubstrings);
    expect(restoredContent).toBe('Hello "World", welcome to \'the site\'!');
  });

  test('restores with custom placeholder name', () => {
    const contentWithPlaceholders = 'Hello CUSTOM_PLACEHOLDER_0, welcome to CUSTOM_PLACEHOLDER_1!';
    const originalSubstrings = ['"World"', '"the site"'];
    const restoredContent = restoreFromPlacehoders(contentWithPlaceholders, originalSubstrings, { placeholder: 'CUSTOM_PLACEHOLDER_' });
    expect(restoredContent).toBe('Hello "World", welcome to "the site"!');
  });

  test('restores double-quoted strings with escape characters', () => {
    const contentWithPlaceholders = 'Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!';
    const originalSubstrings = ['"World\\""', '"the \\"site\\""'];
    const restoredContent = restoreFromPlacehoders(contentWithPlaceholders, originalSubstrings);
    expect(restoredContent).toBe('Hello "World\\"", welcome to "the \\"site\\""!');
  });

  test('restores single-quoted strings with escape characters', () => {
    const contentWithPlaceholders = "Hello __PlacEhoLdeR_0, welcome to __PlacEhoLdeR_1!";
    const originalSubstrings = ["'World\\''", "'the \\'site\\'"];
    const restoredContent = restoreFromPlacehoders(contentWithPlaceholders, originalSubstrings);
    expect(restoredContent).toBe("Hello 'World\\'', welcome to 'the \\'site\\'!");
  });

  test('restores no palceholders', () => {
    const contentWithPlaceholders = "Hello world!";
    const originalSubstrings: any[] = [];
    const restoredContent = restoreFromPlacehoders(contentWithPlaceholders, originalSubstrings);
    expect(restoredContent).toBe("Hello world!");
  });
});
