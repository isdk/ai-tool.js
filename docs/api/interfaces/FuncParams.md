[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / FuncParams

# Interface: FuncParams

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:54](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/tool-func.ts#L54)

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
