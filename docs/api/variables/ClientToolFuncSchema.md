[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ClientToolFuncSchema

# Variable: ClientToolFuncSchema

> `const` **ClientToolFuncSchema**: `object`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/client-tools.ts:147](https://github.com/isdk/ai-tool.js/blob/209a87173b5eabb2f81db6ea9a6784f34c24e271/src/client-tools.ts#L147)

**`Internal`**

The schema definition for `ClientTools` properties.

## Type declaration

### action

> **action**: `object`

The action for the remote call. This is primarily interpreted as an RPC method name.
For HTTP transports, it defaults to being sent as a custom RPC method name (e.g., via POST).
Only specific RESTful server implementations might map certain 'action' values (like 'get', 'delete')
to corresponding HTTP methods. Defaults to 'post'.

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
