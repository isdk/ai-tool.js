[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / createEventStreamTransformer

# Function: createEventStreamTransformer()

> **createEventStreamTransformer**\<`TValue`, `TOptions`\>(`customParser?`): `TransformStream`\<`Uint8Array`\<`ArrayBufferLike`\>, [`AIResult`](../interfaces/AIResult.md)\<`TValue`, `TOptions`\>\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/stream/ai-stream.ts:36](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/stream/ai-stream.ts#L36)

Creates a TransformStream that parses events from an EventSource stream using a custom parser.

## Type Parameters

### TValue

`TValue` = `any`

### TOptions

`TOptions` = `any`

## Parameters

### customParser?

[`AIStreamParser`](../interfaces/AIStreamParser.md)\<`any`, `any`\>

Function to handle event data.

## Returns

`TransformStream`\<`Uint8Array`\<`ArrayBufferLike`\>, [`AIResult`](../interfaces/AIResult.md)\<`TValue`, `TOptions`\>\>

TransformStream parsing events.
