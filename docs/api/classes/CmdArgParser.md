[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / CmdArgParser

# Class: CmdArgParser

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/parser.ts:11](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/parser.ts#L11)

Structured command argument CmdArgParser.
Supports positional arguments, named arguments (k=v), nested structures,
and Symbol-based extension protocols.

## Constructors

### Constructor

> **new CmdArgParser**(`lexer`, `options?`): `CmdArgParser`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/parser.ts:15](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/parser.ts#L15)

#### Parameters

##### lexer

[`CmdArgLexer`](CmdArgLexer.md)

##### options?

[`CmdArgParserOptions`](../interfaces/CmdArgParserOptions.md)

#### Returns

`CmdArgParser`

## Methods

### parse()

> **parse**(): `Promise`\<[`CmdArgParseResult`](../interfaces/CmdArgParseResult.md)\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/parser.ts:35](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/parser.ts#L35)

Executes the parsing process.

Core logic priority:
1. Collect top-level arguments (respecting bracket nesting depth).
2. Identify explicit named arguments (k=v) or flag shorthands.
3. Pre-check if a positional argument fits identifier/path format for auto-mapping.
4. Invoke Evaluator to get the value and unpack any Symbol Protocols.
5. Distribute results to 'args' and 'namedArgs', maintaining index consistency.

#### Returns

`Promise`\<[`CmdArgParseResult`](../interfaces/CmdArgParseResult.md)\>
