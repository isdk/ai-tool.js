import {type Mock, vi} from 'vitest'
import path from 'path';
import * as fs from 'fs';

import {getFileMetaInfo, hashFile, loadFileFromPaths, loadTextFromPaths} from './load-file-from-paths'
import { NotFoundError } from './base-error';
import { getPackageDir } from './get-package-dir';

vi.mock('fs', async (importOriginal) => {
  const p = await importOriginal() as any
  return {...p, existsSync: vi.fn(), readFileSync: vi.fn(), statSync: vi.fn()}
})

describe('loadFileFromPaths', () => {
  beforeEach(() => {
    // Reset the mocked fs module between tests
    vi.resetAllMocks();
  });

  it('loads a text file with detected encoding automatically', () => {
    const mockFilePath = '/absolute/path/to/file';

    (fs.statSync as Mock).mockReturnValue({isFile: ()=> true});
    (fs.readFileSync as Mock).mockReturnValueOnce(Buffer.from([
      0xa6, 0xb8, 0xb1, 0x60, 0xa5, 0xce, 0xb0, 0xea,
      0xa6, 0x72, 0xbc, 0xd0, 0xb7, 0xc7, 0xa6, 0x72,
      0xc5, 0xe9, 0xaa, 0xed
    ]));
    const result = loadTextFromPaths(mockFilePath)
    expect(result).toBe('次常用國字標準字體表')
    expect(fs.statSync).toHaveBeenCalledWith(path.resolve(mockFilePath), {throwIfNoEntry: false});
    expect(fs.readFileSync).toHaveBeenCalledWith(mockFilePath);
  });

  it('loads a file from an absolute path', () => {
    const mockFilePath = '/absolute/path/to/file';

    (fs.statSync as Mock).mockReturnValue({isFile: ()=> true});
    (fs.readFileSync as Mock).mockReturnValueOnce(Buffer.from('file content'));

    expect(loadFileFromPaths(mockFilePath)).toBeInstanceOf(Buffer);
    expect(fs.statSync).toHaveBeenCalledWith(path.resolve(mockFilePath), {throwIfNoEntry: false});
    expect(fs.readFileSync).toHaveBeenCalledWith(mockFilePath);
  });

  it('loads a file from a relative path with default search path', () => {
    const mockFilename = 'relativeFile';
    const mockSearchPath = '.';
    const mockFilePath = path.join(mockSearchPath, mockFilename);
    (fs.statSync as Mock).mockReturnValueOnce({isFile: ()=>true});
    (fs.readFileSync as Mock).mockReturnValueOnce(Buffer.from('file content'));

    expect(loadFileFromPaths(mockFilename)).toBeInstanceOf(Buffer);
    expect(fs.statSync).toHaveBeenCalledWith(path.resolve(mockFilePath), {throwIfNoEntry: false});
    expect(fs.readFileSync).toHaveBeenCalledWith(path.resolve(mockFilePath));
  });

  it('loads a file from a relative path with custom search paths', () => {
    const mockFilename = 'relativeFile';
    const mockSearchPaths = ['/custom/path1', '/custom/path2'];
    const mockFilePath = path.join(mockSearchPaths[1], mockFilename + '.ext');
    (fs.statSync as Mock).mockImplementation((p) => ({isFile: ()=>p === mockFilePath}));
    (fs.readFileSync as Mock).mockReturnValueOnce(Buffer.from('file content'));

    expect(loadFileFromPaths(mockFilename, mockSearchPaths, ['.ext'])).toBeInstanceOf(Buffer);
    expect(fs.statSync).toHaveBeenCalledTimes(2); // Once for each search path
    expect(fs.readFileSync).toHaveBeenCalledWith(path.resolve(mockFilePath));
  });

  it('loads a file from a relative path with exclude', () => {
    const mockFilename = 'relativeFile';
    const mockSearchPaths = ['/custom/path1', '/custom/path2', 'custom/path3'];
    const mockFilePath = path.join(mockSearchPaths[1], mockFilename + '.ext');
    const mockFilePath2 = path.join(mockSearchPaths[2], mockFilename + '.ext');
    (fs.statSync as Mock).mockImplementation((p) => {
      return {isFile: ()=> (p === mockFilePath) || (p === path.resolve(mockFilePath2))}
    });
    (fs.readFileSync as Mock).mockReturnValueOnce(Buffer.from('file content'));

    expect(loadFileFromPaths(mockFilename, mockSearchPaths, ['.ext'], {exclude: mockFilePath})).toBeInstanceOf(Buffer);
    expect(fs.statSync).toHaveBeenCalledTimes(2); // Once for each search path
    expect(fs.readFileSync).toHaveBeenCalledTimes(1);
    expect(fs.readFileSync).toHaveBeenCalledWith(path.resolve(mockFilePath2));
  });

  it('throws NotFoundError when file is not found', () => {
    (fs.statSync as Mock).mockImplementation(() => undefined);

    expect(() => loadFileFromPaths('nonexistent')).toThrow(NotFoundError);
    expect(fs.statSync).toHaveBeenCalled();
  });

  it('loads a file from an absolute path from search', () => {
    const mockFilePath = '/absolute/path/to/file';

    (fs.statSync as Mock).mockImplementation((file) => ({isFile: () => path.extname(file) === '.yaml'}));
    (fs.readFileSync as Mock).mockImplementation((file) => Buffer.from(file));
    const opts = {} as any
    const result = loadFileFromPaths(mockFilePath, undefined, ['.yaml'], opts)
    expect(result).toBeInstanceOf(Buffer);
    expect(result.toString('utf8')).toBe(mockFilePath+'.yaml');
    expect(fs.statSync).toHaveBeenCalled();
    expect(fs.readFileSync).toHaveBeenCalledWith(mockFilePath+'.yaml');
    expect(opts.filepath).toBe(mockFilePath+'.yaml');
  });

  it('throws AbortError when signal is aborted', () => {
    const mockFilePath = '/absolute/path/to/file';

    (fs.statSync as Mock).mockImplementation((file) => ({isFile: () => path.extname(file) === '.yaml'}));
    (fs.readFileSync as Mock).mockImplementation((file) => Buffer.from(file));
    const aborter = new AbortController();
    const opts = {signal: aborter.signal} as any
    aborter.abort(new Error('my aborted'));
    expect(() => loadFileFromPaths(mockFilePath, undefined, ['.yaml'], opts)).toThrow('my aborted');
  });

});

describe('hashFile', () => {
  it('returns correct hash for a given file', async () => {
    const filePath = path.join(getPackageDir(__dirname), 'test','test-file.md');
    const expectedHash = '⣖杀笼雦Ɵ';

    const result = await hashFile(filePath);

    expect(result).toBe(expectedHash);
  })
})

describe('getFileMetaInfo', () => {
  it('returns metainfo for a given file', async () => {
    const filePath = path.join(getPackageDir(__dirname), 'test','test-file.md');

    const result = await getFileMetaInfo(filePath);
    expect(result).toMatchObject({
      name: 'test-file.md',
      mtime: new Date('2024-10-13T11:47:00.584Z'),
      ctime: new Date('2024-10-13T11:47:00.584Z'),
      size: 945,
      hash: 'xxhash32:嘙蚥Ɵ',
      mimeType: 'text/markdown',
      id: 'file://' + path.resolve(filePath),
    })

  })
})