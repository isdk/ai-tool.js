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

[packages/ai-tool/src/utils/stream/ai-stream.ts:51](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/stream/ai-stream.ts#L51)
