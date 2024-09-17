[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / getPackageDir

# Function: getPackageDir()

> **getPackageDir**(`cwd`): `string`

Retrieves the package directory from the current working directory.

## Parameters

• **cwd**: `string`

The current working directory.

Notes:
- The project root directory must contain either the `src` (source files directory) or `dist` (compiled files directory) as a fallback.
- If `packageDirectorySync` fails to find the package directory, it falls back to checking for `src` or `dist` directories.
- If none of these directories are found, an error is thrown.
 *

## Returns

`string`

## Example

```ts
// Example usage
const packageDir = getPackageDir(__dirname);
console.log(packageDir); // Output: '/path/to/project'
```

## Defined in

[packages/ai-tool/src/utils/get-package-dir.ts:18](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/utils/get-package-dir.ts#L18)
