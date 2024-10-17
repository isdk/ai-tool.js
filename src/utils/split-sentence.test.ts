import { splitSentence } from "./split-sentence"

describe('split-sentence', () => {
  it('should split sentence', () => {
    let result = splitSentence('1. 中国;\n2.日本.\n 这是一个数字3.133。我们说:"良好".他们说我们.好不?不好!')
    expect(result).toMatchInlineSnapshot(`
      [
        "1. 中国;",
        "2.日本.",
        "这是一个数字3.133。",
        "我们说:"良好".他们说我们.好不?",
        "不好!",
      ]
    `)
  })

  it('should split sentence', () => {
    let result = splitSentence('3.14 is pi. “你好！！！”——他说。劇場版「Fate/stay night [HF]」最終章公開カウントダウン！')
    expect(result).toMatchInlineSnapshot(`
      [
        "3.14 is pi.",
        "“你好！”",
        "——他说。",
        "劇場版「Fate/stay night [HF]」最終章公開カウントダウン！",
      ]
    `)
  })

  it('should split english sentence', () => {
    let result = splitSentence('Hello world! How are you today? I am fine. Nice too.')
    expect(result).toMatchInlineSnapshot(`
      [
        "Hello world!",
        "How are you today?",
        "I am fine.",
        "Nice too.",
      ]
    `)
  })

  it('should split sentences with code block', () => {
    let result = splitSentence('Hello world! ```ja\nGood beeter.\nNice day.\n```\nHow are you today? I am fine. Nice too.')
    expect(result).toMatchInlineSnapshot(`
      [
        "Hello world!",
        "\`\`\`ja
      Good beeter.
      Nice day.
      \`\`\`",
        "How are you today?",
        "I am fine.",
        "Nice too.",
      ]
    `)
  })
  it('should split sentences with mutli new lines', () => {
    let result = splitSentence(`栖守道德者，寂寞一时；依阿权势者，凄凉万古。达人观物外之物，思

  身后之身，守受一时之寂寞，毋取万古之凄凉。
  `, {completeSentence: true})
    expect(result).toMatchInlineSnapshot(`
      [
        "栖守道德者，寂寞一时；依阿权势者，凄凉万古。",
        "达人观物外之物，思 身后之身，守受一时之寂寞，毋取万古之凄凉。",
      ]
    `)
  })

  it('should split sentences with inline EMPHASIS block', () => {
    let result = splitSentence(`但是像**数据集中的核心主题是什么？**这类问题需要查询聚焦摘要（Query focused summary）而不是像我们上述RAG系统那样显式检索`)
    expect(result).toMatchInlineSnapshot(`
      [
        "但是像**数据集中的核心主题是什么？**这类问题需要查询聚焦摘要（Query focused summary）而不是像我们上述RAG系统那样显式检索",
      ]
    `)
  })

  it('should split sentences with complete sentence with section', () => {
    let result = splitSentence(`栖守道德者，寂寞一时；依阿权势者，凄凉万古。达人观物外之物，思

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
  `, {completeSentence: true})
    expect(result).toMatchInlineSnapshot(`
      [
        "栖守道德者，寂寞一时；依阿权势者，凄凉万古。",
        "达人观物外之物，思 身后之身，守受一时之寂寞，毋取万古之凄凉。",
        "# This is a Title",
        "1. This is a numberic list item",
        "2. This is another numberic list item",
        "* This is a list item",
        "* This is another list item",
        "第一章 这是测试",
        "一章 这是另一个测试",
        "章 这不是 章节。",
      ]
    `)
  })
})
