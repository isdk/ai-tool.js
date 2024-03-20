import { ServerTools as ToolFunc } from '../server-tools';
import { truncTo as _truncTo } from "../utils/trunc-to";
import { isSimilar } from "./is-similar";

async function _mergeSegments(
  this: ToolFunc,
  {segments, model}:{segments?: string[][], model?: string} = {},
) {
  if (!model) { model = this.modelId }
  if (!segments || segments.length === 0) { return []}

  const isSimilar = this.depends.isSimilar.getFuncWithPos()
  let i = 0
  const result = []
  while (i < segments.length) {
    const item = segments[i++]
    if (item.length === 1 && i < segments.length) {
      const query = item[0]
      const segment = segments[i++]
      if (await isSimilar(query, segment, model)) {
        segment.unshift(query)
        result.push(segment)
      } else {
        result.push(item)
        result.push(segment)
      }
    } else {
      result.push(item)
    }
  }
  return result
}

export const mergeSegments = new ToolFunc('mergeSegments', {
  func: _mergeSegments,
  description: 'merge Segments in same topics simply',
  params: {
    segments: {name: 'segments', type: 'array', required: true, description: 'the segments to merge'},
    model: {name: 'model', type: 'string', description: 'the embedding model name used'},
  },
  result: 'array',
  depends: { isSimilar },
  setup(this: ToolFunc) {
    this.modelId = 'Xenova/distiluse-base-multilingual-cased-v2'
  },
})
