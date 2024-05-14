function isObject(value: any): value is object {
  return !!value && value.constructor === Object
}

export function getKeysPath<TValue extends object>(value: TValue): string[] {
  if (!value) return []
  return getKeys(value, [], '')
}

function getKeys(nested: any, paths: string[], dot = '.'): string[] {
  if (isObject(nested)) {
    return Object.entries(nested).flatMap(([k, v]) =>
      getKeys(v, [...paths, dot + k])
    )
  }
  if (Array.isArray(nested)) {
    return nested.flatMap((item, i) => getKeys(item, [...paths, `[${i}]`]))
  }
  return [paths.join('')]
}
