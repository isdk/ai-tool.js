/**
 * Prompt Type
 * defaults to `chat`
 */
export const PromptTypes = [
  'chat',
  'char',
  'plan',
] as const
export type  PromptType = typeof PromptTypes[number]

export const PromptTemplateTypes = [
  'internal',
  'hf',
  'fill',
] as const
export type  PromptTemplateType = typeof PromptTemplateTypes[number]

