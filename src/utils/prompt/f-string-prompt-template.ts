import { CommonError, ErrorCode } from "../base-error";
import { PromptTemplate, type PromptTemplateOptions } from "./prompt-template";
import { FStringPromptTemplateNode, parseFString, interpolateFString } from './template/python'

export class FStringPromptTemplate extends PromptTemplate {
  declare compiledTemplate: FStringPromptTemplateNode[]

  getVariables(template: FStringPromptTemplateNode[] = this.compiledTemplate) {
    const result = new Set<string>()
    template.forEach((node) => {
      if (node.type === "variable") {
        result.add(node.name);
      }
    });
    return [...result]
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