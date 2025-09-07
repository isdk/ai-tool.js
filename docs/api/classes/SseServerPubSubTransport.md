[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / SseServerPubSubTransport

# Class: SseServerPubSubTransport

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:5](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/pubsub/sse-server.ts#L5)

Defines the interface for a server-side PubSub transport layer.

This abstraction allows the `EventServer` to operate independently of the
underlying real-time communication protocol (e.g., SSE, WebSockets, IPC).
An implementation of this interface is responsible for managing client
connections, subscriptions, and message passing.

## Implements

- [`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md)

## Constructors

### new SseServerPubSubTransport()

> **new SseServerPubSubTransport**(): [`SseServerPubSubTransport`](SseServerPubSubTransport.md)

#### Returns

[`SseServerPubSubTransport`](SseServerPubSubTransport.md)

## Properties

### name

> `readonly` **name**: `"sse"` = `'sse'`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:6](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/pubsub/sse-server.ts#L6)

A unique, human-readable name for the transport (e.g., 'sse', 'websocket').

#### Implementation of

[`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md).[`name`](../interfaces/IPubSubServerTransport.md#name)

***

### protocol

> `readonly` **protocol**: `"sse"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:7](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/pubsub/sse-server.ts#L7)

The protocol identifier.

#### Implementation of

[`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md).[`protocol`](../interfaces/IPubSubServerTransport.md#protocol)

## Methods

### mount()?

> `optional` **mount**(): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:13](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/pubsub/sse-server.ts#L13)

Optional method to mount or register the transport's endpoint with an HTTP
server or framework. This is typically required for protocols like SSE or
WebSockets that need to handle incoming HTTP requests at a specific path.

#### Returns

`void`

#### Implementation of

[`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md).[`mount`](../interfaces/IPubSubServerTransport.md#mount)

***

### onConnection()

> **onConnection**(`cb`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:44](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/pubsub/sse-server.ts#L44)

Registers a callback to be invoked when a new client connection is established
and a session is created.

#### Parameters

##### cb

(`s`) => `void`

The callback function that receives the new `PubSubServerSession`.

#### Returns

`void`

#### Implementation of

[`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md).[`onConnection`](../interfaces/IPubSubServerTransport.md#onconnection)

***

### onDisconnect()

> **onDisconnect**(`cb`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:45](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/pubsub/sse-server.ts#L45)

Registers a callback to be invoked when a client disconnects.

#### Parameters

##### cb

(`s`) => `void`

The callback function that receives the `PubSubServerSession` of the
  disconnected client.

#### Returns

`void`

#### Implementation of

[`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md).[`onDisconnect`](../interfaces/IPubSubServerTransport.md#ondisconnect)

***

### publish()

> **publish**(`event`, `data`, `target`?): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:40](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/pubsub/sse-server.ts#L40)

Publishes an event from the server to connected clients.

The transport implementation should handle broadcasting to all relevant
clients or targeting specific clients based on the `target` parameter.

#### Parameters

##### event

`string`

The name of the event to publish.

##### data

`any`

The payload for the event.

##### target?

Optional. Specifies the recipient(s) of the event.
  If omitted, the event is typically broadcast to all subscribed clients.

###### clientId?

`string` \| `string`[]

A single `PubSubClientId` or an array of IDs to
  send the event to.

#### Returns

`void`

#### Implementation of

[`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md).[`publish`](../interfaces/IPubSubServerTransport.md#publish)

***

### subscribe()

> **subscribe**(`events`?, `options`?): `Client`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:15](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/pubsub/sse-server.ts#L15)

Establishes a connection with a client and subscribes it to an event stream.

This method is designed to be generic. Transport-specific details, such as
HTTP request/response objects or connection handles, should be passed
inside the `options` parameter to avoid polluting the abstraction layer.

#### Parameters

##### events?

`string`[]

Optional array of event names to initially subscribe the client to.

##### options?

A container for transport-specific parameters.

###### clientId?

`string`

An optional ID provided by the client. If not provided,
  the transport should generate one.

###### req?

`IncomingMessage`

The underlying request object (e.g., `http.IncomingMessage`).

###### res?

`ServerResponse`\<`IncomingMessage`\>

The underlying response object (e.g., `http.ServerResponse`).

#### Returns

`Client`

A `PubSubClient` object representing the newly connected client.

#### Implementation of

[`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md).[`subscribe`](../interfaces/IPubSubServerTransport.md#subscribe)
