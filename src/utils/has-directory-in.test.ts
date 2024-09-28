import path from 'path'

import { isSubdirectory, hasDirectoryIn } from './has-directory-in'

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
