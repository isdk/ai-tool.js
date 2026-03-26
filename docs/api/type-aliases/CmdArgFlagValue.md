[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / CmdArgFlagValue

# Type Alias: CmdArgFlagValue

> **CmdArgFlagValue** = `Boolean` \| `String` \| `Number` \| `any` & [`CmdArgFlagMetadata`](../interfaces/CmdArgFlagMetadata.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:46](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L46)

A flag value is a wrapped primitive (Boolean, String, Number) or object
that carries its prefix metadata via CMD_ARG_FLAG_SYMBOL.
