[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / getRealFilepath

# Function: getRealFilepath()

> **getRealFilepath**(`filepath`): `string`

Defined in: [ai-tools/packages/ai-tool/src/utils/load-file-from-paths.ts:209](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/load-file-from-paths.ts#L209)

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
