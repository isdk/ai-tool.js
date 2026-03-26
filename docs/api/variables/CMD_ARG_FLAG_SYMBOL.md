[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / CMD\_ARG\_FLAG\_SYMBOL

# Variable: CMD\_ARG\_FLAG\_SYMBOL

> `const` **CMD\_ARG\_FLAG\_SYMBOL**: *typeof* `CMD_ARG_FLAG_SYMBOL`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:32](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L32)

Symbol used to mark special parameters (Flags) in a wrapped object.
Stored as a non-enumerable property on the wrapped value (e.g., Boolean, String).

## Example

```ts
const CmdArgFlagValue = flags['debug'];
const prefix = CmdArgFlagValue[CMD_ARG_FLAG_SYMBOL]; // returns '!'
```
