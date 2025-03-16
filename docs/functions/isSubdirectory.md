[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / isSubdirectory

# Function: isSubdirectory()

> **isSubdirectory**(`parentDir`, `childDir`): `boolean`

Defined in: [packages/ai-tool/src/utils/has-directory-in.ts:17](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/has-directory-in.ts#L17)

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

true if `childDir` is a subdirectory of `parentDir`, otherwise false.

## Example

```typescript
const parentDir = '/usr/local';
const childDir = '/usr/local/include';
const result = isSubdirectory(parentDir, childDir); // true
```
