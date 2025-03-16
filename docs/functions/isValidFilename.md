[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / isValidFilename

# Function: isValidFilename()

> **isValidFilename**(`filename`): `boolean` \| `""`

Defined in: [packages/ai-tool/src/utils/filename.ts:63](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/filename.ts#L63)

Validates if a given string is a valid filename.

## Parameters

### filename

`string`

The filename to be validated.

## Returns

`boolean` \| `""`

True if the filename is valid, false otherwise.

## Throws

If the input is not a string.

## Example

```ts
isValidFilename('myFile.txt'); // Returns true
isValidFilename('my<file.txt'); // Returns false
```
