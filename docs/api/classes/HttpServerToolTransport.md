[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / HttpServerToolTransport

# Class: HttpServerToolTransport

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/http-server.ts:12](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/http-server.ts#L12)

A concrete server transport implementation using Node.js's built-in HTTP server.

## Extends

- [`ServerToolTransport`](ServerToolTransport.md)

## Constructors

### new HttpServerToolTransport()

> **new HttpServerToolTransport**(`options`?): [`HttpServerToolTransport`](HttpServerToolTransport.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/http-server.ts:17](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/http-server.ts#L17)

#### Parameters

##### options?

`ServerOptions`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\>

#### Returns

[`HttpServerToolTransport`](HttpServerToolTransport.md)

#### Overrides

[`ServerToolTransport`](ServerToolTransport.md).[`constructor`](ServerToolTransport.md#constructors)

## Properties

### apiRoot

> **apiRoot**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:42](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/server.ts#L42)

The root endpoint for the remote service.
For HTTP, this is a URL. For IPC, it could be a channel name.

#### Inherited from

[`ServerToolTransport`](ServerToolTransport.md).[`apiRoot`](ServerToolTransport.md#apiroot)

***

### options?

> `optional` **options**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:44](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/server.ts#L44)

Additional options for the transport start or fetch, passed by mount.

#### Inherited from

[`ServerToolTransport`](ServerToolTransport.md).[`options`](ServerToolTransport.md#options)

***

### server

> **server**: `Server`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/http-server.ts:13](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/http-server.ts#L13)

***

### Tools

> **Tools**: *typeof* [`ServerTools`](ServerTools.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:43](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/server.ts#L43)

#### Inherited from

[`ServerToolTransport`](ServerToolTransport.md).[`Tools`](ServerToolTransport.md#tools)

## Methods

### \_mount()

> **\_mount**(`Tools`, `apiPrefix`, `options`?): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:46](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/server.ts#L46)

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/http-server.ts:160](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/http-server.ts#L160)

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/http-server.ts:62](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/http-server.ts#L62)

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

> **addRpcHandler**(`serverTools`, `apiPrefix`, `options`?): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/http-server.ts:67](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/http-server.ts#L67)

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/http-server.ts:190](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/http-server.ts#L190)

Gets the underlying raw server instance.

#### Returns

`Server`

#### Overrides

[`ServerToolTransport`](ServerToolTransport.md).[`getRaw`](ServerToolTransport.md#getraw)

***

### mount()

> **mount**(`Tools`, `apiRoot`?, `options`?): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:42](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/base.ts#L42)

Mounts the ServerTools registry, creating the necessary API routes.

#### Parameters

##### Tools

*typeof* [`ToolFunc`](ToolFunc.md)

The ServerTools class.

##### apiRoot?

`string`

An optional prefix for all API routes.

##### options?

`any`

Additional options for the transport start.

#### Returns

`any`

#### Inherited from

[`ServerToolTransport`](ServerToolTransport.md).[`mount`](ServerToolTransport.md#mount)

***

### setApiRoot()

> **setApiRoot**(`apiRoot`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:38](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/base.ts#L38)

#### Parameters

##### apiRoot

`string`

#### Returns

`void`

#### Inherited from

[`ServerToolTransport`](ServerToolTransport.md).[`setApiRoot`](ServerToolTransport.md#setapiroot)

***

### start()

> **start**(`options`?): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:52](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/server.ts#L52)

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

> **stop**(): `Promise`\<`void`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/http-server.ts:176](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/http-server.ts#L176)

Stops the server instance gracefully.

#### Returns

`Promise`\<`void`\>

Promise<void> when server is fully stopped

#### Overrides

[`ServerToolTransport`](ServerToolTransport.md).[`stop`](ServerToolTransport.md#stop)
