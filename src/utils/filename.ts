import path from 'path'

// do not use /g global option here: when the regex is executed multiple times, it will always begin where it left off last time.
export const FilenameReservedRegex = /[<>:"/\\|?*\u0000-\u001F]/;
export const WindowsReservedNameRegex = /^(con|prn|aux|nul|com\d|lpt\d)$/i;

// Doesn't make sense to have longer filenames
const MAX_FILENAME_LENGTH = 100;

const ReRelativePathRegex = /^\.+(\\|\/)|^\.+$/;
const ReTrailingPeriodsRegex = /\.+$/;

// LEFT-TO-RIGHT MARK: U+200E-U+200F; Bidirectional overrides: U+202A–U+202E; LEFT-TO-RIGHT ISOLATE: U+2066–U+2069
const ReControlCharsRegex = /[\u0000-\u001F\u0080-\u009F\u200E\u200F\u202A-\u202E\u2066-\u2069]/; // eslint-disable-line no-control-regex

// use this to reset the with global option
export function filenameReservedRegex() {
  return new RegExp(FilenameReservedRegex.source, 'g')
}
export function reControlCharsRegex() {
  return new RegExp(ReControlCharsRegex.source, 'g')
}

export function isValidFilename(filename:string) {
  return filename && !(FilenameReservedRegex.test(filename) || reControlCharsRegex().test(filename) || ReRelativePathRegex.test(filename) || ReTrailingPeriodsRegex.test(filename));
}

export function isValidFilepath(filepath:string) {
  const parts = filepath.split(path.sep)
  // if it's win32 then (parts[0] && path.dirname(parts[0]) === parts[0]) parts[0] is root dir
  // if it's linux/unix parts[0] is empty string
   if (filepath[0] === '/' || (parts[0] && path.dirname(parts[0]) === parts[0])) {
    parts.shift()
   }
  return parts.every(isValidFilename)
}

export interface SanitizeFilenameOptions {
  replacement?: string
  maxLength?: number
}

export function sanitizeFilename(filename:string, options: SanitizeFilenameOptions = {}) {
  const replacement = options.replacement || '!';

	if (FilenameReservedRegex.test(replacement) || ReControlCharsRegex.test(replacement)) {
		throw new Error('Replacement string cannot contain reserved filename characters');
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

export function sanitizeFilepath(filepath:string, options: SanitizeFilenameOptions = {}) {
  const parts = filepath.split(path.sep)
  let root: string | undefined
  // if it's win32 then (parts[0] && path.dirname(parts[0]) === parts[0]) parts[0] is root dir
  // if it's linux/unix parts[0] is empty string for root dir
  if (filepath[0] === '/' || (parts[0] && path.dirname(parts[0]) === parts[0])) {
    root = parts.shift()
  }
  const result = parts.map(p => sanitizeFilename(p, options))
  if (root !== undefined) {result.unshift(root)}
  return result.join(path.sep)
}