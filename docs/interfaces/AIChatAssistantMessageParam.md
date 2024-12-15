[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / AIChatAssistantMessageParam

# Interface: AIChatAssistantMessageParam

## Extends

- [`AIChatMessageParamBase`](AIChatMessageParamBase.md)

## Properties

### content?

> `optional` **content**: `null` \| `string`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:97](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/chat.ts#L97)

***

### createdAt?

> `optional` **createdAt**: `string` \| `Date`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:100](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/chat.ts#L100)

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

> **role**: `"assistant"`

#### Overrides

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`role`](AIChatMessageParamBase.md#role)

#### Defined in

[packages/ai-tool/src/utils/chat.ts:96](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/chat.ts#L96)

***

### templateFormat?

> `optional` **templateFormat**: `string`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:102](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/chat.ts#L102)

***

### tool\_calls?

> `optional` **tool\_calls**: [`AIChatMessageToolCall`](AIChatMessageToolCall.md)[]

#### Defined in

[packages/ai-tool/src/utils/chat.ts:98](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/chat.ts#L98)

***

### toRole?

> `optional` **toRole**: `string` \| `string`[] \| `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`toRole`](AIChatMessageParamBase.md#torole)

#### Defined in

[packages/ai-tool/src/utils/chat.ts:54](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/chat.ts#L54)

***

### updatedAt?

> `optional` **updatedAt**: `string` \| `Date`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:101](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/chat.ts#L101)
