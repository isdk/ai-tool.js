[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / BaseFunc

# Interface: BaseFunc

## Hierarchy

- [`BaseFuncItem`](BaseFuncItem.md)

  ↳ **`BaseFunc`**

  ↳↳ [`ToolFunc`](../classes/ToolFunc.md)

## Table of contents

### Properties

- [isApi](BaseFunc.md#isapi)
- [name](BaseFunc.md#name)
- [params](BaseFunc.md#params)
- [result](BaseFunc.md#result)
- [scope](BaseFunc.md#scope)
- [setup](BaseFunc.md#setup)
- [stream](BaseFunc.md#stream)
- [tags](BaseFunc.md#tags)

### Methods

- [func](BaseFunc.md#func)

## Properties

### isApi

• `Optional` **isApi**: `boolean`

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[isApi](BaseFuncItem.md#isapi)

#### Defined in

[packages/ai-tool/src/tool-func.ts:47](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/tool-func.ts#L47)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[name](BaseFuncItem.md#name)

#### Defined in

[packages/ai-tool/src/tool-func.ts:41](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/tool-func.ts#L41)

___

### params

• `Optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[params](BaseFuncItem.md#params)

#### Defined in

[packages/ai-tool/src/tool-func.ts:42](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/tool-func.ts#L42)

___

### result

• `Optional` **result**: `string`

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[result](BaseFuncItem.md#result)

#### Defined in

[packages/ai-tool/src/tool-func.ts:43](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/tool-func.ts#L43)

___

### scope

• `Optional` **scope**: `any`

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[scope](BaseFuncItem.md#scope)

#### Defined in

[packages/ai-tool/src/tool-func.ts:44](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/tool-func.ts#L44)

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

[packages/ai-tool/src/tool-func.ts:46](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/tool-func.ts#L46)

___

### stream

• `Optional` **stream**: `boolean`

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[stream](BaseFuncItem.md#stream)

#### Defined in

[packages/ai-tool/src/tool-func.ts:48](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/tool-func.ts#L48)

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Inherited from

[BaseFuncItem](BaseFuncItem.md).[tags](BaseFuncItem.md#tags)

#### Defined in

[packages/ai-tool/src/tool-func.ts:45](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/tool-func.ts#L45)

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

[packages/ai-tool/src/tool-func.ts:56](https://github.com/isdk/ai-tool.js/blob/2f408f6a05d1e5c252765bf426ed06744998275d/src/tool-func.ts#L56)
