[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / paramsSizeToScaleStr

# Function: paramsSizeToScaleStr()

> **paramsSizeToScaleStr**(`paramsSize`, `fractionDigits`): `string`

Formats a parameter size in bytes into a string with an appropriate scale (T, B, M, or K),
optionally specifying the number of fractional digits to display.

## Parameters

• **paramsSize**: `number`

The parameter size in bytes.

• **fractionDigits**: `number` = `0`

The number of fractional digits to include in the formatted output. Default is 0 (no fractional digits).

## Returns

`string`

A string representing the formatted parameter size with the appropriate scale unit and the specified number of fractional digits.

## Defined in

[packages/ai-tool/src/utils/convert-params-size.ts:11](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/convert-params-size.ts#L11)
