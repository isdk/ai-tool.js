[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / getMultiLevelExtname

# Function: getMultiLevelExtname()

> **getMultiLevelExtname**(`filename`, `level`): `string`

Defined in: [packages/ai-tool/src/utils/filename.ts:174](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/filename.ts#L174)

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
