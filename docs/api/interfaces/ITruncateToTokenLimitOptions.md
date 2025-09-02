[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ITruncateToTokenLimitOptions

# Interface: ITruncateToTokenLimitOptions

Defined in: [ai-tools/packages/ai-tool/src/utils/truncate-to-token-limit.ts:3](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/truncate-to-token-limit.ts#L3)

## Extended by

- [`IReadTextFileChunksOptions`](IReadTextFileChunksOptions.md)

## Properties

### best?

> `optional` **best**: `boolean`

Defined in: [ai-tools/packages/ai-tool/src/utils/truncate-to-token-limit.ts:8](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/truncate-to-token-limit.ts#L8)

***

### bySentence?

> `optional` **bySentence**: `boolean`

Defined in: [ai-tools/packages/ai-tool/src/utils/truncate-to-token-limit.ts:4](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/truncate-to-token-limit.ts#L4)

***

### completeSentence?

> `optional` **completeSentence**: `boolean`

Defined in: [ai-tools/packages/ai-tool/src/utils/truncate-to-token-limit.ts:9](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/truncate-to-token-limit.ts#L9)

***

### corrected?

> `optional` **corrected**: `boolean`

Defined in: [ai-tools/packages/ai-tool/src/utils/truncate-to-token-limit.ts:10](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/truncate-to-token-limit.ts#L10)

***

### countLLMTokens()?

> `optional` **countLLMTokens**: (`text`, `modelId`?) => `Promise`\<`number`\>

Defined in: [ai-tools/packages/ai-tool/src/utils/truncate-to-token-limit.ts:12](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/truncate-to-token-limit.ts#L12)

#### Parameters

##### text

`string`

##### modelId?

`string`

#### Returns

`Promise`\<`number`\>

***

### modelId?

> `optional` **modelId**: `string`

Defined in: [ai-tools/packages/ai-tool/src/utils/truncate-to-token-limit.ts:6](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/truncate-to-token-limit.ts#L6)

***

### sentences?

> `optional` **sentences**: `string`[]

Defined in: [ai-tools/packages/ai-tool/src/utils/truncate-to-token-limit.ts:7](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/truncate-to-token-limit.ts#L7)

***

### size?

> `optional` **size**: `number`

Defined in: [ai-tools/packages/ai-tool/src/utils/truncate-to-token-limit.ts:5](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/truncate-to-token-limit.ts#L5)

***

### truncLastSection?

> `optional` **truncLastSection**: `boolean`

Defined in: [ai-tools/packages/ai-tool/src/utils/truncate-to-token-limit.ts:11](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/truncate-to-token-limit.ts#L11)
