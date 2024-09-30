[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / PromptExampleSelectorOptions

# Interface: PromptExampleSelectorOptions

## Indexable

 \[`name`: `string`\]: `any`

## Properties

### maxLength?

> `optional` **maxLength**: `number`

The maximum count of the selected examples, or `undefined` if no limit.

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:9](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/prompt/prompt-example-selector.ts#L9)

***

### threshold?

> `optional` **threshold**: `number` \| `boolean`

The threshold probability (0-1) at which a sample is selected.
If `true`, defaults to 0.5; if `false`, disable it.

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:14](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/prompt/prompt-example-selector.ts#L14)
