import { CommonError, ErrorCode } from "../base-error";
import { PromptTemplate, PromptTemplateOptions } from "./prompt-template";
import { interpolateGolangTemplate } from "./template/golang";

export class GolangPromptTemplate extends PromptTemplate {

  static isTemplate(templateOpt: PromptTemplateOptions|string) {
    const template = typeof templateOpt === 'string' ? templateOpt : templateOpt.template
    return template?.includes('{{') && template.includes('}}')
  }

  getVariables(template: string) {
    const result = {}
    interpolateGolangTemplate(template, result, true)
    return [...Object.keys(result)]
  }

  _initialize(options?: PromptTemplateOptions) {
    const template = options?.template
    if (typeof template !== 'string') {
      throw new CommonError('Prompt template must be a string', 'PromptTemplate', ErrorCode.InvalidArgument)
    }
    this.inputVariables = Array.isArray(options?.inputVariables) ? options.inputVariables : this.getVariables(template)
  }

  _format(data: Record<string, any>): string {
    return interpolateGolangTemplate(this.template, data)
  }
}

PromptTemplate.register(GolangPromptTemplate,{name: 'golang', aliases: ['localai', 'ollama']})
