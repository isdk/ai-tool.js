import { truncateToTokenLimit } from './truncate-to-token-limit';

describe('truncateToTokenLimit', () => {
  it('should return the same content if size is not exceeded', async () => {
    const content = 'This is a test content.';
    const options = { size: 100 };

    const result = await truncateToTokenLimit(content, options);
    expect(result).toBe(content);
  });

  it('should truncate content if size is exceeded', async () => {
    const content = "This is an example text that will be truncated to fit within the token limit. It contains multiple sentences. Each sentence will be removed until the content fits within the specified token limit. This is the fourth sentence. This is the fifth sentence.";
    const options = { size: 36 };

    const result = await truncateToTokenLimit(content, options);
    expect(result).toBe("This is an example text that will be truncated to fit within the token limit. It contains multiple sentences. Each sentence will be removed until the content fits within the specified token limit. ");
  });

  it('should truncate utf8 content if size is exceeded', async () => {
    const content = '3.14 is pi. “你好！！！”——他说。劇場版「Fate/stay night [HF]」最終章公開カウントダウン！'
    const options = { size: 11 };
    const result = await truncateToTokenLimit(content, options);
    expect(result).toBe('3.14 is pi. “你好！！！”')
  })

  it('should empty string if all sentences removed', async () => {
    const content = "This is an example text that will be truncated to fit within the token limit. It contains multiple sentences. Each sentence will be removed until the content fits within the specified token limit.";
    const options = { size: 5 };
    const result = await truncateToTokenLimit(content, options);
    expect(result).toBe('')
  });

  it('should handle default options', async () => {
    const content = 'This is a test content.';
    const result = await truncateToTokenLimit(content);
    expect(result).toBe(content);
  });
});