[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ServerToolFuncSchema

# Variable: ServerToolFuncSchema

> `const` **ServerToolFuncSchema**: `object`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/server-tools.ts:119](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/server-tools.ts#L119)

**`Internal`**

The schema definition for `ServerTools` properties.

## Type Declaration

### action

> **action**: `object`

The action for the remote call. This is primarily interpreted as an RPC method name.
For HTTP transports, it defaults to being sent as a custom RPC method name (e.g., via POST).
Only specific RESTful server implementations might map certain 'action' values (like 'get', 'delete')
to corresponding HTTP methods. Defaults to 'post'.

#### action.type

> **type**: `string` = `'string'`

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

If true, allows the function's body to be exported to the client for local execution.
This is a server-side setting.

#### allowExportFunc.type

> **type**: `string` = `'boolean'`

### ~~fetchOptions~~

> **fetchOptions**: `object`

Optional fetch options, primarily for use with HTTP-based transports.

#### Deprecated

Use `transport` instead.

#### fetchOptions.type

> **type**: `string` = `'object'`
