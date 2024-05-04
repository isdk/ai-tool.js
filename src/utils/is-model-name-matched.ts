import { isRegExpStr, toRegExp } from 'util-ex'
import { CommonError, ErrorCode } from './base-error'
import { AIModelNameRules } from './consts'

/**
 * Checks if the provided model name matches the given rule.
 * @param modelName The name of the model to check.
 * @param rule An optional rule that can be a string, an array of strings, a regular expression, or a function.
 * @returns matched result if the model name matches the rule, undefined otherwise.
 * @example
 * IsModelNameMatched("gpt-3", "gpt-3") // returns true
 * IsModelNameMatched("GPT-3", "gpt-3") // returns true
 * IsModelNameMatched("GPT-3", ["gpt-3", "gpt-4"]) // returns true
 * IsModelNameMatched("gpt-3", /^gpt-\d+$/) // returns true
 * IsModelNameMatched("gpt-3", (modelName) => modelName.startsWith("gpt-")) // returns true
 * IsModelNameMatched("gpt-2", "gpt-3") // returns false
 * IsModelNameMatched("gpt-2", ["gpt-3", "gpt-4"]) // returns false
 * IsModelNameMatched("gpt-2", /^gpt-\d+$/) // returns false
 * IsModelNameMatched("gpt-2", (modelName) => modelName.startsWith("gpt-")) // returns false
 */
export function isModelNameMatched(modelName: string, rule?: AIModelNameRules) {
  if (typeof modelName !== 'string') {throw new CommonError('modelName must be a string', 'isModelNameMatched', ErrorCode.InvalidArgument)}
  switch (typeof rule) {
    case 'string':
      if (isRegExpStr(rule)) {
        rule = toRegExp(rule)
        const match = rule.exec(modelName)
        if (match) {return match}
      } else if (modelName.toLowerCase() === rule.toLowerCase()) {return rule}
      break
    case 'object':
      if (Array.isArray(rule)) {
        for (const item of rule) {
          if (typeof item === 'string') {
            if (isRegExpStr(item)) {
              rule = toRegExp(item)
              const match = rule.exec(modelName)
              if (match) {return match}
            } else if (modelName.toLowerCase() === item.toLowerCase()) {return item}
          } else if (item instanceof RegExp) {
            const match = item.exec(modelName)
            if (match) {return match}
          } else if (typeof item === 'function') {
            const result = item.call(this, modelName)
            if (result) {return result}
          }
        }
      } else if (rule instanceof RegExp) {
        const match = rule.exec(modelName)
        if (match) {return match}
      }
      break
    case 'function':
      const result = rule.call(this, modelName)
      if (result) {return result}
      break
  }
}
