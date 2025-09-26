[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / HttpServerToolTransport

# Class: HttpServerToolTransport

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/http-server.ts:12](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/http-server.ts#L12)

A concrete server transport implementation using Node.js's built-in HTTP server.

## Extends

- [`ServerToolTransport`](ServerToolTransport.md)

## Constructors

### Constructor

> **new HttpServerToolTransport**(`options?`): `HttpServerToolTransport`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/http-server.ts:16](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/http-server.ts#L16)

#### Parameters

##### options?

`ServerOptions`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\>

#### Returns

`HttpServerToolTransport`

#### Overrides

[`ServerToolTransport`](ServerToolTransport.md).[`constructor`](ServerToolTransport.md#constructor)

## Properties

### apiRoot

> **apiRoot**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:48](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/server.ts#L48)

The root endpoint for the remote service.
For HTTP, this is a URL. For IPC, it could be a channel name.

#### Inherited from

[`ServerToolTransport`](ServerToolTransport.md).[`apiRoot`](ServerToolTransport.md#apiroot)

***

### options?

> `optional` **options**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:50](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/server.ts#L50)

Additional options for the transport start or fetch, passed by mount.

#### Inherited from

[`ServerToolTransport`](ServerToolTransport.md).[`options`](ServerToolTransport.md#options)

***

### server

> **server**: `Server`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/http-server.ts:13](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/http-server.ts#L13)

***

### Tools

> **Tools**: *typeof* [`ServerTools`](ServerTools.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:49](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/server.ts#L49)

#### Inherited from

[`ServerToolTransport`](ServerToolTransport.md).[`Tools`](ServerToolTransport.md#tools)

## Methods

### \_mount()

> **\_mount**(`Tools`, `apiPrefix`, `options?`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:52](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/server.ts#L52)

#### Parameters

##### Tools

*typeof* [`ServerTools`](ServerTools.md)

##### apiPrefix

`string`

##### options?

`any`

#### Returns

`void`

#### Inherited from

[`ServerToolTransport`](ServerToolTransport.md).[`_mount`](ServerToolTransport.md#_mount)

***

### \_start()

> **\_start**(`options`): `Promise`\<`void`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/http-server.ts:160](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/http-server.ts#L160)

#### Parameters

##### options

###### host?

`string`

###### port

`number`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`ServerToolTransport`](ServerToolTransport.md).[`_start`](ServerToolTransport.md#_start)

***

### addDiscoveryHandler()

> **addDiscoveryHandler**(`apiPrefix`, `handler`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/http-server.ts:61](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/http-server.ts#L61)

#### Parameters

##### apiPrefix

`string`

##### handler

() => `any`

#### Returns

`void`

#### Overrides

[`ServerToolTransport`](ServerToolTransport.md).[`addDiscoveryHandler`](ServerToolTransport.md#adddiscoveryhandler)

***

### addRpcHandler()

> **addRpcHandler**(`serverTools`, `apiPrefix`, `options?`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/http-server.ts:66](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/http-server.ts#L66)

#### Parameters

##### serverTools

*typeof* [`ServerTools`](ServerTools.md)

##### apiPrefix

`string`

##### options?

`any`

#### Returns

`void`

#### Overrides

[`ServerToolTransport`](ServerToolTransport.md).[`addRpcHandler`](ServerToolTransport.md#addrpchandler)

***

### getRaw()

> **getRaw**(): `Server`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/http-server.ts:193](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/http-server.ts#L193)

Gets the underlying raw server instance.

#### Returns

`Server`

#### Overrides

[`ServerToolTransport`](ServerToolTransport.md).[`getRaw`](ServerToolTransport.md#getraw)

***

### mount()

> **mount**(`Tools`, `apiRoot?`, `options?`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:42](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/base.ts#L42)

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

#### Inherited from

[`ServerToolTransport`](ServerToolTransport.md).[`mount`](ServerToolTransport.md#mount)

***

### setApiRoot()

> **setApiRoot**(`apiRoot`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:38](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/base.ts#L38)

#### Parameters

##### apiRoot

`string`

#### Returns

`void`

#### Inherited from

[`ServerToolTransport`](ServerToolTransport.md).[`setApiRoot`](ServerToolTransport.md#setapiroot)

***

### start()

> **start**(`options?`): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:58](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/server.ts#L58)

Starts the transport layer, making it listen for incoming connections.

#### Parameters

##### options?

`any`

Protocol-specific options (e.g., { port, host }).

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ServerToolTransport`](ServerToolTransport.md).[`start`](ServerToolTransport.md#start)

***

### stop()

> **stop**(`force?`): `Promise`\<`void`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/http-server.ts:176](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/http-server.ts#L176)

Stops the server instance gracefully.

#### Parameters

##### force?

`boolean`

Optional flag to force shutdown immediately

#### Returns

`Promise`\<`void`\>

Promise<void> when server is fully stopped

#### Overrides

[`ServerToolTransport`](ServerToolTransport.md).[`stop`](ServerToolTransport.md#stop)
