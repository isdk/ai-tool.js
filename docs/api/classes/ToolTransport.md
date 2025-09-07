[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ToolTransport

# Class: `abstract` ToolTransport

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:33](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/base.ts#L33)

## Extended by

- [`ClientToolTransport`](ClientToolTransport.md)
- [`ServerToolTransport`](ServerToolTransport.md)

## Implements

- [`IToolTransport`](../interfaces/IToolTransport.md)

## Constructors

### new ToolTransport()

> **new ToolTransport**(): [`ToolTransport`](ToolTransport.md)

#### Returns

[`ToolTransport`](ToolTransport.md)

## Properties

### apiRoot

> **apiRoot**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:34](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/base.ts#L34)

The root endpoint for the remote service.
For HTTP, this is a URL. For IPC, it could be a channel name.

#### Implementation of

[`IToolTransport`](../interfaces/IToolTransport.md).[`apiRoot`](../interfaces/IToolTransport.md#apiroot)

***

### options?

> `optional` **options**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:36](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/base.ts#L36)

Additional options for the transport start or fetch, passed by mount.

#### Implementation of

[`IToolTransport`](../interfaces/IToolTransport.md).[`options`](../interfaces/IToolTransport.md#options)

***

### Tools

> **Tools**: *typeof* [`ToolFunc`](ToolFunc.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:35](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/base.ts#L35)

#### Implementation of

[`IToolTransport`](../interfaces/IToolTransport.md).[`Tools`](../interfaces/IToolTransport.md#tools)

## Methods

### \_mount()

> `abstract` **\_mount**(`Tools`, `apiRoot`, `options`?): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:57](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/base.ts#L57)

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

> **mount**(`Tools`, `apiRoot`?, `options`?): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:42](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/base.ts#L42)

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/transports/base.ts:38](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/transports/base.ts#L38)

#### Parameters

##### apiRoot

`string`

#### Returns

`void`
