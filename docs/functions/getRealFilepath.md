[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / getRealFilepath

# Function: getRealFilepath()

> **getRealFilepath**(`filepath`): `string`

Defined in: [packages/ai-tool/src/utils/load-file-from-paths.ts:195](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/utils/load-file-from-paths.ts#L195)

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
