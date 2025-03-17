[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / DotenvExpandOptions

# Interface: DotenvExpandOptions

Defined in: [packages/ai-tool/src/utils/prompt/template/env.ts:202](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/template/env.ts#L202)

## Properties

### error?

> `optional` **error**: `Error`

Defined in: [packages/ai-tool/src/utils/prompt/template/env.ts:203](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/template/env.ts#L203)

***

### parsed?

> `optional` **parsed**: [`DotenvParseInput`](DotenvParseInput.md)

Defined in: [packages/ai-tool/src/utils/prompt/template/env.ts:219](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/template/env.ts#L219)

Default: `object`

Object coming from dotenv's parsed result.

***

### processEnv?

> `optional` **processEnv**: [`DotenvPopulateInput`](DotenvPopulateInput.md)

Defined in: [packages/ai-tool/src/utils/prompt/template/env.ts:212](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/prompt/template/env.ts#L212)

Default: `process.env`

Specify an object to write your secrets to. Defaults to process.env environment variables.

example: `const processEnv = {}; require('dotenv').config({ processEnv: processEnv })`
