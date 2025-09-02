[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / isSubdirectory

# Function: isSubdirectory()

> **isSubdirectory**(`parentDir`, `childDir`): `boolean`

Defined in: [ai-tools/packages/ai-tool/src/utils/has-directory-in.ts:17](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/has-directory-in.ts#L17)

Determines whether the `childDir` is a subdirectory of `parentDir`.

## Parameters

### parentDir

`string`

The directory to check as the potential parent.

### childDir

`string`

The directory to check as the potential child.

## Returns

`boolean`

true if `childDir` is a subdirectory of `parentDir` or same folder, otherwise false.

## Example

```typescript
const parentDir = '/usr/local';
const childDir = '/usr/local/include';
const result = isSubdirectory(parentDir, childDir); // true
```
