[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / SSEChannel

# Class: SSEChannel

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:56

A class for creating Server-Sent Events (SSE) channels.

## Example

```ts
const sseChannel = new SSEChannel({ pingInterval: 5000 })
sseChannel.publish('Hello, world!', 'greeting')
```

## Constructors

### Constructor

> **new SSEChannel**(`options?`): `SSEChannel`

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:80

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

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:57

***

### clients

> **clients**: `Map`\<`string`, [`SSEClient`](../type-aliases/SSEClient.md)\>

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:58

***

### messages

> **messages**: `Record`\<`string`, `any`\>[]

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:59

***

### nextID

> **nextID**: `number`

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:60

***

### options

> **options**: `Record`\<`string`, `any`\>

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:61

***

### pingTimer?

> `optional` **pingTimer**: `Timeout`

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:62

## Accessors

### active

#### Get Signature

> **get** **active**(): `boolean`

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:67

Gets the active status of the channel.

##### Returns

`boolean`

True if the channel is active, false otherwise.

#### Set Signature

> **set** **active**(`v`): `void`

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:68

##### Parameters

###### v

`boolean`

##### Returns

`void`

## Methods

### clearClients()

> **clearClients**(): `void`

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:132

Disconnects all clients from the SSE channel.

#### Returns

`void`

***

### connect()

> **connect**(`req`, `res`, `events?`, `clientId?`): [`SSEClient`](../type-aliases/SSEClient.md)

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:123

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

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:128

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

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:112

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

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:142

Gets the number of clients subscribed to the SSE channel.

#### Returns

`number`

- Returns the number of clients.

***

### listClients()

> **listClients**(): `Record`\<`string`, `number`\>

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:137

Lists the clients connected to the SSE channel grouped by IP address.

#### Returns

`Record`\<`string`, `number`\>

- Returns an object where the keys are the IP addresses and the values are the number of clients connected from each IP.

***

### publish()

> **publish**(`data?`, `eventName?`, `target?`): `undefined` \| `number`

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:90

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

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:99

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

Defined in: @isdk/ai-tools/packages/tool-event/dist/index.d.ts:106

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
