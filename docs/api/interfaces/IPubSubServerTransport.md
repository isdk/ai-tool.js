[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / IPubSubServerTransport

# Interface: IPubSubServerTransport

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:54](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/pubsub/server.ts#L54)

Defines the interface for a server-side PubSub transport layer.

This abstraction allows the `EventServer` to operate independently of the
underlying real-time communication protocol (e.g., SSE, WebSockets, IPC).
An implementation of this interface is responsible for managing client
connections, subscriptions, and message passing.

## Properties

### connect()

> **connect**: (`options?`) => [`PubSubServerSession`](PubSubServerSession.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:74](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/pubsub/server.ts#L74)

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

`any`

###### res

`any`

#### Returns

[`PubSubServerSession`](PubSubServerSession.md)

A `PubSubServerSession` object representing the newly connected client session.

***

### getSessionFromReq()?

> `optional` **getSessionFromReq**: (`req`) => `undefined` \| [`PubSubServerSession`](PubSubServerSession.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:165](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/pubsub/server.ts#L165)

Optional. Finds and returns a session based on a request object.
This is used by higher-level tools to find the correct session
for operations like adding a subscription via a generic RPC call.

#### Parameters

##### req

`any`

The request object (e.g., http.IncomingMessage or Electron.IpcMainEvent).

#### Returns

`undefined` \| [`PubSubServerSession`](PubSubServerSession.md)

The corresponding session, or undefined if not found.

***

### name

> `readonly` **name**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:58](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/pubsub/server.ts#L58)

A unique, human-readable name for the transport (e.g., 'sse', 'websocket').

***

### onConnection()

> **onConnection**: (`cb`) => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:134](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/pubsub/server.ts#L134)

Registers a callback to be invoked when a new client connection is established
and a session is created.

#### Parameters

##### cb

(`session`) => `void`

The callback function that receives the new `PubSubServerSession`.

#### Returns

`void`

***

### onDisconnect()

> **onDisconnect**: (`cb`) => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:141](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/pubsub/server.ts#L141)

Registers a callback to be invoked when a client disconnects.

#### Parameters

##### cb

(`session`) => `void`

The callback function that receives the `PubSubServerSession` of the
  disconnected client.

#### Returns

`void`

***

### onMessage()?

> `optional` **onMessage**: (`cb`) => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:149](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/pubsub/server.ts#L149)

Optional. Registers a callback to handle incoming messages from clients.
This is only necessary for bidirectional transport protocols like WebSockets or IPC.

#### Parameters

##### cb

(`session`, `event`, `data`, `ctx?`) => `void`

The callback function that receives the session, event name, data, and context.

#### Returns

`void`

***

### protocol

> `readonly` **protocol**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:62](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/pubsub/server.ts#L62)

The protocol identifier.

***

### publish()

> **publish**: (`event`, `data`, `target?`, `ctx?`) => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:122](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/pubsub/server.ts#L122)

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

##### ctx?

[`PubSubCtx`](../type-aliases/PubSubCtx.md)

Optional context for the PubSub operation.

#### Returns

`void`

***

### subscribe()

> **subscribe**: (`session`, `events`) => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:94](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/pubsub/server.ts#L94)

Subscribes a client session to one or more events.

Note: Not all transports may support subscribing to new events after the
initial connection. For transports like SSE, this might be a no-op or
throw an error.

#### Parameters

##### session

[`PubSubServerSession`](PubSubServerSession.md)

The `PubSubServerSession` of the client.

##### events

`string`[]

An array of event names to subscribe to.

#### Returns

`void`

***

### unsubscribe()

> **unsubscribe**: (`session`, `events`) => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:106](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/pubsub/server.ts#L106)

Unsubscribes a client session from one or more events.

Note: Not all transports may support unsubscribing from events after the
initial connection. For transports like SSE, this might be a no-op or
throw an error.

#### Parameters

##### session

[`PubSubServerSession`](PubSubServerSession.md)

The `PubSubServerSession` of the client.

##### events

`string`[]

An array of event names to unsubscribe from.

#### Returns

`void`
