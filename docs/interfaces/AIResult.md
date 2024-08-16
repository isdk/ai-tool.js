[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / AIResult

# Interface: AIResult\<TValue, TOptions\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TValue` | `any` |
| `TOptions` | `any` |

## Table of contents

### Properties

- [content](AIResult.md#content)
- [finishReason](AIResult.md#finishreason)
- [options](AIResult.md#options)
- [stop](AIResult.md#stop)
- [taskId](AIResult.md#taskid)

## Properties

### content

• `Optional` **content**: `TValue`

The generated value.

#### Defined in

[packages/ai-tool/src/utils/chat.ts:19](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/utils/chat.ts#L19)

___

### finishReason

• `Optional` **finishReason**: ``null`` \| ``"abort"`` \| ``"stop"`` \| ``"length"`` \| ``"content-filter"`` \| ``"tool-calls"`` \| ``"error"`` \| ``"other"``

The reason why the generation stopped.

#### Defined in

[packages/ai-tool/src/utils/chat.ts:24](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/utils/chat.ts#L24)

___

### options

• `Optional` **options**: `TOptions`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:25](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/utils/chat.ts#L25)

___

### stop

• `Optional` **stop**: `boolean`

for stream mode

#### Defined in

[packages/ai-tool/src/utils/chat.ts:29](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/utils/chat.ts#L29)

___

### taskId

• `Optional` **taskId**: [`AsyncTaskId`](../modules.md#asynctaskid)

#### Defined in

[packages/ai-tool/src/utils/chat.ts:30](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/utils/chat.ts#L30)
