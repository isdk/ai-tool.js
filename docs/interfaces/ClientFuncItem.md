[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / ClientFuncItem

# Interface: ClientFuncItem

## Extends

- [`RemoteFuncItem`](RemoteFuncItem.md)

## Extended by

- [`ClientTools`](../classes/ClientTools.md)

## Properties

### action?

> `optional` **action**: `"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"`

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`action`](RemoteFuncItem.md#action)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:35](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/utils/consts.ts#L35)

***

### apiRoot?

> `optional` **apiRoot**: `string`

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`apiRoot`](RemoteFuncItem.md#apiroot)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:34](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/utils/consts.ts#L34)

***

### fetchOptions?

> `optional` **fetchOptions**: `any`

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`fetchOptions`](RemoteFuncItem.md#fetchoptions)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:36](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/utils/consts.ts#L36)

***

### isApi?

> `optional` **isApi**: `boolean`

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`isApi`](RemoteFuncItem.md#isapi)

#### Defined in

[packages/ai-tool/src/tool-func.ts:47](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L47)

***

### name?

> `optional` **name**: `string`

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`name`](RemoteFuncItem.md#name)

#### Defined in

[packages/ai-tool/src/tool-func.ts:41](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L41)

***

### params?

> `optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`params`](RemoteFuncItem.md#params)

#### Defined in

[packages/ai-tool/src/tool-func.ts:42](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L42)

***

### result?

> `optional` **result**: `string`

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`result`](RemoteFuncItem.md#result)

#### Defined in

[packages/ai-tool/src/tool-func.ts:43](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L43)

***

### scope?

> `optional` **scope**: `any`

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`scope`](RemoteFuncItem.md#scope)

#### Defined in

[packages/ai-tool/src/tool-func.ts:44](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L44)

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

#### Parameters

• **this**: [`ToolFunc`](../classes/ToolFunc.md)

• **options?**: [`FuncItem`](FuncItem.md)

#### Returns

`void`

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`setup`](RemoteFuncItem.md#setup)

#### Defined in

[packages/ai-tool/src/tool-func.ts:46](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L46)

***

### stream?

> `optional` **stream**: `boolean`

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`stream`](RemoteFuncItem.md#stream)

#### Defined in

[packages/ai-tool/src/tool-func.ts:48](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L48)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`tags`](RemoteFuncItem.md#tags)

#### Defined in

[packages/ai-tool/src/tool-func.ts:45](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L45)
