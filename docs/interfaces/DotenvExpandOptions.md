[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / DotenvExpandOptions

# Interface: DotenvExpandOptions

## Table of contents

### Properties

- [error](DotenvExpandOptions.md#error)
- [parsed](DotenvExpandOptions.md#parsed)
- [processEnv](DotenvExpandOptions.md#processenv)

## Properties

### error

• `Optional` **error**: `Error`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/env.ts:188](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/env.ts#L188)

___

### parsed

• `Optional` **parsed**: [`DotenvParseInput`](DotenvParseInput.md)

Default: `object`

Object coming from dotenv's parsed result.

#### Defined in

[packages/ai-tool/src/utils/prompt/template/env.ts:204](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/env.ts#L204)

___

### processEnv

• `Optional` **processEnv**: [`DotenvPopulateInput`](DotenvPopulateInput.md)

Default: `process.env`

Specify an object to write your secrets to. Defaults to process.env environment variables.

example: `const processEnv = {}; require('dotenv').config({ processEnv: processEnv })`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/env.ts:197](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/env.ts#L197)
