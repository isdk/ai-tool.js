[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / AIChatMessageParamBase

# Interface: AIChatMessageParamBase

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

#### Defined in

[packages/ai-tool/src/utils/chat.ts:56](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/chat.ts#L56)

***

### replies?

> `optional` **replies**: `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

#### Defined in

[packages/ai-tool/src/utils/chat.ts:55](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/chat.ts#L55)

***

### role

> **role**: `string`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:53](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/chat.ts#L53)

***

### toRole?

> `optional` **toRole**: `string` \| `string`[] \| `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

#### Defined in

[packages/ai-tool/src/utils/chat.ts:54](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/chat.ts#L54)
