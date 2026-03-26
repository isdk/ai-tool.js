[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / HttpClientToolTransport

# Class: HttpClientToolTransport

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:457

A concrete client transport implementation that uses the browser/node `fetch` API.

## Extends

- [`ClientToolTransport`](ClientToolTransport.md)

## Constructors

### Constructor

> **new HttpClientToolTransport**(`apiRoot`): `HttpClientToolTransport`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:175

#### Parameters

##### apiRoot

`string`

#### Returns

`HttpClientToolTransport`

#### Inherited from

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

### options?

> `optional` **options**: `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:138

Additional options for the transport start or fetch, passed by mount.

#### Inherited from

[`ClientToolTransport`](ClientToolTransport.md).[`options`](ClientToolTransport.md#options)

***

### Tools

> **Tools**: *typeof* [`ClientTools`](../@isdk/namespaces/ClientTools/README.md)

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:174

#### Inherited from

[`ClientToolTransport`](ClientToolTransport.md).[`Tools`](ClientToolTransport.md#tools)

## Methods

### \_fetch()

> **\_fetch**(`name`, `args?`, `act?`, `subName?`, `fetchOptions?`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:464

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

`Promise`\<`any`\>

#### Overrides

[`ClientToolTransport`](ClientToolTransport.md).[`_fetch`](ClientToolTransport.md#_fetch)

***

### \_mount()

> **\_mount**(`clientTools`, `apiPrefix`, `options?`): `Promise`\<[`Funcs`](../interfaces/Funcs.md)\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:176

#### Parameters

##### clientTools

*typeof* [`ClientTools`](../@isdk/namespaces/ClientTools/README.md)

##### apiPrefix

`string`

##### options?

`any`

#### Returns

`Promise`\<[`Funcs`](../interfaces/Funcs.md)\>

#### Inherited from

[`ClientToolTransport`](ClientToolTransport.md).[`_mount`](ClientToolTransport.md#_mount)

***

### errorFrom()

> **errorFrom**(`name`, `res`): `Promise`\<[`CommonError`](CommonError.md)\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:478

**`Internal`**

A helper to create a structured error from a failed `fetch` response.

#### Parameters

##### name

`string`

##### res

`Response`

The HTTP response.

#### Returns

`Promise`\<[`CommonError`](CommonError.md)\>

A structured error object.

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

> **loadApis**(`options?`): `Promise`\<[`Funcs`](../interfaces/Funcs.md)\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:463

Connects to the server's discovery endpoint to get the list of available tools.

#### Parameters

##### options?

`any`

Additional options for the discovery call.

#### Returns

`Promise`\<[`Funcs`](../interfaces/Funcs.md)\>

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

### toObject()

> **toObject**(`res`, `args?`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:479

#### Parameters

##### res

`any`

##### args?

`any`

#### Returns

`Promise`\<`any`\>

#### Overrides

[`ClientToolTransport`](ClientToolTransport.md).[`toObject`](ClientToolTransport.md#toobject)
