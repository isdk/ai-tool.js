[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / HFEnvironment

# Class: HFEnvironment

## Hierarchy

- `Environment`

  ↳ **`HFEnvironment`**

## Table of contents

### Constructors

- [constructor](HFEnvironment.md#constructor)

### Properties

- [parent](HFEnvironment.md#parent)
- [tests](HFEnvironment.md#tests)
- [variables](HFEnvironment.md#variables)

### Methods

- [assign](HFEnvironment.md#assign)
- [clear](HFEnvironment.md#clear)
- [lookupVariable](HFEnvironment.md#lookupvariable)
- [set](HFEnvironment.md#set)
- [setVariable](HFEnvironment.md#setvariable)

## Constructors

### constructor

• **new HFEnvironment**(`parent?`): [`HFEnvironment`](HFEnvironment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent?` | [`HFEnvironment`](HFEnvironment.md) |

#### Returns

[`HFEnvironment`](HFEnvironment.md)

#### Overrides

Environment.constructor

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:22](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/utils/prompt/template/jinja/src/index.ts#L22)

## Properties

### parent

• `Optional` **parent**: [`HFEnvironment`](HFEnvironment.md)

#### Inherited from

Environment.parent

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:22](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/utils/prompt/template/jinja/src/index.ts#L22)

___

### tests

• **tests**: `Map`\<`string`, (...`value`: `AnyRuntimeValue`[]) => `boolean`\>

The tests available in this environment.

#### Inherited from

Environment.tests

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:276](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/utils/prompt/template/jinja/src/runtime.ts#L276)

___

### variables

• **variables**: `Map`\<`string`, `AnyRuntimeValue`\>

The variables declared in this environment.

#### Inherited from

Environment.variables

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:258](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/utils/prompt/template/jinja/src/runtime.ts#L258)

## Methods

### assign

▸ **assign**(`items`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `Record`\<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:26](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/utils/prompt/template/jinja/src/index.ts#L26)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:32](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/utils/prompt/template/jinja/src/index.ts#L32)

___

### lookupVariable

▸ **lookupVariable**(`name`): `AnyRuntimeValue`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`AnyRuntimeValue`

#### Inherited from

Environment.lookupVariable

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:374](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/utils/prompt/template/jinja/src/runtime.ts#L374)

___

### set

▸ **set**(`name`, `value`): `AnyRuntimeValue`

Set the value of a variable in the current environment.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `unknown` |

#### Returns

`AnyRuntimeValue`

#### Inherited from

Environment.set

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:329](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/utils/prompt/template/jinja/src/runtime.ts#L329)

___

### setVariable

▸ **setVariable**(`name`, `value`): `AnyRuntimeValue`

Set variable in the current scope.
See https://jinja.palletsprojects.com/en/3.0.x/templates/#assignments for more information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `AnyRuntimeValue` |

#### Returns

`AnyRuntimeValue`

#### Inherited from

Environment.setVariable

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:351](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/utils/prompt/template/jinja/src/runtime.ts#L351)
