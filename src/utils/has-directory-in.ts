import path from 'path'

/**
 * Determines whether the `childDir` is a subdirectory of `parentDir`.
 *
 * @param parentDir - The directory to check as the potential parent.
 * @param childDir - The directory to check as the potential child.
 * @returns true if `childDir` is a subdirectory of `parentDir`, otherwise false.
 *
 * @example
* ```typescript
* const parentDir = '/usr/local';
* const childDir = '/usr/local/include';
* const result = isSubdirectory(parentDir, childDir); // true
* ```
*/
export function isSubdirectory(parentDir: string, childDir: string): boolean {
 try {
   const relativePath = path.relative(path.resolve(parentDir), path.resolve(childDir));
   return !relativePath.startsWith('..') && !path.isAbsolute(relativePath);
 } catch {
   return false;
 }
}

/**
 * Checks if a given directory is a subdirectory of any directory in the provided array.
 *
 * @param dir The directory path to check.
 * @param dirs An array of directory paths.
 * @returns true if the given directory is a subdirectory of any directory in the array; otherwise, false.
 *
 * @example
 * // Returns true if 'subdir' is within 'parentdir'
 * hasDirectoryIn('parentdir/subdir', ['parentdir', 'otherdir']); // true
 */
export function hasDirectoryIn(dir: string, dirs?: string[]) {
 return dirs?.some(d => isSubdirectory(d, dir))
}