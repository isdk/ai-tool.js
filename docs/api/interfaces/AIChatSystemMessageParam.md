[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / AIChatSystemMessageParam

# Interface: AIChatSystemMessageParam

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:74](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L74)

## Extends

- [`AIChatMessageParamBase`](AIChatMessageParamBase.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### content

> **content**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:76](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L76)

***

### private?

> `optional` **private**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:68](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L68)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`private`](AIChatMessageParamBase.md#private)

***

### replies?

> `optional` **replies**: `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:67](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L67)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`replies`](AIChatMessageParamBase.md#replies)

***

### role

> **role**: `"system"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:75](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L75)

#### Overrides

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`role`](AIChatMessageParamBase.md#role)

***

### templateFormat?

> `optional` **templateFormat**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:77](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L77)

***

### thinking?

> `optional` **thinking**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:70](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L70)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`thinking`](AIChatMessageParamBase.md#thinking)

***

### tools?

> `optional` **tools**: [`AIChatToolDefinition`](AIChatToolDefinition.md)[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:69](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L69)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`tools`](AIChatMessageParamBase.md#tools)

***

### toRole?

> `optional` **toRole**: `string` \| `string`[] \| `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:66](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L66)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`toRole`](AIChatMessageParamBase.md#torole)
