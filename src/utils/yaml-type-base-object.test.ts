import { parse } from 'yaml'

import { YamlTypeBaseObject, createYamlObjectTag } from './yaml-type-base-object'

const yamlPromptTagName = '!prompt'
class AIPromptData extends YamlTypeBaseObject {}
const yamlPromptTag = createYamlObjectTag(yamlPromptTagName, AIPromptData)

describe('yaml prompt tag', ()=>{
  it('should parse with options', ()=>{
    const res: { a: 1 } = parse(`${yamlPromptTagName} { a: 1 }`, {
      customTags: [yamlPromptTag as any]
    })
    expect(res).toBeInstanceOf(AIPromptData)
    expect(res).toEqual({a:1})
    expect(res).toStrictEqual(new AIPromptData({a:1}))
  })

  it('should parse without options', ()=>{
    const res: { a: 1 } = parse(`${yamlPromptTagName} {}`, {
      customTags: [yamlPromptTag as any]
    })
    expect(res).toBeInstanceOf(AIPromptData)
    expect(res).toStrictEqual(new AIPromptData())
  })
})