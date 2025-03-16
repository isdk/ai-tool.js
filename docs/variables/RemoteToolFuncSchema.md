[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / RemoteToolFuncSchema

# Variable: RemoteToolFuncSchema

> `const` **RemoteToolFuncSchema**: `object`

Defined in: [packages/ai-tool/src/utils/consts.ts:13](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/consts.ts#L13)

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
