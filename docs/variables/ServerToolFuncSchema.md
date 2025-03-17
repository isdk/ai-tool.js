[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ServerToolFuncSchema

# Variable: ServerToolFuncSchema

> `const` **ServerToolFuncSchema**: `object`

Defined in: [packages/ai-tool/src/server-tools.ts:62](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/server-tools.ts#L62)

## Type declaration

### action

> **action**: `object`

#### action.type

> **type**: `string` = `'string'`

#### action.assign()

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

> **type**: `string` = `'boolean'`

### apiRoot

> **apiRoot**: `object`

#### apiRoot.type

> **type**: `string` = `'string'`

#### apiRoot.get()

##### Parameters

###### this

`any`

##### Returns

`any`

#### apiRoot.set()

##### Parameters

###### this

`any`

###### value

`string`

##### Returns

`void`

### fetchOptions

> **fetchOptions**: `object`

#### fetchOptions.type

> **type**: `string` = `'object'`
