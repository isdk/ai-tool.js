[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / readFilenamesRecursiveSync

# Function: readFilenamesRecursiveSync()

> **readFilenamesRecursiveSync**(`dir`, `options`?): `string`[]

Defined in: [packages/ai-tool/src/utils/load-file-from-paths.ts:136](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/load-file-from-paths.ts#L136)

Recursively reads all filenames in the given directory or directories.
Optionally filters the results using a file matching callback.

## Parameters

### dir

A single directory path or an array of directory paths to start the search from.

`string` | `string`[]

### options?

#### isFileMatched?

(`filepath`, `file`) => `boolean`

An optional callback that determines whether a file should be included in the result.

#### level?

`number`

#### signal?

`AbortSignal`

An optional signal to abort the operation.

## Returns

`string`[]

An array of file paths that match the criteria.

## Example

```typescript
const files = readFilenamesRecursiveSync('/path/to/directory', {isFileMatched: (filepath) => filepath.endsWith('.js')});
console.log(files); // Outputs an array of JavaScript file paths.
```
