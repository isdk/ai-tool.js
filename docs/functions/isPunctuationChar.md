[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / isPunctuationChar

# Function: isPunctuationChar()

> **isPunctuationChar**(`char`): `boolean`

Defined in: [packages/ai-tool/src/utils/split-sentence.ts:245](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/split-sentence.ts#L245)

Checks if the given character is a punctuation mark.
This function supports both Chinese and English punctuation marks.

## Parameters

### char

`string`

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
