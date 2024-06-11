import path from 'path'
import * as fs from 'fs'
import { extNameLevel, getMultiLevelExtname } from './filename'
import { NotFoundError } from './base-error'

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
export function loadFileFromPaths(filename: string, searchPaths?: string[], extNames?: string[], options?: {filepath?: string}) {
  let result: string|Buffer|undefined
  // search the paths and try to load the script
  if (path.isAbsolute(filename)) {
    if (fs.existsSync(filename)) {
      result = filename
    } else {
      result = tryGetFilepath(path.basename(filename), [path.dirname(filename)], extNames)
    }
  } else {
    if (!searchPaths) {
      searchPaths = ['.']
    }

    result = tryGetFilepath(filename, searchPaths, extNames)
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

function tryGetFilepath(filename: string, searchPaths: string[], extNames?: string[]) {
  let result: string|undefined
  const exts: string[]|undefined = extNames ? extNames.map(ext => getMultiLevelExtname(filename, extNameLevel(ext))) : undefined

  for (const searchPath of searchPaths) {
    const filePath = path.resolve(searchPath, filename)
    if (exts) {
      for (let i=0; i<exts.length; i++) {
        const extName = exts[i] !== extNames![i] ? extNames![i] : ''
        const filenameWithExt = filePath + extName
        if (fs.existsSync(filenameWithExt)) {
          result = filenameWithExt
          break
        }
      }
    } else {
      if (fs.existsSync(filePath)) {
        result = filePath
        break
      }
    }
  }
  return result
}

export function loadTextFromPaths(filename: string, searchPaths?: string[], extNames?: string[], options?: {encoding?: BufferEncoding, filepath?: string}|BufferEncoding) {
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
