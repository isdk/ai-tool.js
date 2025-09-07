[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / SseClientPubSubTransport

# Class: SseClientPubSubTransport

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-client.ts:4](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/pubsub/sse-client.ts#L4)

Defines the interface for a client-side PubSub transport.

This abstraction is responsible for creating and managing the connection
stream (`PubSubClientStream`) to the server.

## Implements

- [`IPubSubClientTransport`](../interfaces/IPubSubClientTransport.md)

## Constructors

### new SseClientPubSubTransport()

> **new SseClientPubSubTransport**(): [`SseClientPubSubTransport`](SseClientPubSubTransport.md)

#### Returns

[`SseClientPubSubTransport`](SseClientPubSubTransport.md)

## Methods

### connect()

> **connect**(`url`, `params`?): [`PubSubClientStream`](../interfaces/PubSubClientStream.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-client.ts:5](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/pubsub/sse-client.ts#L5)

Establishes a connection to a server endpoint.

#### Parameters

##### url

`string`

The URL of the server's PubSub endpoint.

##### params?

`Record`\<`string`, `any`\>

Optional parameters for the connection, which might include
  things like authentication tokens, initial subscription topics, or a client ID.

#### Returns

[`PubSubClientStream`](../interfaces/PubSubClientStream.md)

A `PubSubClientStream` instance that represents the active connection.

#### Implementation of

[`IPubSubClientTransport`](../interfaces/IPubSubClientTransport.md).[`connect`](../interfaces/IPubSubClientTransport.md#connect)

***

### disconnect()

> **disconnect**(`stream`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-client.ts:45](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/transports/pubsub/sse-client.ts#L45)

Optional. Disconnects a given stream.
While the `close` method exists on the stream itself, placing `disconnect`
on the transport can be semantically clearer in some architectures.
By default, this should delegate to `stream.close()`.

#### Parameters

##### stream

[`PubSubClientStream`](../interfaces/PubSubClientStream.md)

The stream to disconnect.

#### Returns

`void`

#### Implementation of

[`IPubSubClientTransport`](../interfaces/IPubSubClientTransport.md).[`disconnect`](../interfaces/IPubSubClientTransport.md#disconnect)
