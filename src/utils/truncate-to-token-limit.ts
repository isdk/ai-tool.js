import { CommonError, countLLMTokens, splitSentence } from "./"

export interface ITruncateToTokenLimitOptions {
  size?: number
  modelId?: string
  sentences?: string[]
  best?: boolean
  completeSentence?: boolean
}

/**
 * Truncates the given content to fit within a specified token limit by removing sentences from the end.
 * This function is suitable for text content with multiple sentences.
 * @param content - The original text content to be processed.
 * @param options - Optional configuration including model ID and size limit.
 * @returns The truncated text content.
 *
 * @example
 * ```typescript
 * const text = "This is an example text that will be truncated to fit within the token limit. It contains multiple sentences. Each sentence will be removed until the content fits within the specified token limit. This is the fourth sentence. This is the fifth sentence.";
 * const truncatedText = await truncateToTokenLimit(text, { modelId: "exampleModel", size: 50 });
 * console.log(truncatedText); // Output may be the truncated text
 * ```
 *
 * @warning This function is designed for text content with multiple sentences.
 */
export async function truncateToTokenLimit(content: string, options?: ITruncateToTokenLimitOptions) {
  let modelId
  let size = 1984
  if (options) {
    modelId = options.modelId
    if (options.size! >= 0) { size = options.size! }
  }
  if (size > 0) {
    let currentSize = await countLLMTokens(content, modelId)
    if (currentSize > size) {
      const sentences = options?.sentences ?? splitSentence(content, options)
      while (currentSize > size) {
        const lastSentence = sentences.pop()!
        const len = await countLLMTokens(lastSentence, modelId)
        currentSize -= len
        // console.log('🚀 ~ truncateToTokenLimit ~ currentSize:', currentSize, len, lastSentence)
        if (!options?.completeSentence) {
          const i = content.lastIndexOf(lastSentence)
          if (i === -1) {
            // this should never happen
            throw new CommonError(`Can not find sentence: ${lastSentence}`, 'truncateContentToTokenLimit')
          }
          content = content.slice(0, i)
        } else {
          content = sentences.join(' ')
        }

        if (currentSize <= 1) {
          throw new CommonError(`Can not truncate content to fit within the token limit: ${size}`, 'truncateContentToTokenLimit')
        }
      }
    }
  }
  return content
}
