[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / SseClientPubSubTransport

# Class: SseClientPubSubTransport

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/sse-client.ts:4](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/sse-client.ts#L4)

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

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/sse-client.ts:5](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/sse-client.ts#L5)

#### Parameters

##### url

`string`

##### params?

`Record`\<`string`, `any`\>

#### Returns

[`PubSubClientStream`](../interfaces/PubSubClientStream.md)

#### Implementation of

[`IPubSubClientTransport`](../interfaces/IPubSubClientTransport.md).[`connect`](../interfaces/IPubSubClientTransport.md#connect)

***

### disconnect()

> **disconnect**(`stream`): `void`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/sse-client.ts:45](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/sse-client.ts#L45)

#### Parameters

##### stream

[`PubSubClientStream`](../interfaces/PubSubClientStream.md)

#### Returns

`void`

#### Implementation of

[`IPubSubClientTransport`](../interfaces/IPubSubClientTransport.md).[`disconnect`](../interfaces/IPubSubClientTransport.md#disconnect)
