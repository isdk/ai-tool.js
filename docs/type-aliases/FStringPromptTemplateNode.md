[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / FStringPromptTemplateNode

# Type Alias: FStringPromptTemplateNode

> **FStringPromptTemplateNode**: \{ `text`: `string`; `type`: `"literal"`; \} \| \{ `name`: `string`; `type`: `"variable"`; \}

Defined in: [packages/ai-tool/src/utils/prompt/template/python.ts:6](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/template/python.ts#L6)

Type that represents a node in a parsed format string. It can be either
a literal text or a variable name.
