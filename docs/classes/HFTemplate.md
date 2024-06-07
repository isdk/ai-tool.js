[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / HFTemplate

# Class: HFTemplate

## Table of contents

### Constructors

- [constructor](HFTemplate.md#constructor)

### Properties

- [parsed](HFTemplate.md#parsed)
- [global](HFTemplate.md#global)

### Methods

- [render](HFTemplate.md#render)

## Constructors

### constructor

• **new HFTemplate**(`template`, `options?`): [`HFTemplate`](HFTemplate.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `template` | `string` | The template string |
| `options` | `PreprocessOptions` | - |

#### Returns

[`HFTemplate`](HFTemplate.md)

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:45](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/prompt/template/jinja/src/index.ts#L45)

## Properties

### parsed

• **parsed**: `Program`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:38](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/prompt/template/jinja/src/index.ts#L38)

___

### global

▪ `Static` **global**: [`HFEnvironment`](HFEnvironment.md)

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:40](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/prompt/template/jinja/src/index.ts#L40)

## Methods

### render

▸ **render**(`items`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `Record`\<`string`, `unknown`\> |

#### Returns

`string`

#### Defined in

[packages/ai-tool/src/utils/prompt/template/jinja/src/index.ts:55](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/prompt/template/jinja/src/index.ts#L55)
