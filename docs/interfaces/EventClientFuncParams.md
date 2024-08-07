[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / EventClientFuncParams

# Interface: EventClientFuncParams

## Table of contents

### Properties

- [act](EventClientFuncParams.md#act)
- [data](EventClientFuncParams.md#data)
- [event](EventClientFuncParams.md#event)
- [listener](EventClientFuncParams.md#listener)

## Properties

### act

• `Optional` **act**: ``"sub"`` \| ``"pub"`` \| ``"unsub"`` \| ``"init"``

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:8](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/funcs/event-client.ts#L8)

___

### data

• `Optional` **data**: `any`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:7](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/funcs/event-client.ts#L7)

___

### event

• `Optional` **event**: `string` \| `string`[]

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:6](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/funcs/event-client.ts#L6)

___

### listener

• `Optional` **listener**: (...`args`: `any`[]) => `void`

#### Type declaration

▸ (`...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:9](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/funcs/event-client.ts#L9)
