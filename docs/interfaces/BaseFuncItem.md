[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / BaseFuncItem

# Interface: BaseFuncItem

## Hierarchy

- **`BaseFuncItem`**

  ↳ [`RemoteFuncItem`](RemoteFuncItem.md)

  ↳ [`FuncItem`](FuncItem.md)

  ↳ [`BaseFunc`](BaseFunc.md)

## Table of contents

### Properties

- [name](BaseFuncItem.md#name)
- [params](BaseFuncItem.md#params)
- [result](BaseFuncItem.md#result)
- [scope](BaseFuncItem.md#scope)
- [setup](BaseFuncItem.md#setup)
- [tags](BaseFuncItem.md#tags)

## Properties

### name

• `Optional` **name**: `string`

#### Defined in

[packages/ai-tool/src/tool-func.ts:41](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/tool-func.ts#L41)

___

### params

• `Optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

#### Defined in

[packages/ai-tool/src/tool-func.ts:42](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/tool-func.ts#L42)

___

### result

• `Optional` **result**: `string`

#### Defined in

[packages/ai-tool/src/tool-func.ts:43](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/tool-func.ts#L43)

___

### scope

• `Optional` **scope**: `any`

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

#### Defined in

[packages/ai-tool/src/tool-func.ts:46](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/tool-func.ts#L46)

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Defined in

[packages/ai-tool/src/tool-func.ts:45](https://github.com/isdk/ai-tool.js/blob/787e914a1f5dab2d24312399a6f123f0e8360403/src/tool-func.ts#L45)
