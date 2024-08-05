import {type Mock, vi} from 'vitest'
import path from 'path';
import * as fs from 'fs';
import { tmpdir } from 'os';

import {loadFileFromPaths, readFilenamesRecursiveSync} from './load-file-from-paths'
import { NotFoundError } from './base-error';

vi.mock('fs', async (importOriginal) => {
  const p = await importOriginal() as any
  return {...p, existsSync: vi.fn(), readFileSync: vi.fn()}
})

describe('loadFileFromPaths', () => {
  beforeEach(() => {
    // Reset the mocked fs module between tests
    vi.resetAllMocks();
  });

  it('loads a file from an absolute path', () => {
    const mockFilePath = '/absolute/path/to/file';

    (fs.existsSync as Mock).mockReturnValue(true);
    (fs.readFileSync as Mock).mockReturnValueOnce(Buffer.from('file content'));

    expect(loadFileFromPaths(mockFilePath)).toBeInstanceOf(Buffer);
    expect(fs.existsSync).toHaveBeenCalledWith(mockFilePath);
    expect(fs.readFileSync).toHaveBeenCalledWith(mockFilePath);
  });

  it('loads a file from a relative path with default search path', () => {
    const mockFilename = 'relativeFile';
    const mockSearchPath = '.';
    const mockFilePath = path.join(mockSearchPath, mockFilename);
    (fs.existsSync as Mock).mockReturnValueOnce(true);
    (fs.readFileSync as Mock).mockReturnValueOnce(Buffer.from('file content'));

    expect(loadFileFromPaths(mockFilename)).toBeInstanceOf(Buffer);
    expect(fs.existsSync).toHaveBeenCalledWith(path.resolve(mockFilePath));
    expect(fs.readFileSync).toHaveBeenCalledWith(path.resolve(mockFilePath));
  });

  it('loads a file from a relative path with custom search paths', () => {
    const mockFilename = 'relativeFile';
    const mockSearchPaths = ['/custom/path1', '/custom/path2'];
    const mockFilePath = path.join(mockSearchPaths[1], mockFilename + '.ext');
    (fs.existsSync as Mock).mockImplementation((p) => p === mockFilePath);
    (fs.readFileSync as Mock).mockReturnValueOnce(Buffer.from('file content'));

    expect(loadFileFromPaths(mockFilename, mockSearchPaths, ['.ext'])).toBeInstanceOf(Buffer);
    expect(fs.existsSync).toHaveBeenCalledTimes(2); // Once for each search path
    expect(fs.readFileSync).toHaveBeenCalledWith(path.resolve(mockFilePath));
  });

  it('loads a file from a relative path with exclude', () => {
    const mockFilename = 'relativeFile';
    const mockSearchPaths = ['/custom/path1', '/custom/path2', 'custom/path3'];
    const mockFilePath = path.join(mockSearchPaths[1], mockFilename + '.ext');
    const mockFilePath2 = path.join(mockSearchPaths[2], mockFilename + '.ext');
    (fs.existsSync as Mock).mockImplementation((p) => {
      return (p === mockFilePath) || (p === path.resolve(mockFilePath2))
    });
    (fs.readFileSync as Mock).mockReturnValueOnce(Buffer.from('file content'));

    expect(loadFileFromPaths(mockFilename, mockSearchPaths, ['.ext'], {exclude: mockFilePath})).toBeInstanceOf(Buffer);
    expect(fs.existsSync).toHaveBeenCalledTimes(2); // Once for each search path
    expect(fs.readFileSync).toHaveBeenCalledTimes(1);
    expect(fs.readFileSync).toHaveBeenCalledWith(path.resolve(mockFilePath2));
  });

  it('throws NotFoundError when file is not found', () => {
    (fs.existsSync as Mock).mockImplementation(() => false);

    expect(() => loadFileFromPaths('nonexistent')).toThrow(NotFoundError);
    expect(fs.existsSync).toHaveBeenCalled();
  });

  it('loads a file from an absolute path from search', () => {
    const mockFilePath = '/absolute/path/to/file';

    (fs.existsSync as Mock).mockImplementation((file) => path.extname(file) === '.yaml');
    (fs.readFileSync as Mock).mockImplementation((file) => Buffer.from(file));
    const opts = {} as any
    const result = loadFileFromPaths(mockFilePath, undefined, ['.yaml'], opts)
    expect(result).toBeInstanceOf(Buffer);
    expect(result.toString('utf8')).toBe(mockFilePath+'.yaml');
    expect(fs.existsSync).toHaveBeenCalledWith(mockFilePath);
    expect(fs.readFileSync).toHaveBeenCalledWith(mockFilePath+'.yaml');
    expect(opts.filepath).toBe(mockFilePath+'.yaml');
  });
});

describe('readFilenamesRecursiveSync', () => {
  const testDir = path.join(tmpdir(), 'test-dir');
  const testFile1 = path.join(testDir, 'file1.txt');
  const testFile2 = path.join(testDir, 'file2.txt');
  const subDir = path.join(testDir, 'sub-dir');
  const subFile1 = path.join(subDir, 'sub-file1.txt');

  beforeAll(() => {
    // Create directories and files for testing
    fs.mkdirSync(testDir, { recursive: true });
    fs.writeFileSync(testFile1, 'Test content 1');
    fs.writeFileSync(testFile2, 'Test content 2');
    fs.mkdirSync(subDir, { recursive: true });
    fs.writeFileSync(subFile1, 'Sub directory file');
  });

  afterAll(() => {
    // Clean up - remove all created directories and files
    fs.rmSync(testDir, { recursive: true, force: true });
  });

  it('should find all files recursively', () => {
    const files = readFilenamesRecursiveSync(testDir);

    expect(files).toHaveLength(3);
    expect(files).toContain(testFile1);
    expect(files).toContain(testFile2);
    expect(files).toContain(subFile1);
  });

  it('should filter files based on a condition', () => {
    const files = readFilenamesRecursiveSync(testDir, (filePath) => filePath.includes('sub'));

    expect(files).toHaveLength(1);
    expect(files[0]).toBe(subFile1);
  });
});
