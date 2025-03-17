[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / HFTemplate

# Class: HFTemplate

Defined in: [packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:37](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/utils/prompt/template/jinja/src/index.ts#L37)

## Constructors

### new HFTemplate()

> **new HFTemplate**(`template`, `options`): [`HFTemplate`](HFTemplate.md)

Defined in: [packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:45](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/utils/prompt/template/jinja/src/index.ts#L45)

#### Parameters

##### template

`string`

The template string

##### options

`PreprocessOptions` = `{}`

#### Returns

[`HFTemplate`](HFTemplate.md)

## Properties

### parsed

> **parsed**: `Program`

Defined in: [packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:38](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/utils/prompt/template/jinja/src/index.ts#L38)

***

### global

> `static` **global**: [`HFEnvironment`](HFEnvironment.md)

Defined in: [packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:40](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/utils/prompt/template/jinja/src/index.ts#L40)

## Methods

### render()

> **render**(`items`?): `string`

Defined in: [packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:55](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/utils/prompt/template/jinja/src/index.ts#L55)

#### Parameters

##### items?

`Record`\<`string`, `unknown`\>

#### Returns

`string`
