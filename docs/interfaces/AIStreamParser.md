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

[packages/ai-tool/src/utils/stream/ai-stream.ts:27](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/stream/ai-stream.ts#L27)
