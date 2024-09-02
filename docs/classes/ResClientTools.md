[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / ResClientTools

# Class: ResClientTools

## Hierarchy

- `RpcMethodsClientTool`

  ↳ **`ResClientTools`**

  ↳↳ [`EventClient`](EventClient.md)

## Table of contents

### Constructors

- [constructor](ResClientTools.md#constructor)

### Properties

- [$attributes](ResClientTools.md#$attributes)
- [action](ResClientTools.md#action)
- [apiRoot](ResClientTools.md#apiroot)
- [constructor](ResClientTools.md#constructor-1)
- [defaultOptions](ResClientTools.md#defaultoptions)
- [fetchOptions](ResClientTools.md#fetchoptions)
- [isApi](ResClientTools.md#isapi)
- [name](ResClientTools.md#name)
- [nonExported1stChar](ResClientTools.md#nonexported1stchar)
- [params](ResClientTools.md#params)
- [result](ResClientTools.md#result)
- [scope](ResClientTools.md#scope)
- [setup](ResClientTools.md#setup)
- [should](ResClientTools.md#should)
- [stream](ResClientTools.md#stream)
- [tags](ResClientTools.md#tags)
- [dataPath](ResClientTools.md#datapath)
- [items](ResClientTools.md#items)

### Accessors

- [apiRoot](ResClientTools.md#apiroot-1)

### Methods

- [\_func](ResClientTools.md#_func)
- [arr2ObjParams](ResClientTools.md#arr2objparams)
- [assign](ResClientTools.md#assign)
- [assignMethods](ResClientTools.md#assignmethods)
- [assignProperty](ResClientTools.md#assignproperty)
- [assignPropertyTo](ResClientTools.md#assignpropertyto)
- [assignTo](ResClientTools.md#assignto)
- [clone](ResClientTools.md#clone)
- [cloneTo](ResClientTools.md#cloneto)
- [defineProperties](ResClientTools.md#defineproperties)
- [delete](ResClientTools.md#delete)
- [errorFrom](ResClientTools.md#errorfrom)
- [exportTo](ResClientTools.md#exportto)
- [fetch](ResClientTools.md#fetch)
- [func](ResClientTools.md#func)
- [get](ResClientTools.md#get)
- [getFunc](ResClientTools.md#getfunc)
- [getFuncWithPos](ResClientTools.md#getfuncwithpos)
- [getProperties](ResClientTools.md#getproperties)
- [getUrlParams](ResClientTools.md#geturlparams)
- [hasAsyncFeature](ResClientTools.md#hasasyncfeature)
- [hasOwnProperty](ResClientTools.md#hasownproperty)
- [initialize](ResClientTools.md#initialize)
- [isPrototypeOf](ResClientTools.md#isprototypeof)
- [isSame](ResClientTools.md#issame)
- [isStream](ResClientTools.md#isstream)
- [list](ResClientTools.md#list)
- [mergeTo](ResClientTools.md#mergeto)
- [obj2ArrParams](ResClientTools.md#obj2arrparams)
- [post](ResClientTools.md#post)
- [propertyIsEnumerable](ResClientTools.md#propertyisenumerable)
- [put](ResClientTools.md#put)
- [register](ResClientTools.md#register)
- [run](ResClientTools.md#run)
- [runAs](ResClientTools.md#runas)
- [runAsSync](ResClientTools.md#runassync)
- [runSync](ResClientTools.md#runsync)
- [runWithPos](ResClientTools.md#runwithpos)
- [runWithPosAs](ResClientTools.md#runwithposas)
- [runWithPosAsSync](ResClientTools.md#runwithposassync)
- [runWithPosSync](ResClientTools.md#runwithpossync)
- [toJSON](ResClientTools.md#tojson)
- [toLocaleString](ResClientTools.md#tolocalestring)
- [toObject](ResClientTools.md#toobject)
- [toString](ResClientTools.md#tostring)
- [unregister](ResClientTools.md#unregister)
- [valueOf](ResClientTools.md#valueof)
- [assign](ResClientTools.md#assign-1)
- [create](ResClientTools.md#create)
- [defineProperties](ResClientTools.md#defineproperties-1)
- [defineProperty](ResClientTools.md#defineproperty)
- [entries](ResClientTools.md#entries)
- [fetch](ResClientTools.md#fetch-1)
- [freeze](ResClientTools.md#freeze)
- [fromEntries](ResClientTools.md#fromentries)
- [get](ResClientTools.md#get-1)
- [getAllByTag](ResClientTools.md#getallbytag)
- [getByTag](ResClientTools.md#getbytag)
- [getFunc](ResClientTools.md#getfunc-1)
- [getFuncWithPos](ResClientTools.md#getfuncwithpos-1)
- [getOwnPropertyDescriptor](ResClientTools.md#getownpropertydescriptor)
- [getOwnPropertyDescriptors](ResClientTools.md#getownpropertydescriptors)
- [getOwnPropertyNames](ResClientTools.md#getownpropertynames)
- [getOwnPropertySymbols](ResClientTools.md#getownpropertysymbols)
- [getProperties](ResClientTools.md#getproperties-1)
- [getPrototypeOf](ResClientTools.md#getprototypeof)
- [hasAsyncFeature](ResClientTools.md#hasasyncfeature-1)
- [hasOwn](ResClientTools.md#hasown)
- [is](ResClientTools.md#is)
- [isExtensible](ResClientTools.md#isextensible)
- [isFrozen](ResClientTools.md#isfrozen)
- [isSealed](ResClientTools.md#issealed)
- [keys](ResClientTools.md#keys)
- [list](ResClientTools.md#list-1)
- [loadFrom](ResClientTools.md#loadfrom)
- [loadFromSync](ResClientTools.md#loadfromsync)
- [preventExtensions](ResClientTools.md#preventextensions)
- [register](ResClientTools.md#register-1)
- [run](ResClientTools.md#run-1)
- [runSync](ResClientTools.md#runsync-1)
- [runWithPos](ResClientTools.md#runwithpos-1)
- [runWithPosSync](ResClientTools.md#runwithpossync-1)
- [seal](ResClientTools.md#seal)
- [setApiRoot](ResClientTools.md#setapiroot)
- [setPrototypeOf](ResClientTools.md#setprototypeof)
- [unregister](ResClientTools.md#unregister-1)
- [values](ResClientTools.md#values)

## Constructors

### constructor

• **new ResClientTools**(`name`, `options?`): [`ResClientTools`](ResClientTools.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| [`FuncItem`](../interfaces/FuncItem.md) |
| `options` | `any` |

#### Returns

[`ResClientTools`](ResClientTools.md)

#### Defined in

[packages/ai-tool/src/tool-func.ts:210](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L210)

## Properties

### $attributes

• **$attributes**: `Properties`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/advance.d.ts:5

___

### action

• `Optional` **action**: ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"list"`` \| ``"res"``

#### Defined in

[packages/ai-tool/src/utils/consts.ts:35](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/utils/consts.ts#L35)

___

### apiRoot

• **apiRoot**: `undefined` \| `string`

#### Defined in

[packages/ai-tool/src/client-tools.ts:16](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/client-tools.ts#L16)

___

### constructor

• **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

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

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:74

___

### fetchOptions

• `Optional` **fetchOptions**: `any`

#### Defined in

[packages/ai-tool/src/utils/consts.ts:36](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/utils/consts.ts#L36)

___

### isApi

• `Optional` **isApi**: `boolean`

#### Defined in

[packages/ai-tool/src/tool-func.ts:47](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L47)

___

### name

• `Optional` **name**: `string`

#### Defined in

[packages/ai-tool/src/tool-func.ts:41](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L41)

___

### nonExported1stChar

• **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:78

___

### params

• `Optional` **params**: [`FuncParams`](../interfaces/FuncParams.md) \| [`FuncParam`](../interfaces/FuncParam.md)[]

#### Defined in

[packages/ai-tool/src/tool-func.ts:42](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L42)

___

### result

• `Optional` **result**: `string`

#### Defined in

[packages/ai-tool/src/tool-func.ts:43](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L43)

___

### scope

• `Optional` **scope**: `any`

#### Defined in

[packages/ai-tool/src/tool-func.ts:44](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L44)

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

#### Defined in

[packages/ai-tool/src/tool-func.ts:46](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L46)

___

### should

• **should**: `Assertion`

#### Defined in

node_modules/.pnpm/@types+chai@4.3.16/node_modules/@types/chai/index.d.ts:2100

___

### stream

• `Optional` **stream**: `boolean`

#### Defined in

[packages/ai-tool/src/tool-func.ts:48](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L48)

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Defined in

[packages/ai-tool/src/tool-func.ts:45](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L45)

___

### dataPath

▪ `Static` **dataPath**: `string`

#### Defined in

[packages/ai-tool/src/tool-func.ts:75](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L75)

___

### items

▪ `Static` **items**: [`Funcs`](../interfaces/Funcs.md) = `{}`

#### Defined in

[packages/ai-tool/src/tool-func.ts:74](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L74)

## Accessors

### apiRoot

• `get` **apiRoot**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/ai-tool/src/client-tools.ts:19](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/client-tools.ts#L19)

## Methods

### \_func

▸ **_func**(`action`, `options`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"list"`` \| ``"res"`` |
| `options` | `RpcMethodsClientFuncParams` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool/src/rpc-methods-client-tool.ts:10](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/rpc-methods-client-tool.ts#L10)

___

### arr2ObjParams

▸ **arr2ObjParams**(`params`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any`[] |

#### Returns

`any`[]

#### Defined in

[packages/ai-tool/src/tool-func.ts:254](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L254)

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

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:106

___

### assignMethods

▸ **assignMethods**(`methods`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methods` | `string`[] |

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/rpc-methods-client-tool.ts:27](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/rpc-methods-client-tool.ts#L27)

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

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:191

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

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:89

___

### delete

▸ **delete**(`«destructured»`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md) |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:13](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/res-client-tools.ts#L13)

___

### errorFrom

▸ **errorFrom**(`res`): `Promise`\<[`CommonError`](CommonError.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | `Response` |

#### Returns

`Promise`\<[`CommonError`](CommonError.md)\>

#### Defined in

[packages/ai-tool/src/client-tools.ts:112](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/client-tools.ts#L112)

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

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:173

___

### fetch

▸ **fetch**(`options`, `action`): `Promise`\<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md) |
| `action` | ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"list"`` \| ``"res"`` |

#### Returns

`Promise`\<`Response`\>

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:18](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/res-client-tools.ts#L18)

___

### func

▸ **func**(`options`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RpcMethodsClientFuncParams` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool/src/rpc-methods-client-tool.ts:19](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/rpc-methods-client-tool.ts#L19)

___

### get

▸ **get**(`«destructured»`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md) |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:10](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/res-client-tools.ts#L10)

___

### getFunc

▸ **getFunc**(`name?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/tool-func.ts:307](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L307)

___

### getFuncWithPos

▸ **getFuncWithPos**(`name?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/tool-func.ts:331](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L331)

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

**`Abstract`**

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:98

___

### getUrlParams

▸ **getUrlParams**(`objParam`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `objParam` | `any` |

#### Returns

`string`

#### Defined in

[packages/ai-tool/src/client-tools.ts:63](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/client-tools.ts#L63)

___

### hasAsyncFeature

▸ **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | [`AsyncFeatureBits`](../enums/AsyncFeatureBits.md) |

#### Returns

`boolean`

#### Defined in

[packages/ai-tool/src/tool-func.ts:336](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L336)

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

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:140

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

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:200

___

### isStream

▸ **isStream**(`params`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`undefined` \| `boolean`

#### Defined in

[packages/ai-tool/src/tool-func.ts:342](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L342)

___

### list

▸ **list**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md) |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:14](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/res-client-tools.ts#L14)

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

#### Defined in

[packages/ai-tool/src/tool-func.ts:267](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L267)

___

### post

▸ **post**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md) |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:11](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/res-client-tools.ts#L11)

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

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:152

___

### put

▸ **put**(`«destructured»`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md) |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:12](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/res-client-tools.ts#L12)

___

### register

▸ **register**(): `boolean` \| [`ToolFunc`](ToolFunc.md)

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Defined in

[packages/ai-tool/src/tool-func.ts:237](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L237)

___

### run

▸ **run**(`params?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool/src/tool-func.ts:294](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L294)

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

#### Defined in

[packages/ai-tool/src/tool-func.ts:298](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L298)

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

#### Defined in

[packages/ai-tool/src/tool-func.ts:302](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L302)

___

### runSync

▸ **runSync**(`params?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `any` |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/tool-func.ts:280](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L280)

___

### runWithPos

▸ **runWithPos**(`...params`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool/src/tool-func.ts:323](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L323)

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

#### Defined in

[packages/ai-tool/src/tool-func.ts:327](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L327)

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

#### Defined in

[packages/ai-tool/src/tool-func.ts:319](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L319)

___

### runWithPosSync

▸ **runWithPosSync**(`...params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any`[] |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/tool-func.ts:312](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L312)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:182

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

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

#### Defined in

node_modules/.pnpm/property-manager@2.0.0/node_modules/property-manager/lib/abstract.d.ts:181

___

### toString

▸ **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:128

___

### unregister

▸ **unregister**(): `any`

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/tool-func.ts:250](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L250)

___

### valueOf

▸ **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:134

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

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:42

___

### fetch

▸ **fetch**(`name`, `objParam?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `objParam?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool/src/client-tools.ts:56](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/client-tools.ts#L56)

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

#### Defined in

[packages/ai-tool/src/tool-func.ts:77](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L77)

___

### getAllByTag

▸ **getAllByTag**(`tagName`): [`ToolFunc`](ToolFunc.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

[`ToolFunc`](ToolFunc.md)[]

#### Defined in

[packages/ai-tool/src/tool-func.ts:105](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L105)

___

### getByTag

▸ **getByTag**(`tagName`): `undefined` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

#### Defined in

[packages/ai-tool/src/tool-func.ts:85](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L85)

___

### getFunc

▸ **getFunc**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/tool-func.ts:146](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L146)

___

### getFuncWithPos

▸ **getFuncWithPos**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/tool-func.ts:167](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L167)

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

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:317

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

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

#### Defined in

[packages/ai-tool/src/tool-func.ts:123](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L123)

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

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:323

___

### list

▸ **list**(): [`Funcs`](../interfaces/Funcs.md)

#### Returns

[`Funcs`](../interfaces/Funcs.md)

#### Defined in

[packages/ai-tool/src/tool-func.ts:81](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L81)

___

### loadFrom

▸ **loadFrom**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ai-tool/src/client-tools.ts:29](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/client-tools.ts#L29)

___

### loadFromSync

▸ **loadFromSync**(`items`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | [`Funcs`](../interfaces/Funcs.md) |

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/client-tools.ts:41](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/client-tools.ts#L41)

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

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:240

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

#### Defined in

[packages/ai-tool/src/tool-func.ts:172](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L172)

▸ **register**(`func`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |
| `options` | [`FuncItem`](../interfaces/FuncItem.md) |

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Defined in

[packages/ai-tool/src/tool-func.ts:173](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L173)

▸ **register**(`name`, `options?`): `boolean` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| [`ToolFunc`](ToolFunc.md) \| [`FuncItem`](../interfaces/FuncItem.md) |
| `options?` | [`FuncItem`](../interfaces/FuncItem.md) |

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Defined in

[packages/ai-tool/src/tool-func.ts:174](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L174)

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

#### Defined in

[packages/ai-tool/src/tool-func.ts:130](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L130)

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

#### Defined in

[packages/ai-tool/src/tool-func.ts:138](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L138)

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

#### Defined in

[packages/ai-tool/src/tool-func.ts:151](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L151)

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

#### Defined in

[packages/ai-tool/src/tool-func.ts:159](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L159)

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

#### Defined in

[packages/ai-tool/src/client-tools.ts:23](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/client-tools.ts#L23)

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

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:337

___

### unregister

▸ **unregister**(`name`): `undefined` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

#### Defined in

[packages/ai-tool/src/tool-func.ts:202](https://github.com/isdk/ai-tool.js/blob/c88a9f179b129c3f6d28b6a0f9e682e41997bc83/src/tool-func.ts#L202)

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

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:30
