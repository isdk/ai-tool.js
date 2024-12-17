[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / EventServerFuncParams

# Interface: EventServerFuncParams

Convention: Always pass _req, _res

## Extends

- [`ServerFuncParams`](ServerFuncParams.md)

## Properties

### \_req?

> `optional` **\_req**: `IncomingMessage`

#### Inherited from

[`ServerFuncParams`](ServerFuncParams.md).[`_req`](ServerFuncParams.md#_req)

#### Defined in

[packages/ai-tool/src/server-tools.ts:9](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/server-tools.ts#L9)

***

### \_res?

> `optional` **\_res**: `ServerResponse`\<`IncomingMessage`\>

#### Inherited from

[`ServerFuncParams`](ServerFuncParams.md).[`_res`](ServerFuncParams.md#_res)

#### Defined in

[packages/ai-tool/src/server-tools.ts:10](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/server-tools.ts#L10)

***

### act?

> `optional` **act**: `"sub"` \| `"pub"` \| `"unsub"`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:15](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/funcs/event-server.ts#L15)

***

### data?

> `optional` **data**: `any`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:14](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/funcs/event-server.ts#L14)

***

### event?

> `optional` **event**: `string` \| `string`[]

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:13](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/funcs/event-server.ts#L13)
