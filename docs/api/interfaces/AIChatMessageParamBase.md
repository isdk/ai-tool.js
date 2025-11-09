[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / AIChatMessageParamBase

# Interface: AIChatMessageParamBase

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:64](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L64)

## Extended by

- [`AIChatSystemMessageParam`](AIChatSystemMessageParam.md)
- [`AIChatUserMessageParam`](AIChatUserMessageParam.md)
- [`AIChatAssistantMessageParam`](AIChatAssistantMessageParam.md)
- [`AIChatToolMessageParam`](AIChatToolMessageParam.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### private?

> `optional` **private**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:68](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L68)

***

### replies?

> `optional` **replies**: `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:67](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L67)

***

### role

> **role**: [`AIChatRole`](../type-aliases/AIChatRole.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:65](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L65)

***

### thinking?

> `optional` **thinking**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:70](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L70)

***

### tools?

> `optional` **tools**: [`AIChatToolDefinition`](AIChatToolDefinition.md)[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:69](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L69)

***

### toRole?

> `optional` **toRole**: `string` \| `string`[] \| `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:66](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L66)
