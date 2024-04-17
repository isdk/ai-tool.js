import { PromptExamples } from "./prompt-example-selector";
import { PromptTemplate, PromptTemplateOptions } from "./prompt-template";

export function sortedValues<T>(values: Record<string, T>): T[] {
  return Object.keys(values)
    .sort()
    .map((key) => values[key]);
}

export interface FewShotPromptTemplateOptions<T= any> extends PromptTemplateOptions {
  /**
   * The few shot examples to use in the prompt.
   */
  examples: PromptExamples<T>

  /**
   * An {@link PromptTemplate} used to format a single example.
   */
  examplePrompt: PromptTemplate|PromptTemplateOptions;

  /**
   * String separator used to join the prefix, the examples, and suffix.
   */
  exampleSeparator?: string;

  /**
   * A prompt template string to put before the examples.
   *
   * @defaultValue `""`
   */
  prefix?: string;

  /**
   * A prompt template string to put after the examples.
   */
  suffix?: string;
}

export class FewShotPromptTemplate<T = any> extends PromptTemplate {
  declare examples: PromptExamples<T>;
  declare examplePrompt: PromptTemplate|undefined;
  declare suffix: string;
  declare exampleSeparator: string;
  declare prefix: string;

  static from<T=any>(options: FewShotPromptTemplateOptions<T>) {
    return new this(options) as FewShotPromptTemplate<T>
  }

  constructor(options: FewShotPromptTemplateOptions<T>) {
    super(options)
  }

  _initialize(options?: FewShotPromptTemplateOptions<T>) {
    if (options) {
      if (options.suffix) {this.suffix = options.suffix}
      if (options.exampleSeparator) {this.exampleSeparator = options.exampleSeparator}
      if (options.prefix) {this.prefix = options.prefix}
      if (options.examplePrompt) {
        this.examplePrompt = options.examplePrompt instanceof PromptTemplate ? options.examplePrompt : PromptTemplate.from(options.examplePrompt)
      }
      if (options.examples) {this.examples = options.examples}
    }
    if (!this.prefix) {this.prefix = ""}
    if (!this.exampleSeparator) {this.exampleSeparator = "\n\n"}
    if (!this.suffix) {this.suffix = ""}
  }

  async _format(data: Record<string, any>) {
    const exampleStrings = [] as string[]
    for await (const example of this.examples) {
      if (this.examplePrompt) {
        const ex = await this.examplePrompt.format(example as Record<string, any>)
        exampleStrings.push(ex)
      } else {
        if (typeof example === 'string') {
          exampleStrings.push(example)
        } else if (example) {
          const ex = sortedValues<string>(example)
          if (ex.length > 0) {
            exampleStrings.push(...ex)
          }
        }
      }
    }
    const template = [this.prefix, ...exampleStrings, this.suffix].join(
      this.exampleSeparator
    );
    const templateFormat = this.templateFormat
    const result = await PromptTemplate.format({template, data, templateFormat})
    return result
  }

  toJSON(options = this): FewShotPromptTemplateOptions<T> {
    const result = super.toJSON(options) as FewShotPromptTemplateOptions
    if (options.suffix) {result.suffix = options.suffix}
    if (options.exampleSeparator) {result.exampleSeparator = options.exampleSeparator}
    if (options.prefix) {result.prefix = options.prefix}
    if (options.examplePrompt) {result.examplePrompt = options.examplePrompt}
    if (options.examples) {result.examples = options.examples}
    return result
  }
}

PromptTemplate.register(FewShotPromptTemplate,{name: 'fewshot', aliases: ['few_shot']})
