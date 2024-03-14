import { NotFoundError } from '../base-error';
import { env as _env, pipeline as _pipeline, cos_sim as _cos_sim } from '@xenova/transformers';
import type { FeatureExtractionPipeline, PipelineType, PretrainedOptions, AllTasks } from '@xenova/transformers';
import type { Cache } from 'secondary-cache';

import { ToolFunc } from "../tool-func";
import { createLRUCache } from './lrucache';

const ModelsCache = createLRUCache('ModelsCache', { capacity: 2, expires: 6 * 60 * 1000 })
ToolFunc.register(ModelsCache)
const cache = ModelsCache.runWithPosSync() as Cache

function average(arr: number[]) {
  if (arr.length === 0) {
    throw new NotFoundError('Array must not be empty');
  }
  const sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
}

declare function pipeline<T extends PipelineType>(task: T, model?: string, { quantized, progress_callback, config, cache_dir, local_files_only, revision, }?: PretrainedOptions): Promise<AllTasks[T]>
declare function cos_sim(arr1: number[], arr2: number[]): number

// TODO: workaround the vitest added `__vite_ssr_import_1__` to `pipeline` and `cos_sim`, it raise `ReferenceError: __vite_ssr_import_1__ is not defined`
async function _similarity(
  this: ToolFunc,
  {query, texts, model}: {query?: string, texts?: string | string[], model?: string} = {},
) {
  if (!model) { model = this.modelId }
  let extractor = cache.get(model) as FeatureExtractionPipeline
  if (!extractor) {
    extractor = await pipeline('feature-extraction', model);
    cache.set(model, extractor);
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
  params: {
    query: { name: 'query', type: 'string', required: true },
    texts: { name: 'texts', type: ['string', 'array'], required: true },
    model: { name: 'model', type: 'string', description: 'the embedding model name used' },
    // {name: 'maxExtractors', type: 'number', description: 'the max cached embedding model count'},
  },
  result: 'number',
  scope: { env: _env, pipeline: _pipeline, cos_sim: _cos_sim, average, cache },
  setup(this: ToolFunc) {
    this.modelId = 'Xenova/distiluse-base-multilingual-cased-v2'
  }
})
