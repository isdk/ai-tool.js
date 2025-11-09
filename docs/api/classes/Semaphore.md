[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / Semaphore

# Class: Semaphore

Defined in: @isdk/util/dist/index.d.ts:820

A Semaphore implementation for managing concurrency in asynchronous operations.
Semaphores allow a fixed number of resources to be accessed concurrently.
This class extends BinarySemaphore and adds support for a maximum concurrency limit and an optional readiness check.

Example usage:

```typescript
const semaphore = new Semaphore(5); // Allows 5 concurrent operations.

const semaphore = new Semaphore(
  4, // Allow 4 concurrent async calls
  {
    capacity: 100, // Prealloc space for 100 tokens
    isReadyFn: async () => {
      // Check if the system is ready to handle more requests
      return true;
    },
    pauseFn: () => {
      console.log('Pausing the stream');
    },
    resumeFn: () => {
      console.log('Resuming the stream');
    }
  }
);

async function fetchData(x) {
  await semaphore.acquire()
  try {
    console.log(semaphore.pendingCount() + ' calls to fetch are waiting')
    // ... do some async stuff with x
  } finally {
    semaphore.release();
  }
}

const data = await Promise.all(array.map(fetchData));
```

## Extends

- [`BinarySemaphore`](BinarySemaphore.md)

## Constructors

### Constructor

> **new Semaphore**(`maxConcurrency`, `options?`): `Semaphore`

Defined in: @isdk/util/dist/index.d.ts:837

Creates a semaphore object. The first argument is the maximum concurrently number and the second argument is optional.

#### Parameters

##### maxConcurrency

The maximum number of callers allowed to acquire the semaphore concurrently.

`number` | [`SemaphoreOptions`](../interfaces/SemaphoreOptions.md)

##### options?

[`SemaphoreOptions`](../interfaces/SemaphoreOptions.md)

#### Returns

`Semaphore`

#### Overrides

[`BinarySemaphore`](BinarySemaphore.md).[`constructor`](BinarySemaphore.md#constructor)

## Properties

### \_activeCount

> `protected` **\_activeCount**: `number`

Defined in: @isdk/util/dist/index.d.ts:686

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`_activeCount`](BinarySemaphore.md#_activecount)

***

### emitter

> `protected` **emitter**: [`EventEmitter`](EventEmitter.md)

Defined in: @isdk/util/dist/index.d.ts:680

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`emitter`](BinarySemaphore.md#emitter)

***

### free

> `protected` **free**: `Deque`\<`any`\>

Defined in: @isdk/util/dist/index.d.ts:822

#### Overrides

[`BinarySemaphore`](BinarySemaphore.md).[`free`](BinarySemaphore.md#free)

***

### initTokenFn()

> `protected` **initTokenFn**: (`token?`) => `void`

Defined in: @isdk/util/dist/index.d.ts:684

#### Parameters

##### token?

`any`

#### Returns

`void`

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`initTokenFn`](BinarySemaphore.md#inittokenfn)

***

### maxConcurrency

> `readonly` **maxConcurrency**: `number`

Defined in: @isdk/util/dist/index.d.ts:821

***

### paused

> `protected` **paused**: `boolean`

Defined in: @isdk/util/dist/index.d.ts:685

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`paused`](BinarySemaphore.md#paused)

***

### pauseFn()?

> `protected` `optional` **pauseFn**: () => `void`

Defined in: @isdk/util/dist/index.d.ts:682

#### Returns

`void`

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`pauseFn`](BinarySemaphore.md#pausefn)

***

### resumeFn()?

> `protected` `optional` **resumeFn**: () => `void`

Defined in: @isdk/util/dist/index.d.ts:683

#### Returns

`void`

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`resumeFn`](BinarySemaphore.md#resumefn)

***

### useDefaultTokens

> `protected` **useDefaultTokens**: `boolean`

Defined in: @isdk/util/dist/index.d.ts:681

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`useDefaultTokens`](BinarySemaphore.md#usedefaulttokens)

***

### waiting

> `readonly` **waiting**: `Deque`\<`undefined` \| [`SemaphoreTaskItem`](../interfaces/SemaphoreTaskItem.md)\>

Defined in: @isdk/util/dist/index.d.ts:678

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`waiting`](BinarySemaphore.md#waiting)

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

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`activeCount`](BinarySemaphore.md#activecount)

***

### pendingCount

#### Get Signature

> **get** **pendingCount**(): `number`

Defined in: @isdk/util/dist/index.d.ts:778

Get the number of callers waiting on the semaphore, i.e. the number of pending promises.

##### Returns

`number`

The number of waiters in the waiting list.

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`pendingCount`](BinarySemaphore.md#pendingcount)

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

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`_dispatchTask`](BinarySemaphore.md#_dispatchtask)

***

### \_newReleaser()

> **\_newReleaser**(`options?`): `BinarySemaphoreReleaserFunc`

Defined in: @isdk/util/dist/index.d.ts:737

#### Parameters

##### options?

[`BinarySemaphoreReleaseOptions`](../interfaces/BinarySemaphoreReleaseOptions.md)

#### Returns

`BinarySemaphoreReleaserFunc`

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`_newReleaser`](BinarySemaphore.md#_newreleaser)

***

### abort()

> **abort**(`reason?`): `void`

Defined in: @isdk/util/dist/index.d.ts:762

#### Parameters

##### reason?

`any`

#### Returns

`void`

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`abort`](BinarySemaphore.md#abort)

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

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`acquire`](BinarySemaphore.md#acquire)

***

### drain()

> **drain**(): `Promise`\<`any`[]\>

Defined in: @isdk/util/dist/index.d.ts:842

Drains the semaphore and returns all the initialized tokens in an array. Draining is an ideal way to ensure there are no pending async tasks, for example before a process will terminate.

#### Returns

`Promise`\<`any`[]\>

#### Overrides

[`BinarySemaphore`](BinarySemaphore.md).[`drain`](BinarySemaphore.md#drain)

***

### init()

> **init**(`options`): `void`

Defined in: @isdk/util/dist/index.d.ts:736

#### Parameters

##### options

[`BinarySemaphoreOptions`](../interfaces/BinarySemaphoreOptions.md)

#### Returns

`void`

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`init`](BinarySemaphore.md#init)

***

### initFree()

> **initFree**(`options`): `void`

Defined in: @isdk/util/dist/index.d.ts:838

#### Parameters

##### options

[`SemaphoreOptions`](../interfaces/SemaphoreOptions.md)

#### Returns

`void`

#### Overrides

[`BinarySemaphore`](BinarySemaphore.md).[`initFree`](BinarySemaphore.md#initfree)

***

### lock()

> **lock**(`options?`): `any`

Defined in: @isdk/util/dist/index.d.ts:841

#### Parameters

##### options?

[`BinarySemaphoreAcquireOptions`](../interfaces/BinarySemaphoreAcquireOptions.md)

#### Returns

`any`

#### Overrides

[`BinarySemaphore`](BinarySemaphore.md).[`lock`](BinarySemaphore.md#lock)

***

### onReleased()

> **onReleased**(`options?`): `void`

Defined in: @isdk/util/dist/index.d.ts:735

#### Parameters

##### options?

[`BinarySemaphoreReleaseOptions`](../interfaces/BinarySemaphoreReleaseOptions.md)

#### Returns

`void`

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`onReleased`](BinarySemaphore.md#onreleased)

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

#### Inherited from

[`BinarySemaphore`](BinarySemaphore.md).[`release`](BinarySemaphore.md#release)

***

### tryAcquire()

> **tryAcquire**(`options?`): `any`

Defined in: @isdk/util/dist/index.d.ts:839

Attempt to acquire a token from the semaphore, if one is available immediately. Otherwise, return undefined.

#### Parameters

##### options?

[`BinarySemaphoreAcquireOptions`](../interfaces/BinarySemaphoreAcquireOptions.md)

#### Returns

`any`

Returns a token if the semaphore is not full; otherwise, returns `undefined`.

#### Overrides

[`BinarySemaphore`](BinarySemaphore.md).[`tryAcquire`](BinarySemaphore.md#tryacquire)

***

### unlock()

> **unlock**(`token?`): `void`

Defined in: @isdk/util/dist/index.d.ts:840

#### Parameters

##### token?

`any`

#### Returns

`void`

#### Overrides

[`BinarySemaphore`](BinarySemaphore.md).[`unlock`](BinarySemaphore.md#unlock)
