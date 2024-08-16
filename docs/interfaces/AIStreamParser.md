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

[packages/ai-tool/src/utils/stream/ai-stream.ts:27](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/utils/stream/ai-stream.ts#L27)
