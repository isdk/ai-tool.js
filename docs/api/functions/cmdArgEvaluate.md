[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / cmdArgEvaluate

# Function: cmdArgEvaluate()

> **cmdArgEvaluate**(`ctx`): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/evaluator.ts:15](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/evaluator.ts#L15)

Evaluates the value of an argument.

Priority:
1. Attempt to call a custom processor (ArgProcessor).
2. If the processor returns a source string, recursively call evaluateExpression.
3. Default to evaluateExpression (handles literals, scope variables, and JS expressions).

## Parameters

### ctx

[`CmdArgContext`](../interfaces/CmdArgContext.md)

## Returns

`Promise`\<`any`\>
