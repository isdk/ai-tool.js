import {isRegExp as _isRegExp, isRegExpStr } from 'util-ex'

export function isRegExp(value: any) {
  const result = isRegExpStr(value)
  return result || _isRegExp(value)
}

