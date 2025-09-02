[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / fileIsExists

# Function: fileIsExists()

> **fileIsExists**(`filepath`): `undefined` \| `boolean`

Defined in: [ai-tools/packages/ai-tool/src/utils/load-file-from-paths.ts:23](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/load-file-from-paths.ts#L23)

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
