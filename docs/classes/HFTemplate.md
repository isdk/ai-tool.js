[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / HFTemplate

# Class: HFTemplate

## Constructors

### new HFTemplate()

> **new HFTemplate**(`template`, `options`): [`HFTemplate`](HFTemplate.md)

#### Parameters

• **template**: `string`

The template string

• **options**: `PreprocessOptions` = `{}`

#### Returns

[`HFTemplate`](HFTemplate.md)

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:45](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/template/jinja/src/index.ts#L45)

## Properties

### parsed

> **parsed**: `Program`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:38](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/template/jinja/src/index.ts#L38)

***

### global

> `static` **global**: [`HFEnvironment`](HFEnvironment.md)

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:40](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/template/jinja/src/index.ts#L40)

## Methods

### render()

> **render**(`items`): `string`

#### Parameters

• **items**: `Record`\<`string`, `unknown`\>

#### Returns

`string`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:55](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/utils/prompt/template/jinja/src/index.ts#L55)
