[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / IPubSubServerTransport

# Interface: IPubSubServerTransport

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:71](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/pubsub/server.ts#L71)

Defines the interface for a server-side PubSub transport layer.

This abstraction allows the `EventServer` to operate independently of the
underlying real-time communication protocol (e.g., SSE, WebSockets, IPC).
An implementation of this interface is responsible for managing client
connections, subscriptions, and message passing.

## Properties

### mount()?

> `optional` **mount**: (`path`, `options`?) => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:89](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/pubsub/server.ts#L89)

Optional method to mount or register the transport's endpoint with an HTTP
server or framework. This is typically required for protocols like SSE or
WebSockets that need to handle incoming HTTP requests at a specific path.

#### Parameters

##### path

`string`

The URL path to handle (e.g., '/api/events').

##### options?

`Record`\<`string`, `any`\>

Additional options for mounting, specific to the framework.

#### Returns

`void`

***

### name

> `readonly` **name**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:75](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/pubsub/server.ts#L75)

A unique, human-readable name for the transport (e.g., 'sse', 'websocket').

***

### onConnection()

> **onConnection**: (`cb`) => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:144](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/pubsub/server.ts#L144)

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:151](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/pubsub/server.ts#L151)

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:159](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/pubsub/server.ts#L159)

Optional. Registers a callback to handle incoming messages from clients.
This is only necessary for bidirectional transport protocols like WebSockets or IPC.

#### Parameters

##### cb

(`session`, `event`, `data`, `ctx`?) => `void`

The callback function that receives the session, event name, data, and context.

#### Returns

`void`

***

### protocol

> `readonly` **protocol**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:79](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/pubsub/server.ts#L79)

The protocol identifier.

***

### publish()

> **publish**: (`event`, `data`, `target`?, `ctx`?) => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:132](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/pubsub/server.ts#L132)

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

> **subscribe**: (`events`?, `options`?) => [`PubSubClient`](PubSubClient.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:107](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/pubsub/server.ts#L107)

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

###### headers?

`Record`\<`string`, `string`\>

HTTP headers from the client request.

###### req?

`any`

The underlying request object (e.g., `http.IncomingMessage`).

###### res?

`any`

The underlying response object (e.g., `http.ServerResponse`).

#### Returns

[`PubSubClient`](PubSubClient.md)

A `PubSubClient` object representing the newly connected client.
