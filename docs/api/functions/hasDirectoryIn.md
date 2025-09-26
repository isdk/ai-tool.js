[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / hasDirectoryIn

# Function: hasDirectoryIn()

> **hasDirectoryIn**(`dir`, `dirs?`): `undefined` \| `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/has-directory-in.ts:37](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/has-directory-in.ts#L37)

Checks if a given directory is a subdirectory of any directory in the provided array.

## Parameters

### dir

`string`

The directory path to check.

### dirs?

`string`[]

An array of directory paths.

## Returns

`undefined` \| `boolean`

true if the given directory is a subdirectory of any directory in the array; otherwise, false.

## Example

```ts
// Returns true if 'subdir' is within 'parentdir'
hasDirectoryIn('parentdir/subdir', ['parentdir', 'otherdir']); // true
```
