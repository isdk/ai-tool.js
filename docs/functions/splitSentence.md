[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / splitSentence

# Function: splitSentence()

> **splitSentence**(`text`, `best`): `string`[]

Splits a text into sentences.
This function is used to split a text into separate sentences, based on punctuation marks such as '.', '?', or '!' and other rules.

## Parameters

• **text**: `string`

The input string that needs to be split into sentences.

• **best**: [`SplitSentenceOptions`](../interfaces/SplitSentenceOptions.md) = `{}`

A boolean flag indicating if the function should use the best possible sentence splitting method (default is true).
If set to false, it will not perform any additional processing and simply split on newline characters ('\n').

## Returns

`string`[]

An array of strings where each string represents a sentence in the input text.

Example:
const text = "Hello world! How are you today? I am fine.";
console.log(splitSentence(text));  // returns ['Hello world!', 'How are you today?', 'I am fine.']

## Defined in

[packages/ai-tool/src/utils/split-sentence.ts:44](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/split-sentence.ts#L44)
