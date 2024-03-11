import { throwError } from "../base-error";
import { ToolFunc } from "../tool-func";
import { splitSentence as _splitSentence } from '../utils/split-sentence';
import { truncTo as _truncTo } from "../utils/trunc-to";
import { isSimilar } from "./is-similar";

isSimilar.register()

declare const splitSentence: (text: string, best?: boolean)=> string[];

async function _splitSegments(this: ToolFunc, texts: string|string[], model?: string) {
  if (typeof texts === 'string') {texts = splitSentence(texts)}
  else if (!Array.isArray(texts)) {throwError('the texts parameter should be a string or string[]', 'segments')}
  if (!model) { model = this.modelId }

  const isSimilar = this.getFunc('isSimilar');

  const segment = [];
  const segments= [];
  let i=0;
  while (i<texts.length) {
    segment.push(texts[i++]);
    if (i >= texts.length) { break }
    const query = texts[i];
    if (query) {
      if (!(await isSimilar(query, segment, model || this.modelId))) {
        segments.push([...segment]);
        segment.length = 0;
      }
    }
  }
  if (segment.length) segments.push([...segment]);
  return segments;
}

export const splitSegments = new ToolFunc('splitSegments', {
  func: _splitSegments,
  description: 'Segmenting the text according to the topics simply',
  params: [
    {name: 'texts', type: ['string', 'array'], required: true, description: 'the texts to segment'},
    {name: 'model', type: 'string', description: 'the embedding model name used'},
    {name: 'passingScore', type: 'number', description: 'the min passing score'},
  ],
  result: 'array',
  scope: {truncTo: _truncTo, splitSentence: _splitSentence},
  setup(this: ToolFunc) {
    this.modelId = 'Xenova/distiluse-base-multilingual-cased-v2'
  }
})
