[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / isValidFilename

# Function: isValidFilename()

> **isValidFilename**(`filename`): `boolean` \| `""`

Validates if a given string is a valid filename.

## Parameters

• **filename**: `string`

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

## Defined in

[packages/ai-tool/src/utils/filename.ts:63](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/utils/filename.ts#L63)
