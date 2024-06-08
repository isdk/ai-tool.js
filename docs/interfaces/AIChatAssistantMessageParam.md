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

[packages/ai-tool/src/utils/chat.ts:88](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/chat.ts#L88)

___

### createdAt

• `Optional` **createdAt**: `string` \| `Date`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:91](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/chat.ts#L91)

___

### role

• **role**: ``"assistant"``

#### Overrides

[AIChatMessageParamBase](AIChatMessageParamBase.md).[role](AIChatMessageParamBase.md#role)

#### Defined in

[packages/ai-tool/src/utils/chat.ts:87](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/chat.ts#L87)

___

### templateFormat

• `Optional` **templateFormat**: `string`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:93](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/chat.ts#L93)

___

### tool\_calls

• `Optional` **tool\_calls**: [`AIChatMessageToolCall`](AIChatMessageToolCall.md)[]

#### Defined in

[packages/ai-tool/src/utils/chat.ts:89](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/chat.ts#L89)

___

### updatedAt

• `Optional` **updatedAt**: `string` \| `Date`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:92](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/chat.ts#L92)
