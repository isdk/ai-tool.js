[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / IToolTransport

# Interface: IToolTransport

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:80

## Extended by

- [`IClientToolTransport`](IClientToolTransport.md)
- [`IServerToolTransport`](IServerToolTransport.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### apiRoot

> **apiRoot**: `string`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:86

The root endpoint for the remote service.
For HTTP, this is a URL. For IPC, it could be a channel name.

***

### options?

> `optional` **options**: `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:90

Additional options for the transport start or fetch, passed by mount.

***

### Tools

> **Tools**: *typeof* [`ToolFunc`](../classes/ToolFunc.md)

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:81

## Methods

### mount()

> **mount**(`Tools`, `apiRoot?`, `options?`): `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:91

#### Parameters

##### Tools

*typeof* [`ToolFunc`](../classes/ToolFunc.md)

##### apiRoot?

`string`

##### options?

`any`

#### Returns

`any`
