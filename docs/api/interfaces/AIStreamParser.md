[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / AIStreamParser

# Interface: AIStreamParser()\<T, TOptions\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/stream/ai-stream.ts:25](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/utils/stream/ai-stream.ts#L25)

Custom parser for AIStream data.

## Type Parameters

### T

`T` = `any`

### TOptions

`TOptions` = `any`

> **AIStreamParser**(`data`, `options`): `void` \| [`AIResult`](AIResult.md)\<`T`, `TOptions`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/stream/ai-stream.ts:26](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/utils/stream/ai-stream.ts#L26)

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
