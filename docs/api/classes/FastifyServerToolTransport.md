[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / FastifyServerToolTransport

# Class: FastifyServerToolTransport

Defined in: [ai-tools/packages/ai-tool/src/transports/fastify-server.ts:12](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/fastify-server.ts#L12)

A concrete server transport implementation for Fastify.

## Extends

- [`ServerToolTransport`](ServerToolTransport.md)

## Constructors

### new FastifyServerToolTransport()

> **new FastifyServerToolTransport**(`options`?): [`FastifyServerToolTransport`](FastifyServerToolTransport.md)

Defined in: [ai-tools/packages/ai-tool/src/transports/fastify-server.ts:15](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/fastify-server.ts#L15)

#### Parameters

##### options?

`any`

#### Returns

[`FastifyServerToolTransport`](FastifyServerToolTransport.md)

#### Overrides

[`ServerToolTransport`](ServerToolTransport.md).[`constructor`](ServerToolTransport.md#constructors)

## Properties

### apiRoot

> **apiRoot**: `string`

Defined in: [ai-tools/packages/ai-tool/src/transports/server.ts:42](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/server.ts#L42)

The root endpoint for the remote service.
For HTTP, this is a URL. For IPC, it could be a channel name.

#### Inherited from

[`ServerToolTransport`](ServerToolTransport.md).[`apiRoot`](ServerToolTransport.md#apiroot)

***

### options?

> `optional` **options**: `any`

Defined in: [ai-tools/packages/ai-tool/src/transports/server.ts:44](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/server.ts#L44)

Additional options for the transport start or fetch, passed by mount.

#### Inherited from

[`ServerToolTransport`](ServerToolTransport.md).[`options`](ServerToolTransport.md#options)

***

### server

> **server**: `any`

Defined in: [ai-tools/packages/ai-tool/src/transports/fastify-server.ts:13](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/fastify-server.ts#L13)

***

### Tools

> **Tools**: *typeof* [`ServerTools`](ServerTools.md)

Defined in: [ai-tools/packages/ai-tool/src/transports/server.ts:43](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/server.ts#L43)

#### Inherited from

[`ServerToolTransport`](ServerToolTransport.md).[`Tools`](ServerToolTransport.md#tools)

## Methods

### \_mount()

> **\_mount**(`Tools`, `apiPrefix`, `options`?): `void`

Defined in: [ai-tools/packages/ai-tool/src/transports/server.ts:46](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/server.ts#L46)

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

Defined in: [ai-tools/packages/ai-tool/src/transports/fastify-server.ts:77](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/fastify-server.ts#L77)

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

Defined in: [ai-tools/packages/ai-tool/src/transports/fastify-server.ts:20](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/fastify-server.ts#L20)

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

Defined in: [ai-tools/packages/ai-tool/src/transports/fastify-server.ts:28](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/fastify-server.ts#L28)

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

> **getRaw**(): `any`

Defined in: [ai-tools/packages/ai-tool/src/transports/fastify-server.ts:92](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/fastify-server.ts#L92)

Gets the underlying raw server instance.

#### Returns

`any`

#### Overrides

[`ServerToolTransport`](ServerToolTransport.md).[`getRaw`](ServerToolTransport.md#getraw)

***

### mount()

> **mount**(`Tools`, `apiRoot`?, `options`?): `any`

Defined in: [ai-tools/packages/ai-tool/src/transports/base.ts:38](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/base.ts#L38)

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

### start()

> **start**(`options`?): `Promise`\<`any`\>

Defined in: [ai-tools/packages/ai-tool/src/transports/server.ts:52](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/server.ts#L52)

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

> **stop**(`force`?): `Promise`\<`void`\>

Defined in: [ai-tools/packages/ai-tool/src/transports/fastify-server.ts:88](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/fastify-server.ts#L88)

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
