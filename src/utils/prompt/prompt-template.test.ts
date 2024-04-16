import {HfPromptTemplate} from './hf-prompt-template'
import {PromptTemplate, PromptTemplateOptions} from './prompt-template'

class TestPromptTemplate extends PromptTemplate {
  _initialize(template: string, options?: PromptTemplateOptions | undefined): void {

  }
  _format(data) {
    return data
  }
}

describe('PromptTemplate', () => {
  beforeAll(() => {
    // @ts-ignore
    PromptTemplate.register(TestPromptTemplate)
  })
  afterAll(() => {
    // @ts-ignore
    PromptTemplate.unregister(TestPromptTemplate)
  })

  it('should get registered PromptTemplate', () => {
    expect(PromptTemplate.get('Test')).toStrictEqual(TestPromptTemplate)
    expect(new PromptTemplate('{{text}}', {templateType: 'Test'})).toBeInstanceOf(TestPromptTemplate)
  })

  it('should get partial PromptTemplate(string)', async () => {
    const promptTemplate = new PromptTemplate('{{role}}:{{text}}', {templateType: 'Test'})
    const p = promptTemplate.partial({role: 'user'})
    expect(p).toBeInstanceOf(TestPromptTemplate)
    expect(p.data).toStrictEqual({role: 'user'})
    expect(await p.format({text: 'hello'})).toStrictEqual({role: 'user', text: 'hello'})
  })

  it('should get partial PromptTemplate(function)', async () => {
    const promptTemplate = new PromptTemplate('{{role}}:{{date}}', {templateType: 'Test'})
    const dt = new Date()
    function getDate() {
      // console.log('getDate......', arguments)
      return dt
    }
    const p = promptTemplate.partial({date: getDate})
    expect(p).toBeInstanceOf(TestPromptTemplate)
    expect(p.data).toStrictEqual({date: getDate})
    expect(await p.format({role: 'user'})).toStrictEqual({role: 'user', date: dt})
  })
})