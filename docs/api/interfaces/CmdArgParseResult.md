[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / CmdArgParseResult

# Interface: CmdArgParseResult

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:274](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L274)

The internal structured result of the parsing process.

## Properties

### args

> **args**: `any`[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:276](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L276)

Positional arguments array. Indices correspond to the appearance order.

***

### flags

> **flags**: [`CmdArgFlagsRecord`](../type-aliases/CmdArgFlagsRecord.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:280](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L280)

Special parameters (Flags) map. Values are usually Boolean but can be any type.

***

### namedArgs

> **namedArgs**: `Record`\<`string`, `any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:278](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L278)

Named arguments map, combining explicit `k=v`, auto-mapped IDs, and Processor results.

***

### namedIndices

> **namedIndices**: `Set`\<`number`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:282](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L282)

A set of numeric indices that were populated by explicitly named arguments.
