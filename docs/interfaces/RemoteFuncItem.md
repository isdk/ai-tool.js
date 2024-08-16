[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / RemoteFuncItem

# Interface: RemoteFuncItem

## Hierarchy

- [`BaseFuncItem`](BaseFuncItem.md)

  ↳ **`RemoteFuncItem`**

  ↳↳ [`ClientFuncItem`](ClientFuncItem.md)

  ↳↳ [`ServerFuncItem`](ServerFuncItem.md)

## Table of contents

### Properties

- [action](RemoteFuncItem.md#action)
- [apiRoot](RemoteFuncItem.md#apiroot)
- [fetchOptions](RemoteFuncItem.md#fetchoptions)
- [name](RemoteFuncItem.md#name)
- [params](RemoteFuncItem.md#params)
- [result](RemoteFuncItem.md#result)
- [scope](RemoteFuncItem.md#scope)
- [setup](RemoteFuncItem.md#setup)
- [stream](RemoteFuncItem.md#stream)
- [tags](RemoteFuncItem.md#tags)

## Properties

### action

• `Optional` **action**: ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"list"`` \| ``"res"``

#### Defined in

[packages/ai-tool/src/utils/consts.ts:36](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/consts.ts#L36)

___

### apiRoot

• `Optional` **apiRoot**: `string`

#### Defined in

[packages/ai-tool/src/utils/consts.ts:35](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/consts.ts#L35)

___

### fetchOptions

• `Optional` **fetchOptions**: `any`

#### Defined in

[packages/ai-tool/src/utils/consts.ts:37](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/consts.ts#L37)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[name](BaseFuncItem.md#name)

#### Defined in

[packages/ai-tool/src/tool-func.ts:41](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/tool-func.ts#L41)

___

### params

• `Optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[params](BaseFuncItem.md#params)

#### Defined in

[packages/ai-tool/src/tool-func.ts:42](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/tool-func.ts#L42)

___

### result

• `Optional` **result**: `string`

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[result](BaseFuncItem.md#result)

#### Defined in

[packages/ai-tool/src/tool-func.ts:43](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/tool-func.ts#L43)

___

### scope

• `Optional` **scope**: `any`

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[scope](BaseFuncItem.md#scope)

#### Defined in

[packages/ai-tool/src/tool-func.ts:44](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/tool-func.ts#L44)

___

### setup

• `Optional` **setup**: (`this`: [`ToolFunc`](../classes/ToolFunc.md), `options?`: [`FuncItem`](FuncItem.md)) => `void`

#### Type declaration

▸ (`this`, `options?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`ToolFunc`](../classes/ToolFunc.md) |
| `options?` | [`FuncItem`](FuncItem.md) |

##### Returns

`void`

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[setup](BaseFuncItem.md#setup)

#### Defined in

[packages/ai-tool/src/tool-func.ts:46](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/tool-func.ts#L46)

___

### stream

• `Optional` **stream**: `boolean`

#### Defined in

[packages/ai-tool/src/utils/consts.ts:38](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/consts.ts#L38)

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[tags](BaseFuncItem.md#tags)

#### Defined in

[packages/ai-tool/src/tool-func.ts:45](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/tool-func.ts#L45)
