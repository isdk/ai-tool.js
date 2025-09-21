[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ToolFuncSchema

# Variable: ToolFuncSchema

> `const` **ToolFuncSchema**: `object`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:821](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L821)

**`Internal`**

Defines the schema for `ToolFunc` properties, used by `AdvancePropertyManager`.
This controls how properties are assigned and exported.

## Type Declaration

### alias

> **alias**: `object`

#### alias.type

> **type**: `string`[]

### asyncFeatures

> **asyncFeatures**: `object`

#### asyncFeatures.type

> **type**: `string` = `'number'`

### depends

> **depends**: `object`

#### depends.exported

> **exported**: `boolean` = `false`

#### depends.type

> **type**: `string` = `'object'`

### description

> **description**: `object`

#### description.type

> **type**: `string` = `'string'`

### func

> **func**: `object`

#### func.type

> **type**: `string` = `'function'`

#### func.assign()

> **assign**(`value`, `dest`, `src?`, `name?`, `options?`): `string` \| `Function`

##### Parameters

###### value

`string` | `Function`

###### dest

[`ToolFunc`](../classes/ToolFunc.md)

###### src?

[`ToolFunc`](../classes/ToolFunc.md)

###### name?

`string`

###### options?

`any`

##### Returns

`string` \| `Function`

### isApi

> **isApi**: `object`

#### isApi.type

> **type**: `string` = `'boolean'`

### name

> **name**: `object`

#### name.type

> **type**: `string` = `'string'`

### params

> **params**: `object`

#### params.type

> **type**: `string` = `'object'`

### result

> **result**: `object`

#### result.type

> **type**: `string` = `'any'`

### setup

> **setup**: `object`

#### setup.type

> **type**: `string` = `'function'`

### stream

> **stream**: `object`

#### stream.type

> **type**: `string` = `'boolean'`

### tags

> **tags**: `object`

#### tags.type

> **type**: `string`[]

### title

> **title**: `object`

#### title.type

> **type**: `string` = `'string'`
