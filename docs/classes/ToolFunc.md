[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ToolFunc

# Class: ToolFunc

Defined in: [packages/ai-tool/src/tool-func.ts:51](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L51)

## Extends

- [`BaseFunc`](../interfaces/BaseFunc.md).`AdvancePropertyManager`

## Extended by

- [`ClientTools`](ClientTools.md)
- [`ServerTools`](ServerTools.md)
- [`EventToolFunc`](EventToolFunc.md)

## Indexable

\[`name`: `string`\]: `any`

## Constructors

### new ToolFunc()

> **new ToolFunc**(`name`, `options`): [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:192](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L192)

#### Parameters

##### name

`string` | `Function` | [`FuncItem`](../interfaces/FuncItem.md)

##### options

`any` = `{}`

#### Returns

[`ToolFunc`](ToolFunc.md)

#### Inherited from

`BaseFunc.constructor`

## Properties

### $attributes

> **$attributes**: `Properties`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:5

***

### constructor

> **constructor**: `Function`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:125

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

***

### defaultOptions

> **defaultOptions**: `object`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:74

The default options for export and assign

#### assign?

> `optional` **assign**: `IMergeOptions`

#### export?

> `optional` **export**: `IMergeOptions`

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:29](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L29)

#### Inherited from

[`BaseFunc`](../interfaces/BaseFunc.md).[`isApi`](../interfaces/BaseFunc.md#isapi)

***

### name?

> `optional` **name**: `string`

Defined in: [packages/ai-tool/src/tool-func.ts:23](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L23)

#### Inherited from

[`BaseFunc`](../interfaces/BaseFunc.md).[`name`](../interfaces/BaseFunc.md#name)

***

### nonExported1stChar

> **nonExported1stChar**: `string`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:78

the property with the default prefix '$' will not be exported.

***

### params?

> `optional` **params**: [`FuncParams`](../interfaces/FuncParams.md) \| [`FuncParam`](../interfaces/FuncParam.md)[]

Defined in: [packages/ai-tool/src/tool-func.ts:24](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L24)

#### Inherited from

[`BaseFunc`](../interfaces/BaseFunc.md).[`params`](../interfaces/BaseFunc.md#params)

***

### result?

> `optional` **result**: `string`

Defined in: [packages/ai-tool/src/tool-func.ts:25](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L25)

#### Inherited from

[`BaseFunc`](../interfaces/BaseFunc.md).[`result`](../interfaces/BaseFunc.md#result)

***

### scope?

> `optional` **scope**: `any`

Defined in: [packages/ai-tool/src/tool-func.ts:26](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L26)

#### Inherited from

[`BaseFunc`](../interfaces/BaseFunc.md).[`scope`](../interfaces/BaseFunc.md#scope)

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

Defined in: [packages/ai-tool/src/tool-func.ts:28](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L28)

#### Parameters

##### this

[`ToolFunc`](ToolFunc.md)

##### options?

[`FuncItem`](../interfaces/FuncItem.md)

#### Returns

`void`

#### Inherited from

[`BaseFunc`](../interfaces/BaseFunc.md).[`setup`](../interfaces/BaseFunc.md#setup)

***

### stream?

> `optional` **stream**: `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:30](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L30)

#### Inherited from

[`BaseFunc`](../interfaces/BaseFunc.md).[`stream`](../interfaces/BaseFunc.md#stream)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: [packages/ai-tool/src/tool-func.ts:27](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L27)

#### Inherited from

[`BaseFunc`](../interfaces/BaseFunc.md).[`tags`](../interfaces/BaseFunc.md#tags)

***

### dataPath

> `static` **dataPath**: `string`

Defined in: [packages/ai-tool/src/tool-func.ts:57](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L57)

***

### items

> `static` **items**: [`Funcs`](../interfaces/Funcs.md) = `{}`

Defined in: [packages/ai-tool/src/tool-func.ts:56](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L56)

## Methods

### arr2ObjParams()

> **arr2ObjParams**(`params`): `any`[]

Defined in: [packages/ai-tool/src/tool-func.ts:236](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L236)

#### Parameters

##### params

`any`[]

#### Returns

`any`[]

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

***

### func()

> **func**(...`params`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:38](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L38)

#### Parameters

##### params

...`any`

#### Returns

`any`

#### Inherited from

[`BaseFunc`](../interfaces/BaseFunc.md).[`func`](../interfaces/BaseFunc.md#func)

***

### getFunc()

> **getFunc**(`name`?): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:289](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L289)

#### Parameters

##### name?

`string`

#### Returns

`any`

***

### getFuncWithPos()

> **getFuncWithPos**(`name`?): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:313](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L313)

#### Parameters

##### name?

`string`

#### Returns

`any`

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:98

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

***

### hasAsyncFeature()

> **hasAsyncFeature**(`feature`): `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:318](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L318)

#### Parameters

##### feature

[`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

#### Returns

`boolean`

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

***

### isStream()

> **isStream**(`params`): `undefined` \| `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:324](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L324)

#### Parameters

##### params

`any`

#### Returns

`undefined` \| `boolean`

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

***

### obj2ArrParams()

> **obj2ArrParams**(`params`?): `any`[]

Defined in: [packages/ai-tool/src/tool-func.ts:249](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L249)

#### Parameters

##### params?

`any`

#### Returns

`any`[]

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

***

### register()

> **register**(): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:219](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L219)

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

***

### run()

> **run**(`params`?): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:276](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L276)

#### Parameters

##### params?

`any`

#### Returns

`Promise`\<`any`\>

***

### runAs()

> **runAs**(`name`, `params`?): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:280](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L280)

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`Promise`\<`any`\>

***

### runAsSync()

> **runAsSync**(`name`, `params`?): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:284](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L284)

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`any`

***

### runSync()

> **runSync**(`params`?): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:262](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L262)

#### Parameters

##### params?

`any`

#### Returns

`any`

***

### runWithPos()

> **runWithPos**(...`params`): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:305](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L305)

#### Parameters

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

***

### runWithPosAs()

> **runWithPosAs**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:309](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L309)

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

***

### runWithPosAsSync()

> **runWithPosAsSync**(`name`, ...`params`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:301](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L301)

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`any`

***

### runWithPosSync()

> **runWithPosSync**(...`params`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:294](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L294)

#### Parameters

##### params

...`any`[]

#### Returns

`any`

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:182

#### Returns

`any`

***

### toLocaleString()

> **toLocaleString**(): `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:131

Returns a date converted to a string using the current locale.

#### Returns

`string`

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

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:128

Returns a string representation of an object.

#### Returns

`string`

***

### unregister()

> **unregister**(): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:232](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L232)

#### Returns

`any`

***

### valueOf()

> **valueOf**(): `Object`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:134

Returns the primitive value of the specified object.

#### Returns

`Object`

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

#### Call Signature

> `static` **entries**(`o`): \[`string`, `any`\][]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:42

Returns an array of key/values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

\[`string`, `any`\][]

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

***

### get()

> `static` **get**(`name`): [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:59](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L59)

#### Parameters

##### name

`string`

#### Returns

[`ToolFunc`](ToolFunc.md)

***

### getAllByTag()

> `static` **getAllByTag**(`tagName`): [`ToolFunc`](ToolFunc.md)[]

Defined in: [packages/ai-tool/src/tool-func.ts:87](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L87)

#### Parameters

##### tagName

`string`

#### Returns

[`ToolFunc`](ToolFunc.md)[]

***

### getByTag()

> `static` **getByTag**(`tagName`): `undefined` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:67](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L67)

#### Parameters

##### tagName

`string`

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

***

### getFunc()

> `static` **getFunc**(`name`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:128](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L128)

#### Parameters

##### name

`string`

#### Returns

`any`

***

### getFuncWithPos()

> `static` **getFuncWithPos**(`name`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:149](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L149)

#### Parameters

##### name

`string`

#### Returns

`any`

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

***

### getProperties()

> `static` **getProperties**(): `PropDescriptors`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:10

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

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

***

### hasAsyncFeature()

> `static` **hasAsyncFeature**(`feature`): `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:105](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L105)

#### Parameters

##### feature

[`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

#### Returns

`boolean`

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

#### Call Signature

> `static` **keys**(`o`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:325

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

***

### list()

> `static` **list**(): [`Funcs`](../interfaces/Funcs.md)

Defined in: [packages/ai-tool/src/tool-func.ts:63](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L63)

#### Returns

[`Funcs`](../interfaces/Funcs.md)

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

***

### register()

#### Call Signature

> `static` **register**(`name`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:154](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L154)

##### Parameters

###### name

`string`

###### options

[`FuncItem`](../interfaces/FuncItem.md)

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Call Signature

> `static` **register**(`func`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:155](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L155)

##### Parameters

###### func

`Function`

###### options

[`FuncItem`](../interfaces/FuncItem.md)

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Call Signature

> `static` **register**(`name`, `options`?): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:156](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L156)

##### Parameters

###### name

`string` | `Function` | [`ToolFunc`](ToolFunc.md) | [`FuncItem`](../interfaces/FuncItem.md)

###### options?

[`FuncItem`](../interfaces/FuncItem.md)

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

***

### run()

> `static` **run**(`name`, `params`?): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:112](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L112)

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`Promise`\<`any`\>

***

### runSync()

> `static` **runSync**(`name`, `params`?): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:120](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L120)

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`any`

***

### runWithPos()

> `static` **runWithPos**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:133](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L133)

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

***

### runWithPosSync()

> `static` **runWithPosSync**(`name`, ...`params`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:141](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L141)

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`any`

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

***

### unregister()

> `static` **unregister**(`name`): `undefined` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:184](https://github.com/isdk/ai-tool.js/blob/83a1524a1644365964efc043a7a7991d8fd46b49/src/tool-func.ts#L184)

#### Parameters

##### name

`string`

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

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

#### Call Signature

> `static` **values**(`o`): `any`[]

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:30

Returns an array of values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`any`[]
