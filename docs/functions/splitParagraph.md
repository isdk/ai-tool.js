[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / splitParagraph

# Function: splitParagraph()

> **splitParagraph**(`value`, `options`?): `string`[][]

Defined in: [packages/ai-tool/src/utils/split-paragraph.ts:12](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/split-paragraph.ts#L12)

Splits the input string into paragraphs based on empty lines and title lines.
Each paragraph is represented as an array of strings, where each string is a line in the paragraph.

## Parameters

### value

`string`

The input string to be split into paragraphs.

### options?

[`SplitSentenceOptions`](../interfaces/SplitSentenceOptions.md)

Optional configuration options for splitting the string.

## Returns

`string`[][]

A two-dimensional array where each sub-array represents a paragraph.
