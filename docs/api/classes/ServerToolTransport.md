[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ServerToolTransport

# Class: `abstract` ServerToolTransport

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:41](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/server.ts#L41)

An abstract base class for server-side transport implementations.
It provides the generic tool-mounting logic.

## Extends

- [`ToolTransport`](ToolTransport.md)

## Extended by

- [`HttpServerToolTransport`](HttpServerToolTransport.md)

## Implements

- [`IServerToolTransport`](../interfaces/IServerToolTransport.md)

## Constructors

### new ServerToolTransport()

> **new ServerToolTransport**(): [`ServerToolTransport`](ServerToolTransport.md)

#### Returns

[`ServerToolTransport`](ServerToolTransport.md)

#### Inherited from

[`ToolTransport`](ToolTransport.md).[`constructor`](ToolTransport.md#constructors)

## Properties

### apiRoot

> **apiRoot**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:42](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/server.ts#L42)

The root endpoint for the remote service.
For HTTP, this is a URL. For IPC, it could be a channel name.

#### Implementation of

[`IServerToolTransport`](../interfaces/IServerToolTransport.md).[`apiRoot`](../interfaces/IServerToolTransport.md#apiroot)

#### Overrides

[`ToolTransport`](ToolTransport.md).[`apiRoot`](ToolTransport.md#apiroot)

***

### options?

> `optional` **options**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:44](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/server.ts#L44)

Additional options for the transport start or fetch, passed by mount.

#### Implementation of

[`IServerToolTransport`](../interfaces/IServerToolTransport.md).[`options`](../interfaces/IServerToolTransport.md#options)

#### Overrides

[`ToolTransport`](ToolTransport.md).[`options`](ToolTransport.md#options)

***

### Tools

> **Tools**: *typeof* [`ServerTools`](ServerTools.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:43](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/server.ts#L43)

#### Implementation of

[`IServerToolTransport`](../interfaces/IServerToolTransport.md).[`Tools`](../interfaces/IServerToolTransport.md#tools)

#### Overrides

[`ToolTransport`](ToolTransport.md).[`Tools`](ToolTransport.md#tools)

## Methods

### \_mount()

> **\_mount**(`Tools`, `apiPrefix`, `options`?): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:46](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/server.ts#L46)

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

> `abstract` **\_start**(`options`?): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:59](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/server.ts#L59)

#### Parameters

##### options?

`any`

#### Returns

`Promise`\<`any`\>

***

### addDiscoveryHandler()

> `abstract` **addDiscoveryHandler**(`path`, `handler`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:57](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/server.ts#L57)

#### Parameters

##### path

`string`

##### handler

() => `any`

#### Returns

`void`

***

### addRpcHandler()

> `abstract` **addRpcHandler**(`serverTools`, `apiPrefix`, `options`?): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:58](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/server.ts#L58)

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:61](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/server.ts#L61)

Gets the underlying raw server instance.

#### Returns

`any`

#### Implementation of

[`IServerToolTransport`](../interfaces/IServerToolTransport.md).[`getRaw`](../interfaces/IServerToolTransport.md#getraw)

***

### mount()

> **mount**(`Tools`, `apiRoot`?, `options`?): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:42](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/base.ts#L42)

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

#### Implementation of

[`IServerToolTransport`](../interfaces/IServerToolTransport.md).[`mount`](../interfaces/IServerToolTransport.md#mount)

#### Inherited from

[`ToolTransport`](ToolTransport.md).[`mount`](ToolTransport.md#mount)

***

### setApiRoot()

> **setApiRoot**(`apiRoot`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:38](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/base.ts#L38)

#### Parameters

##### apiRoot

`string`

#### Returns

`void`

#### Inherited from

[`ToolTransport`](ToolTransport.md).[`setApiRoot`](ToolTransport.md#setapiroot)

***

### start()

> **start**(`options`?): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:52](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/server.ts#L52)

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

> `abstract` **stop**(`force`?): `Promise`\<`void`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:60](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/server.ts#L60)

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
