[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / DotenvExpandOptions

# Interface: DotenvExpandOptions

Defined in: [packages/ai-tool/src/utils/prompt/template/env.ts:203](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/utils/prompt/template/env.ts#L203)

## Properties

### error?

> `optional` **error**: `Error`

Defined in: [packages/ai-tool/src/utils/prompt/template/env.ts:204](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/utils/prompt/template/env.ts#L204)

***

### parsed?

> `optional` **parsed**: [`DotenvParseInput`](DotenvParseInput.md)

Defined in: [packages/ai-tool/src/utils/prompt/template/env.ts:220](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/utils/prompt/template/env.ts#L220)

Default: `object`

Object coming from dotenv's parsed result.

***

### processEnv?

> `optional` **processEnv**: [`DotenvPopulateInput`](DotenvPopulateInput.md)

Defined in: [packages/ai-tool/src/utils/prompt/template/env.ts:213](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/utils/prompt/template/env.ts#L213)

Default: `process.env`

Specify an object to write your secrets to. Defaults to process.env environment variables.

example: `const processEnv = {}; require('dotenv').config({ processEnv: processEnv })`
