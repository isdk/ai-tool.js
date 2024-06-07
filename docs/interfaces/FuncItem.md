[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / FuncItem

# Interface: FuncItem

## Hierarchy

- [`BaseFuncItem`](BaseFuncItem.md)

  ↳ **`FuncItem`**

## Table of contents

### Properties

- [func](FuncItem.md#func)
- [name](FuncItem.md#name)
- [params](FuncItem.md#params)
- [result](FuncItem.md#result)
- [scope](FuncItem.md#scope)
- [setup](FuncItem.md#setup)
- [tags](FuncItem.md#tags)

## Properties

### func

• `Optional` **func**: [`TFunc`](../modules.md#tfunc)

#### Defined in

[packages/ai-tool/src/tool-func.ts:30](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L30)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[name](BaseFuncItem.md#name)

#### Defined in

[packages/ai-tool/src/tool-func.ts:21](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L21)

___

### params

• `Optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[params](BaseFuncItem.md#params)

#### Defined in

[packages/ai-tool/src/tool-func.ts:22](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L22)

___

### result

• `Optional` **result**: `string`

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[result](BaseFuncItem.md#result)

#### Defined in

[packages/ai-tool/src/tool-func.ts:23](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L23)

___

### scope

• `Optional` **scope**: `any`

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[scope](BaseFuncItem.md#scope)

#### Defined in

[packages/ai-tool/src/tool-func.ts:24](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L24)

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

[packages/ai-tool/src/tool-func.ts:26](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L26)

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[tags](BaseFuncItem.md#tags)

#### Defined in

[packages/ai-tool/src/tool-func.ts:25](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L25)
