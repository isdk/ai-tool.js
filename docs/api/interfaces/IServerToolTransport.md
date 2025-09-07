[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / IServerToolTransport

# Interface: IServerToolTransport

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:9](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/server.ts#L9)

Defines the public interface for a server-side transport,
responsible for exposing ServerTools to the network.

## Extends

- [`IToolTransport`](IToolTransport.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### apiRoot

> **apiRoot**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:22](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/base.ts#L22)

The root endpoint for the remote service.
For HTTP, this is a URL. For IPC, it could be a channel name.

#### Inherited from

[`IToolTransport`](IToolTransport.md).[`apiRoot`](IToolTransport.md#apiroot)

***

### options?

> `optional` **options**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:26](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/base.ts#L26)

Additional options for the transport start or fetch, passed by mount.

#### Inherited from

[`IToolTransport`](IToolTransport.md).[`options`](IToolTransport.md#options)

***

### Tools

> **Tools**: *typeof* [`ToolFunc`](../classes/ToolFunc.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:17](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/base.ts#L17)

#### Inherited from

[`IToolTransport`](IToolTransport.md).[`Tools`](IToolTransport.md#tools)

## Methods

### getRaw()?

> `optional` **getRaw**(): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:34](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/server.ts#L34)

Gets the underlying raw server instance.

#### Returns

`any`

***

### mount()

> **mount**(`serverTools`, `apiPrefix`?, `options`?): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:16](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/server.ts#L16)

Mounts the ServerTools registry, creating the necessary API routes.

#### Parameters

##### serverTools

*typeof* [`ServerTools`](../classes/ServerTools.md)

The ServerTools class.

##### apiPrefix?

`string`

An optional prefix for all API routes.

##### options?

`any`

Additional options for the transport start.

#### Returns

`void`

#### Overrides

[`IToolTransport`](IToolTransport.md).[`mount`](IToolTransport.md#mount)

***

### start()

> **start**(`options`?): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:22](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/server.ts#L22)

Starts the transport layer, making it listen for incoming connections.

#### Parameters

##### options?

`any`

Protocol-specific options (e.g., { port, host }).

#### Returns

`Promise`\<`any`\>

***

### stop()

> **stop**(`force`?): `Promise`\<`void`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/server.ts:29](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/server.ts#L29)

Stops the server instance gracefully.

#### Parameters

##### force?

`boolean`

Optional flag to force shutdown immediately

#### Returns

`Promise`\<`void`\>

Promise<void> when server is fully stopped
