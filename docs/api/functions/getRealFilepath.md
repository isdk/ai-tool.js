[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / getRealFilepath

# Function: getRealFilepath()

> **getRealFilepath**(`filepath`): `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/load-file-from-paths.ts:210](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/load-file-from-paths.ts#L210)

Resolves the real file path, handling symbolic links.

## Parameters

### filepath

`string`

The file path to resolve.

## Returns

`string`

The real file path.

## Example

```typescript
const realPath = getRealFilepath('/path/to/symbolic/link');
console.log(realPath); // Outputs the resolved path.
```
