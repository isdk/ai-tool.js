[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / isModelNameMatched

# Function: isModelNameMatched()

> **isModelNameMatched**(`modelName`, `rule`?): `undefined` \| `string` \| `RegExpExecArray`

Checks if the provided model name matches the given rule.

## Parameters

• **modelName**: `string`

The name of the model to check.

• **rule?**: [`AIModelNameRules`](../type-aliases/AIModelNameRules.md)

An optional rule that can be a string, an array of strings, a regular expression, or a function.

## Returns

`undefined` \| `string` \| `RegExpExecArray`

matched result if the model name matches the rule, undefined otherwise.

## Example

```ts
IsModelNameMatched("gpt-3", "gpt-3") // returns true
IsModelNameMatched("GPT-3", "gpt-3") // returns true
IsModelNameMatched("GPT-3", ["gpt-3", "gpt-4"]) // returns true
IsModelNameMatched("gpt-3", /^gpt-\d+$/) // returns true
IsModelNameMatched("gpt-3", (modelName) => modelName.startsWith("gpt-")) // returns true
IsModelNameMatched("gpt-2", "gpt-3") // returns false
IsModelNameMatched("gpt-2", ["gpt-3", "gpt-4"]) // returns false
IsModelNameMatched("gpt-2", /^gpt-\d+$/) // returns false
IsModelNameMatched("gpt-2", (modelName) => modelName.startsWith("gpt-")) // returns false
```

## Defined in

[packages/ai-tool/src/utils/is-model-name-matched.ts:21](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/is-model-name-matched.ts#L21)