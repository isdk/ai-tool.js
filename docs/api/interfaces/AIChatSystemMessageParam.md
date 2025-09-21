[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / AIChatSystemMessageParam

# Interface: AIChatSystemMessageParam

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:64](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/chat.ts#L64)

## Extends

- [`AIChatMessageParamBase`](AIChatMessageParamBase.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### content

> **content**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:66](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/chat.ts#L66)

***

### private?

> `optional` **private**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:58](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/chat.ts#L58)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`private`](AIChatMessageParamBase.md#private)

***

### replies?

> `optional` **replies**: `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:57](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/chat.ts#L57)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`replies`](AIChatMessageParamBase.md#replies)

***

### role

> **role**: `"system"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:65](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/chat.ts#L65)

#### Overrides

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`role`](AIChatMessageParamBase.md#role)

***

### templateFormat?

> `optional` **templateFormat**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:67](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/chat.ts#L67)

***

### thinking?

> `optional` **thinking**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:60](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/chat.ts#L60)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`thinking`](AIChatMessageParamBase.md#thinking)

***

### tools?

> `optional` **tools**: `Record`\<`string`, `string`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:59](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/chat.ts#L59)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`tools`](AIChatMessageParamBase.md#tools)

***

### toRole?

> `optional` **toRole**: `string` \| `string`[] \| `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:56](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/chat.ts#L56)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`toRole`](AIChatMessageParamBase.md#torole)
