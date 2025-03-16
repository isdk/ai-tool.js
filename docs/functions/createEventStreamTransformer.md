[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / createEventStreamTransformer

# Function: createEventStreamTransformer()

> **createEventStreamTransformer**\<`TValue`, `TOptions`\>(`customParser`?): `TransformStream`\<`Uint8Array`\<`ArrayBufferLike`\>, [`AIResult`](../interfaces/AIResult.md)\<`TValue`, `TOptions`\>\>

Defined in: [packages/ai-tool/src/utils/stream/ai-stream.ts:36](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/stream/ai-stream.ts#L36)

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
