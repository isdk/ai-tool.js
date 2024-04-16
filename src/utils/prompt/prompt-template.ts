import { BaseFactory } from 'custom-factory';

import { CommonError, ErrorCode, NotImplementationError } from '../base-error'
import { filterNullOrUndefined } from '../filterNullOrUndefined'
// import { type PromptTemplateType } from './consts'

export interface PromptTemplateOptions {
  template?: string
  data?: Record<string, any>
  templateType?: string
  inputVariables?: string[]
  compiledTemplate?: any
  [name: string]: any
}

export class PromptTemplate extends BaseFactory {
  declare compiledTemplate: any
  declare template: string
  declare data:Record<string, any>|undefined
  declare inputVariables: string[]|undefined

  static from(template: string, options?: PromptTemplateOptions) {
    return new this(template, options)
  }

  /**
   * Validate/filter the data in inputVariables
   * @param data
   * @returns
   */
  filterData(data: Record<string, any>) {
    if (Array.isArray(this.inputVariables)) {
      data = Object.fromEntries(Object.entries(data).filter(([key]) => this.inputVariables!.includes(key)))
    }
    return data
  }

  constructor(template: string, options?: PromptTemplateOptions) {
    const { templateType } = options || {}

    super(template, options)

    if (this.constructor === PromptTemplate) {
      const TemplateClass = PromptTemplate.get(templateType)
      if (TemplateClass) {
        return Reflect.construct(TemplateClass, arguments)
      } else {
        throw new CommonError(`Prompt template type ${templateType} not found`, 'PromptTemplate', ErrorCode.InvalidArgument)
      }
    }
  }

  _initialize(template: string, options?: PromptTemplateOptions) {
    throw new NotImplementationError('Not implemented', 'PromptTemplate')
  }

  initialize(template: string, options?: PromptTemplateOptions) {
    if (this.constructor !== PromptTemplate) {
      if (template) {
        this._initialize(template, options)
      } else if (options) {
        Object.assign(this, options)
      }
    }
  }

  _format(data: Record<string, any>): string {
    throw new NotImplementationError('Not implemented', 'PromptTemplate')
  }

  async format(data: Record<string, any>): Promise<string> {
    const partialData = this.data
    data = { ...partialData, ...data, }
    if (partialData) {
      // process partial data
      for (const [key, value] of Object.entries(partialData)) {
        // no overwrite and it's function
        if (data[key] === value && typeof value === 'function') {
          delete data[key]
          data[key] = await value(data)
        }
      }
    }

    for (const [key, value] of Object.entries(data)) {
      if (value instanceof PromptTemplate) {
        delete data[key]
        data[key] = await value.format(data)
      }
    }
    return this._format(data)
  }

  /**
   * it can make sense to "partial" a prompt template - eg pass in a subset of the required values, as to create a new prompt template which expects only the remaining subset of values.
   * @param data the partial data
   * @returns the new partial PromptTemplate instance
   */
  partial(data: Record<string, any>): PromptTemplate {
    data = { ...this.data, ...data }
    const options = this.toJSON()
    options.data = data
    return new (this.constructor as any)(undefined, options)
  }

  toJSON() {
    let result: PromptTemplateOptions = {
      template: this.template,
      data: this.data,
      inputVariables: this.inputVariables,
      compiledTemplate: this.compiledTemplate,
    }
    result = filterNullOrUndefined(result)
    return result
  }
}
