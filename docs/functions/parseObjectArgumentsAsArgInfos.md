[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / parseObjectArgumentsAsArgInfos

# Function: parseObjectArgumentsAsArgInfos()

> **parseObjectArgumentsAsArgInfos**(`argsStr`, `scope`?, `options`?): `ArgInfo`[]

Parses an object arguments string into an array of ArgInfo.

This function processes a parameter string and parses it according to specific rules, allowing for custom delimiters.
It can handle quotes, escape characters, and expressions within brackets. The parsing is designed to interpret
object literal strings from dynamic languages, such as JSON objects or similar custom formats.

## Parameters

• **argsStr**: `string`

The string containing the arguments to be parsed.

• **scope?**: `Record`\<`string`, `any`\>

An optional scope object used for further processing of the parsed arguments. Default is undefined.

• **options?**: [`ParseObjectArgumentOptions`](../interfaces/ParseObjectArgumentOptions.md)

Parsing options, including:
  - delimiter: The character used to separate arguments. Default is ','.
  - argProcessor: An optional instance of ArgProcessor used for further processing of the parsed arguments.

## Returns

`ArgInfo`[]

An array of parsed argument information, where each item contains a boolean indicating whether the argument is named,
         and the string representation of the argument.

## Defined in

[packages/ai-tool/src/utils/parse-command.ts:285](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/parse-command.ts#L285)