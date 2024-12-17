[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / readableFromAsyncIterable

# Function: readableFromAsyncIterable()

> **readableFromAsyncIterable**\<`T`\>(`iterable`): `ReadableStream`\<`T`\>

Implements ReadableStream.from(asyncIterable), which isn't documented in MDN and isn't implemented in node.
https://github.com/whatwg/streams/commit/8d7a0bf26eb2cc23e884ddbaac7c1da4b91cf2bc

## Type Parameters

• **T**

## Parameters

• **iterable**: `AsyncIterable`\<`T`, `any`, `any`\>

## Returns

`ReadableStream`\<`T`\>

## Defined in

[packages/ai-tool/src/utils/stream/ai-stream.ts:166](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/stream/ai-stream.ts#L166)
