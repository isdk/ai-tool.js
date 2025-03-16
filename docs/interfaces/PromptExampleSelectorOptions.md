[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / PromptExampleSelectorOptions

# Interface: PromptExampleSelectorOptions

Defined in: [packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:5](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/prompt/prompt-example-selector.ts#L5)

## Indexable

\[`name`: `string`\]: `any`

## Properties

### maxLength?

> `optional` **maxLength**: `number`

Defined in: [packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:9](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/prompt/prompt-example-selector.ts#L9)

The maximum count of the selected examples, or `undefined` if no limit.

***

### threshold?

> `optional` **threshold**: `number` \| `boolean`

Defined in: [packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:14](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/prompt/prompt-example-selector.ts#L14)

The threshold probability (0-1) at which a sample is selected.
If `true`, defaults to 0.5; if `false`, disable it.
