[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / trimStartOfStreamHelper

# Function: trimStartOfStreamHelper()

> **trimStartOfStreamHelper**(): (`text`) => `string`

Returns a stateful function that, when invoked, trims leading whitespace
from the input text. The trimming only occurs on the first invocation, ensuring that
subsequent calls do not alter the input text. This is particularly useful in scenarios
where a text stream is being processed and only the initial whitespace should be removed.

## Returns

`Function`

A function that takes a string as input and returns a string
with leading whitespace removed if it is the first invocation; otherwise, it returns the input unchanged.

### Parameters

• **text**: `string`

### Returns

`string`

## Example

```ts
const trimStart = trimStartOfStreamHelper();
const output1 = trimStart("   text"); // "text"
const output2 = trimStart("   text"); // "   text"
```

## Defined in

[packages/ai-tool/src/utils/stream/ai-stream.ts:92](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/stream/ai-stream.ts#L92)
