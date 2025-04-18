[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / EventServerFuncParams

# Interface: EventServerFuncParams

Defined in: [packages/ai-tool/src/funcs/event-server.ts:12](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/funcs/event-server.ts#L12)

Convention: Always pass _req, _res

## Extends

- [`ServerFuncParams`](ServerFuncParams.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### \_req?

> `optional` **\_req**: `IncomingMessage`

Defined in: [packages/ai-tool/src/server-tools.ts:9](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/server-tools.ts#L9)

#### Inherited from

[`ServerFuncParams`](ServerFuncParams.md).[`_req`](ServerFuncParams.md#_req)

***

### \_res?

> `optional` **\_res**: `ServerResponse`\<`IncomingMessage`\>

Defined in: [packages/ai-tool/src/server-tools.ts:10](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/server-tools.ts#L10)

#### Inherited from

[`ServerFuncParams`](ServerFuncParams.md).[`_res`](ServerFuncParams.md#_res)

***

### act?

> `optional` **act**: `"sub"` \| `"pub"` \| `"unsub"`

Defined in: [packages/ai-tool/src/funcs/event-server.ts:15](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/funcs/event-server.ts#L15)

***

### data?

> `optional` **data**: `any`

Defined in: [packages/ai-tool/src/funcs/event-server.ts:14](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/funcs/event-server.ts#L14)

***

### event?

> `optional` **event**: `string` \| `string`[]

Defined in: [packages/ai-tool/src/funcs/event-server.ts:13](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/funcs/event-server.ts#L13)
