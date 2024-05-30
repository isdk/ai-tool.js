import path from 'path'
import { ErrorCode, throwError } from './base-error';

/**
 * Regular expression pattern for reserved characters in a filename.
 * do not use /g global option here: when the regex is executed multiple times, it will always begin where it left off last time.
 */
export const FilenameReservedRegex = /[<>:"/\\|?*\u0000-\u001F]/;

/**
 * Regular expression pattern for reserved names on Windows systems.
 */
export const WindowsReservedNameRegex = /^(con|prn|aux|nul|com\d|lpt\d)$/i;

// Doesn't make sense to have longer filenames
/**
 * Maximum allowed length for a filename.
 */
const MAX_FILENAME_LENGTH = 100;

/**
 * Regular expression pattern for relative paths in a filename.
 */
const ReRelativePathRegex = /^\.+(\\|\/)|^\.+$/;

/**
 * Regular expression pattern for filenames ending with multiple periods.
 */
const ReTrailingPeriodsRegex = /\.+$/;

/**
 * Regular expression pattern for control characters in a filename.
 * LEFT-TO-RIGHT MARK: U+200E-U+200F; Bidirectional overrides: U+202A–U+202E; LEFT-TO-RIGHT ISOLATE: U+2066–U+2069
 */
const ReControlCharsRegex = /[\u0000-\u001F\u0080-\u009F\u200E\u200F\u202A-\u202E\u2066-\u2069]/; // eslint-disable-line no-control-regex

/**
 * Returns a new regular expression instance for reserved filename characters with the 'g' flag.
 * use this to reset the with global option
 * @returns A compiled regular expression for reserved filename characters.
 */
export function filenameReservedRegex() {
  return new RegExp(FilenameReservedRegex.source, 'g')
}

/**
 * Returns a new regular expression instance for control characters in a filename with the 'g' flag.
 * @returns A compiled regular expression for control characters in a filename.
 */
export function reControlCharsRegex() {
  return new RegExp(ReControlCharsRegex.source, 'g')
}

/**
 * Validates if a given string is a valid filename.
 * @param {string} filename - The filename to be validated.
 * @returns True if the filename is valid, false otherwise.
 * @throws {TypeError} If the input is not a string.
 * @example
* isValidFilename('myFile.txt'); // Returns true
* isValidFilename('my<file.txt'); // Returns false
*/
export function isValidFilename(filename:string) {
  return filename && !(FilenameReservedRegex.test(filename) || reControlCharsRegex().test(filename) || ReRelativePathRegex.test(filename) || ReTrailingPeriodsRegex.test(filename));
}

/**
 * Validates whether the given filepath is valid.
 * @param filepath - The filepath to be checked, represented as a string.
 * @returns A boolean indicating whether the filepath is valid. Returns true if valid; false otherwise.
 */
export function isValidFilepath(filepath:string) {
  const parts = filepath.split(path.sep)
  // if it's win32 then (parts[0] && path.dirname(parts[0]) === parts[0]) parts[0] is root dir
  // if it's linux/unix parts[0] is empty string
   if (filepath[0] === '/' || (parts[0] && path.dirname(parts[0]) === parts[0])) {
    parts.shift() // Remove the root directory part
   }
	// Validate every segment of the path
  return parts.every(isValidFilename)
}

export interface SanitizeFilenameOptions {
  replacement?: string
  maxLength?: number
}

/**
 * Sanitizes a given filename by replacing invalid characters with a specified replacement character or a default.
 * @param filename - The filename to sanitize, represented as a string.
 * @param options - An optional object containing configuration options:
 *   - `replacement` {string} - The character to replace invalid characters with. Default is '!'. Cannot contain reserved filename characters.
 *   - `maxLength` {number} - The maximum length of the sanitized filename. Default is `MAX_FILENAME_LENGTH`.
 * @returns The sanitized filename.
 * @throws {Error} - If the `replacement` contains reserved filename characters or control characters.
 */
export function sanitizeFilename(filename:string, options: SanitizeFilenameOptions = {}) {
  const replacement = options.replacement || '!';

	if (FilenameReservedRegex.test(replacement) || ReControlCharsRegex.test(replacement)) {
		throwError('Replacement string cannot contain reserved filename characters', 'sanitizeFilename', ErrorCode.InvalidArgument);
	}

  if (replacement.length > 0) {
    const ReRepeatedReservedCharactersRegex = /([<>:"/\\|?*\u0000-\u001F]){2,}/; // eslint-disable-line no-control-regex
		filename = filename.replace(ReRepeatedReservedCharactersRegex, '$1');
	}
	filename = filename.normalize('NFD');
	filename = filename.replace(ReRelativePathRegex, replacement);
	filename = filename.replace(filenameReservedRegex(), replacement);
	filename = filename.replace(reControlCharsRegex(), replacement);
	filename = filename.replace(ReTrailingPeriodsRegex, '');

	if (replacement.length > 0) {
		const startedWithDot = filename[0] === '.';

		// We removed the whole filename
		if (!startedWithDot && filename[0] === '.') {
			filename = replacement + filename;
		}

		// We removed the whole extension
		if (filename[filename.length - 1] === '.') {
			filename += replacement;
		}
	}

	filename = WindowsReservedNameRegex.test(filename) ? filename + replacement : filename;
	const allowedLength = typeof options.maxLength === 'number' ? options.maxLength : MAX_FILENAME_LENGTH;
	if (filename.length > allowedLength) {
		const extensionIndex = filename.lastIndexOf('.');
		if (extensionIndex === -1) {
			filename = filename.slice(0, allowedLength);
		} else {
			const str = filename.slice(0, extensionIndex);
			const extension = filename.slice(extensionIndex);
			filename = str.slice(0, Math.max(1, allowedLength - extension.length)) + extension;
		}
	}
  return filename;
}

/**
 * Sanitizes each part of a file path and reassembles it, ensuring the path is valid according to provided options.
 * @param filepath - The file path to sanitize, represented as a string.
 * @param options - Optional settings for sanitization, extending `SanitizeFilenameOptions`. Allows customization of replacement characters and maximum filename length.
 * @returns The sanitized file path as a string.
 */
export function sanitizeFilepath(filepath:string, options: SanitizeFilenameOptions = {}) {
  const parts = filepath.split(path.sep)
  let root: string | undefined
  // if it's win32 then (parts[0] && path.dirname(parts[0]) === parts[0]) parts[0] is root dir
  // if it's linux/unix parts[0] is empty string for root dir
  if (filepath[0] === '/' || (parts[0] && path.dirname(parts[0]) === parts[0])) {
    root = parts.shift()
  }

	// Sanitize each part of the path excluding the root (if any)
	const result = parts.map(p => sanitizeFilename(p, options))

	// Prepend the root directory back to the sanitized parts, if it was identified
	if (root !== undefined) {result.unshift(root)}

	// Rejoin the sanitized parts using the appropriate path separator
	return result.join(path.sep)
}

/**
 * Retrieves multi-level file extension
 * @param filename The file name
 * @param level The level, default is 1, indicating the number of extension levels to retrieve
 * @returns Returns a concatenated string of multiple extensions, or an empty string if no extension is found
 */
export function getMultiLevelExtname(filename: string, level: number = 1) {
  let result = '' // Initialize the result string for storing extensions
  while (level--) { // Decrement level and loop until the specified level is reached
    const extname = path.extname(filename) // Get the current file's extension
    if (extname) {
      result = extname + result // Prepend the current extension to the result string
      filename = path.basename(filename, extname) // Update filename by removing the obtained extension
    } else {
      break // If no extension exists, exit the loop
    }
  }
  return result // Return the concatenated extension string
}

/**
 * Calculates the level of an extension name.
 *
 * The level represents the number of dots ('.') in the extension name, excluding the first dot which separates
 * the base filename from the extension. For example, the level of ".txt" is 1, and the level of ".tar.gz" is 2.
 *
 * @param extName - The extension name to analyze. It should start with a dot ('.').
 * @returns The level of the extension name, which is the count of dots minus one.
 *
 * @example
* ```typescript
* // Returns 0
* extNameLevel("no-file-ext");
*
* // Returns 2
* extNameLevel(".tar.gz");
*
* // Returns 1
* extNameLevel(".json5");
* ```
*/
export function extNameLevel(extName: string) {
  return extName.split('.').length - 1
}
