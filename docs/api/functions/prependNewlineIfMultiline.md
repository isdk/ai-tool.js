[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / prependNewlineIfMultiline

# Function: prependNewlineIfMultiline()

> **prependNewlineIfMultiline**(`text`): `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/prependNewlineIfMultiline.ts:18](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/prependNewlineIfMultiline.ts#L18)

Prepends a newline character to the beginning of the input text if it is multiline and does not already start with a newline.

This function checks whether the provided text contains multiple lines by looking for newline characters (`\n`).
If the text is determined to be multiline and its first non-whitespace character is not a newline,
a newline character will be added at the beginning of the text.

## Parameters

### text

`string`

The input string to check and potentially modify.

## Returns

`string`

The processed string, which may have a prepended newline if conditions are met.

## Example

```typescript
console.log(prependNewlineIfMultiline("  hello\nworld")); // Output: "\n  hello\nworld"
console.log(prependNewlineIfMultiline("\nhello\nworld")); // Output: "\nhello\nworld" (unchanged)
console.log(prependNewlineIfMultiline("single line")); // Output: "single line" (unchanged)
```
