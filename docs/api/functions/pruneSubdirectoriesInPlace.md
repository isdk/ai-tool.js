[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / pruneSubdirectoriesInPlace

# Function: pruneSubdirectoriesInPlace()

> **pruneSubdirectoriesInPlace**(`paths`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/has-directory-in.ts:93](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/has-directory-in.ts#L93)

Filters out subdirectories from the given array of paths in-place, keeping only the top-level (parent) directories.

This function helps organize file paths by:
* Removing any subfolders that are completely contained within other folders
* Preserving the original order of paths you added
* Eliminating duplicate paths

## Parameters

### paths

`string`[]

Array of directory paths to clean (can mix different OS path formats)

## Returns

`void`

## Example

```ts
let paths = ['/usr/local', '/usr/local/include', '/home/user/project'];
pruneSubdirectoriesInPlace(paths);
// paths is now: ['/usr/local', '/home/user/project']
```
