[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / RemoteFuncItem

# Interface: RemoteFuncItem

Defined in: [packages/ai-tool/src/utils/consts.ts:33](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/utils/consts.ts#L33)

## Extends

- [`BaseFuncItem`](BaseFuncItem.md)

## Extended by

- [`ClientFuncItem`](ClientFuncItem.md)
- [`ServerFuncItem`](ServerFuncItem.md)

## Properties

### action?

> `optional` **action**: `"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"`

Defined in: [packages/ai-tool/src/utils/consts.ts:35](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/utils/consts.ts#L35)

***

### apiRoot?

> `optional` **apiRoot**: `string`

Defined in: [packages/ai-tool/src/utils/consts.ts:34](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/utils/consts.ts#L34)

***

### fetchOptions?

> `optional` **fetchOptions**: `any`

Defined in: [packages/ai-tool/src/utils/consts.ts:36](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/utils/consts.ts#L36)

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:29](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/tool-func.ts#L29)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`isApi`](BaseFuncItem.md#isapi)

***

### name?

> `optional` **name**: `string`

Defined in: [packages/ai-tool/src/tool-func.ts:23](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/tool-func.ts#L23)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`name`](BaseFuncItem.md#name)

***

### params?

> `optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

Defined in: [packages/ai-tool/src/tool-func.ts:24](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/tool-func.ts#L24)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`params`](BaseFuncItem.md#params)

***

### result?

> `optional` **result**: `string`

Defined in: [packages/ai-tool/src/tool-func.ts:25](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/tool-func.ts#L25)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`result`](BaseFuncItem.md#result)

***

### scope?

> `optional` **scope**: `any`

Defined in: [packages/ai-tool/src/tool-func.ts:26](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/tool-func.ts#L26)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`scope`](BaseFuncItem.md#scope)

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

Defined in: [packages/ai-tool/src/tool-func.ts:28](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/tool-func.ts#L28)

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

Defined in: [packages/ai-tool/src/tool-func.ts:30](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/tool-func.ts#L30)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`stream`](BaseFuncItem.md#stream)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: [packages/ai-tool/src/tool-func.ts:27](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/tool-func.ts#L27)

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`tags`](BaseFuncItem.md#tags)
