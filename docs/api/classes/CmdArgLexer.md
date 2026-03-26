[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / CmdArgLexer

# Class: CmdArgLexer

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/lexer.ts:7](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/lexer.ts#L7)

Lexical analyzer for command arguments.
Responsible for breaking down the raw input string into a sequence of basic tokens.

## Constructors

### Constructor

> **new CmdArgLexer**(`input`, `options?`): `CmdArgLexer`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/lexer.ts:13](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/lexer.ts#L13)

#### Parameters

##### input

`string`

##### options?

[`CmdArgParserOptions`](../interfaces/CmdArgParserOptions.md)

#### Returns

`CmdArgLexer`

## Properties

### input

> **input**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/lexer.ts:8](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/lexer.ts#L8)

## Methods

### nextToken()

> **nextToken**(): [`CmdArgToken`](../interfaces/CmdArgToken.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/lexer.ts:32](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/lexer.ts#L32)

Retrieves the next CmdArgToken and advances the position pointer.

#### Returns

[`CmdArgToken`](../interfaces/CmdArgToken.md)

***

### peekToken()

> **peekToken**(): [`CmdArgToken`](../interfaces/CmdArgToken.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/lexer.ts:22](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/lexer.ts#L22)

Peeks at the next CmdArgToken without consuming it.

#### Returns

[`CmdArgToken`](../interfaces/CmdArgToken.md)

***

### reset()

> **reset**(): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/lexer.ts:125](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/lexer.ts#L125)

#### Returns

`void`
