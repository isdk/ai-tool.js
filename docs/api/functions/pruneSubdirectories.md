[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / pruneSubdirectories

# Function: pruneSubdirectories()

> **pruneSubdirectories**(`paths`): `string`[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/has-directory-in.ts:70](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/has-directory-in.ts#L70)

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
