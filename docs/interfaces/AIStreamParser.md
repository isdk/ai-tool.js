[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / AIStreamParser

# Interface: AIStreamParser\<T, TOptions\>

Custom parser for AIStream data.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `TOptions` | `any` |

## Callable

### AIStreamParser

▸ **AIStreamParser**(`data`, `options`): `void` \| [`AIResult`](AIResult.md)\<`T`, `TOptions`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `options` | [`AIStreamParserOptions`](AIStreamParserOptions.md) |

#### Returns

`void` \| [`AIResult`](AIResult.md)\<`T`, `TOptions`\>

#### Defined in

[packages/ai-tool/src/utils/stream/ai-stream.ts:27](https://github.com/isdk/ai-tool.js/blob/262bec683a365fd77a8c1ea7cbf9a636e19c4ce2/src/utils/stream/ai-stream.ts#L27)
