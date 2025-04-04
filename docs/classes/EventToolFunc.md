[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / EventToolFunc

# Class: EventToolFunc

Defined in: [packages/ai-tool/src/funcs/event.ts:5](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/funcs/event.ts#L5)

## Extends

- [`ToolFunc`](ToolFunc.md)

## Indexable

\[`name`: `string`\]: `any`

## Constructors

### new EventToolFunc()

> **new EventToolFunc**(`name`, `options`): [`EventToolFunc`](EventToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:225](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L225)

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Parameters

##### name

`string` | `Function` | [`FuncItem`](../interfaces/FuncItem.md)

##### options

`any` = `{}`

#### Returns

[`EventToolFunc`](EventToolFunc.md)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`constructor`](ToolFunc.md#constructors)

## Properties

### \_emitter

> **\_emitter**: [`EventEmitter`](EventEmitter.md)

Defined in: [packages/ai-tool/src/funcs/event.ts:7](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/funcs/event.ts#L7)

***

### $attributes

> **$attributes**: `Properties`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:5

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`$attributes`](ToolFunc.md#$attributes)

***

### alias?

> `optional` **alias**: `string` \| `string`[]

Defined in: [packages/ai-tool/src/tool-func.ts:31](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L31)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`alias`](ToolFunc.md#alias)

***

### constructor

> **constructor**: `Function`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:125

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

`ToolFunc.constructor`

***

### defaultOptions

> **defaultOptions**: `object`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:74

The default options for export and assign

#### assign?

> `optional` **assign**: `IMergeOptions`

#### export?

> `optional` **export**: `IMergeOptions`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`defaultOptions`](ToolFunc.md#defaultoptions)

***

### description

> **description**: `string` = `'Return event bus'`

Defined in: [packages/ai-tool/src/funcs/event.ts:9](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/funcs/event.ts#L9)

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:29](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L29)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`isApi`](ToolFunc.md#isapi)

***

### name?

> `optional` **name**: `string`

Defined in: [packages/ai-tool/src/tool-func.ts:23](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L23)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`name`](ToolFunc.md#name-1)

***

### nonExported1stChar

> **nonExported1stChar**: `string`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:78

the property with the default prefix '$' will not be exported.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`nonExported1stChar`](ToolFunc.md#nonexported1stchar)

***

### params?

> `optional` **params**: [`FuncParams`](../interfaces/FuncParams.md) \| [`FuncParam`](../interfaces/FuncParam.md)[]

Defined in: [packages/ai-tool/src/tool-func.ts:24](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L24)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`params`](ToolFunc.md#params)

***

### result

> **result**: `string` = `'event'`

Defined in: [packages/ai-tool/src/funcs/event.ts:10](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/funcs/event.ts#L10)

#### Overrides

[`ToolFunc`](ToolFunc.md).[`result`](ToolFunc.md#result)

***

### scope?

> `optional` **scope**: `any`

Defined in: [packages/ai-tool/src/tool-func.ts:26](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L26)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`scope`](ToolFunc.md#scope)

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

Defined in: [packages/ai-tool/src/tool-func.ts:28](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L28)

#### Parameters

##### this

[`ToolFunc`](ToolFunc.md)

##### options?

[`FuncItem`](../interfaces/FuncItem.md)

#### Returns

`void`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`setup`](ToolFunc.md#setup)

***

### stream?

> `optional` **stream**: `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:30](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L30)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`stream`](ToolFunc.md#stream)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: [packages/ai-tool/src/tool-func.ts:27](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L27)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`tags`](ToolFunc.md#tags)

***

### aliases

> `static` **aliases**: `object` = `{}`

Defined in: [packages/ai-tool/src/tool-func.ts:58](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L58)

#### Index Signature

\[`name`: `string`\]: `string`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`aliases`](ToolFunc.md#aliases)

***

### dataPath

> `static` **dataPath**: `string`

Defined in: [packages/ai-tool/src/tool-func.ts:59](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L59)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`dataPath`](ToolFunc.md#datapath)

***

### items

> `static` **items**: [`Funcs`](../interfaces/Funcs.md) = `{}`

Defined in: [packages/ai-tool/src/tool-func.ts:57](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L57)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`items`](ToolFunc.md#items)

## Accessors

### emitter

#### Get Signature

> **get** **emitter**(): [`EventEmitter`](EventEmitter.md)

Defined in: [packages/ai-tool/src/funcs/event.ts:12](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/funcs/event.ts#L12)

##### Returns

[`EventEmitter`](EventEmitter.md)

## Methods

### arr2ObjParams()

> **arr2ObjParams**(`params`): `any`[]

Defined in: [packages/ai-tool/src/tool-func.ts:269](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L269)

#### Parameters

##### params

`any`[]

#### Returns

`any`[]

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`arr2ObjParams`](ToolFunc.md#arr2objparams)

***

### assign()

> **assign**(`src`, `options`?): `this`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:106

Assign the values from the src object.

#### Parameters

##### src

`any`

the source object

##### options?

`IMergeOptions`

#### Returns

`this`

this object

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`assign`](ToolFunc.md#assign)

***

### assignProperty()

> **assignProperty**(`src`, `name`, `value`, `attrs`?, `options`?): `void`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:117

Assign a property of src to this object.

#### Parameters

##### src

`any`

the src object

##### name

`string`

the property name to assign

##### value

`any`

the property value to assign

##### attrs?

`any`

the attributes object

##### options?

`IMergeOptions`

#### Returns

`void`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`assignProperty`](ToolFunc.md#assignproperty)

***

### assignPropertyTo()

> `abstract` **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs`?, `options`?): `void`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:131

Assign the property value from the src to destination object.

#### Parameters

##### dest

`any`

The destination object

##### src

`any`

The src object

##### name

`string`

The property name

##### value

`any`

The property value

##### attrs?

`any`

The attributes object of the property

##### options?

`IMergeOptions`

#### Returns

`void`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`assignPropertyTo`](ToolFunc.md#assignpropertyto)

***

### assignTo()

> **assignTo**(`dest`?, `options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:191

Assign this attributes to the dest object

#### Parameters

##### dest?

`any`

the destination object

##### options?

`IMergeOptions`

#### Returns

`any`

the dest object

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`assignTo`](ToolFunc.md#assignto)

***

### clone()

> **clone**(`options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:155

Create a new object with the same values of attributes.

#### Parameters

##### options?

`IMergeOptions`

#### Returns

`any`

the new object

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`clone`](ToolFunc.md#clone)

***

### cloneTo()

> **cloneTo**(`dest`, `options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:148

Create and assign the values to the destination object.

#### Parameters

##### dest

`any`

the destination object

##### options?

`IMergeOptions`

#### Returns

`any`

the new dest object

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`cloneTo`](ToolFunc.md#cloneto)

***

### defineProperties()

> `abstract` **defineProperties**(`aProperties`): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:89

Define the attributes of this object.

#### Parameters

##### aProperties

`SimplePropDescriptors`

the defined attributes of the object

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`defineProperties`](ToolFunc.md#defineproperties)

***

### exportTo()

> **exportTo**(`dest`, `options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:173

Export attributes to the dest json object.

#### Parameters

##### dest

`any`

the destination object

##### options?

`IExportOptions`

#### Returns

`any`

the dest object.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`exportTo`](ToolFunc.md#exportto)

***

### func()

> **func**(): [`EventEmitter`](EventEmitter.md)

Defined in: [packages/ai-tool/src/funcs/event.ts:17](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/funcs/event.ts#L17)

#### Returns

[`EventEmitter`](EventEmitter.md)

#### Overrides

[`ToolFunc`](ToolFunc.md).[`func`](ToolFunc.md#func)

***

### getFunc()

> **getFunc**(`name`?): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:322](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L322)

#### Parameters

##### name?

`string`

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getFunc`](ToolFunc.md#getfunc)

***

### getFuncWithPos()

> **getFuncWithPos**(`name`?): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:346](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L346)

#### Parameters

##### name?

`string`

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getFuncWithPos`](ToolFunc.md#getfuncwithpos)

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:98

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getProperties`](ToolFunc.md#getproperties)

***

### hasAsyncFeature()

> **hasAsyncFeature**(`feature`): `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:351](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L351)

#### Parameters

##### feature

[`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`hasAsyncFeature`](ToolFunc.md#hasasyncfeature)

***

### hasOwnProperty()

> **hasOwnProperty**(`v`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:140

Determines whether an object has a property with the specified name.

#### Parameters

##### v

`PropertyKey`

A property name.

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`hasOwnProperty`](ToolFunc.md#hasownproperty)

***

### initialize()

> **initialize**(`src`?): `this`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:139

Initialize object and assign attribute values from src if src exists.

#### Parameters

##### src?

`any`

#### Returns

`this`

this object.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`initialize`](ToolFunc.md#initialize)

***

### isPrototypeOf()

> **isPrototypeOf**(`v`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:146

Determines whether an object exists in another object's prototype chain.

#### Parameters

##### v

`Object`

Another object whose prototype chain is to be checked.

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`isPrototypeOf`](ToolFunc.md#isprototypeof)

***

### isSame()

> **isSame**(`src`, `options`?): `boolean`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:200

Check the src object whether “equals” this object.

#### Parameters

##### src

`any`

The source object

##### options?

`IMergeOptions`

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`isSame`](ToolFunc.md#issame)

***

### isStream()

> **isStream**(`params`): `undefined` \| `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:357](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L357)

#### Parameters

##### params

`any`

#### Returns

`undefined` \| `boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`isStream`](ToolFunc.md#isstream)

***

### mergeTo()

> **mergeTo**(`dest`, `options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:164

Merge this attributes to dest object.

#### Parameters

##### dest

`any`

The destination object

##### options?

`IMergeOptions`

#### Returns

`any`

the dest object.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`mergeTo`](ToolFunc.md#mergeto)

***

### obj2ArrParams()

> **obj2ArrParams**(`params`?): `any`[]

Defined in: [packages/ai-tool/src/tool-func.ts:282](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L282)

#### Parameters

##### params?

`any`

#### Returns

`any`[]

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`obj2ArrParams`](ToolFunc.md#obj2arrparams)

***

### propertyIsEnumerable()

> **propertyIsEnumerable**(`v`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:152

Determines whether a specified property is enumerable.

#### Parameters

##### v

`PropertyKey`

A property name.

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`propertyIsEnumerable`](ToolFunc.md#propertyisenumerable)

***

### register()

> **register**(): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:252](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L252)

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`register`](ToolFunc.md#register)

***

### run()

> **run**(`params`?): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:309](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L309)

#### Parameters

##### params?

`any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`run`](ToolFunc.md#run)

***

### runAs()

> **runAs**(`name`, `params`?): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:313](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L313)

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runAs`](ToolFunc.md#runas)

***

### runAsSync()

> **runAsSync**(`name`, `params`?): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:317](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L317)

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runAsSync`](ToolFunc.md#runassync)

***

### runSync()

> **runSync**(`params`?): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:295](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L295)

#### Parameters

##### params?

`any`

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runSync`](ToolFunc.md#runsync)

***

### runWithPos()

> **runWithPos**(...`params`): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:338](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L338)

#### Parameters

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runWithPos`](ToolFunc.md#runwithpos)

***

### runWithPosAs()

> **runWithPosAs**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:342](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L342)

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runWithPosAs`](ToolFunc.md#runwithposas)

***

### runWithPosAsSync()

> **runWithPosAsSync**(`name`, ...`params`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:334](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L334)

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runWithPosAsSync`](ToolFunc.md#runwithposassync)

***

### runWithPosSync()

> **runWithPosSync**(...`params`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:327](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L327)

#### Parameters

##### params

...`any`[]

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runWithPosSync`](ToolFunc.md#runwithpossync)

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:182

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`toJSON`](ToolFunc.md#tojson)

***

### toLocaleString()

> **toLocaleString**(): `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:131

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`toLocaleString`](ToolFunc.md#tolocalestring)

***

### toObject()

> **toObject**(`options`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:181

Convert the attributes to the json object

#### Parameters

##### options?

`any`

#### Returns

`any`

the json object.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`toObject`](ToolFunc.md#toobject)

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:128

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`toString`](ToolFunc.md#tostring)

***

### unregister()

> **unregister**(): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:265](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L265)

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`unregister`](ToolFunc.md#unregister)

***

### valueOf()

> **valueOf**(): `Object`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:134

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`valueOf`](ToolFunc.md#valueof)

***

### assign()

#### Call Signature

> `static` **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:286

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

##### Parameters

###### target

`T`

The target object to copy to.

###### source

`U`

The source object from which to copy properties.

##### Returns

`T` & `U`

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`assign`](ToolFunc.md#assign-2)

#### Call Signature

> `static` **assign**\<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:295

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

• **V**

##### Parameters

###### target

`T`

The target object to copy to.

###### source1

`U`

The first source object from which to copy properties.

###### source2

`V`

The second source object from which to copy properties.

##### Returns

`T` & `U` & `V`

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`assign`](ToolFunc.md#assign-2)

#### Call Signature

> `static` **assign**\<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:305

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

• **T** *extends* `object`

• **U**

• **V**

• **W**

##### Parameters

###### target

`T`

The target object to copy to.

###### source1

`U`

The first source object from which to copy properties.

###### source2

`V`

The second source object from which to copy properties.

###### source3

`W`

The third source object from which to copy properties.

##### Returns

`T` & `U` & `V` & `W`

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`assign`](ToolFunc.md#assign-2)

#### Call Signature

> `static` **assign**(`target`, ...`sources`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:313

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Parameters

###### target

`object`

The target object to copy to.

###### sources

...`any`[]

One or more source objects from which to copy properties

##### Returns

`any`

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`assign`](ToolFunc.md#assign-2)

***

### create()

#### Call Signature

> `static` **create**(`o`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:188

Creates an object that has the specified prototype or that has null prototype.

##### Parameters

###### o

Object to use as a prototype. May be null.

`null` | `object`

##### Returns

`any`

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`create`](ToolFunc.md#create)

#### Call Signature

> `static` **create**(`o`, `properties`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:195

Creates an object that has the specified prototype, and that optionally contains specified properties.

##### Parameters

###### o

Object to use as a prototype. May be null

`null` | `object`

###### properties

`PropertyDescriptorMap` & `ThisType`\<`any`\>

JavaScript object that contains one or more property descriptors.

##### Returns

`any`

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`create`](ToolFunc.md#create)

***

### defineProperties()

> `static` **defineProperties**(`aTarget`, `aProperties`, `recreate`?): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:11

Adds one or more properties to an object, and/or modifies attributes of existing properties.

#### Parameters

##### aTarget

`any`

##### aProperties

`PropDescriptors`

##### recreate?

`boolean`

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`defineProperties`](ToolFunc.md#defineproperties-2)

***

### defineProperty()

> `static` **defineProperty**\<`T`\>(`o`, `p`, `attributes`): `T`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:203

Adds a property to an object, or modifies attributes of an existing property.

#### Type Parameters

• **T**

#### Parameters

##### o

`T`

Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.

##### p

`PropertyKey`

The property name.

##### attributes

`PropertyDescriptor` & `ThisType`\<`any`\>

Descriptor for the property. It can be for a data property or an accessor property.

#### Returns

`T`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`defineProperty`](ToolFunc.md#defineproperty)

***

### entries()

#### Call Signature

> `static` **entries**\<`T`\>(`o`): \[`string`, `T`\][]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:36

Returns an array of key/values of the enumerable own properties of an object

##### Type Parameters

• **T**

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

\{\} | `ArrayLike`\<`T`\>

##### Returns

\[`string`, `T`\][]

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`entries`](ToolFunc.md#entries)

#### Call Signature

> `static` **entries**(`o`): \[`string`, `any`\][]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:42

Returns an array of key/values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

\[`string`, `any`\][]

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`entries`](ToolFunc.md#entries)

***

### freeze()

#### Call Signature

> `static` **freeze**\<`T`\>(`f`): `T`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:222

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T** *extends* `Function`

##### Parameters

###### f

`T`

Object on which to lock the attributes.

##### Returns

`T`

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`freeze`](ToolFunc.md#freeze)

#### Call Signature

> `static` **freeze**\<`T`, `U`\>(`o`): `Readonly`\<`T`\>

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:228

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T** *extends* `object`

• **U** *extends* `string` \| `number` \| `bigint` \| `boolean` \| `symbol`

##### Parameters

###### o

`T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`freeze`](ToolFunc.md#freeze)

#### Call Signature

> `static` **freeze**\<`T`\>(`o`): `Readonly`\<`T`\>

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:234

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

• **T**

##### Parameters

###### o

`T`

Object on which to lock the attributes.

##### Returns

`Readonly`\<`T`\>

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`freeze`](ToolFunc.md#freeze)

***

### fromEntries()

#### Call Signature

> `static` **fromEntries**\<`T`\>(`entries`): `object`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2019.object.d.ts:26

Returns an object created by key-value entries for properties and methods

##### Type Parameters

• **T** = `any`

##### Parameters

###### entries

`Iterable`\<readonly \[`PropertyKey`, `T`\]\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`object`

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`fromEntries`](ToolFunc.md#fromentries)

#### Call Signature

> `static` **fromEntries**(`entries`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2019.object.d.ts:32

Returns an object created by key-value entries for properties and methods

##### Parameters

###### entries

`Iterable`\<readonly `any`[]\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`any`

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`fromEntries`](ToolFunc.md#fromentries)

***

### get()

> `static` **get**(`name`): [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:61](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L61)

#### Parameters

##### name

`string`

#### Returns

[`ToolFunc`](ToolFunc.md)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`get`](ToolFunc.md#get)

***

### getAllByTag()

> `static` **getAllByTag**(`tagName`): [`ToolFunc`](ToolFunc.md)[]

Defined in: [packages/ai-tool/src/tool-func.ts:93](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L93)

#### Parameters

##### tagName

`string`

#### Returns

[`ToolFunc`](ToolFunc.md)[]

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getAllByTag`](ToolFunc.md#getallbytag)

***

### getByTag()

> `static` **getByTag**(`tagName`): `undefined` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:73](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L73)

#### Parameters

##### tagName

`string`

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getByTag`](ToolFunc.md#getbytag)

***

### getFunc()

> `static` **getFunc**(`name`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:134](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L134)

#### Parameters

##### name

`string`

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getFunc`](ToolFunc.md#getfunc-2)

***

### getFuncWithPos()

> `static` **getFuncWithPos**(`name`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:155](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L155)

#### Parameters

##### name

`string`

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getFuncWithPos`](ToolFunc.md#getfuncwithpos-2)

***

### getOwnPropertyDescriptor()

> `static` **getOwnPropertyDescriptor**(`o`, `p`): `undefined` \| `PropertyDescriptor`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:175

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

#### Parameters

##### o

`any`

Object that contains the property.

##### p

`PropertyKey`

Name of the property.

#### Returns

`undefined` \| `PropertyDescriptor`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getOwnPropertyDescriptor`](ToolFunc.md#getownpropertydescriptor)

***

### getOwnPropertyDescriptors()

> `static` **getOwnPropertyDescriptors**\<`T`\>(`o`): \{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:48

Returns an object containing all own property descriptors of an object

#### Type Parameters

• **T**

#### Parameters

##### o

`T`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

#### Returns

\{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getOwnPropertyDescriptors`](ToolFunc.md#getownpropertydescriptors)

***

### getOwnPropertyNames()

> `static` **getOwnPropertyNames**(`o`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:182

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

#### Parameters

##### o

`any`

Object that contains the own properties.

#### Returns

`string`[]

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getOwnPropertyNames`](ToolFunc.md#getownpropertynames)

***

### getOwnPropertySymbols()

> `static` **getOwnPropertySymbols**(`o`): `symbol`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:319

Returns an array of all symbol properties found directly on object o.

#### Parameters

##### o

`any`

Object to retrieve the symbols from.

#### Returns

`symbol`[]

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getOwnPropertySymbols`](ToolFunc.md#getownpropertysymbols)

***

### getProperties()

> `static` **getProperties**(): `PropDescriptors`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:10

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getProperties`](ToolFunc.md#getproperties-2)

***

### getPrototypeOf()

> `static` **getPrototypeOf**(`o`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:167

Returns the prototype of an object.

#### Parameters

##### o

`any`

The object that references the prototype.

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getPrototypeOf`](ToolFunc.md#getprototypeof)

***

### hasAsyncFeature()

> `static` **hasAsyncFeature**(`feature`): `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:111](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L111)

#### Parameters

##### feature

[`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`hasAsyncFeature`](ToolFunc.md#hasasyncfeature-2)

***

### hasOwn()

> `static` **hasOwn**(`o`, `v`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2022.object.d.ts:25

Determines whether an object has a property with the specified name.

#### Parameters

##### o

`object`

An object.

##### v

`PropertyKey`

A property name.

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`hasOwn`](ToolFunc.md#hasown)

***

### is()

> `static` **is**(`value1`, `value2`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:332

Returns true if the values are the same value, false otherwise.

#### Parameters

##### value1

`any`

The first value.

##### value2

`any`

The second value.

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`is`](ToolFunc.md#is)

***

### isExtensible()

> `static` **isExtensible**(`o`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:258

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

##### o

`any`

Object to test.

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`isExtensible`](ToolFunc.md#isextensible)

***

### isFrozen()

> `static` **isFrozen**(`o`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:252

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

#### Parameters

##### o

`any`

Object to test.

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`isFrozen`](ToolFunc.md#isfrozen)

***

### isSealed()

> `static` **isSealed**(`o`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:246

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

#### Parameters

##### o

`any`

Object to test.

#### Returns

`boolean`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`isSealed`](ToolFunc.md#issealed)

***

### keys()

#### Call Signature

> `static` **keys**(`o`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:264

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

###### o

`object`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`keys`](ToolFunc.md#keys)

#### Call Signature

> `static` **keys**(`o`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:325

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`keys`](ToolFunc.md#keys)

***

### list()

> `static` **list**(): [`Funcs`](../interfaces/Funcs.md)

Defined in: [packages/ai-tool/src/tool-func.ts:69](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L69)

#### Returns

[`Funcs`](../interfaces/Funcs.md)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`list`](ToolFunc.md#list)

***

### preventExtensions()

> `static` **preventExtensions**\<`T`\>(`o`): `T`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:240

Prevents the addition of new properties to an object.

#### Type Parameters

• **T**

#### Parameters

##### o

`T`

Object to make non-extensible.

#### Returns

`T`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`preventExtensions`](ToolFunc.md#preventextensions)

***

### register()

#### Call Signature

> `static` **register**(`name`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:160](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L160)

##### Parameters

###### name

`string`

###### options

[`FuncItem`](../interfaces/FuncItem.md)

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`register`](ToolFunc.md#register-2)

#### Call Signature

> `static` **register**(`func`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:161](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L161)

##### Parameters

###### func

`Function`

###### options

[`FuncItem`](../interfaces/FuncItem.md)

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`register`](ToolFunc.md#register-2)

#### Call Signature

> `static` **register**(`name`, `options`?): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:162](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L162)

##### Parameters

###### name

`string` | `Function` | [`ToolFunc`](ToolFunc.md) | [`FuncItem`](../interfaces/FuncItem.md)

###### options?

[`FuncItem`](../interfaces/FuncItem.md)

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`register`](ToolFunc.md#register-2)

***

### run()

> `static` **run**(`name`, `params`?): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:118](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L118)

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`run`](ToolFunc.md#run-2)

***

### runSync()

> `static` **runSync**(`name`, `params`?): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:126](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L126)

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runSync`](ToolFunc.md#runsync-2)

***

### runWithPos()

> `static` **runWithPos**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:139](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L139)

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runWithPos`](ToolFunc.md#runwithpos-2)

***

### runWithPosSync()

> `static` **runWithPosSync**(`name`, ...`params`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:147](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L147)

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runWithPosSync`](ToolFunc.md#runwithpossync-2)

***

### seal()

> `static` **seal**\<`T`\>(`o`): `T`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:216

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type Parameters

• **T**

#### Parameters

##### o

`T`

Object on which to lock the attributes.

#### Returns

`T`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`seal`](ToolFunc.md#seal)

***

### setPrototypeOf()

> `static` **setPrototypeOf**(`o`, `proto`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:339

Sets the prototype of a specified object o to object proto or null. Returns the object o.

#### Parameters

##### o

`any`

The object to change its prototype.

##### proto

The value of the new prototype or null.

`null` | `object`

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`setPrototypeOf`](ToolFunc.md#setprototypeof)

***

### unregister()

> `static` **unregister**(`name`): `undefined` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:207](https://github.com/isdk/ai-tool.js/blob/b0ee9498dddfa5222989cf00502bb34c601df743/src/tool-func.ts#L207)

#### Parameters

##### name

`string`

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`unregister`](ToolFunc.md#unregister-2)

***

### values()

#### Call Signature

> `static` **values**\<`T`\>(`o`): `T`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:24

Returns an array of values of the enumerable own properties of an object

##### Type Parameters

• **T**

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

\{\} | `ArrayLike`\<`T`\>

##### Returns

`T`[]

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`values`](ToolFunc.md#values)

#### Call Signature

> `static` **values**(`o`): `any`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:30

Returns an array of values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`any`[]

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`values`](ToolFunc.md#values)
