[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / TemplateArgProcessor

# Function: TemplateArgProcessor()

> **TemplateArgProcessor**(`ctx`): `Promise`\<\{ `[CMD_ARG_PROCESSOR_RESULT]`: `any`[]; \} \| `undefined`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/processors.ts:63](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/processors.ts#L63)

Template variable processor (TemplateArgProcessor).

Syntax: msg="Hello {{name}}"

Logic:
1. Calls PromptTemplate.formatIf for variable substitution.
2. If the substitution results in a bare string (no quotes and not JS literal source),
   it is JSON-escaped to ensure it's recognized as a string literal in subsequent evaluation.
3. Returns the substituted source string for re-evaluation by the Evaluator.

## Parameters

### ctx

[`CmdArgContext`](../interfaces/CmdArgContext.md)

## Returns

`Promise`\<\{ `[CMD_ARG_PROCESSOR_RESULT]`: `any`[]; \} \| `undefined`\>
