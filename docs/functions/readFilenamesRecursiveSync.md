[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / readFilenamesRecursiveSync

# Function: readFilenamesRecursiveSync()

> **readFilenamesRecursiveSync**(`dir`, `options`?): `string`[]

Recursively reads all filenames in the given directory or directories.
Optionally filters the results using a file matching callback.

## Parameters

• **dir**: `string` \| `string`[]

A single directory path or an array of directory paths to start the search from.

• **options?**

• **options.isFileMatched?**

An optional callback that determines whether a file should be included in the result.

• **options.level?**: `number`

• **options.signal?**: `AbortSignal`

An optional signal to abort the operation.

## Returns

`string`[]

An array of file paths that match the criteria.

## Example

```typescript
const files = readFilenamesRecursiveSync('/path/to/directory', {isFileMatched: (filepath) => filepath.endsWith('.js')});
console.log(files); // Outputs an array of JavaScript file paths.
```

## Defined in

[packages/ai-tool/src/utils/load-file-from-paths.ts:136](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/load-file-from-paths.ts#L136)
