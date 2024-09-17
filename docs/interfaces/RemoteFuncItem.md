[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / RemoteFuncItem

# Interface: RemoteFuncItem

## Extends

- [`BaseFuncItem`](BaseFuncItem.md)

## Extended by

- [`ClientFuncItem`](ClientFuncItem.md)
- [`ServerFuncItem`](ServerFuncItem.md)

## Properties

### action?

> `optional` **action**: `"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"`

#### Defined in

[packages/ai-tool/src/utils/consts.ts:35](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/utils/consts.ts#L35)

***

### apiRoot?

> `optional` **apiRoot**: `string`

#### Defined in

[packages/ai-tool/src/utils/consts.ts:34](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/utils/consts.ts#L34)

***

### fetchOptions?

> `optional` **fetchOptions**: `any`

#### Defined in

[packages/ai-tool/src/utils/consts.ts:36](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/utils/consts.ts#L36)

***

### isApi?

> `optional` **isApi**: `boolean`

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`isApi`](BaseFuncItem.md#isapi)

#### Defined in

[packages/ai-tool/src/tool-func.ts:47](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L47)

***

### name?

> `optional` **name**: `string`

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`name`](BaseFuncItem.md#name)

#### Defined in

[packages/ai-tool/src/tool-func.ts:41](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L41)

***

### params?

> `optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`params`](BaseFuncItem.md#params)

#### Defined in

[packages/ai-tool/src/tool-func.ts:42](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L42)

***

### result?

> `optional` **result**: `string`

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`result`](BaseFuncItem.md#result)

#### Defined in

[packages/ai-tool/src/tool-func.ts:43](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L43)

***

### scope?

> `optional` **scope**: `any`

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`scope`](BaseFuncItem.md#scope)

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

[`BaseFuncItem`](BaseFuncItem.md).[`setup`](BaseFuncItem.md#setup)

#### Defined in

[packages/ai-tool/src/tool-func.ts:46](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L46)

***

### stream?

> `optional` **stream**: `boolean`

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`stream`](BaseFuncItem.md#stream)

#### Defined in

[packages/ai-tool/src/tool-func.ts:48](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L48)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`tags`](BaseFuncItem.md#tags)

#### Defined in

[packages/ai-tool/src/tool-func.ts:45](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L45)
