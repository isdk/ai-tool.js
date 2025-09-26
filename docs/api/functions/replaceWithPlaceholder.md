[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / replaceWithPlaceholder

# Function: replaceWithPlaceholder()

> **replaceWithPlaceholder**(`content`, `options?`): \[`string`, `string`[]\]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/parse-command.ts:487](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/parse-command.ts#L487)

Replaces substrings in the given content with placeholders.

## Parameters

### content

`string`

The string content to process.

### options?

[`ReplacePlacehoderOptions`](../interfaces/ReplacePlacehoderOptions.md)

Optional configuration object with the following properties:
  - `startChar` - The starting character(s) of the substrings to replace. Can be a single character or an array of characters. Defaults to `["\"", "'"]`.
  - `endChar` - The ending character(s) of the substrings to replace. Can be a single character or an array of characters. Defaults to the value of `startChar`.
  - `placeholder` - The prefix for the placeholder names. Defaults to `defaultPlaceholderName`.
  - `placehoders` - An array of placeholders to use instead of generating new one.

## Returns

\[`string`, `string`[]\]

An array containing:
  - `content` - The modified content with placeholders.
  - `placehoders` - An array of the original substrings that were replaced.

## Throws

If the lengths of `startChar` and `endChar` are not the same.
