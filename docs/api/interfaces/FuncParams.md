[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / FuncParams

# Interface: FuncParams

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:54](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L54)

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
