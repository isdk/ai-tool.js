[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / FuncItem

# Interface: FuncItem

Defined in: [packages/ai-tool/src/tool-func.ts:34](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/tool-func.ts#L34)

## Extends

- [`BaseFuncItem`](BaseFuncItem.md)

## Properties

### alias?

> `optional` **alias**: `string` \| `string`[]

Defined in: [packages/ai-tool/src/tool-func.ts:31](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/tool-func.ts#L31)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`alias`](BaseFuncItem.md#alias)

***

### func?

> `optional` **func**: [`TFunc`](../type-aliases/TFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:35](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/tool-func.ts#L35)

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:29](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/tool-func.ts#L29)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`isApi`](BaseFuncItem.md#isapi)

***

### name?

> `optional` **name**: `string`

Defined in: [packages/ai-tool/src/tool-func.ts:23](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/tool-func.ts#L23)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`name`](BaseFuncItem.md#name)

***

### params?

> `optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

Defined in: [packages/ai-tool/src/tool-func.ts:24](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/tool-func.ts#L24)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`params`](BaseFuncItem.md#params)

***

### result?

> `optional` **result**: `string`

Defined in: [packages/ai-tool/src/tool-func.ts:25](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/tool-func.ts#L25)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`result`](BaseFuncItem.md#result)

***

### scope?

> `optional` **scope**: `any`

Defined in: [packages/ai-tool/src/tool-func.ts:26](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/tool-func.ts#L26)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`scope`](BaseFuncItem.md#scope)

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

Defined in: [packages/ai-tool/src/tool-func.ts:28](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/tool-func.ts#L28)

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

Defined in: [packages/ai-tool/src/tool-func.ts:30](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/tool-func.ts#L30)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`stream`](BaseFuncItem.md#stream)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: [packages/ai-tool/src/tool-func.ts:27](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/tool-func.ts#L27)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`tags`](BaseFuncItem.md#tags)
