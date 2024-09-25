[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / DotenvExpandOptions

# Interface: DotenvExpandOptions

## Properties

### error?

> `optional` **error**: `Error`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/env.ts:188](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/prompt/template/env.ts#L188)

***

### parsed?

> `optional` **parsed**: [`DotenvParseInput`](DotenvParseInput.md)

Default: `object`

Object coming from dotenv's parsed result.

#### Defined in

[packages/ai-tool/src/utils/prompt/template/env.ts:204](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/prompt/template/env.ts#L204)

***

### processEnv?

> `optional` **processEnv**: [`DotenvPopulateInput`](DotenvPopulateInput.md)

Default: `process.env`

Specify an object to write your secrets to. Defaults to process.env environment variables.

example: `const processEnv = {}; require('dotenv').config({ processEnv: processEnv })`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/env.ts:197](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/prompt/template/env.ts#L197)
