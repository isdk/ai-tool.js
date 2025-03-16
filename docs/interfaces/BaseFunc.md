[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / BaseFunc

# Interface: BaseFunc

Defined in: [packages/ai-tool/src/tool-func.ts:37](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L37)

## Extends

- [`BaseFuncItem`](BaseFuncItem.md)

## Extended by

- [`ToolFunc`](../classes/ToolFunc.md)

## Properties

### isApi?

> `optional` **isApi**: `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:29](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L29)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`isApi`](BaseFuncItem.md#isapi)

***

### name?

> `optional` **name**: `string`

Defined in: [packages/ai-tool/src/tool-func.ts:23](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L23)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`name`](BaseFuncItem.md#name)

***

### params?

> `optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

Defined in: [packages/ai-tool/src/tool-func.ts:24](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L24)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`params`](BaseFuncItem.md#params)

***

### result?

> `optional` **result**: `string`

Defined in: [packages/ai-tool/src/tool-func.ts:25](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L25)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`result`](BaseFuncItem.md#result)

***

### scope?

> `optional` **scope**: `any`

Defined in: [packages/ai-tool/src/tool-func.ts:26](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L26)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`scope`](BaseFuncItem.md#scope)

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

Defined in: [packages/ai-tool/src/tool-func.ts:28](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L28)

#### Parameters

##### this

[`ToolFunc`](../classes/ToolFunc.md)

##### options?

[`FuncItem`](FuncItem.md)

#### Returns

`void`

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`setup`](BaseFuncItem.md#setup)

***

### stream?

> `optional` **stream**: `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:30](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L30)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`stream`](BaseFuncItem.md#stream)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: [packages/ai-tool/src/tool-func.ts:27](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L27)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`tags`](BaseFuncItem.md#tags)

## Methods

### func()

> **func**(...`params`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:38](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L38)

#### Parameters

##### params

...`any`

#### Returns

`any`
