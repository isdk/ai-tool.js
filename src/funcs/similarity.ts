import { NotFoundError } from '../base-error';
import { pipeline as pipeline2, cos_sim as cos_sim2 } from '@xenova/transformers';
import type { FeatureExtractionPipeline } from '@xenova/transformers';

import { ToolFunc } from "../tool-func";

function average(arr: number[]) {
  if (arr.length === 0) {
      throw new NotFoundError('Array must not be empty');
  }
  const sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
}

// TODO: workaround the vitest added `__vite_ssr_import_1__` to `pipeline` and `cos_sim`, it raise `ReferenceError: __vite_ssr_import_1__ is not defined`
async function _similarity(this: ToolFunc, query:string, texts: string|string[], model = 'Xenova/distiluse-base-multilingual-cased-v2', maxExtractors = 2) {
  let extractor = this.extractor.get(model) as FeatureExtractionPipeline
  if (!extractor) {
    if (this.extractor.size > maxExtractors) {this.extractor.clear()}
    extractor = await pipeline('feature-extraction', model);
    this.extractor.set(model, extractor);
  }
  if (texts && query) {
    if (!Array.isArray(texts)) { texts = [texts] }
    const embeddings = await extractor(texts, { pooling: 'cls', normalize: true });
    const query_embeddings = await extractor(query, { pooling: 'cls', normalize: true });
    const scores = embeddings.tolist().map(
      (embedding: any, i: number) => cos_sim(query_embeddings.data as number[], embedding)
    )
    const result = average(scores)
    return result
  }
}

export const similarity = new ToolFunc('similarity', {
  func: _similarity,
  description: 'Calculate the similarity between the query and the texts.',
  params: [
    {name: 'query', type: 'string', required: true},
    {name: 'texts', type: ['string', 'array'], required: true},
    {name: 'model', type: 'string', description: 'the embedding model name used'},
    {name: 'maxExtractors', type: 'number', description: 'the max cached embedding model count'},
  ],
  result: 'number',
  scope: {pipeline: pipeline2, cos_sim: cos_sim2, average},
  setup(this: ToolFunc) {
    this.extractor = new Map<String, FeatureExtractionPipeline>() // cache the embedding model
  }
})
