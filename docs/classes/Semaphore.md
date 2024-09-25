[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / Semaphore

# Class: Semaphore

A Semaphore implementation for managing concurrency in asynchronous operations.
Semaphores allow a fixed number of resources to be accessed concurrently.

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
    console.log(semaphore.pendingCount() + ' calls to fetch are waiting')
    // ... do some async stuff with x
  } finally {
    semaphore.release();
  }
}

const data = await Promise.all(array.map(fetchData));
```

## Constructors

### new Semaphore()

> **new Semaphore**(`maxConcurrency`, `__namedParameters`): [`Semaphore`](Semaphore.md)

Creates a semaphore object. The first argument is the maximum concurrently number and the second argument is optional.

#### Parameters

• **maxConcurrency**: `number`

The maximum number of callers allowed to acquire the semaphore concurrently.

• **\_\_namedParameters** = `{}`

• **\_\_namedParameters.capacity?**: `number` = `DefaultAsyncSemaphoreCapacity`

• **\_\_namedParameters.initFn?** = `defaultInit`

• **\_\_namedParameters.pauseFn?**

• **\_\_namedParameters.resumeFn?**

#### Returns

[`Semaphore`](Semaphore.md)

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:207](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/async-semaphore.ts#L207)

## Properties

### maxConcurrency

> `readonly` **maxConcurrency**: `number`

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:151](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/async-semaphore.ts#L151)

***

### waiting

> `readonly` **waiting**: `Deque`

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:152](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/async-semaphore.ts#L152)

## Methods

### acquire()

> **acquire**(`signal`?): `Promise`\<`any`\>

Acquire a token from the semaphore, thus decrement the number of available execution slots. If initFn is not used then the return value of the function can be discarded.

#### Parameters

• **signal?**: `AbortSignal`

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:265](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/async-semaphore.ts#L265)

***

### drain()

> **drain**(): `Promise`\<`any`[]\>

Drains the semaphore and returns all the initialized tokens in an array. Draining is an ideal way to ensure there are no pending async tasks, for example before a process will terminate.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:301](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/async-semaphore.ts#L301)

***

### pendingCount()

> **pendingCount**(): `number`

Returns the number of callers waiting on the semaphore, i.e. the number of pending promises.

#### Returns

`number`

The number of waiters in the waiting list.

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:314](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/async-semaphore.ts#L314)

***

### release()

> **release**(`token`?): `void`

Release the semaphore, thus increment the number of free execution slots. If initFn is used then the token returned by acquire() should be given as an argument when calling this function.

#### Parameters

• **token?**: `any`

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:294](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/async-semaphore.ts#L294)

***

### tryAcquire()

> **tryAcquire**(): `any`

Attempt to acquire a token from the semaphore, if one is available immediately. Otherwise, return undefined.

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:258](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/async-semaphore.ts#L258)
