[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / MailboxClientTransport

# Class: MailboxClientTransport

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:555

A client-side transport implementation using @mboxlabs/mailbox.

This transport enables making remote procedure calls over an asynchronous
message-based architecture. It manages a local registry of pending requests,
each associated with a unique 'mbx-req-id' to handle asynchronous correlation.

## Extends

- [`ClientToolTransport`](ClientToolTransport.md)

## Constructors

### Constructor

> **new MailboxClientTransport**(`options`): `MailboxClientTransport`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:563

#### Parameters

##### options

[`MailboxClientOptions`](../interfaces/MailboxClientOptions.md)

#### Returns

`MailboxClientTransport`

#### Overrides

[`ClientToolTransport`](ClientToolTransport.md).[`constructor`](ClientToolTransport.md#constructor)

## Properties

### apiRoot

> **apiRoot**: `string`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:173

The root endpoint for the remote service.
For HTTP, this is a URL. For IPC, it could be a channel name.

#### Inherited from

[`ClientToolTransport`](ClientToolTransport.md).[`apiRoot`](ClientToolTransport.md#apiroot)

***

### clientAddress

> `protected` **clientAddress**: `string`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:558

***

### isInternalMailbox

> `protected` **isInternalMailbox**: `boolean`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:562

***

### mailbox

> `protected` **mailbox**: `Mailbox`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:556

***

### options?

> `optional` **options**: `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:138

Additional options for the transport start or fetch, passed by mount.

#### Inherited from

[`ClientToolTransport`](ClientToolTransport.md).[`options`](ClientToolTransport.md#options)

***

### pendingRequests

> `protected` **pendingRequests**: `Map`\<`string`, `PendingRequest`\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:559

***

### serverAddress

> `protected` **serverAddress**: `string`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:557

***

### subscription

> `protected` **subscription**: `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:560

***

### timeout

> `protected` **timeout**: `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:561

***

### Tools

> **Tools**: *typeof* [`ClientTools`](../@isdk/namespaces/ClientTools/README.md)

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:174

#### Inherited from

[`ClientToolTransport`](ClientToolTransport.md).[`Tools`](ClientToolTransport.md#tools)

## Methods

### \_fetch()

> **\_fetch**(`fnId`, `args?`, `act?`, `resId?`, `fetchOptions?`, `toolTimeout?`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:567

#### Parameters

##### fnId

`string`

##### args?

`any`

##### act?

`string`

##### resId?

`any`

##### fetchOptions?

`any`

##### toolTimeout?

`any`

#### Returns

`Promise`\<`any`\>

#### Overrides

[`ClientToolTransport`](ClientToolTransport.md).[`_fetch`](ClientToolTransport.md#_fetch)

***

### \_mount()

> **\_mount**(`clientTools`, `apiPrefix`, `options?`): `Promise`\<[`Funcs`](../interfaces/Funcs.md)\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:564

#### Parameters

##### clientTools

*typeof* [`ClientTools`](../@isdk/namespaces/ClientTools/README.md)

##### apiPrefix

`string`

##### options?

`any`

#### Returns

`Promise`\<[`Funcs`](../interfaces/Funcs.md)\>

#### Overrides

[`ClientToolTransport`](ClientToolTransport.md).[`_mount`](ClientToolTransport.md#_mount)

***

### fetch()

> **fetch**(`name`, `args?`, `act?`, `subName?`, `fetchOptions?`, `toolTimeout?`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:183

Fetches data from the server.

#### Parameters

##### name

`string`

The name of the tool function to fetch.

##### args?

`any`

The object parameters to pass to the server.

##### act?

`string`

The action to perform on the server.

##### subName?

`any`

The name of the sub-resource to fetch.

##### fetchOptions?

`any`

##### toolTimeout?

`any`

Optional timeout from tool metadata.

#### Returns

`Promise`\<`any`\>

A promise that resolves with the fetched data.

#### Inherited from

[`ClientToolTransport`](ClientToolTransport.md).[`fetch`](ClientToolTransport.md#fetch)

***

### loadApis()

> **loadApis**(`options?`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:566

Connects to the server's discovery endpoint to get the list of available tools.

#### Parameters

##### options?

`any`

Additional options for the discovery call.

#### Returns

`Promise`\<`any`\>

A promise that resolves to a map of tool function metadata.

#### Overrides

[`ClientToolTransport`](ClientToolTransport.md).[`loadApis`](ClientToolTransport.md#loadapis)

***

### mount()

> **mount**(`Tools`, `apiRoot?`, `options?`): `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:140

#### Parameters

##### Tools

*typeof* [`ToolFunc`](ToolFunc.md)

##### apiRoot?

`string`

##### options?

`any`

#### Returns

`any`

#### Inherited from

[`ClientToolTransport`](ClientToolTransport.md).[`mount`](ClientToolTransport.md#mount)

***

### onResponse()

> `protected` **onResponse**(`message`): `void`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:565

#### Parameters

##### message

`MailMessage`

#### Returns

`void`

***

### setApiRoot()

> **setApiRoot**(`apiRoot`): `void`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:139

#### Parameters

##### apiRoot

`string`

#### Returns

`void`

#### Inherited from

[`ClientToolTransport`](ClientToolTransport.md).[`setApiRoot`](ClientToolTransport.md#setapiroot)

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:569

#### Returns

`Promise`\<`void`\>

***

### toObject()

> **toObject**(`res`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:568

#### Parameters

##### res

`any`

#### Returns

`Promise`\<`any`\>

#### Overrides

[`ClientToolTransport`](ClientToolTransport.md).[`toObject`](ClientToolTransport.md#toobject)
