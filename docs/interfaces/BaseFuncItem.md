[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / BaseFuncItem

# Interface: BaseFuncItem

Defined in: [packages/ai-tool/src/tool-func.ts:22](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/tool-func.ts#L22)

## Extended by

- [`RemoteFuncItem`](RemoteFuncItem.md)
- [`FuncItem`](FuncItem.md)
- [`BaseFunc`](BaseFunc.md)

## Properties

### alias?

> `optional` **alias**: `string` \| `string`[]

Defined in: [packages/ai-tool/src/tool-func.ts:31](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/tool-func.ts#L31)

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:29](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/tool-func.ts#L29)

***

### name?

> `optional` **name**: `string`

Defined in: [packages/ai-tool/src/tool-func.ts:23](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/tool-func.ts#L23)

***

### params?

> `optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

Defined in: [packages/ai-tool/src/tool-func.ts:24](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/tool-func.ts#L24)

***

### result?

> `optional` **result**: `string`

Defined in: [packages/ai-tool/src/tool-func.ts:25](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/tool-func.ts#L25)

***

### scope?

> `optional` **scope**: `any`

Defined in: [packages/ai-tool/src/tool-func.ts:26](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/tool-func.ts#L26)

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

***

### stream?

> `optional` **stream**: `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:30](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/tool-func.ts#L30)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: [packages/ai-tool/src/tool-func.ts:27](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/tool-func.ts#L27)
