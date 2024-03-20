import { ServerTools as ToolFunc } from '../server-tools';
import { mergeSegments } from "./merge-segments";
import { splitSegments } from "./split-segments";

async function _segments(
  this: ToolFunc,
  {texts, model = 'Xenova/distiluse-base-multilingual-cased-v2'}: {texts?: string|string[], model?:string} = {},
) {
  const splitSegments = this.depends.splitSegments.getFuncWithPos()
  const mergeSegments = this.depends.mergeSegments.getFuncWithPos()
  const segments = await mergeSegments(await splitSegments(texts, model), model)
  return segments;
}

export const segments = new ToolFunc('segments', {
  func: _segments,
  description: 'Segmenting the text according to the topics',
  params: {
    texts: {name: 'texts', type: ['string', 'array'], required: true},
    model: {name: 'model', type: 'string', description: 'the embedding model name used'},
  },
  depends: { splitSegments, mergeSegments },
  result: 'array',
})
