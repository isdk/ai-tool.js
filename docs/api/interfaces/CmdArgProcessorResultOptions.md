[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / CmdArgProcessorResultOptions

# Interface: CmdArgProcessorResultOptions

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:99](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L99)

Options for processors to control how the parsed value is distributed in the final result.

## Properties

### excludePositional?

> `optional` **excludePositional**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:104](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L104)

If true, the argument will be excluded from the positional `args` array.
Useful when a positional argument is intended to be treated as a named parameter only.
