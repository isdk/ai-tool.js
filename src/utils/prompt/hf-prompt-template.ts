import { HFTemplate } from "./template/jinja"
import { PromptTemplate, PromptTemplateOptions } from "./prompt-template"
import { CommonError, ErrorCode, } from '../base-error'

function getVariable(statement: any, internalVars?: string[]) {
  let result: string|undefined
  switch (statement.type) {
    case 'Identifier': {
      result = statement.value
      break
    }
    case 'MemberExpression': {
      result = getVariable(statement.object, internalVars)
      break
    }
    case 'FilterExpression': {
      result = getVariable(statement.operand, internalVars)
      break
    }
    case 'Set': {
      if (!internalVars) {internalVars = []}
      const assignee = getVariable(statement.assignee)
      if (assignee) {internalVars.push(assignee)}
      result = getVariable(statement.value, internalVars)
      break
    }
  }

  if (result && internalVars?.includes(result)) {
    result = undefined
  }
  return result
}

function getVariables(statement: any, internalVars?: string[]) {
  let result: string[] = []
  if (Array.isArray(statement)) {
    result = statement.map((item)=>getVariables(item, internalVars)).filter(Boolean).flat() as string[]
  } else {
    switch (statement.type) {
      case 'Program': {
        result = statement.body.map((item)=>getVariables(item, internalVars)).filter(Boolean).flat()
        break
      }
      case 'If': {
        result = [getVariable(statement.test, internalVars), ...getVariables(statement.body, internalVars), ...getVariables(statement.alternate, internalVars)].filter(Boolean) as string[]
        break
      }
      case 'BinaryExpression': {
        result = [getVariable(statement.left, internalVars), getVariable(statement.right, internalVars)].filter(Boolean) as string[]
        break
      }
      case 'For': {
        const loopVar = getVariable(statement.loopvar)
        if (loopVar) {
          if (!internalVars) {internalVars = []}
          internalVars.push(loopVar)
        }
        result = [getVariable(statement.iterable, internalVars), ...getVariables(statement.body, internalVars)].filter(Boolean) as string[]
        break
      }
      case 'CallExpression': {
        result = [getVariable(statement.callee, internalVars), ...getVariables(statement.args, internalVars)].filter(Boolean) as string[]
        break
      }
      default: {
        result = [getVariable(statement, internalVars)].filter(Boolean) as string[]
      }
    }
  }
  return result
}

export class HfPromptTemplate extends PromptTemplate {
  declare compiledTemplate: HFTemplate

  static isTemplate(templateOpt: PromptTemplateOptions|string): boolean {
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
        compiledTemplate = new HFTemplate(template)
      } catch (error) {}
    }

    if (compiledTemplate) {
        const vars = getVariables(compiledTemplate.parsed, [])
        result = vars.length > 0
    }
    return result
  }

  getVariables(template: HFTemplate = this.compiledTemplate) {
    const internalVars = []
    // get variables and remove duplication items
    const result = getVariables(template.parsed, internalVars).filter((item, index, self) => self.indexOf(item) === index)
    return result
  }

  _initialize(options?: PromptTemplateOptions) {
    const template = options?.template
    if (typeof template !== 'string') {
      throw new CommonError('Prompt template must be a string', 'PromptTemplate', ErrorCode.InvalidArgument)
    }
    this.compiledTemplate = new HFTemplate(template)
    this.inputVariables = Array.isArray(options?.inputVariables) ? options.inputVariables : this.getVariables()
  }

  _format(data: Record<string, any>): string {
    return this.compiledTemplate.render(data)
  }
}

PromptTemplate.register(HfPromptTemplate,{name: 'hf', aliases: ['huggingface', 'internal', 'default']})

// note:
//  1. the value in func is the hf template runtime value: AnyRuntimeValue(it's not exported)
//  2. the PromptTemplate will call the func first to get the init data, so you must return the function to execute in HF-template
interface AnyRuntimeValue {
  value: any
  type: string
  builtins: Map<string, AnyRuntimeValue>
}

export function createHfValueFunc(fn: Function) {
  return function(_data: any) {
    return fn
    // return function(...args: AnyRuntimeValue[]) {
    //   const _args = args.map(arg => {
    //     return parseHfValue(arg)
    //   }) as any[]
    //   return fn(..._args, args)
    // }
  }
}

/*
function parseHfValue(arg: any) {
  let result = arg
  if (Array.isArray(arg)) {
    result = arg.map((item: AnyRuntimeValue) => parseHfValue(item))
  } else if (arg instanceof Map)  {
    result = {}
    arg.forEach((item: AnyRuntimeValue, key: string) => {
      result[key] = parseHfValue(item)
    })
  } else if (arg.type === 'ObjectValue')  {
    if (arg.orgValue) {result = arg.orgValue}
    else {
      result = {}
      arg.forEach((item: AnyRuntimeValue, key: string) => {
        result[key] = parseHfValue(item)
      })
    }
  } else if (arg.type === 'ArrayValue')  {
    result = arg.value.map((item: AnyRuntimeValue) => parseHfValue(item))
  } else if (arg.type) {
    result = arg.value
  }
  return result
}
*/
