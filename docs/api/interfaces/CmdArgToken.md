[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / CmdArgToken

# Interface: CmdArgToken

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:85](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L85)

Represents a lexical CmdArgToken with its type, value, and source position.

## Properties

### end

> **end**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:93](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L93)

Ending index in the input string

***

### start

> **start**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:91](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L91)

Starting index in the input string

***

### type

> **type**: [`CmdArgTokenType`](../enumerations/CmdArgTokenType.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:87](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L87)

The type of the CmdArgToken

***

### value

> **value**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:89](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L89)

The literal string value of the CmdArgToken
