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

## Properties

### content

• `Optional` **content**: `TValue`

The generated value.

#### Defined in

[packages/ai-tool/src/utils/chat.ts:16](https://github.com/isdk/ai-tool.js/blob/c377a1408daee78a2484142b6d99ef7fbbec7c7c/src/utils/chat.ts#L16)

___

### finishReason

• `Optional` **finishReason**: ``null`` \| ``"length"`` \| ``"stop"`` \| ``"content-filter"`` \| ``"tool-calls"`` \| ``"abort"`` \| ``"error"`` \| ``"other"``

The reason why the generation stopped.

#### Defined in

[packages/ai-tool/src/utils/chat.ts:21](https://github.com/isdk/ai-tool.js/blob/c377a1408daee78a2484142b6d99ef7fbbec7c7c/src/utils/chat.ts#L21)

___

### options

• `Optional` **options**: `TOptions`

#### Defined in

[packages/ai-tool/src/utils/chat.ts:22](https://github.com/isdk/ai-tool.js/blob/c377a1408daee78a2484142b6d99ef7fbbec7c7c/src/utils/chat.ts#L22)

___

### stop

• `Optional` **stop**: `boolean`

for stream mode

#### Defined in

[packages/ai-tool/src/utils/chat.ts:26](https://github.com/isdk/ai-tool.js/blob/c377a1408daee78a2484142b6d99ef7fbbec7c7c/src/utils/chat.ts#L26)
