[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / TaskAbortController

# Class: TaskAbortController

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:62

## Extends

- `AbortController`

## Constructors

### Constructor

> **new TaskAbortController**(`parent`): `TaskAbortController`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:67

#### Parameters

##### parent

[`CancelableAbility`](CancelableAbility.md)

#### Returns

`TaskAbortController`

#### Overrides

`AbortController.constructor`

## Properties

### id?

> `optional` **id**: [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:63

***

### parent

> **parent**: [`CancelableAbility`](CancelableAbility.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:66

***

### signal

> `readonly` **signal**: `AbortSignal`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.dom.d.ts:2501

Returns the AbortSignal object associated with this object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortController/signal)

#### Inherited from

`AbortController.signal`

***

### streamController?

> `optional` **streamController**: `ReadableStreamDefaultController`\<`any`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:65

***

### timeoutId?

> `optional` **timeoutId**: `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:64

## Methods

### abort()

> **abort**(`reason?`, `data?`): `void`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:68

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

> **throwRejected**(`alreadyRejected?`): `undefined` \| `true`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:69

#### Parameters

##### alreadyRejected?

`boolean`

#### Returns

`undefined` \| `true`
