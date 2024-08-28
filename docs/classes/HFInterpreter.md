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
- [evaluateArguments](HFInterpreter.md#evaluatearguments)
- [evaluateBinaryExpression](HFInterpreter.md#evaluatebinaryexpression)
- [evaluateBlock](HFInterpreter.md#evaluateblock)
- [evaluateCallExpression](HFInterpreter.md#evaluatecallexpression)
- [evaluateFilterExpression](HFInterpreter.md#evaluatefilterexpression)
- [evaluateFor](HFInterpreter.md#evaluatefor)
- [evaluateIdentifier](HFInterpreter.md#evaluateidentifier)
- [evaluateIf](HFInterpreter.md#evaluateif)
- [evaluateMacro](HFInterpreter.md#evaluatemacro)
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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:386](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/jinja/src/runtime.ts#L386)

## Properties

### global

• **global**: `Environment`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:384](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/jinja/src/runtime.ts#L384)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:773](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/jinja/src/runtime.ts#L773)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:1063](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/jinja/src/runtime.ts#L1063)

___

### evaluateArguments

▸ **evaluateArguments**(`args`, `environment`): [`AnyRuntimeValue`[], `Map`\<`string`, `AnyRuntimeValue`\>]

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Expression`[] |
| `environment` | `Environment` |

#### Returns

[`AnyRuntimeValue`[], `Map`\<`string`, `AnyRuntimeValue`\>]

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:495](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/jinja/src/runtime.ts#L495)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:400](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/jinja/src/runtime.ts#L400)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:777](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/jinja/src/runtime.ts#L777)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:797](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/jinja/src/runtime.ts#L797)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:520](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/jinja/src/runtime.ts#L520)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:913](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/jinja/src/runtime.ts#L913)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:793](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/jinja/src/runtime.ts#L793)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:908](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/jinja/src/runtime.ts#L908)

___

### evaluateMacro

▸ **evaluateMacro**(`node`, `environment`): `NullValue`

See https://jinja.palletsprojects.com/en/3.1.x/templates/#macros for more information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Macro` |
| `environment` | `Environment` |

#### Returns

`NullValue`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:1020](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/jinja/src/runtime.ts#L1020)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:844](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/jinja/src/runtime.ts#L844)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:885](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/jinja/src/runtime.ts#L885)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:813](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/jinja/src/runtime.ts#L813)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:744](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/jinja/src/runtime.ts#L744)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:762](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/jinja/src/runtime.ts#L762)

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

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:393](https://github.com/isdk/ai-tool.js/blob/bc1a97dabcb6599e292a0944fe49213fed45d128/src/utils/prompt/template/jinja/src/runtime.ts#L393)
