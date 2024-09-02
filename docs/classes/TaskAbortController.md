[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / TaskAbortController

# Class: TaskAbortController

## Hierarchy

- `AbortController`

  ↳ **`TaskAbortController`**

## Table of contents

### Constructors

- [constructor](TaskAbortController.md#constructor)

### Properties

- [id](TaskAbortController.md#id)
- [parent](TaskAbortController.md#parent)
- [signal](TaskAbortController.md#signal)
- [streamController](TaskAbortController.md#streamcontroller)
- [timeoutId](TaskAbortController.md#timeoutid)

### Methods

- [abort](TaskAbortController.md#abort)
- [throwRejected](TaskAbortController.md#throwrejected)

## Constructors

### constructor

• **new TaskAbortController**(`parent`): [`TaskAbortController`](TaskAbortController.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`CancelableAbility`](CancelableAbility.md) |

#### Returns

[`TaskAbortController`](TaskAbortController.md)

#### Overrides

AbortController.constructor

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:21](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/utils/cancelable-ability.ts#L21)

## Properties

### id

• `Optional` **id**: [`AsyncTaskId`](../modules.md#asynctaskid)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:16](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/utils/cancelable-ability.ts#L16)

___

### parent

• **parent**: [`CancelableAbility`](CancelableAbility.md)

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:19](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/utils/cancelable-ability.ts#L19)

___

### signal

• `Readonly` **signal**: `AbortSignal`

Returns the AbortSignal object associated with this object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortController/signal)

#### Inherited from

AbortController.signal

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.dom.d.ts:2295

node_modules/.pnpm/@types+node@20.14.2/node_modules/@types/node/globals.d.ts:69

___

### streamController

• `Optional` **streamController**: `ReadableStreamDefaultController`\<`any`\>

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:18](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/utils/cancelable-ability.ts#L18)

___

### timeoutId

• `Optional` **timeoutId**: `any`

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:17](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/utils/cancelable-ability.ts#L17)

## Methods

### abort

▸ **abort**(`reason?`, `data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `string` \| `Error` \| [`CommonError`](CommonError.md) |
| `data?` | `any` |

#### Returns

`void`

#### Overrides

AbortController.abort

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:26](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/utils/cancelable-ability.ts#L26)

___

### throwRejected

▸ **throwRejected**(`alreadyRejected?`): `undefined` \| ``true``

#### Parameters

| Name | Type |
| :------ | :------ |
| `alreadyRejected?` | `boolean` |

#### Returns

`undefined` \| ``true``

#### Defined in

[packages/ai-tool/src/utils/cancelable-ability.ts:35](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/utils/cancelable-ability.ts#L35)
