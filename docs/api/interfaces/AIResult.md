[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / AIResult

# Interface: AIResult\<TValue, TOptions\>

Defined in: [ai-tools/packages/ai-tool/src/utils/chat.ts:16](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/chat.ts#L16)

## Type Parameters

• **TValue** = `any`

• **TOptions** = `any`

## Indexable

\[`name`: `string`\]: `any`

## Properties

### content?

> `optional` **content**: `TValue`

Defined in: [ai-tools/packages/ai-tool/src/utils/chat.ts:20](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/chat.ts#L20)

The generated value.

***

### finishReason?

> `optional` **finishReason**: `null` \| `"length"` \| `"abort"` \| `"stop"` \| `"content_filter"` \| `"tool_calls"` \| `"function_call"` \| `"error"` \| `"other"`

Defined in: [ai-tools/packages/ai-tool/src/utils/chat.ts:25](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/chat.ts#L25)

The reason why the generation stopped.

***

### options?

> `optional` **options**: `TOptions`

Defined in: [ai-tools/packages/ai-tool/src/utils/chat.ts:26](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/chat.ts#L26)

***

### stop?

> `optional` **stop**: `boolean`

Defined in: [ai-tools/packages/ai-tool/src/utils/chat.ts:30](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/chat.ts#L30)

for stream mode

***

### taskId?

> `optional` **taskId**: [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

Defined in: [ai-tools/packages/ai-tool/src/utils/chat.ts:31](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/chat.ts#L31)
