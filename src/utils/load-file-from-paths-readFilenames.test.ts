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
  const subFile1 = path.join(subDir, 'sub-file1.txt');
  const dSubDir = path.join(subDir, 'd');
  const dFile = path.join(dSubDir, 'd-file.txt');

  beforeAll(() => {
    // Create directories and files for testing
    fs.mkdirSync(testDir, { recursive: true });
    fs.writeFileSync(testFile1, 'Test content 1');
    fs.writeFileSync(testFile2, 'Test content 2');
    fs.mkdirSync(dSubDir, { recursive: true });
    fs.writeFileSync(subFile1, 'Sub directory file');
    fs.writeFileSync(dFile, 'd directory file');
  });

  afterAll(() => {
    // Clean up - remove all created directories and files
    fs.rmSync(testDir, { recursive: true, force: true });
  });

  it('should find all files recursively', () => {
    const files = readFilenamesRecursiveSync(testDir);

    expect(files).toHaveLength(4);
    expect(files).toContain(testFile1);
    expect(files).toContain(testFile2);
    expect(files).toContain(subFile1);
    expect(files).toContain(dFile);
  });

  it('should filter files based on a condition', () => {
    const files = readFilenamesRecursiveSync(testDir, {isFileMatched: (filePath) => filePath.includes('sub')});

    expect(files).toHaveLength(2);
    expect(files[0]).toBe(subFile1);
    expect(files[1]).toBe(dFile);
  });

  it('should find level 2 files recursively', () => {
    const files = readFilenamesRecursiveSync(testDir, {level: 2});

    expect(files).toHaveLength(3);
    expect(files).toContain(testFile1);
    expect(files).toContain(testFile2);
    expect(files).toContain(subFile1);
  });
});
