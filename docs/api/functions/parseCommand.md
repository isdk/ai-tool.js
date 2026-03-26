[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / parseCommand

# Function: parseCommand()

> **parseCommand**(`commandStr`, `scope?`, `options?`): `Promise`\<[`CmdArgParsedCommand`](../interfaces/CmdArgParsedCommand.md) \| `undefined`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/api.ts:267](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/api.ts#L267)

Parses a full command string including the command name and its parenthesized arguments.

## Parameters

### commandStr

`string`

The command string, e.g., 'myCmd(arg1, k=v, !flag)'

### scope?

`Record`\<`string`, `any`\>

Evaluation scope.

### options?

[`CmdArgParserOptions`](../interfaces/CmdArgParserOptions.md)

CmdArgParser configuration options.

## Returns

`Promise`\<[`CmdArgParsedCommand`](../interfaces/CmdArgParsedCommand.md) \| `undefined`\>

An object containing the command name, parsed args, and optional flags.

## Example

```ts
await parseCommand("sum(1, 2)") // returns {command: "sum", args: [1, 2]}
await parseCommand("search(query='abc', !caseSensitive)") // returns {command: "search", args: {query: 'abc'}, flags: {caseSensitive: true}}
```
