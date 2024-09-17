[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / EventToolFunc

# Class: EventToolFunc

## Extends

- [`ToolFunc`](ToolFunc.md)

## Constructors

### new EventToolFunc()

> **new EventToolFunc**(`name`, `options`): [`EventToolFunc`](EventToolFunc.md)

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Parameters

• **name**: `string` \| `Function` \| [`FuncItem`](../interfaces/FuncItem.md)

• **options**: `any` = `{}`

#### Returns

[`EventToolFunc`](EventToolFunc.md)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`constructor`](ToolFunc.md#constructors)

#### Defined in

[packages/ai-tool/src/tool-func.ts:210](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L210)

## Properties

### \_emitter

> **\_emitter**: `EventEmitter`

#### Defined in

[packages/ai-tool/src/funcs/event.ts:7](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/funcs/event.ts#L7)

***

### $attributes

> **$attributes**: `Properties`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`$attributes`](ToolFunc.md#$attributes)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:5

***

### constructor

> **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

`ToolFunc.constructor`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:125

***

### defaultOptions

> **defaultOptions**: `object`

The default options for export and assign

#### assign?

> `optional` **assign**: `IMergeOptions`

#### export?

> `optional` **export**: `IMergeOptions`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`defaultOptions`](ToolFunc.md#defaultoptions)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:74

***

### description

> **description**: `string` = `'Return event bus'`

#### Defined in

[packages/ai-tool/src/funcs/event.ts:9](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/funcs/event.ts#L9)

***

### isApi?

> `optional` **isApi**: `boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`isApi`](ToolFunc.md#isapi)

#### Defined in

[packages/ai-tool/src/tool-func.ts:47](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L47)

***

### name?

> `optional` **name**: `string`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`name`](ToolFunc.md#name)

#### Defined in

[packages/ai-tool/src/tool-func.ts:41](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L41)

***

### nonExported1stChar

> **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`nonExported1stChar`](ToolFunc.md#nonexported1stchar)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:78

***

### params?

> `optional` **params**: [`FuncParams`](../interfaces/FuncParams.md) \| [`FuncParam`](../interfaces/FuncParam.md)[]

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`params`](ToolFunc.md#params)

#### Defined in

[packages/ai-tool/src/tool-func.ts:42](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L42)

***

### result

> **result**: `string` = `'event'`

#### Overrides

[`ToolFunc`](ToolFunc.md).[`result`](ToolFunc.md#result)

#### Defined in

[packages/ai-tool/src/funcs/event.ts:10](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/funcs/event.ts#L10)

***

### scope?

> `optional` **scope**: `any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`scope`](ToolFunc.md#scope)

#### Defined in

[packages/ai-tool/src/tool-func.ts:44](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L44)

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

#### Parameters

• **this**: [`ToolFunc`](ToolFunc.md)

• **options?**: [`FuncItem`](../interfaces/FuncItem.md)

#### Returns

`void`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`setup`](ToolFunc.md#setup)

#### Defined in

[packages/ai-tool/src/tool-func.ts:46](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L46)

***

### should

> **should**: `Assertion`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`should`](ToolFunc.md#should)

#### Defined in

node\_modules/.pnpm/@types+chai@4.3.16/node\_modules/@types/chai/index.d.ts:2100

***

### stream?

> `optional` **stream**: `boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`stream`](ToolFunc.md#stream)

#### Defined in

[packages/ai-tool/src/tool-func.ts:48](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L48)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`tags`](ToolFunc.md#tags)

#### Defined in

[packages/ai-tool/src/tool-func.ts:45](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L45)

***

### dataPath

> `static` **dataPath**: `string`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`dataPath`](ToolFunc.md#datapath)

#### Defined in

[packages/ai-tool/src/tool-func.ts:75](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L75)

***

### items

> `static` **items**: [`Funcs`](../interfaces/Funcs.md) = `{}`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`items`](ToolFunc.md#items)

#### Defined in

[packages/ai-tool/src/tool-func.ts:74](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L74)

## Accessors

### emitter

> `get` **emitter**(): `EventEmitter`

#### Returns

`EventEmitter`

#### Defined in

[packages/ai-tool/src/funcs/event.ts:12](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/funcs/event.ts#L12)

## Methods

### arr2ObjParams()

> **arr2ObjParams**(`params`): `any`[]

#### Parameters

• **params**: `any`[]

#### Returns

`any`[]

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`arr2ObjParams`](ToolFunc.md#arr2objparams)

#### Defined in

[packages/ai-tool/src/tool-func.ts:254](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L254)

***

### assign()

> **assign**(`src`, `options`?): `this`

Assign the values from the src object.

#### Parameters

• **src**: `any`

the source object

• **options?**: `IMergeOptions`

#### Returns

`this`

this object

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`assign`](ToolFunc.md#assign-1)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:106

***

### assignProperty()

> **assignProperty**(`src`, `name`, `value`, `attrs`?, `options`?): `void`

Assign a property of src to this object.

#### Parameters

• **src**: `any`

the src object

• **name**: `string`

the property name to assign

• **value**: `any`

the property value to assign

• **attrs?**: `any`

the attributes object

• **options?**: `IMergeOptions`

#### Returns

`void`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`assignProperty`](ToolFunc.md#assignproperty)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:117

***

### assignPropertyTo()

> `abstract` **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs`?, `options`?): `void`

Assign the property value from the src to destination object.

#### Parameters

• **dest**: `any`

The destination object

• **src**: `any`

The src object

• **name**: `string`

The property name

• **value**: `any`

The property value

• **attrs?**: `any`

The attributes object of the property

• **options?**: `IMergeOptions`

#### Returns

`void`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`assignPropertyTo`](ToolFunc.md#assignpropertyto)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:131

***

### assignTo()

> **assignTo**(`dest`?, `options`?): `any`

Assign this attributes to the dest object

#### Parameters

• **dest?**: `any`

the destination object

• **options?**: `IMergeOptions`

#### Returns

`any`

the dest object

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`assignTo`](ToolFunc.md#assignto)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:191

***

### clone()

> **clone**(`options`?): `any`

Create a new object with the same values of attributes.

#### Parameters

• **options?**: `IMergeOptions`

#### Returns

`any`

the new object

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`clone`](ToolFunc.md#clone)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:155

***

### cloneTo()

> **cloneTo**(`dest`, `options`?): `any`

Create and assign the values to the destination object.

#### Parameters

• **dest**: `any`

the destination object

• **options?**: `IMergeOptions`

#### Returns

`any`

the new dest object

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`cloneTo`](ToolFunc.md#cloneto)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:148

***

### defineProperties()

> `abstract` **defineProperties**(`aProperties`): `any`

Define the attributes of this object.

#### Parameters

• **aProperties**: `SimplePropDescriptors`

the defined attributes of the object

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`defineProperties`](ToolFunc.md#defineproperties)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:89

***

### exportTo()

> **exportTo**(`dest`, `options`?): `any`

Export attributes to the dest json object.

#### Parameters

• **dest**: `any`

the destination object

• **options?**: `IExportOptions`

#### Returns

`any`

the dest object.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`exportTo`](ToolFunc.md#exportto)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:173

***

### func()

> **func**(): `EventEmitter`

#### Returns

`EventEmitter`

#### Overrides

[`ToolFunc`](ToolFunc.md).[`func`](ToolFunc.md#func)

#### Defined in

[packages/ai-tool/src/funcs/event.ts:17](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/funcs/event.ts#L17)

***

### getFunc()

> **getFunc**(`name`?): `any`

#### Parameters

• **name?**: `string`

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getFunc`](ToolFunc.md#getfunc)

#### Defined in

[packages/ai-tool/src/tool-func.ts:307](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L307)

***

### getFuncWithPos()

> **getFuncWithPos**(`name`?): `any`

#### Parameters

• **name?**: `string`

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getFuncWithPos`](ToolFunc.md#getfuncwithpos)

#### Defined in

[packages/ai-tool/src/tool-func.ts:331](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L331)

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getProperties`](ToolFunc.md#getproperties)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:98

***

### hasAsyncFeature()

> **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

• **feature**: [`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`hasAsyncFeature`](ToolFunc.md#hasasyncfeature)

#### Defined in

[packages/ai-tool/src/tool-func.ts:336](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L336)

***

### hasOwnProperty()

> **hasOwnProperty**(`v`): `boolean`

Determines whether an object has a property with the specified name.

#### Parameters

• **v**: `PropertyKey`

A property name.

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`hasOwnProperty`](ToolFunc.md#hasownproperty)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:140

***

### initialize()

> **initialize**(`src`?): `this`

Initialize object and assign attribute values from src if src exists.

#### Parameters

• **src?**: `any`

#### Returns

`this`

this object.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`initialize`](ToolFunc.md#initialize)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:139

***

### isPrototypeOf()

> **isPrototypeOf**(`v`): `boolean`

Determines whether an object exists in another object's prototype chain.

#### Parameters

• **v**: `Object`

Another object whose prototype chain is to be checked.

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`isPrototypeOf`](ToolFunc.md#isprototypeof)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:146

***

### isSame()

> **isSame**(`src`, `options`?): `boolean`

Check the src object whether “equals” this object.

#### Parameters

• **src**: `any`

The source object

• **options?**: `IMergeOptions`

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`isSame`](ToolFunc.md#issame)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:200

***

### isStream()

> **isStream**(`params`): `undefined` \| `boolean`

#### Parameters

• **params**: `any`

#### Returns

`undefined` \| `boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`isStream`](ToolFunc.md#isstream)

#### Defined in

[packages/ai-tool/src/tool-func.ts:342](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L342)

***

### mergeTo()

> **mergeTo**(`dest`, `options`?): `any`

Merge this attributes to dest object.

#### Parameters

• **dest**: `any`

The destination object

• **options?**: `IMergeOptions`

#### Returns

`any`

the dest object.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`mergeTo`](ToolFunc.md#mergeto)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:164

***

### obj2ArrParams()

> **obj2ArrParams**(`params`?): `any`[]

#### Parameters

• **params?**: `any`

#### Returns

`any`[]

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`obj2ArrParams`](ToolFunc.md#obj2arrparams)

#### Defined in

[packages/ai-tool/src/tool-func.ts:267](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L267)

***

### propertyIsEnumerable()

> **propertyIsEnumerable**(`v`): `boolean`

Determines whether a specified property is enumerable.

#### Parameters

• **v**: `PropertyKey`

A property name.

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`propertyIsEnumerable`](ToolFunc.md#propertyisenumerable)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:152

***

### register()

> **register**(): `boolean` \| [`ToolFunc`](ToolFunc.md)

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`register`](ToolFunc.md#register)

#### Defined in

[packages/ai-tool/src/tool-func.ts:237](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L237)

***

### run()

> **run**(`params`?): `Promise`\<`any`\>

#### Parameters

• **params?**: `any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`run`](ToolFunc.md#run)

#### Defined in

[packages/ai-tool/src/tool-func.ts:294](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L294)

***

### runAs()

> **runAs**(`name`, `params`?): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runAs`](ToolFunc.md#runas)

#### Defined in

[packages/ai-tool/src/tool-func.ts:298](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L298)

***

### runAsSync()

> **runAsSync**(`name`, `params`?): `any`

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runAsSync`](ToolFunc.md#runassync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:302](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L302)

***

### runSync()

> **runSync**(`params`?): `any`

#### Parameters

• **params?**: `any`

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runSync`](ToolFunc.md#runsync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:280](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L280)

***

### runWithPos()

> **runWithPos**(...`params`): `Promise`\<`any`\>

#### Parameters

• ...**params**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runWithPos`](ToolFunc.md#runwithpos)

#### Defined in

[packages/ai-tool/src/tool-func.ts:323](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L323)

***

### runWithPosAs()

> **runWithPosAs**(`name`, ...`params`): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runWithPosAs`](ToolFunc.md#runwithposas)

#### Defined in

[packages/ai-tool/src/tool-func.ts:327](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L327)

***

### runWithPosAsSync()

> **runWithPosAsSync**(`name`, ...`params`): `any`

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runWithPosAsSync`](ToolFunc.md#runwithposassync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:319](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L319)

***

### runWithPosSync()

> **runWithPosSync**(...`params`): `any`

#### Parameters

• ...**params**: `any`[]

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runWithPosSync`](ToolFunc.md#runwithpossync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:312](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L312)

***

### toJSON()

> **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`toJSON`](ToolFunc.md#tojson)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:182

***

### toLocaleString()

> **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`toLocaleString`](ToolFunc.md#tolocalestring)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:131

***

### toObject()

> **toObject**(`options`?): `any`

Convert the attributes to the json object

#### Parameters

• **options?**: `any`

#### Returns

`any`

the json object.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`toObject`](ToolFunc.md#toobject)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:181

***

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`toString`](ToolFunc.md#tostring)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:128

***

### unregister()

> **unregister**(): `any`

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`unregister`](ToolFunc.md#unregister)

#### Defined in

[packages/ai-tool/src/tool-func.ts:250](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L250)

***

### valueOf()

> **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`valueOf`](ToolFunc.md#valueof)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:134

***

### assign()

#### assign(target, source)

> `static` **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

##### Parameters

• **target**: `T`

The target object to copy to.

• **source**: `U`

The source object from which to copy properties.

##### Returns

`T` & `U`

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`assign`](ToolFunc.md#assign-2)

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:286

#### assign(target, source1, source2)

> `static` **assign**\<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

• **V**

##### Parameters

• **target**: `T`

The target object to copy to.

• **source1**: `U`

The first source object from which to copy properties.

• **source2**: `V`

The second source object from which to copy properties.

##### Returns

`T` & `U` & `V`

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`assign`](ToolFunc.md#assign-2)

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:295

#### assign(target, source1, source2, source3)

> `static` **assign**\<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

• **V**

• **W**

##### Parameters

• **target**: `T`

The target object to copy to.

• **source1**: `U`

The first source object from which to copy properties.

• **source2**: `V`

The second source object from which to copy properties.

• **source3**: `W`

The third source object from which to copy properties.

##### Returns

`T` & `U` & `V` & `W`

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`assign`](ToolFunc.md#assign-2)

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:305

#### assign(target, sources)

> `static` **assign**(`target`, ...`sources`): `any`

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Parameters

• **target**: `object`

The target object to copy to.

• ...**sources**: `any`[]

One or more source objects from which to copy properties

##### Returns

`any`

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`assign`](ToolFunc.md#assign-2)

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:313

***

### create()

#### create(o)

> `static` **create**(`o`): `any`

Creates an object that has the specified prototype or that has null prototype.

##### Parameters

• **o**: `null` \| `object`

Object to use as a prototype. May be null.

##### Returns

`any`

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`create`](ToolFunc.md#create)

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:188

#### create(o, properties)

> `static` **create**(`o`, `properties`): `any`

Creates an object that has the specified prototype, and that optionally contains specified properties.

##### Parameters

• **o**: `null` \| `object`

Object to use as a prototype. May be null

• **properties**: `PropertyDescriptorMap` & `ThisType`\<`any`\>

JavaScript object that contains one or more property descriptors.

##### Returns

`any`

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`create`](ToolFunc.md#create)

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:195

***

### defineProperties()

> `static` **defineProperties**(`aTarget`, `aProperties`, `recreate`?): `any`

Adds one or more properties to an object, and/or modifies attributes of existing properties.

#### Parameters

• **aTarget**: `any`

• **aProperties**: `PropDescriptors`

• **recreate?**: `boolean`

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`defineProperties`](ToolFunc.md#defineproperties-1)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:11

***

### defineProperty()

> `static` **defineProperty**\<`T`\>(`o`, `p`, `attributes`): `T`

Adds a property to an object, or modifies attributes of an existing property.

#### Type Parameters

• **T**

#### Parameters

• **o**: `T`

Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.

• **p**: `PropertyKey`

The property name.

• **attributes**: `PropertyDescriptor` & `ThisType`\<`any`\>

Descriptor for the property. It can be for a data property or an accessor property.

#### Returns

`T`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`defineProperty`](ToolFunc.md#defineproperty)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:203

***

### entries()

#### entries(o)

> `static` **entries**\<`T`\>(`o`): [`string`, `T`][]

Returns an array of key/values of the enumerable own properties of an object

##### Type Parameters

• **T**

##### Parameters

• **o**: `object` \| `ArrayLike`\<`T`\>

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

[`string`, `T`][]

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`entries`](ToolFunc.md#entries)

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:36

#### entries(o)

> `static` **entries**(`o`): [`string`, `any`][]

Returns an array of key/values of the enumerable own properties of an object

##### Parameters

• **o**

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

[`string`, `any`][]

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`entries`](ToolFunc.md#entries)

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:42

***

### freeze()

#### freeze(f)

> `static` **freeze**\<`T`\>(`f`): `T`

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T** *extends* `Function`

##### Parameters

• **f**: `T`

Object on which to lock the attributes.

##### Returns

`T`

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`freeze`](ToolFunc.md#freeze)

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:222

#### freeze(o)

> `static` **freeze**\<`T`, `U`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T** *extends* `object`

• **U** *extends* `string` \| `number` \| `bigint` \| `boolean` \| `symbol`

##### Parameters

• **o**: `T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`freeze`](ToolFunc.md#freeze)

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:228

#### freeze(o)

> `static` **freeze**\<`T`\>(`o`): `Readonly`\<`T`\>

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T**

##### Parameters

• **o**: `T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`freeze`](ToolFunc.md#freeze)

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:234

***

### fromEntries()

#### fromEntries(entries)

> `static` **fromEntries**\<`T`\>(`entries`): `object`

Returns an object created by key-value entries for properties and methods

##### Type Parameters

• **T** = `any`

##### Parameters

• **entries**: `Iterable`\<readonly [`PropertyKey`, `T`], `any`, `any`\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`object`

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`fromEntries`](ToolFunc.md#fromentries)

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2019.object.d.ts:26

#### fromEntries(entries)

> `static` **fromEntries**(`entries`): `any`

Returns an object created by key-value entries for properties and methods

##### Parameters

• **entries**: `Iterable`\<readonly `any`[], `any`, `any`\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`any`

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`fromEntries`](ToolFunc.md#fromentries)

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2019.object.d.ts:32

***

### get()

> `static` **get**(`name`): [`ToolFunc`](ToolFunc.md)

#### Parameters

• **name**: `string`

#### Returns

[`ToolFunc`](ToolFunc.md)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`get`](ToolFunc.md#get)

#### Defined in

[packages/ai-tool/src/tool-func.ts:77](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L77)

***

### getAllByTag()

> `static` **getAllByTag**(`tagName`): [`ToolFunc`](ToolFunc.md)[]

#### Parameters

• **tagName**: `string`

#### Returns

[`ToolFunc`](ToolFunc.md)[]

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getAllByTag`](ToolFunc.md#getallbytag)

#### Defined in

[packages/ai-tool/src/tool-func.ts:105](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L105)

***

### getByTag()

> `static` **getByTag**(`tagName`): `undefined` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

• **tagName**: `string`

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getByTag`](ToolFunc.md#getbytag)

#### Defined in

[packages/ai-tool/src/tool-func.ts:85](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L85)

***

### getFunc()

> `static` **getFunc**(`name`): `any`

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getFunc`](ToolFunc.md#getfunc-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:146](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L146)

***

### getFuncWithPos()

> `static` **getFuncWithPos**(`name`): `any`

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getFuncWithPos`](ToolFunc.md#getfuncwithpos-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:167](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L167)

***

### getOwnPropertyDescriptor()

> `static` **getOwnPropertyDescriptor**(`o`, `p`): `undefined` \| `PropertyDescriptor`

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

#### Parameters

• **o**: `any`

Object that contains the property.

• **p**: `PropertyKey`

Name of the property.

#### Returns

`undefined` \| `PropertyDescriptor`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getOwnPropertyDescriptor`](ToolFunc.md#getownpropertydescriptor)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:175

***

### getOwnPropertyDescriptors()

> `static` **getOwnPropertyDescriptors**\<`T`\>(`o`): \{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

Returns an object containing all own property descriptors of an object

#### Type Parameters

• **T**

#### Parameters

• **o**: `T`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

#### Returns

\{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getOwnPropertyDescriptors`](ToolFunc.md#getownpropertydescriptors)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:48

***

### getOwnPropertyNames()

> `static` **getOwnPropertyNames**(`o`): `string`[]

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

#### Parameters

• **o**: `any`

Object that contains the own properties.

#### Returns

`string`[]

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getOwnPropertyNames`](ToolFunc.md#getownpropertynames)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:182

***

### getOwnPropertySymbols()

> `static` **getOwnPropertySymbols**(`o`): `symbol`[]

Returns an array of all symbol properties found directly on object o.

#### Parameters

• **o**: `any`

Object to retrieve the symbols from.

#### Returns

`symbol`[]

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getOwnPropertySymbols`](ToolFunc.md#getownpropertysymbols)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:319

***

### getProperties()

> `static` **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getProperties`](ToolFunc.md#getproperties-1)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:10

***

### getPrototypeOf()

> `static` **getPrototypeOf**(`o`): `any`

Returns the prototype of an object.

#### Parameters

• **o**: `any`

The object that references the prototype.

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getPrototypeOf`](ToolFunc.md#getprototypeof)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:167

***

### hasAsyncFeature()

> `static` **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

• **feature**: [`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`hasAsyncFeature`](ToolFunc.md#hasasyncfeature-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:123](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L123)

***

### hasOwn()

> `static` **hasOwn**(`o`, `v`): `boolean`

Determines whether an object has a property with the specified name.

#### Parameters

• **o**: `object`

An object.

• **v**: `PropertyKey`

A property name.

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`hasOwn`](ToolFunc.md#hasown)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2022.object.d.ts:25

***

### is()

> `static` **is**(`value1`, `value2`): `boolean`

Returns true if the values are the same value, false otherwise.

#### Parameters

• **value1**: `any`

The first value.

• **value2**: `any`

The second value.

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`is`](ToolFunc.md#is)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:332

***

### isExtensible()

> `static` **isExtensible**(`o`): `boolean`

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

• **o**: `any`

Object to test.

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`isExtensible`](ToolFunc.md#isextensible)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:258

***

### isFrozen()

> `static` **isFrozen**(`o`): `boolean`

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

#### Parameters

• **o**: `any`

Object to test.

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`isFrozen`](ToolFunc.md#isfrozen)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:252

***

### isSealed()

> `static` **isSealed**(`o`): `boolean`

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

#### Parameters

• **o**: `any`

Object to test.

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`isSealed`](ToolFunc.md#issealed)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:246

***

### keys()

#### keys(o)

> `static` **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

• **o**: `object`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`keys`](ToolFunc.md#keys)

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:264

#### keys(o)

> `static` **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

• **o**

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`keys`](ToolFunc.md#keys)

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:325

***

### list()

> `static` **list**(): [`Funcs`](../interfaces/Funcs.md)

#### Returns

[`Funcs`](../interfaces/Funcs.md)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`list`](ToolFunc.md#list)

#### Defined in

[packages/ai-tool/src/tool-func.ts:81](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L81)

***

### preventExtensions()

> `static` **preventExtensions**\<`T`\>(`o`): `T`

Prevents the addition of new properties to an object.

#### Type Parameters

• **T**

#### Parameters

• **o**: `T`

Object to make non-extensible.

#### Returns

`T`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`preventExtensions`](ToolFunc.md#preventextensions)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:240

***

### register()

#### register(name, options)

> `static` **register**(`name`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

##### Parameters

• **name**: `string`

• **options**: [`FuncItem`](../interfaces/FuncItem.md)

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`register`](ToolFunc.md#register-1)

##### Defined in

[packages/ai-tool/src/tool-func.ts:172](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L172)

#### register(func, options)

> `static` **register**(`func`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

##### Parameters

• **func**: `Function`

• **options**: [`FuncItem`](../interfaces/FuncItem.md)

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`register`](ToolFunc.md#register-1)

##### Defined in

[packages/ai-tool/src/tool-func.ts:173](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L173)

#### register(name, options)

> `static` **register**(`name`, `options`?): `boolean` \| [`ToolFunc`](ToolFunc.md)

##### Parameters

• **name**: `string` \| `Function` \| [`ToolFunc`](ToolFunc.md) \| [`FuncItem`](../interfaces/FuncItem.md)

• **options?**: [`FuncItem`](../interfaces/FuncItem.md)

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`register`](ToolFunc.md#register-1)

##### Defined in

[packages/ai-tool/src/tool-func.ts:174](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L174)

***

### run()

> `static` **run**(`name`, `params`?): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`run`](ToolFunc.md#run-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:130](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L130)

***

### runSync()

> `static` **runSync**(`name`, `params`?): `any`

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runSync`](ToolFunc.md#runsync-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:138](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L138)

***

### runWithPos()

> `static` **runWithPos**(`name`, ...`params`): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runWithPos`](ToolFunc.md#runwithpos-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:151](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L151)

***

### runWithPosSync()

> `static` **runWithPosSync**(`name`, ...`params`): `any`

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runWithPosSync`](ToolFunc.md#runwithpossync-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:159](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L159)

***

### seal()

> `static` **seal**\<`T`\>(`o`): `T`

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type Parameters

• **T**

#### Parameters

• **o**: `T`

Object on which to lock the attributes.

#### Returns

`T`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`seal`](ToolFunc.md#seal)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:216

***

### setPrototypeOf()

> `static` **setPrototypeOf**(`o`, `proto`): `any`

Sets the prototype of a specified object o to object proto or null. Returns the object o.

#### Parameters

• **o**: `any`

The object to change its prototype.

• **proto**: `null` \| `object`

The value of the new prototype or null.

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`setPrototypeOf`](ToolFunc.md#setprototypeof)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:339

***

### unregister()

> `static` **unregister**(`name`): `undefined` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`unregister`](ToolFunc.md#unregister-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:202](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L202)

***

### values()

#### values(o)

> `static` **values**\<`T`\>(`o`): `T`[]

Returns an array of values of the enumerable own properties of an object

##### Type Parameters

• **T**

##### Parameters

• **o**: `object` \| `ArrayLike`\<`T`\>

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`T`[]

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`values`](ToolFunc.md#values)

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:24

#### values(o)

> `static` **values**(`o`): `any`[]

Returns an array of values of the enumerable own properties of an object

##### Parameters

• **o**

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`any`[]

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`values`](ToolFunc.md#values)

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:30
