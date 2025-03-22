[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / FStringPromptTemplateNode

# Type Alias: FStringPromptTemplateNode

> **FStringPromptTemplateNode**: \{ `text`: `string`; `type`: `"literal"`; \} \| \{ `name`: `string`; `type`: `"variable"`; \}

Defined in: [packages/ai-tool/src/utils/prompt/template/python.ts:6](https://github.com/isdk/ai-tool.js/blob/c084189f913fb955b91b492de68bd07ce78f8c82/src/utils/prompt/template/python.ts#L6)

Type that represents a node in a parsed format string. It can be either
a literal text or a variable name.
