[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / EventServer

# Class: EventServer

## Extends

- [`ResServerTools`](ResServerTools.md)

## Constructors

### new EventServer()

> **new EventServer**(`name`, `options`): [`EventServer`](EventServer.md)

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Parameters

• **name**: `string` \| `Function` \| [`FuncItem`](../interfaces/FuncItem.md)

• **options**: `any` = `{}`

#### Returns

[`EventServer`](EventServer.md)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`constructor`](ResServerTools.md#constructors)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:27](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/res-server-tools.ts#L27)

## Properties

### $attributes

> **$attributes**: `Properties`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`$attributes`](ResServerTools.md#$attributes)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:5

***

### action

> **action**: `"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"` = `'res'`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`action`](ResServerTools.md#action)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:21](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/res-server-tools.ts#L21)

***

### allowExportFunc?

> `optional` **allowExportFunc**: `boolean`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`allowExportFunc`](ResServerTools.md#allowexportfunc)

#### Defined in

[packages/ai-tool/src/server-tools.ts:14](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/server-tools.ts#L14)

***

### apiRoot?

> `optional` **apiRoot**: `string`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`apiRoot`](ResServerTools.md#apiroot)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:34](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/consts.ts#L34)

***

### constructor

> **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

`ResServerTools.constructor`

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

[`ResServerTools`](ResServerTools.md).[`defaultOptions`](ResServerTools.md#defaultoptions)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:74

***

### depends

> **depends**: `object`

#### event-bus

> **event-bus**: [`EventToolFunc`](EventToolFunc.md) = `event`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:30](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/funcs/event-server.ts#L30)

***

### description

> **description**: `string` = `'subscribe server sent event'`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:28](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/funcs/event-server.ts#L28)

***

### fetchOptions?

> `optional` **fetchOptions**: `any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`fetchOptions`](ResServerTools.md#fetchoptions)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:36](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/consts.ts#L36)

***

### isApi?

> `optional` **isApi**: `boolean`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`isApi`](ResServerTools.md#isapi)

#### Defined in

[packages/ai-tool/src/tool-func.ts:47](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L47)

***

### methods

> **methods**: `string`[]

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`methods`](ResServerTools.md#methods)

#### Defined in

[packages/ai-tool/src/rpc-methods-server-tool.ts:11](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/rpc-methods-server-tool.ts#L11)

***

### name

> **name**: `string` = `EventName`

#### Overrides

[`ResServerTools`](ResServerTools.md).[`name`](ResServerTools.md#name)

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:27](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/funcs/event-server.ts#L27)

***

### nonExported1stChar

> **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`nonExported1stChar`](ResServerTools.md#nonexported1stchar)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:78

***

### params

> **params**: [`FuncParams`](../interfaces/FuncParams.md)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`params`](ResServerTools.md#params)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:22](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/res-server-tools.ts#L22)

***

### result

> **result**: `string` = `'event'`

#### Overrides

[`ResServerTools`](ResServerTools.md).[`result`](ResServerTools.md#result)

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:29](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/funcs/event-server.ts#L29)

***

### scope?

> `optional` **scope**: `any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`scope`](ResServerTools.md#scope)

#### Defined in

[packages/ai-tool/src/tool-func.ts:44](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L44)

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

#### Parameters

• **this**: [`ToolFunc`](ToolFunc.md)

• **options?**: [`FuncItem`](../interfaces/FuncItem.md)

#### Returns

`void`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`setup`](ResServerTools.md#setup)

#### Defined in

[packages/ai-tool/src/tool-func.ts:46](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L46)

***

### should

> **should**: `Assertion`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`should`](ResServerTools.md#should)

#### Defined in

node\_modules/.pnpm/@types+chai@4.3.16/node\_modules/@types/chai/index.d.ts:2100

***

### stream?

> `optional` **stream**: `boolean`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`stream`](ResServerTools.md#stream)

#### Defined in

[packages/ai-tool/src/tool-func.ts:48](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L48)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`tags`](ResServerTools.md#tags)

#### Defined in

[packages/ai-tool/src/tool-func.ts:45](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L45)

***

### \_sse

> `static` **\_sse**: `undefined` \| [`SSEChannel`](SSEChannel.md)

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:19](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/funcs/event-server.ts#L19)

***

### dataPath

> `static` **dataPath**: `string`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`dataPath`](ResServerTools.md#datapath)

#### Defined in

[packages/ai-tool/src/tool-func.ts:75](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L75)

***

### ebListener()

> `static` **ebListener**: (`this`, ...`data`) => `void`

#### Parameters

• **this**: `Event`

• ...**data**: `any`[]

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:42](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/funcs/event-server.ts#L42)

***

### items

> `static` **items**: [`Funcs`](../interfaces/Funcs.md) = `{}`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`items`](ResServerTools.md#items)

#### Defined in

[packages/ai-tool/src/tool-func.ts:74](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L74)

***

### SpecialRpcMethodNames

> `static` **SpecialRpcMethodNames**: `any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`SpecialRpcMethodNames`](ResServerTools.md#specialrpcmethodnames)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:20](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/res-server-tools.ts#L20)

## Accessors

### SpecialRpcMethodNames

> `get` **SpecialRpcMethodNames**(): `any`

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`SpecialRpcMethodNames`](ResServerTools.md#specialrpcmethodnames-1)

#### Defined in

[packages/ai-tool/src/rpc-methods-server-tool.ts:22](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/rpc-methods-server-tool.ts#L22)

***

### sse

> `get` **sse**(): `any`

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:32](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/funcs/event-server.ts#L32)

***

### apiRoot

> `get` `static` **apiRoot**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`apiRoot`](ResServerTools.md#apiroot-1)

#### Defined in

[packages/ai-tool/src/server-tools.ts:26](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/server-tools.ts#L26)

***

### sse

> `get` `static` **sse**(): [`SSEChannel`](SSEChannel.md)

#### Returns

[`SSEChannel`](SSEChannel.md)

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:20](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/funcs/event-server.ts#L20)

## Methods

### $publish()

> **$publish**(`__namedParameters`): `undefined` \| `object`

#### Parameters

• **\_\_namedParameters**: [`EventServerFuncParams`](../interfaces/EventServerFuncParams.md)

#### Returns

`undefined` \| `object`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:113](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/funcs/event-server.ts#L113)

***

### $sub()

> **$sub**(`__namedParameters`): `undefined` \| `object`

#### Parameters

• **\_\_namedParameters**: [`EventServerFuncParams`](../interfaces/EventServerFuncParams.md)

#### Returns

`undefined` \| `object`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:95](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/funcs/event-server.ts#L95)

***

### $unsub()

> **$unsub**(`__namedParameters`): `undefined` \| `object`

#### Parameters

• **\_\_namedParameters**: [`EventServerFuncParams`](../interfaces/EventServerFuncParams.md)

#### Returns

`undefined` \| `object`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:104](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/funcs/event-server.ts#L104)

***

### arr2ObjParams()

> **arr2ObjParams**(`params`): `any`[]

#### Parameters

• **params**: `any`[]

#### Returns

`any`[]

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`arr2ObjParams`](ResServerTools.md#arr2objparams)

#### Defined in

[packages/ai-tool/src/tool-func.ts:254](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L254)

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

[`ResServerTools`](ResServerTools.md).[`assign`](ResServerTools.md#assign-1)

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

[`ResServerTools`](ResServerTools.md).[`assignProperty`](ResServerTools.md#assignproperty)

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

[`ResServerTools`](ResServerTools.md).[`assignPropertyTo`](ResServerTools.md#assignpropertyto)

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

[`ResServerTools`](ResServerTools.md).[`assignTo`](ResServerTools.md#assignto)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:191

***

### cast()

> **cast**(`key`, `value`): `any`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`cast`](ResServerTools.md#cast)

#### Defined in

[packages/ai-tool/src/rpc-methods-server-tool.ts:48](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/rpc-methods-server-tool.ts#L48)

***

### castParams()

> **castParams**(`params`): `RpcMethodsServerFuncParams`

#### Parameters

• **params**: `RpcMethodsServerFuncParams`

#### Returns

`RpcMethodsServerFuncParams`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`castParams`](ResServerTools.md#castparams)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:40](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/res-server-tools.ts#L40)

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

[`ResServerTools`](ResServerTools.md).[`clone`](ResServerTools.md#clone)

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

[`ResServerTools`](ResServerTools.md).[`cloneTo`](ResServerTools.md#cloneto)

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

[`ResServerTools`](ResServerTools.md).[`defineProperties`](ResServerTools.md#defineproperties)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:89

***

### delete()?

> `optional` **delete**(`__namedParameters`): `any`

#### Parameters

• **\_\_namedParameters**: [`ResServerFuncParams`](../interfaces/ResServerFuncParams.md)

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`delete`](ResServerTools.md#delete)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:15](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/res-server-tools.ts#L15)

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

[`ResServerTools`](ResServerTools.md).[`exportTo`](ResServerTools.md#exportto)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:173

***

### forward()

> **forward**(`events`): `void`

#### Parameters

• **events**: `string` \| `string`[]

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:69](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/funcs/event-server.ts#L69)

***

### func()

> **func**(`params`): `any`

#### Parameters

• **params**: `RpcMethodsServerFuncParams`

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`func`](ResServerTools.md#func)

#### Defined in

[packages/ai-tool/src/rpc-methods-server-tool.ts:68](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/rpc-methods-server-tool.ts#L68)

***

### get()?

> `optional` **get**(`__namedParameters`): `any`

#### Parameters

• **\_\_namedParameters**: [`ResServerFuncParams`](../interfaces/ResServerFuncParams.md)

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`get`](ResServerTools.md#get)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:12](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/res-server-tools.ts#L12)

***

### getFunc()

> **getFunc**(`name`?): `any`

#### Parameters

• **name?**: `string`

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`getFunc`](ResServerTools.md#getfunc)

#### Defined in

[packages/ai-tool/src/tool-func.ts:307](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L307)

***

### getFuncWithPos()

> **getFuncWithPos**(`name`?): `any`

#### Parameters

• **name?**: `string`

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`getFuncWithPos`](ResServerTools.md#getfuncwithpos)

#### Defined in

[packages/ai-tool/src/tool-func.ts:331](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L331)

***

### getMethodFromParams()

> **getMethodFromParams**(`params`): `undefined` \| `string`

#### Parameters

• **params**: [`ResServerFuncParams`](../interfaces/ResServerFuncParams.md)

#### Returns

`undefined` \| `string`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`getMethodFromParams`](ResServerTools.md#getmethodfromparams)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:31](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/res-server-tools.ts#L31)

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`getProperties`](ResServerTools.md#getproperties)

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

[`ResServerTools`](ResServerTools.md).[`hasAsyncFeature`](ResServerTools.md#hasasyncfeature)

#### Defined in

[packages/ai-tool/src/tool-func.ts:336](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L336)

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

[`ResServerTools`](ResServerTools.md).[`hasOwnProperty`](ResServerTools.md#hasownproperty)

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

[`ResServerTools`](ResServerTools.md).[`initialize`](ResServerTools.md#initialize)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:139

***

### initRpcMethods()

> **initRpcMethods**(`methods`): `void`

#### Parameters

• **methods**: `string`[] = `...`

#### Returns

`void`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`initRpcMethods`](ResServerTools.md#initrpcmethods)

#### Defined in

[packages/ai-tool/src/rpc-methods-server-tool.ts:27](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/rpc-methods-server-tool.ts#L27)

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

[`ResServerTools`](ResServerTools.md).[`isPrototypeOf`](ResServerTools.md#isprototypeof)

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

[`ResServerTools`](ResServerTools.md).[`isSame`](ResServerTools.md#issame)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:200

***

### isStream()

> **isStream**(`params`): `boolean`

#### Parameters

• **params**: [`ServerFuncParams`](../interfaces/ServerFuncParams.md)

#### Returns

`boolean`

#### Overrides

[`ResServerTools`](ResServerTools.md).[`isStream`](ResServerTools.md#isstream)

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:127](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/funcs/event-server.ts#L127)

***

### list()

> **list**(`__namedParameters`): `void`

#### Parameters

• **\_\_namedParameters**: [`EventServerFuncParams`](../interfaces/EventServerFuncParams.md)

#### Returns

`void`

#### Overrides

[`ResServerTools`](ResServerTools.md).[`list`](ResServerTools.md#list)

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:89](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/funcs/event-server.ts#L89)

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

[`ResServerTools`](ResServerTools.md).[`mergeTo`](ResServerTools.md#mergeto)

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

[`ResServerTools`](ResServerTools.md).[`obj2ArrParams`](ResServerTools.md#obj2arrparams)

#### Defined in

[packages/ai-tool/src/tool-func.ts:267](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L267)

***

### post()?

> `optional` **post**(`options`): `any`

#### Parameters

• **options**: [`ResServerFuncParams`](../interfaces/ResServerFuncParams.md)

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`post`](ResServerTools.md#post)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:13](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/res-server-tools.ts#L13)

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

[`ResServerTools`](ResServerTools.md).[`propertyIsEnumerable`](ResServerTools.md#propertyisenumerable)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:152

***

### publishSSE()

> **publishSSE**(`data`, `event`): `any`

#### Parameters

• **data**: `any`

• **event**: `string`

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:57](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/funcs/event-server.ts#L57)

***

### put()?

> `optional` **put**(`__namedParameters`): `any`

#### Parameters

• **\_\_namedParameters**: [`ResServerFuncParams`](../interfaces/ResServerFuncParams.md)

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`put`](ResServerTools.md#put)

#### Defined in

[packages/ai-tool/src/res-server-tools.ts:14](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/res-server-tools.ts#L14)

***

### register()

> **register**(): `boolean` \| [`ToolFunc`](ToolFunc.md)

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`register`](ResServerTools.md#register)

#### Defined in

[packages/ai-tool/src/tool-func.ts:237](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L237)

***

### run()

> **run**(`params`?): `Promise`\<`any`\>

#### Parameters

• **params?**: `any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`run`](ResServerTools.md#run)

#### Defined in

[packages/ai-tool/src/tool-func.ts:294](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L294)

***

### runAs()

> **runAs**(`name`, `params`?): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`runAs`](ResServerTools.md#runas)

#### Defined in

[packages/ai-tool/src/tool-func.ts:298](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L298)

***

### runAsSync()

> **runAsSync**(`name`, `params`?): `any`

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`runAsSync`](ResServerTools.md#runassync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:302](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L302)

***

### runSync()

> **runSync**(`params`?): `any`

#### Parameters

• **params?**: `any`

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`runSync`](ResServerTools.md#runsync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:280](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L280)

***

### runWithPos()

> **runWithPos**(...`params`): `Promise`\<`any`\>

#### Parameters

• ...**params**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`runWithPos`](ResServerTools.md#runwithpos)

#### Defined in

[packages/ai-tool/src/tool-func.ts:323](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L323)

***

### runWithPosAs()

> **runWithPosAs**(`name`, ...`params`): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`runWithPosAs`](ResServerTools.md#runwithposas)

#### Defined in

[packages/ai-tool/src/tool-func.ts:327](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L327)

***

### runWithPosAsSync()

> **runWithPosAsSync**(`name`, ...`params`): `any`

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`runWithPosAsSync`](ResServerTools.md#runwithposassync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:319](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L319)

***

### runWithPosSync()

> **runWithPosSync**(...`params`): `any`

#### Parameters

• ...**params**: `any`[]

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`runWithPosSync`](ResServerTools.md#runwithpossync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:312](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L312)

***

### subscribeSSE()

> **subscribeSSE**(`req`, `res`, `events`?): `any`

#### Parameters

• **req**: `IncomingMessage`

• **res**: `ServerResponse`\<`IncomingMessage`\>

• **events?**: `string` \| `string`[]

#### Returns

`any`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:61](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/funcs/event-server.ts#L61)

***

### toJSON()

> **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`toJSON`](ResServerTools.md#tojson)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:182

***

### toLocaleString()

> **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`toLocaleString`](ResServerTools.md#tolocalestring)

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

[`ResServerTools`](ResServerTools.md).[`toObject`](ResServerTools.md#toobject)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:181

***

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`toString`](ResServerTools.md#tostring)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:128

***

### unforward()

> **unforward**(`events`): `void`

#### Parameters

• **events**: `string` \| `string`[]

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:80](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/funcs/event-server.ts#L80)

***

### unregister()

> **unregister**(): `any`

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`unregister`](ResServerTools.md#unregister)

#### Defined in

[packages/ai-tool/src/tool-func.ts:250](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L250)

***

### valueOf()

> **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`valueOf`](ResServerTools.md#valueof)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:134

***

### alreadyForward()

> `static` **alreadyForward**(`event`): `undefined` \| `true`

#### Parameters

• **event**: `string`

#### Returns

`undefined` \| `true`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:50](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/funcs/event-server.ts#L50)

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

[`ResServerTools`](ResServerTools.md).[`assign`](ResServerTools.md#assign-2)

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

[`ResServerTools`](ResServerTools.md).[`assign`](ResServerTools.md#assign-2)

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

[`ResServerTools`](ResServerTools.md).[`assign`](ResServerTools.md#assign-2)

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

[`ResServerTools`](ResServerTools.md).[`assign`](ResServerTools.md#assign-2)

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

[`ResServerTools`](ResServerTools.md).[`create`](ResServerTools.md#create)

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

[`ResServerTools`](ResServerTools.md).[`create`](ResServerTools.md#create)

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

[`ResServerTools`](ResServerTools.md).[`defineProperties`](ResServerTools.md#defineproperties-1)

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

[`ResServerTools`](ResServerTools.md).[`defineProperty`](ResServerTools.md#defineproperty)

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

[`ResServerTools`](ResServerTools.md).[`entries`](ResServerTools.md#entries)

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

[`ResServerTools`](ResServerTools.md).[`entries`](ResServerTools.md#entries)

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

[`ResServerTools`](ResServerTools.md).[`freeze`](ResServerTools.md#freeze)

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

[`ResServerTools`](ResServerTools.md).[`freeze`](ResServerTools.md#freeze)

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

[`ResServerTools`](ResServerTools.md).[`freeze`](ResServerTools.md#freeze)

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

[`ResServerTools`](ResServerTools.md).[`fromEntries`](ResServerTools.md#fromentries)

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

[`ResServerTools`](ResServerTools.md).[`fromEntries`](ResServerTools.md#fromentries)

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

[`ResServerTools`](ResServerTools.md).[`get`](ResServerTools.md#get-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:77](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L77)

***

### getAllByTag()

> `static` **getAllByTag**(`tagName`): [`ToolFunc`](ToolFunc.md)[]

#### Parameters

• **tagName**: `string`

#### Returns

[`ToolFunc`](ToolFunc.md)[]

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`getAllByTag`](ResServerTools.md#getallbytag)

#### Defined in

[packages/ai-tool/src/tool-func.ts:105](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L105)

***

### getByTag()

> `static` **getByTag**(`tagName`): `undefined` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

• **tagName**: `string`

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`getByTag`](ResServerTools.md#getbytag)

#### Defined in

[packages/ai-tool/src/tool-func.ts:85](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L85)

***

### getFunc()

> `static` **getFunc**(`name`): `any`

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`getFunc`](ResServerTools.md#getfunc-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:146](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L146)

***

### getFuncWithPos()

> `static` **getFuncWithPos**(`name`): `any`

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`getFuncWithPos`](ResServerTools.md#getfuncwithpos-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:167](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L167)

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

[`ResServerTools`](ResServerTools.md).[`getOwnPropertyDescriptor`](ResServerTools.md#getownpropertydescriptor)

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

[`ResServerTools`](ResServerTools.md).[`getOwnPropertyDescriptors`](ResServerTools.md#getownpropertydescriptors)

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

[`ResServerTools`](ResServerTools.md).[`getOwnPropertyNames`](ResServerTools.md#getownpropertynames)

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

[`ResServerTools`](ResServerTools.md).[`getOwnPropertySymbols`](ResServerTools.md#getownpropertysymbols)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:319

***

### getProperties()

> `static` **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`getProperties`](ResServerTools.md#getproperties-1)

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

[`ResServerTools`](ResServerTools.md).[`getPrototypeOf`](ResServerTools.md#getprototypeof)

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

[`ResServerTools`](ResServerTools.md).[`hasAsyncFeature`](ResServerTools.md#hasasyncfeature-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:123](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L123)

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

[`ResServerTools`](ResServerTools.md).[`hasOwn`](ResServerTools.md#hasown)

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

[`ResServerTools`](ResServerTools.md).[`is`](ResServerTools.md#is)

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

[`ResServerTools`](ResServerTools.md).[`isExtensible`](ResServerTools.md#isextensible)

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

[`ResServerTools`](ResServerTools.md).[`isFrozen`](ResServerTools.md#isfrozen)

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

[`ResServerTools`](ResServerTools.md).[`isSealed`](ResServerTools.md#issealed)

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

[`ResServerTools`](ResServerTools.md).[`keys`](ResServerTools.md#keys)

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

[`ResServerTools`](ResServerTools.md).[`keys`](ResServerTools.md#keys)

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:325

***

### list()

> `static` **list**(): [`Funcs`](../interfaces/Funcs.md)

#### Returns

[`Funcs`](../interfaces/Funcs.md)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`list`](ResServerTools.md#list-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:81](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L81)

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

[`ResServerTools`](ResServerTools.md).[`preventExtensions`](ResServerTools.md#preventextensions)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:240

***

### publish()

> `static` **publish**(`data`, `event`): `undefined` \| `number`

#### Parameters

• **data**: `any`

• **event**: `string`

#### Returns

`undefined` \| `number`

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:36](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/funcs/event-server.ts#L36)

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

[`ResServerTools`](ResServerTools.md).[`register`](ResServerTools.md#register-1)

##### Defined in

[packages/ai-tool/src/tool-func.ts:172](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L172)

#### register(func, options)

> `static` **register**(`func`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

##### Parameters

• **func**: `Function`

• **options**: [`FuncItem`](../interfaces/FuncItem.md)

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

##### Inherited from

[`ResServerTools`](ResServerTools.md).[`register`](ResServerTools.md#register-1)

##### Defined in

[packages/ai-tool/src/tool-func.ts:173](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L173)

#### register(name, options)

> `static` **register**(`name`, `options`?): `boolean` \| [`ToolFunc`](ToolFunc.md)

##### Parameters

• **name**: `string` \| `Function` \| [`ToolFunc`](ToolFunc.md) \| [`FuncItem`](../interfaces/FuncItem.md)

• **options?**: [`FuncItem`](../interfaces/FuncItem.md)

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

##### Inherited from

[`ResServerTools`](ResServerTools.md).[`register`](ResServerTools.md#register-1)

##### Defined in

[packages/ai-tool/src/tool-func.ts:174](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L174)

***

### run()

> `static` **run**(`name`, `params`?): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`run`](ResServerTools.md#run-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:130](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L130)

***

### runSync()

> `static` **runSync**(`name`, `params`?): `any`

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`runSync`](ResServerTools.md#runsync-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:138](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L138)

***

### runWithPos()

> `static` **runWithPos**(`name`, ...`params`): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`runWithPos`](ResServerTools.md#runwithpos-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:151](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L151)

***

### runWithPosSync()

> `static` **runWithPosSync**(`name`, ...`params`): `any`

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`runWithPosSync`](ResServerTools.md#runwithpossync-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:159](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L159)

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

[`ResServerTools`](ResServerTools.md).[`seal`](ResServerTools.md#seal)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:216

***

### setApiRoot()

> `static` **setApiRoot**(`v`): `void`

#### Parameters

• **v**: `string`

#### Returns

`void`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`setApiRoot`](ResServerTools.md#setapiroot)

#### Defined in

[packages/ai-tool/src/server-tools.ts:30](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/server-tools.ts#L30)

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

[`ResServerTools`](ResServerTools.md).[`setPrototypeOf`](ResServerTools.md#setprototypeof)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:339

***

### subscribe()

> `static` **subscribe**(`req`, `res`, `events`?): `object`

#### Parameters

• **req**: `IncomingMessage`

• **res**: `ServerResponse`\<`IncomingMessage`\>

• **events?**: `string`[]

#### Returns

`object`

##### events

> **events**: `undefined` \| `Events`

##### req

> **req**: `IncomingMessage`

##### res

> **res**: `ServerResponse`\<`IncomingMessage`\>

#### Defined in

[packages/ai-tool/src/funcs/event-server.ts:46](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/funcs/event-server.ts#L46)

***

### toJSON()

> `static` **toJSON**(): `object`

#### Returns

`object`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`toJSON`](ResServerTools.md#tojson-1)

#### Defined in

[packages/ai-tool/src/server-tools.ts:44](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/server-tools.ts#L44)

***

### unregister()

> `static` **unregister**(`name`): `undefined` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

• **name**: `string`

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`unregister`](ResServerTools.md#unregister-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:202](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/tool-func.ts#L202)

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

[`ResServerTools`](ResServerTools.md).[`values`](ResServerTools.md#values)

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

[`ResServerTools`](ResServerTools.md).[`values`](ResServerTools.md#values)

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:30
