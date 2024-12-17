[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / FewShotPromptTemplateOptions

# Interface: FewShotPromptTemplateOptions\<T\>

## Extends

- [`PromptTemplateOptions`](PromptTemplateOptions.md)

## Type Parameters

• **T** = `any`

## Properties

### compiledTemplate?

> `optional` **compiledTemplate**: `any`

#### Inherited from

[`PromptTemplateOptions`](PromptTemplateOptions.md).[`compiledTemplate`](PromptTemplateOptions.md#compiledtemplate)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:15](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/prompt/prompt-template.ts#L15)

***

### data?

> `optional` **data**: `Record`\<`string`, `any`\>

#### Inherited from

[`PromptTemplateOptions`](PromptTemplateOptions.md).[`data`](PromptTemplateOptions.md#data)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:12](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/prompt/prompt-template.ts#L12)

***

### examplePrompt

> **examplePrompt**: [`PromptTemplateOptions`](PromptTemplateOptions.md) \| [`PromptTemplate`](../classes/PromptTemplate.md)

An [PromptTemplate](../classes/PromptTemplate.md) used to format a single example.

#### Defined in

[packages/ai-tool/src/utils/prompt/few-shot-prompt-template.ts:19](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/prompt/few-shot-prompt-template.ts#L19)

***

### examples

> **examples**: [`PromptExamples`](../type-aliases/PromptExamples.md)\<`T`\>

The few shot examples to use in the prompt.

#### Defined in

[packages/ai-tool/src/utils/prompt/few-shot-prompt-template.ts:14](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/prompt/few-shot-prompt-template.ts#L14)

***

### exampleSeparator?

> `optional` **exampleSeparator**: `string`

String separator used to join the prefix, the examples, and suffix.

#### Defined in

[packages/ai-tool/src/utils/prompt/few-shot-prompt-template.ts:24](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/prompt/few-shot-prompt-template.ts#L24)

***

### ignoreInitialize?

> `optional` **ignoreInitialize**: `boolean`

#### Inherited from

[`PromptTemplateOptions`](PromptTemplateOptions.md).[`ignoreInitialize`](PromptTemplateOptions.md#ignoreinitialize)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:16](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/prompt/prompt-template.ts#L16)

***

### inputVariables?

> `optional` **inputVariables**: `string`[]

#### Inherited from

[`PromptTemplateOptions`](PromptTemplateOptions.md).[`inputVariables`](PromptTemplateOptions.md#inputvariables)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:14](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/prompt/prompt-template.ts#L14)

***

### prefix?

> `optional` **prefix**: `string`

A prompt template string to put before the examples.

#### Default Value

`""`

#### Defined in

[packages/ai-tool/src/utils/prompt/few-shot-prompt-template.ts:31](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/prompt/few-shot-prompt-template.ts#L31)

***

### suffix?

> `optional` **suffix**: `string`

A prompt template string to put after the examples.

#### Defined in

[packages/ai-tool/src/utils/prompt/few-shot-prompt-template.ts:36](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/prompt/few-shot-prompt-template.ts#L36)

***

### template?

> `optional` **template**: `string`

#### Inherited from

[`PromptTemplateOptions`](PromptTemplateOptions.md).[`template`](PromptTemplateOptions.md#template)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:11](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/prompt/prompt-template.ts#L11)

***

### templateFormat?

> `optional` **templateFormat**: `string`

#### Inherited from

[`PromptTemplateOptions`](PromptTemplateOptions.md).[`templateFormat`](PromptTemplateOptions.md#templateformat)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:13](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/prompt/prompt-template.ts#L13)
