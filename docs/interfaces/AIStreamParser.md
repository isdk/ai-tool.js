[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / AIStreamParser

# Interface: AIStreamParser()\<T, TOptions\>

Defined in: [packages/ai-tool/src/utils/stream/ai-stream.ts:25](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/utils/stream/ai-stream.ts#L25)

Custom parser for AIStream data.

## Type Parameters

• **T** = `any`

• **TOptions** = `any`

> **AIStreamParser**(`data`, `options`): `void` \| [`AIResult`](AIResult.md)\<`T`, `TOptions`\>

Defined in: [packages/ai-tool/src/utils/stream/ai-stream.ts:26](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/utils/stream/ai-stream.ts#L26)

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
