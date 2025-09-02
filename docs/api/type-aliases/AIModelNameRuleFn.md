[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / AIModelNameRuleFn

# Type Alias: AIModelNameRuleFn()

> **AIModelNameRuleFn**: (`name`) => `string` \| `RegExpExecArray` \| `undefined`

Defined in: [ai-tools/packages/ai-tool/src/utils/consts.ts:23](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/consts.ts#L23)

Defines the signature for a function that processes an AI model's name,
typically for matching or validation purposes.

## Parameters

### name

`string`

The model name string.

## Returns

`string` \| `RegExpExecArray` \| `undefined`

A string, a RegExp execution array, or undefined if no match is found.
