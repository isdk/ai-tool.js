import {vi} from 'vitest'

import { isValidFilename, isValidFilepath, sanitizeFilename, sanitizeFilepath } from '../src/utils/filename.ts';

vi.mock('path', async (importOriginal) => {
  const p = await importOriginal() as any
  return {default: p.win32, win32: p.win32, posix: p.posix}
})

describe('Filename validation and sanitization for win32', () => {
  // let cFilename, isValidFilename, isValidFilepath, sanitizeFilename, sanitizeFilepath
  // beforeAll(async () => {
  //   vi.doMock('path', async (importOriginal) => {
  //     const p = await importOriginal() as any
  //     return {default: p.win32, win32: p.win32, posix: p.posix}
  //   })
  //   cFilename = await import('../src/utils/filename.ts')
  //   isValidFilename = cFilename.isValidFilename
  //   isValidFilepath = cFilename.isValidFilepath
  //   sanitizeFilename = cFilename.sanitizeFilename
  //   sanitizeFilepath = cFilename.sanitizeFilepath
  // })
  // afterAll(() => {
  //   vi.doUnmock('path')
  // })

  describe('isValidFilename', () => {
    it('returns false for invalid filenames', () => {
      expect(isValidFilename('<invalid>')).toBe(false);
      expect(isValidFilename('C:\\')).toBe(false);
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
      expect(isValidFilepath('C:\\<invalid>')).toBe(false);
      expect(isValidFilepath('C:\\..')).toBe(false);
      expect(isValidFilepath('C:\\valid\\..\\invalid')).toBe(false);
    });

    it('returns true for valid filepaths', () => {
      expect(isValidFilepath('C:\\valid\\filename.txt')).toBe(true);
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
      expect(sanitizeFilepath('C:\\<invalid>', { replacement: '_' })).toBe('C:\\_invalid_');
      expect(sanitizeFilepath('C:\\valid\\..\\invalid', { replacement: '_' })).toBe('C:\\valid\\_\\invalid');
    });

    it('truncates long filepaths', () => {
      const longFilepath = 'C:\\' + 'a'.repeat(101);
      expect(sanitizeFilepath(longFilepath).length).toBe(103);
    });
  });
});
