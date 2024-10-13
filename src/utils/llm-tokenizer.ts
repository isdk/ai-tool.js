import path from 'path'
import { fileURLToPath } from 'url';
import { AutoTokenizer, type PreTrainedTokenizer } from '@xenova/transformers';
import { getPackageDir } from './get-package-dir';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const cachePath = path.join(getPackageDir(__dirname), '.cache')

const TOKENIZER_MAPPINGS = new Map<string, Promise<PreTrainedTokenizer>>();

export const LLM_TOKENIZER_NAMES = {
  'deepseek-ai/DeepSeek-V2-Lite-Chat': 'deepseek2',
  'Qwen/Qwen2.5-0.5B': 'Qwen2.5',
  'Xenova/gpt-4': 'gpt-4 / gpt-3.5-turbo / text-embedding-ada-002',
  'Xenova/text-davinci-003': 'text-davinci-003 / text-davinci-002',
  'Xenova/gpt-3': 'gpt-3',
  'Xenova/grok-1-tokenizer': 'Grok-1',
  'Xenova/claude-tokenizer': 'Claude',
  'Xenova/mistral-tokenizer-v3': 'Mistral v3',
  'Xenova/mistral-tokenizer-v1': 'Mistral v1',
  'Xenova/gemma-tokenizer': 'Gemma',
  'Xenova/gemma2-tokenizer': 'Gemma2',
  'Xenova/llama3-tokenizer-new': 'Llama 3',
  'unsloth/Llama-3.2-1B-Instruct': 'Llama 3.2',
  'Xenova/llama-tokenizer': 'LLaMA / Llama 2',
  'Xenova/c4ai-command-r-v01-tokenizer': 'Cohere Command-R',
  'Xenova/t5-small': 'T5',
  'Xenova/bert-base-cased': 'bert-base-cased',
}

export const LLM_TOKENIZER_NAMES_MAP: any = {
  'deepseek2': 'deepseek-ai/DeepSeek-V2-Lite-Chat',
  'qwen2.5': 'Qwen/Qwen2.5-0.5B',
  'gpt-4': 'Xenova/gpt-4',
  'gpt-3.5-turbo': 'Xenova/gpt-4',
  'text-embedding-ada-002': 'Xenova/gpt-4',
  'text-davinci-003': 'Xenova/text-davinci-003',
  'text-davinci-002': 'Xenova/text-davinci-003',
  'gpt-3': 'Xenova/gpt-3',
  'grok-1': 'Xenova/grok-1-tokenizer',
  'claude': 'Xenova/claude-tokenizer',
  'mistral': 'Xenova/mistral-tokenizer-v3',
  'mistral3': 'Xenova/mistral-tokenizer-v3',
  'mistral1': 'Xenova/mistral-tokenizer-v1',
  'gemma': 'Xenova/gemma-tokenizer',
  'gemma2': 'Xenova/gemma2-tokenizer',
  'llama3': 'Xenova/llama3-tokenizer-new',
  'llama2': 'Xenova/llama-tokenizer',
  'llama': 'Xenova/llama-tokenizer',
  'llama3.2': 'unsloth/Llama-3.2-1B-Instruct',
  'cohere-command-r': 'Xenova/c4ai-command-r-v01-tokenizer',
  't5': 'Xenova/t5-small',
  'bert-cased': 'Xenova/bert-base-cased',
}

export async function getLLMTokenizer(modelId: string) {
  let tokenizerPromise = TOKENIZER_MAPPINGS.get(modelId)
  if (!tokenizerPromise) {
    tokenizerPromise = AutoTokenizer.from_pretrained(modelId, {cache_dir: cachePath})
    TOKENIZER_MAPPINGS.set(modelId, tokenizerPromise)
  }
  return tokenizerPromise
}

export async function encodeLLMTokens(text: string, modelId: string = 'gpt-4') {
  if (LLM_TOKENIZER_NAMES_MAP[modelId]) { modelId = LLM_TOKENIZER_NAMES_MAP[modelId] }
  const tokenizer = await getLLMTokenizer(modelId)
  return tokenizer.encode(text)
}

export async function countLLMTokens(text: string, modelId: string = 'gpt-4') {
  const encoded = await encodeLLMTokens(text, modelId)
  return encoded.length
}
