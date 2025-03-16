[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / AIChatAssistantMessageParam

# Interface: AIChatAssistantMessageParam

Defined in: [packages/ai-tool/src/utils/chat.ts:98](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/utils/chat.ts#L98)

## Extends

- [`AIChatMessageParamBase`](AIChatMessageParamBase.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### content?

> `optional` **content**: `null` \| `string`

Defined in: [packages/ai-tool/src/utils/chat.ts:100](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/utils/chat.ts#L100)

***

### createdAt?

> `optional` **createdAt**: `string` \| `Date`

Defined in: [packages/ai-tool/src/utils/chat.ts:103](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/utils/chat.ts#L103)

***

### private?

> `optional` **private**: `boolean`

Defined in: [packages/ai-tool/src/utils/chat.ts:57](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/utils/chat.ts#L57)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`private`](AIChatMessageParamBase.md#private)

***

### replies?

> `optional` **replies**: `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

Defined in: [packages/ai-tool/src/utils/chat.ts:56](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/utils/chat.ts#L56)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`replies`](AIChatMessageParamBase.md#replies)

***

### role

> **role**: `"assistant"`

Defined in: [packages/ai-tool/src/utils/chat.ts:99](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/utils/chat.ts#L99)

#### Overrides

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`role`](AIChatMessageParamBase.md#role)

***

### templateFormat?

> `optional` **templateFormat**: `string`

Defined in: [packages/ai-tool/src/utils/chat.ts:105](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/utils/chat.ts#L105)

***

### thinking?

> `optional` **thinking**: `string`

Defined in: [packages/ai-tool/src/utils/chat.ts:59](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/utils/chat.ts#L59)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`thinking`](AIChatMessageParamBase.md#thinking)

***

### tool\_calls?

> `optional` **tool\_calls**: [`AIChatMessageToolCall`](AIChatMessageToolCall.md)[]

Defined in: [packages/ai-tool/src/utils/chat.ts:101](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/utils/chat.ts#L101)

***

### tools?

> `optional` **tools**: `Record`\<`string`, `string`\>

Defined in: [packages/ai-tool/src/utils/chat.ts:58](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/utils/chat.ts#L58)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`tools`](AIChatMessageParamBase.md#tools)

***

### toRole?

> `optional` **toRole**: `string` \| `string`[] \| `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

Defined in: [packages/ai-tool/src/utils/chat.ts:55](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/utils/chat.ts#L55)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`toRole`](AIChatMessageParamBase.md#torole)

***

### updatedAt?

> `optional` **updatedAt**: `string` \| `Date`

Defined in: [packages/ai-tool/src/utils/chat.ts:104](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/utils/chat.ts#L104)
