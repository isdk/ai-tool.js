[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / EventServer

# Class: EventServer

## Hierarchy

- [`ResServerTools`](ResServerTools.md)

  ↳ **`EventServer`**

## Table of contents

### Constructors

- [constructor](EventServer.md#constructor)

### Properties

- [$attributes](EventServer.md#$attributes)
- [action](EventServer.md#action)
- [allowExportFunc](EventServer.md#allowexportfunc)
- [apiRoot](EventServer.md#apiroot)
- [constructor](EventServer.md#constructor-1)
- [defaultOptions](EventServer.md#defaultoptions)
- [depends](EventServer.md#depends)
- [description](EventServer.md#description)
- [fetchOptions](EventServer.md#fetchoptions)
- [isApi](EventServer.md#isapi)
- [methods](EventServer.md#methods)
- [name](EventServer.md#name)
- [nonExported1stChar](EventServer.md#nonexported1stchar)
- [params](EventServer.md#params)
- [result](EventServer.md#result)
- [scope](EventServer.md#scope)
- [setup](EventServer.md#setup)
- [should](EventServer.md#should)
- [stream](EventServer.md#stream)
- [tags](EventServer.md#tags)
- [SpecialRpcMethodNames](EventServer.md#specialrpcmethodnames)
- [\_sse](EventServer.md#_sse)
- [dataPath](EventServer.md#datapath)
- [ebListener](EventServer.md#eblistener)
- [items](EventServer.md#items)

### Accessors

- [SpecialRpcMethodNames](EventServer.md#specialrpcmethodnames-1)
- [sse](EventServer.md#sse)
- [apiRoot](EventServer.md#apiroot-1)
- [sse](EventServer.md#sse-1)

### Methods

- [$publish](EventServer.md#$publish)
- [$sub](EventServer.md#$sub)
- [$unsub](EventServer.md#$unsub)
- [arr2ObjParams](EventServer.md#arr2objparams)
- [assign](EventServer.md#assign)
- [assignProperty](EventServer.md#assignproperty)
- [assignPropertyTo](EventServer.md#assignpropertyto)
- [assignTo](EventServer.md#assignto)
- [cast](EventServer.md#cast)
- [castParams](EventServer.md#castparams)
- [clone](EventServer.md#clone)
- [cloneTo](EventServer.md#cloneto)
- [defineProperties](EventServer.md#defineproperties)
- [delete](EventServer.md#delete)
- [exportTo](EventServer.md#exportto)
- [forward](EventServer.md#forward)
- [func](EventServer.md#func)
- [get](EventServer.md#get)
- [getFunc](EventServer.md#getfunc)
- [getFuncWithPos](EventServer.md#getfuncwithpos)
- [getMethodFromParams](EventServer.md#getmethodfromparams)
- [getProperties](EventServer.md#getproperties)
- [hasAsyncFeature](EventServer.md#hasasyncfeature)
- [hasOwnProperty](EventServer.md#hasownproperty)
- [initRpcMethods](EventServer.md#initrpcmethods)
- [initialize](EventServer.md#initialize)
- [isPrototypeOf](EventServer.md#isprototypeof)
- [isSame](EventServer.md#issame)
- [isStream](EventServer.md#isstream)
- [list](EventServer.md#list)
- [mergeTo](EventServer.md#mergeto)
- [obj2ArrParams](EventServer.md#obj2arrparams)
- [post](EventServer.md#post)
- [propertyIsEnumerable](EventServer.md#propertyisenumerable)
- [publishSSE](EventServer.md#publishsse)
- [put](EventServer.md#put)
- [register](EventServer.md#register)
- [run](EventServer.md#run)
- [runAs](EventServer.md#runas)
- [runAsSync](EventServer.md#runassync)
- [runSync](EventServer.md#runsync)
- [runWithPos](EventServer.md#runwithpos)
- [runWithPosAs](EventServer.md#runwithposas)
- [runWithPosAsSync](EventServer.md#runwithposassync)
- [runWithPosSync](EventServer.md#runwithpossync)
- [subscribeSSE](EventServer.md#subscribesse)
- [toJSON](EventServer.md#tojson)
- [toLocaleString](EventServer.md#tolocalestring)
- [toObject](EventServer.md#toobject)
- [toString](EventServer.md#tostring)
- [unforward](EventServer.md#unforward)
- [unregister](EventServer.md#unregister)
- [valueOf](EventServer.md#valueof)
- [alreadyForward](EventServer.md#alreadyforward)
- [assign](EventServer.md#assign-1)
- [create](EventServer.md#create)
- [defineProperties](EventServer.md#defineproperties-1)
- [defineProperty](EventServer.md#defineproperty)
- [entries](EventServer.md#entries)
- [freeze](EventServer.md#freeze)
- [fromEntries](EventServer.md#fromentries)
- [get](EventServer.md#get-1)
- [getAllByTag](EventServer.md#getallbytag)
- [getByTag](EventServer.md#getbytag)
- [getFunc](EventServer.md#getfunc-1)
- [getFuncWithPos](EventServer.md#getfuncwithpos-1)
- [getOwnPropertyDescriptor](EventServer.md#getownpropertydescriptor)
- [getOwnPropertyDescriptors](EventServer.md#getownpropertydescriptors)
- [getOwnPropertyNames](EventServer.md#getownpropertynames)
- [getOwnPropertySymbols](EventServer.md#getownpropertysymbols)
- [getProperties](EventServer.md#getproperties-1)
- [getPrototypeOf](EventServer.md#getprototypeof)
- [hasAsyncFeature](EventServer.md#hasasyncfeature-1)
- [hasOwn](EventServer.md#hasown)
- [is](EventServer.md#is)
- [isExtensible](EventServer.md#isextensible)
- [isFrozen](EventServer.md#isfrozen)
- [isSealed](EventServer.md#issealed)
- [keys](EventServer.md#keys)
- [list](EventServer.md#list-1)
- [preventExtensions](EventServer.md#preventextensions)
- [publish](EventServer.md#publish)
- [register](EventServer.md#register-1)
- [run](EventServer.md#run-1)
- [runSync](EventServer.md#runsync-1)
- [runWithPos](EventServer.md#runwithpos-1)
- [runWithPosSync](EventServer.md#runwithpossync-1)
- [seal](EventServer.md#seal)
- [setApiRoot](EventServer.md#setapiroot)
- [setPrototypeOf](EventServer.md#setprototypeof)
- [subscribe](EventServer.md#subscribe)
- [toJSON](EventServer.md#tojson-1)
- [unregister](EventServer.md#unregister-1)
- [values](EventServer.md#values)

## Constructors

### constructor

• **new EventServer**(`name`, `options?`): [`EventServer`](EventServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| [`FuncItem`](../interfaces/FuncItem.md) |
| `options` | `any` |

#### Returns

[`EventServer`](EventServer.md)

#### Inherited from

[ResServerTools](ResServerTools.md).[constructor](ResServerTools.md#constructor)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:27](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/res-server-tools.ts#L27)

## Properties

### $attributes

• **$attributes**: `Properties`

#### Inherited from

[ResServerTools](ResServerTools.md).[$attributes](ResServerTools.md#$attributes)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/advance.d.ts:5

___

### action

• **action**: ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"list"`` \| ``"res"`` = `'res'`

#### Inherited from

[ResServerTools](ResServerTools.md).[action](ResServerTools.md#action)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:21](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/res-server-tools.ts#L21)

___

### allowExportFunc

• `Optional` **allowExportFunc**: `boolean`

#### Inherited from

[ResServerTools](ResServerTools.md).[allowExportFunc](ResServerTools.md#allowexportfunc)

#### Defined in

[packages/ai-tool/src/server-tools.ts:14](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/server-tools.ts#L14)

___

### apiRoot

• `Optional` **apiRoot**: `string`

#### Inherited from

[ResServerTools](ResServerTools.md).[apiRoot](ResServerTools.md#apiroot)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:34](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/consts.ts#L34)

___

### constructor

• **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

ResServerTools.constructor

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:125

___

### defaultOptions

• **defaultOptions**: `Object`

The default options for export and assign

#### Type declaration

| Name | Type |
| :------ | :------ |
| `assign?` | `IMergeOptions` |
| `export?` | `IMergeOptions` |

#### Inherited from

[ResServerTools](ResServerTools.md).[defaultOptions](ResServerTools.md#defaultoptions)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:74

___

### depends

• **depends**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event-bus` | [`EventToolFunc`](EventToolFunc.md) |

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:30](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L30)

___

### description

• **description**: `string` = `'subscribe server sent event'`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:28](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L28)

___

### fetchOptions

• `Optional` **fetchOptions**: `any`

#### Inherited from

[ResServerTools](ResServerTools.md).[fetchOptions](ResServerTools.md#fetchoptions)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:36](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/utils/consts.ts#L36)

___

### isApi

• `Optional` **isApi**: `boolean`

#### Inherited from

[ResServerTools](ResServerTools.md).[isApi](ResServerTools.md#isapi)

#### Defined in

[packages/ai-tool/src/tool-func.ts:47](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L47)

___

### methods

• **methods**: `string`[]

#### Inherited from

[ResServerTools](ResServerTools.md).[methods](ResServerTools.md#methods)

#### Defined in

[packages/ai-tool/src/rpc-methods-server-tool.ts:11](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/rpc-methods-server-tool.ts#L11)

___

### name

• **name**: `string` = `EventName`

#### Overrides

[ResServerTools](ResServerTools.md).[name](ResServerTools.md#name)

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:27](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L27)

___

### nonExported1stChar

• **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Inherited from

[ResServerTools](ResServerTools.md).[nonExported1stChar](ResServerTools.md#nonexported1stchar)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:78

___

### params

• **params**: [`FuncParams`](../interfaces/FuncParams.md)

#### Inherited from

[ResServerTools](ResServerTools.md).[params](ResServerTools.md#params)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:22](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/res-server-tools.ts#L22)

___

### result

• **result**: `string` = `'event'`

#### Overrides

[ResServerTools](ResServerTools.md).[result](ResServerTools.md#result)

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:29](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L29)

___

### scope

• `Optional` **scope**: `any`

#### Inherited from

[ResServerTools](ResServerTools.md).[scope](ResServerTools.md#scope)

#### Defined in

[packages/ai-tool/src/tool-func.ts:44](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L44)

___

### setup

• `Optional` **setup**: (`this`: [`ToolFunc`](ToolFunc.md), `options?`: [`FuncItem`](../interfaces/FuncItem.md)) => `void`

#### Type declaration

▸ (`this`, `options?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`ToolFunc`](ToolFunc.md) |
| `options?` | [`FuncItem`](../interfaces/FuncItem.md) |

##### Returns

`void`

#### Inherited from

[ResServerTools](ResServerTools.md).[setup](ResServerTools.md#setup)

#### Defined in

[packages/ai-tool/src/tool-func.ts:46](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L46)

___

### should

• **should**: `Assertion`

#### Inherited from

[ResServerTools](ResServerTools.md).[should](ResServerTools.md#should)

#### Defined in

node_modules/.pnpm/@types+chai@4.3.16/node_modules/@types/chai/index.d.ts:2100

___

### stream

• `Optional` **stream**: `boolean`

#### Inherited from

[ResServerTools](ResServerTools.md).[stream](ResServerTools.md#stream)

#### Defined in

[packages/ai-tool/src/tool-func.ts:48](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L48)

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Inherited from

[ResServerTools](ResServerTools.md).[tags](ResServerTools.md#tags)

#### Defined in

[packages/ai-tool/src/tool-func.ts:45](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L45)

___

### SpecialRpcMethodNames

▪ `Static` **SpecialRpcMethodNames**: `any`

#### Inherited from

[ResServerTools](ResServerTools.md).[SpecialRpcMethodNames](ResServerTools.md#specialrpcmethodnames)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:20](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/res-server-tools.ts#L20)

___

### \_sse

▪ `Static` **\_sse**: `undefined` \| [`SSEChannel`](SSEChannel.md)

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:19](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L19)

___

### dataPath

▪ `Static` **dataPath**: `string`

#### Inherited from

[ResServerTools](ResServerTools.md).[dataPath](ResServerTools.md#datapath)

#### Defined in

[packages/ai-tool/src/tool-func.ts:75](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L75)

___

### ebListener

▪ `Static` **ebListener**: (`this`: `Event`, ...`data`: `any`[]) => `void`

#### Type declaration

▸ (`this`, `...data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `Event` |
| `...data` | `any`[] |

##### Returns

`void`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:42](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L42)

___

### items

▪ `Static` **items**: [`Funcs`](../interfaces/Funcs.md) = `{}`

#### Inherited from

[ResServerTools](ResServerTools.md).[items](ResServerTools.md#items)

#### Defined in

[packages/ai-tool/src/tool-func.ts:74](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L74)

## Accessors

### SpecialRpcMethodNames

• `get` **SpecialRpcMethodNames**(): `any`

#### Returns

`any`

#### Inherited from

ResServerTools.SpecialRpcMethodNames

#### Defined in

[packages/ai-tool/src/rpc-methods-server-tool.ts:22](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/rpc-methods-server-tool.ts#L22)

___

### sse

• `get` **sse**(): `any`

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:32](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L32)

___

### apiRoot

• `get` **apiRoot**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

ResServerTools.apiRoot

#### Defined in

[packages/ai-tool/src/server-tools.ts:26](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/server-tools.ts#L26)

___

### sse

• `get` **sse**(): [`SSEChannel`](SSEChannel.md)

#### Returns

[`SSEChannel`](SSEChannel.md)

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:20](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L20)

## Methods

### $publish

▸ **$publish**(`«destructured»`): `undefined` \| \{ `event`: `string`[] = events }

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`EventServerFuncParams`](../interfaces/EventServerFuncParams.md) |

#### Returns

`undefined` \| \{ `event`: `string`[] = events }

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:113](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L113)

___

### $sub

▸ **$sub**(`«destructured»`): `undefined` \| \{ `event`: `string` \| `string`[]  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`EventServerFuncParams`](../interfaces/EventServerFuncParams.md) |

#### Returns

`undefined` \| \{ `event`: `string` \| `string`[]  }

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:95](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L95)

___

### $unsub

▸ **$unsub**(`«destructured»`): `undefined` \| \{ `event`: `string` \| `string`[]  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`EventServerFuncParams`](../interfaces/EventServerFuncParams.md) |

#### Returns

`undefined` \| \{ `event`: `string` \| `string`[]  }

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:104](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L104)

___

### arr2ObjParams

▸ **arr2ObjParams**(`params`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any`[] |

#### Returns

`any`[]

#### Inherited from

[ResServerTools](ResServerTools.md).[arr2ObjParams](ResServerTools.md#arr2objparams)

#### Defined in

[packages/ai-tool/src/tool-func.ts:254](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L254)

___

### assign

▸ **assign**(`src`, `options?`): `this`

Assign the values from the src object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | the source object |
| `options?` | `IMergeOptions` | - |

#### Returns

`this`

this object

#### Inherited from

[ResServerTools](ResServerTools.md).[assign](ResServerTools.md#assign)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:106

___

### assignProperty

▸ **assignProperty**(`src`, `name`, `value`, `attrs?`, `options?`): `void`

Assign a property of src to this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | the src object |
| `name` | `string` | the property name to assign |
| `value` | `any` | the property value to assign |
| `attrs?` | `any` | the attributes object |
| `options?` | `IMergeOptions` |  |

#### Returns

`void`

#### Inherited from

[ResServerTools](ResServerTools.md).[assignProperty](ResServerTools.md#assignproperty)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:117

___

### assignPropertyTo

▸ **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs?`, `options?`): `void`

Assign the property value from the src to destination object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | The destination object |
| `src` | `any` | The src object |
| `name` | `string` | The property name |
| `value` | `any` | The property value |
| `attrs?` | `any` | The attributes object of the property |
| `options?` | `IMergeOptions` |  |

#### Returns

`void`

**`Abstract`**

#### Inherited from

[ResServerTools](ResServerTools.md).[assignPropertyTo](ResServerTools.md#assignpropertyto)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:131

___

### assignTo

▸ **assignTo**(`dest?`, `options?`): `any`

Assign this attributes to the dest object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest?` | `any` | the destination object |
| `options?` | `IMergeOptions` | - |

#### Returns

`any`

the dest object

#### Inherited from

[ResServerTools](ResServerTools.md).[assignTo](ResServerTools.md#assignto)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:191

___

### cast

▸ **cast**(`key`, `value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[cast](ResServerTools.md#cast)

#### Defined in

[packages/ai-tool/src/rpc-methods-server-tool.ts:48](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/rpc-methods-server-tool.ts#L48)

___

### castParams

▸ **castParams**(`params`): `RpcMethodsServerFuncParams`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `RpcMethodsServerFuncParams` |

#### Returns

`RpcMethodsServerFuncParams`

#### Inherited from

[ResServerTools](ResServerTools.md).[castParams](ResServerTools.md#castparams)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:40](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/res-server-tools.ts#L40)

___

### clone

▸ **clone**(`options?`): `any`

Create a new object with the same values of attributes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `IMergeOptions` |

#### Returns

`any`

the new object

#### Inherited from

[ResServerTools](ResServerTools.md).[clone](ResServerTools.md#clone)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:155

___

### cloneTo

▸ **cloneTo**(`dest`, `options?`): `any`

Create and assign the values to the destination object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | the destination object |
| `options?` | `IMergeOptions` |  |

#### Returns

`any`

the new dest object

#### Inherited from

[ResServerTools](ResServerTools.md).[cloneTo](ResServerTools.md#cloneto)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:148

___

### defineProperties

▸ **defineProperties**(`aProperties`): `any`

Define the attributes of this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aProperties` | `SimplePropDescriptors` | the defined attributes of the object |

#### Returns

`any`

**`Abstract`**

#### Inherited from

[ResServerTools](ResServerTools.md).[defineProperties](ResServerTools.md#defineproperties)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:89

___

### delete

▸ **delete**(`«destructured»`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ResServerFuncParams`](../interfaces/ResServerFuncParams.md) |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[delete](ResServerTools.md#delete)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:15](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/res-server-tools.ts#L15)

___

### exportTo

▸ **exportTo**(`dest`, `options?`): `any`

Export attributes to the dest json object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | the destination object |
| `options?` | `IExportOptions` | - |

#### Returns

`any`

the dest object.

#### Inherited from

[ResServerTools](ResServerTools.md).[exportTo](ResServerTools.md#exportto)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:173

___

### forward

▸ **forward**(`events`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` \| `string`[] |

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:69](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L69)

___

### func

▸ **func**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `RpcMethodsServerFuncParams` |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[func](ResServerTools.md#func)

#### Defined in

[packages/ai-tool/src/rpc-methods-server-tool.ts:68](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/rpc-methods-server-tool.ts#L68)

___

### get

▸ **get**(`«destructured»`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ResServerFuncParams`](../interfaces/ResServerFuncParams.md) |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[get](ResServerTools.md#get)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:12](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/res-server-tools.ts#L12)

___

### getFunc

▸ **getFunc**(`name?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[getFunc](ResServerTools.md#getfunc)

#### Defined in

[packages/ai-tool/src/tool-func.ts:307](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L307)

___

### getFuncWithPos

▸ **getFuncWithPos**(`name?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[getFuncWithPos](ResServerTools.md#getfuncwithpos)

#### Defined in

[packages/ai-tool/src/tool-func.ts:331](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L331)

___

### getMethodFromParams

▸ **getMethodFromParams**(`params`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ResServerFuncParams`](../interfaces/ResServerFuncParams.md) |

#### Returns

`undefined` \| `string`

#### Inherited from

[ResServerTools](ResServerTools.md).[getMethodFromParams](ResServerTools.md#getmethodfromparams)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:31](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/res-server-tools.ts#L31)

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

**`Abstract`**

#### Inherited from

[ResServerTools](ResServerTools.md).[getProperties](ResServerTools.md#getproperties)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:98

___

### hasAsyncFeature

▸ **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | [`AsyncFeatureBits`](../enums/AsyncFeatureBits.md) |

#### Returns

`boolean`

#### Inherited from

[ResServerTools](ResServerTools.md).[hasAsyncFeature](ResServerTools.md#hasasyncfeature)

#### Defined in

[packages/ai-tool/src/tool-func.ts:336](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L336)

___

### hasOwnProperty

▸ **hasOwnProperty**(`v`): `boolean`

Determines whether an object has a property with the specified name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `PropertyKey` | A property name. |

#### Returns

`boolean`

#### Inherited from

[ResServerTools](ResServerTools.md).[hasOwnProperty](ResServerTools.md#hasownproperty)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:140

___

### initRpcMethods

▸ **initRpcMethods**(`methods?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methods` | `string`[] |

#### Returns

`void`

#### Inherited from

[ResServerTools](ResServerTools.md).[initRpcMethods](ResServerTools.md#initrpcmethods)

#### Defined in

[packages/ai-tool/src/rpc-methods-server-tool.ts:27](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/rpc-methods-server-tool.ts#L27)

___

### initialize

▸ **initialize**(`src?`): `this`

Initialize object and assign attribute values from src if src exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `src?` | `any` |

#### Returns

`this`

this object.

#### Inherited from

[ResServerTools](ResServerTools.md).[initialize](ResServerTools.md#initialize)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:139

___

### isPrototypeOf

▸ **isPrototypeOf**(`v`): `boolean`

Determines whether an object exists in another object's prototype chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `Object` | Another object whose prototype chain is to be checked. |

#### Returns

`boolean`

#### Inherited from

[ResServerTools](ResServerTools.md).[isPrototypeOf](ResServerTools.md#isprototypeof)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:146

___

### isSame

▸ **isSame**(`src`, `options?`): `boolean`

Check the src object whether “equals” this object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | `any` | The source object |
| `options?` | `IMergeOptions` | - |

#### Returns

`boolean`

#### Inherited from

[ResServerTools](ResServerTools.md).[isSame](ResServerTools.md#issame)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:200

___

### isStream

▸ **isStream**(`params`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ServerFuncParams`](../interfaces/ServerFuncParams.md) |

#### Returns

`boolean`

#### Overrides

[ResServerTools](ResServerTools.md).[isStream](ResServerTools.md#isstream)

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:127](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L127)

___

### list

▸ **list**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`EventServerFuncParams`](../interfaces/EventServerFuncParams.md) |

#### Returns

`void`

#### Overrides

[ResServerTools](ResServerTools.md).[list](ResServerTools.md#list)

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:89](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L89)

___

### mergeTo

▸ **mergeTo**(`dest`, `options?`): `any`

Merge this attributes to dest object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dest` | `any` | The destination object |
| `options?` | `IMergeOptions` | - |

#### Returns

`any`

the dest object.

#### Inherited from

[ResServerTools](ResServerTools.md).[mergeTo](ResServerTools.md#mergeto)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:164

___

### obj2ArrParams

▸ **obj2ArrParams**(`params?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`any`[]

#### Inherited from

[ResServerTools](ResServerTools.md).[obj2ArrParams](ResServerTools.md#obj2arrparams)

#### Defined in

[packages/ai-tool/src/tool-func.ts:267](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L267)

___

### post

▸ **post**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ResServerFuncParams`](../interfaces/ResServerFuncParams.md) |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[post](ResServerTools.md#post)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:13](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/res-server-tools.ts#L13)

___

### propertyIsEnumerable

▸ **propertyIsEnumerable**(`v`): `boolean`

Determines whether a specified property is enumerable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `PropertyKey` | A property name. |

#### Returns

`boolean`

#### Inherited from

[ResServerTools](ResServerTools.md).[propertyIsEnumerable](ResServerTools.md#propertyisenumerable)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:152

___

### publishSSE

▸ **publishSSE**(`data`, `event`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `event` | `string` |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:57](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L57)

___

### put

▸ **put**(`«destructured»`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ResServerFuncParams`](../interfaces/ResServerFuncParams.md) |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[put](ResServerTools.md#put)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:14](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/res-server-tools.ts#L14)

___

### register

▸ **register**(): `boolean` \| [`ToolFunc`](ToolFunc.md)

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[ResServerTools](ResServerTools.md).[register](ResServerTools.md#register)

#### Defined in

[packages/ai-tool/src/tool-func.ts:237](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L237)

___

### run

▸ **run**(`params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[ResServerTools](ResServerTools.md).[run](ResServerTools.md#run)

#### Defined in

[packages/ai-tool/src/tool-func.ts:294](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L294)

___

### runAs

▸ **runAs**(`name`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[ResServerTools](ResServerTools.md).[runAs](ResServerTools.md#runas)

#### Defined in

[packages/ai-tool/src/tool-func.ts:298](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L298)

___

### runAsSync

▸ **runAsSync**(`name`, `params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[runAsSync](ResServerTools.md#runassync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:302](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L302)

___

### runSync

▸ **runSync**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[runSync](ResServerTools.md#runsync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:280](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L280)

___

### runWithPos

▸ **runWithPos**(`...params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[ResServerTools](ResServerTools.md).[runWithPos](ResServerTools.md#runwithpos)

#### Defined in

[packages/ai-tool/src/tool-func.ts:323](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L323)

___

### runWithPosAs

▸ **runWithPosAs**(`name`, `...params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[ResServerTools](ResServerTools.md).[runWithPosAs](ResServerTools.md#runwithposas)

#### Defined in

[packages/ai-tool/src/tool-func.ts:327](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L327)

___

### runWithPosAsSync

▸ **runWithPosAsSync**(`name`, `...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[runWithPosAsSync](ResServerTools.md#runwithposassync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:319](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L319)

___

### runWithPosSync

▸ **runWithPosSync**(`...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any`[] |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[runWithPosSync](ResServerTools.md#runwithpossync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:312](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L312)

___

### subscribeSSE

▸ **subscribeSSE**(`req`, `res`, `events?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `IncomingMessage` |
| `res` | `ServerResponse`\<`IncomingMessage`\> |
| `events?` | `string` \| `string`[] |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:61](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L61)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[toJSON](ResServerTools.md#tojson)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:182

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

[ResServerTools](ResServerTools.md).[toLocaleString](ResServerTools.md#tolocalestring)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:131

___

### toObject

▸ **toObject**(`options?`): `any`

Convert the attributes to the json object

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`any`

the json object.

#### Inherited from

[ResServerTools](ResServerTools.md).[toObject](ResServerTools.md#toobject)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:181

___

### toString

▸ **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

[ResServerTools](ResServerTools.md).[toString](ResServerTools.md#tostring)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:128

___

### unforward

▸ **unforward**(`events`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` \| `string`[] |

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:80](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L80)

___

### unregister

▸ **unregister**(): `any`

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[unregister](ResServerTools.md#unregister)

#### Defined in

[packages/ai-tool/src/tool-func.ts:250](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L250)

___

### valueOf

▸ **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

[ResServerTools](ResServerTools.md).[valueOf](ResServerTools.md#valueof)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:134

___

### alreadyForward

▸ **alreadyForward**(`event`): `undefined` \| ``true``

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |

#### Returns

`undefined` \| ``true``

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:50](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L50)

___

### assign

▸ **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source` | `U` | The source object from which to copy properties. |

#### Returns

`T` & `U`

#### Inherited from

[ResServerTools](ResServerTools.md).[assign](ResServerTools.md#assign-1)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:284

▸ **assign**\<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source1` | `U` | The first source object from which to copy properties. |
| `source2` | `V` | The second source object from which to copy properties. |

#### Returns

`T` & `U` & `V`

#### Inherited from

[ResServerTools](ResServerTools.md).[assign](ResServerTools.md#assign-1)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:293

▸ **assign**\<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | `U` |
| `V` | `V` |
| `W` | `W` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | The target object to copy to. |
| `source1` | `U` | The first source object from which to copy properties. |
| `source2` | `V` | The second source object from which to copy properties. |
| `source3` | `W` | The third source object from which to copy properties. |

#### Returns

`T` & `U` & `V` & `W`

#### Inherited from

[ResServerTools](ResServerTools.md).[assign](ResServerTools.md#assign-1)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:303

▸ **assign**(`target`, `...sources`): `any`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | The target object to copy to. |
| `...sources` | `any`[] | One or more source objects from which to copy properties |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[assign](ResServerTools.md#assign-1)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:311

___

### create

▸ **create**(`o`): `any`

Creates an object that has the specified prototype or that has null prototype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | ``null`` \| `object` | Object to use as a prototype. May be null. |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[create](ResServerTools.md#create)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:188

▸ **create**(`o`, `properties`): `any`

Creates an object that has the specified prototype, and that optionally contains specified properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | ``null`` \| `object` | Object to use as a prototype. May be null |
| `properties` | `PropertyDescriptorMap` & `ThisType`\<`any`\> | JavaScript object that contains one or more property descriptors. |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[create](ResServerTools.md#create)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:195

___

### defineProperties

▸ **defineProperties**(`aTarget`, `aProperties`, `recreate?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aTarget` | `any` |
| `aProperties` | `PropDescriptors` |
| `recreate?` | `boolean` |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[defineProperties](ResServerTools.md#defineproperties-1)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/advance.d.ts:11

___

### defineProperty

▸ **defineProperty**\<`T`\>(`o`, `p`, `attributes`): `T`

Adds a property to an object, or modifies attributes of an existing property.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object. |
| `p` | `PropertyKey` | The property name. |
| `attributes` | `PropertyDescriptor` & `ThisType`\<`any`\> | Descriptor for the property. It can be for a data property or an accessor property. |

#### Returns

`T`

#### Inherited from

[ResServerTools](ResServerTools.md).[defineProperty](ResServerTools.md#defineproperty)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:203

___

### entries

▸ **entries**\<`T`\>(`o`): [`string`, `T`][]

Returns an array of key/values of the enumerable properties of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | \{ `[s: string]`: `T`;  } \| `ArrayLike`\<`T`\> | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

[`string`, `T`][]

#### Inherited from

[ResServerTools](ResServerTools.md).[entries](ResServerTools.md#entries)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:36

▸ **entries**(`o`): [`string`, `any`][]

Returns an array of key/values of the enumerable properties of an object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

[`string`, `any`][]

#### Inherited from

[ResServerTools](ResServerTools.md).[entries](ResServerTools.md#entries)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:42

___

### freeze

▸ **freeze**\<`T`\>(`f`): `T`

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `T` | Object on which to lock the attributes. |

#### Returns

`T`

#### Inherited from

[ResServerTools](ResServerTools.md).[freeze](ResServerTools.md#freeze)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:222

▸ **freeze**\<`T`, `U`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |
| `U` | extends `string` \| `number` \| `bigint` \| `boolean` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`Readonly`\<`T`\>

#### Inherited from

[ResServerTools](ResServerTools.md).[freeze](ResServerTools.md#freeze)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:228

▸ **freeze**\<`T`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`Readonly`\<`T`\>

#### Inherited from

[ResServerTools](ResServerTools.md).[freeze](ResServerTools.md#freeze)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:234

___

### fromEntries

▸ **fromEntries**\<`T`\>(`entries`): `Object`

Returns an object created by key-value entries for properties and methods

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Iterable`\<readonly [`PropertyKey`, `T`]\> | An iterable object that contains key-value entries for properties and methods. |

#### Returns

`Object`

#### Inherited from

[ResServerTools](ResServerTools.md).[fromEntries](ResServerTools.md#fromentries)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2019.object.d.ts:26

▸ **fromEntries**(`entries`): `any`

Returns an object created by key-value entries for properties and methods

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Iterable`\<readonly `any`[]\> | An iterable object that contains key-value entries for properties and methods. |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[fromEntries](ResServerTools.md#fromentries)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2019.object.d.ts:32

___

### get

▸ **get**(`name`): [`ToolFunc`](ToolFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`ToolFunc`](ToolFunc.md)

#### Inherited from

[ResServerTools](ResServerTools.md).[get](ResServerTools.md#get-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:77](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L77)

___

### getAllByTag

▸ **getAllByTag**(`tagName`): [`ToolFunc`](ToolFunc.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

[`ToolFunc`](ToolFunc.md)[]

#### Inherited from

[ResServerTools](ResServerTools.md).[getAllByTag](ResServerTools.md#getallbytag)

#### Defined in

[packages/ai-tool/src/tool-func.ts:105](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L105)

___

### getByTag

▸ **getByTag**(`tagName`): `undefined` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[ResServerTools](ResServerTools.md).[getByTag](ResServerTools.md#getbytag)

#### Defined in

[packages/ai-tool/src/tool-func.ts:85](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L85)

___

### getFunc

▸ **getFunc**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[getFunc](ResServerTools.md#getfunc-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:146](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L146)

___

### getFuncWithPos

▸ **getFuncWithPos**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[getFuncWithPos](ResServerTools.md#getfuncwithpos-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:167](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L167)

___

### getOwnPropertyDescriptor

▸ **getOwnPropertyDescriptor**(`o`, `p`): `undefined` \| `PropertyDescriptor`

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object that contains the property. |
| `p` | `PropertyKey` | Name of the property. |

#### Returns

`undefined` \| `PropertyDescriptor`

#### Inherited from

[ResServerTools](ResServerTools.md).[getOwnPropertyDescriptor](ResServerTools.md#getownpropertydescriptor)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:175

___

### getOwnPropertyDescriptors

▸ **getOwnPropertyDescriptors**\<`T`\>(`o`): \{ [P in string \| number \| symbol]: TypedPropertyDescriptor\<T[P]\> } & \{ `[x: string]`: `PropertyDescriptor`;  }

Returns an object containing all own property descriptors of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

\{ [P in string \| number \| symbol]: TypedPropertyDescriptor\<T[P]\> } & \{ `[x: string]`: `PropertyDescriptor`;  }

#### Inherited from

[ResServerTools](ResServerTools.md).[getOwnPropertyDescriptors](ResServerTools.md#getownpropertydescriptors)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:48

___

### getOwnPropertyNames

▸ **getOwnPropertyNames**(`o`): `string`[]

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object that contains the own properties. |

#### Returns

`string`[]

#### Inherited from

[ResServerTools](ResServerTools.md).[getOwnPropertyNames](ResServerTools.md#getownpropertynames)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:182

___

### getOwnPropertySymbols

▸ **getOwnPropertySymbols**(`o`): `symbol`[]

Returns an array of all symbol properties found directly on object o.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to retrieve the symbols from. |

#### Returns

`symbol`[]

#### Inherited from

[ResServerTools](ResServerTools.md).[getOwnPropertySymbols](ResServerTools.md#getownpropertysymbols)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:317

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

[ResServerTools](ResServerTools.md).[getProperties](ResServerTools.md#getproperties-1)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/advance.d.ts:10

___

### getPrototypeOf

▸ **getPrototypeOf**(`o`): `any`

Returns the prototype of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | The object that references the prototype. |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[getPrototypeOf](ResServerTools.md#getprototypeof)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:167

___

### hasAsyncFeature

▸ **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | [`AsyncFeatureBits`](../enums/AsyncFeatureBits.md) |

#### Returns

`boolean`

#### Inherited from

[ResServerTools](ResServerTools.md).[hasAsyncFeature](ResServerTools.md#hasasyncfeature-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:123](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L123)

___

### hasOwn

▸ **hasOwn**(`o`, `v`): `boolean`

Determines whether an object has a property with the specified name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `object` | An object. |
| `v` | `PropertyKey` | A property name. |

#### Returns

`boolean`

#### Inherited from

[ResServerTools](ResServerTools.md).[hasOwn](ResServerTools.md#hasown)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2022.object.d.ts:25

___

### is

▸ **is**(`value1`, `value2`): `boolean`

Returns true if the values are the same value, false otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `any` | The first value. |
| `value2` | `any` | The second value. |

#### Returns

`boolean`

#### Inherited from

[ResServerTools](ResServerTools.md).[is](ResServerTools.md#is)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:330

___

### isExtensible

▸ **isExtensible**(`o`): `boolean`

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Inherited from

[ResServerTools](ResServerTools.md).[isExtensible](ResServerTools.md#isextensible)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:258

___

### isFrozen

▸ **isFrozen**(`o`): `boolean`

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Inherited from

[ResServerTools](ResServerTools.md).[isFrozen](ResServerTools.md#isfrozen)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:252

___

### isSealed

▸ **isSealed**(`o`): `boolean`

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object to test. |

#### Returns

`boolean`

#### Inherited from

[ResServerTools](ResServerTools.md).[isSealed](ResServerTools.md#issealed)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:246

___

### keys

▸ **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`string`[]

#### Inherited from

[ResServerTools](ResServerTools.md).[keys](ResServerTools.md#keys)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:264

▸ **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`string`[]

#### Inherited from

[ResServerTools](ResServerTools.md).[keys](ResServerTools.md#keys)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:323

___

### list

▸ **list**(): [`Funcs`](../interfaces/Funcs.md)

#### Returns

[`Funcs`](../interfaces/Funcs.md)

#### Inherited from

[ResServerTools](ResServerTools.md).[list](ResServerTools.md#list-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:81](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L81)

___

### preventExtensions

▸ **preventExtensions**\<`T`\>(`o`): `T`

Prevents the addition of new properties to an object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object to make non-extensible. |

#### Returns

`T`

#### Inherited from

[ResServerTools](ResServerTools.md).[preventExtensions](ResServerTools.md#preventextensions)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:240

___

### publish

▸ **publish**(`data`, `event`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `event` | `string` |

#### Returns

`undefined` \| `number`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:36](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L36)

___

### register

▸ **register**(`name`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options` | [`FuncItem`](../interfaces/FuncItem.md) |

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[ResServerTools](ResServerTools.md).[register](ResServerTools.md#register-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:172](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L172)

▸ **register**(`func`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |
| `options` | [`FuncItem`](../interfaces/FuncItem.md) |

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[ResServerTools](ResServerTools.md).[register](ResServerTools.md#register-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:173](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L173)

▸ **register**(`name`, `options?`): `boolean` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| [`ToolFunc`](ToolFunc.md) \| [`FuncItem`](../interfaces/FuncItem.md) |
| `options?` | [`FuncItem`](../interfaces/FuncItem.md) |

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[ResServerTools](ResServerTools.md).[register](ResServerTools.md#register-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:174](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L174)

___

### run

▸ **run**(`name`, `params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[ResServerTools](ResServerTools.md).[run](ResServerTools.md#run-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:130](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L130)

___

### runSync

▸ **runSync**(`name`, `params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `params?` | `any` |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[runSync](ResServerTools.md#runsync-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:138](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L138)

___

### runWithPos

▸ **runWithPos**(`name`, `...params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[ResServerTools](ResServerTools.md).[runWithPos](ResServerTools.md#runwithpos-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:151](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L151)

___

### runWithPosSync

▸ **runWithPosSync**(`name`, `...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `...params` | `any`[] |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[runWithPosSync](ResServerTools.md#runwithpossync-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:159](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L159)

___

### seal

▸ **seal**\<`T`\>(`o`): `T`

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Object on which to lock the attributes. |

#### Returns

`T`

#### Inherited from

[ResServerTools](ResServerTools.md).[seal](ResServerTools.md#seal)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:216

___

### setApiRoot

▸ **setApiRoot**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

#### Returns

`void`

#### Inherited from

[ResServerTools](ResServerTools.md).[setApiRoot](ResServerTools.md#setapiroot)

#### Defined in

[packages/ai-tool/src/server-tools.ts:30](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/server-tools.ts#L30)

___

### setPrototypeOf

▸ **setPrototypeOf**(`o`, `proto`): `any`

Sets the prototype of a specified object o to object proto or null. Returns the object o.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | The object to change its prototype. |
| `proto` | ``null`` \| `object` | The value of the new prototype or null. |

#### Returns

`any`

#### Inherited from

[ResServerTools](ResServerTools.md).[setPrototypeOf](ResServerTools.md#setprototypeof)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:337

___

### subscribe

▸ **subscribe**(`req`, `res`, `events?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `IncomingMessage` |
| `res` | `ServerResponse`\<`IncomingMessage`\> |
| `events?` | `string`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `events` | `undefined` \| `Events` |
| `req` | `IncomingMessage` |
| `res` | `ServerResponse`\<`IncomingMessage`\> |

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:46](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/funcs/event-server.ts#L46)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Inherited from

[ResServerTools](ResServerTools.md).[toJSON](ResServerTools.md#tojson-1)

#### Defined in

[packages/ai-tool/src/server-tools.ts:44](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/server-tools.ts#L44)

___

### unregister

▸ **unregister**(`name`): `undefined` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[ResServerTools](ResServerTools.md).[unregister](ResServerTools.md#unregister-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:202](https://github.com/isdk/ai-tool.js/blob/727ad337acba85b160efbc4d039daefcc8371127/src/tool-func.ts#L202)

___

### values

▸ **values**\<`T`\>(`o`): `T`[]

Returns an array of values of the enumerable properties of an object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | \{ `[s: string]`: `T`;  } \| `ArrayLike`\<`T`\> | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`T`[]

#### Inherited from

[ResServerTools](ResServerTools.md).[values](ResServerTools.md#values)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:24

▸ **values**(`o`): `any`[]

Returns an array of values of the enumerable properties of an object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `Object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`any`[]

#### Inherited from

[ResServerTools](ResServerTools.md).[values](ResServerTools.md#values)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:30
