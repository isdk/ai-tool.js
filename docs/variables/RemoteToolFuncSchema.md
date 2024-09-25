[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / RemoteToolFuncSchema

# Variable: RemoteToolFuncSchema

> `const` **RemoteToolFuncSchema**: `object`

## Type declaration

### action

> **action**: `object`

### action.type

> **type**: `string` = `'string'`

### action.assign()

#### Parameters

• **value**: `"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"`

• **dest**: `any`

• **src?**: `any`

• **name?**: `string`

• **options?**: `any`

#### Returns

`"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"`

### allowExportFunc

> **allowExportFunc**: `object`

### allowExportFunc.type

> **type**: `string` = `'boolean'`

### apiRoot

> **apiRoot**: `object`

### apiRoot.type

> **type**: `string` = `'string'`

### apiRoot.get()

#### Parameters

• **this**: `any`

#### Returns

`any`

### apiRoot.set()

#### Parameters

• **this**: `any`

• **value**: `string`

#### Returns

`void`

### fetchOptions

> **fetchOptions**: `object`

### fetchOptions.type

> **type**: `string` = `'object'`

## Defined in

[packages/ai-tool/src/utils/consts.ts:13](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/consts.ts#L13)
