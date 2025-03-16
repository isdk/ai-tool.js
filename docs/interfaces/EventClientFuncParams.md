[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / EventClientFuncParams

# Interface: EventClientFuncParams

Defined in: [packages/ai-tool/src/funcs/event-client.ts:5](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-client.ts#L5)

## Properties

### act?

> `optional` **act**: `"sub"` \| `"pub"` \| `"unsub"` \| `"init"`

Defined in: [packages/ai-tool/src/funcs/event-client.ts:8](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-client.ts#L8)

***

### data?

> `optional` **data**: `any`

Defined in: [packages/ai-tool/src/funcs/event-client.ts:7](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-client.ts#L7)

***

### event?

> `optional` **event**: `string` \| `string`[]

Defined in: [packages/ai-tool/src/funcs/event-client.ts:6](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-client.ts#L6)

***

### listener()?

> `optional` **listener**: (...`args`) => `void`

Defined in: [packages/ai-tool/src/funcs/event-client.ts:9](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-client.ts#L9)

#### Parameters

##### args

...`any`[]

#### Returns

`void`
