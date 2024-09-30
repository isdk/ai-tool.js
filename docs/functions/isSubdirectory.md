[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / isSubdirectory

# Function: isSubdirectory()

> **isSubdirectory**(`parentDir`, `childDir`): `boolean`

Determines whether the `childDir` is a subdirectory of `parentDir`.

## Parameters

• **parentDir**: `string`

The directory to check as the potential parent.

• **childDir**: `string`

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

## Defined in

[packages/ai-tool/src/utils/has-directory-in.ts:17](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/has-directory-in.ts#L17)
