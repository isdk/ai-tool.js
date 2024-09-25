[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / countRegexMatches

# Function: countRegexMatches()

> **countRegexMatches**(`content`, `regex`): `number`

Counts the number of matches for a given regular expression in a specified string.
This function ensures that the regular expression is used globally by adding the 'g' flag,
if it is not already present.

## Parameters

• **content**: `string`

The string to search within.

• **regex**: `RegExp`

The regular expression to use for matching.

## Returns

`number`

The total number of matches found.

## Defined in

[packages/ai-tool/src/utils/count-regex-matches.ts:10](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/count-regex-matches.ts#L10)
