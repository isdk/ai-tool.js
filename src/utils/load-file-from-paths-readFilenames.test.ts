import {vi} from 'vitest'
import path from 'path';
import * as fs from 'fs';
import { tmpdir } from 'os';

import {readFilenamesRecursiveSync} from './load-file-from-paths'

describe('readFilenamesRecursiveSync', () => {
  const testDir = path.join(tmpdir(), 'test-dir');
  const testFile1 = path.join(testDir, 'file1.txt');
  const testFile2 = path.join(testDir, 'file2.txt');
  const subDir = path.join(testDir, 'sub-dir');
  const sub2Dir = path.join(testDir, 'sub-dir2');
  const subFile1 = path.join(subDir, 'sub-file1.txt');
  const sub2File1 = path.join(sub2Dir, 'sub-file1.txt');
  const dSubDir = path.join(subDir, 'd');
  const dFile = path.join(dSubDir, 'd-file.txt');
  const dFile2 = path.join(dSubDir, 'd-file2.txt');
  const adSubDir = path.join(dSubDir, 'a')
  const adSubFile = path.join(adSubDir, 'ad-file.txt')

  beforeAll(() => {
    // Create directories and files for testing
    fs.mkdirSync(testDir, { recursive: true });
    fs.mkdirSync(sub2Dir, { recursive: true });
    fs.writeFileSync(testFile1, 'Test content 1');
    fs.writeFileSync(testFile2, 'Test content 2');
    fs.mkdirSync(dSubDir, { recursive: true });
    fs.writeFileSync(subFile1, 'Sub directory file');
    fs.writeFileSync(sub2File1, 'Sub directory file');
    fs.writeFileSync(dFile, 'd directory file');
    fs.writeFileSync(dFile2, 'd directory file2');
    fs.mkdirSync(adSubDir, { recursive: true });
    fs.symlinkSync(testFile1, adSubFile)
  });

  afterAll(() => {
    // Clean up - remove all created directories and files
    fs.rmSync(testDir, { recursive: true, force: true });
  });

  it('should find all files recursively', () => {
    const files = readFilenamesRecursiveSync(testDir);

    expect(files).toHaveLength(6);
    expect(files).toContain(testFile1);
    expect(files).toContain(testFile2);
    expect(files).toContain(sub2File1);
    expect(files).toContain(subFile1);
    expect(files).toContain(dFile);
    expect(files).toContain(dFile2);
  });

  it('should filter files based on a condition', () => {
    const files = readFilenamesRecursiveSync(testDir, {isFileMatched: (filePath) => filePath.includes('sub')});

    expect(files).toHaveLength(4);
    expect(files[0]).toBe(sub2File1);
    expect(files[1]).toBe(subFile1);
    expect(files[2]).toBe(dFile);
    expect(files[3]).toBe(dFile2);
  });

  it('should find level 2 files recursively', () => {
    let files = readFilenamesRecursiveSync(testDir, {level: 2});

    expect(files).toHaveLength(4);
    expect(files).toContain(testFile1);
    expect(files).toContain(testFile2);
    expect(files).toContain(subFile1);
    expect(files).toContain(sub2File1);
  });

  it('should find level 4 files recursively', () => {
    const files = readFilenamesRecursiveSync(testDir, {level: 4});

    expect(files).toHaveLength(6);
    expect(files).toContain(testFile1);
    expect(files).toContain(testFile2);
    expect(files).toContain(subFile1);
    expect(files).toContain(sub2File1);
    expect(files).toContain(dFile);
    expect(files).toContain(dFile2);
  });

  it('should find level 2 files recursively with symlink', () => {
    let files = readFilenamesRecursiveSync(subDir, {level: 3});

    expect(files).toHaveLength(4);
    expect(files).toContain(subFile1);
    expect(files).toContain(dFile);
    expect(files).toContain(dFile2);
    expect(files).toContain(testFile1);
  });

  it('should find level 2 files recursively without following symlink', () => {
    let files = readFilenamesRecursiveSync(subDir, {level: 3, resolveSymlinks: false});

    expect(files).toHaveLength(4);
    expect(files).toContain(subFile1);
    expect(files).toContain(dFile);
    expect(files).toContain(dFile2);
    expect(files).not.toContain(testFile1);
    expect(files).toContain(adSubFile);
  });
});
