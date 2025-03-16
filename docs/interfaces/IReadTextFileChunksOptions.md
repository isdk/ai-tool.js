[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / IReadTextFileChunksOptions

# Interface: IReadTextFileChunksOptions

Defined in: [packages/ai-tool/src/utils/read-text-file-chunks.ts:5](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/read-text-file-chunks.ts#L5)

## Extends

- [`ITruncateToTokenLimitOptions`](ITruncateToTokenLimitOptions.md)

## Properties

### best?

> `optional` **best**: `boolean`

Defined in: [packages/ai-tool/src/utils/truncate-to-token-limit.ts:8](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/truncate-to-token-limit.ts#L8)

#### Inherited from

[`ITruncateToTokenLimitOptions`](ITruncateToTokenLimitOptions.md).[`best`](ITruncateToTokenLimitOptions.md#best)

***

### bySentence?

> `optional` **bySentence**: `boolean`

Defined in: [packages/ai-tool/src/utils/truncate-to-token-limit.ts:4](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/truncate-to-token-limit.ts#L4)

#### Inherited from

[`ITruncateToTokenLimitOptions`](ITruncateToTokenLimitOptions.md).[`bySentence`](ITruncateToTokenLimitOptions.md#bysentence)

***

### completeSentence?

> `optional` **completeSentence**: `boolean`

Defined in: [packages/ai-tool/src/utils/truncate-to-token-limit.ts:9](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/truncate-to-token-limit.ts#L9)

#### Inherited from

[`ITruncateToTokenLimitOptions`](ITruncateToTokenLimitOptions.md).[`completeSentence`](ITruncateToTokenLimitOptions.md#completesentence)

***

### corrected?

> `optional` **corrected**: `boolean`

Defined in: [packages/ai-tool/src/utils/truncate-to-token-limit.ts:10](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/truncate-to-token-limit.ts#L10)

#### Inherited from

[`ITruncateToTokenLimitOptions`](ITruncateToTokenLimitOptions.md).[`corrected`](ITruncateToTokenLimitOptions.md#corrected)

***

### countLLMTokens()?

> `optional` **countLLMTokens**: (`text`, `modelId`?) => `Promise`\<`number`\>

Defined in: [packages/ai-tool/src/utils/truncate-to-token-limit.ts:12](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/truncate-to-token-limit.ts#L12)

#### Parameters

##### text

`string`

##### modelId?

`string`

#### Returns

`Promise`\<`number`\>

#### Inherited from

[`ITruncateToTokenLimitOptions`](ITruncateToTokenLimitOptions.md).[`countLLMTokens`](ITruncateToTokenLimitOptions.md#countllmtokens)

***

### metaInfo?

> `optional` **metaInfo**: `RequireAtLeastOne`\<`Partial`\<[`IFileMetaInfo`](IFileMetaInfo.md)\>, `"size"`\>

Defined in: [packages/ai-tool/src/utils/read-text-file-chunks.ts:8](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/read-text-file-chunks.ts#L8)

***

### modelId?

> `optional` **modelId**: `string`

Defined in: [packages/ai-tool/src/utils/read-text-file-chunks.ts:7](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/read-text-file-chunks.ts#L7)

#### Overrides

[`ITruncateToTokenLimitOptions`](ITruncateToTokenLimitOptions.md).[`modelId`](ITruncateToTokenLimitOptions.md#modelid-2)

***

### sentences?

> `optional` **sentences**: `string`[]

Defined in: [packages/ai-tool/src/utils/truncate-to-token-limit.ts:7](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/truncate-to-token-limit.ts#L7)

#### Inherited from

[`ITruncateToTokenLimitOptions`](ITruncateToTokenLimitOptions.md).[`sentences`](ITruncateToTokenLimitOptions.md#sentences)

***

### size?

> `optional` **size**: `number`

Defined in: [packages/ai-tool/src/utils/read-text-file-chunks.ts:6](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/read-text-file-chunks.ts#L6)

#### Overrides

[`ITruncateToTokenLimitOptions`](ITruncateToTokenLimitOptions.md).[`size`](ITruncateToTokenLimitOptions.md#size)

***

### truncLastSection?

> `optional` **truncLastSection**: `boolean`

Defined in: [packages/ai-tool/src/utils/truncate-to-token-limit.ts:11](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/truncate-to-token-limit.ts#L11)

#### Inherited from

[`ITruncateToTokenLimitOptions`](ITruncateToTokenLimitOptions.md).[`truncLastSection`](ITruncateToTokenLimitOptions.md#trunclastsection)
