[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / IPubSubClientTransport

# Interface: IPubSubClientTransport

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:74](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/pubsub/client.ts#L74)

Defines the interface for a client-side PubSub transport.

This abstraction is responsible for creating and managing the connection
stream (`PubSubClientStream`) to the server.

## Properties

### connect()

> **connect**: (`url`, `params`?) => [`PubSubClientStream`](PubSubClientStream.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:82](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/pubsub/client.ts#L82)

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

[`PubSubClientStream`](PubSubClientStream.md)

A `PubSubClientStream` instance that represents the active connection.

***

### disconnect()?

> `optional` **disconnect**: (`stream`) => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:91](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/pubsub/client.ts#L91)

Optional. Disconnects a given stream.
While the `close` method exists on the stream itself, placing `disconnect`
on the transport can be semantically clearer in some architectures.
By default, this should delegate to `stream.close()`.

#### Parameters

##### stream

[`PubSubClientStream`](PubSubClientStream.md)

The stream to disconnect.

#### Returns

`void`
