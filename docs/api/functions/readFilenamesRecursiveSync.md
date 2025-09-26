[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / readFilenamesRecursiveSync

# Function: readFilenamesRecursiveSync()

> **readFilenamesRecursiveSync**(`dir`, `options?`): `string`[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/load-file-from-paths.ts:137](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/utils/load-file-from-paths.ts#L137)

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

#### resolveSymlinks?

`boolean`

Whether to resolve symbolic links to their real paths. Defaults to true.

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
