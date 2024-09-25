[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / expandEnv

# Function: expandEnv()

> **expandEnv**(`options`): [`DotenvExpandOptions`](../interfaces/DotenvExpandOptions.md)

Expand environment variables in the parsed object

## Parameters

• **options**: [`DotenvExpandOptions`](../interfaces/DotenvExpandOptions.md)

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

## Defined in

[packages/ai-tool/src/utils/prompt/template/env.ts:82](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/prompt/template/env.ts#L82)
