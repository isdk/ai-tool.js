[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / AIChatSystemMessageParam

# Interface: AIChatSystemMessageParam

## Extends

- [`AIChatMessageParamBase`](AIChatMessageParamBase.md)

## Properties

### content

> **content**: `string`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:62](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/chat.ts#L62)

***

### private?

> `optional` **private**: `boolean`

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`private`](AIChatMessageParamBase.md#private)

#### Defined in

[packages/ai-tool/src/utils/chat.ts:56](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/chat.ts#L56)

***

### replies?

> `optional` **replies**: `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`replies`](AIChatMessageParamBase.md#replies)

#### Defined in

[packages/ai-tool/src/utils/chat.ts:55](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/chat.ts#L55)

***

### role

> **role**: `"system"`

#### Overrides

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`role`](AIChatMessageParamBase.md#role)

#### Defined in

[packages/ai-tool/src/utils/chat.ts:61](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/chat.ts#L61)

***

### templateFormat?

> `optional` **templateFormat**: `string`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:63](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/chat.ts#L63)

***

### toRole?

> `optional` **toRole**: `string` \| `string`[] \| `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`toRole`](AIChatMessageParamBase.md#torole)

#### Defined in

[packages/ai-tool/src/utils/chat.ts:54](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/chat.ts#L54)
