[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / FuncParams

# Interface: FuncParams

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:54](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/tool-func.ts#L54)

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
