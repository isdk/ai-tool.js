[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / getRealFilepath

# Function: getRealFilepath()

> **getRealFilepath**(`filepath`): `string`

Defined in: [packages/ai-tool/src/utils/load-file-from-paths.ts:195](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/utils/load-file-from-paths.ts#L195)

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
