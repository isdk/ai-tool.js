[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / FewShotPromptTemplateOptions

# Interface: FewShotPromptTemplateOptions\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- [`PromptTemplateOptions`](PromptTemplateOptions.md)

  ↳ **`FewShotPromptTemplateOptions`**

## Table of contents

### Properties

- [compiledTemplate](FewShotPromptTemplateOptions.md#compiledtemplate)
- [data](FewShotPromptTemplateOptions.md#data)
- [examplePrompt](FewShotPromptTemplateOptions.md#exampleprompt)
- [exampleSeparator](FewShotPromptTemplateOptions.md#exampleseparator)
- [examples](FewShotPromptTemplateOptions.md#examples)
- [ignoreInitialize](FewShotPromptTemplateOptions.md#ignoreinitialize)
- [inputVariables](FewShotPromptTemplateOptions.md#inputvariables)
- [prefix](FewShotPromptTemplateOptions.md#prefix)
- [suffix](FewShotPromptTemplateOptions.md#suffix)
- [template](FewShotPromptTemplateOptions.md#template)
- [templateFormat](FewShotPromptTemplateOptions.md#templateformat)

## Properties

### compiledTemplate

• `Optional` **compiledTemplate**: `any`

#### Inherited from

[PromptTemplateOptions](PromptTemplateOptions.md).[compiledTemplate](PromptTemplateOptions.md#compiledtemplate)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:15](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/prompt/prompt-template.ts#L15)

___

### data

• `Optional` **data**: `Record`\<`string`, `any`\>

#### Inherited from

[PromptTemplateOptions](PromptTemplateOptions.md).[data](PromptTemplateOptions.md#data)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:12](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/prompt/prompt-template.ts#L12)

___

### examplePrompt

• **examplePrompt**: [`PromptTemplateOptions`](PromptTemplateOptions.md) \| [`PromptTemplate`](../classes/PromptTemplate.md)

An [PromptTemplate](../classes/PromptTemplate.md) used to format a single example.

#### Defined in

[packages/ai-tool/src/utils/prompt/few-shot-prompt-template.ts:19](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/prompt/few-shot-prompt-template.ts#L19)

___

### exampleSeparator

• `Optional` **exampleSeparator**: `string`

String separator used to join the prefix, the examples, and suffix.

#### Defined in

[packages/ai-tool/src/utils/prompt/few-shot-prompt-template.ts:24](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/prompt/few-shot-prompt-template.ts#L24)

___

### examples

• **examples**: [`PromptExamples`](../modules.md#promptexamples)\<`T`\>

The few shot examples to use in the prompt.

#### Defined in

[packages/ai-tool/src/utils/prompt/few-shot-prompt-template.ts:14](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/prompt/few-shot-prompt-template.ts#L14)

___

### ignoreInitialize

• `Optional` **ignoreInitialize**: `boolean`

#### Inherited from

[PromptTemplateOptions](PromptTemplateOptions.md).[ignoreInitialize](PromptTemplateOptions.md#ignoreinitialize)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:16](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/prompt/prompt-template.ts#L16)

___

### inputVariables

• `Optional` **inputVariables**: `string`[]

#### Inherited from

[PromptTemplateOptions](PromptTemplateOptions.md).[inputVariables](PromptTemplateOptions.md#inputvariables)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:14](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/prompt/prompt-template.ts#L14)

___

### prefix

• `Optional` **prefix**: `string`

A prompt template string to put before the examples.

**`Default Value`**

`""`

#### Defined in

[packages/ai-tool/src/utils/prompt/few-shot-prompt-template.ts:31](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/prompt/few-shot-prompt-template.ts#L31)

___

### suffix

• `Optional` **suffix**: `string`

A prompt template string to put after the examples.

#### Defined in

[packages/ai-tool/src/utils/prompt/few-shot-prompt-template.ts:36](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/prompt/few-shot-prompt-template.ts#L36)

___

### template

• `Optional` **template**: `string`

#### Inherited from

[PromptTemplateOptions](PromptTemplateOptions.md).[template](PromptTemplateOptions.md#template)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:11](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/prompt/prompt-template.ts#L11)

___

### templateFormat

• `Optional` **templateFormat**: `string`

#### Inherited from

[PromptTemplateOptions](PromptTemplateOptions.md).[templateFormat](PromptTemplateOptions.md#templateformat)

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-template.ts:13](https://github.com/isdk/ai-tool.js/blob/409aab70514a73e5edfa59ea25e4ee1fe316b26d/src/utils/prompt/prompt-template.ts#L13)
