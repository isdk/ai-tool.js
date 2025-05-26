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

/**
 * Assigns directories from the source array to the destination array if they do not already exist in the destination.
 *
 * @param dest - The destination array to which new directories will be added.
 * @param src - The source array containing directories to be assigned to the destination.
 * @returns The updated destination array with newly assigned directories from the source.
 */
export function assignDirs(dest: string[], src: string[]) {
  for (const dir of src) {
    if (!hasDirectoryIn(dir, dest)) {
      dest.push(dir)
    }
  }
  return dest
}

/**
 * Filters out subdirectories from the given array of paths, keeping only the top-level (parent) directories.
 *
 * @param paths - An array of directory paths.
 * @returns A new array containing only the paths that are not subdirectories of any other path in the input.
 *
 * @example
 * ```ts
 * const paths = ['/usr/local', '/usr/local/include', '/home/user/project'];
 * const result = pruneSubdirectories(paths);
 * // result: ['/usr/local', '/home/user/project']
 * ```
 */
export function pruneSubdirectories(paths: string[]): string[] {
  const sorted = [...paths].sort((a, b) => a.length - b.length);
  const result: string[] = [];
  for (const p of sorted) {
    if (!result.some(fp => isSubdirectory(fp, p))) {
      result.push(p);
    }
  }
  return result;
}

/**
 * Filters out subdirectories from the given array of paths in-place, keeping only the top-level (parent) directories.
 *
 * This function modifies the original array.
 *
 * @param paths - An array of directory paths to be filtered in-place.
 *
 * @example
 * ```ts
 * let paths = ['/usr/local', '/usr/local/include', '/home/user/project'];
 * pruneSubdirectoriesInPlace(paths);
 * // paths is now: ['/usr/local', '/home/user/project']
 * ```
 */
export function pruneSubdirectoriesInPlace(paths: string[]): void {
  paths.sort((a, b) => a.length - b.length);
  let i = 0;
  while (i < paths.length) {
    const isChild = paths.slice(0, i).some(p => isSubdirectory(p, paths[i]));
    if (isChild) {
      paths.splice(i, 1);
    } else {
      i++;
    }
  }
}
