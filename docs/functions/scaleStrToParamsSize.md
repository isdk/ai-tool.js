[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / scaleStrToParamsSize

# Function: scaleStrToParamsSize()

> **scaleStrToParamsSize**(`scale`): `number`

Defined in: [packages/ai-tool/src/utils/convert-params-size.ts:44](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/utils/convert-params-size.ts#L44)

Converts a formatted parameters size string (with units T, B, M, or K) back to its byte value.

## Parameters

### scale

`string`

The formatted parameter size string (e.g., "1.23B", "456M", "789K", or "123").

## Returns

`number`

The parameter size in bytes.
