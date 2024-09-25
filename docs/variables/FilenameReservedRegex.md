[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / FilenameReservedRegex

# Variable: FilenameReservedRegex

> `const` **FilenameReservedRegex**: `RegExp`

Regular expression pattern for reserved characters in a filename.
do not use /g global option here: when the regex is executed multiple times, it will always begin where it left off last time.

## Defined in

[packages/ai-tool/src/utils/filename.ts:8](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/filename.ts#L8)
