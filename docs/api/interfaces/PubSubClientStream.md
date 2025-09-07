[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / PubSubClientStream

# Interface: PubSubClientStream

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:11](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/pubsub/client.ts#L11)

Represents the client-side stream for a PubSub connection.

This interface abstracts the underlying connection object (like an `EventSource`
or `WebSocket` client) into a standardized event-based stream. It provides
methods for listening to events, sending messages (for bidirectional transports),
and managing the connection state.

## Properties

### addEventListener()?

> `optional` **addEventListener**: (`event`, `listener`) => `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:59](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/pubsub/client.ts#L59)

Optional alias for the `on` method for compatibility with the
standard `EventTarget` interface.

#### Parameters

##### event

`string`

##### listener

(`data`, `ctx`?) => `void`

#### Returns

`any`

***

### close()

> **close**: () => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:43](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/pubsub/client.ts#L43)

Closes the connection stream.

#### Returns

`void`

***

### off()

> **off**: (`event`, `listener`) => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:38](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/pubsub/client.ts#L38)

Removes a previously registered event listener.

#### Parameters

##### event

`string`

The name of the event.

##### listener

(`data`, `ctx`?) => `void`

The listener function to remove.

#### Returns

`void`

***

### on()

> **on**: (`event`, `listener`) => `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:31](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/pubsub/client.ts#L31)

Registers a listener for a specific event from the server.

#### Parameters

##### event

`string`

The name of the event to listen for.

##### listener

(`data`, `ctx`?) => `void`

The callback function to execute when the event is received.
  It receives the event data and an optional context object.

#### Returns

`any`

***

### protocol

> **protocol**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:15](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/pubsub/client.ts#L15)

The protocol being used for this stream (e.g., 'sse', 'ws', 'ipc').

***

### readyState?

> `optional` **readyState**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:23](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/pubsub/client.ts#L23)

Optional. Represents the state of the connection.
This is provided for compatibility with the `EventSource.readyState`
and `WebSocket.readyState` properties.
(e.g., 0 for connecting, 1 for open, 2 for closed).

***

### removeEventListener()?

> `optional` **removeEventListener**: (`event`, `listener`) => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:65](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/pubsub/client.ts#L65)

Optional alias for the `off` method for compatibility with the
standard `EventTarget` interface.

#### Parameters

##### event

`string`

##### listener

(`data`, `ctx`?) => `void`

#### Returns

`void`

***

### send()?

> `optional` **send**: (`event`, `data`, `ctx`?) => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:53](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/pubsub/client.ts#L53)

Optional. Sends a message from the client to the server.
This method is only available for bidirectional transports like WebSockets or IPC.
It is not supported by unidirectional transports like Server-Sent Events (SSE).

#### Parameters

##### event

`string`

The name of the event to send.

##### data

`any`

The payload for the event.

##### ctx?

[`PubSubCtx`](../type-aliases/PubSubCtx.md)

Optional context for the PubSub operation.

#### Returns

`void`
