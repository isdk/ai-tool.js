[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / AIChatAssistantMessageParam

# Interface: AIChatAssistantMessageParam

## Hierarchy

- [`AIChatMessageParamBase`](AIChatMessageParamBase.md)

  ↳ **`AIChatAssistantMessageParam`**

## Table of contents

### Properties

- [content](AIChatAssistantMessageParam.md#content)
- [createdAt](AIChatAssistantMessageParam.md#createdat)
- [role](AIChatAssistantMessageParam.md#role)
- [templateFormat](AIChatAssistantMessageParam.md#templateformat)
- [tool\_calls](AIChatAssistantMessageParam.md#tool_calls)
- [updatedAt](AIChatAssistantMessageParam.md#updatedat)

## Properties

### content

• `Optional` **content**: ``null`` \| `string`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:92](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/chat.ts#L92)

___

### createdAt

• `Optional` **createdAt**: `string` \| `Date`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:95](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/chat.ts#L95)

___

### role

• **role**: ``"assistant"``

#### Overrides

[AIChatMessageParamBase](AIChatMessageParamBase.md).[role](AIChatMessageParamBase.md#role)

#### Defined in

[packages/ai-tool/src/utils/chat.ts:91](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/chat.ts#L91)

___

### templateFormat

• `Optional` **templateFormat**: `string`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:97](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/chat.ts#L97)

___

### tool\_calls

• `Optional` **tool\_calls**: [`AIChatMessageToolCall`](AIChatMessageToolCall.md)[]

#### Defined in

[packages/ai-tool/src/utils/chat.ts:93](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/chat.ts#L93)

___

### updatedAt

• `Optional` **updatedAt**: `string` \| `Date`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:96](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/chat.ts#L96)
