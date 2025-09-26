[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / SemaphoreOptions

# Interface: SemaphoreOptions

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:42](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/async-semaphore.ts#L42)

## Extends

- [`BinarySemaphoreOptions`](BinarySemaphoreOptions.md)

## Properties

### capacity?

> `optional` **capacity**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:25](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/async-semaphore.ts#L25)

#### Inherited from

[`BinarySemaphoreOptions`](BinarySemaphoreOptions.md).[`capacity`](BinarySemaphoreOptions.md#capacity)

***

### initFn()?

> `optional` **initFn**: () => `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:22](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/async-semaphore.ts#L22)

#### Returns

`any`

#### Inherited from

[`BinarySemaphoreOptions`](BinarySemaphoreOptions.md).[`initFn`](BinarySemaphoreOptions.md#initfn)

***

### isReadyFn?

> `optional` **isReadyFn**: [`SemaphoreIsReadyFuncType`](../type-aliases/SemaphoreIsReadyFuncType.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:44](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/async-semaphore.ts#L44)

***

### maxConcurrency?

> `optional` **maxConcurrency**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:43](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/async-semaphore.ts#L43)

***

### pauseFn()?

> `optional` **pauseFn**: () => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:23](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/async-semaphore.ts#L23)

#### Returns

`void`

#### Inherited from

[`BinarySemaphoreOptions`](BinarySemaphoreOptions.md).[`pauseFn`](BinarySemaphoreOptions.md#pausefn)

***

### resumeFn()?

> `optional` **resumeFn**: () => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:24](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/async-semaphore.ts#L24)

#### Returns

`void`

#### Inherited from

[`BinarySemaphoreOptions`](BinarySemaphoreOptions.md).[`resumeFn`](BinarySemaphoreOptions.md#resumefn)
