[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / SemaphoreTaskItem

# Interface: SemaphoreTaskItem

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:52](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/utils/async-semaphore.ts#L52)

## Extends

- [`BinarySemaphoreAcquireOptions`](BinarySemaphoreAcquireOptions.md)

## Indexable

\[`n`: `string`\]: `any`

## Properties

### reject()

> **reject**: (`reason?`) => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:54](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/utils/async-semaphore.ts#L54)

#### Parameters

##### reason?

`any`

#### Returns

`void`

***

### resolve()

> **resolve**: (`value`) => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:53](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/utils/async-semaphore.ts#L53)

#### Parameters

##### value

`any`

#### Returns

`void`

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:29](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/utils/async-semaphore.ts#L29)

#### Inherited from

[`BinarySemaphoreAcquireOptions`](BinarySemaphoreAcquireOptions.md).[`signal`](BinarySemaphoreAcquireOptions.md#signal)

***

### token?

> `optional` **token**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:55](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/utils/async-semaphore.ts#L55)
