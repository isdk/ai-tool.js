[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / SemaphoreTaskItem

# Interface: SemaphoreTaskItem

Defined in: @isdk/util/dist/index.d.ts:642

## Extends

- [`BinarySemaphoreAcquireOptions`](BinarySemaphoreAcquireOptions.md)

## Indexable

\[`n`: `string`\]: `any`

## Properties

### reject()

> **reject**: (`reason?`) => `void`

Defined in: @isdk/util/dist/index.d.ts:644

#### Parameters

##### reason?

`any`

#### Returns

`void`

***

### resolve()

> **resolve**: (`value`) => `void`

Defined in: @isdk/util/dist/index.d.ts:643

#### Parameters

##### value

`any`

#### Returns

`void`

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: @isdk/util/dist/index.d.ts:628

#### Inherited from

[`BinarySemaphoreAcquireOptions`](BinarySemaphoreAcquireOptions.md).[`signal`](BinarySemaphoreAcquireOptions.md#signal)

***

### token?

> `optional` **token**: `any`

Defined in: @isdk/util/dist/index.d.ts:645
