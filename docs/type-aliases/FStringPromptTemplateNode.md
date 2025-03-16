[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / FStringPromptTemplateNode

# Type Alias: FStringPromptTemplateNode

> **FStringPromptTemplateNode**: \{ `text`: `string`; `type`: `"literal"`; \} \| \{ `name`: `string`; `type`: `"variable"`; \}

Defined in: [packages/ai-tool/src/utils/prompt/template/python.ts:6](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/prompt/template/python.ts#L6)

Type that represents a node in a parsed format string. It can be either
a literal text or a variable name.
