import { ToolFunc } from "../tool-func";
import { mergeSegments } from "./merge-segments";
import { splitSegments } from "./split-segments";

splitSegments.register()
mergeSegments.register()

async function _segments(this: ToolFunc, texts: string|string[], model = 'Xenova/distiluse-base-multilingual-cased-v2') {
  const splitSegments = this.getFunc('splitSegments')
  const mergeSegments = this.getFunc('mergeSegments')
  const segments = await mergeSegments(await splitSegments(texts, model), model)
  return segments;
}

export const segments = new ToolFunc('segments', {
  func: _segments,
  description: 'Segmenting the text according to the topics',
  params: [
    {name: 'texts', type: ['string', 'array'], required: true},
    {name: 'model', type: 'string', description: 'the embedding model name used'},
    {name: 'passingScore', type: 'number', description: 'the min passing score'},
  ],
  result: 'number',
})
