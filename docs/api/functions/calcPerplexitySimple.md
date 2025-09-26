[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / calcPerplexitySimple

# Function: calcPerplexitySimple()

> **calcPerplexitySimple**(`probabilities`): `undefined` \| `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/calc-perplexity.ts:126](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/calc-perplexity.ts#L126)

A simplified version of the perplexity calculation function.
This function directly calculates the perplexity from an array
of `ProbabilityItem` objects without any token exclusion options.

## Parameters

### probabilities

[`ProbabilityItem`](../interfaces/ProbabilityItem.md)[]

An array of `ProbabilityItem` objects, each containing
                       a token and its associated probability.

## Returns

`undefined` \| `number`

The calculated perplexity value as a number.

## Example

```typescript
const probabilities = [
  { token: "hello", probability: 0.1 },
  { token: "world", probability: 0.05 }
];

const perplexity = calcPerplexitySimple(probabilities);
console.log(perplexity); // Outputs the calculated perplexity value
```
