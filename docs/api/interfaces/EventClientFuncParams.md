[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / EventClientFuncParams

# Interface: EventClientFuncParams

Defined in: [ai-tools/packages/ai-tool/src/funcs/event-client.ts:6](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/funcs/event-client.ts#L6)

## Properties

### act?

> `optional` **act**: `"sub"` \| `"pub"` \| `"unsub"` \| `"init"`

Defined in: [ai-tools/packages/ai-tool/src/funcs/event-client.ts:9](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/funcs/event-client.ts#L9)

***

### data?

> `optional` **data**: `any`

Defined in: [ai-tools/packages/ai-tool/src/funcs/event-client.ts:8](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/funcs/event-client.ts#L8)

***

### event?

> `optional` **event**: `string` \| `string`[]

Defined in: [ai-tools/packages/ai-tool/src/funcs/event-client.ts:7](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/funcs/event-client.ts#L7)

***

### listener()?

> `optional` **listener**: (...`args`) => `void`

Defined in: [ai-tools/packages/ai-tool/src/funcs/event-client.ts:10](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/funcs/event-client.ts#L10)

#### Parameters

##### args

...`any`[]

#### Returns

`void`
