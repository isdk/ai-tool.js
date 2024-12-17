[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / AIChatUserMessageParam

# Interface: AIChatUserMessageParam

## Extends

- [`AIChatMessageParamBase`](AIChatMessageParamBase.md)

## Properties

### charId?

> `optional` **charId**: `string`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:73](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/chat.ts#L73)

***

### content

> **content**: `string` \| [`AIChatContentPart`](../type-aliases/AIChatContentPart.md)[]

#### Defined in

[packages/ai-tool/src/utils/chat.ts:68](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/chat.ts#L68)

***

### createdAt?

> `optional` **createdAt**: `string` \| `Date`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:70](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/chat.ts#L70)

***

### from?

> `optional` **from**: `string`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:75](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/chat.ts#L75)

***

### private?

> `optional` **private**: `boolean`

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`private`](AIChatMessageParamBase.md#private)

#### Defined in

[packages/ai-tool/src/utils/chat.ts:56](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/chat.ts#L56)

***

### replies?

> `optional` **replies**: `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`replies`](AIChatMessageParamBase.md#replies)

#### Defined in

[packages/ai-tool/src/utils/chat.ts:55](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/chat.ts#L55)

***

### role

> **role**: `"user"`

#### Overrides

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`role`](AIChatMessageParamBase.md#role)

#### Defined in

[packages/ai-tool/src/utils/chat.ts:67](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/chat.ts#L67)

***

### templateFormat?

> `optional` **templateFormat**: `string`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:76](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/chat.ts#L76)

***

### toRole?

> `optional` **toRole**: `string` \| `string`[] \| `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`toRole`](AIChatMessageParamBase.md#torole)

#### Defined in

[packages/ai-tool/src/utils/chat.ts:54](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/chat.ts#L54)

***

### updatedAt?

> `optional` **updatedAt**: `string` \| `Date`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:71](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/chat.ts#L71)
