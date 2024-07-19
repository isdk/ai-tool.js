
export function jsonToMarkdownStr(mem: any, options?: {level?: number, visiting?: Set<any>, objectTag?: string, arrayTag?: string}) {
  const level = options?.level || 0
  const visiting = options?.visiting || new Set<any>()
  const objectTag = options?.objectTag || '*'
  const arrayTag = options?.arrayTag || '-'

  let result: string[] = []
  const spaces = ' '.repeat(level * 2)

  if (mem != null) {
    switch (typeof mem) {
      case 'object': {
        if (!visiting.has(mem)) {
          visiting.add(mem)
          if (Array.isArray(mem)) {
            result = mem.map(item => arrayTag + processItem(item));
          } else {
            result = Object.entries(mem).map(([key, value]) => objectTag + ' `' + key + '`:' + processItem(value));
          }
        } else {
          result = ['[Circular]'];
        }
      }; break;
      case 'string': {
        return mem;
      };
      default: {
        return JSON.stringify(mem);
      }
    }
  } else {
    result = ['null'];
  }
  return result.length ? spaces + result.join('\n'+spaces) : ''

  function processItem(item: any) {
    let prefix = (item != null && typeof item === 'object') ? '\n' : ' '
    return prefix + jsonToMarkdownStr(item, {level: level+1, visiting})
  }
}
