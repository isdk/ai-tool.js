[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / BaseFuncItem

# Interface: BaseFuncItem

## Hierarchy

- **`BaseFuncItem`**

  ↳ [`RemoteFuncItem`](RemoteFuncItem.md)

  ↳ [`FuncItem`](FuncItem.md)

  ↳ [`BaseFunc`](BaseFunc.md)

## Table of contents

### Properties

- [isApi](BaseFuncItem.md#isapi)
- [name](BaseFuncItem.md#name)
- [params](BaseFuncItem.md#params)
- [result](BaseFuncItem.md#result)
- [scope](BaseFuncItem.md#scope)
- [setup](BaseFuncItem.md#setup)
- [stream](BaseFuncItem.md#stream)
- [tags](BaseFuncItem.md#tags)

## Properties

### isApi

• `Optional` **isApi**: `boolean`

#### Defined in

[packages/ai-tool/src/tool-func.ts:47](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L47)

___

### name

• `Optional` **name**: `string`

#### Defined in

[packages/ai-tool/src/tool-func.ts:41](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L41)

___

### params

• `Optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

#### Defined in

[packages/ai-tool/src/tool-func.ts:42](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L42)

___

### result

• `Optional` **result**: `string`

#### Defined in

[packages/ai-tool/src/tool-func.ts:43](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L43)

___

### scope

• `Optional` **scope**: `any`

#### Defined in

[packages/ai-tool/src/tool-func.ts:44](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L44)

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

[packages/ai-tool/src/tool-func.ts:46](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L46)

___

### stream

• `Optional` **stream**: `boolean`

#### Defined in

[packages/ai-tool/src/tool-func.ts:48](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L48)

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Defined in

[packages/ai-tool/src/tool-func.ts:45](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L45)
