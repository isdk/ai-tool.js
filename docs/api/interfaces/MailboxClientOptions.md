[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / MailboxClientOptions

# Interface: MailboxClientOptions

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:505

Configuration options for the MailboxClientTransport.

## Indexable

\[`key`: `string`\]: `any`

Additional transport-specific options.

## Properties

### ~~apiRoot?~~

> `optional` **apiRoot**: `string`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:520

The root path for the API (logical placeholder). Default is '/'.

#### Deprecated

Use serverAddress for the physical endpoint.

***

### clientAddress?

> `optional` **clientAddress**: `string`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:525

The client's own physical address to receive asynchronous responses.
This address must be unique and subscribable.

***

### mailbox?

> `optional` **mailbox**: `Mailbox`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:510

The Mailbox instance to use for communication.
If not provided, a new Mailbox instance will be created.

***

### serverAddress?

> `optional` **serverAddress**: `string`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:515

The server's physical address (gateway/RPC entry point).
E.g., 'mem://api@server/api'.

***

### timeout?

> `optional` **timeout**: `number` \| \{ `keepAliveOnTimeout?`: `boolean`; `streamIdleTimeout?`: `number`; `value`: `number`; \}

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:529

Request timeout. Can be a number (milliseconds) or an object. Default is 30000 (30 seconds).
