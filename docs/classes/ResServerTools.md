[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / ResServerTools

# Class: ResServerTools

## Hierarchy

- [`ServerTools`](ServerTools.md)

  ↳ **`ResServerTools`**

  ↳↳ [`EventServer`](EventServer.md)

## Table of contents

### Constructors

- [constructor](ResServerTools.md#constructor)

### Properties

- [$attributes](ResServerTools.md#$attributes)
- [action](ResServerTools.md#action)
- [allowExportFunc](ResServerTools.md#allowexportfunc)
- [apiRoot](ResServerTools.md#apiroot)
- [constructor](ResServerTools.md#constructor-1)
- [defaultOptions](ResServerTools.md#defaultoptions)
- [fetchOptions](ResServerTools.md#fetchoptions)
- [methods](ResServerTools.md#methods)
- [name](ResServerTools.md#name)
- [nonExported1stChar](ResServerTools.md#nonexported1stchar)
- [params](ResServerTools.md#params)
- [result](ResServerTools.md#result)
- [scope](ResServerTools.md#scope)
- [setup](ResServerTools.md#setup)
- [should](ResServerTools.md#should)
- [stream](ResServerTools.md#stream)
- [tags](ResServerTools.md#tags)
- [dataPath](ResServerTools.md#datapath)
- [items](ResServerTools.md#items)

### Accessors

- [apiRoot](ResServerTools.md#apiroot-1)

### Methods

- [arr2ObjParams](ResServerTools.md#arr2objparams)
- [assign](ResServerTools.md#assign)
- [assignProperty](ResServerTools.md#assignproperty)
- [assignPropertyTo](ResServerTools.md#assignpropertyto)
- [assignTo](ResServerTools.md#assignto)
- [cast](ResServerTools.md#cast)
- [clone](ResServerTools.md#clone)
- [cloneTo](ResServerTools.md#cloneto)
- [defineProperties](ResServerTools.md#defineproperties)
- [delete](ResServerTools.md#delete)
- [exportTo](ResServerTools.md#exportto)
- [func](ResServerTools.md#func)
- [get](ResServerTools.md#get)
- [getFunc](ResServerTools.md#getfunc)
- [getFuncWithPos](ResServerTools.md#getfuncwithpos)
- [getMethodFromParams](ResServerTools.md#getmethodfromparams)
- [getProperties](ResServerTools.md#getproperties)
- [hasOwnProperty](ResServerTools.md#hasownproperty)
- [initialize](ResServerTools.md#initialize)
- [isPrototypeOf](ResServerTools.md#isprototypeof)
- [isSame](ResServerTools.md#issame)
- [isStream](ResServerTools.md#isstream)
- [list](ResServerTools.md#list)
- [mergeTo](ResServerTools.md#mergeto)
- [obj2ArrParams](ResServerTools.md#obj2arrparams)
- [post](ResServerTools.md#post)
- [propertyIsEnumerable](ResServerTools.md#propertyisenumerable)
- [put](ResServerTools.md#put)
- [register](ResServerTools.md#register)
- [run](ResServerTools.md#run)
- [runAs](ResServerTools.md#runas)
- [runAsSync](ResServerTools.md#runassync)
- [runSync](ResServerTools.md#runsync)
- [runWithPos](ResServerTools.md#runwithpos)
- [runWithPosAs](ResServerTools.md#runwithposas)
- [runWithPosAsSync](ResServerTools.md#runwithposassync)
- [runWithPosSync](ResServerTools.md#runwithpossync)
- [toJSON](ResServerTools.md#tojson)
- [toLocaleString](ResServerTools.md#tolocalestring)
- [toObject](ResServerTools.md#toobject)
- [toString](ResServerTools.md#tostring)
- [unregister](ResServerTools.md#unregister)
- [valueOf](ResServerTools.md#valueof)
- [assign](ResServerTools.md#assign-1)
- [create](ResServerTools.md#create)
- [defineProperties](ResServerTools.md#defineproperties-1)
- [defineProperty](ResServerTools.md#defineproperty)
- [entries](ResServerTools.md#entries)
- [freeze](ResServerTools.md#freeze)
- [fromEntries](ResServerTools.md#fromentries)
- [get](ResServerTools.md#get-1)
- [getAllByTag](ResServerTools.md#getallbytag)
- [getByTag](ResServerTools.md#getbytag)
- [getFunc](ResServerTools.md#getfunc-1)
- [getFuncWithPos](ResServerTools.md#getfuncwithpos-1)
- [getOwnPropertyDescriptor](ResServerTools.md#getownpropertydescriptor)
- [getOwnPropertyDescriptors](ResServerTools.md#getownpropertydescriptors)
- [getOwnPropertyNames](ResServerTools.md#getownpropertynames)
- [getOwnPropertySymbols](ResServerTools.md#getownpropertysymbols)
- [getProperties](ResServerTools.md#getproperties-1)
- [getPrototypeOf](ResServerTools.md#getprototypeof)
- [hasOwn](ResServerTools.md#hasown)
- [is](ResServerTools.md#is)
- [isExtensible](ResServerTools.md#isextensible)
- [isFrozen](ResServerTools.md#isfrozen)
- [isSealed](ResServerTools.md#issealed)
- [keys](ResServerTools.md#keys)
- [list](ResServerTools.md#list-1)
- [preventExtensions](ResServerTools.md#preventextensions)
- [register](ResServerTools.md#register-1)
- [run](ResServerTools.md#run-1)
- [runSync](ResServerTools.md#runsync-1)
- [runWithPos](ResServerTools.md#runwithpos-1)
- [runWithPosSync](ResServerTools.md#runwithpossync-1)
- [seal](ResServerTools.md#seal)
- [setApiRoot](ResServerTools.md#setapiroot)
- [setPrototypeOf](ResServerTools.md#setprototypeof)
- [toJSON](ResServerTools.md#tojson-1)
- [unregister](ResServerTools.md#unregister-1)
- [values](ResServerTools.md#values)

## Constructors

### constructor

• **new ResServerTools**(`name`, `options?`): [`ResServerTools`](ResServerTools.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| [`FuncItem`](../interfaces/FuncItem.md) |
| `options` | `any` |

#### Returns

[`ResServerTools`](ResServerTools.md)

#### Inherited from

[ServerTools](ServerTools.md).[constructor](ServerTools.md#constructor)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:30](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/res-server-tools.ts#L30)

## Properties

### $attributes

• **$attributes**: `Properties`

#### Inherited from

[ServerTools](ServerTools.md).[$attributes](ServerTools.md#$attributes)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:5

___

### action

• **action**: ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"list"`` \| ``"res"`` = `'res'`

#### Inherited from

[ServerTools](ServerTools.md).[action](ServerTools.md#action)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:24](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/res-server-tools.ts#L24)

___

### allowExportFunc

• `Optional` **allowExportFunc**: `boolean`

#### Inherited from

[ServerTools](ServerTools.md).[allowExportFunc](ServerTools.md#allowexportfunc)

#### Defined in

[packages/ai-tool/src/server-tools.ts:14](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/server-tools.ts#L14)

___

### apiRoot

• `Optional` **apiRoot**: `string`

#### Inherited from

[ServerTools](ServerTools.md).[apiRoot](ServerTools.md#apiroot)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:35](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/consts.ts#L35)

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

[ServerTools](ServerTools.md).[defaultOptions](ServerTools.md#defaultoptions)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:74

___

### fetchOptions

• `Optional` **fetchOptions**: `any`

#### Inherited from

[ServerTools](ServerTools.md).[fetchOptions](ServerTools.md#fetchoptions)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:37](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/consts.ts#L37)

___

### methods

• **methods**: `string`[]

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:15](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/res-server-tools.ts#L15)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ServerTools](ServerTools.md).[name](ServerTools.md#name)

#### Defined in

[packages/ai-tool/src/tool-func.ts:21](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L21)

___

### nonExported1stChar

• **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Inherited from

[ServerTools](ServerTools.md).[nonExported1stChar](ServerTools.md#nonexported1stchar)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:78

___

### params

• **params**: [`FuncParams`](../interfaces/FuncParams.md)

#### Inherited from

[ServerTools](ServerTools.md).[params](ServerTools.md#params)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:25](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/res-server-tools.ts#L25)

___

### result

• `Optional` **result**: `string`

#### Inherited from

[ServerTools](ServerTools.md).[result](ServerTools.md#result)

#### Defined in

[packages/ai-tool/src/tool-func.ts:23](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L23)

___

### scope

• `Optional` **scope**: `any`

#### Inherited from

[ServerTools](ServerTools.md).[scope](ServerTools.md#scope)

#### Defined in

[packages/ai-tool/src/tool-func.ts:24](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L24)

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

[ServerTools](ServerTools.md).[setup](ServerTools.md#setup)

#### Defined in

[packages/ai-tool/src/tool-func.ts:26](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L26)

___

### should

• **should**: `Assertion`

#### Inherited from

[ServerTools](ServerTools.md).[should](ServerTools.md#should)

#### Defined in

node_modules/.pnpm/@types+chai@4.3.16/node_modules/@types/chai/index.d.ts:2100

___

### stream

• `Optional` **stream**: `boolean`

#### Inherited from

[ServerTools](ServerTools.md).[stream](ServerTools.md#stream)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:38](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/utils/consts.ts#L38)

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Inherited from

[ServerTools](ServerTools.md).[tags](ServerTools.md#tags)

#### Defined in

[packages/ai-tool/src/tool-func.ts:25](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L25)

___

### dataPath

▪ `Static` **dataPath**: `string`

#### Inherited from

[ServerTools](ServerTools.md).[dataPath](ServerTools.md#datapath)

#### Defined in

[packages/ai-tool/src/tool-func.ts:47](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L47)

___

### items

▪ `Static` **items**: [`Funcs`](../interfaces/Funcs.md) = `{}`

#### Inherited from

[ServerTools](ServerTools.md).[items](ServerTools.md#items)

#### Defined in

[packages/ai-tool/src/tool-func.ts:46](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L46)

## Accessors

### apiRoot

• `get` **apiRoot**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/ai-tool/src/server-tools.ts:26](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/server-tools.ts#L26)

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

[ServerTools](ServerTools.md).[arr2ObjParams](ServerTools.md#arr2objparams)

#### Defined in

[packages/ai-tool/src/tool-func.ts:219](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L219)

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

[ServerTools](ServerTools.md).[assign](ServerTools.md#assign)

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

[ServerTools](ServerTools.md).[assignProperty](ServerTools.md#assignproperty)

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

[ServerTools](ServerTools.md).[assignPropertyTo](ServerTools.md#assignpropertyto)

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

[ServerTools](ServerTools.md).[assignTo](ServerTools.md#assignto)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:191

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

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:45](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/res-server-tools.ts#L45)

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

[ServerTools](ServerTools.md).[clone](ServerTools.md#clone)

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

[ServerTools](ServerTools.md).[cloneTo](ServerTools.md#cloneto)

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

[ServerTools](ServerTools.md).[defineProperties](ServerTools.md#defineproperties)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:89

___

### delete

▸ **delete**(`«destructured»`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ResServerFuncParams`](../interfaces/ResServerFuncParams.md) |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:19](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/res-server-tools.ts#L19)

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

[ServerTools](ServerTools.md).[exportTo](ServerTools.md#exportto)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:173

___

### func

▸ **func**(`params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ResServerFuncParams`](../interfaces/ResServerFuncParams.md) |

#### Returns

`any`

#### Inherited from

[ServerTools](ServerTools.md).[func](ServerTools.md#func)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:65](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/res-server-tools.ts#L65)

___

### get

▸ **get**(`«destructured»`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ResServerFuncParams`](../interfaces/ResServerFuncParams.md) |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:16](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/res-server-tools.ts#L16)

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

[ServerTools](ServerTools.md).[getFunc](ServerTools.md#getfunc)

#### Defined in

[packages/ai-tool/src/tool-func.ts:273](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L273)

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

[ServerTools](ServerTools.md).[getFuncWithPos](ServerTools.md#getfuncwithpos)

#### Defined in

[packages/ai-tool/src/tool-func.ts:299](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L299)

___

### getMethodFromParams

▸ **getMethodFromParams**(`params`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ResServerFuncParams`](../interfaces/ResServerFuncParams.md) |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:56](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/res-server-tools.ts#L56)

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

**`Abstract`**

#### Inherited from

[ServerTools](ServerTools.md).[getProperties](ServerTools.md#getproperties)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:98

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

[ServerTools](ServerTools.md).[hasOwnProperty](ServerTools.md#hasownproperty)

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

[ServerTools](ServerTools.md).[initialize](ServerTools.md#initialize)

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

[ServerTools](ServerTools.md).[isPrototypeOf](ServerTools.md#isprototypeof)

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

[ServerTools](ServerTools.md).[isSame](ServerTools.md#issame)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:200

___

### isStream

▸ **isStream**(`params`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ServerFuncParams`](../interfaces/ServerFuncParams.md) |

#### Returns

`undefined` \| `boolean`

#### Inherited from

[ServerTools](ServerTools.md).[isStream](ServerTools.md#isstream)

#### Defined in

[packages/ai-tool/src/server-tools.ts:59](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/server-tools.ts#L59)

___

### list

▸ **list**(`options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ResServerFuncParams`](../interfaces/ResServerFuncParams.md) |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:20](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/res-server-tools.ts#L20)

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

[ServerTools](ServerTools.md).[mergeTo](ServerTools.md#mergeto)

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

[ServerTools](ServerTools.md).[obj2ArrParams](ServerTools.md#obj2arrparams)

#### Defined in

[packages/ai-tool/src/tool-func.ts:232](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L232)

___

### post

▸ **post**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ResServerFuncParams`](../interfaces/ResServerFuncParams.md) |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:17](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/res-server-tools.ts#L17)

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

[ServerTools](ServerTools.md).[propertyIsEnumerable](ServerTools.md#propertyisenumerable)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:152

___

### put

▸ **put**(`«destructured»`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ResServerFuncParams`](../interfaces/ResServerFuncParams.md) |

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:18](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/res-server-tools.ts#L18)

___

### register

▸ **register**(): `boolean` \| [`ToolFunc`](ToolFunc.md)

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[ServerTools](ServerTools.md).[register](ServerTools.md#register)

#### Defined in

[packages/ai-tool/src/tool-func.ts:202](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L202)

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

[ServerTools](ServerTools.md).[run](ServerTools.md#run)

#### Defined in

[packages/ai-tool/src/tool-func.ts:259](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L259)

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

[ServerTools](ServerTools.md).[runAs](ServerTools.md#runas)

#### Defined in

[packages/ai-tool/src/tool-func.ts:263](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L263)

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

[ServerTools](ServerTools.md).[runAsSync](ServerTools.md#runassync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:268](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L268)

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

[ServerTools](ServerTools.md).[runSync](ServerTools.md#runsync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:245](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L245)

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

[ServerTools](ServerTools.md).[runWithPos](ServerTools.md#runwithpos)

#### Defined in

[packages/ai-tool/src/tool-func.ts:289](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L289)

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

[ServerTools](ServerTools.md).[runWithPosAs](ServerTools.md#runwithposas)

#### Defined in

[packages/ai-tool/src/tool-func.ts:294](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L294)

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

[ServerTools](ServerTools.md).[runWithPosAsSync](ServerTools.md#runwithposassync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:285](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L285)

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

[ServerTools](ServerTools.md).[runWithPosSync](ServerTools.md#runwithpossync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:278](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L278)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[ServerTools](ServerTools.md).[toJSON](ServerTools.md#tojson)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:182

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

[ServerTools](ServerTools.md).[toLocaleString](ServerTools.md#tolocalestring)

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

[ServerTools](ServerTools.md).[toObject](ServerTools.md#toobject)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:181

___

### toString

▸ **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

[ServerTools](ServerTools.md).[toString](ServerTools.md#tostring)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:128

___

### unregister

▸ **unregister**(): `any`

#### Returns

`any`

#### Inherited from

[ServerTools](ServerTools.md).[unregister](ServerTools.md#unregister)

#### Defined in

[packages/ai-tool/src/tool-func.ts:215](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L215)

___

### valueOf

▸ **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

[ServerTools](ServerTools.md).[valueOf](ServerTools.md#valueof)

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

[ServerTools](ServerTools.md).[assign](ServerTools.md#assign-1)

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

[ServerTools](ServerTools.md).[assign](ServerTools.md#assign-1)

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

[ServerTools](ServerTools.md).[assign](ServerTools.md#assign-1)

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

[ServerTools](ServerTools.md).[assign](ServerTools.md#assign-1)

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

[ServerTools](ServerTools.md).[create](ServerTools.md#create)

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

[ServerTools](ServerTools.md).[create](ServerTools.md#create)

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

[ServerTools](ServerTools.md).[defineProperties](ServerTools.md#defineproperties-1)

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

[ServerTools](ServerTools.md).[defineProperty](ServerTools.md#defineproperty)

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

[ServerTools](ServerTools.md).[entries](ServerTools.md#entries)

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

[ServerTools](ServerTools.md).[entries](ServerTools.md#entries)

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

[ServerTools](ServerTools.md).[freeze](ServerTools.md#freeze)

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

[ServerTools](ServerTools.md).[freeze](ServerTools.md#freeze)

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

[ServerTools](ServerTools.md).[freeze](ServerTools.md#freeze)

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

[ServerTools](ServerTools.md).[fromEntries](ServerTools.md#fromentries)

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

[ServerTools](ServerTools.md).[fromEntries](ServerTools.md#fromentries)

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

[ServerTools](ServerTools.md).[get](ServerTools.md#get)

#### Defined in

[packages/ai-tool/src/tool-func.ts:49](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L49)

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

[ServerTools](ServerTools.md).[getAllByTag](ServerTools.md#getallbytag)

#### Defined in

[packages/ai-tool/src/tool-func.ts:77](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L77)

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

[ServerTools](ServerTools.md).[getByTag](ServerTools.md#getbytag)

#### Defined in

[packages/ai-tool/src/tool-func.ts:57](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L57)

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

[ServerTools](ServerTools.md).[getFunc](ServerTools.md#getfunc-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:111](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L111)

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

[ServerTools](ServerTools.md).[getFuncWithPos](ServerTools.md#getfuncwithpos-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:132](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L132)

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

[ServerTools](ServerTools.md).[getOwnPropertyDescriptor](ServerTools.md#getownpropertydescriptor)

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

[ServerTools](ServerTools.md).[getOwnPropertyDescriptors](ServerTools.md#getownpropertydescriptors)

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

[ServerTools](ServerTools.md).[getOwnPropertyNames](ServerTools.md#getownpropertynames)

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

[ServerTools](ServerTools.md).[getOwnPropertySymbols](ServerTools.md#getownpropertysymbols)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:317

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

[ServerTools](ServerTools.md).[getProperties](ServerTools.md#getproperties-1)

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

[ServerTools](ServerTools.md).[getPrototypeOf](ServerTools.md#getprototypeof)

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

[ServerTools](ServerTools.md).[hasOwn](ServerTools.md#hasown)

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

[ServerTools](ServerTools.md).[is](ServerTools.md#is)

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

[ServerTools](ServerTools.md).[isExtensible](ServerTools.md#isextensible)

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

[ServerTools](ServerTools.md).[isFrozen](ServerTools.md#isfrozen)

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

[ServerTools](ServerTools.md).[isSealed](ServerTools.md#issealed)

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

[ServerTools](ServerTools.md).[keys](ServerTools.md#keys)

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

[ServerTools](ServerTools.md).[keys](ServerTools.md#keys)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:323

___

### list

▸ **list**(): [`Funcs`](../interfaces/Funcs.md)

#### Returns

[`Funcs`](../interfaces/Funcs.md)

#### Inherited from

[ServerTools](ServerTools.md).[list](ServerTools.md#list)

#### Defined in

[packages/ai-tool/src/tool-func.ts:53](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L53)

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

[ServerTools](ServerTools.md).[preventExtensions](ServerTools.md#preventextensions)

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

[ServerTools](ServerTools.md).[register](ServerTools.md#register-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:137](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L137)

▸ **register**(`func`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |
| `options` | [`FuncItem`](../interfaces/FuncItem.md) |

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[ServerTools](ServerTools.md).[register](ServerTools.md#register-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:138](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L138)

▸ **register**(`name`, `options?`): `boolean` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| [`ToolFunc`](ToolFunc.md) \| [`FuncItem`](../interfaces/FuncItem.md) |
| `options?` | [`FuncItem`](../interfaces/FuncItem.md) |

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[ServerTools](ServerTools.md).[register](ServerTools.md#register-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:139](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L139)

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

[ServerTools](ServerTools.md).[run](ServerTools.md#run-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:95](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L95)

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

[ServerTools](ServerTools.md).[runSync](ServerTools.md#runsync-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:103](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L103)

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

[ServerTools](ServerTools.md).[runWithPos](ServerTools.md#runwithpos-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:116](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L116)

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

[ServerTools](ServerTools.md).[runWithPosSync](ServerTools.md#runwithpossync-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:124](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L124)

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

[ServerTools](ServerTools.md).[seal](ServerTools.md#seal)

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

[ServerTools](ServerTools.md).[setApiRoot](ServerTools.md#setapiroot)

#### Defined in

[packages/ai-tool/src/server-tools.ts:30](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/server-tools.ts#L30)

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

[ServerTools](ServerTools.md).[setPrototypeOf](ServerTools.md#setprototypeof)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:337

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

#### Inherited from

[ServerTools](ServerTools.md).[toJSON](ServerTools.md#tojson-1)

#### Defined in

[packages/ai-tool/src/server-tools.ts:44](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/server-tools.ts#L44)

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

[ServerTools](ServerTools.md).[unregister](ServerTools.md#unregister-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:167](https://github.com/isdk/ai-tool.js/blob/f6e1fb7a94cb6e37d6b6a73878d1bd61b26150ea/src/tool-func.ts#L167)

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

[ServerTools](ServerTools.md).[values](ServerTools.md#values)

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

[ServerTools](ServerTools.md).[values](ServerTools.md#values)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:30
