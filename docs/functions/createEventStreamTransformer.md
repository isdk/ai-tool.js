[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / createEventStreamTransformer

# Function: createEventStreamTransformer()

> **createEventStreamTransformer**\<`TValue`, `TOptions`\>(`customParser`?): `TransformStream`\<`Uint8Array`\<`ArrayBufferLike`\>, [`AIResult`](../interfaces/AIResult.md)\<`TValue`, `TOptions`\>\>

Defined in: [packages/ai-tool/src/utils/stream/ai-stream.ts:36](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/utils/stream/ai-stream.ts#L36)

Creates a TransformStream that parses events from an EventSource stream using a custom parser.

## Type Parameters

• **TValue** = `any`

• **TOptions** = `any`

## Parameters

### customParser?

[`AIStreamParser`](../interfaces/AIStreamParser.md)\<`any`, `any`\>

Function to handle event data.

## Returns

`TransformStream`\<`Uint8Array`\<`ArrayBufferLike`\>, [`AIResult`](../interfaces/AIResult.md)\<`TValue`, `TOptions`\>\>

TransformStream parsing events.
