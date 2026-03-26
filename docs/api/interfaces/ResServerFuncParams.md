[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ResServerFuncParams

# Interface: ResServerFuncParams

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:65

Defines the structure for parameters passed to a `ServerTools` function.
By convention, it includes optional `_req` and `_res` properties for direct
access to the underlying transport's request and response objects (e.g., from Node.js http).

## Extends

- [`RpcMethodsServerFuncParams`](RpcMethodsServerFuncParams.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### \_req?

> `optional` **\_req**: `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:295

The underlying request object from the transport layer (e.g., `IncomingMessage`).

#### Inherited from

[`RpcMethodsServerFuncParams`](RpcMethodsServerFuncParams.md).[`_req`](RpcMethodsServerFuncParams.md#_req)

***

### \_res?

> `optional` **\_res**: `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:300

The underlying response or reply object from the transport layer (e.g., `ServerResponse`).

#### Inherited from

[`RpcMethodsServerFuncParams`](RpcMethodsServerFuncParams.md).[`_res`](RpcMethodsServerFuncParams.md#_res)

***

### \_signal?

> `optional` **\_signal**: `AbortSignal`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:305

The AbortSignal to monitor for cancellation or timeout.

#### Inherited from

[`RpcMethodsServerFuncParams`](RpcMethodsServerFuncParams.md).[`_signal`](RpcMethodsServerFuncParams.md#_signal)

***

### act?

> `optional` **act**: `string`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:26

#### Inherited from

[`RpcMethodsServerFuncParams`](RpcMethodsServerFuncParams.md).[`act`](RpcMethodsServerFuncParams.md#act)

***

### id?

> `optional` **id**: `string` \| `number`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:66

***

### val?

> `optional` **val**: `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:67
