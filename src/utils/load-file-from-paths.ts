import path from 'path'
import * as fs from 'fs'
import { extNameLevel, getMultiLevelExtname } from './filename'
import { NotFoundError } from './base-error'

/**
 * Checks if a file (not a directory) exists at the specified path.
 *
 * @param filepath - The path to the file to check.
 * @returns true if the file exists and is not a directory; otherwise, false.
 *
 * @example
 * ```typescript
 * const exists = fileIsExists('path/to/file.txt');
 * console.log(exists); // Outputs: true or false
 * ```
 */
export function fileIsExists(filepath: string) {
  const stat = fs.statSync(filepath, {throwIfNoEntry: false})
  return stat?.isFile()
}

/**
 * Loads a file from given paths, optionally searching for specific extensions.
 *
 * @param filename - The base filename to search for, without any file extension.
 * @param searchPaths - An array of directories to search for the file. Defaults to the current directory (`"."`) if not provided.
 * @param extNames - An array of file extensions to try, in order of preference. If not provided, the file will be searched for
 *                   without any extension.
 *
 * @returns The contents of the found file as a Buffer.
 * @throws {NotFoundError} If the file is not found in any of the search paths.
 *
 * @example
* ```typescript
* const content = loadFileFromPaths('config', ['/etc', '/usr/local/etc'], ['.json', '.yaml']);
* ```
*/
export function loadFileFromPaths(filename: string, searchPaths?: string[], extNames?: string[], options?: {filepath?: string, exclude?: string[]|string, signal?: AbortSignal}) {
  const signal = options?.signal
  const exclude = options?.exclude
  let result: string|Buffer|undefined
  // search the paths and try to load the script
  if (path.isAbsolute(filename)) {
    if (fileIsExists(filename)) {
      result = filename
    } else {
      result = tryGetFilepath(path.basename(filename), [path.dirname(filename)], {extNames, exclude, signal})
    }
  } else {
    if (!searchPaths) {
      searchPaths = ['.']
    }
    result = tryGetFilepath(filename, searchPaths, {extNames, exclude, signal})
  }

  if (result) {
    const filepath = result
    result = fs.readFileSync(result)
    if (options) {options.filepath = filepath}
  } else {
    throw new NotFoundError(filename, 'loadFileFromPaths')
  }
  return result
}

function tryGetFilepath(filename: string, searchPaths: string[], {extNames, signal, exclude = []}: {extNames?: string[], exclude?: string[]|string, signal?: AbortSignal}) {
  let result: string|undefined
  const exts: string[]|undefined = extNames ? extNames.map(ext => getMultiLevelExtname(filename, extNameLevel(ext))) : undefined
  if (typeof exclude === 'string') {exclude = [exclude]}

  for (const searchPath of searchPaths) {
    if (signal?.aborted) {
      throw signal.reason
    }
    const filePath = path.resolve(searchPath, filename)
    if (exts) {
      for (let i=0; i<exts.length; i++) {
        const extName = exts[i] !== extNames![i] ? extNames![i] : ''
        const filenameWithExt = filePath + extName
        if (!exclude.includes(filenameWithExt) && fileIsExists(filenameWithExt)) {
          result = filenameWithExt
          break
        }
      }
    } else {
      if (!exclude.includes(filePath) && fileIsExists(filePath)) {
        result = filePath
        break
      }
    }
  }
  return result
}

export function loadTextFromPaths(filename: string, searchPaths?: string[], extNames?: string[], options?: {encoding?: BufferEncoding, filepath?: string, signal?: AbortSignal}|BufferEncoding, exclude?: string[]|string) {
  let encoding: BufferEncoding
  if (typeof options === 'string') {
    encoding = options
    options = undefined
  } else {
    encoding = options?.encoding ?? 'utf8'
  }
  const result = loadFileFromPaths(filename, searchPaths, extNames, options)
  return result.toString(encoding)
}

/**
 * Recursively reads all filenames in the given directory or directories.
 * Optionally filters the results using a file matching callback.
 *
 * @param dir - A single directory path or an array of directory paths to start the search from.
 * @param options.isFileMatched - An optional callback that determines whether a file should be included in the result.
 * @param options.signal - An optional signal to abort the operation.
 * @returns An array of file paths that match the criteria.
 *
 * @example
* ```typescript
* const files = readFilenamesRecursiveSync('/path/to/directory', {isFileMatched: (filepath) => filepath.endsWith('.js')});
* console.log(files); // Outputs an array of JavaScript file paths.
* ```
*/
export function readFilenamesRecursiveSync(dir: string|string[], options?: {isFileMatched?: (filepath: string) => boolean, signal?: AbortSignal, level?: number}) {
  const result = [] as string[];
  const stack: string[] = typeof dir === 'string' ? [dir] : [...dir];
  const visitedDirs = new Set<string>()
  const signal = options?.signal
  const isFileMatched = options?.isFileMatched
  const maxLevel = options?.level
  let level = 0

  while (stack.length > 0) {
    if (signal?.aborted) {
      throw signal.reason
    }
    const currentDir = getRealFilepath(stack.pop()!);
    const absoluteDir = path.resolve(currentDir)
    if (visitedDirs.has(absoluteDir)) {continue}
    visitedDirs.add(absoluteDir)

    const stat = fs.statSync(currentDir, {throwIfNoEntry: false})
    if (stat?.isDirectory()) {
      const files = fs.readdirSync(currentDir, {withFileTypes: true})
      for (let j = 0; j < files.length; j++) {
        const file = files[j]
        const filepath = path.join(currentDir, file.name)
        if (file.isDirectory()) {
          stack.push(filepath)
        } else if (file.isFile() && (!isFileMatched || isFileMatched(filepath))) {
          result.push(filepath)
        }
      }
      level++
      if (maxLevel && level >= maxLevel) {break}
    }
  }
  return result
}

/**
 * Resolves the real file path, handling symbolic links.
 *
 * @param filepath - The file path to resolve.
 * @returns The real file path.
 *
 * @example
* ```typescript
* const realPath = getRealFilepath('/path/to/symbolic/link');
* console.log(realPath); // Outputs the resolved path.
* ```
*/
export function getRealFilepath(filepath: string) {
  // get the real dir if currentDir is a symbol Link
  const lstat = fs.lstatSync(filepath, {throwIfNoEntry: false})
  if (lstat?.isSymbolicLink()) {
    filepath = fs.readlinkSync(filepath)
  }
  return filepath
}
