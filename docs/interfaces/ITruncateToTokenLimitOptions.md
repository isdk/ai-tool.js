[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / ITruncateToTokenLimitOptions

# Interface: ITruncateToTokenLimitOptions

## Extended by

- [`IReadTextFileChunksOptions`](IReadTextFileChunksOptions.md)

## Properties

### best?

> `optional` **best**: `boolean`

#### Defined in

[packages/ai-tool/src/utils/truncate-to-token-limit.ts:8](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/truncate-to-token-limit.ts#L8)

***

### bySentence?

> `optional` **bySentence**: `boolean`

#### Defined in

[packages/ai-tool/src/utils/truncate-to-token-limit.ts:4](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/truncate-to-token-limit.ts#L4)

***

### completeSentence?

> `optional` **completeSentence**: `boolean`

#### Defined in

[packages/ai-tool/src/utils/truncate-to-token-limit.ts:9](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/truncate-to-token-limit.ts#L9)

***

### corrected?

> `optional` **corrected**: `boolean`

#### Defined in

[packages/ai-tool/src/utils/truncate-to-token-limit.ts:10](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/truncate-to-token-limit.ts#L10)

***

### countLLMTokens()?

> `optional` **countLLMTokens**: (`text`, `modelId`?) => `Promise`\<`number`\>

#### Parameters

• **text**: `string`

• **modelId?**: `string`

#### Returns

`Promise`\<`number`\>

#### Defined in

[packages/ai-tool/src/utils/truncate-to-token-limit.ts:12](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/truncate-to-token-limit.ts#L12)

***

### modelId?

> `optional` **modelId**: `string`

#### Defined in

[packages/ai-tool/src/utils/truncate-to-token-limit.ts:6](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/truncate-to-token-limit.ts#L6)

***

### sentences?

> `optional` **sentences**: `string`[]

#### Defined in

[packages/ai-tool/src/utils/truncate-to-token-limit.ts:7](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/truncate-to-token-limit.ts#L7)

***

### size?

> `optional` **size**: `number`

#### Defined in

[packages/ai-tool/src/utils/truncate-to-token-limit.ts:5](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/truncate-to-token-limit.ts#L5)

***

### truncLastSection?

> `optional` **truncLastSection**: `boolean`

#### Defined in

[packages/ai-tool/src/utils/truncate-to-token-limit.ts:11](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/truncate-to-token-limit.ts#L11)
