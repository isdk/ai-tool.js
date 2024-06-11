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

[packages/ai-tool/src/tool-func.ts:21](https://github.com/isdk/ai-tool.js/blob/c377a1408daee78a2484142b6d99ef7fbbec7c7c/src/tool-func.ts#L21)

___

### params

• `Optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

#### Defined in

[packages/ai-tool/src/tool-func.ts:22](https://github.com/isdk/ai-tool.js/blob/c377a1408daee78a2484142b6d99ef7fbbec7c7c/src/tool-func.ts#L22)

___

### result

• `Optional` **result**: `string`

#### Defined in

[packages/ai-tool/src/tool-func.ts:23](https://github.com/isdk/ai-tool.js/blob/c377a1408daee78a2484142b6d99ef7fbbec7c7c/src/tool-func.ts#L23)

___

### scope

• `Optional` **scope**: `any`

#### Defined in

[packages/ai-tool/src/tool-func.ts:24](https://github.com/isdk/ai-tool.js/blob/c377a1408daee78a2484142b6d99ef7fbbec7c7c/src/tool-func.ts#L24)

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

[packages/ai-tool/src/tool-func.ts:26](https://github.com/isdk/ai-tool.js/blob/c377a1408daee78a2484142b6d99ef7fbbec7c7c/src/tool-func.ts#L26)

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Defined in

[packages/ai-tool/src/tool-func.ts:25](https://github.com/isdk/ai-tool.js/blob/c377a1408daee78a2484142b6d99ef7fbbec7c7c/src/tool-func.ts#L25)
