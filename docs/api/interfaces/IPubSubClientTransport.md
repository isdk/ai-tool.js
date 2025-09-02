[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / IPubSubClientTransport

# Interface: IPubSubClientTransport

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:15](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/client.ts#L15)

## Properties

### connect()

> **connect**: (`url`, `params`?) => [`PubSubClientStream`](PubSubClientStream.md)

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:16](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/client.ts#L16)

#### Parameters

##### url

`string`

##### params?

`Record`\<`string`, `any`\>

#### Returns

[`PubSubClientStream`](PubSubClientStream.md)

***

### disconnect()?

> `optional` **disconnect**: (`stream`) => `void`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:17](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/client.ts#L17)

#### Parameters

##### stream

[`PubSubClientStream`](PubSubClientStream.md)

#### Returns

`void`
