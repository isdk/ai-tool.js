import { CommonError, ErrorCode } from "../base-error";
import { PromptTemplate, type PromptTemplateOptions } from "./prompt-template";
import { FStringPromptTemplateNode, parseFString, interpolateFString } from './template/python'

function getVariables(template: FStringPromptTemplateNode[]) {
  const result = new Set<string>()
  template.forEach((node) => {
    if (node.type === "variable") {
      result.add(node.name);
    }
  });
  return [...result]
}

export class FStringPromptTemplate extends PromptTemplate {
  declare compiledTemplate: FStringPromptTemplateNode[]

  static isTemplate(templateOpt: PromptTemplateOptions|string) {
    let compiledTemplate: any
    let template: string
    let result = false

    if (typeof templateOpt === 'object') {
      template = templateOpt.template as string
      compiledTemplate = templateOpt.compiledTemplate
    } else {
      template = templateOpt as string
    }

    if (!compiledTemplate && template) {
      try {
        compiledTemplate = parseFString(template)
      } catch (_err) {}
    }

    if (compiledTemplate) {
      const vars = getVariables(compiledTemplate)
      result = vars.length > 0
    }
    return result
  }

  getVariables(template: FStringPromptTemplateNode[] = this.compiledTemplate) {
    return getVariables(template)
  }

  _initialize(options?: PromptTemplateOptions) {
    const template = options?.template
    if (typeof template !== 'string') {
      throw new CommonError('Prompt template must be a string', 'PromptTemplate', ErrorCode.InvalidArgument)
    }
    this.compiledTemplate = parseFString(template)
    this.inputVariables = Array.isArray(options?.inputVariables) ? options.inputVariables : this.getVariables()
  }

  _format(data: Record<string, any>): string {
    return interpolateFString(this.compiledTemplate, data)
  }

}

PromptTemplate.register(FStringPromptTemplate,{name: 'fstring', aliases: ['python', 'f-string', 'langchain']})