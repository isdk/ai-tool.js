[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / fileIsExists

# Function: fileIsExists()

> **fileIsExists**(`filepath`): `undefined` \| `boolean`

Defined in: [packages/ai-tool/src/utils/load-file-from-paths.ts:23](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/load-file-from-paths.ts#L23)

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
