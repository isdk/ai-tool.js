import {GolangPromptTemplate} from './golang-prompt-template'
import {PromptTemplate} from './prompt-template'

describe('GolangPromptTemplate', () => {
  it('should get inputVariables from template', () => {
    let template = GolangPromptTemplate.from(`{{.strings}}: {{.a}} + {{.b}}`)
    expect(template.inputVariables).toStrictEqual(['strings', 'a', 'b'])
  })

  it('should get registered PromptTemplate', () => {
    expect(PromptTemplate.get('golang')).toStrictEqual(GolangPromptTemplate)
    expect(PromptTemplate.get('localai')).toStrictEqual(GolangPromptTemplate)
    expect(PromptTemplate.get('ollama')).toStrictEqual(GolangPromptTemplate)
    expect(new PromptTemplate('{{.text}}', {templateFormat: 'golang'})).toBeInstanceOf(GolangPromptTemplate)
  })

  it('should pass PromptTemplate to value', async () => {
    const systemTemplate = GolangPromptTemplate.from(`You are a helpful assistant that translates {{.input_language}} to {{.output_language}}.`)
    const humanTemplate = GolangPromptTemplate.from(`{{.text}}`)
    const template = GolangPromptTemplate.from(`{{.system_template}}\n{{.human_template}}`)
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
    expect(await GolangPromptTemplate.from(`hi{{.text}}`).format({})).toStrictEqual('hi')
  })

  it('should format text with required variables', async () => {
    expect(await GolangPromptTemplate.from(`hi {{.text}}`).format({text: 'world'})).toStrictEqual('hi world')
    expect(await GolangPromptTemplate.from(`hi {{.text}}`, {data: {text: 'world'}}).format()).toStrictEqual('hi world')
  })

  it('should get partial PromptTemplate(string)', async () => {
    const promptTemplate = new PromptTemplate('{{.role}}:{{.text}}', {templateFormat: 'golang'})
    const p = promptTemplate.partial({role: 'user'})
    expect(p).toBeInstanceOf(GolangPromptTemplate)
    expect(p.data).toStrictEqual({role: 'user'})
    expect(await p.format({text: 'hello'})).toStrictEqual('user:hello')
  })

  it('should get partial PromptTemplate(function)', async () => {
    const promptTemplate = new PromptTemplate('{{.role}}:{{.date}}', {templateFormat: 'golang'})
    const dt = new Date()
    function getDate() {
      // console.log('getDate......', arguments)
      return dt.toISOString()
    }
    const p = promptTemplate.partial({date: getDate})
    expect(p).toBeInstanceOf(GolangPromptTemplate)
    expect(p.data).toStrictEqual({date: getDate})
    expect(await p.format({role: 'user'})).toStrictEqual('user:'+dt.toISOString())
  })
  it('should format directly by PromptTemplate', async () => {
    expect(await PromptTemplate.format({template: '{{.text}} world', data: {text: 'hello'}, templateFormat: 'golang'})).toStrictEqual('hello world')
  })
})