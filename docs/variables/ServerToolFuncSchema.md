[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / ServerToolFuncSchema

# Variable: ServerToolFuncSchema

> `const` **ServerToolFuncSchema**: `object`

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

[packages/ai-tool/src/server-tools.ts:62](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/server-tools.ts#L62)