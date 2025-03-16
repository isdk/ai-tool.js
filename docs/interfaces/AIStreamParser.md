[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / AIStreamParser

# Interface: AIStreamParser()\<T, TOptions\>

Defined in: [packages/ai-tool/src/utils/stream/ai-stream.ts:25](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/stream/ai-stream.ts#L25)

Custom parser for AIStream data.

## Type Parameters

• **T** = `any`

• **TOptions** = `any`

> **AIStreamParser**(`data`, `options`): `void` \| [`AIResult`](AIResult.md)\<`T`, `TOptions`\>

Defined in: [packages/ai-tool/src/utils/stream/ai-stream.ts:26](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/stream/ai-stream.ts#L26)

Custom parser for AIStream data.

## Parameters

### data

`string`

The data to be parsed.

### options

[`AIStreamParserOptions`](AIStreamParserOptions.md)

The options for the parser.

## Returns

`void` \| [`AIResult`](AIResult.md)\<`T`, `TOptions`\>

The parsed data or void.
