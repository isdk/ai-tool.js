[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / FuncParams

# Interface: FuncParams

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:158

A map of function parameters, where each key is the parameter name.
The value can be either a detailed `FuncParam` object or a simple type string.

## Example

```ts
const params: FuncParams = {
  userId: 'string',
  profile: {
    type: 'object',
    description: 'User profile data'
  }
};
```

## Indexable

\[`name`: `string`\]: `string` \| [`FuncParam`](FuncParam.md)
