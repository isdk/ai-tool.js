[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / SSEChannel

# Class: SSEChannel

Defined in: [packages/ai-tool/src/utils/event/sse-channel.ts:25](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/event/sse-channel.ts#L25)

A class for creating Server-Sent Events (SSE) channels.

## Example

```ts
const sseChannel = new SSEChannel({ pingInterval: 5000 })
sseChannel.publish('Hello, world!', 'greeting')
```

## Constructors

### new SSEChannel()

> **new SSEChannel**(`options`?): [`SSEChannel`](SSEChannel.md)

Defined in: [packages/ai-tool/src/utils/event/sse-channel.ts:65](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/event/sse-channel.ts#L65)

Creates a new SSE channel.

#### Parameters

##### options?

`Record`\<`string`, `any`\>

The options for the SSE channel.

#### Returns

[`SSEChannel`](SSEChannel.md)

## Properties

### \_active

> **\_active**: `boolean`

Defined in: [packages/ai-tool/src/utils/event/sse-channel.ts:26](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/event/sse-channel.ts#L26)

***

### clients

> **clients**: `Set`\<`Client`\>

Defined in: [packages/ai-tool/src/utils/event/sse-channel.ts:27](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/event/sse-channel.ts#L27)

***

### messages

> **messages**: `Record`\<`string`, `any`\>[]

Defined in: [packages/ai-tool/src/utils/event/sse-channel.ts:28](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/event/sse-channel.ts#L28)

***

### nextID

> **nextID**: `number`

Defined in: [packages/ai-tool/src/utils/event/sse-channel.ts:29](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/event/sse-channel.ts#L29)

***

### options

> **options**: `Record`\<`string`, `any`\>

Defined in: [packages/ai-tool/src/utils/event/sse-channel.ts:30](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/event/sse-channel.ts#L30)

***

### pingTimer?

> `optional` **pingTimer**: `Timeout`

Defined in: [packages/ai-tool/src/utils/event/sse-channel.ts:31](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/event/sse-channel.ts#L31)

## Accessors

### active

#### Get Signature

> **get** **active**(): `boolean`

Defined in: [packages/ai-tool/src/utils/event/sse-channel.ts:33](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/event/sse-channel.ts#L33)

##### Returns

`boolean`

#### Set Signature

> **set** **active**(`v`): `void`

Defined in: [packages/ai-tool/src/utils/event/sse-channel.ts:37](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/event/sse-channel.ts#L37)

##### Parameters

###### v

`boolean`

##### Returns

`void`

## Methods

### clearClients()

> **clearClients**(): `void`

Defined in: [packages/ai-tool/src/utils/event/sse-channel.ts:195](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/event/sse-channel.ts#L195)

#### Returns

`void`

***

### getSubscriberCount()

> **getSubscriberCount**(): `number`

Defined in: [packages/ai-tool/src/utils/event/sse-channel.ts:220](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/event/sse-channel.ts#L220)

Gets the number of clients subscribed to the SSE channel.

#### Returns

`number`

- Returns the number of clients.

***

### listClients()

> **listClients**(): `Record`\<`string`, `number`\>

Defined in: [packages/ai-tool/src/utils/event/sse-channel.ts:204](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/event/sse-channel.ts#L204)

Lists the clients connected to the SSE channel grouped by IP address.

#### Returns

`Record`\<`string`, `number`\>

- Returns an object where the keys are the IP addresses and the values are the number of clients connected from each IP.

***

### publish()

> **publish**(`data`?, `eventName`?): `undefined` \| `number`

Defined in: [packages/ai-tool/src/utils/event/sse-channel.ts:93](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/event/sse-channel.ts#L93)

Publishes a message to the SSE channel.

#### Parameters

##### data?

The data to send. It can be a string or an object.

`string` | `Record`\<`string`, `any`\>

##### eventName?

`string`

The name of the event.

#### Returns

`undefined` \| `number`

- Returns the ID of the message.

#### Throws

Will throw an error if the channel is closed.

***

### subscribe()

> **subscribe**(`req`, `res`, `events`?): `object`

Defined in: [packages/ai-tool/src/utils/event/sse-channel.ts:143](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/event/sse-channel.ts#L143)

Subscribes a client to the SSE channel.

#### Parameters

##### req

`IncomingMessage`

The request object.

##### res

`ServerResponse`

The response object.

##### events?

`Events`

The events to subscribe to.

#### Returns

`object`

- Returns the client object.

##### events

> **events**: `undefined` \| `Events`

##### req

> **req**: `IncomingMessage`

##### res

> **res**: `ServerResponse`\<`IncomingMessage`\>

#### Throws

Will throw an error if the channel is closed.

***

### unsubscribe()

> **unsubscribe**(`c`): `void`

Defined in: [packages/ai-tool/src/utils/event/sse-channel.ts:190](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/utils/event/sse-channel.ts#L190)

Unsubscribes a client from the SSE channel.

#### Parameters

##### c

`Client`

The client to unsubscribe.

#### Returns

`void`
