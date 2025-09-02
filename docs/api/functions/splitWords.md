[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / splitWords

# Function: splitWords()

> **splitWords**(`input`): `string`[]

Defined in: [ai-tools/packages/ai-tool/src/utils/split-words.ts:41](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/split-words.ts#L41)

Splits a string into an array of words based on case changes, digit boundaries, and spaces.

This function identifies word boundaries using the following rules:
1. Between a lowercase letter followed by an uppercase letter (camelCase)
2. Between a digit and a letter (alphanumeric boundaries)
3. Between consecutive uppercase letters when followed by a lowercase letter (acronyms)
4. At whitespace characters

## Parameters

### input

`string`

The string to be split into words

## Returns

`string`[]

An array of words extracted from the input string

## Example

```ts
splitWords("HelloWorld")     // Returns ["Hello", "World"]
splitWords("item1label21Good") // Returns ["item1", "label21", "Good"]
splitWords("HTTPRequest")    // Returns ["HTTP", "Request"]
splitWords("Good morning")   // Returns ["Good", "morning"]
```
