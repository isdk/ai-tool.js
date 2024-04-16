import {HfPromptTemplate} from './hf-prompt-template'
import {PromptTemplate} from './prompt-template'

describe('HfPromptTemplate', () => {
  it('should get inputVariables from template', () => {
    let template = HfPromptTemplate.from(`{% for s in strings[:] %}{{ s }}{% endfor %} {{strings}} {{a+b}}`)
    expect(template.inputVariables).toStrictEqual(['strings', 'a', 'b'])
    template = HfPromptTemplate.from(`{% if aa == 2 %}{{ aa }}{% else %}{{ bb }}{% endif %}{{ cc }}`)
    expect(template.inputVariables).toStrictEqual(['aa', 'bb', 'cc'])
    template = HfPromptTemplate.from(`{% set aa = 2 %} {% if aa == 2 %}{{ aa }}{% else %}{{ bb }}{% endif %}{{ cc }}`)
    expect(template.inputVariables).toStrictEqual(['bb', 'cc'])
    template = HfPromptTemplate.from(`{{ cc.abc }}`)
    expect(template.inputVariables).toStrictEqual(['cc'])
  })

  it('should get registered PromptTemplate', () => {
    expect(PromptTemplate.get('hf')).toStrictEqual(HfPromptTemplate)
    expect(PromptTemplate.get('internal')).toStrictEqual(HfPromptTemplate)
    expect(PromptTemplate.get('huggingface')).toStrictEqual(HfPromptTemplate)
    expect(new PromptTemplate('{{text}}', {templateType: 'hf'})).toBeInstanceOf(HfPromptTemplate)
  })

  it('should pass PromptTemplate to value', async () => {
    const systemTemplate = HfPromptTemplate.from(`You are a helpful assistant that translates {{input_language}} to {{output_language}}.`)
    const humanTemplate = HfPromptTemplate.from(`{{text}}`)
    const template = HfPromptTemplate.from(`{{system_template}}\n{{human_template}}`)
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
    expect(await HfPromptTemplate.from(`hi{{text}}`).format({})).toStrictEqual('hi')
  })

  it('should get partial PromptTemplate(string)', async () => {
    const promptTemplate = new PromptTemplate('{{role}}:{{text}}', {templateType: 'hf'})
    const p = promptTemplate.partial({role: 'user'})
    expect(p).toBeInstanceOf(HfPromptTemplate)
    expect(p.data).toStrictEqual({role: 'user'})
    expect(await p.format({text: 'hello'})).toStrictEqual('user:hello')
  })

  it('should get partial PromptTemplate(function)', async () => {
    const promptTemplate = new PromptTemplate('{{role}}:{{date}}', {templateType: 'hf'})
    const dt = new Date()
    function getDate() {
      // console.log('getDate......', arguments)
      return dt.toISOString()
    }
    const p = promptTemplate.partial({date: getDate})
    expect(p).toBeInstanceOf(HfPromptTemplate)
    expect(p.data).toStrictEqual({date: getDate})
    expect(await p.format({role: 'user'})).toStrictEqual('user:'+dt.toISOString())
  })
})