[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / cmdArgsToMergedObject

# Function: cmdArgsToMergedObject()

> **cmdArgsToMergedObject**(`result`, `options?`): `Record`\<`string` \| `number`, `any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/api.ts:47](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/api.ts#L47)

Merges parsing results into a single flattened object.
Numeric indices are used for positional arguments.

## Parameters

### result

[`CmdArgParseResult`](../interfaces/CmdArgParseResult.md)

The raw parse result.

### options?

[`CmdArgParserOptions`](../interfaces/CmdArgParserOptions.md)

CmdArgParser configuration options.

## Returns

`Record`\<`string` \| `number`, `any`\>

A merged object containing all arguments.
