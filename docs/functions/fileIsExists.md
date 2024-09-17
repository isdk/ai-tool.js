[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / fileIsExists

# Function: fileIsExists()

> **fileIsExists**(`filepath`): `undefined` \| `boolean`

Checks if a file (not a directory) exists at the specified path.

## Parameters

• **filepath**: `string`

The path to the file to check.

## Returns

`undefined` \| `boolean`

true if the file exists and is not a directory; otherwise, false.

## Example

```typescript
const exists = fileIsExists('path/to/file.txt');
console.log(exists); // Outputs: true or false
```

## Defined in

[packages/ai-tool/src/utils/load-file-from-paths.ts:18](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/utils/load-file-from-paths.ts#L18)
