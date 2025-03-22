[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / EventClientFuncParams

# Interface: EventClientFuncParams

Defined in: [packages/ai-tool/src/funcs/event-client.ts:5](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/funcs/event-client.ts#L5)

## Properties

### act?

> `optional` **act**: `"sub"` \| `"pub"` \| `"unsub"` \| `"init"`

Defined in: [packages/ai-tool/src/funcs/event-client.ts:8](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/funcs/event-client.ts#L8)

***

### data?

> `optional` **data**: `any`

Defined in: [packages/ai-tool/src/funcs/event-client.ts:7](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/funcs/event-client.ts#L7)

***

### event?

> `optional` **event**: `string` \| `string`[]

Defined in: [packages/ai-tool/src/funcs/event-client.ts:6](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/funcs/event-client.ts#L6)

***

### listener()?

> `optional` **listener**: (...`args`) => `void`

Defined in: [packages/ai-tool/src/funcs/event-client.ts:9](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/funcs/event-client.ts#L9)

#### Parameters

##### args

...`any`[]

#### Returns

`void`
