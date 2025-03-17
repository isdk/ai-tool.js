[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / AIChatMessageParamBase

# Interface: AIChatMessageParamBase

Defined in: [packages/ai-tool/src/utils/chat.ts:53](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/chat.ts#L53)

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

Defined in: [packages/ai-tool/src/utils/chat.ts:57](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/chat.ts#L57)

***

### replies?

> `optional` **replies**: `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

Defined in: [packages/ai-tool/src/utils/chat.ts:56](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/chat.ts#L56)

***

### role

> **role**: `string`

Defined in: [packages/ai-tool/src/utils/chat.ts:54](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/chat.ts#L54)

***

### thinking?

> `optional` **thinking**: `string`

Defined in: [packages/ai-tool/src/utils/chat.ts:59](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/chat.ts#L59)

***

### tools?

> `optional` **tools**: `Record`\<`string`, `string`\>

Defined in: [packages/ai-tool/src/utils/chat.ts:58](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/chat.ts#L58)

***

### toRole?

> `optional` **toRole**: `string` \| `string`[] \| `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

Defined in: [packages/ai-tool/src/utils/chat.ts:55](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/chat.ts#L55)
