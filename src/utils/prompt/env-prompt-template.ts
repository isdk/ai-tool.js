import { CommonError, ErrorCode } from "../base-error";
import { PromptTemplate, type PromptTemplateOptions } from "./prompt-template";
import { getEnvVairables as getVariables, interpolateEnv } from './template/env'

export class EnvPromptTemplate extends PromptTemplate {

  static isTemplate(templateOpt: PromptTemplateOptions|string) {
    let template: string
    let result = false

    if (typeof templateOpt === 'object') {
      template = templateOpt.template as string
    } else {
      template = templateOpt as string
    }

    const vars = getVariables(template)
    result = vars.length > 0

    return result
  }

  getVariables(template = this.template) {
    return getVariables(template)
  }

  _initialize(options?: PromptTemplateOptions) {
    const template = options?.template
    if (typeof template !== 'string') {
      throw new CommonError('Prompt template must be a string', 'PromptTemplate', ErrorCode.InvalidArgument)
    }
    this.inputVariables = Array.isArray(options?.inputVariables) ? options.inputVariables : this.getVariables()
  }

  _format(data: Record<string, any>): string {
    const processEnv = {...process.env}
    return interpolateEnv(this.template, processEnv, data)
  }
}

PromptTemplate.register(EnvPromptTemplate, {name: 'env', aliases: ['js', 'javascript']})
