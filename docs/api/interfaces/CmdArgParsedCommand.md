[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / CmdArgParsedCommand

# Interface: CmdArgParsedCommand

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:306](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L306)

The full structure of a parsed command.

## Properties

### args

> **args**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:310](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L310)

The parsed arguments, either simplified or in map format

***

### command

> **command**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:308](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L308)

The command name (the identifier before the parentheses)

***

### flags?

> `optional` **flags**: [`CmdArgFlagsRecord`](../type-aliases/CmdArgFlagsRecord.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:312](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L312)

Special parameters (Flags) map (if present)
