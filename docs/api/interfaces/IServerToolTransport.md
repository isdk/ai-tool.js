[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / IServerToolTransport

# Interface: IServerToolTransport

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:339

Defines the public interface for a server-side transport,
responsible for exposing ServerTools to the network.

## Extends

- [`IToolTransport`](IToolTransport.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### apiRoot

> **apiRoot**: `string`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:86

The root endpoint for the remote service.
For HTTP, this is a URL. For IPC, it could be a channel name.

#### Inherited from

[`IToolTransport`](IToolTransport.md).[`apiRoot`](IToolTransport.md#apiroot)

***

### options?

> `optional` **options**: `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:90

Additional options for the transport start or fetch, passed by mount.

#### Inherited from

[`IToolTransport`](IToolTransport.md).[`options`](IToolTransport.md#options)

***

### Tools

> **Tools**: *typeof* [`ToolFunc`](../classes/ToolFunc.md)

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:81

#### Inherited from

[`IToolTransport`](IToolTransport.md).[`Tools`](IToolTransport.md#tools)

## Methods

### getRaw()?

> `optional` **getRaw**(): `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:367

Gets the underlying raw server instance.

#### Returns

`any`

***

### mount()

> **mount**(`serverTools`, `apiPrefix?`, `options?`): `void`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:352

Mounts the ServerTools registry, creating the necessary API routes.

This method is responsible for integrating the tool-handling logic with a
running server instance.

#### Parameters

##### serverTools

*typeof* [`ServerTools`](../classes/ServerTools.md)

The ServerTools class containing the tool definitions.

##### apiPrefix?

`string`

An optional prefix for all API routes (e.g., '/api').

##### options?

`any`

A container for transport-specific options. For example,
  an HTTP-based transport would expect an `{ server: http.Server }` object
  to attach its route handlers to.

#### Returns

`void`

#### Overrides

[`IToolTransport`](IToolTransport.md).[`mount`](IToolTransport.md#mount)

***

### start()

> **start**(`options?`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:357

Starts the transport layer, making it listen for incoming connections.

#### Parameters

##### options?

`any`

Protocol-specific options (e.g., { port, host }).

#### Returns

`Promise`\<`any`\>

***

### stop()

> **stop**(`force?`): `Promise`\<`void`\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:363

Stops the server instance gracefully.

#### Parameters

##### force?

`boolean`

Optional flag to force shutdown immediately

#### Returns

`Promise`\<`void`\>

Promise<void> when server is fully stopped
