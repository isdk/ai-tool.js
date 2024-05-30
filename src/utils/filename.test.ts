import path from 'path'

import { extNameLevel, getMultiLevelExtname, isValidFilename, isValidFilepath, sanitizeFilename } from './filename'

describe('isValidFilename', () => {
  it('should return true for valid filenames', () => {
    expect(isValidFilename('file.txt')).toBeTruthy();
    expect(isValidFilename('file.with-dashes.txt')).toBeTruthy();
    expect(isValidFilename('file.with.underscores.txt')).toBeTruthy();
  });

  it('should return false for reserved filenames', () => {
    expect(isValidFilename('..')).toBeFalsy();
  });

  it('should return false for filenames containing control characters', () => {
    expect(isValidFilename('file\t.txt')).toBeFalsy();
    expect(isValidFilename('file\n.txt')).toBeFalsy();
    expect(isValidFilename('file\r.txt')).toBeFalsy();
  });

  it('should return false for relative paths', () => {
    expect(isValidFilename('./file.txt')).toBeFalsy();
    expect(isValidFilename('../file.txt')).toBeFalsy();
  });

  it('should return false for filenames ending with multiple periods', () => {
    expect(isValidFilename('file.txt.')).toBeFalsy();
    expect(isValidFilename('file.txt...')).toBeFalsy();
  });
});

describe('isValidFilepath', () => {
  it('returns true for valid Unix/Linux filepath', () => {
    const filepath = '/home/user/documents/file.txt';
    expect(isValidFilepath(filepath)).toBe(true);
  });

  it('returns false for invalid filepath', () => {
    const filepath = '/home/user/documents</invalid file name.txt';
    expect(isValidFilepath(filepath)).toBe(false);
  });

  it('returns false for empty filepath', () => {
    const filepath = '';
    expect(isValidFilepath(filepath)).toBe(false);
  });

  it('returns false for filepath with invalid characters', () => {
    const filepath = '/home/user/documents/file?!.txt';
    expect(isValidFilepath(filepath)).toBe(false);
  });
});

describe('sanitizeFilename', () => {
  const defaultOptions = {};

  it('replaces reserved characters with default replacement', () => {
    const input = '<>:?*|file.txt';
    const expected = '!file.txt';
    expect(sanitizeFilename(input, defaultOptions)).toBe(expected);
  });

  it('uses custom replacement character', () => {
    const input = '<>:?*|file.txt';
    const options = { replacement: '#' };
    const expected = '#file.txt';
    expect(sanitizeFilename(input, options)).toBe(expected);
  });

  it('handles repeated reserved characters', () => {
    const input = 'file<<>>.txt';
    const expected = 'file!.txt';
    expect(sanitizeFilename(input, defaultOptions)).toBe(expected);
  });

  it('removes control characters', () => {
    const input = 'file\u0001\u0002.txt';
    const expected = 'file!.txt';
    expect(sanitizeFilename(input, defaultOptions)).toBe(expected);
  });

  it('replaces relative paths', () => {
    const input = '../folder/file.txt';
    const expected = '!folder!file.txt';
    expect(sanitizeFilename(input, defaultOptions)).toBe(expected);
  });

  it('handles filenames starting or ending with a period correctly', () => {
    const inputStartingWithDot = '.hiddenfile.txt';
    const expectedStartingWithDot = '.hiddenfile.txt';
    expect(sanitizeFilename(inputStartingWithDot, defaultOptions)).toBe(expectedStartingWithDot);

    const inputEndingWithDot = 'file.';
    const expectedEndingWithDot = 'file';
    expect(sanitizeFilename(inputEndingWithDot, defaultOptions)).toBe(expectedEndingWithDot);
  });

  it('avoids Windows reserved names by appending replacement', () => {
    const input = 'CON';
    const expected = 'CON!';
    expect(sanitizeFilename(input, defaultOptions)).toBe(expected);
  });

  it('trims trailing periods', () => {
    const input = 'file.....';
    const expected = 'file';
    expect(sanitizeFilename(input, defaultOptions)).toBe(expected);
  });

  it('limits filename length to maxLength option', () => {
    const input = 'thisisaverylongfilenameithinkitis toolong.txt';
    const options = { maxLength: 20 };
    const expected = 'thisisaverylongf.txt';
    expect(sanitizeFilename(input, options)).toBe(expected);
  });

  it('throws when replacement contains reserved characters', () => {
    const input = 'safe.txt';
    const options = { replacement: '?' };
    expect(() => sanitizeFilename(input, options)).toThrow('Replacement string cannot contain reserved filename characters');
  });

  it('throws when replacement contains control characters', () => {
    const input = 'safe.txt';
    const options = { replacement: '\u0001' };
    expect(() => sanitizeFilename(input, options)).toThrow('Replacement string cannot contain reserved filename characters');
  });
});

describe('getMultiLevelExtname', () => {
  it('should return the correct extension for single level', () => {
    const filename = 'testfile.txt';
    expect(getMultiLevelExtname(filename)).toBe('.txt');
  });

  it('should return the correct extension for multiple levels', () => {
    const filename = 'archive.tar.gz';
    expect(getMultiLevelExtname(filename, 2)).toBe('.tar.gz');
  });

  it('should return empty string when no extension exists', () => {
    const filename = 'noext';
    expect(getMultiLevelExtname(filename)).toBe('');
  });

  it('should return empty string when level is 0', () => {
    const filename = 'testfile.txt';
    expect(getMultiLevelExtname(filename, 0)).toBe('');
  });

  it('should not modify the original filename', () => {
    const filename = 'archive.tar.gz';
    getMultiLevelExtname(filename, 2);
    expect(path.extname(filename)).toBe('.gz');
  });

  it('should return full filename when level exceeds actual extension levels', () => {
    const filename = 'file.tar.gz';
    expect(getMultiLevelExtname(filename, 3)).toBe('.tar.gz');
  });
});

describe('extNameLevel', () => {
  it('returns correct level for single-extension files', () => {
    expect(extNameLevel('.txt')).toBe(1);
    expect(extNameLevel('.json')).toBe(1);
    expect(extNameLevel('.jpg')).toBe(1);
  });

  it('returns correct level for multi-extension files', () => {
    expect(extNameLevel('.tar.gz')).toBe(2);
    expect(extNameLevel('.zip.zip.three')).toBe(3);
    expect(extNameLevel('.the.docx.three.four')).toBe(4);
  });

  it('handles empty extension', () => {
    expect(extNameLevel('')).toBe(0);
  });

  it('handles missing leading dot', () => {
    expect(extNameLevel('txt')).toBe(0)
  });
});