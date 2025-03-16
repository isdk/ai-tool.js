[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / getMultiLevelExtname

# Function: getMultiLevelExtname()

> **getMultiLevelExtname**(`filename`, `level`): `string`

Defined in: [packages/ai-tool/src/utils/filename.ts:174](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/utils/filename.ts#L174)

Retrieves multi-level file extension

## Parameters

### filename

`string`

The file name

### level

`number` = `1`

The level, default is 1, indicating the number of extension levels to retrieve

## Returns

`string`

Returns a concatenated string of multiple extensions, or an empty string if no extension is found
