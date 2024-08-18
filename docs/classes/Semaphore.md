[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / Semaphore

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

## Table of contents

### Constructors

- [constructor](Semaphore.md#constructor)

### Properties

- [free](Semaphore.md#free)
- [maxConcurrency](Semaphore.md#maxconcurrency)
- [pauseFn](Semaphore.md#pausefn)
- [paused](Semaphore.md#paused)
- [releaseEmitter](Semaphore.md#releaseemitter)
- [resumeFn](Semaphore.md#resumefn)
- [useDefaultTokens](Semaphore.md#usedefaulttokens)
- [waiting](Semaphore.md#waiting)

### Methods

- [acquire](Semaphore.md#acquire)
- [drain](Semaphore.md#drain)
- [pendingCount](Semaphore.md#pendingcount)
- [release](Semaphore.md#release)
- [tryAcquire](Semaphore.md#tryacquire)

## Constructors

### constructor

• **new Semaphore**(`maxConcurrency`, `«destructured»?`): [`Semaphore`](Semaphore.md)

Creates a semaphore object. The first argument is the maximum concurrently number and the second argument is optional.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `maxConcurrency` | `number` | `undefined` | The maximum number of callers allowed to acquire the semaphore concurrently. |
| `«destructured»` | `Object` | `{}` | - |
| › `capacity?` | `number` | `DefaultAsyncSemaphoreCapacity` | - |
| › `initFn?` | () => `any` | `defaultInit` | - |
| › `pauseFn?` | () => `void` | `undefined` | - |
| › `resumeFn?` | () => `void` | `undefined` | - |

#### Returns

[`Semaphore`](Semaphore.md)

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:207](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/async-semaphore.ts#L207)

## Properties

### free

• `Private` **free**: `Deque`

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:153](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/async-semaphore.ts#L153)

___

### maxConcurrency

• `Readonly` **maxConcurrency**: `number`

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:151](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/async-semaphore.ts#L151)

___

### pauseFn

• `Private` `Optional` **pauseFn**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:156](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/async-semaphore.ts#L156)

___

### paused

• `Private` **paused**: `boolean`

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:158](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/async-semaphore.ts#L158)

___

### releaseEmitter

• `Private` **releaseEmitter**: `EventEmitter`

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:154](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/async-semaphore.ts#L154)

___

### resumeFn

• `Private` `Optional` **resumeFn**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:157](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/async-semaphore.ts#L157)

___

### useDefaultTokens

• `Private` **useDefaultTokens**: `boolean`

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:155](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/async-semaphore.ts#L155)

___

### waiting

• `Readonly` **waiting**: `Deque`

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:152](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/async-semaphore.ts#L152)

## Methods

### acquire

▸ **acquire**(`signal?`): `Promise`\<`any`\>

Acquire a token from the semaphore, thus decrement the number of available execution slots. If initFn is not used then the return value of the function can be discarded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `signal?` | `AbortSignal` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:265](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/async-semaphore.ts#L265)

___

### drain

▸ **drain**(): `Promise`\<`any`[]\>

Drains the semaphore and returns all the initialized tokens in an array. Draining is an ideal way to ensure there are no pending async tasks, for example before a process will terminate.

#### Returns

`Promise`\<`any`[]\>

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:301](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/async-semaphore.ts#L301)

___

### pendingCount

▸ **pendingCount**(): `number`

Returns the number of callers waiting on the semaphore, i.e. the number of pending promises.

#### Returns

`number`

The number of waiters in the waiting list.

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:314](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/async-semaphore.ts#L314)

___

### release

▸ **release**(`token?`): `void`

Release the semaphore, thus increment the number of free execution slots. If initFn is used then the token returned by acquire() should be given as an argument when calling this function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `token?` | `any` |

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:294](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/async-semaphore.ts#L294)

___

### tryAcquire

▸ **tryAcquire**(): `any`

Attempt to acquire a token from the semaphore, if one is available immediately. Otherwise, return undefined.

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/utils/async-semaphore.ts:258](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/async-semaphore.ts#L258)
