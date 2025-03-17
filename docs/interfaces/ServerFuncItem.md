[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ServerFuncItem

# Interface: ServerFuncItem

Defined in: [packages/ai-tool/src/server-tools.ts:13](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/server-tools.ts#L13)

## Extends

- [`RemoteFuncItem`](RemoteFuncItem.md)

## Extended by

- [`ServerTools`](../classes/ServerTools.md)

## Properties

### action?

> `optional` **action**: `"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"`

Defined in: [packages/ai-tool/src/utils/consts.ts:35](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/utils/consts.ts#L35)

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`action`](RemoteFuncItem.md#action)

***

### allowExportFunc?

> `optional` **allowExportFunc**: `boolean`

Defined in: [packages/ai-tool/src/server-tools.ts:14](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/server-tools.ts#L14)

***

### apiRoot?

> `optional` **apiRoot**: `string`

Defined in: [packages/ai-tool/src/utils/consts.ts:34](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/utils/consts.ts#L34)

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`apiRoot`](RemoteFuncItem.md#apiroot)

***

### fetchOptions?

> `optional` **fetchOptions**: `any`

Defined in: [packages/ai-tool/src/utils/consts.ts:36](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/utils/consts.ts#L36)

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`fetchOptions`](RemoteFuncItem.md#fetchoptions)

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:29](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/tool-func.ts#L29)

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`isApi`](RemoteFuncItem.md#isapi)

***

### name?

> `optional` **name**: `string`

Defined in: [packages/ai-tool/src/tool-func.ts:23](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/tool-func.ts#L23)

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`name`](RemoteFuncItem.md#name)

***

### params?

> `optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

Defined in: [packages/ai-tool/src/tool-func.ts:24](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/tool-func.ts#L24)

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`params`](RemoteFuncItem.md#params)

***

### result?

> `optional` **result**: `string`

Defined in: [packages/ai-tool/src/tool-func.ts:25](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/tool-func.ts#L25)

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`result`](RemoteFuncItem.md#result)

***

### scope?

> `optional` **scope**: `any`

Defined in: [packages/ai-tool/src/tool-func.ts:26](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/tool-func.ts#L26)

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`scope`](RemoteFuncItem.md#scope)

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

Defined in: [packages/ai-tool/src/tool-func.ts:28](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/tool-func.ts#L28)

#### Parameters

##### this

[`ToolFunc`](../classes/ToolFunc.md)

##### options?

[`FuncItem`](FuncItem.md)

#### Returns

`void`

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`setup`](RemoteFuncItem.md#setup)

***

### stream?

> `optional` **stream**: `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:30](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/tool-func.ts#L30)

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`stream`](RemoteFuncItem.md#stream)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: [packages/ai-tool/src/tool-func.ts:27](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/tool-func.ts#L27)

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`tags`](RemoteFuncItem.md#tags)
