import { CommonError, countLLMTokens as _countLLMTokens, isSectionString, splitSentence } from "./"

export interface ITruncateToTokenLimitOptions {
  size?: number
  modelId?: string
  sentences?: string[]
  best?: boolean
  completeSentence?: boolean
  corrected?: boolean // default true, the completeSentence can not be true if false
  truncLastSection?: boolean // default true, the last section string will be truncated
  countLLMTokens?: (text: string, modelId?: string) => Promise<number>
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
  let corrected = true
  let completeSentence = false
  let truncLastSection = true
  let countLLMTokens = _countLLMTokens
  if (options) {
    modelId = options.modelId
    if (options.size! >= 0) { size = options.size! }
    if (options.corrected !== undefined) {
      corrected = options.corrected
    }
    if (options.completeSentence !== undefined) {
      completeSentence = options.completeSentence
    }
    if (options.truncLastSection !== undefined) {
      truncLastSection = options.truncLastSection
    }
    if (typeof options.countLLMTokens === 'function') {
      countLLMTokens = options.countLLMTokens
    }
  }
  if (size > 0) {
    let currentSize = await countLLMTokens(content, modelId)
    if (currentSize > size) {
      const sentences = options?.sentences ?? splitSentence(content, options)
      while (currentSize > size && sentences.length) {
        const lastSentence = sentences.pop()
        if (lastSentence) {
          const len = await countLLMTokens(lastSentence, modelId)
          currentSize -= len
          // console.log('🚀 ~ truncateToTokenLimit ~ currentSize:', currentSize, len, lastSentence)
          if (!completeSentence && !corrected) {
            const i = content.lastIndexOf(lastSentence)
            if (i === -1) {
              // this should never happen
              throw new CommonError(`Can not find sentence: ${lastSentence}`, 'truncateContentToTokenLimit')
            }
            content = content.slice(0, i)
          } else {
            content = sentences.join('\n')
          }
          if (currentSize <= 1) {
            throw new CommonError(`Can not truncate content to fit within the token limit: ${size}`, 'truncateContentToTokenLimit')
          }
          if (currentSize <= size && truncLastSection) {
            const prevSentence = sentences[sentences.length - 1]
            if (prevSentence && isSectionString(prevSentence)) {
              const prevSize = await countLLMTokens(prevSentence, modelId)
              if (currentSize - prevSize > 9) {
                  const i = content.lastIndexOf(prevSentence)
                  if (i === -1) {
                    // this should never happen
                    throw new CommonError(`Can not find sentence: ${prevSentence}`, 'truncateContentToTokenLimit')
                  }
                  content = content.slice(0, i).trimEnd()
              }
            }
          }
        }
      }
    }
  }
  if (!content) throw new CommonError(`Can not truncate content to fit within the token limit: ${size}`, 'truncateContentToTokenLimit')
  return content
}
