[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / AIArgProcessor

# Function: AIArgProcessor()

> **AIArgProcessor**(`ctx`): `Promise`\<\{ `[CMD_ARG_PROCESSOR_RESULT]`: (`string` \| [`CmdArgAIChoiceConfig`](../interfaces/CmdArgAIChoiceConfig.md) \| \{ `excludePositional`: `boolean`; \})[]; \} \| `undefined`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/processors.ts:87](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/processors.ts#L87)

Combined AI processor (AIArgProcessor).
Sequentially attempts choice selection and template variable processing.

## Parameters

### ctx

[`CmdArgContext`](../interfaces/CmdArgContext.md)

## Returns

`Promise`\<\{ `[CMD_ARG_PROCESSOR_RESULT]`: (`string` \| [`CmdArgAIChoiceConfig`](../interfaces/CmdArgAIChoiceConfig.md) \| \{ `excludePositional`: `boolean`; \})[]; \} \| `undefined`\>
