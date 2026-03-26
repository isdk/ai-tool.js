[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / CMD\_ARG\_UNRESOLVED\_SYMBOL

# Variable: CMD\_ARG\_UNRESOLVED\_SYMBOL

> `const` **CMD\_ARG\_UNRESOLVED\_SYMBOL**: *typeof* `CMD_ARG_UNRESOLVED_SYMBOL`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:20](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L20)

Internal Symbol used to mark values that have fallen back to their raw string
representation due to a ReferenceError (undefined variable).
This allows the CmdArgParser to distinguish between a deliberate string "undefined"
and a failed variable lookup.
