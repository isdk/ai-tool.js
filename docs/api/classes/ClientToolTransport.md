[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ClientToolTransport

# Abstract Class: ClientToolTransport

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/client.ts:36](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/client.ts#L36)

A concrete client transport implementation that uses the browser/node `fetch` API.

## Extends

- [`ToolTransport`](ToolTransport.md)

## Extended by

- [`HttpClientToolTransport`](HttpClientToolTransport.md)

## Implements

- [`IClientToolTransport`](../interfaces/IClientToolTransport.md)

## Constructors

### Constructor

> **new ClientToolTransport**(`apiRoot`): `ClientToolTransport`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/client.ts:41](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/client.ts#L41)

#### Parameters

##### apiRoot

`string`

#### Returns

`ClientToolTransport`

#### Overrides

[`ToolTransport`](ToolTransport.md).[`constructor`](ToolTransport.md#constructor)

## Properties

### apiRoot

> **apiRoot**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/client.ts:37](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/client.ts#L37)

The root endpoint for the remote service.
For HTTP, this is a URL. For IPC, it could be a channel name.

#### Implementation of

[`IClientToolTransport`](../interfaces/IClientToolTransport.md).[`apiRoot`](../interfaces/IClientToolTransport.md#apiroot)

#### Overrides

[`ToolTransport`](ToolTransport.md).[`apiRoot`](ToolTransport.md#apiroot)

***

### options?

> `optional` **options**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:36](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/base.ts#L36)

Additional options for the transport start or fetch, passed by mount.

#### Implementation of

[`IClientToolTransport`](../interfaces/IClientToolTransport.md).[`options`](../interfaces/IClientToolTransport.md#options)

#### Inherited from

[`ToolTransport`](ToolTransport.md).[`options`](ToolTransport.md#options)

***

### Tools

> **Tools**: *typeof* [`ClientTools`](ClientTools.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/client.ts:38](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/client.ts#L38)

#### Implementation of

[`IClientToolTransport`](../interfaces/IClientToolTransport.md).[`Tools`](../interfaces/IClientToolTransport.md#tools)

#### Overrides

[`ToolTransport`](ToolTransport.md).[`Tools`](ToolTransport.md#tools)

## Methods

### \_fetch()

> `abstract` **\_fetch**(`name`, `args?`, `act?`, `subName?`, `fetchOptions?`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/client.ts:75](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/client.ts#L75)

#### Parameters

##### name

`string`

##### args?

`any`

##### act?

`string`

##### subName?

`any`

##### fetchOptions?

`any`

#### Returns

`any`

***

### \_mount()

> **\_mount**(`clientTools`, `apiPrefix`, `options?`): `Promise`\<[`Funcs`](../interfaces/Funcs.md)\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/client.ts:49](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/client.ts#L49)

#### Parameters

##### clientTools

*typeof* [`ClientTools`](ClientTools.md)

##### apiPrefix

`string`

##### options?

`any`

#### Returns

`Promise`\<[`Funcs`](../interfaces/Funcs.md)\>

#### Overrides

[`ToolTransport`](ToolTransport.md).[`_mount`](ToolTransport.md#_mount)

***

### fetch()

> **fetch**(`name`, `args?`, `act?`, `subName?`, `fetchOptions?`): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/client.ts:64](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/client.ts#L64)

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

#### Returns

`Promise`\<`any`\>

A promise that resolves with the fetched data.

#### Implementation of

[`IClientToolTransport`](../interfaces/IClientToolTransport.md).[`fetch`](../interfaces/IClientToolTransport.md#fetch)

***

### loadApis()

> **loadApis**(): `Promise`\<[`Funcs`](../interfaces/Funcs.md)\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/client.ts:58](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/client.ts#L58)

Connects to the server's discovery endpoint to get the list of available tools.

#### Returns

`Promise`\<[`Funcs`](../interfaces/Funcs.md)\>

A promise that resolves to a map of tool function metadata.

#### Implementation of

[`IClientToolTransport`](../interfaces/IClientToolTransport.md).[`loadApis`](../interfaces/IClientToolTransport.md#loadapis)

***

### mount()

> **mount**(`Tools`, `apiRoot?`, `options?`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:42](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/base.ts#L42)

#### Parameters

##### Tools

*typeof* [`ToolFunc`](ToolFunc.md)

##### apiRoot?

`string`

##### options?

`any`

#### Returns

`any`

#### Implementation of

[`IClientToolTransport`](../interfaces/IClientToolTransport.md).[`mount`](../interfaces/IClientToolTransport.md#mount)

#### Inherited from

[`ToolTransport`](ToolTransport.md).[`mount`](ToolTransport.md#mount)

***

### setApiRoot()

> **setApiRoot**(`apiRoot`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:38](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/base.ts#L38)

#### Parameters

##### apiRoot

`string`

#### Returns

`void`

#### Inherited from

[`ToolTransport`](ToolTransport.md).[`setApiRoot`](ToolTransport.md#setapiroot)

***

### toObject()

> `abstract` **toObject**(`res`, `args?`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/client.ts:76](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/transports/client.ts#L76)

#### Parameters

##### res

`any`

##### args?

`any`

#### Returns

`any`
