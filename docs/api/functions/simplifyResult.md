[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / simplifyResult

# Function: simplifyResult()

> **simplifyResult**(`result`, `options?`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/api.ts:68](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/api.ts#L68)

Simplifies the raw parsing result into a more intuitive format.
The behavior is controlled by `options.simplify`.

## Parameters

### result

[`CmdArgParseResult`](../interfaces/CmdArgParseResult.md)

The raw parse result.

### options?

[`CmdArgParserOptions`](../interfaces/CmdArgParserOptions.md)

CmdArgParser configuration options.

## Returns

`any`

A simplified value, array, or object.
