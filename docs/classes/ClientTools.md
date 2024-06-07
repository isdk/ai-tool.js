[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / ClientTools

# Class: ClientTools

## Hierarchy

- [`ClientFuncItem`](../interfaces/ClientFuncItem.md)

- [`ToolFunc`](ToolFunc.md)

  ↳ **`ClientTools`**

  ↳↳ [`ResClientTools`](ResClientTools.md)

## Indexable

▪ [name: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ClientTools.md#constructor)

### Properties

- [$attributes](ClientTools.md#$attributes)
- [action](ClientTools.md#action)
- [apiRoot](ClientTools.md#apiroot)
- [constructor](ClientTools.md#constructor-1)
- [defaultOptions](ClientTools.md#defaultoptions)
- [fetchOptions](ClientTools.md#fetchoptions)
- [name](ClientTools.md#name)
- [nonExported1stChar](ClientTools.md#nonexported1stchar)
- [params](ClientTools.md#params)
- [result](ClientTools.md#result)
- [scope](ClientTools.md#scope)
- [setup](ClientTools.md#setup)
- [should](ClientTools.md#should)
- [stream](ClientTools.md#stream)
- [tags](ClientTools.md#tags)
- [\_apiRoot](ClientTools.md#_apiroot)
- [dataPath](ClientTools.md#datapath)
- [items](ClientTools.md#items)

### Accessors

- [apiRoot](ClientTools.md#apiroot-1)

### Methods

- [arr2ObjParams](ClientTools.md#arr2objparams)
- [assign](ClientTools.md#assign)
- [assignProperty](ClientTools.md#assignproperty)
- [assignPropertyTo](ClientTools.md#assignpropertyto)
- [assignTo](ClientTools.md#assignto)
- [clone](ClientTools.md#clone)
- [cloneTo](ClientTools.md#cloneto)
- [defineProperties](ClientTools.md#defineproperties)
- [errorFrom](ClientTools.md#errorfrom)
- [exportTo](ClientTools.md#exportto)
- [fetch](ClientTools.md#fetch)
- [func](ClientTools.md#func)
- [getFunc](ClientTools.md#getfunc)
- [getFuncWithPos](ClientTools.md#getfuncwithpos)
- [getProperties](ClientTools.md#getproperties)
- [getUrlParams](ClientTools.md#geturlparams)
- [hasOwnProperty](ClientTools.md#hasownproperty)
- [initialize](ClientTools.md#initialize)
- [isPrototypeOf](ClientTools.md#isprototypeof)
- [isSame](ClientTools.md#issame)
- [mergeTo](ClientTools.md#mergeto)
- [obj2ArrParams](ClientTools.md#obj2arrparams)
- [propertyIsEnumerable](ClientTools.md#propertyisenumerable)
- [register](ClientTools.md#register)
- [run](ClientTools.md#run)
- [runAs](ClientTools.md#runas)
- [runAsSync](ClientTools.md#runassync)
- [runSync](ClientTools.md#runsync)
- [runWithPos](ClientTools.md#runwithpos)
- [runWithPosAs](ClientTools.md#runwithposas)
- [runWithPosAsSync](ClientTools.md#runwithposassync)
- [runWithPosSync](ClientTools.md#runwithpossync)
- [toJSON](ClientTools.md#tojson)
- [toLocaleString](ClientTools.md#tolocalestring)
- [toObject](ClientTools.md#toobject)
- [toString](ClientTools.md#tostring)
- [unregister](ClientTools.md#unregister)
- [valueOf](ClientTools.md#valueof)
- [assign](ClientTools.md#assign-1)
- [create](ClientTools.md#create)
- [defineProperties](ClientTools.md#defineproperties-1)
- [defineProperty](ClientTools.md#defineproperty)
- [entries](ClientTools.md#entries)
- [fetch](ClientTools.md#fetch-1)
- [freeze](ClientTools.md#freeze)
- [fromEntries](ClientTools.md#fromentries)
- [get](ClientTools.md#get)
- [getAllByTag](ClientTools.md#getallbytag)
- [getByTag](ClientTools.md#getbytag)
- [getFunc](ClientTools.md#getfunc-1)
- [getFuncWithPos](ClientTools.md#getfuncwithpos-1)
- [getOwnPropertyDescriptor](ClientTools.md#getownpropertydescriptor)
- [getOwnPropertyDescriptors](ClientTools.md#getownpropertydescriptors)
- [getOwnPropertyNames](ClientTools.md#getownpropertynames)
- [getOwnPropertySymbols](ClientTools.md#getownpropertysymbols)
- [getProperties](ClientTools.md#getproperties-1)
- [getPrototypeOf](ClientTools.md#getprototypeof)
- [hasOwn](ClientTools.md#hasown)
- [is](ClientTools.md#is)
- [isExtensible](ClientTools.md#isextensible)
- [isFrozen](ClientTools.md#isfrozen)
- [isSealed](ClientTools.md#issealed)
- [keys](ClientTools.md#keys)
- [list](ClientTools.md#list)
- [loadFrom](ClientTools.md#loadfrom)
- [loadFromSync](ClientTools.md#loadfromsync)
- [preventExtensions](ClientTools.md#preventextensions)
- [register](ClientTools.md#register-1)
- [run](ClientTools.md#run-1)
- [runSync](ClientTools.md#runsync-1)
- [runWithPos](ClientTools.md#runwithpos-1)
- [runWithPosSync](ClientTools.md#runwithpossync-1)
- [seal](ClientTools.md#seal)
- [setApiRoot](ClientTools.md#setapiroot)
- [setPrototypeOf](ClientTools.md#setprototypeof)
- [unregister](ClientTools.md#unregister-1)
- [values](ClientTools.md#values)

## Constructors

### constructor

• **new ClientTools**(`name`, `options?`): [`ClientTools`](ClientTools.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| [`FuncItem`](../interfaces/FuncItem.md) |
| `options` | `any` |

#### Returns

[`ClientTools`](ClientTools.md)

#### Inherited from

[ToolFunc](ToolFunc.md).[constructor](ToolFunc.md#constructor)

#### Defined in

[packages/ai-tool/src/tool-func.ts:175](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L175)

## Properties

### $attributes

• **$attributes**: `Properties`

#### Inherited from

[ToolFunc](ToolFunc.md).[$attributes](ToolFunc.md#$attributes)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:5

___

### action

• `Optional` **action**: ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"list"`` \| ``"res"``

#### Inherited from

[ClientFuncItem](../interfaces/ClientFuncItem.md).[action](../interfaces/ClientFuncItem.md#action)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:36](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/utils/consts.ts#L36)

___

### apiRoot

• **apiRoot**: `undefined` \| `string`

#### Inherited from

[ClientFuncItem](../interfaces/ClientFuncItem.md).[apiRoot](../interfaces/ClientFuncItem.md#apiroot)

#### Defined in

[packages/ai-tool/src/client-tools.ts:16](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/client-tools.ts#L16)

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

#### Inherited from

[ToolFunc](ToolFunc.md).[defaultOptions](ToolFunc.md#defaultoptions)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:74

___

### fetchOptions

• `Optional` **fetchOptions**: `any`

#### Inherited from

[ClientFuncItem](../interfaces/ClientFuncItem.md).[fetchOptions](../interfaces/ClientFuncItem.md#fetchoptions)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:37](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/utils/consts.ts#L37)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ToolFunc](ToolFunc.md).[name](ToolFunc.md#name)

#### Defined in

[packages/ai-tool/src/tool-func.ts:21](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L21)

___

### nonExported1stChar

• **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Inherited from

[ToolFunc](ToolFunc.md).[nonExported1stChar](ToolFunc.md#nonexported1stchar)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:78

___

### params

• `Optional` **params**: [`FuncParams`](../interfaces/FuncParams.md) \| [`FuncParam`](../interfaces/FuncParam.md)[]

#### Inherited from

[ToolFunc](ToolFunc.md).[params](ToolFunc.md#params)

#### Defined in

[packages/ai-tool/src/tool-func.ts:22](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L22)

___

### result

• `Optional` **result**: `string`

#### Inherited from

[ToolFunc](ToolFunc.md).[result](ToolFunc.md#result)

#### Defined in

[packages/ai-tool/src/tool-func.ts:23](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L23)

___

### scope

• `Optional` **scope**: `any`

#### Inherited from

[ToolFunc](ToolFunc.md).[scope](ToolFunc.md#scope)

#### Defined in

[packages/ai-tool/src/tool-func.ts:24](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L24)

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

[ToolFunc](ToolFunc.md).[setup](ToolFunc.md#setup)

#### Defined in

[packages/ai-tool/src/tool-func.ts:26](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L26)

___

### should

• **should**: `Assertion`

#### Inherited from

[ToolFunc](ToolFunc.md).[should](ToolFunc.md#should)

#### Defined in

node_modules/.pnpm/@types+chai@4.3.16/node_modules/@types/chai/index.d.ts:2100

___

### stream

• `Optional` **stream**: `boolean`

#### Inherited from

[ClientFuncItem](../interfaces/ClientFuncItem.md).[stream](../interfaces/ClientFuncItem.md#stream)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:38](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/utils/consts.ts#L38)

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Inherited from

[ToolFunc](ToolFunc.md).[tags](ToolFunc.md#tags)

#### Defined in

[packages/ai-tool/src/tool-func.ts:25](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L25)

___

### \_apiRoot

▪ `Static` `Private` `Optional` **\_apiRoot**: `string`

#### Defined in

[packages/ai-tool/src/client-tools.ts:18](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/client-tools.ts#L18)

___

### dataPath

▪ `Static` **dataPath**: `string`

#### Inherited from

[ToolFunc](ToolFunc.md).[dataPath](ToolFunc.md#datapath)

#### Defined in

[packages/ai-tool/src/tool-func.ts:47](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L47)

___

### items

▪ `Static` **items**: [`Funcs`](../interfaces/Funcs.md) = `{}`

#### Inherited from

[ToolFunc](ToolFunc.md).[items](ToolFunc.md#items)

#### Defined in

[packages/ai-tool/src/tool-func.ts:46](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L46)

## Accessors

### apiRoot

• `get` **apiRoot**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

ClientFuncItem.apiRoot

#### Defined in

[packages/ai-tool/src/client-tools.ts:19](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/client-tools.ts#L19)

## Methods

### arr2ObjParams

▸ **arr2ObjParams**(`params`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any`[] |

#### Returns

`any`[]

#### Inherited from

[ToolFunc](ToolFunc.md).[arr2ObjParams](ToolFunc.md#arr2objparams)

#### Defined in

[packages/ai-tool/src/tool-func.ts:219](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L219)

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

[ToolFunc](ToolFunc.md).[assign](ToolFunc.md#assign)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:106

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

[ToolFunc](ToolFunc.md).[assignProperty](ToolFunc.md#assignproperty)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:117

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

[ToolFunc](ToolFunc.md).[assignPropertyTo](ToolFunc.md#assignpropertyto)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:131

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

[ToolFunc](ToolFunc.md).[assignTo](ToolFunc.md#assignto)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:191

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

[ToolFunc](ToolFunc.md).[clone](ToolFunc.md#clone)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:155

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

[ToolFunc](ToolFunc.md).[cloneTo](ToolFunc.md#cloneto)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:148

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

[ToolFunc](ToolFunc.md).[defineProperties](ToolFunc.md#defineproperties)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:89

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

[packages/ai-tool/src/client-tools.ts:112](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/client-tools.ts#L112)

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

[ToolFunc](ToolFunc.md).[exportTo](ToolFunc.md#exportto)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:173

___

### fetch

▸ **fetch**(`objParam?`, `act?`, `subName?`): `Promise`\<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `objParam?` | `any` |
| `act?` | ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"list"`` \| ``"res"`` |
| `subName?` | `any` |

#### Returns

`Promise`\<`Response`\>

#### Defined in

[packages/ai-tool/src/client-tools.ts:74](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/client-tools.ts#L74)

___

### func

▸ **func**(`objParam`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `objParam` | `any` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[ToolFunc](ToolFunc.md).[func](ToolFunc.md#func)

#### Defined in

[packages/ai-tool/src/client-tools.ts:143](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/client-tools.ts#L143)

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

[ToolFunc](ToolFunc.md).[getFunc](ToolFunc.md#getfunc)

#### Defined in

[packages/ai-tool/src/tool-func.ts:273](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L273)

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

[ToolFunc](ToolFunc.md).[getFuncWithPos](ToolFunc.md#getfuncwithpos)

#### Defined in

[packages/ai-tool/src/tool-func.ts:299](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L299)

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

**`Abstract`**

#### Inherited from

[ToolFunc](ToolFunc.md).[getProperties](ToolFunc.md#getproperties)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:98

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

[packages/ai-tool/src/client-tools.ts:63](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/client-tools.ts#L63)

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

[ToolFunc](ToolFunc.md).[hasOwnProperty](ToolFunc.md#hasownproperty)

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

#### Inherited from

[ToolFunc](ToolFunc.md).[initialize](ToolFunc.md#initialize)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:139

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

[ToolFunc](ToolFunc.md).[isPrototypeOf](ToolFunc.md#isprototypeof)

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

[ToolFunc](ToolFunc.md).[isSame](ToolFunc.md#issame)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:200

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

[ToolFunc](ToolFunc.md).[mergeTo](ToolFunc.md#mergeto)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:164

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

[ToolFunc](ToolFunc.md).[obj2ArrParams](ToolFunc.md#obj2arrparams)

#### Defined in

[packages/ai-tool/src/tool-func.ts:232](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L232)

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

[ToolFunc](ToolFunc.md).[propertyIsEnumerable](ToolFunc.md#propertyisenumerable)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:152

___

### register

▸ **register**(): `boolean` \| [`ToolFunc`](ToolFunc.md)

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[ToolFunc](ToolFunc.md).[register](ToolFunc.md#register)

#### Defined in

[packages/ai-tool/src/tool-func.ts:202](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L202)

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

[ToolFunc](ToolFunc.md).[run](ToolFunc.md#run)

#### Defined in

[packages/ai-tool/src/tool-func.ts:259](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L259)

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

[ToolFunc](ToolFunc.md).[runAs](ToolFunc.md#runas)

#### Defined in

[packages/ai-tool/src/tool-func.ts:263](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L263)

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

[ToolFunc](ToolFunc.md).[runAsSync](ToolFunc.md#runassync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:268](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L268)

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

[ToolFunc](ToolFunc.md).[runSync](ToolFunc.md#runsync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:245](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L245)

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

[ToolFunc](ToolFunc.md).[runWithPos](ToolFunc.md#runwithpos)

#### Defined in

[packages/ai-tool/src/tool-func.ts:289](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L289)

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

[ToolFunc](ToolFunc.md).[runWithPosAs](ToolFunc.md#runwithposas)

#### Defined in

[packages/ai-tool/src/tool-func.ts:294](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L294)

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

[ToolFunc](ToolFunc.md).[runWithPosAsSync](ToolFunc.md#runwithposassync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:285](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L285)

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

[ToolFunc](ToolFunc.md).[runWithPosSync](ToolFunc.md#runwithpossync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:278](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L278)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[ToolFunc](ToolFunc.md).[toJSON](ToolFunc.md#tojson)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:182

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

[ToolFunc](ToolFunc.md).[toLocaleString](ToolFunc.md#tolocalestring)

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

[ToolFunc](ToolFunc.md).[toObject](ToolFunc.md#toobject)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:181

___

### toString

▸ **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

[ToolFunc](ToolFunc.md).[toString](ToolFunc.md#tostring)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:128

___

### unregister

▸ **unregister**(): `any`

#### Returns

`any`

#### Inherited from

[ToolFunc](ToolFunc.md).[unregister](ToolFunc.md#unregister)

#### Defined in

[packages/ai-tool/src/tool-func.ts:215](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L215)

___

### valueOf

▸ **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

[ToolFunc](ToolFunc.md).[valueOf](ToolFunc.md#valueof)

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

#### Inherited from

[ToolFunc](ToolFunc.md).[assign](ToolFunc.md#assign-1)

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

[ToolFunc](ToolFunc.md).[assign](ToolFunc.md#assign-1)

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

[ToolFunc](ToolFunc.md).[assign](ToolFunc.md#assign-1)

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

[ToolFunc](ToolFunc.md).[assign](ToolFunc.md#assign-1)

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

[ToolFunc](ToolFunc.md).[create](ToolFunc.md#create)

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

[ToolFunc](ToolFunc.md).[create](ToolFunc.md#create)

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

[ToolFunc](ToolFunc.md).[defineProperties](ToolFunc.md#defineproperties-1)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:11

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

[ToolFunc](ToolFunc.md).[defineProperty](ToolFunc.md#defineproperty)

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

[ToolFunc](ToolFunc.md).[entries](ToolFunc.md#entries)

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

[ToolFunc](ToolFunc.md).[entries](ToolFunc.md#entries)

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

[packages/ai-tool/src/client-tools.ts:56](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/client-tools.ts#L56)

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

[ToolFunc](ToolFunc.md).[freeze](ToolFunc.md#freeze)

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

[ToolFunc](ToolFunc.md).[freeze](ToolFunc.md#freeze)

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

[ToolFunc](ToolFunc.md).[freeze](ToolFunc.md#freeze)

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

[ToolFunc](ToolFunc.md).[fromEntries](ToolFunc.md#fromentries)

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

[ToolFunc](ToolFunc.md).[fromEntries](ToolFunc.md#fromentries)

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

[ToolFunc](ToolFunc.md).[get](ToolFunc.md#get)

#### Defined in

[packages/ai-tool/src/tool-func.ts:49](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L49)

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

[ToolFunc](ToolFunc.md).[getAllByTag](ToolFunc.md#getallbytag)

#### Defined in

[packages/ai-tool/src/tool-func.ts:77](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L77)

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

[ToolFunc](ToolFunc.md).[getByTag](ToolFunc.md#getbytag)

#### Defined in

[packages/ai-tool/src/tool-func.ts:57](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L57)

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

[ToolFunc](ToolFunc.md).[getFunc](ToolFunc.md#getfunc-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:111](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L111)

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

[ToolFunc](ToolFunc.md).[getFuncWithPos](ToolFunc.md#getfuncwithpos-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:132](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L132)

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

[ToolFunc](ToolFunc.md).[getOwnPropertyDescriptor](ToolFunc.md#getownpropertydescriptor)

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

[ToolFunc](ToolFunc.md).[getOwnPropertyDescriptors](ToolFunc.md#getownpropertydescriptors)

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

[ToolFunc](ToolFunc.md).[getOwnPropertyNames](ToolFunc.md#getownpropertynames)

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

[ToolFunc](ToolFunc.md).[getOwnPropertySymbols](ToolFunc.md#getownpropertysymbols)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:317

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

[ToolFunc](ToolFunc.md).[getProperties](ToolFunc.md#getproperties-1)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:10

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

[ToolFunc](ToolFunc.md).[getPrototypeOf](ToolFunc.md#getprototypeof)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:167

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

[ToolFunc](ToolFunc.md).[hasOwn](ToolFunc.md#hasown)

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

[ToolFunc](ToolFunc.md).[is](ToolFunc.md#is)

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

[ToolFunc](ToolFunc.md).[isExtensible](ToolFunc.md#isextensible)

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

[ToolFunc](ToolFunc.md).[isFrozen](ToolFunc.md#isfrozen)

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

[ToolFunc](ToolFunc.md).[isSealed](ToolFunc.md#issealed)

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

[ToolFunc](ToolFunc.md).[keys](ToolFunc.md#keys)

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

[ToolFunc](ToolFunc.md).[keys](ToolFunc.md#keys)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:323

___

### list

▸ **list**(): [`Funcs`](../interfaces/Funcs.md)

#### Returns

[`Funcs`](../interfaces/Funcs.md)

#### Inherited from

[ToolFunc](ToolFunc.md).[list](ToolFunc.md#list)

#### Defined in

[packages/ai-tool/src/tool-func.ts:53](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L53)

___

### loadFrom

▸ **loadFrom**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ai-tool/src/client-tools.ts:29](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/client-tools.ts#L29)

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

[packages/ai-tool/src/client-tools.ts:41](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/client-tools.ts#L41)

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

[ToolFunc](ToolFunc.md).[preventExtensions](ToolFunc.md#preventextensions)

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

#### Inherited from

[ToolFunc](ToolFunc.md).[register](ToolFunc.md#register-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:137](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L137)

▸ **register**(`func`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |
| `options` | [`FuncItem`](../interfaces/FuncItem.md) |

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[ToolFunc](ToolFunc.md).[register](ToolFunc.md#register-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:138](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L138)

▸ **register**(`name`, `options?`): `boolean` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| [`ToolFunc`](ToolFunc.md) \| [`FuncItem`](../interfaces/FuncItem.md) |
| `options?` | [`FuncItem`](../interfaces/FuncItem.md) |

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[ToolFunc](ToolFunc.md).[register](ToolFunc.md#register-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:139](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L139)

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

[ToolFunc](ToolFunc.md).[run](ToolFunc.md#run-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:95](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L95)

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

[ToolFunc](ToolFunc.md).[runSync](ToolFunc.md#runsync-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:103](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L103)

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

[ToolFunc](ToolFunc.md).[runWithPos](ToolFunc.md#runwithpos-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:116](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L116)

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

[ToolFunc](ToolFunc.md).[runWithPosSync](ToolFunc.md#runwithpossync-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:124](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L124)

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

[ToolFunc](ToolFunc.md).[seal](ToolFunc.md#seal)

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

[packages/ai-tool/src/client-tools.ts:23](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/client-tools.ts#L23)

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

[ToolFunc](ToolFunc.md).[setPrototypeOf](ToolFunc.md#setprototypeof)

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

#### Inherited from

[ToolFunc](ToolFunc.md).[unregister](ToolFunc.md#unregister-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:167](https://github.com/isdk/ai-tool.js/blob/5ff3a34d9852a051d1821b3c3de867a8271c1404/src/tool-func.ts#L167)

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

[ToolFunc](ToolFunc.md).[values](ToolFunc.md#values)

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

[ToolFunc](ToolFunc.md).[values](ToolFunc.md#values)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:30
