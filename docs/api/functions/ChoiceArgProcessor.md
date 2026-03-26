[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ChoiceArgProcessor

# Function: ChoiceArgProcessor()

> **ChoiceArgProcessor**(`ctx`): `Promise`\<\{ `[CMD_ARG_PROCESSOR_RESULT]`: (`string` \| [`CmdArgAIChoiceConfig`](../interfaces/CmdArgAIChoiceConfig.md) \| \{ `excludePositional`: `boolean`; \})[]; \} \| `undefined`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/processors.ts:19](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/processors.ts#L19)

Choice argument processor (ChoiceArgProcessor).

Syntax: |item1|item2:maxPick=2:separator=";"

Logic:
1. Identifies positional arguments starting with '|'.
2. Recursively uses the CmdArgParser to parse subsequent configuration items (delimited by ':').
3. Constructs an CmdArgAIChoiceConfig object.
4. Returns the result using the Symbol Protocol, named 'choice' and excluded from positional indexing.

## Parameters

### ctx

[`CmdArgContext`](../interfaces/CmdArgContext.md)

## Returns

`Promise`\<\{ `[CMD_ARG_PROCESSOR_RESULT]`: (`string` \| [`CmdArgAIChoiceConfig`](../interfaces/CmdArgAIChoiceConfig.md) \| \{ `excludePositional`: `boolean`; \})[]; \} \| `undefined`\>
