[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ServerFuncParams

# Interface: ServerFuncParams

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:290

Defines the structure for parameters passed to a `ServerTools` function.
By convention, it includes optional `_req` and `_res` properties for direct
access to the underlying transport's request and response objects (e.g., from Node.js http).

## Extended by

- [`RpcMethodsServerFuncParams`](RpcMethodsServerFuncParams.md)
- [`EventServerFuncParams`](EventServerFuncParams.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### \_req?

> `optional` **\_req**: `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:295

The underlying request object from the transport layer (e.g., `IncomingMessage`).

***

### \_res?

> `optional` **\_res**: `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:300

The underlying response or reply object from the transport layer (e.g., `ServerResponse`).

***

### \_signal?

> `optional` **\_signal**: `AbortSignal`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:305

The AbortSignal to monitor for cancellation or timeout.
