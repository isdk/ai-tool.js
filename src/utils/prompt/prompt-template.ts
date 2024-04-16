import { BaseFactory } from 'custom-factory';

import { CommonError, ErrorCode, NotImplementationError } from '../base-error'
// import { type PromptTemplateType } from './consts'

export interface PromptTemplateOptions {
  template?: string
  data?: Record<string, any>
  templateType?: string
  [name: string]: any
}

export class PromptTemplate extends BaseFactory {
  declare template: any
  declare _data:Record<string, any>|undefined
  declare inputVariables: string[]|undefined

  static from(template: string, options?: PromptTemplateOptions) {
    return new this(template, options)
  }

  get data() {
    return this._data
  }

  set data(data: Record<string, any>|undefined) {
    if (data) {
      data = this.filterData(data)
    }
    this._data = data
  }

  filterData(data: Record<string, any>) {
    if (Array.isArray(this.inputVariables)) {
      data = Object.fromEntries(Object.entries(data).filter(([key]) => this.inputVariables!.includes(key)))
    }
    return data
  }

  constructor(template: string, options?: PromptTemplateOptions) {
    const { templateType, data } = options || {}

    super(template, options)

    if (this.constructor === PromptTemplate) {
      const TemplateClass = PromptTemplate.get(templateType)
      if (TemplateClass) {
        return Reflect.construct(TemplateClass, arguments)
      } else {
        throw new CommonError(`Prompt template type ${templateType} not found`, 'PromptTemplate', ErrorCode.InvalidArgument)
      }
    }

    if (data !== undefined) {this.data = data}
  }

  _format(data: Record<string, any>): string {
    throw new NotImplementationError('Not implemented')
  }

  format(data: Record<string, any>): string {
    if (this.data) {
      data = { ...this.data, ...data }
    }
    for (const [key, value] of Object.entries(data)) {
      if (value instanceof PromptTemplate) {
        delete data[key]
        data[key] = value.format(data)
      }
    }
    return this._format(data)
  }
}
