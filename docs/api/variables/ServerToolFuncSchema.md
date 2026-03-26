[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ServerToolFuncSchema

# Variable: ServerToolFuncSchema

> `const` **ServerToolFuncSchema**: `object`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:373

**`Internal`**

The schema definition for `ServerTools` properties.

## Type Declaration

### action

> **action**: `object`

#### action.type

> **type**: `string`

#### action.assign()

> **assign**(`value`, `dest`, `src?`, `name?`, `options?`): `"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"`

##### Parameters

###### value

`"get"` | `"post"` | `"put"` | `"delete"` | `"patch"` | `"list"` | `"res"`

###### dest

`any`

###### src?

`any`

###### name?

`string`

###### options?

`any`

##### Returns

`"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"`

### allowExportFunc

> **allowExportFunc**: `object`

#### allowExportFunc.type

> **type**: `string`

### expectedDuration

> **expectedDuration**: `object`

#### expectedDuration.type

> **type**: `string`

### fetchOptions

> **fetchOptions**: `object`

#### fetchOptions.type

> **type**: `string`

### stream

> **stream**: `object`

#### stream.type

> **type**: `string`

### timeout

> **timeout**: `object`

#### timeout.type

> **type**: `string`[]
