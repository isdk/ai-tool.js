[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / genUrlParamsStr

# Function: genUrlParamsStr()

> **genUrlParamsStr**(`objParam`, `omitQuestionMark?`): `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/gen-url-params.ts:7](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/gen-url-params.ts#L7)

Utility to serialize an object into a URL query parameter string.

## Parameters

### objParam

`any`

The parameter object.

### omitQuestionMark?

`boolean`

If true, omits the leading '?' from the result. Defaults to false.

## Returns

`string`

The URL-encoded query string or an empty string.
