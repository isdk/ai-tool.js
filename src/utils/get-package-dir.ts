import path from 'path'
import {packageDirectorySync} from 'pkg-dir';

/**
 * Retrieves the package directory from the current working directory.
 *
 * @param cwd - The current working directory.
 *
 * Notes:
 * - The project root directory must contain either the `src` (source files directory) or `dist` (compiled files directory) as a fallback.
 * - If `packageDirectorySync` fails to find the package directory, it falls back to checking for `src` or `dist` directories.
 * - If none of these directories are found, an error is thrown.
 *  * @example
 * // Example usage
 * const packageDir = getPackageDir(__dirname);
 * console.log(packageDir); // Output: '/path/to/project'
 */
export function getPackageDir(cwd: string) {
  const pkgDir = packageDirectorySync({cwd})
  if (pkgDir) {return pkgDir}
  const parts = cwd.split(path.sep)
  let ix = parts.lastIndexOf('dist')
  if (ix > 0) {
    return parts.slice(0, ix).join(path.sep)
  }
  ix = parts.lastIndexOf('src')
  if (ix > 0) {
    return parts.slice(0, ix).join(path.sep)
  }
  throw new Error('can not find package directory')
}
