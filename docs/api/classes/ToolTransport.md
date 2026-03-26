[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ToolTransport

# Abstract Class: ToolTransport

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:135

## Extended by

- [`ClientToolTransport`](ClientToolTransport.md)
- [`ServerToolTransport`](ServerToolTransport.md)

## Implements

- [`IToolTransport`](../interfaces/IToolTransport.md)

## Constructors

### Constructor

> **new ToolTransport**(): `ToolTransport`

#### Returns

`ToolTransport`

## Properties

### apiRoot

> **apiRoot**: `string`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:136

The root endpoint for the remote service.
For HTTP, this is a URL. For IPC, it could be a channel name.

#### Implementation of

[`IToolTransport`](../interfaces/IToolTransport.md).[`apiRoot`](../interfaces/IToolTransport.md#apiroot)

***

### options?

> `optional` **options**: `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:138

Additional options for the transport start or fetch, passed by mount.

#### Implementation of

[`IToolTransport`](../interfaces/IToolTransport.md).[`options`](../interfaces/IToolTransport.md#options)

***

### Tools

> **Tools**: *typeof* [`ToolFunc`](ToolFunc.md)

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:137

#### Implementation of

[`IToolTransport`](../interfaces/IToolTransport.md).[`Tools`](../interfaces/IToolTransport.md#tools)

## Methods

### \_mount()

> `abstract` **\_mount**(`Tools`, `apiRoot`, `options?`): `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:141

#### Parameters

##### Tools

*typeof* [`ToolFunc`](ToolFunc.md)

##### apiRoot

`string`

##### options?

`any`

#### Returns

`any`

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

#### Implementation of

[`IToolTransport`](../interfaces/IToolTransport.md).[`mount`](../interfaces/IToolTransport.md#mount)

***

### setApiRoot()

> **setApiRoot**(`apiRoot`): `void`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:139

#### Parameters

##### apiRoot

`string`

#### Returns

`void`
