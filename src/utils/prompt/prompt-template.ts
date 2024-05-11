import { BaseFactory } from 'custom-factory';

import { CommonError, ErrorCode, NotImplementationError } from '../base-error'
import { filterNullOrUndefined } from '../filterNullOrUndefined'
// import { type PromptTemplateType } from './consts'

// register PromptTemplate alias as default.
export const defaultTemplateFormat = 'default'

export interface PromptTemplateOptions {
  template?: string
  data?: Record<string, any>
  templateFormat?: string
  inputVariables?: string[]
  compiledTemplate?: any
  ignoreInitialize?: boolean
  [name: string]: any
}

export class PromptTemplate extends BaseFactory {
  declare compiledTemplate: any
  declare template: string
  declare templateFormat: string|undefined
  declare data:Record<string, any>|undefined
  declare inputVariables: string[]|undefined

  static from(template?: string|PromptTemplateOptions, options?: PromptTemplateOptions) {
    return new this(template, options)
  }

  static async format(options: PromptTemplateOptions) {
    const template = new this(options)
    return template.format()
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

  constructor(template?: string|PromptTemplateOptions, options?: PromptTemplateOptions) {
    if (typeof template === 'string') {
      if (!options) { options = {} }
      options.template = template
    } else if (template) {
      options = template
      template = options.template
    }

    const { templateFormat: templateType } = options || {}

    super(options)

    if (this.constructor === PromptTemplate) {
      const TemplateClass = PromptTemplate.get(templateType || defaultTemplateFormat)
      if (TemplateClass) {
        return Reflect.construct(TemplateClass, arguments)
      } else {
        throw new CommonError(`Prompt template type ${templateType} not found`, 'PromptTemplate', ErrorCode.InvalidArgument)
      }
    }
  }

  _initialize(options?: PromptTemplateOptions) {
    throw new NotImplementationError('Not implemented', 'PromptTemplate')
  }

  initialize(options?: PromptTemplateOptions) {
    if (this.constructor !== PromptTemplate) {
      Object.assign(this, this.toJSON(options))
      if (!options?.ignoreInitialize) {
        this._initialize(options)
      }
    }
  }

  _format(data: Record<string, any>): string|Promise<string> {
    throw new NotImplementationError('Not implemented', 'PromptTemplate')
  }

  async format(data?: Record<string, any>): Promise<string> {
    const partialData = this.data
    data = { ...partialData, ...data, }
    if (partialData) {
      // process partial data
      for (const [key, value] of Object.entries(partialData)) {
        // no overwrite and it's function
        if (data[key] === value && typeof value === 'function') {
          // delete the key first to avoid infinite loop
          delete data[key]
          data[key] = await value(data)
        }
      }
    }

    for (const [key, value] of Object.entries(data)) {
      if (value instanceof PromptTemplate) {
        // avoid infinite loop
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
    options.ignoreInitialize = true
    return new (this.constructor as any)(options)
  }

  toJSON(options: PromptTemplateOptions = this) {
    let result: PromptTemplateOptions = {
      template: options.template,
      data: options.data,
      inputVariables: options.inputVariables,
      compiledTemplate: options.compiledTemplate,
    }
    if (options.templateFormat && PromptTemplate.get(options.templateFormat) !== this.constructor) {
      result.templateFormat = options.templateFormat
    }
    result = filterNullOrUndefined(result)
    return result
  }
}
