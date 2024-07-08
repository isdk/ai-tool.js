[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / BaseFunc

# Interface: BaseFunc

## Hierarchy

- [`BaseFuncItem`](BaseFuncItem.md)

  ↳ **`BaseFunc`**

  ↳↳ [`ToolFunc`](../classes/ToolFunc.md)

## Table of contents

### Properties

- [name](BaseFunc.md#name)
- [params](BaseFunc.md#params)
- [result](BaseFunc.md#result)
- [scope](BaseFunc.md#scope)
- [setup](BaseFunc.md#setup)
- [tags](BaseFunc.md#tags)

### Methods

- [func](BaseFunc.md#func)

## Properties

### name

• `Optional` **name**: `string`

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[name](BaseFuncItem.md#name)

#### Defined in

[packages/ai-tool/src/tool-func.ts:21](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L21)

___

### params

• `Optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[params](BaseFuncItem.md#params)

#### Defined in

[packages/ai-tool/src/tool-func.ts:22](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L22)

___

### result

• `Optional` **result**: `string`

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[result](BaseFuncItem.md#result)

#### Defined in

[packages/ai-tool/src/tool-func.ts:23](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L23)

___

### scope

• `Optional` **scope**: `any`

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[scope](BaseFuncItem.md#scope)

#### Defined in

[packages/ai-tool/src/tool-func.ts:24](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L24)

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

[packages/ai-tool/src/tool-func.ts:26](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L26)

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[tags](BaseFuncItem.md#tags)

#### Defined in

[packages/ai-tool/src/tool-func.ts:25](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L25)

## Methods

### func

▸ **func**(`...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any` |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/tool-func.ts:34](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L34)
