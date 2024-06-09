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

[packages/ai-tool/src/funcs/event-client.ts:8](https://github.com/isdk/ai-tool.js/blob/7204de5b4de6ebcdc7ec35b59d21cafca7d13309/src/funcs/event-client.ts#L8)

___

### data

• `Optional` **data**: `any`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:7](https://github.com/isdk/ai-tool.js/blob/7204de5b4de6ebcdc7ec35b59d21cafca7d13309/src/funcs/event-client.ts#L7)

___

### event

• `Optional` **event**: `string` \| `string`[]

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:6](https://github.com/isdk/ai-tool.js/blob/7204de5b4de6ebcdc7ec35b59d21cafca7d13309/src/funcs/event-client.ts#L6)

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

[packages/ai-tool/src/funcs/event-client.ts:9](https://github.com/isdk/ai-tool.js/blob/7204de5b4de6ebcdc7ec35b59d21cafca7d13309/src/funcs/event-client.ts#L9)
