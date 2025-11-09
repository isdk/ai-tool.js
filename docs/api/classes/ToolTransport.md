[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ToolTransport

# Abstract Class: ToolTransport

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:94

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

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:95

The root endpoint for the remote service.
For HTTP, this is a URL. For IPC, it could be a channel name.

#### Implementation of

[`IToolTransport`](../interfaces/IToolTransport.md).[`apiRoot`](../interfaces/IToolTransport.md#apiroot)

***

### options?

> `optional` **options**: `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:97

Additional options for the transport start or fetch, passed by mount.

#### Implementation of

[`IToolTransport`](../interfaces/IToolTransport.md).[`options`](../interfaces/IToolTransport.md#options)

***

### Tools

> **Tools**: *typeof* [`ToolFunc`](ToolFunc.md)

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:96

#### Implementation of

[`IToolTransport`](../interfaces/IToolTransport.md).[`Tools`](../interfaces/IToolTransport.md#tools)

## Methods

### \_mount()

> `abstract` **\_mount**(`Tools`, `apiRoot`, `options?`): `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:100

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

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:99

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

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:98

#### Parameters

##### apiRoot

`string`

#### Returns

`void`
