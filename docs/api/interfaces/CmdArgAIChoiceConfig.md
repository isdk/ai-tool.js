[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / CmdArgAIChoiceConfig

# Interface: CmdArgAIChoiceConfig

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:252](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L252)

Configuration for AI selection logic (used by ChoiceArgProcessor).

## Example

```ts
"|item1|item2:maxPick=2"
```

## Properties

### end?

> `optional` **end**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:268](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L268)

Closing character/string for the selection UI

***

### items?

> `optional` **items**: `string`[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:254](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L254)

List of items to choose from

***

### maxPick?

> `optional` **maxPick**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:256](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L256)

Maximum number of items that can be picked

***

### minPick?

> `optional` **minPick**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:258](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L258)

Minimum number of items that must be picked

***

### prefix?

> `optional` **prefix**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:262](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L262)

Prefix to add to the result

***

### separator?

> `optional` **separator**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:260](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L260)

Separator for the resulting choice string

***

### suffix?

> `optional` **suffix**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:264](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L264)

Suffix to add to the result

***

### type?

> `optional` **type**: `"ai"` \| `"random"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:266](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L266)

Selection strategy: 'random' for random pick, 'ai' for AI-assisted pick
