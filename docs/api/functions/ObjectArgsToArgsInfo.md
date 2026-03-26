[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ObjectArgsToArgsInfo

# Function: ObjectArgsToArgsInfo()

> **ObjectArgsToArgsInfo**(`args`): [`CmdArgArgsInfo`](../interfaces/CmdArgArgsInfo.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/api.ts:206](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/api.ts#L206)

Normalizes various simplified result formats back into an `{args, namedArgs}` info structure.

## Parameters

### args

`any`

## Returns

[`CmdArgArgsInfo`](../interfaces/CmdArgArgsInfo.md)

## Example

```ts
ObjectArgsToArgsInfo("val") // returns {args: ["val"]}
ObjectArgsToArgsInfo([1, 2]) // returns {args: [1, 2]}
ObjectArgsToArgsInfo({name: "John"}) // returns {args: [], namedArgs: {name: "John"}}
```
