import {FStringPromptTemplate} from './f-string-prompt-template'
import {PromptTemplate} from './prompt-template'

describe('FStringPromptTemplate', () => {
  it('should get inputVariables from template', () => {
    let template = FStringPromptTemplate.from(`{strings}: {a} + {b}`)
    expect(template.inputVariables).toStrictEqual(['strings', 'a', 'b'])
  })

  it('should get registered PromptTemplate', () => {
    expect(PromptTemplate.get('fstring')).toStrictEqual(FStringPromptTemplate)
    expect(PromptTemplate.get('f-string')).toStrictEqual(FStringPromptTemplate)
    expect(PromptTemplate.get('langchain')).toStrictEqual(FStringPromptTemplate)
    expect(new PromptTemplate('{text}', {templateFormat: 'fstring'})).toBeInstanceOf(FStringPromptTemplate)
  })

  it('should pass PromptTemplate to value', async () => {
    const systemTemplate = FStringPromptTemplate.from(`You are a helpful assistant that translates {input_language} to {output_language}.`)
    const humanTemplate = FStringPromptTemplate.from(`{text}`)
    const template = FStringPromptTemplate.from(`{system_template}\n{human_template}`)
    let result = await template.format({
      system_template: systemTemplate,
      human_template: humanTemplate,
      input_language: 'English',
      output_language: 'Chinese',
      text: 'Hello, how are you?'
    })
    expect(result).toStrictEqual(`You are a helpful assistant that translates English to Chinese.\nHello, how are you?`)
  })

  it('should format text without required variables', async () => {
    expect(await FStringPromptTemplate.from(`hi{text}`).format({})).toStrictEqual('hi')
  })

  it('should get partial PromptTemplate(string)', async () => {
    const promptTemplate = new PromptTemplate('{role}:{text}', {templateFormat: 'fstring'})
    const p = promptTemplate.partial({role: 'user'})
    expect(p).toBeInstanceOf(FStringPromptTemplate)
    expect(p.data).toStrictEqual({role: 'user'})
    expect(await p.format({text: 'hello'})).toStrictEqual('user:hello')
  })

  it('should get partial PromptTemplate(function)', async () => {
    const promptTemplate = new PromptTemplate('{role}:{date}', {templateFormat: 'fstring'})
    const dt = new Date()
    function getDate() {
      // console.log('getDate......', arguments)
      return dt.toISOString()
    }
    const p = promptTemplate.partial({date: getDate})
    expect(p).toBeInstanceOf(FStringPromptTemplate)
    expect(p.data).toStrictEqual({date: getDate})
    expect(await p.format({role: 'user'})).toStrictEqual('user:'+dt.toISOString())
  })
})