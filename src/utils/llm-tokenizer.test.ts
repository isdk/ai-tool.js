import { countLLMTokens, LLM_TOKENIZER_NAMES_MAP } from './llm-tokenizer'

describe('countTokens', () => {
  it('should count tokens correctly by default', async () => {
    const text = 'Hello, world!'
    // const modelId = 'gpt-4'
    let result = await countLLMTokens(text)
    expect(result).toBe(4)
  })

  Object.keys(LLM_TOKENIZER_NAMES_MAP).forEach(k => {
    it(`should count tokens correctly by ${k}`, async () => {
      const text = 'Hello, world!'
      let result = await countLLMTokens(text, k)
      expect(result).toBeGreaterThanOrEqual(3)
    })
  })
})
