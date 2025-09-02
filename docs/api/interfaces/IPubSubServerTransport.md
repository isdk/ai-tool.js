[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / IPubSubServerTransport

# Interface: IPubSubServerTransport

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:15](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/server.ts#L15)

## Properties

### mount()?

> `optional` **mount**: (`path`, `options`?) => `void`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:20](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/server.ts#L20)

#### Parameters

##### path

`string`

##### options?

`Record`\<`string`, `any`\>

#### Returns

`void`

***

### name

> `readonly` **name**: `string`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:16](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/server.ts#L16)

***

### onConnection()

> **onConnection**: (`cb`) => `void`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:38](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/server.ts#L38)

#### Parameters

##### cb

(`session`) => `void`

#### Returns

`void`

***

### onDisconnect()

> **onDisconnect**: (`cb`) => `void`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:39](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/server.ts#L39)

#### Parameters

##### cb

(`session`) => `void`

#### Returns

`void`

***

### onMessage()?

> `optional` **onMessage**: (`cb`) => `void`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:42](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/server.ts#L42)

#### Parameters

##### cb

(`session`, `event`, `data`, `ctx`?) => `void`

#### Returns

`void`

***

### protocol

> `readonly` **protocol**: `string`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:17](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/server.ts#L17)

***

### publish()

> **publish**: (`event`, `data`, `target`?, `ctx`?) => `void`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:35](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/server.ts#L35)

#### Parameters

##### event

`string`

##### data

`any`

##### target?

###### clientId?

`string` \| `string`[]

##### ctx?

[`PubSubCtx`](../type-aliases/PubSubCtx.md)

#### Returns

`void`

***

### subscribe()

> **subscribe**: (`events`?, `options`?) => `void`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:23](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/server.ts#L23)

#### Parameters

##### events?

`string`[]

##### options?

###### clientId?

`string`

###### headers?

`Record`\<`string`, `string`\>

###### req?

`any`

###### res?

`any`

#### Returns

`void`
