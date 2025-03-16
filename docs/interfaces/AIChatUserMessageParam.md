[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / AIChatUserMessageParam

# Interface: AIChatUserMessageParam

Defined in: [packages/ai-tool/src/utils/chat.ts:69](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/chat.ts#L69)

## Extends

- [`AIChatMessageParamBase`](AIChatMessageParamBase.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### charId?

> `optional` **charId**: `string`

Defined in: [packages/ai-tool/src/utils/chat.ts:76](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/chat.ts#L76)

***

### content

> **content**: `string` \| [`AIChatContentPart`](../type-aliases/AIChatContentPart.md)[]

Defined in: [packages/ai-tool/src/utils/chat.ts:71](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/chat.ts#L71)

***

### createdAt?

> `optional` **createdAt**: `string` \| `Date`

Defined in: [packages/ai-tool/src/utils/chat.ts:73](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/chat.ts#L73)

***

### from?

> `optional` **from**: `string`

Defined in: [packages/ai-tool/src/utils/chat.ts:78](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/chat.ts#L78)

***

### private?

> `optional` **private**: `boolean`

Defined in: [packages/ai-tool/src/utils/chat.ts:57](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/chat.ts#L57)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`private`](AIChatMessageParamBase.md#private)

***

### replies?

> `optional` **replies**: `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

Defined in: [packages/ai-tool/src/utils/chat.ts:56](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/chat.ts#L56)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`replies`](AIChatMessageParamBase.md#replies)

***

### role

> **role**: `"user"`

Defined in: [packages/ai-tool/src/utils/chat.ts:70](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/chat.ts#L70)

#### Overrides

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`role`](AIChatMessageParamBase.md#role)

***

### templateFormat?

> `optional` **templateFormat**: `string`

Defined in: [packages/ai-tool/src/utils/chat.ts:79](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/chat.ts#L79)

***

### thinking?

> `optional` **thinking**: `string`

Defined in: [packages/ai-tool/src/utils/chat.ts:59](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/chat.ts#L59)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`thinking`](AIChatMessageParamBase.md#thinking)

***

### tools?

> `optional` **tools**: `Record`\<`string`, `string`\>

Defined in: [packages/ai-tool/src/utils/chat.ts:58](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/chat.ts#L58)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`tools`](AIChatMessageParamBase.md#tools)

***

### toRole?

> `optional` **toRole**: `string` \| `string`[] \| `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

Defined in: [packages/ai-tool/src/utils/chat.ts:55](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/chat.ts#L55)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`toRole`](AIChatMessageParamBase.md#torole)

***

### updatedAt?

> `optional` **updatedAt**: `string` \| `Date`

Defined in: [packages/ai-tool/src/utils/chat.ts:74](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/chat.ts#L74)
