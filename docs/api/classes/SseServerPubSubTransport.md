[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / SseServerPubSubTransport

# Class: SseServerPubSubTransport

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:5](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/sse-server.ts#L5)

## Implements

- [`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md)

## Constructors

### new SseServerPubSubTransport()

> **new SseServerPubSubTransport**(): [`SseServerPubSubTransport`](SseServerPubSubTransport.md)

#### Returns

[`SseServerPubSubTransport`](SseServerPubSubTransport.md)

## Properties

### name

> `readonly` **name**: `"sse"` = `'sse'`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:6](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/sse-server.ts#L6)

#### Implementation of

[`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md).[`name`](../interfaces/IPubSubServerTransport.md#name)

***

### protocol

> `readonly` **protocol**: `"sse"`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:7](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/sse-server.ts#L7)

#### Implementation of

[`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md).[`protocol`](../interfaces/IPubSubServerTransport.md#protocol)

## Methods

### mount()?

> `optional` **mount**(): `void`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:13](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/sse-server.ts#L13)

#### Returns

`void`

#### Implementation of

[`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md).[`mount`](../interfaces/IPubSubServerTransport.md#mount)

***

### onConnection()

> **onConnection**(`cb`): `void`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:43](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/sse-server.ts#L43)

#### Parameters

##### cb

(`s`) => `void`

#### Returns

`void`

#### Implementation of

[`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md).[`onConnection`](../interfaces/IPubSubServerTransport.md#onconnection)

***

### onDisconnect()

> **onDisconnect**(`cb`): `void`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:44](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/sse-server.ts#L44)

#### Parameters

##### cb

(`s`) => `void`

#### Returns

`void`

#### Implementation of

[`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md).[`onDisconnect`](../interfaces/IPubSubServerTransport.md#ondisconnect)

***

### publish()

> **publish**(`event`, `data`): `void`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:39](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/sse-server.ts#L39)

#### Parameters

##### event

`string`

##### data

`any`

#### Returns

`void`

#### Implementation of

[`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md).[`publish`](../interfaces/IPubSubServerTransport.md#publish)

***

### subscribe()

> **subscribe**(`events`?, `options`?): `void`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/sse-server.ts:15](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/sse-server.ts#L15)

#### Parameters

##### events?

`string`[]

##### options?

###### clientId?

`string`

###### req?

`IncomingMessage`

###### res?

`ServerResponse`\<`IncomingMessage`\>

#### Returns

`void`

#### Implementation of

[`IPubSubServerTransport`](../interfaces/IPubSubServerTransport.md).[`subscribe`](../interfaces/IPubSubServerTransport.md#subscribe)
