[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / CmdArgTokenType

# Enumeration: CmdArgTokenType

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:56](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L56)

CmdArgToken types for lexical analysis.

## Enumeration Members

### ASSIGN

> **ASSIGN**: `"ASSIGN"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:61](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L61)

Assignment operator (default: '=' or ':')

***

### COMMA

> **COMMA**: `"COMMA"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:59](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L59)

Argument delimiter (default: ',')

***

### EOF

> **EOF**: `"EOF"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:57](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L57)

***

### IDENTIFIER

> **IDENTIFIER**: `"IDENTIFIER"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:77](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L77)

Valid JS identifier (excluding reserved words like true/false)

***

### L\_BRACE

> **L\_BRACE**: `"L_BRACE"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:71](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L71)

Left curly brace '{'

***

### L\_BRACKET

> **L\_BRACKET**: `"L_BRACKET"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:67](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L67)

Left square bracket '['

***

### L\_PAREN

> **L\_PAREN**: `"L_PAREN"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:63](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L63)

Left parenthesis '('

***

### R\_BRACE

> **R\_BRACE**: `"R_BRACE"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:73](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L73)

Right curly brace '}'

***

### R\_BRACKET

> **R\_BRACKET**: `"R_BRACKET"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:69](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L69)

Right square bracket ']'

***

### R\_PAREN

> **R\_PAREN**: `"R_PAREN"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:65](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L65)

Right parenthesis ')'

***

### RAW

> **RAW**: `"RAW"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:79](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L79)

Raw text segment, used for expressions or unquoted strings

***

### STRING

> **STRING**: `"STRING"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/command-parser/types.ts:75](https://github.com/isdk/ai-tool.js/blob/d10fb4cda65fc1975152a2c3ab327ecab008dea1/src/utils/command-parser/types.ts#L75)

Quoted string "..." or '...' or `...`
