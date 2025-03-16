[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / HFEnvironment

# Class: HFEnvironment

Defined in: [packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:21](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/template/jinja/src/index.ts#L21)

## Extends

- `Environment`

## Constructors

### new HFEnvironment()

> **new HFEnvironment**(`parent`?): [`HFEnvironment`](HFEnvironment.md)

Defined in: [packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:22](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/template/jinja/src/index.ts#L22)

#### Parameters

##### parent?

[`HFEnvironment`](HFEnvironment.md)

#### Returns

[`HFEnvironment`](HFEnvironment.md)

#### Overrides

`Environment.constructor`

## Properties

### parent?

> `optional` **parent**: [`HFEnvironment`](HFEnvironment.md)

Defined in: [packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:22](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/template/jinja/src/index.ts#L22)

#### Inherited from

`Environment.parent`

***

### tests

> **tests**: `Map`\<`string`, (...`value`) => `boolean`\>

Defined in: [packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:319](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/template/jinja/src/runtime.ts#L319)

The tests available in this environment.

#### Inherited from

`Environment.tests`

***

### variables

> **variables**: `Map`\<`string`, `AnyRuntimeValue`\>

Defined in: [packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:301](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/template/jinja/src/runtime.ts#L301)

The variables declared in this environment.

#### Inherited from

`Environment.variables`

## Methods

### assign()

> **assign**(`items`): `void`

Defined in: [packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:26](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/template/jinja/src/index.ts#L26)

#### Parameters

##### items

`Record`\<`string`, `unknown`\>

#### Returns

`void`

***

### clear()

> **clear**(): `void`

Defined in: [packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:32](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/template/jinja/src/index.ts#L32)

#### Returns

`void`

***

### lookupVariable()

> **lookupVariable**(`name`): `AnyRuntimeValue`

Defined in: [packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:417](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/template/jinja/src/runtime.ts#L417)

#### Parameters

##### name

`string`

#### Returns

`AnyRuntimeValue`

#### Inherited from

`Environment.lookupVariable`

***

### set()

> **set**(`name`, `value`): `AnyRuntimeValue`

Defined in: [packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:372](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/template/jinja/src/runtime.ts#L372)

Set the value of a variable in the current environment.

#### Parameters

##### name

`string`

##### value

`unknown`

#### Returns

`AnyRuntimeValue`

#### Inherited from

`Environment.set`

***

### setVariable()

> **setVariable**(`name`, `value`): `AnyRuntimeValue`

Defined in: [packages/ai-tool/src/utils/prompt/template/jinja/src/runtime.ts:394](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/template/jinja/src/runtime.ts#L394)

Set variable in the current scope.
See https://jinja.palletsprojects.com/en/3.0.x/templates/#assignments for more information.

#### Parameters

##### name

`string`

##### value

`AnyRuntimeValue`

#### Returns

`AnyRuntimeValue`

#### Inherited from

`Environment.setVariable`
