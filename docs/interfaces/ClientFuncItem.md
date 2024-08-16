[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / ClientFuncItem

# Interface: ClientFuncItem

## Hierarchy

- [`RemoteFuncItem`](RemoteFuncItem.md)

  ↳ **`ClientFuncItem`**

  ↳↳ [`ClientTools`](../classes/ClientTools.md)

## Table of contents

### Properties

- [action](ClientFuncItem.md#action)
- [apiRoot](ClientFuncItem.md#apiroot)
- [fetchOptions](ClientFuncItem.md#fetchoptions)
- [name](ClientFuncItem.md#name)
- [params](ClientFuncItem.md#params)
- [result](ClientFuncItem.md#result)
- [scope](ClientFuncItem.md#scope)
- [setup](ClientFuncItem.md#setup)
- [stream](ClientFuncItem.md#stream)
- [tags](ClientFuncItem.md#tags)

## Properties

### action

• `Optional` **action**: ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"list"`` \| ``"res"``

#### Inherited from

[RemoteFuncItem](RemoteFuncItem.md).[action](RemoteFuncItem.md#action)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:36](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/consts.ts#L36)

___

### apiRoot

• `Optional` **apiRoot**: `string`

#### Inherited from

[RemoteFuncItem](RemoteFuncItem.md).[apiRoot](RemoteFuncItem.md#apiroot)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:35](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/consts.ts#L35)

___

### fetchOptions

• `Optional` **fetchOptions**: `any`

#### Inherited from

[RemoteFuncItem](RemoteFuncItem.md).[fetchOptions](RemoteFuncItem.md#fetchoptions)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:37](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/consts.ts#L37)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[RemoteFuncItem](RemoteFuncItem.md).[name](RemoteFuncItem.md#name)

#### Defined in

[packages/ai-tool/src/tool-func.ts:41](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/tool-func.ts#L41)

___

### params

• `Optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

#### Inherited from

[RemoteFuncItem](RemoteFuncItem.md).[params](RemoteFuncItem.md#params)

#### Defined in

[packages/ai-tool/src/tool-func.ts:42](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/tool-func.ts#L42)

___

### result

• `Optional` **result**: `string`

#### Inherited from

[RemoteFuncItem](RemoteFuncItem.md).[result](RemoteFuncItem.md#result)

#### Defined in

[packages/ai-tool/src/tool-func.ts:43](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/tool-func.ts#L43)

___

### scope

• `Optional` **scope**: `any`

#### Inherited from

[RemoteFuncItem](RemoteFuncItem.md).[scope](RemoteFuncItem.md#scope)

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

[RemoteFuncItem](RemoteFuncItem.md).[setup](RemoteFuncItem.md#setup)

#### Defined in

[packages/ai-tool/src/tool-func.ts:46](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/tool-func.ts#L46)

___

### stream

• `Optional` **stream**: `boolean`

#### Inherited from

[RemoteFuncItem](RemoteFuncItem.md).[stream](RemoteFuncItem.md#stream)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:38](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/consts.ts#L38)

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Inherited from

[RemoteFuncItem](RemoteFuncItem.md).[tags](RemoteFuncItem.md#tags)

#### Defined in

[packages/ai-tool/src/tool-func.ts:45](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/tool-func.ts#L45)
