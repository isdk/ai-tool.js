[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / truncateToTokenLimit

# Function: truncateToTokenLimit()

> **truncateToTokenLimit**(`content`, `options`?): `Promise`\<`string`\>

Truncates the given content to fit within a specified token limit by removing sentences from the end.
This function is suitable for text content with multiple sentences.

## Parameters

• **content**: `string`

The original text content to be processed.

• **options?**: [`ITruncateToTokenLimitOptions`](../interfaces/ITruncateToTokenLimitOptions.md)

Optional configuration including model ID and size limit.

## Returns

`Promise`\<`string`\>

The truncated text content.

## Example

```typescript
const text = "This is an example text that will be truncated to fit within the token limit. It contains multiple sentences. Each sentence will be removed until the content fits within the specified token limit. This is the fourth sentence. This is the fifth sentence.";
const truncatedText = await truncateToTokenLimit(text, { modelId: "exampleModel", size: 50 });
console.log(truncatedText); // Output may be the truncated text
```

## Warning

This function is designed for text content with multiple sentences.

## Defined in

[packages/ai-tool/src/utils/truncate-to-token-limit.ts:31](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/truncate-to-token-limit.ts#L31)