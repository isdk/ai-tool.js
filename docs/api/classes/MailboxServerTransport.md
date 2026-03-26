[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / MailboxServerTransport

# Class: MailboxServerTransport

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:606

A server-side transport implementation using @mboxlabs/mailbox.

## Extends

- [`ServerToolTransport`](ServerToolTransport.md)

## Constructors

### Constructor

> **new MailboxServerTransport**(`options?`): `MailboxServerTransport`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:618

#### Parameters

##### options?

[`MailboxServerOptions`](../interfaces/MailboxServerOptions.md)

#### Returns

`MailboxServerTransport`

#### Overrides

[`ServerToolTransport`](ServerToolTransport.md).[`constructor`](ServerToolTransport.md#constructor)

## Properties

### apiRoot

> **apiRoot**: `string`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:442

The root endpoint for the remote service.
For HTTP, this is a URL. For IPC, it could be a channel name.

#### Inherited from

[`ServerToolTransport`](ServerToolTransport.md).[`apiRoot`](ServerToolTransport.md#apiroot)

***

### discoveryHandlerInfo

> `protected` **discoveryHandlerInfo**: \{ `handler`: () => `any`; `prefix`: `string`; \} \| `null`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:609

***

### isInternalMailbox

> `protected` **isInternalMailbox**: `boolean`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:617

***

### isRunning

> `protected` **isRunning**: `boolean`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:616

***

### listenAddress?

> `protected` `optional` **listenAddress**: `string`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:608

***

### mailbox

> `protected` **mailbox**: `Mailbox`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:607

***

### mode

> `protected` **mode**: `"push"` \| `"pull"`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:614

***

### options?

> `optional` **options**: `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:444

Additional options for the transport start or fetch, passed by mount.

#### Inherited from

[`ServerToolTransport`](ServerToolTransport.md).[`options`](ServerToolTransport.md#options)

***

### pullInterval

> `protected` **pullInterval**: `number`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:615

***

### subscription

> `protected` **subscription**: `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:613

***

### Tools

> **Tools**: *typeof* [`ServerTools`](ServerTools.md)

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:443

#### Inherited from

[`ServerToolTransport`](ServerToolTransport.md).[`Tools`](ServerToolTransport.md#tools)

## Methods

### \_mount()

> **\_mount**(`Tools`, `apiPrefix`, `options?`): `void`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:445

#### Parameters

##### Tools

*typeof* [`ServerTools`](ServerTools.md)

##### apiPrefix

`string`

##### options?

`any`

#### Returns

`void`

#### Inherited from

[`ServerToolTransport`](ServerToolTransport.md).[`_mount`](ServerToolTransport.md#_mount)

***

### \_start()

> **\_start**(`options?`): `Promise`\<`void`\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:622

#### Parameters

##### options?

`any`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`ServerToolTransport`](ServerToolTransport.md).[`_start`](ServerToolTransport.md#_start)

***

### addDiscoveryHandler()

> **addDiscoveryHandler**(`apiPrefix`, `handler`): `void`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:619

#### Parameters

##### apiPrefix

`string`

##### handler

() => `any`

#### Returns

`void`

#### Overrides

[`ServerToolTransport`](ServerToolTransport.md).[`addDiscoveryHandler`](ServerToolTransport.md#adddiscoveryhandler)

***

### addRpcHandler()

> **addRpcHandler**(`serverTools`, `apiPrefix`, `options?`): `void`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:620

#### Parameters

##### serverTools

*typeof* [`ServerTools`](ServerTools.md)

##### apiPrefix

`string`

##### options?

`any`

#### Returns

`void`

#### Overrides

[`ServerToolTransport`](ServerToolTransport.md).[`addRpcHandler`](ServerToolTransport.md#addrpchandler)

***

### drainBacklog()

> `protected` **drainBacklog**(`address`): `Promise`\<`void`\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:623

#### Parameters

##### address

`string`

#### Returns

`Promise`\<`void`\>

***

### getRaw()

> **getRaw**(): `Mailbox`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:626

Gets the underlying raw server instance.

#### Returns

`Mailbox`

#### Overrides

[`ServerToolTransport`](ServerToolTransport.md).[`getRaw`](ServerToolTransport.md#getraw)

***

### mount()

> **mount**(`Tools`, `apiRoot?`, `options?`): `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:140

Mounts the ServerTools registry, creating the necessary API routes.

This method is responsible for integrating the tool-handling logic with a
running server instance.

#### Parameters

##### Tools

*typeof* [`ToolFunc`](ToolFunc.md)

The ServerTools class containing the tool definitions.

##### apiRoot?

`string`

An optional prefix for all API routes (e.g., '/api').

##### options?

`any`

A container for transport-specific options. For example,
  an HTTP-based transport would expect an `{ server: http.Server }` object
  to attach its route handlers to.

#### Returns

`any`

#### Inherited from

[`ServerToolTransport`](ServerToolTransport.md).[`mount`](ServerToolTransport.md#mount)

***

### onReceive()

> `protected` **onReceive**(`message`): `Promise`\<`void`\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:621

#### Parameters

##### message

`MailMessage`

#### Returns

`Promise`\<`void`\>

***

### runPullLoop()

> `protected` **runPullLoop**(`address`): `Promise`\<`void`\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:624

#### Parameters

##### address

`string`

#### Returns

`Promise`\<`void`\>

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

[`ServerToolTransport`](ServerToolTransport.md).[`setApiRoot`](ServerToolTransport.md#setapiroot)

***

### start()

> **start**(`options?`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:446

Starts the transport layer, making it listen for incoming connections.

#### Parameters

##### options?

`any`

Protocol-specific options (e.g., { port, host }).

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ServerToolTransport`](ServerToolTransport.md).[`start`](ServerToolTransport.md#start)

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:625

Stops the server instance gracefully.

#### Returns

`Promise`\<`void`\>

Promise<void> when server is fully stopped

#### Overrides

[`ServerToolTransport`](ServerToolTransport.md).[`stop`](ServerToolTransport.md#stop)
