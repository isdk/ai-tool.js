import { CMD_ARG_FLAG_SYMBOL } from './types';

export interface ReplacePlacehoderOptions {
  startChar?: string|string[]
  endChar?: string|string[]
  placeholder?: string
  placehoders?: string[]
}

const defaultPlaceholderName = '__PlacEhoLdeR_'

/**
 * List of JS reserved words used to filter identifiers that should not be automatically mapped to names.
 */
export const RESERVED_WORDS = ['true', 'false', 'null', 'undefined', 'nan', 'infinity'];

/**
 * Unicode-aware JS identifier regex (ES2015+ u flag).
 * Allows $, _, and Unicode identifier start/continue characters.
 */
export const IDENTIFIER_REGEX = /^[$_\p{ID_Start}][$_\p{ID_Continue}]*$/u;

/**
 * Regex for dot-separated path identifiers (e.g., test.a.b).
 */
export const PATH_IDENTIFIER_REGEX = /^[$_\p{ID_Start}][$_\p{ID_Continue}]*(?:\.[$_\p{ID_Start}][$_\p{ID_Continue}]*)*$/u;

/**
 * Checks if a string is a valid JS identifier and not a reserved word.
 * Supports optional flag prefix stripping.
 */
export function isIdentifier(s: string, options?: { flagPrefix?: string | string[] }) {
  let name = s;
  if (options?.flagPrefix) {
    const prefixes = Array.isArray(options.flagPrefix) ? options.flagPrefix : [options.flagPrefix];
    const prefix = prefixes.find(p => s.startsWith(p));
    if (prefix) {
      name = s.slice(prefix.length);
    }
  }
  return IDENTIFIER_REGEX.test(name) && !RESERVED_WORDS.includes(name.toLowerCase());
}

/**
 * Wraps a value with a Flag Symbol.
 * For primitive types (Boolean, String, Number), uses wrapper objects to support
 * non-enumerable property attachment.
 */
export function wrapFlagValue(value: any, prefix: string) {
  let wrapped = value;
  const type = typeof value;

  if (type === 'boolean') {
    wrapped = new Boolean(value);
  } else if (type === 'string') {
    wrapped = new String(value);
  } else if (type === 'number') {
    wrapped = new Number(value);
  }

  if (wrapped && (typeof wrapped === 'object' || typeof wrapped === 'function')) {
    Object.defineProperty(wrapped, CMD_ARG_FLAG_SYMBOL, {
      value: prefix,
      enumerable: false,
      configurable: true,
      writable: true
    });
  }

  return wrapped;
}

/**
 * Checks if a string is a valid path identifier (dot-separated identifiers).
 */
export function isPathIdentifier(s: string) {
  // Matches the overall path format and ensures no segment is a reserved word.
  return PATH_IDENTIFIER_REGEX.test(s) && s.split('.').every(part => !RESERVED_WORDS.includes(part.toLowerCase()));
}

/**
 * Checks if a string is wrapped in quotes (", ', `).
 * Leading and trailing whitespace are ignored.
 */
export function isQuoted(s: string) {
  if (typeof s !== 'string') return false;
  const trimmed = s.trim();
  if (trimmed.length < 2) return false;
  const c = trimmed[0];
  return (c === '"' || c === "'" || c === '`') && trimmed[trimmed.length - 1] === c;
}

/**
 * Checks if a string is wrapped by specified character pairs.
 */
export function isStrWrapped(s: string, pairs = ['""', "''", '{}', '``']) {
  const trimmed = s.trim();
  return pairs.some(pair => trimmed[0] === pair[0] && trimmed[trimmed.length-1] === pair[1])
}

/**
 * Ensures a string is wrapped in quotes.
 */
export function ensureQuoted(s: string, quoteChar = '"') {
  if (!isQuoted(s)) {
    return quoteChar + s + quoteChar
  }
  return s
}

/**
 * Escapes and wraps a string in double quotes.
 * Avoids redundant escaping.
 */
export function quoteStr(str: string) {
  // Escape internal double quotes
  return '"' + str.replace(/(?<!\\)"/g, '\\"') + '"';
}

/**
 * Replaces specific wrapped substrings within a string with placeholders.
 * Useful for processing strings while ignoring quoted or bracketed content.
 */
export function replaceWithPlaceholder(content: string, options?: ReplacePlacehoderOptions) {
  let start = options?.startChar ? (Array.isArray(options.startChar) ? options.startChar : [options.startChar]) : ['"', "'"]
  let end = options?.endChar ? (Array.isArray(options.endChar) ? options.endChar : [options.endChar]) : start
  if (start.length !== end.length) {
    throw new Error('start and end characters must have the same length')
  }
  const placeholder = options?.placeholder ?? defaultPlaceholderName
  const isSame = start.every((s, i) => s === end[i])
  const placehoders = options?.placehoders ?? []

  if (isSame) {
    const escapedStart = start.map(c => '\\' + c)
    const regex = new RegExp(`(?<!\\\\)(${escapedStart.join('|')}).*?(?<!\\\\)\\1`, 'g')
    content = content.replace(regex, (match) => {
      const name = `${placeholder}${placehoders.length}`
      placehoders.push(match)
      return name
    })
  } else {
    for (let i = 0; i < start.length; i++) {
      const s = '\\' + start[i]
      const e = '\\' + end[i]
      const regex = new RegExp(`(?<!\\\\)${s}.*?(?<!\\\\)${e}`, 'g')
      content = content.replace(regex, (match) => {
        const name = `${placeholder}${placehoders.length}`
        placehoders.push(match)
        return name
      })
    }
  }

  return [ content, placehoders ] as [string, string[]]
}

/**
 * Restores original string content from placeholders.
 */
export function restoreFromPlacehoders(content: string, placehoders: string[], options?: ReplacePlacehoderOptions) {
  const placeholderName = options?.placeholder ?? defaultPlaceholderName
  return placehoders.reduce((acc, original, i) => acc.replace(new RegExp(placeholderName + i, 'g'), original), content)
}

