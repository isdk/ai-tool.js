import { ServerTools as ToolFunc } from '../server-tools';
import { similarity as Similarity } from "./similarity";
import { truncTo as _truncTo } from "../utils/trunc-to";

declare const truncTo: (n: number, dec?: number)=>number;

export function getDefaultSimilarPassingScore(modelId: string): number {
  const i = modelId.lastIndexOf('/')
  let result = 0.618
  if (i > 0) { modelId = modelId.substring(i+1) }
  if (modelId.startsWith('stella-')) {
    result = 0.818
  } else if (modelId.startsWith('Dmeta-')) {
    result = 0.65
  }
  return result
}

async function _isSimilar(
  this: ToolFunc,
  {query, texts, model, passingScore}: {query?:string, texts?: string|string[], model?: string, passingScore?: number} = {},
) {
  if (passingScore == null && model) {
    passingScore = this.getDefaultPassingScore(model)
  }
  const similarity = this.depends.similarity.getFuncWithPos();
  const average_score = truncTo(await similarity(query, texts, model || this.modelId));
  if (passingScore == null) { passingScore = this.passingScore }

  return average_score >= passingScore!
}

export const isSimilar = new ToolFunc('isSimilar', {
  func: _isSimilar,
  description: 'merge Segments in same topics simply',
  params: {
    query: {name: 'query', type: 'string', required: true},
    texts: {name: 'texts', type: ['string', 'array'], required: true},
    model: {name: 'model', type: 'string', description: 'the embedding model name used'},
    passingScore: {name: 'passingScore', type: 'number', description: 'the min passing score'},
  },
  result: 'boolean',
  scope: {truncTo: _truncTo},

  depends: { similarity: Similarity },
  setup(this: ToolFunc) {
    this.getDefaultPassingScore = getDefaultSimilarPassingScore;
    Object.defineProperty(this, 'modelId', {
      get(): string {
        return this._modelId
      },
      set(value: string) {
        if (value != this.modelId) {
          this._modelId = value
          this.passingScore = this.getDefaultPassingScore(value)
        }
      }
    })
    this.modelId = 'Xenova/distiluse-base-multilingual-cased-v2';
  }
})
