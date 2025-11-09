[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / IPubSubClientTransport

# Interface: IPubSubClientTransport

Defined in: @isdk/ai-tools/packages/tool-event/dist/transports/pubsub.d.ts:80

Defines the interface for a client-side PubSub transport.

This abstraction is responsible for creating and managing the connection
stream (`PubSubClientStream`) to the server.

## Properties

### connect()

> **connect**: (`url`, `params?`) => [`PubSubClientStream`](PubSubClientStream.md) \| `Promise`\<[`PubSubClientStream`](PubSubClientStream.md)\>

Defined in: @isdk/ai-tools/packages/tool-event/dist/transports/pubsub.d.ts:88

Establishes a connection to a server endpoint.

#### Parameters

##### url

`string`

The full URL of the endpoint, or a path relative to the `apiRoot` that may have been configured on the transport.

##### params?

`any`

Optional parameters for the connection, which might include
  things like authentication tokens, initial subscription topics, or a client ID.

#### Returns

[`PubSubClientStream`](PubSubClientStream.md) \| `Promise`\<[`PubSubClientStream`](PubSubClientStream.md)\>

A `PubSubClientStream` instance that represents the active connection.

***

### disconnect()?

> `optional` **disconnect**: (`stream`) => `void`

Defined in: @isdk/ai-tools/packages/tool-event/dist/transports/pubsub.d.ts:96

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

***

### setApiRoot()?

> `optional` **setApiRoot**: (`apiRoot`) => `void`

Defined in: @isdk/ai-tools/packages/tool-event/dist/transports/pubsub.d.ts:103

Optional. Configures the transport with a base URL.
If implemented, this allows the transport to resolve relative paths
passed to the `connect` method.

#### Parameters

##### apiRoot

`string`

The base URL for the API.

#### Returns

`void`
