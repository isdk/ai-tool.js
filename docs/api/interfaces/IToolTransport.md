[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / IToolTransport

# Interface: IToolTransport

Defined in: [ai-tools/packages/ai-tool/src/transports/base.ts:16](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/base.ts#L16)

## Extended by

- [`IClientToolTransport`](IClientToolTransport.md)
- [`IServerToolTransport`](IServerToolTransport.md)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### apiRoot

> **apiRoot**: `string`

Defined in: [ai-tools/packages/ai-tool/src/transports/base.ts:22](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/base.ts#L22)

The root endpoint for the remote service.
For HTTP, this is a URL. For IPC, it could be a channel name.

***

### options?

> `optional` **options**: `any`

Defined in: [ai-tools/packages/ai-tool/src/transports/base.ts:26](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/base.ts#L26)

Additional options for the transport start or fetch, passed by mount.

***

### Tools

> **Tools**: *typeof* [`ToolFunc`](../classes/ToolFunc.md)

Defined in: [ai-tools/packages/ai-tool/src/transports/base.ts:17](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/base.ts#L17)

## Methods

### mount()

> **mount**(`Tools`, `apiRoot`?, `options`?): `any`

Defined in: [ai-tools/packages/ai-tool/src/transports/base.ts:28](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/transports/base.ts#L28)

#### Parameters

##### Tools

*typeof* [`ToolFunc`](../classes/ToolFunc.md)

##### apiRoot?

`string`

##### options?

`any`

#### Returns

`any`
