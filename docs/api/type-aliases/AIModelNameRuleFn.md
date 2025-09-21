[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / AIModelNameRuleFn

# Type Alias: AIModelNameRuleFn()

> **AIModelNameRuleFn** = (`name`) => `string` \| `RegExpExecArray` \| `undefined`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/consts.ts:23](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/consts.ts#L23)

Defines the signature for a function that processes an AI model's name,
typically for matching or validation purposes.

## Parameters

### name

`string`

The model name string.

## Returns

`string` \| `RegExpExecArray` \| `undefined`

A string, a RegExp execution array, or undefined if no match is found.
