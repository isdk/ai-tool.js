import { splitSentence } from "./split-sentence"

describe('split-sentence', () => {
  it('should split sentence', () => {
    let result = splitSentence('1. 中国;\n2.日本\n 这是一个数字3.133。我们说:"良好".他们说我们.好不?不好!')
    expect(result).toMatchInlineSnapshot(`
      [
        "1. 中国;",
        "2.日本",
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
})