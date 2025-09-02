[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / RpcMethodHandler

# Type Alias: RpcMethodHandler()

> **RpcMethodHandler**: (`params`, `context`?) => `Promise`\<`any`\> \| `any`

Defined in: [ai-tools/packages/ai-tool/src/transports/base.ts:14](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/base.ts#L14)

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
