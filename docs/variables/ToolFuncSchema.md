[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / ToolFuncSchema

# Variable: ToolFuncSchema

> `const` **ToolFuncSchema**: `object`

## Type declaration

### asyncFeatures

> **asyncFeatures**: `object`

### asyncFeatures.type

> **type**: `string` = `'number'`

### depends

> **depends**: `object`

### depends.exported

> **exported**: `boolean` = `false`

### depends.type

> **type**: `string` = `'object'`

### description

> **description**: `object`

### description.type

> **type**: `string` = `'string'`

### func

> **func**: `object`

### func.type

> **type**: `string` = `'function'`

### func.assign()

#### Parameters

• **value**: `string` \| `Function`

• **dest**: [`ToolFunc`](../classes/ToolFunc.md)

• **src?**: [`ToolFunc`](../classes/ToolFunc.md)

• **name?**: `string`

• **options?**: `any`

#### Returns

`string` \| `Function`

### isApi

> **isApi**: `object`

### isApi.type

> **type**: `string` = `'boolean'`

### name

> **name**: `object`

### name.type

> **type**: `string` = `'string'`

### params

> **params**: `object`

### params.type

> **type**: `string` = `'object'`

### result

> **result**: `object`

### result.type

> **type**: `string` = `'any'`

### setup

> **setup**: `object`

### setup.type

> **type**: `string` = `'function'`

### stream

> **stream**: `object`

### stream.type

> **type**: `string` = `'boolean'`

### tags

> **tags**: `object`

### tags.type

> **type**: `string`[]

## Defined in

[packages/ai-tool/src/tool-func.ts:348](https://github.com/isdk/ai-tool.js/blob/e324043799402aa2caa41711a9168487ab85c166/src/tool-func.ts#L348)
