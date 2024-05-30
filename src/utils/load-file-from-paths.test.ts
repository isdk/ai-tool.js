import {type Mock, vi} from 'vitest'
import path from 'path';
import * as fs from 'fs';

import {loadFileFromPaths} from './load-file-from-paths'
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

  it('throws NotFoundError when file is not found', () => {
    (fs.existsSync as Mock).mockImplementation(() => false);

    expect(() => loadFileFromPaths('nonexistent')).toThrow(NotFoundError);
    expect(fs.existsSync).toHaveBeenCalled();
  });
});