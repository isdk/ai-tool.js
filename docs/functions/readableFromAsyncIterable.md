[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / readableFromAsyncIterable

# Function: readableFromAsyncIterable()

> **readableFromAsyncIterable**\<`T`\>(`iterable`): `ReadableStream`\<`T`\>

Defined in: [packages/ai-tool/src/utils/stream/ai-stream.ts:164](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/utils/stream/ai-stream.ts#L164)

Implements ReadableStream.from(asyncIterable), which isn't documented in MDN and isn't implemented in node.
https://github.com/whatwg/streams/commit/8d7a0bf26eb2cc23e884ddbaac7c1da4b91cf2bc

## Type Parameters

• **T**

## Parameters

### iterable

`AsyncIterable`\<`T`\>

## Returns

`ReadableStream`\<`T`\>
