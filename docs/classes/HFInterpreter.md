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
- [evaluateArgumentsExpression](HFInterpreter.md#evaluateargumentsexpression)
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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:376](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/prompt/template/jinja/src/runtime.ts#L376)

## Properties

### global

• **global**: `Environment`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:374](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/prompt/template/jinja/src/runtime.ts#L374)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:674](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/prompt/template/jinja/src/runtime.ts#L674)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:886](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/prompt/template/jinja/src/runtime.ts#L886)

___

### evaluateArgumentsExpression

▸ **evaluateArgumentsExpression**(`args`, `environment`): `AnyRuntimeValue`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Expression`[] |
| `environment` | `Environment` |

#### Returns

`AnyRuntimeValue`[]

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:698](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/prompt/template/jinja/src/runtime.ts#L698)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:390](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/prompt/template/jinja/src/runtime.ts#L390)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:678](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/prompt/template/jinja/src/runtime.ts#L678)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:716](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/prompt/template/jinja/src/runtime.ts#L716)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:488](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/prompt/template/jinja/src/runtime.ts#L488)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:826](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/prompt/template/jinja/src/runtime.ts#L826)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:694](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/prompt/template/jinja/src/runtime.ts#L694)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:821](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/prompt/template/jinja/src/runtime.ts#L821)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:757](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/prompt/template/jinja/src/runtime.ts#L757)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:798](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/prompt/template/jinja/src/runtime.ts#L798)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:726](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/prompt/template/jinja/src/runtime.ts#L726)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:645](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/prompt/template/jinja/src/runtime.ts#L645)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:663](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/prompt/template/jinja/src/runtime.ts#L663)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:383](https://github.com/isdk/ai-tool.js/blob/43e2dd311b252f4a811e695a7944005766712a72/src/utils/prompt/template/jinja/src/runtime.ts#L383)
