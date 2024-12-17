[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / createEventStreamTransformer

# Function: createEventStreamTransformer()

> **createEventStreamTransformer**\<`TValue`, `TOptions`\>(`customParser`?): `TransformStream`\<`Uint8Array`, [`AIResult`](../interfaces/AIResult.md)\<`TValue`, `TOptions`\>\>

Creates a TransformStream that parses events from an EventSource stream using a custom parser.

## Type Parameters

• **TValue** = `any`

• **TOptions** = `any`

## Parameters

• **customParser?**: [`AIStreamParser`](../interfaces/AIStreamParser.md)\<`any`, `any`\>

Function to handle event data.

## Returns

`TransformStream`\<`Uint8Array`, [`AIResult`](../interfaces/AIResult.md)\<`TValue`, `TOptions`\>\>

TransformStream parsing events.

## Defined in

[packages/ai-tool/src/utils/stream/ai-stream.ts:37](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/stream/ai-stream.ts#L37)
