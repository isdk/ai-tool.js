[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / TaskAbortController

# Class: TaskAbortController

Defined in: [packages/ai-tool/src/utils/cancelable-ability.ts:35](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/cancelable-ability.ts#L35)

## Extends

- `AbortController`

## Constructors

### new TaskAbortController()

> **new TaskAbortController**(`parent`): [`TaskAbortController`](TaskAbortController.md)

Defined in: [packages/ai-tool/src/utils/cancelable-ability.ts:41](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/cancelable-ability.ts#L41)

#### Parameters

##### parent

[`CancelableAbility`](CancelableAbility.md)

#### Returns

[`TaskAbortController`](TaskAbortController.md)

#### Overrides

`AbortController.constructor`

## Properties

### id?

> `optional` **id**: [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

Defined in: [packages/ai-tool/src/utils/cancelable-ability.ts:36](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/cancelable-ability.ts#L36)

***

### parent

> **parent**: [`CancelableAbility`](CancelableAbility.md)

Defined in: [packages/ai-tool/src/utils/cancelable-ability.ts:39](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/cancelable-ability.ts#L39)

***

### signal

> `readonly` **signal**: `AbortSignal`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.dom.d.ts:2501

Returns the AbortSignal object associated with this object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortController/signal)

#### Inherited from

`AbortController.signal`

***

### streamController?

> `optional` **streamController**: `ReadableStreamDefaultController`\<`any`\>

Defined in: [packages/ai-tool/src/utils/cancelable-ability.ts:38](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/cancelable-ability.ts#L38)

***

### timeoutId?

> `optional` **timeoutId**: `any`

Defined in: [packages/ai-tool/src/utils/cancelable-ability.ts:37](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/cancelable-ability.ts#L37)

## Methods

### abort()

> **abort**(`reason`?, `data`?): `void`

Defined in: [packages/ai-tool/src/utils/cancelable-ability.ts:46](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/cancelable-ability.ts#L46)

Invoking this method will set this object's AbortSignal's aborted flag and signal to any observers that the associated activity is to be aborted.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortController/abort)

#### Parameters

##### reason?

`string` | `Error` | [`CommonError`](CommonError.md)

##### data?

`any`

#### Returns

`void`

#### Overrides

`AbortController.abort`

***

### throwRejected()

> **throwRejected**(`alreadyRejected`?): `undefined` \| `true`

Defined in: [packages/ai-tool/src/utils/cancelable-ability.ts:55](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/cancelable-ability.ts#L55)

#### Parameters

##### alreadyRejected?

`boolean`

#### Returns

`undefined` \| `true`
