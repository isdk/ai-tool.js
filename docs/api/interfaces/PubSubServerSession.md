[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / PubSubServerSession

# Interface: PubSubServerSession

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:6](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/server.ts#L6)

## Properties

### clientId?

> `optional` **clientId**: `string`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:8](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/server.ts#L8)

***

### close()

> **close**: () => `void`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:11](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/server.ts#L11)

#### Returns

`void`

***

### id

> **id**: `string`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:7](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/server.ts#L7)

***

### protocol

> **protocol**: `string`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:9](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/server.ts#L9)

***

### raw?

> `optional` **raw**: `any`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:12](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/server.ts#L12)

***

### send()

> **send**: (`event`, `data`, `ctx`?) => `void`

Defined in: [ai-tools/packages/ai-tool/src/transports/pubsub/server.ts:10](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/pubsub/server.ts#L10)

#### Parameters

##### event

`string`

##### data

`any`

##### ctx?

[`PubSubCtx`](../type-aliases/PubSubCtx.md)

#### Returns

`void`
