[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / BinarySemaphore

# Class: BinarySemaphore

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:88](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L88)

A binary semaphore implementation for managing concurrency in asynchronous operations.
Unlike a general semaphore, a binary semaphore allows only one caller to acquire the semaphore at a time.
It provides methods to acquire, release, and manage waiting tasks efficiently.

Example usage:

```typescript
const semaphore = new Semaphore(5); // Allows 5 concurrent operations.

const semaphore = new Semaphore(
  4, // Allow 4 concurrent async calls
  {
    capacity: 100 // Prealloc space for 100 tokens
  }
);

async function fetchData(x) {
  await semaphore.acquire()
  try {
    console.log(semaphore.pendingCount + ' calls to fetch are waiting')
    // ... do some async stuff with x
  } finally {
    semaphore.release();
  }
}

const data = await Promise.all(array.map(fetchData));
```

## Extended by

- [`Semaphore`](Semaphore.md)

## Constructors

### new BinarySemaphore()

> **new BinarySemaphore**(`options`): [`BinarySemaphore`](BinarySemaphore.md)

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:145](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L145)

Creates a binary semaphore object for managing concurrency in asynchronous operations.

#### Parameters

##### options

[`BinarySemaphoreOptions`](../interfaces/BinarySemaphoreOptions.md) = `{}`

#### Returns

[`BinarySemaphore`](BinarySemaphore.md)

## Properties

### \_activeCount

> `protected` **\_activeCount**: `number`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:97](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L97)

***

### emitter

> `protected` **emitter**: [`EventEmitter`](EventEmitter.md)

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:91](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L91)

***

### free

> `protected` **free**: `any`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:90](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L90)

***

### initTokenFn()

> `protected` **initTokenFn**: (`token`?) => `void`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:95](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L95)

#### Parameters

##### token?

`any`

#### Returns

`void`

***

### paused

> `protected` **paused**: `boolean`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:96](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L96)

***

### pauseFn()?

> `protected` `optional` **pauseFn**: () => `void`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:93](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L93)

#### Returns

`void`

***

### resumeFn()?

> `protected` `optional` **resumeFn**: () => `void`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:94](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L94)

#### Returns

`void`

***

### useDefaultTokens

> `protected` **useDefaultTokens**: `boolean`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:92](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L92)

***

### waiting

> `readonly` **waiting**: `Deque`\<`undefined` \| [`SemaphoreTaskItem`](../interfaces/SemaphoreTaskItem.md)\>

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:89](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L89)

## Accessors

### activeCount

#### Get Signature

> **get** **activeCount**(): `number`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:318](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L318)

Get the total count of all active operations.

This method returns the number of operations that are either:
- Waiting in the queue to acquire the semaphore (`pendingCount`).
- Already acquired the semaphore but have not yet released it.

##### Returns

`number`

The total count of active operations, including both waiting and ongoing tasks.

***

### pendingCount

#### Get Signature

> **get** **pendingCount**(): `number`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:327](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L327)

Get the number of callers waiting on the semaphore, i.e. the number of pending promises.

##### Returns

`number`

The number of waiters in the waiting list.

## Methods

### \_dispatchTask()

> **\_dispatchTask**(`task`, `options`?): `void`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:212](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L212)

#### Parameters

##### task

[`SemaphoreTaskItem`](../interfaces/SemaphoreTaskItem.md)

##### options?

[`BinarySemaphoreReleaseOptions`](../interfaces/BinarySemaphoreReleaseOptions.md)

#### Returns

`void`

***

### \_newReleaser()

> **\_newReleaser**(`options`?): [`BinarySemaphoreReleaserFunc`](../interfaces/BinarySemaphoreReleaserFunc.md)

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:199](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L199)

#### Parameters

##### options?

[`BinarySemaphoreReleaseOptions`](../interfaces/BinarySemaphoreReleaseOptions.md)

#### Returns

[`BinarySemaphoreReleaserFunc`](../interfaces/BinarySemaphoreReleaserFunc.md)

***

### abort()

> **abort**(`reason`?): `void`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:301](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L301)

#### Parameters

##### reason?

`any`

#### Returns

`void`

***

### acquire()

> **acquire**(`options`?): `Promise`\<[`BinarySemaphoreReleaserFunc`](../interfaces/BinarySemaphoreReleaserFunc.md)\>

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:243](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L243)

Acquire a token from the semaphore, thus decrement the number of available execution slots. If initFn is not used then the return value of the function can be discarded.

#### Parameters

##### options?

[`BinarySemaphoreAcquireOptions`](../interfaces/BinarySemaphoreAcquireOptions.md)

#### Returns

`Promise`\<[`BinarySemaphoreReleaserFunc`](../interfaces/BinarySemaphoreReleaserFunc.md)\>

A promise that resolves to a release function when a token is acquired. If the semaphore is full, the caller will be added to a waiting queue.

***

### drain()

> **drain**(): `Promise`\<`any`[]\>

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:296](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L296)

Drains the semaphore and returns all the initialized tokens in an array. Draining is an ideal way to ensure there are no pending async tasks, for example before a process will terminate.

#### Returns

`Promise`\<`any`[]\>

***

### init()

> **init**(`options`): `void`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:193](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L193)

#### Parameters

##### options

[`BinarySemaphoreOptions`](../interfaces/BinarySemaphoreOptions.md)

#### Returns

`void`

***

### initFree()

> **initFree**(`options`?): `void`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:173](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L173)

#### Parameters

##### options?

[`BinarySemaphoreOptions`](../interfaces/BinarySemaphoreOptions.md)

#### Returns

`void`

***

### lock()

> **lock**(`options`?): `any`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:217](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L217)

#### Parameters

##### options?

[`BinarySemaphoreAcquireOptions`](../interfaces/BinarySemaphoreAcquireOptions.md)

#### Returns

`any`

***

### onReleased()

> **onReleased**(`options`?): `void`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:177](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L177)

#### Parameters

##### options?

[`BinarySemaphoreReleaseOptions`](../interfaces/BinarySemaphoreReleaseOptions.md)

#### Returns

`void`

***

### release()

> **release**(`options`?): `void`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:288](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L288)

Releases the semaphore, incrementing the number of free execution slots. If there are tasks in the waiting queue, the next task will be dispatched.

#### Parameters

##### options?

[`BinarySemaphoreReleaseOptions`](../interfaces/BinarySemaphoreReleaseOptions.md)

#### Returns

`void`

***

### tryAcquire()

> **tryAcquire**(`options`?): `any`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:234](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L234)

Attempt to acquire a token from the semaphore, if one is available immediately. Otherwise, return undefined.

#### Parameters

##### options?

[`BinarySemaphoreAcquireOptions`](../interfaces/BinarySemaphoreAcquireOptions.md)

#### Returns

`any`

Returns a token if the semaphore is not full; otherwise, returns `undefined`.

***

### unlock()

> **unlock**(`token`?): `void`

Defined in: [ai-tools/packages/ai-tool/src/utils/async-semaphore.ts:225](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/async-semaphore.ts#L225)

#### Parameters

##### token?

`any`

#### Returns

`void`
