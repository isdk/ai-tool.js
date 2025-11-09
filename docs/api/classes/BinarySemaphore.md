[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / BinarySemaphore

# Class: BinarySemaphore

Defined in: @isdk/util/dist/index.d.ts:677

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

### Constructor

> **new BinarySemaphore**(`options?`): `BinarySemaphore`

Defined in: @isdk/util/dist/index.d.ts:733

Creates a binary semaphore object for managing concurrency in asynchronous operations.

#### Parameters

##### options?

[`BinarySemaphoreOptions`](../interfaces/BinarySemaphoreOptions.md)

#### Returns

`BinarySemaphore`

## Properties

### \_activeCount

> `protected` **\_activeCount**: `number`

Defined in: @isdk/util/dist/index.d.ts:686

***

### emitter

> `protected` **emitter**: [`EventEmitter`](EventEmitter.md)

Defined in: @isdk/util/dist/index.d.ts:680

***

### free

> `protected` **free**: `any`

Defined in: @isdk/util/dist/index.d.ts:679

***

### initTokenFn()

> `protected` **initTokenFn**: (`token?`) => `void`

Defined in: @isdk/util/dist/index.d.ts:684

#### Parameters

##### token?

`any`

#### Returns

`void`

***

### paused

> `protected` **paused**: `boolean`

Defined in: @isdk/util/dist/index.d.ts:685

***

### pauseFn()?

> `protected` `optional` **pauseFn**: () => `void`

Defined in: @isdk/util/dist/index.d.ts:682

#### Returns

`void`

***

### resumeFn()?

> `protected` `optional` **resumeFn**: () => `void`

Defined in: @isdk/util/dist/index.d.ts:683

#### Returns

`void`

***

### useDefaultTokens

> `protected` **useDefaultTokens**: `boolean`

Defined in: @isdk/util/dist/index.d.ts:681

***

### waiting

> `readonly` **waiting**: `Deque`\<`undefined` \| [`SemaphoreTaskItem`](../interfaces/SemaphoreTaskItem.md)\>

Defined in: @isdk/util/dist/index.d.ts:678

## Accessors

### activeCount

#### Get Signature

> **get** **activeCount**(): `number`

Defined in: @isdk/util/dist/index.d.ts:772

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

Defined in: @isdk/util/dist/index.d.ts:778

Get the number of callers waiting on the semaphore, i.e. the number of pending promises.

##### Returns

`number`

The number of waiters in the waiting list.

## Methods

### \_dispatchTask()

> **\_dispatchTask**(`task`, `options?`): `void`

Defined in: @isdk/util/dist/index.d.ts:738

#### Parameters

##### task

[`SemaphoreTaskItem`](../interfaces/SemaphoreTaskItem.md)

##### options?

[`BinarySemaphoreReleaseOptions`](../interfaces/BinarySemaphoreReleaseOptions.md)

#### Returns

`void`

***

### \_newReleaser()

> **\_newReleaser**(`options?`): `BinarySemaphoreReleaserFunc`

Defined in: @isdk/util/dist/index.d.ts:737

#### Parameters

##### options?

[`BinarySemaphoreReleaseOptions`](../interfaces/BinarySemaphoreReleaseOptions.md)

#### Returns

`BinarySemaphoreReleaserFunc`

***

### abort()

> **abort**(`reason?`): `void`

Defined in: @isdk/util/dist/index.d.ts:762

#### Parameters

##### reason?

`any`

#### Returns

`void`

***

### acquire()

> **acquire**(`options?`): `Promise`\<`BinarySemaphoreReleaserFunc`\>

Defined in: @isdk/util/dist/index.d.ts:752

Acquire a token from the semaphore, thus decrement the number of available execution slots. If initFn is not used then the return value of the function can be discarded.

#### Parameters

##### options?

[`BinarySemaphoreAcquireOptions`](../interfaces/BinarySemaphoreAcquireOptions.md)

#### Returns

`Promise`\<`BinarySemaphoreReleaserFunc`\>

A promise that resolves to a release function when a token is acquired. If the semaphore is full, the caller will be added to a waiting queue.

***

### drain()

> **drain**(): `Promise`\<`any`[]\>

Defined in: @isdk/util/dist/index.d.ts:761

Drains the semaphore and returns all the initialized tokens in an array. Draining is an ideal way to ensure there are no pending async tasks, for example before a process will terminate.

#### Returns

`Promise`\<`any`[]\>

***

### init()

> **init**(`options`): `void`

Defined in: @isdk/util/dist/index.d.ts:736

#### Parameters

##### options

[`BinarySemaphoreOptions`](../interfaces/BinarySemaphoreOptions.md)

#### Returns

`void`

***

### initFree()

> **initFree**(`options?`): `void`

Defined in: @isdk/util/dist/index.d.ts:734

#### Parameters

##### options?

[`BinarySemaphoreOptions`](../interfaces/BinarySemaphoreOptions.md)

#### Returns

`void`

***

### lock()

> **lock**(`options?`): `any`

Defined in: @isdk/util/dist/index.d.ts:739

#### Parameters

##### options?

[`BinarySemaphoreAcquireOptions`](../interfaces/BinarySemaphoreAcquireOptions.md)

#### Returns

`any`

***

### onReleased()

> **onReleased**(`options?`): `void`

Defined in: @isdk/util/dist/index.d.ts:735

#### Parameters

##### options?

[`BinarySemaphoreReleaseOptions`](../interfaces/BinarySemaphoreReleaseOptions.md)

#### Returns

`void`

***

### release()

> **release**(`options?`): `void`

Defined in: @isdk/util/dist/index.d.ts:757

Releases the semaphore, incrementing the number of free execution slots. If there are tasks in the waiting queue, the next task will be dispatched.

#### Parameters

##### options?

[`BinarySemaphoreReleaseOptions`](../interfaces/BinarySemaphoreReleaseOptions.md)

#### Returns

`void`

***

### tryAcquire()

> **tryAcquire**(`options?`): `any`

Defined in: @isdk/util/dist/index.d.ts:746

Attempt to acquire a token from the semaphore, if one is available immediately. Otherwise, return undefined.

#### Parameters

##### options?

[`BinarySemaphoreAcquireOptions`](../interfaces/BinarySemaphoreAcquireOptions.md)

#### Returns

`any`

Returns a token if the semaphore is not full; otherwise, returns `undefined`.

***

### unlock()

> **unlock**(`token?`): `void`

Defined in: @isdk/util/dist/index.d.ts:740

#### Parameters

##### token?

`any`

#### Returns

`void`
