[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / CmdArgMapResult

# Interface: CmdArgMapResult

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:294](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L294)

Result structure when mode is 'map'.

## Properties

### args

> **args**: `any`[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:296](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L296)

Positional arguments array

***

### flags?

> `optional` **flags**: [`CmdArgFlagsRecord`](../type-aliases/CmdArgFlagsRecord.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:300](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L300)

Special parameters (Flags) map

***

### namedArgs

> **namedArgs**: `Record`\<`string`, `any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:298](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L298)

Named arguments map
