[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / CmdArgContext

# Interface: CmdArgContext

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:113](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L113)

Symbol used to mark a result object returned by an ArgProcessor.
...

## Properties

### CmdArgParser

> **CmdArgParser**: [`CmdArgParser`](../classes/CmdArgParser.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:134](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L134)

Reference to the CmdArgParser instance for recursive parsing

***

### identifierAsName?

> `optional` **identifierAsName**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:124](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L124)

If the argument is positional and its raw text is a valid identifier,
this holds that identifier name (used for auto-mapping).

***

### index

> **index**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:128](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L128)

The 0-based index of this argument in the positional sequence

***

### isNamed

> **isNamed**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:115](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L115)

True if the argument was explicitly assigned using an assigner (e.g., k=v)

***

### name?

> `optional` **name**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:119](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L119)

The explicitly specified name (k) in a `k=v` pair

***

### options

> **options**: [`CmdArgParserOptions`](CmdArgParserOptions.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:132](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L132)

The configuration options used by the CmdArgParser

***

### rawValue

> **rawValue**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:117](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L117)

The raw input substring of this argument (after stripping the name and assigner if present)

***

### scope?

> `optional` **scope**: `Record`\<`string`, `any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:130](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L130)

The evaluation scope containing variables and functions

***

### tokens

> **tokens**: [`CmdArgToken`](CmdArgToken.md)[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:126](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L126)

All lexical tokens belonging to this argument
