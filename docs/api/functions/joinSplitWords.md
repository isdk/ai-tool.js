[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / joinSplitWords

# Function: joinSplitWords()

> **joinSplitWords**(`input`, `separator`): `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/split-words.ts:18](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/split-words.ts#L18)

Splits a string into words using splitWords rules, then joins them with a separator

This is a convenience function that combines word splitting and joining operations.
It's useful for converting camelCase, PascalCase, or mixed-alphanumeric strings
into human-readable formats with custom separators.

## Parameters

### input

`string`

The string to process

### separator

`string` = `' '`

The separator to use when joining words (default: space)

## Returns

`string`

The input string with words separated by the specified delimiter

## Example

```ts
joinSplitWords("HelloWorld")            // Returns "Hello World"
joinSplitWords("item1label21Good", "-") // Returns "item1-label21-Good"
joinSplitWords("HTTPRequest", "_")      // Returns "HTTP_Request"
joinSplitWords("Good morning", "-")          // Returns "Good-morning"
```
