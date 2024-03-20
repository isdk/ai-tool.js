import { throwError as _throwError } from "../utils/base-error";
import { ServerTools as ToolFunc } from '../server-tools';
import { splitSentence as _splitSentence } from '../utils/split-sentence';
import { isSimilar as _isSimilar } from "./is-similar";

declare const splitSentence: (text: string, best?: boolean)=> string[];
declare function throwError(message: string, name?: string | object | undefined, status?: number): void;

async function _splitSegments(
  this: ToolFunc,
  {texts, model}: {texts?: string|string[], model?: string} = {}
) {
  if (typeof texts === 'string') {
    texts = splitSentence(texts)
  } else if (!Array.isArray(texts)) {
    console.log('TCL:: ~ texts:', texts);
    throwError('the texts parameter should be a string or string[]', 'segments')
  }

  if (!model) { model = this.modelId }

  const isSimilar = this.depends.isSimilar.getFuncWithPos();

  const segment = [];
  const segments= [];
  let i=0;
  while (i<texts!.length) {
    segment.push(texts![i++]);
    if (i >= texts!.length) { break }
    const query = texts![i];
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
  params: {
    texts: {name: 'texts', type: ['string', 'array'], required: true, description: 'the texts to segment'},
    model: {name: 'model', type: 'string', description: 'the embedding model name used'},
  },
  result: 'array',
  scope: {splitSentence: _splitSentence, throwError: _throwError},
  depends: { isSimilar: _isSimilar },
  setup(this: ToolFunc) {
    this.modelId = 'Xenova/distiluse-base-multilingual-cased-v2'
  }
})
