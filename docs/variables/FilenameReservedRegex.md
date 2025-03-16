[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / FilenameReservedRegex

# Variable: FilenameReservedRegex

> `const` **FilenameReservedRegex**: `RegExp`

Defined in: [packages/ai-tool/src/utils/filename.ts:8](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/utils/filename.ts#L8)

Regular expression pattern for reserved characters in a filename.
do not use /g global option here: when the regex is executed multiple times, it will always begin where it left off last time.
