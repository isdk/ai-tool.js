[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / PubSubClientStream

# Interface: PubSubClientStream

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:3](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/client.ts#L3)

## Properties

### addEventListener()?

> `optional` **addEventListener**: (`event`, `listener`) => `void`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:11](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/client.ts#L11)

#### Parameters

##### event

`string`

##### listener

(`data`, `ctx`?) => `void`

#### Returns

`void`

***

### close()

> **close**: () => `void`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:8](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/client.ts#L8)

#### Returns

`void`

***

### off()

> **off**: (`event`, `listener`) => `void`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:7](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/client.ts#L7)

#### Parameters

##### event

`string`

##### listener

(`data`, `ctx`?) => `void`

#### Returns

`void`

***

### on()

> **on**: (`event`, `listener`) => `void`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:6](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/client.ts#L6)

#### Parameters

##### event

`string`

##### listener

(`data`, `ctx`?) => `void`

#### Returns

`void`

***

### protocol

> **protocol**: `string`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:4](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/client.ts#L4)

***

### readyState?

> `optional` **readyState**: `number`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:5](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/client.ts#L5)

***

### removeEventListener()?

> `optional` **removeEventListener**: (`event`, `listener`) => `void`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:12](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/client.ts#L12)

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

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/client.ts:9](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/client.ts#L9)

#### Parameters

##### event

`string`

##### data

`any`

##### ctx?

[`PubSubCtx`](../type-aliases/PubSubCtx.md)

#### Returns

`void`
