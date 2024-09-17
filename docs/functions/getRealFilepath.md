[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / getRealFilepath

# Function: getRealFilepath()

> **getRealFilepath**(`filepath`): `string`

Resolves the real file path, handling symbolic links.

## Parameters

• **filepath**: `string`

The file path to resolve.

## Returns

`string`

The real file path.

## Example

```typescript
const realPath = getRealFilepath('/path/to/symbolic/link');
console.log(realPath); // Outputs the resolved path.
```

## Defined in

[packages/ai-tool/src/utils/load-file-from-paths.ts:172](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/utils/load-file-from-paths.ts#L172)
