[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / expandEnv

# Function: expandEnv()

> **expandEnv**(`options`): [`DotenvExpandOptions`](../interfaces/DotenvExpandOptions.md)

Defined in: [packages/ai-tool/src/utils/prompt/template/env.ts:97](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/prompt/template/env.ts#L97)

Expand environment variables in the parsed object

## Parameters

### options

[`DotenvExpandOptions`](../interfaces/DotenvExpandOptions.md)

## Returns

[`DotenvExpandOptions`](../interfaces/DotenvExpandOptions.md)

## Example

```ts
const myEnv = {}
const env = {
  processEnv: myEnv,
  parsed: {
    WORD: 'World',
    HELLO: 'Hello ${WORD}'
  }
}
expandEnv.expand(env)

console.log(myEnv.HELLO) // Hello World
console.log(process.env.HELLO) // undefined
```
