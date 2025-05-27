import path from 'path'

/**
 * Determines whether the `childDir` is a subdirectory of `parentDir`.
 *
 * @param parentDir - The directory to check as the potential parent.
 * @param childDir - The directory to check as the potential child.
 * @returns true if `childDir` is a subdirectory of `parentDir` or same folder, otherwise false.
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
  const result = paths.slice()
  pruneSubdirectoriesInPlace(result)
  return result
}

/**
 * Filters out subdirectories from the given array of paths in-place, keeping only the top-level (parent) directories.
 *
 * This function helps organize file paths by:
 * * Removing any subfolders that are completely contained within other folders
 * * Preserving the original order of paths you added
 * * Eliminating duplicate paths
 *
 * @param paths - Array of directory paths to clean (can mix different OS path formats)
 *
 * @example
 * ```ts
 * let paths = ['/usr/local', '/usr/local/include', '/home/user/project'];
 * pruneSubdirectoriesInPlace(paths);
 * // paths is now: ['/usr/local', '/home/user/project']
 * ```
 */
export function pruneSubdirectoriesInPlace(paths: string[]): void {
  const length = paths.length;
  if (length <= 1) return;

  // 创建索引映射，保持原始顺序
  const indexMap = new Map<string, number>();
  const normalizedPaths: string[] = [];

  for (let i = 0; i < length; i++) {
    const normalized = normalizePath(paths[i]);
    if (!indexMap.has(normalized)) {
      normalizedPaths.push(normalized);
      indexMap.set(normalized, i);
    }
  }

  // 按路径排序（字典序）
  const sortedPaths = [...normalizedPaths].sort();

  // 找出所有非子目录的路径
  const keepSet = new Set<string>();

  for (let i = 0; i < sortedPaths.length; i++) {
    const currentPath = sortedPaths[i];
    let isSubDir = false;

    // 检查是否是已保留路径的子目录
    for (const keptPath of keepSet) {
      if (isSubdirectory(keptPath, currentPath)) {
        isSubDir = true;
        break;
      }
    }

    if (!isSubDir) {
      keepSet.add(currentPath);
    }
  }

  // 重建原数组，保持原始顺序
  let writeIndex = 0;
  for (let i = 0; i < length; i++) {
    if (keepSet.has(normalizedPaths[i])) {
      if (writeIndex !== i) {
        paths[writeIndex] = paths[i];
      }
      writeIndex++;
    }
  }

  paths.length = writeIndex;
}

export function normalizePath(inputPath: string): string {
  let normalized = path.normalize(inputPath);

  normalized = normalized.split(/[/\\]/).join(path.posix.sep);

  // remove trailing slash, but keep root
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }

  return normalized;
}
