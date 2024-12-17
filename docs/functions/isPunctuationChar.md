[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / isPunctuationChar

# Function: isPunctuationChar()

> **isPunctuationChar**(`char`): `boolean`

Checks if the given character is a punctuation mark.
This function supports both Chinese and English punctuation marks.

## Parameters

• **char**: `string`

The character to check.

## Returns

`boolean`

`true` if the character is a punctuation mark, otherwise `false`.

## Example

```typescript
isPunctuationChar('。'); // returns true
isPunctuationChar('!');  // returns true
isPunctuationChar('a');  // returns false
```

## Defined in

[packages/ai-tool/src/utils/split-sentence.ts:245](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/split-sentence.ts#L245)
