[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / PromptExampleSelectorOptions

# Interface: PromptExampleSelectorOptions

Defined in: [packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:5](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/utils/prompt/prompt-example-selector.ts#L5)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### maxLength?

> `optional` **maxLength**: `number`

Defined in: [packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:9](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/utils/prompt/prompt-example-selector.ts#L9)

The maximum count of the selected examples, or `undefined` if no limit.

***

### threshold?

> `optional` **threshold**: `number` \| `boolean`

Defined in: [packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:14](https://github.com/isdk/ai-tool.js/blob/7135b3a67072644f21685b76900b7f351401749e/src/utils/prompt/prompt-example-selector.ts#L14)

The threshold probability (0-1) at which a sample is selected.
If `true`, defaults to 0.5; if `false`, disable it.
