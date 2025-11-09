[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / AIModelNameRuleFn

# Type Alias: AIModelNameRuleFn()

> **AIModelNameRuleFn** = (`name`) => `string` \| `RegExpExecArray` \| `undefined`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/consts.ts:12](https://github.com/isdk/ai-tool.js/blob/2338c1b330227e1f03e156c01f50117017aef779/src/utils/consts.ts#L12)

Defines the signature for a function that processes an AI model's name,
typically for matching or validation purposes.

## Parameters

### name

`string`

The model name string.

## Returns

`string` \| `RegExpExecArray` \| `undefined`

A string, a RegExp execution array, or undefined if no match is found.
