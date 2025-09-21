[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / SSEChannel

# Class: SSEChannel

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:41](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/event/sse-channel.ts#L41)

A class for creating Server-Sent Events (SSE) channels.

## Example

```ts
const sseChannel = new SSEChannel({ pingInterval: 5000 })
sseChannel.publish('Hello, world!', 'greeting')
```

## Constructors

### Constructor

> **new SSEChannel**(`options?`): `SSEChannel`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:92](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/event/sse-channel.ts#L92)

Creates a new SSE channel.

#### Parameters

##### options?

`Record`\<`string`, `any`\>

The options for the SSE channel.

#### Returns

`SSEChannel`

## Properties

### \_active

> **\_active**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:42](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/event/sse-channel.ts#L42)

***

### clients

> **clients**: `Map`\<`string`, [`SSEClient`](../type-aliases/SSEClient.md)\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:43](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/event/sse-channel.ts#L43)

***

### messages

> **messages**: `Record`\<`string`, `any`\>[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:44](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/event/sse-channel.ts#L44)

***

### nextID

> **nextID**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:45](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/event/sse-channel.ts#L45)

***

### options

> **options**: `Record`\<`string`, `any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:46](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/event/sse-channel.ts#L46)

***

### pingTimer?

> `optional` **pingTimer**: `Timeout`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:47](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/event/sse-channel.ts#L47)

## Accessors

### active

#### Get Signature

> **get** **active**(): `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:53](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/event/sse-channel.ts#L53)

Gets the active status of the channel.

##### Returns

`boolean`

True if the channel is active, false otherwise.

#### Set Signature

> **set** **active**(`v`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:57](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/event/sse-channel.ts#L57)

##### Parameters

###### v

`boolean`

##### Returns

`void`

## Methods

### clearClients()

> **clearClients**(): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:317](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/event/sse-channel.ts#L317)

Disconnects all clients from the SSE channel.

#### Returns

`void`

***

### connect()

> **connect**(`req`, `res`, `events?`, `clientId?`): [`SSEClient`](../type-aliases/SSEClient.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:243](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/event/sse-channel.ts#L243)

Establishes a new SSE connection with a client and adds it to the channel.

#### Parameters

##### req

`IncomingMessage`

The incoming HTTP request from the client.

##### res

`ServerResponse`

The server response object used to send events to the client.

##### events?

`Events`

An array of event names or patterns that the client wants to subscribe to.

##### clientId?

`string`

An optional unique identifier for the client. If not provided, one will be generated based on the client's IP and port.

#### Returns

[`SSEClient`](../type-aliases/SSEClient.md)

The newly created client object representing the connected client.

#### Throws

An error if the channel is closed or if a client ID cannot be determined.

***

### disconnect()

> **disconnect**(`c`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:309](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/event/sse-channel.ts#L309)

Disconnects a client from the SSE channel and cleans up resources.

#### Parameters

##### c

[`SSEClient`](../type-aliases/SSEClient.md)

The client to disconnect.

#### Returns

`void`

***

### getClient()

> **getClient**(`clientId`): `undefined` \| [`SSEClient`](../type-aliases/SSEClient.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:229](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/event/sse-channel.ts#L229)

Finds a client instance by its unique ID.

#### Parameters

##### clientId

`string`

The unique ID of the client.

#### Returns

`undefined` \| [`SSEClient`](../type-aliases/SSEClient.md)

The matching SSEClient, or undefined if not found.

***

### getSubscriberCount()

> **getSubscriberCount**(): `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:342](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/event/sse-channel.ts#L342)

Gets the number of clients subscribed to the SSE channel.

#### Returns

`number`

- Returns the number of clients.

***

### listClients()

> **listClients**(): `Record`\<`string`, `number`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:326](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/event/sse-channel.ts#L326)

Lists the clients connected to the SSE channel grouped by IP address.

#### Returns

`Record`\<`string`, `number`\>

- Returns an object where the keys are the IP addresses and the values are the number of clients connected from each IP.

***

### publish()

> **publish**(`data?`, `eventName?`, `target?`): `undefined` \| `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:122](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/event/sse-channel.ts#L122)

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

> **subscribe**(`clientId`, `events`): `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:183](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/event/sse-channel.ts#L183)

Adds event subscriptions to an active client.

#### Parameters

##### clientId

`string`

The ID of the client to modify.

##### events

`Events`

An array of event names or patterns to add.

#### Returns

`boolean`

`true` if the client was found and updated, otherwise `false`.

***

### unsubscribe()

> **unsubscribe**(`clientId`, `events`): `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/event/sse-channel.ts:208](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/event/sse-channel.ts#L208)

Removes event subscriptions from an active client.

#### Parameters

##### clientId

`string`

The ID of the client to modify.

##### events

`Events`

An array of event names or patterns to remove.

#### Returns

`boolean`

`true` if the client was found and updated, otherwise `false`.
