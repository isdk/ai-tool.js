[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ToolFuncSchema

# Variable: ToolFuncSchema

> `const` **ToolFuncSchema**: `object`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:647

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

> **type**: `string`

### depends

> **depends**: `object`

#### depends.exported

> **exported**: `boolean`

#### depends.type

> **type**: `string`

### description

> **description**: `object`

#### description.type

> **type**: `string`

### func

> **func**: `object`

#### func.type

> **type**: `string`

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

> **type**: `string`

### name

> **name**: `object`

#### name.type

> **type**: `string`

### params

> **params**: `object`

#### params.type

> **type**: `string`

### result

> **result**: `object`

#### result.type

> **type**: `string`

### setup

> **setup**: `object`

#### setup.type

> **type**: `string`

### stream

> **stream**: `object`

#### stream.type

> **type**: `string`

### tags

> **tags**: `object`

#### tags.type

> **type**: `string`[]

### title

> **title**: `object`

#### title.type

> **type**: `string`
