
export function jsonToMarkdownStr(mem: any, options?: {level?: number, visiting?: Set<any>, objectTag?: string, arrayTag?: string, parent?: any, title?: string|boolean}) {
  const level = options?.level || 0
  const visiting = options?.visiting || new Set<any>()
  const objectTag = options?.objectTag || '*'
  const arrayTag = options?.arrayTag || '-'
  // let parent = options?.parent
  const titleName = options?.title === true ? 'name' : options?.title

  let result: string[] = []
  const spaces = ' '.repeat(level * 2)

  if (mem != null) {
    switch (typeof mem) {
      case 'object': {
        if (!visiting.has(mem)) {
          visiting.add(mem)
          if (Array.isArray(mem)) {
            result = mem.map(item => arrayTag + processItem(item, mem));
          } else {
            result = Object.entries(mem).map(([key, value]) => objectTag + ' `' + key + '`:' + processItem(value, mem));
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

  function processItem(item: any, parent?: any) {
    const isItemObj = item != null && typeof item === 'object'
    let titleValue = ''
    if (titleName && typeof titleName === 'string' && isItemObj) {
      if (item[titleName] && typeof item[titleName] === 'string') {
        titleValue = ' ' + item[titleName]
        delete item[titleName]
      }
    }
    let prefix = isItemObj ? titleValue+'\n' : ' '
    return prefix + jsonToMarkdownStr(item, {level: level+1, visiting, parent})
  }
}
