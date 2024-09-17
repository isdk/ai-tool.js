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

[packages/ai-tool/src/utils/stream/ai-stream.ts:37](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/utils/stream/ai-stream.ts#L37)
