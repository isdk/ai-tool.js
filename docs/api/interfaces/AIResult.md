[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / AIResult

# Interface: AIResult\<TValue, TOptions\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:16](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/chat.ts#L16)

## Type Parameters

### TValue

`TValue` = `any`

### TOptions

`TOptions` = `any`

## Indexable

\[`name`: `string`\]: `any`

## Properties

### content?

> `optional` **content**: `TValue`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:20](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/chat.ts#L20)

The generated value.

***

### finishReason?

> `optional` **finishReason**: `"stop"` \| `"length"` \| `"content_filter"` \| `"tool_calls"` \| `"function_call"` \| `"abort"` \| `"error"` \| `"other"` \| `null`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:25](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/chat.ts#L25)

The reason why the generation stopped.

***

### options?

> `optional` **options**: `TOptions`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:26](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/chat.ts#L26)

***

### stop?

> `optional` **stop**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:30](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/chat.ts#L30)

for stream mode

***

### taskId?

> `optional` **taskId**: [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/chat.ts:31](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/chat.ts#L31)
