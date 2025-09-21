[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ProbabilityItem

# Interface: ProbabilityItem

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/calc-perplexity.ts:1](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/calc-perplexity.ts#L1)

## Properties

### id?

> `optional` **id**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/calc-perplexity.ts:5](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/calc-perplexity.ts#L5)

The id of the token.

***

### probability

> **probability**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/calc-perplexity.ts:16](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/calc-perplexity.ts#L16)

The natural logarithm of the probability (log probability) assigned to this token.
Using log probabilities helps prevent numerical underflow when multiplying
many small probabilities together in language model calculations.

***

### token

> **token**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/calc-perplexity.ts:9](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/calc-perplexity.ts#L9)

The token string being analyzed
