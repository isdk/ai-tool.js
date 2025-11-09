[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ServerToolTransport

# Abstract Class: ServerToolTransport

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:373

An abstract base class for server-side transport implementations.
It provides the generic tool-mounting logic.

## Extends

- [`ToolTransport`](ToolTransport.md)

## Extended by

- [`HttpServerToolTransport`](HttpServerToolTransport.md)

## Implements

- [`IServerToolTransport`](../interfaces/IServerToolTransport.md)

## Constructors

### Constructor

> **new ServerToolTransport**(): `ServerToolTransport`

#### Returns

`ServerToolTransport`

#### Inherited from

[`ToolTransport`](ToolTransport.md).[`constructor`](ToolTransport.md#constructor)

## Properties

### apiRoot

> **apiRoot**: `string`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:374

The root endpoint for the remote service.
For HTTP, this is a URL. For IPC, it could be a channel name.

#### Implementation of

[`IServerToolTransport`](../interfaces/IServerToolTransport.md).[`apiRoot`](../interfaces/IServerToolTransport.md#apiroot)

#### Overrides

[`ToolTransport`](ToolTransport.md).[`apiRoot`](ToolTransport.md#apiroot)

***

### options?

> `optional` **options**: `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:376

Additional options for the transport start or fetch, passed by mount.

#### Implementation of

[`IServerToolTransport`](../interfaces/IServerToolTransport.md).[`options`](../interfaces/IServerToolTransport.md#options)

#### Overrides

[`ToolTransport`](ToolTransport.md).[`options`](ToolTransport.md#options)

***

### Tools

> **Tools**: *typeof* [`ServerTools`](ServerTools.md)

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:375

#### Implementation of

[`IServerToolTransport`](../interfaces/IServerToolTransport.md).[`Tools`](../interfaces/IServerToolTransport.md#tools)

#### Overrides

[`ToolTransport`](ToolTransport.md).[`Tools`](ToolTransport.md#tools)

## Methods

### \_mount()

> **\_mount**(`Tools`, `apiPrefix`, `options?`): `void`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:377

#### Parameters

##### Tools

*typeof* [`ServerTools`](ServerTools.md)

##### apiPrefix

`string`

##### options?

`any`

#### Returns

`void`

#### Overrides

[`ToolTransport`](ToolTransport.md).[`_mount`](ToolTransport.md#_mount)

***

### \_start()

> `abstract` **\_start**(`options?`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:381

#### Parameters

##### options?

`any`

#### Returns

`Promise`\<`any`\>

***

### addDiscoveryHandler()

> `abstract` **addDiscoveryHandler**(`path`, `handler`): `void`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:379

#### Parameters

##### path

`string`

##### handler

() => `any`

#### Returns

`void`

***

### addRpcHandler()

> `abstract` **addRpcHandler**(`serverTools`, `apiPrefix`, `options?`): `void`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:380

#### Parameters

##### serverTools

*typeof* [`ServerTools`](ServerTools.md)

##### apiPrefix

`string`

##### options?

`any`

#### Returns

`void`

***

### getRaw()?

> `abstract` `optional` **getRaw**(): `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:383

Gets the underlying raw server instance.

#### Returns

`any`

#### Implementation of

[`IServerToolTransport`](../interfaces/IServerToolTransport.md).[`getRaw`](../interfaces/IServerToolTransport.md#getraw)

***

### mount()

> **mount**(`Tools`, `apiRoot?`, `options?`): `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:99

Mounts the ServerTools registry, creating the necessary API routes.

This method is responsible for integrating the tool-handling logic with a
running server instance.

#### Parameters

##### Tools

*typeof* [`ToolFunc`](ToolFunc.md)

The ServerTools class containing the tool definitions.

##### apiRoot?

`string`

An optional prefix for all API routes (e.g., '/api').

##### options?

`any`

A container for transport-specific options. For example,
  an HTTP-based transport would expect an `{ server: http.Server }` object
  to attach its route handlers to.

#### Returns

`any`

#### Implementation of

[`IServerToolTransport`](../interfaces/IServerToolTransport.md).[`mount`](../interfaces/IServerToolTransport.md#mount)

#### Inherited from

[`ToolTransport`](ToolTransport.md).[`mount`](ToolTransport.md#mount)

***

### setApiRoot()

> **setApiRoot**(`apiRoot`): `void`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:98

#### Parameters

##### apiRoot

`string`

#### Returns

`void`

#### Inherited from

[`ToolTransport`](ToolTransport.md).[`setApiRoot`](ToolTransport.md#setapiroot)

***

### start()

> **start**(`options?`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:378

Starts the transport layer, making it listen for incoming connections.

#### Parameters

##### options?

`any`

Protocol-specific options (e.g., { port, host }).

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IServerToolTransport`](../interfaces/IServerToolTransport.md).[`start`](../interfaces/IServerToolTransport.md#start)

***

### stop()

> `abstract` **stop**(`force?`): `Promise`\<`void`\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:382

Stops the server instance gracefully.

#### Parameters

##### force?

`boolean`

Optional flag to force shutdown immediately

#### Returns

`Promise`\<`void`\>

Promise<void> when server is fully stopped

#### Implementation of

[`IServerToolTransport`](../interfaces/IServerToolTransport.md).[`stop`](../interfaces/IServerToolTransport.md#stop)
