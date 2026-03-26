[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / EventServerFuncParams

# Interface: EventServerFuncParams

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:210

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

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:295

The underlying request object from the transport layer (e.g., `IncomingMessage`).

#### Inherited from

[`ServerFuncParams`](ServerFuncParams.md).[`_req`](ServerFuncParams.md#_req)

***

### \_res?

> `optional` **\_res**: `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:300

The underlying response or reply object from the transport layer (e.g., `ServerResponse`).

#### Inherited from

[`ServerFuncParams`](ServerFuncParams.md).[`_res`](ServerFuncParams.md#_res)

***

### \_signal?

> `optional` **\_signal**: `AbortSignal`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:305

The AbortSignal to monitor for cancellation or timeout.

#### Inherited from

[`ServerFuncParams`](ServerFuncParams.md).[`_signal`](ServerFuncParams.md#_signal)

***

### act?

> `optional` **act**: `"sub"` \| `"pub"` \| `"unsub"`

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:213

***

### clientId?

> `optional` **clientId**: `string`

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:214

***

### data?

> `optional` **data**: `any`

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:212

***

### event?

> `optional` **event**: `string` \| `string`[]

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:211
