[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / AIChatToolMessageParam

# Interface: AIChatToolMessageParam

Defined in: [packages/ai-tool/src/utils/chat.ts:117](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/utils/chat.ts#L117)

## Extends

- [`AIChatMessageParamBase`](AIChatMessageParamBase.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### content

> **content**: `string`

Defined in: [packages/ai-tool/src/utils/chat.ts:119](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/utils/chat.ts#L119)

***

### private?

> `optional` **private**: `boolean`

Defined in: [packages/ai-tool/src/utils/chat.ts:57](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/utils/chat.ts#L57)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`private`](AIChatMessageParamBase.md#private)

***

### replies?

> `optional` **replies**: `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

Defined in: [packages/ai-tool/src/utils/chat.ts:56](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/utils/chat.ts#L56)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`replies`](AIChatMessageParamBase.md#replies)

***

### role

> **role**: `"tool"`

Defined in: [packages/ai-tool/src/utils/chat.ts:118](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/utils/chat.ts#L118)

#### Overrides

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`role`](AIChatMessageParamBase.md#role)

***

### templateFormat?

> `optional` **templateFormat**: `string`

Defined in: [packages/ai-tool/src/utils/chat.ts:121](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/utils/chat.ts#L121)

***

### thinking?

> `optional` **thinking**: `string`

Defined in: [packages/ai-tool/src/utils/chat.ts:59](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/utils/chat.ts#L59)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`thinking`](AIChatMessageParamBase.md#thinking)

***

### tool\_call\_id

> **tool\_call\_id**: `string`

Defined in: [packages/ai-tool/src/utils/chat.ts:120](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/utils/chat.ts#L120)

***

### tools?

> `optional` **tools**: `Record`\<`string`, `string`\>

Defined in: [packages/ai-tool/src/utils/chat.ts:58](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/utils/chat.ts#L58)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`tools`](AIChatMessageParamBase.md#tools)

***

### toRole?

> `optional` **toRole**: `string` \| `string`[] \| `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

Defined in: [packages/ai-tool/src/utils/chat.ts:55](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/utils/chat.ts#L55)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`toRole`](AIChatMessageParamBase.md#torole)
