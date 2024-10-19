import { truncateToTokenLimit } from './truncate-to-token-limit';

describe('truncateToTokenLimit', () => {
  it('should return the same content if size is not exceeded', async () => {
    const content = 'This is a test content.';
    const options = { size: 100 };

    const result = await truncateToTokenLimit(content, options);
    expect(result).toBe(content);
  });

  it('should throw error if sentence is too long to fit the token size', async () => {
    const content = 'This is a very long long long simple test content sentence, can not be truncated to fit within the token limit.';
    const options = { size: 10 };

    expect(truncateToTokenLimit(content, options)).rejects.toThrow('Can not truncate content to fit within the token limit:');
  });

  it('should truncate content if size is exceeded', async () => {
    const content = "This is an example text that will be truncated to fit within the token limit. It contains multiple sentences. Each sentence will be removed until the content fits within the specified token limit. This is the fourth sentence. This is the fifth sentence.";
    const options = { size: 36 };

    const result = await truncateToTokenLimit(content, options);
    expect(result).toBe("This is an example text that will be truncated to fit within the token limit.\nIt contains multiple sentences.\nEach sentence will be removed until the content fits within the specified token limit.");
  });

  it('should truncate content if size is exceeded without corrected', async () => {
    const content = "This is an example text that will be truncated to fit within the token limit. It contains multiple sentences. Each sentence will be removed until the content fits within the specified token limit. This is the fourth sentence. This is the fifth sentence.";
    const options = { size: 36, corrected: false };

    const result = await truncateToTokenLimit(content, options);
    expect(result).toBe("This is an example text that will be truncated to fit within the token limit. It contains multiple sentences. Each sentence will be removed until the content fits within the specified token limit. ");
  });

  it('should truncate utf8 content if size is exceeded', async () => {
    const content = '3.14 is pi. “你好！！！”——他说。劇場版「Fate/stay night [HF]」最終章公開カウントダウン！'
    const options = { size: 11 };
    const result = await truncateToTokenLimit(content, options);
    expect(result).toBe(`3.14 is pi.\n“你好！”`)
  })

  it('should truncate utf8 content if size is exceeded without corrected', async () => {
    const content = '3.14 is pi. “你好！！！”——他说。劇場版「Fate/stay night [HF]」最終章公開カウントダウン！'
    const options = { size: 11, corrected: false };
    const result = await truncateToTokenLimit(content, options);
    expect(result).toBe('3.14 is pi. “你好！！！”')
  })

  it('should handle default options', async () => {
    const content = 'This is a test content.';
    const result = await truncateToTokenLimit(content);
    expect(result).toBe(content);
  });

  it('should truncate content with completeSentence', async () => {
    const content = '1. 中国;\n2.日本.\n 这是一个数字3.133。我们说:"良好".他们说我们.好不?不好!'
    const options = { size: 11, completeSentence: true };
    const result = await truncateToTokenLimit(content, options);
    expect(result).toBe('1. 中国;\n2.日本.')
  })

  it('should truncate content with completeSentence2', async () => {
    const content = `菜根谭(全文附译文)

菜根谭(全文附译文)
1.弄权一时，凄凉万古

栖守道德者，寂寞一时；依阿权势者，凄凉万古。达人观物外之物，思

  身后之身，守受一时之寂寞，毋取万古之凄凉。
  # This is a Title
  1. This is a numberic list item
  2. This is another numberic list item
  * This is a list item
  * This is another list item
  第一章 这是测试
  一章 这是另一个测试
  章 这不是
  章节。
`
    const options = { size: 73, completeSentence: true };
    const result = await truncateToTokenLimit(content, options);
    expect(result).toBe('菜根谭(全文附译文) 菜根谭(全文附译文)\n1.弄权一时，凄凉万古')
  })

});