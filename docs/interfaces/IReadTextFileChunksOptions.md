[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / IReadTextFileChunksOptions

# Interface: IReadTextFileChunksOptions

## Extends

- [`ITruncateToTokenLimitOptions`](ITruncateToTokenLimitOptions.md)

## Properties

### best?

> `optional` **best**: `boolean`

#### Inherited from

[`ITruncateToTokenLimitOptions`](ITruncateToTokenLimitOptions.md).[`best`](ITruncateToTokenLimitOptions.md#best)

#### Defined in

[packages/ai-tool/src/utils/truncate-to-token-limit.ts:8](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/truncate-to-token-limit.ts#L8)

***

### bySentence?

> `optional` **bySentence**: `boolean`

#### Inherited from

[`ITruncateToTokenLimitOptions`](ITruncateToTokenLimitOptions.md).[`bySentence`](ITruncateToTokenLimitOptions.md#bysentence)

#### Defined in

[packages/ai-tool/src/utils/truncate-to-token-limit.ts:4](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/truncate-to-token-limit.ts#L4)

***

### completeSentence?

> `optional` **completeSentence**: `boolean`

#### Inherited from

[`ITruncateToTokenLimitOptions`](ITruncateToTokenLimitOptions.md).[`completeSentence`](ITruncateToTokenLimitOptions.md#completesentence)

#### Defined in

[packages/ai-tool/src/utils/truncate-to-token-limit.ts:9](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/truncate-to-token-limit.ts#L9)

***

### corrected?

> `optional` **corrected**: `boolean`

#### Inherited from

[`ITruncateToTokenLimitOptions`](ITruncateToTokenLimitOptions.md).[`corrected`](ITruncateToTokenLimitOptions.md#corrected)

#### Defined in

[packages/ai-tool/src/utils/truncate-to-token-limit.ts:10](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/truncate-to-token-limit.ts#L10)

***

### countLLMTokens()?

> `optional` **countLLMTokens**: (`text`, `modelId`?) => `Promise`\<`number`\>

#### Parameters

• **text**: `string`

• **modelId?**: `string`

#### Returns

`Promise`\<`number`\>

#### Inherited from

[`ITruncateToTokenLimitOptions`](ITruncateToTokenLimitOptions.md).[`countLLMTokens`](ITruncateToTokenLimitOptions.md#countllmtokens)

#### Defined in

[packages/ai-tool/src/utils/truncate-to-token-limit.ts:12](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/truncate-to-token-limit.ts#L12)

***

### metaInfo?

> `optional` **metaInfo**: `RequireAtLeastOne`\<`Partial`\<[`IFileMetaInfo`](IFileMetaInfo.md)\>, `"size"`\>

#### Defined in

[packages/ai-tool/src/utils/read-text-file-chunks.ts:8](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/read-text-file-chunks.ts#L8)

***

### modelId?

> `optional` **modelId**: `string`

#### Overrides

[`ITruncateToTokenLimitOptions`](ITruncateToTokenLimitOptions.md).[`modelId`](ITruncateToTokenLimitOptions.md#modelid)

#### Defined in

[packages/ai-tool/src/utils/read-text-file-chunks.ts:7](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/read-text-file-chunks.ts#L7)

***

### sentences?

> `optional` **sentences**: `string`[]

#### Inherited from

[`ITruncateToTokenLimitOptions`](ITruncateToTokenLimitOptions.md).[`sentences`](ITruncateToTokenLimitOptions.md#sentences)

#### Defined in

[packages/ai-tool/src/utils/truncate-to-token-limit.ts:7](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/truncate-to-token-limit.ts#L7)

***

### size?

> `optional` **size**: `number`

#### Overrides

[`ITruncateToTokenLimitOptions`](ITruncateToTokenLimitOptions.md).[`size`](ITruncateToTokenLimitOptions.md#size)

#### Defined in

[packages/ai-tool/src/utils/read-text-file-chunks.ts:6](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/read-text-file-chunks.ts#L6)

***

### truncLastSection?

> `optional` **truncLastSection**: `boolean`

#### Inherited from

[`ITruncateToTokenLimitOptions`](ITruncateToTokenLimitOptions.md).[`truncLastSection`](ITruncateToTokenLimitOptions.md#trunclastsection)

#### Defined in

[packages/ai-tool/src/utils/truncate-to-token-limit.ts:11](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/truncate-to-token-limit.ts#L11)
