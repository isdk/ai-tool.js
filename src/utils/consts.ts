/**
 * A constant representing a passing score, likely used for similarity or relevance thresholds.
 */
export const PASSING_SCORE = 0.618

/**
 * Defines the signature for a function that processes an AI model's name,
 * typically for matching or validation purposes.
 * @param name - The model name string.
 * @returns A string, a RegExp execution array, or undefined if no match is found.
 */
export type AIModelNameRuleFn = (name: string) => string|RegExpExecArray|undefined

/**
 * Defines a single rule for matching an AI model name. It can be a simple string,
 * a regular expression, or a custom function.
 */
export type AIModelNameRule = string|RegExp|AIModelNameRuleFn
/**
 * Represents a collection of one or more AI model name matching rules.
 */
export type AIModelNameRules = AIModelNameRule|AIModelNameRule[]
