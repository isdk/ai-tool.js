import { iteratorWrap } from "../iterator-wrap"

export type PromptExamples<T = any> = Iterable<PromiseLike<T> | T> | AsyncIterable<T>

export interface PromptExampleSelectorOptions {
  /**
   * The maximum count of the selected examples, or `undefined` if no limit.
   */
  maxLength?: number
  /**
   * The threshold probability (0-1) at which a sample is selected.
   * If `true`, defaults to 0.5; if `false`, disable it.
   */
  threshold?: number|boolean
  [name: string]: any
}

/**
 * The `PromptExampleSelector` class provides a mechanism to selectively choose examples from a given set based on
 * configurable options such as maximum length and probability threshold. This class is meant to be extended and customized
 * with an implementation of the `selectExample` method.
 *
 * @template T The type of the prompt examples.
 *
 * @example
 *
 * // Custom selector that selects examples based on a custom condition
 * class MyPromptExampleSelector extends PromptExampleSelector<string> {
 *   selectExample(example: string, threshold?: number): string | void {
 *     if (example.includes('keyword')) {
 *       return super.selectExample(example, threshold);
 *     }
 *   }
 * }
 *
 * // Create an instance with examples and options
 * const examples = ['example1', 'keyword1', 'keyword2', 'keyword3', 'example2', 'keyword4'];
 * const selector = new MyPromptExampleSelector(examples, { maxLength: 2, threshold: 0.8 });
 *
 * // Iterate through selected examples
 * for await (const selectedExample of selector) {
 *   console.log(selectedExample);
 * }
 *
 */
export class PromptExampleSelector<T = any> {
  declare maxLength: number|undefined
  /**
   * The probability threshold (0-1) for selecting an example. If `undefined`, no filtering by probability occurs.
   */
  declare threshold: number|undefined
  /**
   * The collection of prompt examples.
   */
  declare examples: PromptExamples<T>

  /**
   * Constructs a new `PromptExampleSelector` instance with the given examples and options.
   * @param examples - The prompt examples to select from.
   * @param options - An optional configuration object.
   */
  constructor(examples: PromptExamples<T>, options?: PromptExampleSelectorOptions) {
    this.initialize(examples, options)
  }

  /**
   * Initializes the selector with examples and options.
   * @param examples - The prompt examples to select from.
   * @param options - An optional configuration object.
   */
  initialize(examples: PromptExamples<T>, options?: PromptExampleSelectorOptions) {
    const maxLength = options?.maxLength
    if (maxLength! > 0) {
      this.maxLength = maxLength
    }
    if (options?.threshold !== undefined) {
      if (options.threshold === true) {
        this.threshold = 0.5
      } else if (options.threshold !== false) {
        this.threshold = options.threshold
      }
    }
    this.examples = iteratorWrap<T>(examples)
  }

  /**
   * Select an example. Can overwrite this in subclasses.
   * @param example - The example to potentially select.
   * @param [threshold] - report the current probability [0-1) for the selecting example.
   * @returns The selected example, or `undefined` if not selected.
   */
  selectExample(example: T, threshold?: number): T|void {
    if (threshold === undefined || threshold <= this.threshold!) {
      return example
    }
  }

  /**
   * Asynchronously selects examples from the given examples, applying the configured threshold (if any).
   * @param examples - The examples to select from. Defaults to the selector's examples if not provided.
   * @returns An asynchronous iterator yielding selected examples.
   */
  async *selectExamples(examples: PromptExamples<T> = this.examples) {
    let count = this.maxLength || Infinity
    for await (const example of examples) {
      const threshold = typeof this.threshold === 'number' ? Math.random() : undefined
      const ex = this.selectExample(example, threshold)
      if (ex) {
        if (--count < 0) {break}
        yield example
      }
    }
  }

  /**
   * Returns an asynchronous iterator for the selected examples.
   * @returns An asynchronous iterator over the selected examples.
   */
  async *[Symbol.asyncIterator]() {
    yield* this.selectExamples()
  }
}
