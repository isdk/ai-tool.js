[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / EventToolFunc

# Class: EventToolFunc

## Hierarchy

- [`ToolFunc`](ToolFunc.md)

  ↳ **`EventToolFunc`**

## Table of contents

### Constructors

- [constructor](EventToolFunc.md#constructor)

### Properties

- [$attributes](EventToolFunc.md#$attributes)
- [\_emitter](EventToolFunc.md#_emitter)
- [constructor](EventToolFunc.md#constructor-1)
- [defaultOptions](EventToolFunc.md#defaultoptions)
- [description](EventToolFunc.md#description)
- [name](EventToolFunc.md#name)
- [nonExported1stChar](EventToolFunc.md#nonexported1stchar)
- [params](EventToolFunc.md#params)
- [result](EventToolFunc.md#result)
- [scope](EventToolFunc.md#scope)
- [setup](EventToolFunc.md#setup)
- [should](EventToolFunc.md#should)
- [tags](EventToolFunc.md#tags)
- [dataPath](EventToolFunc.md#datapath)
- [items](EventToolFunc.md#items)

### Accessors

- [emitter](EventToolFunc.md#emitter)

### Methods

- [arr2ObjParams](EventToolFunc.md#arr2objparams)
- [assign](EventToolFunc.md#assign)
- [assignProperty](EventToolFunc.md#assignproperty)
- [assignPropertyTo](EventToolFunc.md#assignpropertyto)
- [assignTo](EventToolFunc.md#assignto)
- [clone](EventToolFunc.md#clone)
- [cloneTo](EventToolFunc.md#cloneto)
- [defineProperties](EventToolFunc.md#defineproperties)
- [exportTo](EventToolFunc.md#exportto)
- [func](EventToolFunc.md#func)
- [getFunc](EventToolFunc.md#getfunc)
- [getFuncWithPos](EventToolFunc.md#getfuncwithpos)
- [getProperties](EventToolFunc.md#getproperties)
- [hasOwnProperty](EventToolFunc.md#hasownproperty)
- [initialize](EventToolFunc.md#initialize)
- [isPrototypeOf](EventToolFunc.md#isprototypeof)
- [isSame](EventToolFunc.md#issame)
- [mergeTo](EventToolFunc.md#mergeto)
- [obj2ArrParams](EventToolFunc.md#obj2arrparams)
- [propertyIsEnumerable](EventToolFunc.md#propertyisenumerable)
- [register](EventToolFunc.md#register)
- [run](EventToolFunc.md#run)
- [runAs](EventToolFunc.md#runas)
- [runAsSync](EventToolFunc.md#runassync)
- [runSync](EventToolFunc.md#runsync)
- [runWithPos](EventToolFunc.md#runwithpos)
- [runWithPosAs](EventToolFunc.md#runwithposas)
- [runWithPosAsSync](EventToolFunc.md#runwithposassync)
- [runWithPosSync](EventToolFunc.md#runwithpossync)
- [toJSON](EventToolFunc.md#tojson)
- [toLocaleString](EventToolFunc.md#tolocalestring)
- [toObject](EventToolFunc.md#toobject)
- [toString](EventToolFunc.md#tostring)
- [unregister](EventToolFunc.md#unregister)
- [valueOf](EventToolFunc.md#valueof)
- [assign](EventToolFunc.md#assign-1)
- [create](EventToolFunc.md#create)
- [defineProperties](EventToolFunc.md#defineproperties-1)
- [defineProperty](EventToolFunc.md#defineproperty)
- [entries](EventToolFunc.md#entries)
- [freeze](EventToolFunc.md#freeze)
- [fromEntries](EventToolFunc.md#fromentries)
- [get](EventToolFunc.md#get)
- [getAllByTag](EventToolFunc.md#getallbytag)
- [getByTag](EventToolFunc.md#getbytag)
- [getFunc](EventToolFunc.md#getfunc-1)
- [getFuncWithPos](EventToolFunc.md#getfuncwithpos-1)
- [getOwnPropertyDescriptor](EventToolFunc.md#getownpropertydescriptor)
- [getOwnPropertyDescriptors](EventToolFunc.md#getownpropertydescriptors)
- [getOwnPropertyNames](EventToolFunc.md#getownpropertynames)
- [getOwnPropertySymbols](EventToolFunc.md#getownpropertysymbols)
- [getProperties](EventToolFunc.md#getproperties-1)
- [getPrototypeOf](EventToolFunc.md#getprototypeof)
- [hasOwn](EventToolFunc.md#hasown)
- [is](EventToolFunc.md#is)
- [isExtensible](EventToolFunc.md#isextensible)
- [isFrozen](EventToolFunc.md#isfrozen)
- [isSealed](EventToolFunc.md#issealed)
- [keys](EventToolFunc.md#keys)
- [list](EventToolFunc.md#list)
- [preventExtensions](EventToolFunc.md#preventextensions)
- [register](EventToolFunc.md#register-1)
- [run](EventToolFunc.md#run-1)
- [runSync](EventToolFunc.md#runsync-1)
- [runWithPos](EventToolFunc.md#runwithpos-1)
- [runWithPosSync](EventToolFunc.md#runwithpossync-1)
- [seal](EventToolFunc.md#seal)
- [setPrototypeOf](EventToolFunc.md#setprototypeof)
- [unregister](EventToolFunc.md#unregister-1)
- [values](EventToolFunc.md#values)

## Constructors

### constructor

• **new EventToolFunc**(`name`, `options?`): [`EventToolFunc`](EventToolFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| [`FuncItem`](../interfaces/FuncItem.md) |
| `options` | `any` |

#### Returns

[`EventToolFunc`](EventToolFunc.md)

#### Inherited from

[ToolFunc](ToolFunc.md).[constructor](ToolFunc.md#constructor)

#### Defined in

[packages/ai-tool/src/tool-func.ts:175](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L175)

## Properties

### $attributes

• **$attributes**: `Properties`

#### Inherited from

[ToolFunc](ToolFunc.md).[$attributes](ToolFunc.md#$attributes)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:5

___

### \_emitter

• **\_emitter**: `EventEmitter`

#### Defined in

[packages/ai-tool/src/funcs/event.ts:7](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/funcs/event.ts#L7)

___

### constructor

• **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

ToolFunc.constructor

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

### description

• **description**: `string` = `'Return event bus'`

#### Defined in

[packages/ai-tool/src/funcs/event.ts:9](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/funcs/event.ts#L9)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ToolFunc](ToolFunc.md).[name](ToolFunc.md#name)

#### Defined in

[packages/ai-tool/src/tool-func.ts:21](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L21)

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

[packages/ai-tool/src/tool-func.ts:22](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L22)

___

### result

• **result**: `string` = `'event'`

#### Overrides

[ToolFunc](ToolFunc.md).[result](ToolFunc.md#result)

#### Defined in

[packages/ai-tool/src/funcs/event.ts:10](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/funcs/event.ts#L10)

___

### scope

• `Optional` **scope**: `any`

#### Inherited from

[ToolFunc](ToolFunc.md).[scope](ToolFunc.md#scope)

#### Defined in

[packages/ai-tool/src/tool-func.ts:24](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L24)

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

[packages/ai-tool/src/tool-func.ts:26](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L26)

___

### should

• **should**: `Assertion`

#### Inherited from

[ToolFunc](ToolFunc.md).[should](ToolFunc.md#should)

#### Defined in

node_modules/.pnpm/@types+chai@4.3.16/node_modules/@types/chai/index.d.ts:2100

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Inherited from

[ToolFunc](ToolFunc.md).[tags](ToolFunc.md#tags)

#### Defined in

[packages/ai-tool/src/tool-func.ts:25](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L25)

___

### dataPath

▪ `Static` **dataPath**: `string`

#### Inherited from

[ToolFunc](ToolFunc.md).[dataPath](ToolFunc.md#datapath)

#### Defined in

[packages/ai-tool/src/tool-func.ts:47](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L47)

___

### items

▪ `Static` **items**: [`Funcs`](../interfaces/Funcs.md) = `{}`

#### Inherited from

[ToolFunc](ToolFunc.md).[items](ToolFunc.md#items)

#### Defined in

[packages/ai-tool/src/tool-func.ts:46](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L46)

## Accessors

### emitter

• `get` **emitter**(): `EventEmitter`

#### Returns

`EventEmitter`

#### Defined in

[packages/ai-tool/src/funcs/event.ts:12](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/funcs/event.ts#L12)

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

[packages/ai-tool/src/tool-func.ts:219](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L219)

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

### func

▸ **func**(): `EventEmitter`

#### Returns

`EventEmitter`

#### Overrides

[ToolFunc](ToolFunc.md).[func](ToolFunc.md#func)

#### Defined in

[packages/ai-tool/src/funcs/event.ts:17](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/funcs/event.ts#L17)

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

[packages/ai-tool/src/tool-func.ts:273](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L273)

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

[packages/ai-tool/src/tool-func.ts:299](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L299)

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

[packages/ai-tool/src/tool-func.ts:232](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L232)

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

[packages/ai-tool/src/tool-func.ts:202](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L202)

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

[packages/ai-tool/src/tool-func.ts:259](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L259)

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

[packages/ai-tool/src/tool-func.ts:263](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L263)

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

[packages/ai-tool/src/tool-func.ts:268](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L268)

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

[packages/ai-tool/src/tool-func.ts:245](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L245)

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

[packages/ai-tool/src/tool-func.ts:289](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L289)

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

[packages/ai-tool/src/tool-func.ts:294](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L294)

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

[packages/ai-tool/src/tool-func.ts:285](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L285)

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

[packages/ai-tool/src/tool-func.ts:278](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L278)

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

[packages/ai-tool/src/tool-func.ts:215](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L215)

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

[packages/ai-tool/src/tool-func.ts:49](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L49)

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

[packages/ai-tool/src/tool-func.ts:77](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L77)

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

[packages/ai-tool/src/tool-func.ts:57](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L57)

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

[packages/ai-tool/src/tool-func.ts:111](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L111)

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

[packages/ai-tool/src/tool-func.ts:132](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L132)

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

[packages/ai-tool/src/tool-func.ts:53](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L53)

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

[packages/ai-tool/src/tool-func.ts:137](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L137)

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

[packages/ai-tool/src/tool-func.ts:138](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L138)

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

[packages/ai-tool/src/tool-func.ts:139](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L139)

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

[packages/ai-tool/src/tool-func.ts:95](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L95)

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

[packages/ai-tool/src/tool-func.ts:103](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L103)

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

[packages/ai-tool/src/tool-func.ts:116](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L116)

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

[packages/ai-tool/src/tool-func.ts:124](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L124)

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

[packages/ai-tool/src/tool-func.ts:167](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/tool-func.ts#L167)

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
