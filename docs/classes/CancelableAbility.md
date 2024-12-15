[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / CancelableAbility

# Class: CancelableAbility

## Indexable

 \[`name`: `string`\]: `any`

## Constructors

### new CancelableAbility()

> **new CancelableAbility**(): [`CancelableAbility`](CancelableAbility.md)

#### Returns

[`CancelableAbility`](CancelableAbility.md)

## Properties

### \_\_task\_aborter

> **\_\_task\_aborter**: `undefined` \| [`TaskAbortController`](TaskAbortController.md) \| [`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:65](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L65)

***

### \_\_task\_semaphore

> **\_\_task\_semaphore**: `undefined` \| [`Semaphore`](Semaphore.md)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:66](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L66)

***

### \_asyncFeatures?

> `optional` **\_asyncFeatures**: `number`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:55](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L55)

***

### \_maxTaskConcurrency

> **\_maxTaskConcurrency**: `undefined` \| `number`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:56](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L56)

***

### cleanMultiTaskAborter()

> **cleanMultiTaskAborter**: (`id`, `aborters`) => `void`

#### Parameters

• **id**: [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

• **aborters**: [`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:63](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L63)

***

### generateAsyncTaskId()

> **generateAsyncTaskId**: (`taskId`?, `aborters`?) => [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

#### Parameters

• **taskId?**: [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

• **aborters?**: [`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)

#### Returns

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:62](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L62)

## Accessors

### maxTaskConcurrency

> `get` **maxTaskConcurrency**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:68](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L68)

***

### semaphore

> `get` **semaphore**(): `undefined` \| [`Semaphore`](Semaphore.md)

#### Returns

`undefined` \| [`Semaphore`](Semaphore.md)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:72](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L72)

## Methods

### \_cleanMultiTaskAborter()

> **\_cleanMultiTaskAborter**(`id`, `aborters`): `void`

#### Parameters

• **id**: [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

• **aborters**: [`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:234](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L234)

***

### \_generateAsyncTaskId()

> **\_generateAsyncTaskId**(`taskId`?, `aborters`?): [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

#### Parameters

• **taskId?**: [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

• **aborters?**: [`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)

#### Returns

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:134](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L134)

***

### $cleanMultiTaskAborter()

> **$cleanMultiTaskAborter**(`id`, `aborters`): `void`

#### Parameters

• **id**: [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

• **aborters**: [`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:214](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L214)

***

### $generateAsyncTaskId()

> **$generateAsyncTaskId**(`taskId`?, `aborters`?): `undefined` \| [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

#### Parameters

• **taskId?**: [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

• **aborters?**: [`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)

#### Returns

`undefined` \| [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:147](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L147)

***

### abort()

> **abort**(`reason`?, `data`?): `void`

#### Parameters

• **reason?**: `string`

• **data?**: `any`

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:291](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L291)

***

### cleanTaskAborter()

> **cleanTaskAborter**(`aborter`): `void`

#### Parameters

• **aborter**: [`TaskAbortController`](TaskAbortController.md)

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:224](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L224)

***

### createAborter()

> **createAborter**(`params`?, `taskId`?, `raiseError`?): [`TaskAbortController`](TaskAbortController.md)

#### Parameters

• **params?**: `any`

• **taskId?**: [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

• **raiseError?**: `boolean` = `true`

#### Returns

[`TaskAbortController`](TaskAbortController.md)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:158](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L158)

***

### createTaskPromise()

> **createTaskPromise**\<`Output`\>(`runTask`, `params`, `options`?): [`TaskPromise`](../interfaces/TaskPromise.md)\<`Output`\>

#### Type Parameters

• **Output** = `any`

#### Parameters

• **runTask**

• **params**: `Record`\<`string`, `any`\>

• **options?**

• **options.raiseError?**: `boolean`

• **options.taskId?**: [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

#### Returns

[`TaskPromise`](../interfaces/TaskPromise.md)\<`Output`\>

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:238](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L238)

***

### getRunningTask()

> **getRunningTask**(`taskId`?): `undefined` \| [`TaskAbortController`](TaskAbortController.md)

#### Parameters

• **taskId?**: [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

#### Returns

`undefined` \| [`TaskAbortController`](TaskAbortController.md)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:96](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L96)

***

### getRunningTaskCount()

> **getRunningTaskCount**(): `number`

#### Returns

`number`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:119](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L119)

***

### isAborted()

> **isAborted**(`taskId`?): `boolean`

#### Parameters

• **taskId?**: [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

#### Returns

`boolean`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:81](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L81)

***

### runAsyncCancelableTask()

> **runAsyncCancelableTask**\<`Output`\>(`params`, `runTask`, `options`?): [`TaskPromise`](../interfaces/TaskPromise.md)\<`Output`\>

#### Type Parameters

• **Output** = `any`

#### Parameters

• **params**: `Record`\<`string`, `any`\> = `{}`

• **runTask**

• **options?**

• **options.raiseError?**: `boolean`

• **options.taskId?**: [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

#### Returns

[`TaskPromise`](../interfaces/TaskPromise.md)\<`Output`\>

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:276](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/cancelable-ability.ts#L276)
