[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / IClientToolTransport

# Interface: IClientToolTransport

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:107

Defines the public interface for a client-side transport,
responsible for communicating with a ServerTransport.

## Extends

- [`IToolTransport`](IToolTransport.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### apiRoot

> **apiRoot**: `string`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:86

The root endpoint for the remote service.
For HTTP, this is a URL. For IPC, it could be a channel name.

#### Inherited from

[`IToolTransport`](IToolTransport.md).[`apiRoot`](IToolTransport.md#apiroot)

***

### options?

> `optional` **options**: `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:90

Additional options for the transport start or fetch, passed by mount.

#### Inherited from

[`IToolTransport`](IToolTransport.md).[`options`](IToolTransport.md#options)

***

### Tools

> **Tools**: *typeof* [`ToolFunc`](../classes/ToolFunc.md)

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:81

#### Inherited from

[`IToolTransport`](IToolTransport.md).[`Tools`](IToolTransport.md#tools)

## Methods

### fetch()

> **fetch**(`name`, `args?`, `act?`, `subName?`, `options?`): `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:123

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

##### options?

`any`

Additional options for the fetch call.

#### Returns

`any`

A promise that resolves with the fetched data.

***

### loadApis()

> **loadApis**(): `Promise`\<[`Funcs`](Funcs.md)\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:112

Connects to the server's discovery endpoint to get the list of available tools.

#### Returns

`Promise`\<[`Funcs`](Funcs.md)\>

A promise that resolves to a map of tool function metadata.

***

### mount()

> **mount**(`clientTools`, `apiPrefix?`, `options?`): `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:113

#### Parameters

##### clientTools

*typeof* [`ClientTools`](../classes/ClientTools.md)

##### apiPrefix?

`string`

##### options?

`any`

#### Returns

`any`

#### Overrides

[`IToolTransport`](IToolTransport.md).[`mount`](IToolTransport.md#mount)
