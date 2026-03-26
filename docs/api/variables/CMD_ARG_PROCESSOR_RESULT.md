[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / CMD\_ARG\_PROCESSOR\_RESULT

# Variable: CMD\_ARG\_PROCESSOR\_RESULT

> `const` **CMD\_ARG\_PROCESSOR\_RESULT**: *typeof* `CMD_ARG_PROCESSOR_RESULT`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:12](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L12)

Symbol used to mark a result object returned by an ArgProcessor.
The processor should return an object where this Symbol is the key.

## Example

```ts
return {
  [CMD_ARG_PROCESSOR_RESULT]: [parsedValue, 'suggestedName', { excludePositional: true }]
};
```
