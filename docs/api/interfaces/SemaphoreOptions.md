[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / SemaphoreOptions

# Interface: SemaphoreOptions

Defined in: @isdk/util/dist/index.d.ts:638

## Extends

- [`BinarySemaphoreOptions`](BinarySemaphoreOptions.md)

## Properties

### capacity?

> `optional` **capacity**: `number`

Defined in: @isdk/util/dist/index.d.ts:625

#### Inherited from

[`BinarySemaphoreOptions`](BinarySemaphoreOptions.md).[`capacity`](BinarySemaphoreOptions.md#capacity)

***

### initFn()?

> `optional` **initFn**: () => `any`

Defined in: @isdk/util/dist/index.d.ts:622

#### Returns

`any`

#### Inherited from

[`BinarySemaphoreOptions`](BinarySemaphoreOptions.md).[`initFn`](BinarySemaphoreOptions.md#initfn)

***

### isReadyFn?

> `optional` **isReadyFn**: [`SemaphoreIsReadyFuncType`](../type-aliases/SemaphoreIsReadyFuncType.md)

Defined in: @isdk/util/dist/index.d.ts:640

***

### maxConcurrency?

> `optional` **maxConcurrency**: `number`

Defined in: @isdk/util/dist/index.d.ts:639

***

### pauseFn()?

> `optional` **pauseFn**: () => `void`

Defined in: @isdk/util/dist/index.d.ts:623

#### Returns

`void`

#### Inherited from

[`BinarySemaphoreOptions`](BinarySemaphoreOptions.md).[`pauseFn`](BinarySemaphoreOptions.md#pausefn)

***

### resumeFn()?

> `optional` **resumeFn**: () => `void`

Defined in: @isdk/util/dist/index.d.ts:624

#### Returns

`void`

#### Inherited from

[`BinarySemaphoreOptions`](BinarySemaphoreOptions.md).[`resumeFn`](BinarySemaphoreOptions.md#resumefn)
