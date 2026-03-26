[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / parseObjectArguments

# Function: parseObjectArguments()

> **parseObjectArguments**(`argsStr`, `scope?`, `options?`): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/api.ts:29](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/api.ts#L29)

Parses an object-style argument string into a structured result.
Supports positional args, named args, JS expressions, and custom processors.

## Parameters

### argsStr

`string`

The argument string to parse.

### scope?

`Record`\<`string`, `any`\>

Optional evaluation scope for resolving variables.

### options?

[`CmdArgParserOptions`](../interfaces/CmdArgParserOptions.md)

CmdArgParser configuration options.

## Returns

`Promise`\<`any`\>

The parsed and simplified result.

## Example

```ts
// 1. Simple positional
await parseObjectArguments("123") // returns 123

// 2. Multiple positional
await parseObjectArguments("1, 2, 3") // returns [1, 2, 3]

// 3. Named arguments
await parseObjectArguments("name='John', age=25") // returns {name: 'John', age: 25}

// 4. Mixed (idAsName enabled by default)
await parseObjectArguments("John, age=25") // returns {0: 'John', John: 'John', age: 25}
```
