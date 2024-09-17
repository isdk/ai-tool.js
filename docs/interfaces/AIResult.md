[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / AIResult

# Interface: AIResult\<TValue, TOptions\>

## Type Parameters

• **TValue** = `any`

• **TOptions** = `any`

## Properties

### content?

> `optional` **content**: `TValue`

The generated value.

#### Defined in

[packages/ai-tool/src/utils/chat.ts:19](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/utils/chat.ts#L19)

***

### finishReason?

> `optional` **finishReason**: `null` \| `"abort"` \| `"stop"` \| `"length"` \| `"content-filter"` \| `"tool-calls"` \| `"error"` \| `"other"`

The reason why the generation stopped.

#### Defined in

[packages/ai-tool/src/utils/chat.ts:24](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/utils/chat.ts#L24)

***

### options?

> `optional` **options**: `TOptions`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:25](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/utils/chat.ts#L25)

***

### stop?

> `optional` **stop**: `boolean`

for stream mode

#### Defined in

[packages/ai-tool/src/utils/chat.ts:29](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/utils/chat.ts#L29)

***

### taskId?

> `optional` **taskId**: [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

#### Defined in

[packages/ai-tool/src/utils/chat.ts:30](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/utils/chat.ts#L30)
