[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / HFEnvironment

# Class: HFEnvironment

## Extends

- `Environment`

## Constructors

### new HFEnvironment()

> **new HFEnvironment**(`parent`?): [`HFEnvironment`](HFEnvironment.md)

#### Parameters

• **parent?**: [`HFEnvironment`](HFEnvironment.md)

#### Returns

[`HFEnvironment`](HFEnvironment.md)

#### Overrides

`Environment.constructor`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:22](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/prompt/template/jinja/src/index.ts#L22)

## Properties

### parent?

> `optional` **parent**: [`HFEnvironment`](HFEnvironment.md)

#### Inherited from

`Environment.parent`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:22](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/prompt/template/jinja/src/index.ts#L22)

***

### tests

> **tests**: `Map`\<`string`, (...`value`) => `boolean`\>

The tests available in this environment.

#### Inherited from

`Environment.tests`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:276](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/prompt/template/jinja/src/runtime.ts#L276)

***

### variables

> **variables**: `Map`\<`string`, `AnyRuntimeValue`\>

The variables declared in this environment.

#### Inherited from

`Environment.variables`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:258](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/prompt/template/jinja/src/runtime.ts#L258)

## Methods

### assign()

> **assign**(`items`): `void`

#### Parameters

• **items**: `Record`\<`string`, `unknown`\>

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:26](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/prompt/template/jinja/src/index.ts#L26)

***

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:32](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/prompt/template/jinja/src/index.ts#L32)

***

### lookupVariable()

> **lookupVariable**(`name`): `AnyRuntimeValue`

#### Parameters

• **name**: `string`

#### Returns

`AnyRuntimeValue`

#### Inherited from

`Environment.lookupVariable`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:374](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/prompt/template/jinja/src/runtime.ts#L374)

***

### set()

> **set**(`name`, `value`): `AnyRuntimeValue`

Set the value of a variable in the current environment.

#### Parameters

• **name**: `string`

• **value**: `unknown`

#### Returns

`AnyRuntimeValue`

#### Inherited from

`Environment.set`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:329](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/prompt/template/jinja/src/runtime.ts#L329)

***

### setVariable()

> **setVariable**(`name`, `value`): `AnyRuntimeValue`

Set variable in the current scope.
See https://jinja.palletsprojects.com/en/3.0.x/templates/#assignments for more information.

#### Parameters

• **name**: `string`

• **value**: `AnyRuntimeValue`

#### Returns

`AnyRuntimeValue`

#### Inherited from

`Environment.setVariable`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:351](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/prompt/template/jinja/src/runtime.ts#L351)
