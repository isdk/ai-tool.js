[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / CancelableAbility

# Class: CancelableAbility

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:77

## Indexable

\[`name`: `string`\]: `any`

## Constructors

### Constructor

> **new CancelableAbility**(): `CancelableAbility`

#### Returns

`CancelableAbility`

## Properties

### \_\_task\_aborter

> **\_\_task\_aborter**: `undefined` \| [`TaskAbortControllers`](../interfaces/TaskAbortControllers.md) \| [`TaskAbortController`](TaskAbortController.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:86

***

### \_\_task\_semaphore

> **\_\_task\_semaphore**: `undefined` \| [`Semaphore`](Semaphore.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:87

***

### \_asyncFeatures?

> `optional` **\_asyncFeatures**: `number`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:78

***

### \_isReadyFn?

> `optional` **\_isReadyFn**: [`SemaphoreIsReadyFuncType`](../type-aliases/SemaphoreIsReadyFuncType.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:80

***

### \_maxTaskConcurrency

> **\_maxTaskConcurrency**: `undefined` \| `number`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:79

***

### cleanMultiTaskAborter()

> **cleanMultiTaskAborter**: (`id`, `aborters`) => `void`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:85

#### Parameters

##### id

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

##### aborters

[`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)

#### Returns

`void`

***

### generateAsyncTaskId()

> **generateAsyncTaskId**: (`taskId?`, `aborters?`) => [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:84

#### Parameters

##### taskId?

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

##### aborters?

[`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)

#### Returns

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

## Accessors

### maxTaskConcurrency

#### Get Signature

> **get** **maxTaskConcurrency**(): `undefined` \| `number`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:88

##### Returns

`undefined` \| `number`

***

### semaphore

#### Get Signature

> **get** **semaphore**(): `undefined` \| [`Semaphore`](Semaphore.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:89

##### Returns

`undefined` \| [`Semaphore`](Semaphore.md)

## Methods

### \_cleanMultiTaskAborter()

> **\_cleanMultiTaskAborter**(`id`, `aborters`): `void`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:101

#### Parameters

##### id

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

##### aborters

[`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)

#### Returns

`void`

***

### \_generateAsyncTaskId()

> **\_generateAsyncTaskId**(`taskId?`, `aborters?`): [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:96

#### Parameters

##### taskId?

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

##### aborters?

[`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)

#### Returns

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

***

### $cleanMultiTaskAborter()

> **$cleanMultiTaskAborter**(`id`, `aborters`): `void`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:99

#### Parameters

##### id

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

##### aborters

[`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)

#### Returns

`void`

***

### $generateAsyncTaskId()

> **$generateAsyncTaskId**(`taskId?`, `aborters?`): `undefined` \| [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:97

#### Parameters

##### taskId?

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

##### aborters?

[`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)

#### Returns

`undefined` \| [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

***

### abort()

> **abort**(`reason?`, `data?`): `void`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:111

#### Parameters

##### reason?

`string`

##### data?

`any`

#### Returns

`void`

***

### cleanTaskAborter()

> **cleanTaskAborter**(`aborter`): `void`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:100

#### Parameters

##### aborter

[`TaskAbortController`](TaskAbortController.md)

#### Returns

`void`

***

### createAborter()

> **createAborter**(`params?`, `taskId?`, `raiseError?`): [`TaskAbortController`](TaskAbortController.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:98

#### Parameters

##### params?

`any`

##### taskId?

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

##### raiseError?

`boolean`

#### Returns

[`TaskAbortController`](TaskAbortController.md)

***

### createTaskPromise()

> **createTaskPromise**\<`Output`\>(`runTask`, `params`, `options?`): [`TaskPromise`](../interfaces/TaskPromise.md)\<`Output`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:102

#### Type Parameters

##### Output

`Output` = `any`

#### Parameters

##### runTask

(`params`, `aborter`) => `Promise`\<`Output`\>

##### params

`Record`\<`string`, `any`\>

##### options?

###### raiseError?

`boolean`

###### taskId?

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

#### Returns

[`TaskPromise`](../interfaces/TaskPromise.md)\<`Output`\>

***

### getRunningTask()

> **getRunningTask**(`taskId?`): `undefined` \| [`TaskAbortController`](TaskAbortController.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:94

#### Parameters

##### taskId?

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

#### Returns

`undefined` \| [`TaskAbortController`](TaskAbortController.md)

***

### getRunningTaskCount()

> **getRunningTaskCount**(): `number`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:95

#### Returns

`number`

***

### getSemaphore()

> **getSemaphore**(`isReadyFn?`): `undefined` \| [`Semaphore`](Semaphore.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:90

#### Parameters

##### isReadyFn?

[`SemaphoreIsReadyFuncType`](../type-aliases/SemaphoreIsReadyFuncType.md)

#### Returns

`undefined` \| [`Semaphore`](Semaphore.md)

***

### hasAsyncFeature()

> **hasAsyncFeature**(`feature`): `boolean`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:92

#### Parameters

##### feature

[`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

#### Returns

`boolean`

***

### isAborted()

> **isAborted**(`taskId?`): `boolean`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:93

#### Parameters

##### taskId?

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

#### Returns

`boolean`

***

### runAsyncCancelableTask()

> **runAsyncCancelableTask**\<`Output`\>(`params`, `runTask`, `options?`): [`TaskPromise`](../interfaces/TaskPromise.md)\<`Output`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:106

#### Type Parameters

##### Output

`Output` = `any`

#### Parameters

##### params

`undefined` | `Record`\<`string`, `any`\>

##### runTask

(`params`, `aborter`) => `Promise`\<`Output`\>

##### options?

###### isReadyFn?

[`SemaphoreIsReadyFuncType`](../type-aliases/SemaphoreIsReadyFuncType.md)

###### raiseError?

`boolean`

###### taskId?

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

#### Returns

[`TaskPromise`](../interfaces/TaskPromise.md)\<`Output`\>

***

### hasAsyncFeature()

> `static` **hasAsyncFeature**(`feature`): `boolean`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:91

#### Parameters

##### feature

[`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

#### Returns

`boolean`
