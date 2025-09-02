[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / BinarySemaphoreOptions

# Interface: BinarySemaphoreOptions

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:21](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L21)

## Extended by

- [`SemaphoreOptions`](SemaphoreOptions.md)

## Properties

### capacity?

> `optional` **capacity**: `number`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:25](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L25)

***

### initFn()?

> `optional` **initFn**: () => `any`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:22](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L22)

#### Returns

`any`

***

### pauseFn()?

> `optional` **pauseFn**: () => `void`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:23](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L23)

#### Returns

`void`

***

### resumeFn()?

> `optional` **resumeFn**: () => `void`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:24](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L24)

#### Returns

`void`
