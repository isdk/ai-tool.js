[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / countRegexMatches

# Function: countRegexMatches()

> **countRegexMatches**(`content`, `regex`): `number`

Defined in: [packages/ai-tool/src/utils/count-regex-matches.ts:10](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/count-regex-matches.ts#L10)

Counts the number of matches for a given regular expression in a specified string.
This function ensures that the regular expression is used globally by adding the 'g' flag,
if it is not already present.

## Parameters

### content

`string`

The string to search within.

### regex

`RegExp`

The regular expression to use for matching.

## Returns

`number`

The total number of matches found.
