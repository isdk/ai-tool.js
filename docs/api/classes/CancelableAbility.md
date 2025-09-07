[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / CancelableAbility

# Class: CancelableAbility

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:74](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L74)

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:86](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L86)

***

### \_\_task\_semaphore

> **\_\_task\_semaphore**: `undefined` \| [`Semaphore`](Semaphore.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:87](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L87)

***

### \_asyncFeatures?

> `optional` **\_asyncFeatures**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:75](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L75)

***

### \_isReadyFn?

> `optional` **\_isReadyFn**: [`SemaphoreIsReadyFuncType`](../type-aliases/SemaphoreIsReadyFuncType.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:77](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L77)

***

### \_maxTaskConcurrency

> **\_maxTaskConcurrency**: `undefined` \| `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:76](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L76)

***

### cleanMultiTaskAborter()

> **cleanMultiTaskAborter**: (`id`, `aborters`) => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:84](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L84)

#### Parameters

##### id

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

##### aborters

[`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)

#### Returns

`void`

***

### generateAsyncTaskId()

> **generateAsyncTaskId**: (`taskId`?, `aborters`?) => [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:83](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L83)

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:89](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L89)

##### Returns

`undefined` \| `number`

***

### semaphore

#### Get Signature

> **get** **semaphore**(): `undefined` \| [`Semaphore`](Semaphore.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:93](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L93)

##### Returns

`undefined` \| [`Semaphore`](Semaphore.md)

## Methods

### \_cleanMultiTaskAborter()

> **\_cleanMultiTaskAborter**(`id`, `aborters`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:281](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L281)

#### Parameters

##### id

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

##### aborters

[`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)

#### Returns

`void`

***

### \_generateAsyncTaskId()

> **\_generateAsyncTaskId**(`taskId`?, `aborters`?): [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:173](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L173)

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:261](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L261)

#### Parameters

##### id

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

##### aborters

[`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)

#### Returns

`void`

***

### $generateAsyncTaskId()

> **$generateAsyncTaskId**(`taskId`?, `aborters`?): `undefined` \| [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:186](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L186)

#### Parameters

##### taskId?

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

##### aborters?

[`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)

#### Returns

`undefined` \| [`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

***

### abort()

> **abort**(`reason`?, `data`?): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:338](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L338)

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:271](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L271)

#### Parameters

##### aborter

[`TaskAbortController`](TaskAbortController.md)

#### Returns

`void`

***

### createAborter()

> **createAborter**(`params`?, `taskId`?, `raiseError`?): [`TaskAbortController`](TaskAbortController.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:197](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L197)

#### Parameters

##### params?

`any`

##### taskId?

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

##### raiseError?

`boolean` = `true`

#### Returns

[`TaskAbortController`](TaskAbortController.md)

***

### createTaskPromise()

> **createTaskPromise**\<`Output`\>(`runTask`, `params`, `options`?): [`TaskPromise`](../interfaces/TaskPromise.md)\<`Output`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:285](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L285)

#### Type Parameters

• **Output** = `any`

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

> **getRunningTask**(`taskId`?): `undefined` \| [`TaskAbortController`](TaskAbortController.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:135](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L135)

#### Parameters

##### taskId?

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

#### Returns

`undefined` \| [`TaskAbortController`](TaskAbortController.md)

***

### getRunningTaskCount()

> **getRunningTaskCount**(): `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:158](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L158)

#### Returns

`number`

***

### getSemaphore()

> **getSemaphore**(`isReadyFn`): `undefined` \| [`Semaphore`](Semaphore.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:97](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L97)

#### Parameters

##### isReadyFn

`undefined` | [`SemaphoreIsReadyFuncType`](../type-aliases/SemaphoreIsReadyFuncType.md)

#### Returns

`undefined` \| [`Semaphore`](Semaphore.md)

***

### hasAsyncFeature()

> **hasAsyncFeature**(`feature`): `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:114](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L114)

#### Parameters

##### feature

[`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

#### Returns

`boolean`

***

### isAborted()

> **isAborted**(`taskId`?): `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:120](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L120)

#### Parameters

##### taskId?

[`AsyncTaskId`](../type-aliases/AsyncTaskId.md)

#### Returns

`boolean`

***

### runAsyncCancelableTask()

> **runAsyncCancelableTask**\<`Output`\>(`params`, `runTask`, `options`?): [`TaskPromise`](../interfaces/TaskPromise.md)\<`Output`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:323](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L323)

#### Type Parameters

• **Output** = `any`

#### Parameters

##### params

`Record`\<`string`, `any`\> = `{}`

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/cancelable-ability.ts:107](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/utils/cancelable-ability.ts#L107)

#### Parameters

##### feature

[`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

#### Returns

`boolean`
