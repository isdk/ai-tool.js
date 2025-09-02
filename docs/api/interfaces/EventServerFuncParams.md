[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / EventServerFuncParams

# Interface: EventServerFuncParams

Defined in: [ai-tools/packages/ai-tool/src/funcs/event-server.ts:14](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/funcs/event-server.ts#L14)

Defines the structure for parameters passed to a `ServerTools` function.
By convention, it includes optional `_req` and `_res` properties for direct
access to the underlying transport's request and response objects (e.g., from Node.js http).

## Extends

- [`ServerFuncParams`](ServerFuncParams.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### \_req?

> `optional` **\_req**: `any`

Defined in: [ai-tools/packages/ai-tool/src/server-tools.ts:15](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/server-tools.ts#L15)

The underlying request object from the transport layer (e.g., `IncomingMessage`).

#### Inherited from

[`ServerFuncParams`](ServerFuncParams.md).[`_req`](ServerFuncParams.md#_req)

***

### \_res?

> `optional` **\_res**: `any`

Defined in: [ai-tools/packages/ai-tool/src/server-tools.ts:20](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/server-tools.ts#L20)

The underlying response or reply object from the transport layer (e.g., `ServerResponse`).

#### Inherited from

[`ServerFuncParams`](ServerFuncParams.md).[`_res`](ServerFuncParams.md#_res)

***

### act?

> `optional` **act**: `"sub"` \| `"pub"` \| `"unsub"`

Defined in: [ai-tools/packages/ai-tool/src/funcs/event-server.ts:17](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/funcs/event-server.ts#L17)

***

### data?

> `optional` **data**: `any`

Defined in: [ai-tools/packages/ai-tool/src/funcs/event-server.ts:16](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/funcs/event-server.ts#L16)

***

### event?

> `optional` **event**: `string` \| `string`[]

Defined in: [ai-tools/packages/ai-tool/src/funcs/event-server.ts:15](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/funcs/event-server.ts#L15)
