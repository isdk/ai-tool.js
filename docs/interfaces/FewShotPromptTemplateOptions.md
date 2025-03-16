[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / FewShotPromptTemplateOptions

# Interface: FewShotPromptTemplateOptions\<T\>

Defined in: [packages/ai-tool/src/utils/prompt/few-shot-prompt-template.ts:10](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/few-shot-prompt-template.ts#L10)

## Extends

- [`PromptTemplateOptions`](PromptTemplateOptions.md)

## Type Parameters

• **T** = `any`

## Indexable

\[`name`: `string`\]: `any`

## Properties

### compiledTemplate?

> `optional` **compiledTemplate**: `any`

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:15](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/prompt-template.ts#L15)

#### Inherited from

[`PromptTemplateOptions`](PromptTemplateOptions.md).[`compiledTemplate`](PromptTemplateOptions.md#compiledtemplate)

***

### data?

> `optional` **data**: `Record`\<`string`, `any`\>

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:12](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/prompt-template.ts#L12)

#### Inherited from

[`PromptTemplateOptions`](PromptTemplateOptions.md).[`data`](PromptTemplateOptions.md#data)

***

### examplePrompt

> **examplePrompt**: [`PromptTemplateOptions`](PromptTemplateOptions.md) \| [`PromptTemplate`](../classes/PromptTemplate.md)

Defined in: [packages/ai-tool/src/utils/prompt/few-shot-prompt-template.ts:19](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/few-shot-prompt-template.ts#L19)

An [PromptTemplate](../classes/PromptTemplate.md) used to format a single example.

***

### examples

> **examples**: [`PromptExamples`](../type-aliases/PromptExamples.md)\<`T`\>

Defined in: [packages/ai-tool/src/utils/prompt/few-shot-prompt-template.ts:14](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/few-shot-prompt-template.ts#L14)

The few shot examples to use in the prompt.

***

### exampleSeparator?

> `optional` **exampleSeparator**: `string`

Defined in: [packages/ai-tool/src/utils/prompt/few-shot-prompt-template.ts:24](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/few-shot-prompt-template.ts#L24)

String separator used to join the prefix, the examples, and suffix.

***

### ignoreInitialize?

> `optional` **ignoreInitialize**: `boolean`

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:16](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/prompt-template.ts#L16)

#### Inherited from

[`PromptTemplateOptions`](PromptTemplateOptions.md).[`ignoreInitialize`](PromptTemplateOptions.md#ignoreinitialize)

***

### inputVariables?

> `optional` **inputVariables**: `string`[]

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:14](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/prompt-template.ts#L14)

#### Inherited from

[`PromptTemplateOptions`](PromptTemplateOptions.md).[`inputVariables`](PromptTemplateOptions.md#inputvariables)

***

### prefix?

> `optional` **prefix**: `string`

Defined in: [packages/ai-tool/src/utils/prompt/few-shot-prompt-template.ts:31](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/few-shot-prompt-template.ts#L31)

A prompt template string to put before the examples.

#### Default Value

`""`

***

### suffix?

> `optional` **suffix**: `string`

Defined in: [packages/ai-tool/src/utils/prompt/few-shot-prompt-template.ts:36](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/few-shot-prompt-template.ts#L36)

A prompt template string to put after the examples.

***

### template?

> `optional` **template**: `string`

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:11](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/prompt-template.ts#L11)

#### Inherited from

[`PromptTemplateOptions`](PromptTemplateOptions.md).[`template`](PromptTemplateOptions.md#template)

***

### templateFormat?

> `optional` **templateFormat**: `string`

Defined in: [packages/ai-tool/src/utils/prompt/prompt-template.ts:13](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/utils/prompt/prompt-template.ts#L13)

#### Inherited from

[`PromptTemplateOptions`](PromptTemplateOptions.md).[`templateFormat`](PromptTemplateOptions.md#templateformat)
