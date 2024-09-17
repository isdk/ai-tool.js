[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / ResClientTools

# Class: ResClientTools

## Extends

- `RpcMethodsClientTool`

## Extended by

- [`EventClient`](EventClient.md)

## Constructors

### new ResClientTools()

> **new ResClientTools**(`name`, `options`): [`ResClientTools`](ResClientTools.md)

#### Parameters

• **name**: `string` \| `Function` \| [`FuncItem`](../interfaces/FuncItem.md)

• **options**: `any` = `{}`

#### Returns

[`ResClientTools`](ResClientTools.md)

#### Defined in

[packages/ai-tool/src/tool-func.ts:210](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L210)

## Properties

### $attributes

> **$attributes**: `Properties`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:5

***

### action?

> `optional` **action**: `"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"`

#### Defined in

[packages/ai-tool/src/utils/consts.ts:35](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/utils/consts.ts#L35)

***

### apiRoot

> **apiRoot**: `undefined` \| `string`

#### Defined in

[packages/ai-tool/src/client-tools.ts:16](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/client-tools.ts#L16)

***

### constructor

> **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

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

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:74

***

### fetchOptions?

> `optional` **fetchOptions**: `any`

#### Defined in

[packages/ai-tool/src/utils/consts.ts:36](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/utils/consts.ts#L36)

***

### isApi?

> `optional` **isApi**: `boolean`

#### Defined in

[packages/ai-tool/src/tool-func.ts:47](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L47)

***

### name?

> `optional` **name**: `string`

#### Defined in

[packages/ai-tool/src/tool-func.ts:41](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L41)

***

### nonExported1stChar

> **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:78

***

### params?

> `optional` **params**: [`FuncParams`](../interfaces/FuncParams.md) \| [`FuncParam`](../interfaces/FuncParam.md)[]

#### Defined in

[packages/ai-tool/src/tool-func.ts:42](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L42)

***

### result?

> `optional` **result**: `string`

#### Defined in

[packages/ai-tool/src/tool-func.ts:43](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L43)

***

### scope?

> `optional` **scope**: `any`

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

#### Defined in

[packages/ai-tool/src/tool-func.ts:46](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L46)

***

### should

> **should**: `Assertion`

#### Defined in

node\_modules/.pnpm/@types+chai@4.3.16/node\_modules/@types/chai/index.d.ts:2100

***

### stream?

> `optional` **stream**: `boolean`

#### Defined in

[packages/ai-tool/src/tool-func.ts:48](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L48)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

#### Defined in

[packages/ai-tool/src/tool-func.ts:45](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L45)

***

### dataPath

> `static` **dataPath**: `string`

#### Defined in

[packages/ai-tool/src/tool-func.ts:75](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L75)

***

### items

> `static` **items**: [`Funcs`](../interfaces/Funcs.md) = `{}`

#### Defined in

[packages/ai-tool/src/tool-func.ts:74](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L74)

## Accessors

### apiRoot

> `get` `static` **apiRoot**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/ai-tool/src/client-tools.ts:19](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/client-tools.ts#L19)

## Methods

### \_func()

> **\_func**(`action`, `options`): `Promise`\<`any`\>

#### Parameters

• **action**: `"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"`

• **options**: `RpcMethodsClientFuncParams`

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool/src/rpc-methods-client-tool.ts:10](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/rpc-methods-client-tool.ts#L10)

***

### arr2ObjParams()

> **arr2ObjParams**(`params`): `any`[]

#### Parameters

• **params**: `any`[]

#### Returns

`any`[]

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

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:106

***

### assignMethods()

> **assignMethods**(`methods`): `void`

#### Parameters

• **methods**: `string`[]

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/rpc-methods-client-tool.ts:27](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/rpc-methods-client-tool.ts#L27)

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

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:89

***

### delete()?

> `optional` **delete**(`__namedParameters`): `any`

#### Parameters

• **\_\_namedParameters**: [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md)

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:13](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/res-client-tools.ts#L13)

***

### errorFrom()

> **errorFrom**(`res`): `Promise`\<[`CommonError`](CommonError.md)\>

#### Parameters

• **res**: `Response`

#### Returns

`Promise`\<[`CommonError`](CommonError.md)\>

#### Defined in

[packages/ai-tool/src/client-tools.ts:112](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/client-tools.ts#L112)

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

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:173

***

### fetch()

> **fetch**(`options`, `action`): `Promise`\<`Response`\>

#### Parameters

• **options**: [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md)

• **action**: `"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"`

#### Returns

`Promise`\<`Response`\>

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:18](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/res-client-tools.ts#L18)

***

### func()

> **func**(`options`): `Promise`\<`any`\>

#### Parameters

• **options**: `RpcMethodsClientFuncParams`

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool/src/rpc-methods-client-tool.ts:19](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/rpc-methods-client-tool.ts#L19)

***

### get()?

> `optional` **get**(`__namedParameters`): `any`

#### Parameters

• **\_\_namedParameters**: [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md)

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:10](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/res-client-tools.ts#L10)

***

### getFunc()

> **getFunc**(`name`?): `any`

#### Parameters

• **name?**: `string`

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/tool-func.ts:307](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L307)

***

### getFuncWithPos()

> **getFuncWithPos**(`name`?): `any`

#### Parameters

• **name?**: `string`

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/tool-func.ts:331](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L331)

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:98

***

### getUrlParams()

> **getUrlParams**(`objParam`): `string`

#### Parameters

• **objParam**: `any`

#### Returns

`string`

#### Defined in

[packages/ai-tool/src/client-tools.ts:63](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/client-tools.ts#L63)

***

### hasAsyncFeature()

> **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

• **feature**: [`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

#### Returns

`boolean`

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

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:200

***

### isStream()

> **isStream**(`params`): `undefined` \| `boolean`

#### Parameters

• **params**: `any`

#### Returns

`undefined` \| `boolean`

#### Defined in

[packages/ai-tool/src/tool-func.ts:342](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L342)

***

### list()?

> `optional` **list**(`options`): `any`

#### Parameters

• **options**: [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md)

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:14](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/res-client-tools.ts#L14)

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

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:164

***

### obj2ArrParams()

> **obj2ArrParams**(`params`?): `any`[]

#### Parameters

• **params?**: `any`

#### Returns

`any`[]

#### Defined in

[packages/ai-tool/src/tool-func.ts:267](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L267)

***

### post()?

> `optional` **post**(`options`): `any`

#### Parameters

• **options**: [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md)

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:11](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/res-client-tools.ts#L11)

***

### propertyIsEnumerable()

> **propertyIsEnumerable**(`v`): `boolean`

Determines whether a specified property is enumerable.

#### Parameters

• **v**: `PropertyKey`

A property name.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:152

***

### put()?

> `optional` **put**(`__namedParameters`): `any`

#### Parameters

• **\_\_namedParameters**: [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md)

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:12](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/res-client-tools.ts#L12)

***

### register()

> **register**(): `boolean` \| [`ToolFunc`](ToolFunc.md)

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Defined in

[packages/ai-tool/src/tool-func.ts:237](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L237)

***

### run()

> **run**(`params`?): `Promise`\<`any`\>

#### Parameters

• **params?**: `any`

#### Returns

`Promise`\<`any`\>

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

#### Defined in

[packages/ai-tool/src/tool-func.ts:302](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L302)

***

### runSync()

> **runSync**(`params`?): `any`

#### Parameters

• **params?**: `any`

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/tool-func.ts:280](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L280)

***

### runWithPos()

> **runWithPos**(...`params`): `Promise`\<`any`\>

#### Parameters

• ...**params**: `any`[]

#### Returns

`Promise`\<`any`\>

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

#### Defined in

[packages/ai-tool/src/tool-func.ts:319](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L319)

***

### runWithPosSync()

> **runWithPosSync**(...`params`): `any`

#### Parameters

• ...**params**: `any`[]

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/tool-func.ts:312](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L312)

***

### toJSON()

> **toJSON**(): `any`

#### Returns

`any`

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:182

***

### toLocaleString()

> **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

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

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:181

***

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:128

***

### unregister()

> **unregister**(): `any`

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/tool-func.ts:250](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L250)

***

### valueOf()

> **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

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

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:42

***

### fetch()

> `static` **fetch**(`name`, `objParam`?): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• **objParam?**: `any`

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool/src/client-tools.ts:56](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/client-tools.ts#L56)

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

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2019.object.d.ts:32

***

### get()

> `static` **get**(`name`): [`ToolFunc`](ToolFunc.md)

#### Parameters

• **name**: `string`

#### Returns

[`ToolFunc`](ToolFunc.md)

#### Defined in

[packages/ai-tool/src/tool-func.ts:77](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L77)

***

### getAllByTag()

> `static` **getAllByTag**(`tagName`): [`ToolFunc`](ToolFunc.md)[]

#### Parameters

• **tagName**: `string`

#### Returns

[`ToolFunc`](ToolFunc.md)[]

#### Defined in

[packages/ai-tool/src/tool-func.ts:105](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L105)

***

### getByTag()

> `static` **getByTag**(`tagName`): `undefined` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

• **tagName**: `string`

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

#### Defined in

[packages/ai-tool/src/tool-func.ts:85](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L85)

***

### getFunc()

> `static` **getFunc**(`name`): `any`

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/tool-func.ts:146](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L146)

***

### getFuncWithPos()

> `static` **getFuncWithPos**(`name`): `any`

#### Parameters

• **name**: `string`

#### Returns

`any`

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

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:319

***

### getProperties()

> `static` **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

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

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:167

***

### hasAsyncFeature()

> `static` **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

• **feature**: [`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

#### Returns

`boolean`

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

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:325

***

### list()

> `static` **list**(): [`Funcs`](../interfaces/Funcs.md)

#### Returns

[`Funcs`](../interfaces/Funcs.md)

#### Defined in

[packages/ai-tool/src/tool-func.ts:81](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L81)

***

### loadFrom()

> `static` **loadFrom**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ai-tool/src/client-tools.ts:29](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/client-tools.ts#L29)

***

### loadFromSync()

> `static` **loadFromSync**(`items`): `void`

#### Parameters

• **items**: [`Funcs`](../interfaces/Funcs.md)

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/client-tools.ts:41](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/client-tools.ts#L41)

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

##### Defined in

[packages/ai-tool/src/tool-func.ts:172](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L172)

#### register(func, options)

> `static` **register**(`func`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

##### Parameters

• **func**: `Function`

• **options**: [`FuncItem`](../interfaces/FuncItem.md)

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

##### Defined in

[packages/ai-tool/src/tool-func.ts:173](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/tool-func.ts#L173)

#### register(name, options)

> `static` **register**(`name`, `options`?): `boolean` \| [`ToolFunc`](ToolFunc.md)

##### Parameters

• **name**: `string` \| `Function` \| [`ToolFunc`](ToolFunc.md) \| [`FuncItem`](../interfaces/FuncItem.md)

• **options?**: [`FuncItem`](../interfaces/FuncItem.md)

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

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

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:216

***

### setApiRoot()

> `static` **setApiRoot**(`v`): `void`

#### Parameters

• **v**: `string`

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/client-tools.ts:23](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/client-tools.ts#L23)

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

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:339

***

### unregister()

> `static` **unregister**(`name`): `undefined` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

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

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:30
