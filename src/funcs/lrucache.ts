import { Cache as _Cache } from 'secondary-cache'
import type { ICacheOptions } from 'secondary-cache'
import { ToolFunc } from '../tool-func'


export function _lrucache(
  this: ToolFunc,
  {key, value, options}: {key?: string, value?: any, options?: ICacheOptions | number} = {},
): _Cache {
  if (key === undefined) {
    if (options) this.cache.setDefaultOptions(options)
  } else if (value === null) {
    return this.cache.del(key)
  } else if (value !== undefined) {
    return this.cache.set(key, value, options)
  } else {
    return this.cache.get(key)
  }
  return this.cache;
}

export function createLRUCache(name: string, options?: ICacheOptions | number) {
  let result = ToolFunc.get(name)
  if (!result) {
    result = new ToolFunc(name, {
      func: _lrucache,
      description: 'get/set LRU cache or return the LRUCache object',
      params: {
        key: { name: 'key', type: 'string', description: 'the key is undefined means change the default cache options' },
        value: { name: 'value', type: 'any', description: 'the value to store, if value is null means remove the key' },
        options: { name: 'options', type: 'object|number', description: 'the optional cache options:{capacity,expires,cleanInterval} or expires' },
      },
      result: 'any',
    })
    result.cache = new _Cache(options)
  }
  return result
}

export const lrucache = createLRUCache('lrucache')
