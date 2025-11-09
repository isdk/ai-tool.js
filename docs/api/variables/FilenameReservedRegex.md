[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / FilenameReservedRegex

# Variable: FilenameReservedRegex

> `const` **FilenameReservedRegex**: `RegExp`

Defined in: @isdk/util/dist/index.d.ts:377

Regular expression pattern for reserved characters in a filename.
do not use /g global option here: when the regex is executed multiple times, it will always begin where it left off last time.
