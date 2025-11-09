[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / AIChatAssistantMessageParam

# Interface: AIChatAssistantMessageParam

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:115](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L115)

## Extends

- [`AIChatMessageParamBase`](AIChatMessageParamBase.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### content?

> `optional` **content**: `null` \| `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:117](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L117)

***

### createdAt?

> `optional` **createdAt**: `string` \| `Date`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:120](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L120)

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

> **role**: `"assistant"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:116](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L116)

#### Overrides

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`role`](AIChatMessageParamBase.md#role)

***

### templateFormat?

> `optional` **templateFormat**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:122](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L122)

***

### thinking?

> `optional` **thinking**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:70](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L70)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`thinking`](AIChatMessageParamBase.md#thinking)

***

### tool\_calls?

> `optional` **tool\_calls**: [`AIChatMessageToolCall`](AIChatMessageToolCall.md)[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:118](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L118)

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

***

### updatedAt?

> `optional` **updatedAt**: `string` \| `Date`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:121](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/chat.ts#L121)
