import { interpolateGolangTemplate } from './golang'

describe('Golang Template', () => {
  it('should get variable names from template', () => {
    const result = {} as any
    interpolateGolangTemplate(`{{.strings}}: {{.a}} + {{.b}}`, result, true)
    expect(result).toStrictEqual({'strings': null, 'a': null, 'b': null})
  })

  it('should render variable template', () => {
    const result = interpolateGolangTemplate(`{{.strings}}: {{.a}} {{.b}}`, {strings: 'jack', a: 'hello', b: 'world'})
    expect(result).toStrictEqual('jack: hello world')
  })

  it('should render index template', () => {
    const template = `The item at index {{index .someArray 0}} is {{index .someObject 'key'}}.`
    let result: any = interpolateGolangTemplate(template,
      {
        someArray: ['apple', 'banana'],
        someObject: { key: 'orange' },
      }
    )
    expect(result).toStrictEqual('The item at index apple is orange.')
    result = {}
    interpolateGolangTemplate(template, result, true)
    expect(result).toStrictEqual({ someArray: null, someObject: null })
  })

  it('should render range template', () => {
    const template = `Colors: \n{{range .colors}}This is {{.}} color.\n{{end}}{{range .colors}}{{.}}{{end}}`
    let result: any = interpolateGolangTemplate(template,
      { colors: ['Red', 'Green', 'Blue'] }
    )
    expect(result).toStrictEqual('Colors: \nThis is Red color.\nThis is Green color.\nThis is Blue color.\nRedGreenBlue')
    result = {}
    interpolateGolangTemplate(template, result, true)
    expect(result).toStrictEqual({ colors: null })
  })

  it('should render if-else template', () => {
    const template = `Is color defined? {{if .color}}Yes{{else}}No{{end}}`
    let result: any = interpolateGolangTemplate(template,
      { color: 'Red' }
    )
    expect(result).toStrictEqual('Is color defined? Yes')
    result = interpolateGolangTemplate(template, {})
    expect(result).toStrictEqual('Is color defined? No')
    result = interpolateGolangTemplate('Is color defined? {{if .color}}Yes{{end}}{{if .color}}Yes{{end}}', { color: 'Red' })
    expect(result).toStrictEqual('Is color defined? YesYes')
    result = interpolateGolangTemplate('Is color defined? {{if .color}}Yes{{end}}', {})
    expect(result).toStrictEqual('Is color defined? ')
    result = {}
    interpolateGolangTemplate(template, result, true)
    expect(result).toStrictEqual({ color: null })
  })

  it('should render join template', () => {
    const template = `Colors: {{join .colors ", "}} {{join .colors ", "}}`
    let result: any = interpolateGolangTemplate(template,
      { colors: ['Red', 'Green', 'Blue'] }
    )
    expect(result).toStrictEqual('Colors: Red, Green, Blue Red, Green, Blue')
    result = {}
    interpolateGolangTemplate(template, result, true)
    expect(result).toStrictEqual({ colors: null })
  })

  it('should render reReplace template', () => {
    const template = `Original text: {{.text}}, Replaced text: {{re_replace .text 'apple' 'orange'}}{{re_replace .text 'apple' 'pear'}}`
    let result: any = interpolateGolangTemplate(template,
      { text: 'An apple a day keeps the doctor away.' }
    )
    expect(result).toStrictEqual('Original text: An apple a day keeps the doctor away., Replaced text: An orange a day keeps the doctor away.An pear a day keeps the doctor away.')
    result = interpolateGolangTemplate(`Original text: {{.text}}, Replaced text: {{re_replace .text "apple" 'orange'}}`,
      { text: 'An apple a day keeps the doctor away.' }
    )
    expect(result).toStrictEqual('Original text: An apple a day keeps the doctor away., Replaced text: An orange a day keeps the doctor away.')
    result = interpolateGolangTemplate(`Original text: {{.text}}, Replaced text: {{re_replace .text 'apple" 'orange'}}`,
      { text: 'An apple a day keeps the doctor away.' }
    )
    // wrong reReplace template
    expect(result).toStrictEqual(`Original text: An apple a day keeps the doctor away., Replaced text: {{re_replace .text 'apple" 'orange'}}`)
    result = {}
    interpolateGolangTemplate(template, result, true)
    expect(result).toStrictEqual({ text: null })
  })
})