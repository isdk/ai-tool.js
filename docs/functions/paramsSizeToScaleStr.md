[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / paramsSizeToScaleStr

# Function: paramsSizeToScaleStr()

> **paramsSizeToScaleStr**(`paramsSize`, `fractionDigits`): `string`

Defined in: [packages/ai-tool/src/utils/convert-params-size.ts:11](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/utils/convert-params-size.ts#L11)

Formats a parameter size in bytes into a string with an appropriate scale (T, B, M, or K),
optionally specifying the number of fractional digits to display.

## Parameters

### paramsSize

`number`

The parameter size in bytes.

### fractionDigits

`number` = `0`

The number of fractional digits to include in the formatted output. Default is 0 (no fractional digits).

## Returns

`string`

A string representing the formatted parameter size with the appropriate scale unit and the specified number of fractional digits.
