[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / IClientToolTransport

# Interface: IClientToolTransport

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/client.ts:10](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/transports/client.ts#L10)

Defines the public interface for a client-side transport,
responsible for communicating with a ServerTransport.

## Extends

- [`IToolTransport`](IToolTransport.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### apiRoot

> **apiRoot**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:22](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/transports/base.ts#L22)

The root endpoint for the remote service.
For HTTP, this is a URL. For IPC, it could be a channel name.

#### Inherited from

[`IToolTransport`](IToolTransport.md).[`apiRoot`](IToolTransport.md#apiroot)

***

### options?

> `optional` **options**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:26](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/transports/base.ts#L26)

Additional options for the transport start or fetch, passed by mount.

#### Inherited from

[`IToolTransport`](IToolTransport.md).[`options`](IToolTransport.md#options)

***

### Tools

> **Tools**: *typeof* [`ToolFunc`](../classes/ToolFunc.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:17](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/transports/base.ts#L17)

#### Inherited from

[`IToolTransport`](IToolTransport.md).[`Tools`](IToolTransport.md#tools)

## Methods

### fetch()

> **fetch**(`name`, `args?`, `act?`, `subName?`, `options?`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/client.ts:28](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/transports/client.ts#L28)

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/client.ts:15](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/transports/client.ts#L15)

Connects to the server's discovery endpoint to get the list of available tools.

#### Returns

`Promise`\<[`Funcs`](Funcs.md)\>

A promise that resolves to a map of tool function metadata.

***

### mount()

> **mount**(`clientTools`, `apiPrefix?`, `options?`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/client.ts:17](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/transports/client.ts#L17)

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
