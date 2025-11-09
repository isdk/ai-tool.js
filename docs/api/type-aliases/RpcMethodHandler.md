[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / RpcMethodHandler

# Type Alias: RpcMethodHandler()

> **RpcMethodHandler** = (`params`, `context?`) => `Promise`\<`any`\> \| `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:79

The generic handler for a remote procedure call (RPC) method.
It receives the parameters and returns the result.

## Parameters

### params

`any`

The parameters for the RPC method.

### context?

`any`

Optional context, like the raw request object from the underlying framework.

## Returns

`Promise`\<`any`\> \| `any`

The result of the RPC method.
