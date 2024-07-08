[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / PromptExampleSelectorOptions

# Interface: PromptExampleSelectorOptions

## Indexable

▪ [name: `string`]: `any`

## Table of contents

### Properties

- [maxLength](PromptExampleSelectorOptions.md#maxlength)
- [threshold](PromptExampleSelectorOptions.md#threshold)

## Properties

### maxLength

• `Optional` **maxLength**: `number`

The maximum count of the selected examples, or `undefined` if no limit.

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:9](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/utils/prompt/prompt-example-selector.ts#L9)

___

### threshold

• `Optional` **threshold**: `number` \| `boolean`

The threshold probability (0-1) at which a sample is selected.
If `true`, defaults to 0.5; if `false`, disable it.

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:14](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/utils/prompt/prompt-example-selector.ts#L14)
