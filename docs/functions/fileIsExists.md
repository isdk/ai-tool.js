[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / fileIsExists

# Function: fileIsExists()

> **fileIsExists**(`filepath`): `undefined` \| `boolean`

Defined in: [packages/ai-tool/src/utils/load-file-from-paths.ts:23](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/utils/load-file-from-paths.ts#L23)

Checks if a file (not a directory) exists at the specified path.

## Parameters

### filepath

`string`

The path to the file to check.

## Returns

`undefined` \| `boolean`

true if the file exists and is not a directory; otherwise, false.

## Example

```typescript
const exists = fileIsExists('path/to/file.txt');
console.log(exists); // Outputs: true or false
```
