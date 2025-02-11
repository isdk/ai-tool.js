[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / AIStreamParser

# Interface: AIStreamParser()\<T, TOptions\>

Custom parser for AIStream data.

## Type Parameters

• **T** = `any`

• **TOptions** = `any`

> **AIStreamParser**(`data`, `options`): `void` \| [`AIResult`](AIResult.md)\<`T`, `TOptions`\>

Custom parser for AIStream data.

## Parameters

• **data**: `string`

The data to be parsed.

• **options**: [`AIStreamParserOptions`](AIStreamParserOptions.md)

The options for the parser.

## Returns

`void` \| [`AIResult`](AIResult.md)\<`T`, `TOptions`\>

The parsed data or void.

## Defined in

[packages/ai-tool/src/utils/stream/ai-stream.ts:27](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/stream/ai-stream.ts#L27)
