[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / CancelableAbility

# Class: CancelableAbility

## Indexable

▪ [name: `string`]: `any`

## Table of contents

### Constructors

- [constructor](CancelableAbility.md#constructor)

### Properties

- [\_\_task\_aborter](CancelableAbility.md#__task_aborter)
- [\_\_task\_semaphore](CancelableAbility.md#__task_semaphore)
- [\_asyncFeatures](CancelableAbility.md#_asyncfeatures)
- [\_maxTaskConcurrency](CancelableAbility.md#_maxtaskconcurrency)
- [cleanMultiTaskAborter](CancelableAbility.md#cleanmultitaskaborter)
- [generateAsyncTaskId](CancelableAbility.md#generateasynctaskid)

### Accessors

- [maxTaskConcurrency](CancelableAbility.md#maxtaskconcurrency)
- [semaphore](CancelableAbility.md#semaphore)

### Methods

- [$cleanMultiTaskAborter](CancelableAbility.md#$cleanmultitaskaborter)
- [$generateAsyncTaskId](CancelableAbility.md#$generateasynctaskid)
- [\_cleanMultiTaskAborter](CancelableAbility.md#_cleanmultitaskaborter)
- [\_generateAsyncTaskId](CancelableAbility.md#_generateasynctaskid)
- [abort](CancelableAbility.md#abort)
- [cleanTaskAborter](CancelableAbility.md#cleantaskaborter)
- [createAborter](CancelableAbility.md#createaborter)
- [createTaskPromise](CancelableAbility.md#createtaskpromise)
- [getRunningTask](CancelableAbility.md#getrunningtask)
- [getRunningTaskCount](CancelableAbility.md#getrunningtaskcount)
- [isAborted](CancelableAbility.md#isaborted)
- [runAsyncCancelableTask](CancelableAbility.md#runasynccancelabletask)

## Constructors

### constructor

• **new CancelableAbility**(): [`CancelableAbility`](CancelableAbility.md)

#### Returns

[`CancelableAbility`](CancelableAbility.md)

## Properties

### \_\_task\_aborter

• **\_\_task\_aborter**: `undefined` \| [`TaskAbortController`](TaskAbortController.md) \| [`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:65](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/cancelable-ability.ts#L65)

___

### \_\_task\_semaphore

• **\_\_task\_semaphore**: `undefined` \| [`Semaphore`](Semaphore.md)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:66](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/cancelable-ability.ts#L66)

___

### \_asyncFeatures

• `Optional` **\_asyncFeatures**: `number`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:55](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/cancelable-ability.ts#L55)

___

### \_maxTaskConcurrency

• **\_maxTaskConcurrency**: `undefined` \| `number`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:56](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/cancelable-ability.ts#L56)

___

### cleanMultiTaskAborter

• **cleanMultiTaskAborter**: (`id`: [`AsyncTaskId`](../modules.md#asynctaskid), `aborters`: [`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)) => `void`

#### Type declaration

▸ (`id`, `aborters`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`AsyncTaskId`](../modules.md#asynctaskid) |
| `aborters` | [`TaskAbortControllers`](../interfaces/TaskAbortControllers.md) |

##### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:63](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/cancelable-ability.ts#L63)

___

### generateAsyncTaskId

• **generateAsyncTaskId**: (`taskId?`: [`AsyncTaskId`](../modules.md#asynctaskid), `aborters?`: [`TaskAbortControllers`](../interfaces/TaskAbortControllers.md)) => [`AsyncTaskId`](../modules.md#asynctaskid)

#### Type declaration

▸ (`taskId?`, `aborters?`): [`AsyncTaskId`](../modules.md#asynctaskid)

##### Parameters

| Name | Type |
| :------ | :------ |
| `taskId?` | [`AsyncTaskId`](../modules.md#asynctaskid) |
| `aborters?` | [`TaskAbortControllers`](../interfaces/TaskAbortControllers.md) |

##### Returns

[`AsyncTaskId`](../modules.md#asynctaskid)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:62](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/cancelable-ability.ts#L62)

## Accessors

### maxTaskConcurrency

• `get` **maxTaskConcurrency**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:68](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/cancelable-ability.ts#L68)

___

### semaphore

• `get` **semaphore**(): `undefined` \| [`Semaphore`](Semaphore.md)

#### Returns

`undefined` \| [`Semaphore`](Semaphore.md)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:72](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/cancelable-ability.ts#L72)

## Methods

### $cleanMultiTaskAborter

▸ **$cleanMultiTaskAborter**(`id`, `aborters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`AsyncTaskId`](../modules.md#asynctaskid) |
| `aborters` | [`TaskAbortControllers`](../interfaces/TaskAbortControllers.md) |

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:214](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/cancelable-ability.ts#L214)

___

### $generateAsyncTaskId

▸ **$generateAsyncTaskId**(`taskId?`, `aborters?`): `undefined` \| [`AsyncTaskId`](../modules.md#asynctaskid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId?` | [`AsyncTaskId`](../modules.md#asynctaskid) |
| `aborters?` | [`TaskAbortControllers`](../interfaces/TaskAbortControllers.md) |

#### Returns

`undefined` \| [`AsyncTaskId`](../modules.md#asynctaskid)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:147](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/cancelable-ability.ts#L147)

___

### \_cleanMultiTaskAborter

▸ **_cleanMultiTaskAborter**(`id`, `aborters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`AsyncTaskId`](../modules.md#asynctaskid) |
| `aborters` | [`TaskAbortControllers`](../interfaces/TaskAbortControllers.md) |

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:234](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/cancelable-ability.ts#L234)

___

### \_generateAsyncTaskId

▸ **_generateAsyncTaskId**(`taskId?`, `aborters?`): [`AsyncTaskId`](../modules.md#asynctaskid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId?` | [`AsyncTaskId`](../modules.md#asynctaskid) |
| `aborters?` | [`TaskAbortControllers`](../interfaces/TaskAbortControllers.md) |

#### Returns

[`AsyncTaskId`](../modules.md#asynctaskid)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:134](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/cancelable-ability.ts#L134)

___

### abort

▸ **abort**(`reason?`, `data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |
| `data?` | `any` |

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:291](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/cancelable-ability.ts#L291)

___

### cleanTaskAborter

▸ **cleanTaskAborter**(`aborter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aborter` | [`TaskAbortController`](TaskAbortController.md) |

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:224](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/cancelable-ability.ts#L224)

___

### createAborter

▸ **createAborter**(`params?`, `taskId?`, `raiseError?`): [`TaskAbortController`](TaskAbortController.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `params?` | `any` | `undefined` |
| `taskId?` | [`AsyncTaskId`](../modules.md#asynctaskid) | `undefined` |
| `raiseError` | `boolean` | `true` |

#### Returns

[`TaskAbortController`](TaskAbortController.md)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:158](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/cancelable-ability.ts#L158)

___

### createTaskPromise

▸ **createTaskPromise**\<`Output`\>(`runTask`, `params`, `options?`): [`TaskPromise`](../interfaces/TaskPromise.md)\<`Output`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Output` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `runTask` | (`params`: `Record`\<`string`, `any`\>, `aborter`: [`TaskAbortController`](TaskAbortController.md)) => `Promise`\<`Output`\> |
| `params` | `Record`\<`string`, `any`\> |
| `options?` | `Object` |
| `options.raiseError?` | `boolean` |
| `options.taskId?` | [`AsyncTaskId`](../modules.md#asynctaskid) |

#### Returns

[`TaskPromise`](../interfaces/TaskPromise.md)\<`Output`\>

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:238](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/cancelable-ability.ts#L238)

___

### getRunningTask

▸ **getRunningTask**(`taskId?`): `undefined` \| [`TaskAbortController`](TaskAbortController.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId?` | [`AsyncTaskId`](../modules.md#asynctaskid) |

#### Returns

`undefined` \| [`TaskAbortController`](TaskAbortController.md)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:96](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/cancelable-ability.ts#L96)

___

### getRunningTaskCount

▸ **getRunningTaskCount**(): `number`

#### Returns

`number`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:119](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/cancelable-ability.ts#L119)

___

### isAborted

▸ **isAborted**(`taskId?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId?` | [`AsyncTaskId`](../modules.md#asynctaskid) |

#### Returns

`boolean`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:81](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/cancelable-ability.ts#L81)

___

### runAsyncCancelableTask

▸ **runAsyncCancelableTask**\<`Output`\>(`params?`, `runTask`, `options?`): [`TaskPromise`](../interfaces/TaskPromise.md)\<`Output`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Output` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Record`\<`string`, `any`\> |
| `runTask` | (`params`: `Record`\<`string`, `any`\>, `aborter`: [`TaskAbortController`](TaskAbortController.md)) => `Promise`\<`Output`\> |
| `options?` | `Object` |
| `options.raiseError?` | `boolean` |
| `options.taskId?` | [`AsyncTaskId`](../modules.md#asynctaskid) |

#### Returns

[`TaskPromise`](../interfaces/TaskPromise.md)\<`Output`\>

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:276](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/cancelable-ability.ts#L276)
