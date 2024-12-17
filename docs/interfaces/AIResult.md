[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / AIResult

# Interface: AIResult\<TValue, TOptions\>

## Type Parameters

• **TValue** = `any`

• **TOptions** = `any`

## Indexable

 \[`name`: `string`\]: `any`

## Properties

### content?

> `optional` **content**: `TValue`

The generated value.

#### Defined in

[packages/ai-tool/src/utils/chat.ts:20](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/chat.ts#L20)

***

### finishReason?

> `optional` **finishReason**: `null` \| `"abort"` \| `"stop"` \| `"length"` \| `"content_filter"` \| `"tool_calls"` \| `"function_call"` \| `"error"` \| `"other"`

The reason why the generation stopped.

#### Defined in

[packages/ai-tool/src/utils/chat.ts:25](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/chat.ts#L25)

***

### options?

> `optional` **options**: `TOptions`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:26](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/chat.ts#L26)

***

### stop?

> `optional` **stop**: `boolean`

for stream mode

#### Defined in

[packages/ai-tool/src/utils/chat.ts:30](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/chat.ts#L30)

***

### taskId?

> `optional` **taskId**: [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

#### Defined in

[packages/ai-tool/src/utils/chat.ts:31](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/chat.ts#L31)
