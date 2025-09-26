[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / SseServerPubSubTransport

# Class: SseServerPubSubTransport

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:5](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/pubsub/sse-server.ts#L5)

Defines the interface for a server-side PubSub transport layer.

This abstraction allows the `EventServer` to operate independently of the
underlying real-time communication protocol (e.g., SSE, WebSockets, IPC).
An implementation of this interface is responsible for managing client
connections, subscriptions, and message passing.

## Implements

- [`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md)

## Constructors

### Constructor

> **new SseServerPubSubTransport**(): `SseServerPubSubTransport`

#### Returns

`SseServerPubSubTransport`

## Properties

### name

> `readonly` **name**: `"sse"` = `'sse'`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:6](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/pubsub/sse-server.ts#L6)

A unique, human-readable name for the transport (e.g., 'sse', 'websocket').

#### Implementation of

[`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md).[`name`](../interfaces/IPubSubServerTransport.md#name)

***

### protocol

> `readonly` **protocol**: `"sse"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:7](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/pubsub/sse-server.ts#L7)

The protocol identifier.

#### Implementation of

[`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md).[`protocol`](../interfaces/IPubSubServerTransport.md#protocol)

## Methods

### connect()

> **connect**(`options?`): [`PubSubServerSession`](../interfaces/PubSubServerSession.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:14](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/pubsub/sse-server.ts#L14)

Connects a client, establishing a persistent communication channel.

This method is designed to be generic. Transport-specific details, such as
HTTP request/response objects, are passed inside the `options` parameter.
For protocols like SSE, initial events can be passed to be subscribed to at connection time.

#### Parameters

##### options?

A container for transport-specific parameters, including optional initial events.

###### clientId?

`string`

###### events?

`string`[]

###### req

`IncomingMessage`

###### res

`ServerResponse`

#### Returns

[`PubSubServerSession`](../interfaces/PubSubServerSession.md)

A `PubSubServerSession` object representing the newly connected client session.

#### Implementation of

[`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md).[`connect`](../interfaces/IPubSubServerTransport.md#connect)

***

### getSessionFromReq()

> **getSessionFromReq**(`req`): `undefined` \| [`PubSubServerSession`](../interfaces/PubSubServerSession.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:44](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/pubsub/sse-server.ts#L44)

Optional. Finds and returns a session based on a request object.
This is used by higher-level tools to find the correct session
for operations like adding a subscription via a generic RPC call.

#### Parameters

##### req

`IncomingMessage`

The request object (e.g., http.IncomingMessage or Electron.IpcMainEvent).

#### Returns

`undefined` \| [`PubSubServerSession`](../interfaces/PubSubServerSession.md)

The corresponding session, or undefined if not found.

#### Implementation of

[`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md).[`getSessionFromReq`](../interfaces/IPubSubServerTransport.md#getsessionfromreq)

***

### onConnection()

> **onConnection**(`cb`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:69](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/pubsub/sse-server.ts#L69)

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:70](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/pubsub/sse-server.ts#L70)

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

> **publish**(`event`, `data`, `target?`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:65](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/pubsub/sse-server.ts#L65)

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

> **subscribe**(`session`, `events`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:53](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/pubsub/sse-server.ts#L53)

Subscribes a client session to one or more events.

Note: Not all transports may support subscribing to new events after the
initial connection. For transports like SSE, this might be a no-op or
throw an error.

#### Parameters

##### session

[`PubSubServerSession`](../interfaces/PubSubServerSession.md)

The `PubSubServerSession` of the client.

##### events

`string`[]

An array of event names to subscribe to.

#### Returns

`void`

#### Implementation of

[`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md).[`subscribe`](../interfaces/IPubSubServerTransport.md#subscribe)

***

### unsubscribe()

> **unsubscribe**(`session`, `events`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:59](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/pubsub/sse-server.ts#L59)

Unsubscribes a client session from one or more events.

Note: Not all transports may support unsubscribing from events after the
initial connection. For transports like SSE, this might be a no-op or
throw an error.

#### Parameters

##### session

[`PubSubServerSession`](../interfaces/PubSubServerSession.md)

The `PubSubServerSession` of the client.

##### events

`string`[]

An array of event names to unsubscribe from.

#### Returns

`void`

#### Implementation of

[`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md).[`unsubscribe`](../interfaces/IPubSubServerTransport.md#unsubscribe)
