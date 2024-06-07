[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / HFInterpreter

# Class: HFInterpreter

## Table of contents

### Constructors

- [constructor](HFInterpreter.md#constructor)

### Properties

- [global](HFInterpreter.md#global)

### Methods

- [evalProgram](HFInterpreter.md#evalprogram)
- [evaluate](HFInterpreter.md#evaluate)
- [evaluateBinaryExpression](HFInterpreter.md#evaluatebinaryexpression)
- [evaluateBlock](HFInterpreter.md#evaluateblock)
- [evaluateCallExpression](HFInterpreter.md#evaluatecallexpression)
- [evaluateFilterExpression](HFInterpreter.md#evaluatefilterexpression)
- [evaluateFor](HFInterpreter.md#evaluatefor)
- [evaluateIdentifier](HFInterpreter.md#evaluateidentifier)
- [evaluateIf](HFInterpreter.md#evaluateif)
- [evaluateMemberExpression](HFInterpreter.md#evaluatememberexpression)
- [evaluateSet](HFInterpreter.md#evaluateset)
- [evaluateSliceExpression](HFInterpreter.md#evaluatesliceexpression)
- [evaluateTestExpression](HFInterpreter.md#evaluatetestexpression)
- [evaluateUnaryExpression](HFInterpreter.md#evaluateunaryexpression)
- [run](HFInterpreter.md#run)

## Constructors

### constructor

• **new HFInterpreter**(`env?`): [`HFInterpreter`](HFInterpreter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `env?` | `Environment` |

#### Returns

[`HFInterpreter`](HFInterpreter.md)

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:375](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/prompt/template/jinja/src/runtime.ts#L375)

## Properties

### global

• **global**: `Environment`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:373](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/prompt/template/jinja/src/runtime.ts#L373)

## Methods

### evalProgram

▸ **evalProgram**(`program`, `environment`): `StringValue`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `Program` |
| `environment` | `Environment` |

#### Returns

`StringValue`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:673](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/prompt/template/jinja/src/runtime.ts#L673)

___

### evaluate

▸ **evaluate**(`statement`, `environment`): `AnyRuntimeValue`

#### Parameters

| Name | Type |
| :------ | :------ |
| `statement` | `undefined` \| `Statement` |
| `environment` | `Environment` |

#### Returns

`AnyRuntimeValue`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:881](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/prompt/template/jinja/src/runtime.ts#L881)

___

### evaluateBinaryExpression

▸ **evaluateBinaryExpression**(`node`, `environment`): `AnyRuntimeValue`

Evaluates expressions following the binary operation type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `BinaryExpression` |
| `environment` | `Environment` |

#### Returns

`AnyRuntimeValue`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:389](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/prompt/template/jinja/src/runtime.ts#L389)

___

### evaluateBlock

▸ **evaluateBlock**(`statements`, `environment`): `StringValue`

#### Parameters

| Name | Type |
| :------ | :------ |
| `statements` | `Statement`[] |
| `environment` | `Environment` |

#### Returns

`StringValue`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:677](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/prompt/template/jinja/src/runtime.ts#L677)

___

### evaluateCallExpression

▸ **evaluateCallExpression**(`expr`, `environment`): `AnyRuntimeValue`

#### Parameters

| Name | Type |
| :------ | :------ |
| `expr` | `CallExpression` |
| `environment` | `Environment` |

#### Returns

`AnyRuntimeValue`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:697](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/prompt/template/jinja/src/runtime.ts#L697)

___

### evaluateFilterExpression

▸ **evaluateFilterExpression**(`node`, `environment`): `AnyRuntimeValue`

Evaluates expressions following the filter operation type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `FilterExpression` |
| `environment` | `Environment` |

#### Returns

`AnyRuntimeValue`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:487](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/prompt/template/jinja/src/runtime.ts#L487)

___

### evaluateFor

▸ **evaluateFor**(`node`, `environment`): `StringValue`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `For` |
| `environment` | `Environment` |

#### Returns

`StringValue`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:821](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/prompt/template/jinja/src/runtime.ts#L821)

___

### evaluateIdentifier

▸ **evaluateIdentifier**(`node`, `environment`): `AnyRuntimeValue`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Identifier` |
| `environment` | `Environment` |

#### Returns

`AnyRuntimeValue`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:693](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/prompt/template/jinja/src/runtime.ts#L693)

___

### evaluateIf

▸ **evaluateIf**(`node`, `environment`): `StringValue`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `If` |
| `environment` | `Environment` |

#### Returns

`StringValue`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:816](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/prompt/template/jinja/src/runtime.ts#L816)

___

### evaluateMemberExpression

▸ **evaluateMemberExpression**(`expr`, `environment`): `AnyRuntimeValue`

#### Parameters

| Name | Type |
| :------ | :------ |
| `expr` | `MemberExpression` |
| `environment` | `Environment` |

#### Returns

`AnyRuntimeValue`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:752](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/prompt/template/jinja/src/runtime.ts#L752)

___

### evaluateSet

▸ **evaluateSet**(`node`, `environment`): `NullValue`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `SetStatement` |
| `environment` | `Environment` |

#### Returns

`NullValue`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:793](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/prompt/template/jinja/src/runtime.ts#L793)

___

### evaluateSliceExpression

▸ **evaluateSliceExpression**(`object`, `expr`, `environment`): `StringValue` \| `ArrayValue`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `AnyRuntimeValue` |
| `expr` | `SliceExpression` |
| `environment` | `Environment` |

#### Returns

`StringValue` \| `ArrayValue`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:721](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/prompt/template/jinja/src/runtime.ts#L721)

___

### evaluateTestExpression

▸ **evaluateTestExpression**(`node`, `environment`): `BooleanValue`

Evaluates expressions following the test operation type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `TestExpression` |
| `environment` | `Environment` |

#### Returns

`BooleanValue`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:644](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/prompt/template/jinja/src/runtime.ts#L644)

___

### evaluateUnaryExpression

▸ **evaluateUnaryExpression**(`node`, `environment`): `AnyRuntimeValue`

Evaluates expressions following the unary operation type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `UnaryExpression` |
| `environment` | `Environment` |

#### Returns

`AnyRuntimeValue`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:662](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/prompt/template/jinja/src/runtime.ts#L662)

___

### run

▸ **run**(`program`): `AnyRuntimeValue`

Run the program.

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | `Program` |

#### Returns

`AnyRuntimeValue`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:382](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/prompt/template/jinja/src/runtime.ts#L382)
