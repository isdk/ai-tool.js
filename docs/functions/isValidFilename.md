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

[packages/ai-tool/src/utils/filename.ts:63](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/filename.ts#L63)
