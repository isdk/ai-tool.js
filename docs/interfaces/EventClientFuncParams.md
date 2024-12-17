[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / EventClientFuncParams

# Interface: EventClientFuncParams

## Properties

### act?

> `optional` **act**: `"sub"` \| `"pub"` \| `"unsub"` \| `"init"`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:8](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/funcs/event-client.ts#L8)

***

### data?

> `optional` **data**: `any`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:7](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/funcs/event-client.ts#L7)

***

### event?

> `optional` **event**: `string` \| `string`[]

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:6](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/funcs/event-client.ts#L6)

***

### listener()?

> `optional` **listener**: (...`args`) => `void`

#### Parameters

• ...**args**: `any`[]

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:9](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/funcs/event-client.ts#L9)
