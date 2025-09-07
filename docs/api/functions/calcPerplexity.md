[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / calcPerplexity

# Function: calcPerplexity()

> **calcPerplexity**(`probabilities`, `options`?): `undefined` \| `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/calc-perplexity.ts:97](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/calc-perplexity.ts#L97)

Calculates the perplexity of a given list of probability items.
Perplexity is a measurement used in natural language processing (NLP)
to evaluate the quality of a language model. Lower perplexity indicates
better predictions made by the model.

## Parameters

### probabilities

[`ProbabilityItem`](../interfaces/ProbabilityItem.md)[]

An array of `ProbabilityItem` objects, each containing
                       a token and its associated probability.

### options?

`CalcPerplexityOptions`

Optional configuration for excluding specific types of tokens
                 from the calculation.

## Returns

`undefined` \| `number`

The calculated perplexity value as a number.

## Example

```typescript
const probabilities = [
  { token: "hello", probability: 0.1 },
  { token: "world", probability: 0.05 },
  { token: "<EOS>", probability: 0.02 },
  { token: ",", probability: 0.01 }
];

// Exclude control symbols and punctuation from the calculation
const options = {
  exclude: {
    controlSymbols: true,
    punctuation: true
  }
};

const perplexity = calcPerplexity(probabilities, options);
console.log(perplexity); // Outputs the calculated perplexity value
```
