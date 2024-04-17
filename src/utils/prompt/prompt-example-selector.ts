import { iteratorWrap } from "../iterator-wrap"

export type PromptExamples<T = any> = Iterable<PromiseLike<T> | T> | AsyncIterable<T>

interface PromptExampleSelectorOptions {
  maxLength?: number
  [name: string]: any
}

export class PromptExampleSelector<T = any> {
  declare maxLength: number|undefined
  declare examples: PromptExamples<T>

  constructor(examples: PromptExamples<T>, options?: PromptExampleSelectorOptions) {
    this.initialize(examples, options)
  }

  initialize(examples: PromptExamples<T>, options?: PromptExampleSelectorOptions) {
    const maxLength = options?.maxLength
    if (maxLength! > 0) {
      this.maxLength = maxLength
    }
    this.examples = iteratorWrap<T>(examples)
  }

  // abstract selectExample
  selectExample(example: T): T|void {}

  async *selectExamples(examples: PromptExamples<T> = this.examples) {
    let count = this.maxLength || Infinity
    for await (const example of examples) {
      const ex = this.selectExample(example)
      if (ex) {
        if (--count < 0) {break}
        yield example
      }
    }
  }

  async *[Symbol.asyncIterator]() {
    yield* this.selectExamples()
  }

}
