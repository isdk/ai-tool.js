[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / SSEChannel

# Class: SSEChannel

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:41](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/event/sse-channel.ts#L41)

A class for creating Server-Sent Events (SSE) channels.

## Example

```ts
const sseChannel = new SSEChannel({ pingInterval: 5000 })
sseChannel.publish('Hello, world!', 'greeting')
```

## Constructors

### new SSEChannel()

> **new SSEChannel**(`options`?): [`SSEChannel`](SSEChannel.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:81](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/event/sse-channel.ts#L81)

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:42](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/event/sse-channel.ts#L42)

***

### clients

> **clients**: `Set`\<`Client`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:43](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/event/sse-channel.ts#L43)

***

### messages

> **messages**: `Record`\<`string`, `any`\>[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:44](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/event/sse-channel.ts#L44)

***

### nextID

> **nextID**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:45](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/event/sse-channel.ts#L45)

***

### options

> **options**: `Record`\<`string`, `any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:46](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/event/sse-channel.ts#L46)

***

### pingTimer?

> `optional` **pingTimer**: `Timeout`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:47](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/event/sse-channel.ts#L47)

## Accessors

### active

#### Get Signature

> **get** **active**(): `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:49](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/event/sse-channel.ts#L49)

##### Returns

`boolean`

#### Set Signature

> **set** **active**(`v`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:53](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/event/sse-channel.ts#L53)

##### Parameters

###### v

`boolean`

##### Returns

`void`

## Methods

### clearClients()

> **clearClients**(): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:229](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/event/sse-channel.ts#L229)

#### Returns

`void`

***

### getSubscriberCount()

> **getSubscriberCount**(): `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:254](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/event/sse-channel.ts#L254)

Gets the number of clients subscribed to the SSE channel.

#### Returns

`number`

- Returns the number of clients.

***

### listClients()

> **listClients**(): `Record`\<`string`, `number`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:238](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/event/sse-channel.ts#L238)

Lists the clients connected to the SSE channel grouped by IP address.

#### Returns

`Record`\<`string`, `number`\>

- Returns an object where the keys are the IP addresses and the values are the number of clients connected from each IP.

***

### publish()

> **publish**(`data`?, `eventName`?, `target`?): `undefined` \| `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:111](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/event/sse-channel.ts#L111)

Publishes data to the channel.

#### Parameters

##### data?

The data to send. Can be a string or a serializable object.

`string` | `Record`\<`string`, `any`\>

##### eventName?

`string`

Optional name for the event.

##### target?

Optional. If provided, the message will be sent only to clients with matching `clientId`s, bypassing event subscriptions.

###### clientId?

`string` \| `string`[]

#### Returns

`undefined` \| `number`

The ID of the message, or `undefined` if no message was sent.

#### Throws

An error if the channel is closed.

***

### subscribe()

> **subscribe**(`req`, `res`, `events`?, `clientId`?): `Client`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:171](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/event/sse-channel.ts#L171)

Subscribes a client to the SSE channel.

#### Parameters

##### req

`IncomingMessage`

The incoming HTTP request.

##### res

`ServerResponse`

The server response.

##### events?

`Events`

An array of event names or patterns to subscribe to.

##### clientId?

`string`

An optional unique ID for the client. If not provided, it defaults to `remoteAddress:remotePort`.

#### Returns

`Client`

The newly created client object.

#### Throws

An error if the channel is closed.

***

### unsubscribe()

> **unsubscribe**(`c`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:224](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/event/sse-channel.ts#L224)

Unsubscribes a client from the SSE channel.

#### Parameters

##### c

`Client`

The client to unsubscribe.

#### Returns

`void`
