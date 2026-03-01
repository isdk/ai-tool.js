import { FLAG_SYMBOL } from './types';

export interface ReplacePlacehoderOptions {
  startChar?: string|string[]
  endChar?: string|string[]
  placeholder?: string
  placehoders?: string[]
}

const defaultPlaceholderName = '__PlacEhoLdeR_'

/**
 * JS 保留字列表，用于过滤不应作为自动名称映射的标识符。
 */
export const RESERVED_WORDS = ['true', 'false', 'null', 'undefined', 'nan', 'infinity'];

/** 
 * 支持 Unicode 的 JS 标识符正则 (ES2015+ u flag)。
 * 允许 $、_ 以及 Unicode 标识符字符。
 */
export const IDENTIFIER_REGEX = /^[$_\p{ID_Start}][$_\p{ID_Continue}]*$/u;

/**
 * 支持点号分隔的路径标识符正则 (如 test.a.b)。
 */
export const PATH_IDENTIFIER_REGEX = /^[$_\p{ID_Start}][$_\p{ID_Continue}]*(?:\.[$_\p{ID_Start}][$_\p{ID_Continue}]*)*$/u;

/**
 * 判断字符串是否为合法的 JS 标识符且非保留字。
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
 * 将值包装为带有 Flag 标记的对象。
 * 对于简单类型 (Boolean, String, Number)，使用包装类以支持挂载不可枚举属性。
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
    Object.defineProperty(wrapped, FLAG_SYMBOL, {
      value: prefix,
      enumerable: false,
      configurable: true,
      writable: true
    });
  }

  return wrapped;
}

/**
 * 判断字符串是否为合法的路径标识符 (点号分隔)。
 */
export function isPathIdentifier(s: string) {
  // 整体匹配路径格式，且每一部分都不是保留字
  return PATH_IDENTIFIER_REGEX.test(s) && s.split('.').every(part => !RESERVED_WORDS.includes(part.toLowerCase()));
}

/**
 * 判断字符串是否被引号包裹 (支持 ", ', `)。
 * 会自动忽略首尾空白。
 */
export function isQuoted(s: string) {
  if (typeof s !== 'string') return false;
  const trimmed = s.trim();
  if (trimmed.length < 2) return false;
  const c = trimmed[0];
  return (c === '"' || c === "'" || c === '`') && trimmed[trimmed.length - 1] === c;
}

/**
 * 判断字符串是否被指定的成对字符包裹。
 */
export function isStrWrapped(s: string, pairs = ['""', "''", '{}', '``']) {
  const trimmed = s.trim();
  return pairs.some(pair => trimmed[0] === pair[0] && trimmed[trimmed.length-1] === pair[1])
}

/**
 * 确保字符串被引号包裹。
 */
export function ensureQuoted(s: string, quoteChar = '"') {
  if (!isQuoted(s)) {
    return quoteChar + s + quoteChar
  }
  return s
}

/**
 * 转义并用引号包裹字符串。
 * 避免重复转义。
 */
export function quoteStr(str: string) {
  // 转义内部的双引号
  return '"' + str.replace(/(?<!\\)"/g, '\\"') + '"';
}

/**
 * 将内容中的特定包裹字符串替换为占位符。
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
 * 从占位符恢复原始字符串内容。
 */
export function restoreFromPlacehoders(content: string, placehoders: string[], options?: ReplacePlacehoderOptions) {
  const placeholderName = options?.placeholder ?? defaultPlaceholderName
  return placehoders.reduce((acc, original, i) => acc.replace(new RegExp(placeholderName + i, 'g'), original), content)
}
