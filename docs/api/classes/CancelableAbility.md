[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / CancelableAbility

# Class: CancelableAbility

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1028

## Indexable

\[`name`: `string`\]: `any`

## Constructors

### Constructor

> **new CancelableAbility**(): `CancelableAbility`

#### Returns

`CancelableAbility`

## Properties

### \_\_task\_aborter

> **\_\_task\_aborter**: [`TaskAbortControllers`](../interfaces/TaskAbortControllers.md) \| [`TaskAbortController`](TaskAbortController.md) \| `undefined`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1037

***

### \_\_task\_semaphore

> **\_\_task\_semaphore**: [`Semaphore`](Semaphore.md) \| `undefined`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1038

***

### \_asyncFeatures?

> `optional` **\_asyncFeatures**: `number`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1029

***

### \_isReadyFn?

> `optional` **\_isReadyFn**: [`SemaphoreIsReadyFuncType`](../type-aliases/SemaphoreIsReadyFuncType.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1031

***

### \_maxTaskConcurrency

> **\_maxTaskConcurrency**: `number` \| `undefined`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1030

***

### cleanMultiTaskAborter()

> **cleanMultiTaskAborter**: (`id`, `aborters`) => `void`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1036

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

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1035

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

> **get** **maxTaskConcurrency**(): `number` \| `undefined`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1039

##### Returns

`number` \| `undefined`

***

### semaphore

#### Get Signature

> **get** **semaphore**(): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1040

##### Returns

`any`

## Methods

### \_cleanMultiTaskAborter()

> **\_cleanMultiTaskAborter**(`id`, `aborters`): `void`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1052

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

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1047

#### Parameters

##### taskId?

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

##### aborters?

[`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)

#### Returns

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

***

### $\_prepareContext()

> **$\_prepareContext**(`params?`, `ctx?`): [`ToolFuncContext`](../interfaces/ToolFuncContext.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1070

Method overloading for ToolFunc._prepareContext

#### Parameters

##### params?

`any`

##### ctx?

[`ToolFuncContext`](../interfaces/ToolFuncContext.md)

#### Returns

[`ToolFuncContext`](../interfaces/ToolFuncContext.md)

***

### $\_shouldIsolate()

> **$\_shouldIsolate**(`params?`, `ctx?`): `boolean`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1066

Method overloading for ToolFunc._shouldIsolate

#### Parameters

##### params?

`any`

##### ctx?

[`ToolFuncContext`](../interfaces/ToolFuncContext.md)

#### Returns

`boolean`

***

### $cleanMultiTaskAborter()

> **$cleanMultiTaskAborter**(`id`, `aborters`): `void`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1050

#### Parameters

##### id

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

##### aborters

[`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)

#### Returns

`void`

***

### $generateAsyncTaskId()

> **$generateAsyncTaskId**(`taskId?`, `aborters?`): [`AsyncTaskId`](../type-aliases/AsyncTaskId.md) \| `undefined`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1048

#### Parameters

##### taskId?

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

##### aborters?

[`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)

#### Returns

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md) \| `undefined`

***

### abort()

> **abort**(`reason?`, `data?`): `void`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1062

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

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1051

#### Parameters

##### aborter

[`TaskAbortController`](TaskAbortController.md)

#### Returns

`void`

***

### createAborter()

> **createAborter**(`params?`, `taskId?`, `raiseError?`, `ctx?`): [`TaskAbortController`](TaskAbortController.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1049

#### Parameters

##### params?

`any`

##### taskId?

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

##### raiseError?

`boolean`

##### ctx?

[`ToolFuncContext`](../interfaces/ToolFuncContext.md)

#### Returns

[`TaskAbortController`](TaskAbortController.md)

***

### createTaskPromise()

> **createTaskPromise**\<`Output`\>(`runTask`, `params`, `options?`): [`TaskPromise`](../interfaces/TaskPromise.md)\<`Output`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1053

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

> **getRunningTask**(`taskId?`): [`TaskAbortController`](TaskAbortController.md) \| `undefined`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1045

#### Parameters

##### taskId?

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

#### Returns

[`TaskAbortController`](TaskAbortController.md) \| `undefined`

***

### getRunningTaskCount()

> **getRunningTaskCount**(): `number`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1046

#### Returns

`number`

***

### getSemaphore()

> **getSemaphore**(`isReadyFn?`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1041

#### Parameters

##### isReadyFn?

[`SemaphoreIsReadyFuncType`](../type-aliases/SemaphoreIsReadyFuncType.md)

#### Returns

`any`

***

### hasAsyncFeature()

> **hasAsyncFeature**(`feature`): `boolean`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1043

#### Parameters

##### feature

[`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

#### Returns

`boolean`

***

### isAborted()

> **isAborted**(`taskId?`): `boolean`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1044

#### Parameters

##### taskId?

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

#### Returns

`boolean`

***

### runAsyncCancelableTask()

> **runAsyncCancelableTask**\<`Output`\>(`params`, `runTask`, `options?`): [`TaskPromise`](../interfaces/TaskPromise.md)\<`Output`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1057

#### Type Parameters

##### Output

`Output` = `any`

#### Parameters

##### params

`Record`\<`string`, `any`\> | `undefined`

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

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:1042

#### Parameters

##### feature

[`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

#### Returns

`boolean`
