import { FewShotPromptTemplate } from './few-shot-prompt-template'
import './hf-prompt-template'
import { PromptExampleSelector, PromptExamples } from './prompt-example-selector';
import { PromptTemplate } from './prompt-template'

class ExampleSelector extends PromptExampleSelector<Record<string, any>> {
  selectExample(example: Record<string, any>) {
    if (example?.n > 0) {
      return example;
    }
  }
}

describe('FewShotPromptTemplate', () => {
  it('should format examples array', async () => {
    const template = FewShotPromptTemplate.from({
      examples: [{n:1},{n:2},{n:3}, {n: '4 {{text}}'}],
      examplePrompt: {template: 'count:{{n}}'},
      prefix: 'Now begin:',
      suffix: 'Done',
    })
    let result = await template.format({text: 'hi world'})
    expect(result).toStrictEqual('Now begin:\n\ncount:1\n\ncount:2\n\ncount:3\n\ncount:4 hi world\n\nDone')
  })

  it('should format examples by PromptExampleSelector', async () => {
    const asyncExamples: PromptExamples<Record<string, any>> = {
      [Symbol.asyncIterator]: async function* () {
        yield {n:0};
        yield {n:1};
        yield {n:2};
        yield {n:3};
        yield {n: '4 {{text}}'};
      },
    };

    const examples = new ExampleSelector(asyncExamples);

    const template = FewShotPromptTemplate.from({
      examples,
      examplePrompt: {template: 'count:{{n}}'},
      prefix: 'Now begin:',
      suffix: 'Done',
    })
    let result = await template.format({text: 'hi world'})
    expect(result).toStrictEqual('Now begin:\n\ncount:1\n\ncount:2\n\ncount:3\n\nDone')
  })

  it('should get registered PromptTemplate', () => {
    expect(PromptTemplate.get('fewshot')).toStrictEqual(FewShotPromptTemplate)
    expect(PromptTemplate.get('few_shot')).toStrictEqual(FewShotPromptTemplate)
    expect(new PromptTemplate({examples: [], templateFormat: 'fewshot'})).toBeInstanceOf(FewShotPromptTemplate)
  })

  it('should get partial PromptTemplate(string)', async () => {
    const promptTemplate = new PromptTemplate({templateFormat: 'fewshot', examples: ['{{role}}:', '{{text}}']})
    const p = promptTemplate.partial({role: 'user'})
    expect(p).toBeInstanceOf(FewShotPromptTemplate)
    expect(p.data).toStrictEqual({role: 'user'})
    expect(await p.format({text: 'hello'})).toStrictEqual('\n\nuser:\n\nhello\n')
  })

  it('should get partial PromptTemplate(function)', async () => {
    const promptTemplate = new PromptTemplate({templateFormat: 'fewshot', examples: ['{{role}}:', '{{date}}']})
    const dt = new Date()
    function getDate() {
      // console.log('getDate......', arguments)
      return dt.toISOString()
    }
    const p = promptTemplate.partial({date: getDate})
    expect(p).toBeInstanceOf(FewShotPromptTemplate)
    expect(p.data).toStrictEqual({date: getDate})
    expect(await p.format({role: 'user'})).toStrictEqual('\n\nuser:\n\n'+dt.toISOString()+'\n')
  })

  it('should format directly by PromptTemplate', async () => {
    expect(await PromptTemplate.format({examples: ['{{role}}:', '{{text}}'], data: {role: 'user', text: 'hello'}, templateFormat: 'fewshot'})).toStrictEqual('\n\nuser:\n\nhello\n')
  })
})