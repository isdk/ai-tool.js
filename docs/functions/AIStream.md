[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / AIStream

# Function: AIStream()

> **AIStream**\<`T`, `TOptions`\>(`response`, `customParser`?): `ReadableStream`\<[`AIResult`](../interfaces/AIResult.md)\<`T`, `TOptions`\>\>

Defined in: [packages/ai-tool/src/utils/stream/ai-stream.ts:120](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/stream/ai-stream.ts#L120)

Returns a ReadableStream created from the response, parsed and handled with custom logic.
The stream goes through two transformation stages, first parsing the events and then
invoking the provided callbacks.

For 2xx HTTP responses:
- The function continues with standard stream processing.

For non-2xx HTTP responses:
- If the response body is defined, it asynchronously extracts and decodes the response body.
- It then creates a custom ReadableStream to propagate a detailed error message.

## Type Parameters

• **T** = `any`

• **TOptions** = `any`

## Parameters

### response

`Response`

The response.

### customParser?

[`AIStreamParser`](../interfaces/AIStreamParser.md)\<`T`, `TOptions`\>

The custom parser function.

## Returns

`ReadableStream`\<[`AIResult`](../interfaces/AIResult.md)\<`T`, `TOptions`\>\>

The AIStream.

## Throws

Will throw an error if the response is not OK.
