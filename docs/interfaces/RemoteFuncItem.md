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

[packages/ai-tool/src/utils/consts.ts:36](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/consts.ts#L36)

___

### apiRoot

• `Optional` **apiRoot**: `string`

#### Defined in

[packages/ai-tool/src/utils/consts.ts:35](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/consts.ts#L35)

___

### fetchOptions

• `Optional` **fetchOptions**: `any`

#### Defined in

[packages/ai-tool/src/utils/consts.ts:37](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/consts.ts#L37)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[name](BaseFuncItem.md#name)

#### Defined in

[packages/ai-tool/src/tool-func.ts:21](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/tool-func.ts#L21)

___

### params

• `Optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[params](BaseFuncItem.md#params)

#### Defined in

[packages/ai-tool/src/tool-func.ts:22](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/tool-func.ts#L22)

___

### result

• `Optional` **result**: `string`

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[result](BaseFuncItem.md#result)

#### Defined in

[packages/ai-tool/src/tool-func.ts:23](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/tool-func.ts#L23)

___

### scope

• `Optional` **scope**: `any`

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[scope](BaseFuncItem.md#scope)

#### Defined in

[packages/ai-tool/src/tool-func.ts:24](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/tool-func.ts#L24)

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

[packages/ai-tool/src/tool-func.ts:26](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/tool-func.ts#L26)

___

### stream

• `Optional` **stream**: `boolean`

#### Defined in

[packages/ai-tool/src/utils/consts.ts:38](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/utils/consts.ts#L38)

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[tags](BaseFuncItem.md#tags)

#### Defined in

[packages/ai-tool/src/tool-func.ts:25](https://github.com/isdk/ai-tool.js/blob/0f8a4d4a5fd2f372072a81ed0b281e2d8d5796f1/src/tool-func.ts#L25)
