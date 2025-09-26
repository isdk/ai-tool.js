[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / SseClientPubSubTransport

# Class: SseClientPubSubTransport

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-client.ts:5](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/pubsub/sse-client.ts#L5)

Defines the interface for a client-side PubSub transport.

This abstraction is responsible for creating and managing the connection
stream (`PubSubClientStream`) to the server.

## Implements

- [`IPubSubClientTransport`](../interfaces/IPubSubClientTransport.md)

## Constructors

### Constructor

> **new SseClientPubSubTransport**(): `SseClientPubSubTransport`

#### Returns

`SseClientPubSubTransport`

## Methods

### connect()

> **connect**(`url`, `params?`): `Promise`\<[`PubSubClientStream`](../interfaces/PubSubClientStream.md)\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-client.ts:12](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/pubsub/sse-client.ts#L12)

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

`Promise`\<[`PubSubClientStream`](../interfaces/PubSubClientStream.md)\>

A `PubSubClientStream` instance that represents the active connection.

#### Implementation of

[`IPubSubClientTransport`](../interfaces/IPubSubClientTransport.md).[`connect`](../interfaces/IPubSubClientTransport.md#connect)

***

### disconnect()

> **disconnect**(`stream`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-client.ts:80](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/pubsub/sse-client.ts#L80)

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

***

### setApiRoot()

> **setApiRoot**(`apiRoot`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/pubsub/sse-client.ts:8](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/transports/pubsub/sse-client.ts#L8)

Optional. Configures the transport with a base URL.
If implemented, this allows the transport to resolve relative paths
passed to the `connect` method.

#### Parameters

##### apiRoot

`string`

The base URL for the API.

#### Returns

`void`

#### Implementation of

[`IPubSubClientTransport`](../interfaces/IPubSubClientTransport.md).[`setApiRoot`](../interfaces/IPubSubClientTransport.md#setapiroot)
