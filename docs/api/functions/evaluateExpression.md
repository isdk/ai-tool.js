[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / evaluateExpression

# Function: evaluateExpression()

> **evaluateExpression**(`code`, `scope`, `options`): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/evaluator.ts:58](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/evaluator.ts#L58)

Evaluates an expression string to its value.

Logic sequence:
1. Check if evaluation should be skipped.
2. Match simple JS literals (true, false, null, undefined, NaN, Infinity).
3. Check if it's a number.
4. Perform path lookup in the scope (getByPath).
5. Attempt execution as a JS expression or arrow function.
6. Catch ReferenceError: Decide whether to fall back to raw text or return undefined based on options.
7. Final fallback: Handle unquoting for quoted strings.

## Parameters

### code

`string`

### scope

`any`

### options

[`CmdArgParserOptions`](../interfaces/CmdArgParserOptions.md)

## Returns

`Promise`\<`any`\>
