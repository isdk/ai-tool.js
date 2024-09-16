[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / SSEChannel

# Class: SSEChannel

A class for creating Server-Sent Events (SSE) channels.

**`Example`**

```ts
const sseChannel = new SSEChannel({ pingInterval: 5000 })
sseChannel.publish('Hello, world!', 'greeting')
```

## Table of contents

### Constructors

- [constructor](SSEChannel.md#constructor)

### Properties

- [\_active](SSEChannel.md#_active)
- [clients](SSEChannel.md#clients)
- [messages](SSEChannel.md#messages)
- [nextID](SSEChannel.md#nextid)
- [options](SSEChannel.md#options)
- [pingTimer](SSEChannel.md#pingtimer)

### Accessors

- [active](SSEChannel.md#active)

### Methods

- [clearClients](SSEChannel.md#clearclients)
- [getSubscriberCount](SSEChannel.md#getsubscribercount)
- [listClients](SSEChannel.md#listclients)
- [publish](SSEChannel.md#publish)
- [subscribe](SSEChannel.md#subscribe)
- [unsubscribe](SSEChannel.md#unsubscribe)

## Constructors

### constructor

• **new SSEChannel**(`options?`): [`SSEChannel`](SSEChannel.md)

Creates a new SSE channel.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Record`\<`string`, `any`\> | The options for the SSE channel. |

#### Returns

[`SSEChannel`](SSEChannel.md)

#### Defined in

[packages/ai-tool/src/utils/event/sse-channel.ts:65](https://github.com/isdk/ai-tool.js/blob/c5e620338f3b80d6ef09148577c5087098896d8b/src/utils/event/sse-channel.ts#L65)

## Properties

### \_active

• **\_active**: `boolean`

#### Defined in

[packages/ai-tool/src/utils/event/sse-channel.ts:26](https://github.com/isdk/ai-tool.js/blob/c5e620338f3b80d6ef09148577c5087098896d8b/src/utils/event/sse-channel.ts#L26)

___

### clients

• **clients**: `Set`\<`Client`\>

#### Defined in

[packages/ai-tool/src/utils/event/sse-channel.ts:27](https://github.com/isdk/ai-tool.js/blob/c5e620338f3b80d6ef09148577c5087098896d8b/src/utils/event/sse-channel.ts#L27)

___

### messages

• **messages**: `Record`\<`string`, `any`\>[]

#### Defined in

[packages/ai-tool/src/utils/event/sse-channel.ts:28](https://github.com/isdk/ai-tool.js/blob/c5e620338f3b80d6ef09148577c5087098896d8b/src/utils/event/sse-channel.ts#L28)

___

### nextID

• **nextID**: `number`

#### Defined in

[packages/ai-tool/src/utils/event/sse-channel.ts:29](https://github.com/isdk/ai-tool.js/blob/c5e620338f3b80d6ef09148577c5087098896d8b/src/utils/event/sse-channel.ts#L29)

___

### options

• **options**: `Record`\<`string`, `any`\>

#### Defined in

[packages/ai-tool/src/utils/event/sse-channel.ts:30](https://github.com/isdk/ai-tool.js/blob/c5e620338f3b80d6ef09148577c5087098896d8b/src/utils/event/sse-channel.ts#L30)

___

### pingTimer

• `Optional` **pingTimer**: `Timeout`

#### Defined in

[packages/ai-tool/src/utils/event/sse-channel.ts:31](https://github.com/isdk/ai-tool.js/blob/c5e620338f3b80d6ef09148577c5087098896d8b/src/utils/event/sse-channel.ts#L31)

## Accessors

### active

• `get` **active**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/ai-tool/src/utils/event/sse-channel.ts:33](https://github.com/isdk/ai-tool.js/blob/c5e620338f3b80d6ef09148577c5087098896d8b/src/utils/event/sse-channel.ts#L33)

• `set` **active**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/event/sse-channel.ts:37](https://github.com/isdk/ai-tool.js/blob/c5e620338f3b80d6ef09148577c5087098896d8b/src/utils/event/sse-channel.ts#L37)

## Methods

### clearClients

▸ **clearClients**(): `void`

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/event/sse-channel.ts:195](https://github.com/isdk/ai-tool.js/blob/c5e620338f3b80d6ef09148577c5087098896d8b/src/utils/event/sse-channel.ts#L195)

___

### getSubscriberCount

▸ **getSubscriberCount**(): `number`

Gets the number of clients subscribed to the SSE channel.

#### Returns

`number`

- Returns the number of clients.

#### Defined in

[packages/ai-tool/src/utils/event/sse-channel.ts:220](https://github.com/isdk/ai-tool.js/blob/c5e620338f3b80d6ef09148577c5087098896d8b/src/utils/event/sse-channel.ts#L220)

___

### listClients

▸ **listClients**(): `Record`\<`string`, `number`\>

Lists the clients connected to the SSE channel grouped by IP address.

#### Returns

`Record`\<`string`, `number`\>

- Returns an object where the keys are the IP addresses and the values are the number of clients connected from each IP.

#### Defined in

[packages/ai-tool/src/utils/event/sse-channel.ts:204](https://github.com/isdk/ai-tool.js/blob/c5e620338f3b80d6ef09148577c5087098896d8b/src/utils/event/sse-channel.ts#L204)

___

### publish

▸ **publish**(`data?`, `eventName?`): `undefined` \| `number`

Publishes a message to the SSE channel.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data?` | `string` \| `Record`\<`string`, `any`\> | The data to send. It can be a string or an object. |
| `eventName?` | `string` | The name of the event. |

#### Returns

`undefined` \| `number`

- Returns the ID of the message.

**`Throws`**

Will throw an error if the channel is closed.

#### Defined in

[packages/ai-tool/src/utils/event/sse-channel.ts:93](https://github.com/isdk/ai-tool.js/blob/c5e620338f3b80d6ef09148577c5087098896d8b/src/utils/event/sse-channel.ts#L93)

___

### subscribe

▸ **subscribe**(`req`, `res`, `events?`): `Object`

Subscribes a client to the SSE channel.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `req` | `IncomingMessage` | The request object. |
| `res` | `ServerResponse`\<`IncomingMessage`\> | The response object. |
| `events?` | `Events` | The events to subscribe to. |

#### Returns

`Object`

- Returns the client object.

| Name | Type |
| :------ | :------ |
| `events` | `undefined` \| `Events` |
| `req` | `IncomingMessage` |
| `res` | `ServerResponse`\<`IncomingMessage`\> |

**`Throws`**

Will throw an error if the channel is closed.

#### Defined in

[packages/ai-tool/src/utils/event/sse-channel.ts:143](https://github.com/isdk/ai-tool.js/blob/c5e620338f3b80d6ef09148577c5087098896d8b/src/utils/event/sse-channel.ts#L143)

___

### unsubscribe

▸ **unsubscribe**(`c`): `void`

Unsubscribes a client from the SSE channel.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | `Client` | The client to unsubscribe. |

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/event/sse-channel.ts:190](https://github.com/isdk/ai-tool.js/blob/c5e620338f3b80d6ef09148577c5087098896d8b/src/utils/event/sse-channel.ts#L190)
