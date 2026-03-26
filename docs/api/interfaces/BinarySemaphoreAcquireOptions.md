[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / BinarySemaphoreAcquireOptions

# Interface: BinarySemaphoreAcquireOptions

Defined in: @isdk/util/dist/index.d.ts:659

获取信号量时的选项。

## Extended by

- [`SemaphoreTaskItem`](SemaphoreTaskItem.md)

## Indexable

\[`n`: `string`\]: `any`

允许扩展其他自定义选项。

## Properties

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: @isdk/util/dist/index.d.ts:664

可选的 AbortSignal，用于取消获取操作。
如果在获取到令牌前信号被中止，`acquire` 返回的 Promise 将被拒绝并抛出 `AbortError`。
