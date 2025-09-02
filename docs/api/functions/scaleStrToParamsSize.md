[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / scaleStrToParamsSize

# Function: scaleStrToParamsSize()

> **scaleStrToParamsSize**(`scale`): `number`

Defined in: [ai-tools/packages/ai-tool/src/utils/convert-params-size.ts:44](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/convert-params-size.ts#L44)

Converts a formatted parameters size string (with units T, B, M, or K) back to its byte value.

## Parameters

### scale

`string`

The formatted parameter size string (e.g., "1.23B", "456M", "789K", or "123").

## Returns

`number`

The parameter size in bytes.
