[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / TaskAbortController

# Class: TaskAbortController

## Extends

- `AbortController`

## Constructors

### new TaskAbortController()

> **new TaskAbortController**(`parent`): [`TaskAbortController`](TaskAbortController.md)

#### Parameters

• **parent**: [`CancelableAbility`](CancelableAbility.md)

#### Returns

[`TaskAbortController`](TaskAbortController.md)

#### Overrides

`AbortController.constructor`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:21](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L21)

## Properties

### id?

> `optional` **id**: [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:16](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L16)

***

### parent

> **parent**: [`CancelableAbility`](CancelableAbility.md)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:19](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L19)

***

### signal

> `readonly` **signal**: `AbortSignal`

Returns the AbortSignal object associated with this object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortController/signal)

#### Inherited from

`AbortController.signal`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.dom.d.ts:2321

***

### streamController?

> `optional` **streamController**: `ReadableStreamDefaultController`\<`any`\>

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:18](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L18)

***

### timeoutId?

> `optional` **timeoutId**: `any`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:17](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L17)

## Methods

### abort()

> **abort**(`reason`?, `data`?): `void`

Invoking this method will set this object's AbortSignal's aborted flag and signal to any observers that the associated activity is to be aborted.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortController/abort)

#### Parameters

• **reason?**: `string` \| `Error` \| [`CommonError`](CommonError.md)

• **data?**: `any`

#### Returns

`void`

#### Overrides

`AbortController.abort`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:26](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L26)

***

### throwRejected()

> **throwRejected**(`alreadyRejected`?): `undefined` \| `true`

#### Parameters

• **alreadyRejected?**: `boolean`

#### Returns

`undefined` \| `true`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:35](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L35)
