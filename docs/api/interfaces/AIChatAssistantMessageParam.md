[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / AIChatAssistantMessageParam

# Interface: AIChatAssistantMessageParam

Defined in: [ai-tools/packages/ai-tool/src/utils/chat.ts:99](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/chat.ts#L99)

## Extends

- [`AIChatMessageParamBase`](AIChatMessageParamBase.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### content?

> `optional` **content**: `null` \| `string`

Defined in: [ai-tools/packages/ai-tool/src/utils/chat.ts:101](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/chat.ts#L101)

***

### createdAt?

> `optional` **createdAt**: `string` \| `Date`

Defined in: [ai-tools/packages/ai-tool/src/utils/chat.ts:104](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/chat.ts#L104)

***

### private?

> `optional` **private**: `boolean`

Defined in: [ai-tools/packages/ai-tool/src/utils/chat.ts:58](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/chat.ts#L58)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`private`](AIChatMessageParamBase.md#private)

***

### replies?

> `optional` **replies**: `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

Defined in: [ai-tools/packages/ai-tool/src/utils/chat.ts:57](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/chat.ts#L57)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`replies`](AIChatMessageParamBase.md#replies)

***

### role

> **role**: `"assistant"`

Defined in: [ai-tools/packages/ai-tool/src/utils/chat.ts:100](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/chat.ts#L100)

#### Overrides

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`role`](AIChatMessageParamBase.md#role)

***

### templateFormat?

> `optional` **templateFormat**: `string`

Defined in: [ai-tools/packages/ai-tool/src/utils/chat.ts:106](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/chat.ts#L106)

***

### thinking?

> `optional` **thinking**: `string`

Defined in: [ai-tools/packages/ai-tool/src/utils/chat.ts:60](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/chat.ts#L60)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`thinking`](AIChatMessageParamBase.md#thinking)

***

### tool\_calls?

> `optional` **tool\_calls**: [`AIChatMessageToolCall`](AIChatMessageToolCall.md)[]

Defined in: [ai-tools/packages/ai-tool/src/utils/chat.ts:102](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/chat.ts#L102)

***

### tools?

> `optional` **tools**: `Record`\<`string`, `string`\>

Defined in: [ai-tools/packages/ai-tool/src/utils/chat.ts:59](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/chat.ts#L59)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`tools`](AIChatMessageParamBase.md#tools)

***

### toRole?

> `optional` **toRole**: `string` \| `string`[] \| `Record`\<`string`, `Partial`\<[`AIChatMessageParam`](../type-aliases/AIChatMessageParam.md)\>\>

Defined in: [ai-tools/packages/ai-tool/src/utils/chat.ts:56](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/chat.ts#L56)

#### Inherited from

[`AIChatMessageParamBase`](AIChatMessageParamBase.md).[`toRole`](AIChatMessageParamBase.md#torole)

***

### updatedAt?

> `optional` **updatedAt**: `string` \| `Date`

Defined in: [ai-tools/packages/ai-tool/src/utils/chat.ts:105](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/chat.ts#L105)
