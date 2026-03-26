[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / MailboxServerOptions

# Interface: MailboxServerOptions

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:575

Configuration options for the MailboxServerTransport.

## Indexable

\[`key`: `string`\]: `any`

Additional transport-specific options.

## Properties

### address?

> `optional` **address**: `string`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:585

The unique physical address this server listens on (e.g., 'mem://api@server/api').
This address is used for mailbox subscription or fetching.

***

### apiRoot?

> `optional` **apiRoot**: `string`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:589

The root path for the API. Default is '/'.

***

### mailbox?

> `optional` **mailbox**: `Mailbox`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:580

The Mailbox instance to use for communication.
If not provided, a new Mailbox instance will be created.

***

### mode?

> `optional` **mode**: `"push"` \| `"pull"`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:593

Transport mode: 'push' (subscribe) or 'pull' (fetch). Default is 'push'.

***

### pullInterval?

> `optional` **pullInterval**: `number`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:597

Fetch interval in milliseconds for 'pull' mode. Default is 1000ms.
