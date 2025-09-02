[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / pruneSubdirectories

# Function: pruneSubdirectories()

> **pruneSubdirectories**(`paths`): `string`[]

Defined in: [ai-tools/packages/ai-tool/src/utils/has-directory-in.ts:70](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/has-directory-in.ts#L70)

Filters out subdirectories from the given array of paths, keeping only the top-level (parent) directories.

## Parameters

### paths

`string`[]

An array of directory paths.

## Returns

`string`[]

A new array containing only the paths that are not subdirectories of any other path in the input.

## Example

```ts
const paths = ['/usr/local', '/usr/local/include', '/home/user/project'];
const result = pruneSubdirectories(paths);
// result: ['/usr/local', '/home/user/project']
```
