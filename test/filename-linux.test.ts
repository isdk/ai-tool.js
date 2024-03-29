import {vi} from 'vitest'

import { isValidFilename, isValidFilepath, sanitizeFilename, sanitizeFilepath } from '../src/utils/filename.ts';

describe('Filename validation and sanitization', () => {
  describe('isValidFilename', () => {
    it('returns false for invalid filenames', () => {
      expect(isValidFilename('<invalid>')).toBe(false);
      expect(isValidFilename('/')).toBe(false);
      expect(isValidFilename('')).toBeFalsy()
      expect(isValidFilename('..')).toBe(false);
      expect(isValidFilename('filename.')).toBe(false);
    });

    it('returns true for valid filenames', () => {
      expect(isValidFilename('valid_filename.txt')).toBe(true);
    });
  });

  describe('isValidFilepath', () => {
    it('returns false for invalid filepaths', () => {
      expect(isValidFilepath('/<invalid>')).toBe(false);
      expect(isValidFilepath('/..')).toBe(false);
      expect(isValidFilepath('/valid/../invalid')).toBe(false);
    });

    it('returns true for valid filepaths', () => {
      expect(isValidFilepath('/valid/filename.txt')).toBe(true);
    });
  });

  describe('sanitizeFilename', () => {
    it('replaces invalid characters in filenames', () => {
      expect(sanitizeFilename('<invalid>', { replacement: '_' })).toBe('_invalid_');
      expect(sanitizeFilename('.filename.', { replacement: '_' })).toBe('.filename');
    });

    it('truncates long filenames', () => {
      const longFilename = 'a'.repeat(101);
      expect(sanitizeFilename(longFilename).length).toBe(100);
    });

    it('throws an error if replacement string contains reserved characters', () => {
      expect(() => sanitizeFilename('<invalid>', { replacement: '<' })).toThrow();
    });
  });

  describe('sanitizeFilepath', () => {
    it('replaces invalid characters in filepaths', () => {
      expect(sanitizeFilepath('/<invalid>', { replacement: '_' })).toBe('/_invalid_');
      expect(sanitizeFilepath('/valid/../invalid', { replacement: '_' })).toBe('/valid/_/invalid');
    });

    it('truncates long filepaths', () => {
      const longFilepath = '/' + 'a'.repeat(101);
      expect(sanitizeFilepath(longFilepath).length).toBe(101);
    });
  });
});
