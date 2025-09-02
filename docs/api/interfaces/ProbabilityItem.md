[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ProbabilityItem

# Interface: ProbabilityItem

Defined in: [ai-tools/packages/ai-tool/src/utils/calc-perplexity.ts:1](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/calc-perplexity.ts#L1)

## Properties

### id?

> `optional` **id**: `number`

Defined in: [ai-tools/packages/ai-tool/src/utils/calc-perplexity.ts:5](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/calc-perplexity.ts#L5)

The id of the token.

***

### probability

> **probability**: `number`

Defined in: [ai-tools/packages/ai-tool/src/utils/calc-perplexity.ts:16](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/calc-perplexity.ts#L16)

The natural logarithm of the probability (log probability) assigned to this token.
Using log probabilities helps prevent numerical underflow when multiplying
many small probabilities together in language model calculations.

***

### token

> **token**: `string`

Defined in: [ai-tools/packages/ai-tool/src/utils/calc-perplexity.ts:9](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/calc-perplexity.ts#L9)

The token string being analyzed
