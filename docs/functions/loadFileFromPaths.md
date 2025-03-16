[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / loadFileFromPaths

# Function: loadFileFromPaths()

> **loadFileFromPaths**(`filename`, `searchPaths`?, `extNames`?, `options`?): `Buffer`\<`ArrayBufferLike`\>

Defined in: [packages/ai-tool/src/utils/load-file-from-paths.ts:44](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/load-file-from-paths.ts#L44)

Loads a file from given paths, optionally searching for specific extensions.

## Parameters

### filename

`string`

The base filename to search for, without any file extension.

### searchPaths?

`string`[]

An array of directories to search for the file. Defaults to the current directory (`"."`) if not provided.

### extNames?

`string`[]

An array of file extensions to try, in order of preference. If not provided, the file will be searched for
                  without any extension.

### options?

#### exclude?

`string` \| `string`[]

#### filepath?

`string`

#### signal?

`AbortSignal`

## Returns

`Buffer`\<`ArrayBufferLike`\>

The contents of the found file as a Buffer.

## Throws

If the file is not found in any of the search paths.

## Example

```typescript
const content = loadFileFromPaths('config', ['/etc', '/usr/local/etc'], ['.json', '.yaml']);
```
