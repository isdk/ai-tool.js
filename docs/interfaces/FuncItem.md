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

[packages/ai-tool/src/tool-func.ts:50](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/tool-func.ts#L50)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[name](BaseFuncItem.md#name)

#### Defined in

[packages/ai-tool/src/tool-func.ts:41](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/tool-func.ts#L41)

___

### params

• `Optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[params](BaseFuncItem.md#params)

#### Defined in

[packages/ai-tool/src/tool-func.ts:42](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/tool-func.ts#L42)

___

### result

• `Optional` **result**: `string`

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[result](BaseFuncItem.md#result)

#### Defined in

[packages/ai-tool/src/tool-func.ts:43](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/tool-func.ts#L43)

___

### scope

• `Optional` **scope**: `any`

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[scope](BaseFuncItem.md#scope)

#### Defined in

[packages/ai-tool/src/tool-func.ts:44](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/tool-func.ts#L44)

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

[packages/ai-tool/src/tool-func.ts:46](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/tool-func.ts#L46)

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[tags](BaseFuncItem.md#tags)

#### Defined in

[packages/ai-tool/src/tool-func.ts:45](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/tool-func.ts#L45)
