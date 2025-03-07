import { ITruncateToTokenLimitOptions, truncateToTokenLimit } from './truncate-to-token-limit';

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

    await expect(truncateToTokenLimit(content, options)).rejects.toThrow('Can not truncate content to fit within the token limit:');
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
    const options = { size: 16, completeSentence: true };
    const result = await truncateToTokenLimit(content, options);
    expect(result).toBe('菜根谭(全文附译文) 菜根谭(全文附译文)')
  })

  it('should truncate content with completeSentence without truncLastSection', async () => {
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
    const options = { size: 26, completeSentence: true, truncLastSection: false };
    const result = await truncateToTokenLimit(content, options);
    expect(result).toBe('菜根谭(全文附译文)\n\n菜根谭(全文附译文)\n1.弄权一时，凄凉万古\n')
  })

  it('should truncate content with completeSentence do not include section string at last', async () => {
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
    const options = { size: 121, completeSentence: true };
    const result = await truncateToTokenLimit(content, options);
    expect(result).toBe(`菜根谭(全文附译文) 菜根谭(全文附译文)
1.弄权一时，凄凉万古

栖守道德者，寂寞一时；依阿权势者，凄凉万古。
达人观物外之物，思身后之身，守受一时之寂寞，毋取万古之凄凉。

# This is a Title
1. This is a numberic list item
2. This is another numberic list item
* This is a list item
* This is another list item`)
  })

  it('should truncate content without completeSentence do not include section string at last', async () => {
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
    const options: ITruncateToTokenLimitOptions = { size: 119, completeSentence: false};
    const result = await truncateToTokenLimit(content, options);
    expect(result).toBe(`菜根谭(全文附译文)

菜根谭(全文附译文)
1.弄权一时，凄凉万古

栖守道德者，寂寞一时；依阿权势者，凄凉万古。
达人观物外之物，思

身后之身，守受一时之寂寞，毋取万古之凄凉。

# This is a Title
1. This is a numberic list item
2. This is another numberic list item
* This is a list item
* This is another list item`)
  })

  it('should truncate content with completeSentence markdown format', async () => {
    const content = `# 实战微软新一代RAG：GraphRAG强大的全局理解能力，碾压朴素RAG？微软近日开源了新一代RAG框架GraphRAG - 掘金

微软近日开源了新一代RAG框架GraphRAG，以解决当前RAG在大型语料库上全局理解问题。当前RAG主要聚焦于局部检索能力，即根据查询语句在向量库中匹配部分知识，然后通过大型语言模型合成这些检索到的信息，生成一个自然流畅的回答。相信大部分同学看过《仙逆》这部小说，如果你问王林这一生有几个相好？如果让RAG来回答，它能回答的出来吗？而GraphRAG通过两个阶段构建基于图的文本索引：首先从源文档中推导出实体知识图谱，然后为所有紧密相关的实体群体预生成社区摘要。

## 1&period; RAG概述

大语言模型（LLM）是在大量数据上训练，但他们并不是在我们私有数据上训练，因此要想让LLM能够回答我们私有数据集上的问题，我们就得使用一种叫做检索增强生成（RAG）的技术。它的基本原理是加载我们的文档，然后将每个文档按照一定的规则，比如Token数量、字符数量、语义和层次分割等，将每个文档拆分为一个一个小片段（chunk）。然后使用嵌入技术对这些chunk生成embeding，存储到高维向量数据库中，生成索引Index。在用户查询的时候，将查询语句转换为embeding，然后向高维向量数据库寻找和查询embeding最相似的Top
K个embeding，将其对应的文本以及对应的上下文发送给LLM，从而利用LLM合成自然流产地回答返回给用户，如下图所示。

但是像&ast;&ast;数据集中的核心主题是什么？&ast;&ast;这类问题需要查询聚焦摘要（Query focused
summary）而不是像我们上述RAG系统那样显式检索，现有的QFS方法无法扩展到RAG系统索引的文本量。而GraphRAG结合知识图谱，RAG和QFS这些方法的优势，它可以根据用户问题的普遍性和要索引的源文本量进行扩展。该方法使用LLM构建基于图的文本索引，包括从源文档派生实体知识图谱，然后为所有密切相关的实体组预生成社区摘要。给定一个问题后，每个社区摘要用于生成部分回答，然后所有部分回答再次汇总为最终回答。具体步骤和流程图如下：

- **源文档到文本块**：一个基本的设计决策是决定从源文档中提取的输入文本应以何种粒度分割成文本块进行处理。
- **文本块到元素实例**：这一步骤的基本要求是识别并提取每个文本块中的图节点和边的实例。使用一个多部分的LLM提示来首先识别文本中的所有实体，包括它们的名称、类型和描述，然后识别所有明确相关实体之间的关系，包括源实体和目标实体以及它们关系的描述。
- **元素实例到元素摘要**：使用LLM将实例级摘要转换为每个图元素的描述性文本块。使用LLM“提取”源文中表示的实体、关系和声明的描述已经是一种抽象摘要的形式，依赖于LLM创建独立有意义的摘要，这些摘要可能是文本本身暗示但没有明确陈述的概念（例如，暗示关系的存在）。要将所有这些实例级摘要转换为每个图元素（即实体节点、关系边和声明协变量）的单一描述性文本块，需要进一步通过匹配实例组进行LLM摘要。
- **元素摘要到图社区**：使用社区检测算法将图划分为模块化社区。前一步创建的索引可以被建模为一个同质无向加权图，其中实体节点通过关系边连接，边权重表示检测到的关系实例的归一化计数。给定这样的图，可以使用各种社区检测算法将图划分为节点之间相互连接比与图中其他节点更强的社区。在流程中使用Leiden算法，因为它能够高效地恢复大规模图的层次社区结构。这个层次结构的每个级别都提供了一个社区划分，以相互独立、集体穷尽的方式覆盖图中的节点，使得分而治之的全局摘要成为可能。
- **图社区到社区摘要**：为Leiden层次结构中的每个社区创建报告式摘要。这一步是使用旨在扩展到非常大的数据集的方法为Leiden层次结构中的每个社区创建报告式摘要。这些摘要本身是有用的，因为它们是理解数据集的全局结构和语义的一种方式，并且它们自己可以用来在没有问题的情况下理解语料库。
- **社区摘要到社区回答再到全局回答**：使用社区摘要生成最终答案的多阶段过程。准备社区摘要，社区摘要被随机打乱并分成预指定token大小的块。这确保了相关信息分散在各个块中，而不是集中在一个上下文窗口中（可能丢失）。映射社区回答，并行生成中间答案，每个块一个。LLM也被要求生成一个0&#45;100之间的分数，以指示生成的答案在回答目标问题方面的有用程度。得分为0的答案被过滤掉。汇总为全局答案，按有用性得分降序排列的中间社区答案被迭代地添加到新的上下文窗口中，直到达到token限制。这个最终上下文被用来生成返回给用户的全局答案。

`
    const options = { size: 172, completeSentence: true, isMarkdown: true };
    const result = await truncateToTokenLimit(content, options);
    expect(result).toBe(`# 实战微软新一代RAG：GraphRAG强大的全局理解能力，碾压朴素RAG？微软近日开源了新一代RAG框架GraphRAG - 掘金

微软近日开源了新一代RAG框架GraphRAG，以解决当前RAG在大型语料库上全局理解问题。
当前RAG主要聚焦于局部检索能力，即根据查询语句在向量库中匹配部分知识，然后通过大型语言模型合成这些检索到的信息，生成一个自然流畅的回答。
相信大部分同学看过《仙逆》这部小说，如果你问王林这一生有几个相好？
如果让RAG来回答，它能回答的出来吗？
而GraphRAG通过两个阶段构建基于图的文本索引：首先从源文档中推导出实体知识图谱，然后为所有紧密相关的实体群体预生成社区摘要。
`)
  })
});