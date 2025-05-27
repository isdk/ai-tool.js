import path from 'path'

import { isSubdirectory, hasDirectoryIn, pruneSubdirectoriesInPlace, pruneSubdirectories } from './has-directory-in'

describe('isSubdirectory function', () => {
  it('should return true when childDir is a subdirectory of parentDir', () => {
    const parentDir = '/usr/local';
    const childDir = '/usr/local/include';
    expect(isSubdirectory(parentDir, childDir)).toBe(true);
  });

  it('should return true when childDir is a subdirectory of parentDir relative', () => {
    const parentDir = 'usr/local';
    const childDir = 'usr/local/include';
    expect(isSubdirectory(parentDir, childDir)).toBe(true);
  });

  it('should return false when childDir is not a subdirectory of parentDir', () => {
    const parentDir = 'usr/local';
    const childDir = '/usr/local2/include';
    expect(isSubdirectory(parentDir, childDir)).toBe(false);
  });

  it('should return false when childDir and parentDir are the same', () => {
    const parentDir = '/usr/local/include';
    const childDir = '/usr/local/include';
    expect(isSubdirectory(parentDir, childDir)).toBe(true);
  });

  it('should return false when childDir is an absolute path outside parentDir', () => {
    const parentDir = '/usr/local';
    const childDir = '/usr/local2/include';
    expect(isSubdirectory(parentDir, childDir)).toBe(false);
  });

  it('should return false when childDir is a relative path outside parentDir', () => {
    const parentDir = '/usr/local';
    const childDir = path.join(parentDir, '../local2/include');
    expect(isSubdirectory(parentDir, childDir)).toBe(false);
  });

  it('should return false when childDir is a sibling directory of parentDir', () => {
    const parentDir = '/usr/local';
    const childDir = path.join(parentDir, 'include', '../..');
    expect(isSubdirectory(parentDir, childDir)).toBe(false);
  });
});


describe('hasDirectoryIn', () => {
  it('should return true if the directory is a subdirectory of any in the array', () => {
    expect(hasDirectoryIn('/folder/subfolder', ['/folder'])).toBe(true)
  })

  it('should return false if the directory is not a subdirectory of any in the array', () => {
    expect(hasDirectoryIn('/folder/subfolder', ['/otherfolder'])).toBe(false)
  })

  it('should return true if the directory matches exactly one in the array', () => {
    expect(hasDirectoryIn('/folder', ['/folder'])).toBe(true)
  })

  it('should return false if the directory is not a subdirectory and does not match any in the array', () => {
    expect(hasDirectoryIn('/folder/subfolder', ['/otherfolder', '/anothertopfolder'])).toBe(false)
  })

  it('should return true if the directory is a subdirectory of multiple directories in the array', () => {
    expect(hasDirectoryIn('/folder/subfolder/subsubfolder', ['/folder', '/folder/subfolder'])).toBe(true)
  })

  it('should return false if the directory is a root directory and none in the array are root directories', () => {
    expect(hasDirectoryIn('/', ['/folder', '/anothertopfolder'])).toBe(false)
  })

  it('should handle empty directory array correctly', () => {
    expect(hasDirectoryIn('/folder/subfolder', [])).toBe(false)
  })

  it('should handle null or undefined input correctly', () => {
    expect(hasDirectoryIn(null as unknown as string, ['/folder'])).toBe(false)
    expect(hasDirectoryIn('/folder/subfolder', null as unknown as string[])).toBeUndefined()
  })
})


describe('pruneSubdirectories', () => {
  it('should keep parent directories and remove subdirectories', () => {
    const paths = ['/usr/local', '/usr/local/include', '/home/user/project', '/home/user']
    const result = pruneSubdirectories(paths)
    expect(result).toEqual(['/usr/local', '/home/user'])
  })

  it('should handle multiple nested levels', () => {
    const paths = [
      '/home/user/project',
      '/home/user',
      '/home/user/project/src',
      '/var/log',
      '/var/log/test',
    ]
    const result = pruneSubdirectories(paths)
    expect(result).toEqual(['/home/user', '/var/log'])
  })

  it('should not remove anything if no subdirectories exist', () => {
    const paths = ['/a', '/b', '/c']
    const result = pruneSubdirectories(paths)
    expect(result).toEqual(['/a', '/b', '/c'])
  })

  it('should deduplicate identical paths', () => {
    const paths = ['/a', '/a']
    const result = pruneSubdirectories(paths)
    expect(result).toEqual(['/a'])
  })
})

describe('pruneSubdirectoriesInPlace', () => {
  it('should modify the original array and keep only parent directories', () => {
    const paths = ['/usr/local', '/usr/local/include', '/home/user/project']
    pruneSubdirectoriesInPlace(paths)
    expect(paths).toEqual(['/usr/local', '/home/user/project'])
  })

  it('should handle multiple nested levels in-place', () => {
    const paths = [
      '/home/user/project',
      '/home/user',
      '/home/user/project/src',
      '/var/log',
      '/var/log/test',
    ]
    pruneSubdirectoriesInPlace(paths)
    expect(paths).toEqual(['/home/user', '/var/log'])
  })

  it('should not remove anything if no subdirectories exist in-place', () => {
    const paths = ['/a', '/b', '/c']
    pruneSubdirectoriesInPlace(paths)
    expect(paths).toEqual(['/a', '/b', '/c'])
  })

  it('should deduplicate identical paths in-place', () => {
    const paths = ['/a', '/a']
    pruneSubdirectoriesInPlace(paths)
    expect(paths).toEqual(['/a'])
  })

  it('should handle paths with trailing slashes', () => {
    const paths = ['/usr/local/', '/usr/local/include', '/home/user/project/']
    pruneSubdirectoriesInPlace(paths)
    expect(paths).toEqual(['/usr/local/', '/home/user/project/'])
  })

  it('should handle paths with Windows style separators', () => {
    const paths = ['C:\\Users\\user\\project\\', 'C:\\Users\\user', 'D:\\Data', 'C:\\Users\\John\\Documents', 'C:\\Users\\John\\']
    pruneSubdirectoriesInPlace(paths)
    expect(paths).toEqual(['C:\\Users\\user', 'D:\\Data', 'C:\\Users\\John\\'])
  })

  it('should handle paths with mixture style separators', () => {
    const paths = ['/home/user/', 'C:\\Program Files\\app', '/home/user/docs', 'C:\\Program Files\\']
    pruneSubdirectoriesInPlace(paths)
    expect(paths).toEqual(['/home/user/', 'C:\\Program Files\\'])
  })
})
