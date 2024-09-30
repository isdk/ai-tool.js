[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / EventClient

# Class: EventClient

## Extends

- [`ResClientTools`](ResClientTools.md)

## Constructors

### new EventClient()

> **new EventClient**(`name`, `options`): [`EventClient`](EventClient.md)

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Parameters

• **name**: `string` \| `Function` \| [`FuncItem`](../interfaces/FuncItem.md)

• **options**: `any` = `{}`

#### Returns

[`EventClient`](EventClient.md)

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`constructor`](ResClientTools.md#constructors)

#### Defined in

[packages/ai-tool/src/tool-func.ts:210](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L210)

## Properties

### \_es

> **\_es**: `undefined` \| `EventSource`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:13](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/funcs/event-client.ts#L13)

***

### \_esEvents

> **\_esEvents**: `undefined` \| `string`[]

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:15](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/funcs/event-client.ts#L15)

***

### \_forwardEvents

> **\_forwardEvents**: `Set`\<`string`\>

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:18](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/funcs/event-client.ts#L18)

***

### \_sseEvents

> **\_sseEvents**: `Record`\<`string`, (`e`) => `void`\> = `{}`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:17](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/funcs/event-client.ts#L17)

***

### $attributes

> **$attributes**: `Properties`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`$attributes`](ResClientTools.md#$attributes)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:5

***

### action?

> `optional` **action**: `"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`action`](ResClientTools.md#action)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:35](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/consts.ts#L35)

***

### apiRoot

> **apiRoot**: `undefined` \| `string`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`apiRoot`](ResClientTools.md#apiroot)

#### Defined in

[packages/ai-tool/src/client-tools.ts:16](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/client-tools.ts#L16)

***

### constructor

> **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

`ResClientTools.constructor`

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

[`ResClientTools`](ResClientTools.md).[`defaultOptions`](ResClientTools.md#defaultoptions)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:74

***

### description

> **description**: `string` = `'subscribe server sent event'`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:45](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/funcs/event-client.ts#L45)

***

### ebListener()

> **ebListener**: (`this`, ...`data`) => `Promise`\<`void`\>

#### Parameters

• **this**: `Event`

• ...**data**: `any`[]

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:86](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/funcs/event-client.ts#L86)

***

### fetchOptions?

> `optional` **fetchOptions**: `any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`fetchOptions`](ResClientTools.md#fetchoptions)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:36](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/consts.ts#L36)

***

### isApi?

> `optional` **isApi**: `boolean`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`isApi`](ResClientTools.md#isapi)

#### Defined in

[packages/ai-tool/src/tool-func.ts:47](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L47)

***

### name

> **name**: `string` = `EventName`

#### Overrides

[`ResClientTools`](ResClientTools.md).[`name`](ResClientTools.md#name)

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:44](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/funcs/event-client.ts#L44)

***

### nonExported1stChar

> **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`nonExported1stChar`](ResClientTools.md#nonexported1stchar)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:78

***

### params?

> `optional` **params**: [`FuncParams`](../interfaces/FuncParams.md) \| [`FuncParam`](../interfaces/FuncParam.md)[]

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`params`](ResClientTools.md#params)

#### Defined in

[packages/ai-tool/src/tool-func.ts:42](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L42)

***

### result?

> `optional` **result**: `string`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`result`](ResClientTools.md#result)

#### Defined in

[packages/ai-tool/src/tool-func.ts:43](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L43)

***

### scope?

> `optional` **scope**: `any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`scope`](ResClientTools.md#scope)

#### Defined in

[packages/ai-tool/src/tool-func.ts:44](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L44)

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

#### Parameters

• **this**: [`ToolFunc`](ToolFunc.md)

• **options?**: [`FuncItem`](../interfaces/FuncItem.md)

#### Returns

`void`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`setup`](ResClientTools.md#setup)

#### Defined in

[packages/ai-tool/src/tool-func.ts:46](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L46)

***

### should

> **should**: `Assertion`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`should`](ResClientTools.md#should)

#### Defined in

node\_modules/.pnpm/@types+chai@4.3.16/node\_modules/@types/chai/index.d.ts:2100

***

### stream?

> `optional` **stream**: `boolean`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`stream`](ResClientTools.md#stream)

#### Defined in

[packages/ai-tool/src/tool-func.ts:48](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L48)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`tags`](ResClientTools.md#tags)

#### Defined in

[packages/ai-tool/src/tool-func.ts:45](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L45)

***

### dataPath

> `static` **dataPath**: `string`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`dataPath`](ResClientTools.md#datapath)

#### Defined in

[packages/ai-tool/src/tool-func.ts:75](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L75)

***

### items

> `static` **items**: [`Funcs`](../interfaces/Funcs.md) = `{}`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`items`](ResClientTools.md#items)

#### Defined in

[packages/ai-tool/src/tool-func.ts:74](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L74)

## Accessors

### active

> `get` **active**(): `boolean`

> `set` **active**(`v`): `void`

#### Parameters

• **v**: `boolean`

#### Returns

`boolean`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:29](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/funcs/event-client.ts#L29)

***

### evtSource

> `get` **evtSource**(): `EventSource`

#### Returns

`EventSource`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:20](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/funcs/event-client.ts#L20)

***

### apiRoot

> `get` `static` **apiRoot**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`apiRoot`](ResClientTools.md#apiroot-1)

#### Defined in

[packages/ai-tool/src/client-tools.ts:19](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/client-tools.ts#L19)

## Methods

### \_func()

> **\_func**(`action`, `options`): `Promise`\<`any`\>

#### Parameters

• **action**: `"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"`

• **options**: `RpcMethodsClientFuncParams`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`_func`](ResClientTools.md#_func)

#### Defined in

[packages/ai-tool/src/rpc-methods-client-tool.ts:10](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/rpc-methods-client-tool.ts#L10)

***

### arr2ObjParams()

> **arr2ObjParams**(`params`): `any`[]

#### Parameters

• **params**: `any`[]

#### Returns

`any`[]

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`arr2ObjParams`](ResClientTools.md#arr2objparams)

#### Defined in

[packages/ai-tool/src/tool-func.ts:254](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L254)

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

[`ResClientTools`](ResClientTools.md).[`assign`](ResClientTools.md#assign-1)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:106

***

### assignMethods()

> **assignMethods**(`methods`): `void`

#### Parameters

• **methods**: `string`[]

#### Returns

`void`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`assignMethods`](ResClientTools.md#assignmethods)

#### Defined in

[packages/ai-tool/src/rpc-methods-client-tool.ts:27](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/rpc-methods-client-tool.ts#L27)

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

[`ResClientTools`](ResClientTools.md).[`assignProperty`](ResClientTools.md#assignproperty)

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

[`ResClientTools`](ResClientTools.md).[`assignPropertyTo`](ResClientTools.md#assignpropertyto)

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

[`ResClientTools`](ResClientTools.md).[`assignTo`](ResClientTools.md#assignto)

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

[`ResClientTools`](ResClientTools.md).[`clone`](ResClientTools.md#clone)

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

[`ResClientTools`](ResClientTools.md).[`cloneTo`](ResClientTools.md#cloneto)

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

[`ResClientTools`](ResClientTools.md).[`defineProperties`](ResClientTools.md#defineproperties)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:89

***

### delete()?

> `optional` **delete**(`__namedParameters`): `any`

#### Parameters

• **\_\_namedParameters**: [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md)

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`delete`](ResClientTools.md#delete)

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:13](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/res-client-tools.ts#L13)

***

### errorFrom()

> **errorFrom**(`res`): `Promise`\<[`CommonError`](CommonError.md)\>

#### Parameters

• **res**: `Response`

#### Returns

`Promise`\<[`CommonError`](CommonError.md)\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`errorFrom`](ResClientTools.md#errorfrom)

#### Defined in

[packages/ai-tool/src/client-tools.ts:112](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/client-tools.ts#L112)

***

### esListener()

> **esListener**(`event`): `void`

#### Parameters

• **event**: `MessageEvent`\<`any`\>

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:69](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/funcs/event-client.ts#L69)

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

[`ResClientTools`](ResClientTools.md).[`exportTo`](ResClientTools.md#exportto)

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

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`fetch`](ResClientTools.md#fetch)

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:18](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/res-client-tools.ts#L18)

***

### forwardEvent()

> **forwardEvent**(`events`): `void`

forward local event(s) to server

subscribe these local events to forward/publish to server

Note: pls backendEventable(ClientTools or EventClient) first

#### Parameters

• **events**: `string` \| `string`[]

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:140](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/funcs/event-client.ts#L140)

***

### func()

> **func**(`options`): `Promise`\<`any`\>

#### Parameters

• **options**: `RpcMethodsClientFuncParams`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`func`](ResClientTools.md#func)

#### Defined in

[packages/ai-tool/src/rpc-methods-client-tool.ts:19](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/rpc-methods-client-tool.ts#L19)

***

### get()?

> `optional` **get**(`__namedParameters`): `any`

#### Parameters

• **\_\_namedParameters**: [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md)

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`get`](ResClientTools.md#get)

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:10](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/res-client-tools.ts#L10)

***

### getFunc()

> **getFunc**(`name`?): `any`

#### Parameters

• **name?**: `string`

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`getFunc`](ResClientTools.md#getfunc)

#### Defined in

[packages/ai-tool/src/tool-func.ts:307](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L307)

***

### getFuncWithPos()

> **getFuncWithPos**(`name`?): `any`

#### Parameters

• **name?**: `string`

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`getFuncWithPos`](ResClientTools.md#getfuncwithpos)

#### Defined in

[packages/ai-tool/src/tool-func.ts:331](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L331)

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`getProperties`](ResClientTools.md#getproperties)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:98

***

### getUrlParams()

> **getUrlParams**(`objParam`): `string`

#### Parameters

• **objParam**: `any`

#### Returns

`string`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`getUrlParams`](ResClientTools.md#geturlparams)

#### Defined in

[packages/ai-tool/src/client-tools.ts:63](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/client-tools.ts#L63)

***

### hasAsyncFeature()

> **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

• **feature**: [`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

#### Returns

`boolean`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`hasAsyncFeature`](ResClientTools.md#hasasyncfeature)

#### Defined in

[packages/ai-tool/src/tool-func.ts:336](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L336)

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

[`ResClientTools`](ResClientTools.md).[`hasOwnProperty`](ResClientTools.md#hasownproperty)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:140

***

### init()

> **init**(`events`): `Promise`\<`any`\>

#### Parameters

• **events**: `string` \| `string`[]

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:172](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/funcs/event-client.ts#L172)

***

### initEventSource()

> **initEventSource**(`events`?): `EventSource`

#### Parameters

• **events?**: `string` \| `string`[]

#### Returns

`EventSource`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:47](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/funcs/event-client.ts#L47)

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

[`ResClientTools`](ResClientTools.md).[`initialize`](ResClientTools.md#initialize)

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

[`ResClientTools`](ResClientTools.md).[`isPrototypeOf`](ResClientTools.md#isprototypeof)

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

[`ResClientTools`](ResClientTools.md).[`isSame`](ResClientTools.md#issame)

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

[`ResClientTools`](ResClientTools.md).[`isStream`](ResClientTools.md#isstream)

#### Defined in

[packages/ai-tool/src/tool-func.ts:342](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L342)

***

### list()?

> `optional` **list**(`options`): `any`

#### Parameters

• **options**: [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md)

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`list`](ResClientTools.md#list)

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:14](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/res-client-tools.ts#L14)

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

[`ResClientTools`](ResClientTools.md).[`mergeTo`](ResClientTools.md#mergeto)

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

[`ResClientTools`](ResClientTools.md).[`obj2ArrParams`](ResClientTools.md#obj2arrparams)

#### Defined in

[packages/ai-tool/src/tool-func.ts:267](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L267)

***

### post()?

> `optional` **post**(`options`): `any`

#### Parameters

• **options**: [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md)

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`post`](ResClientTools.md#post)

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:11](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/res-client-tools.ts#L11)

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

[`ResClientTools`](ResClientTools.md).[`propertyIsEnumerable`](ResClientTools.md#propertyisenumerable)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:152

***

### put()?

> `optional` **put**(`__namedParameters`): `any`

#### Parameters

• **\_\_namedParameters**: [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md)

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`put`](ResClientTools.md#put)

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:12](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/res-client-tools.ts#L12)

***

### register()

> **register**(): `boolean` \| [`ToolFunc`](ToolFunc.md)

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`register`](ResClientTools.md#register)

#### Defined in

[packages/ai-tool/src/tool-func.ts:237](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L237)

***

### run()

> **run**(`params`?): `Promise`\<`any`\>

#### Parameters

• **params?**: `any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`run`](ResClientTools.md#run)

#### Defined in

[packages/ai-tool/src/tool-func.ts:294](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L294)

***

### runAs()

> **runAs**(`name`, `params`?): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`runAs`](ResClientTools.md#runas)

#### Defined in

[packages/ai-tool/src/tool-func.ts:298](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L298)

***

### runAsSync()

> **runAsSync**(`name`, `params`?): `any`

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`runAsSync`](ResClientTools.md#runassync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:302](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L302)

***

### runSync()

> **runSync**(`params`?): `any`

#### Parameters

• **params?**: `any`

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`runSync`](ResClientTools.md#runsync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:280](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L280)

***

### runWithPos()

> **runWithPos**(...`params`): `Promise`\<`any`\>

#### Parameters

• ...**params**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`runWithPos`](ResClientTools.md#runwithpos)

#### Defined in

[packages/ai-tool/src/tool-func.ts:323](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L323)

***

### runWithPosAs()

> **runWithPosAs**(`name`, ...`params`): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`runWithPosAs`](ResClientTools.md#runwithposas)

#### Defined in

[packages/ai-tool/src/tool-func.ts:327](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L327)

***

### runWithPosAsSync()

> **runWithPosAsSync**(`name`, ...`params`): `any`

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`runWithPosAsSync`](ResClientTools.md#runwithposassync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:319](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L319)

***

### runWithPosSync()

> **runWithPosSync**(...`params`): `any`

#### Parameters

• ...**params**: `any`[]

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`runWithPosSync`](ResClientTools.md#runwithpossync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:312](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L312)

***

### subscribe()

> **subscribe**(`events`): `Promise`\<`any`\>

subscribe server sent event(SSE)

#### Parameters

• **events**: `string` \| `string`[]

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:98](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/funcs/event-client.ts#L98)

***

### toJSON()

> **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`toJSON`](ResClientTools.md#tojson)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:182

***

### toLocaleString()

> **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`toLocaleString`](ResClientTools.md#tolocalestring)

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

[`ResClientTools`](ResClientTools.md).[`toObject`](ResClientTools.md#toobject)

#### Defined in

node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:181

***

### toString()

> **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`toString`](ResClientTools.md#tostring)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es5.d.ts:128

***

### unforwardEvent()

> **unforwardEvent**(`events`): `void`

unforward local event(s) to server

unsubscribe these local events not to forward/publish to server

Note: pls backendEventable(ClientTools or EventClient) first

#### Parameters

• **events**: `string` \| `string`[]

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:160](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/funcs/event-client.ts#L160)

***

### unregister()

> **unregister**(): `any`

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`unregister`](ResClientTools.md#unregister)

#### Defined in

[packages/ai-tool/src/tool-func.ts:250](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L250)

***

### unsubscribe()

> **unsubscribe**(`events`): `Promise`\<`any`\>

unsubscribe server sent event(SSE)

#### Parameters

• **events**: `string` \| `string`[]

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:117](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/funcs/event-client.ts#L117)

***

### valueOf()

> **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`valueOf`](ResClientTools.md#valueof)

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

[`ResClientTools`](ResClientTools.md).[`assign`](ResClientTools.md#assign-2)

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

[`ResClientTools`](ResClientTools.md).[`assign`](ResClientTools.md#assign-2)

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

[`ResClientTools`](ResClientTools.md).[`assign`](ResClientTools.md#assign-2)

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

[`ResClientTools`](ResClientTools.md).[`assign`](ResClientTools.md#assign-2)

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

[`ResClientTools`](ResClientTools.md).[`create`](ResClientTools.md#create)

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

[`ResClientTools`](ResClientTools.md).[`create`](ResClientTools.md#create)

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

[`ResClientTools`](ResClientTools.md).[`defineProperties`](ResClientTools.md#defineproperties-1)

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

[`ResClientTools`](ResClientTools.md).[`defineProperty`](ResClientTools.md#defineproperty)

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

[`ResClientTools`](ResClientTools.md).[`entries`](ResClientTools.md#entries)

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

[`ResClientTools`](ResClientTools.md).[`entries`](ResClientTools.md#entries)

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

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`fetch`](ResClientTools.md#fetch-1)

#### Defined in

[packages/ai-tool/src/client-tools.ts:56](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/client-tools.ts#L56)

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

[`ResClientTools`](ResClientTools.md).[`freeze`](ResClientTools.md#freeze)

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

[`ResClientTools`](ResClientTools.md).[`freeze`](ResClientTools.md#freeze)

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

[`ResClientTools`](ResClientTools.md).[`freeze`](ResClientTools.md#freeze)

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

[`ResClientTools`](ResClientTools.md).[`fromEntries`](ResClientTools.md#fromentries)

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

[`ResClientTools`](ResClientTools.md).[`fromEntries`](ResClientTools.md#fromentries)

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

[`ResClientTools`](ResClientTools.md).[`get`](ResClientTools.md#get-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:77](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L77)

***

### getAllByTag()

> `static` **getAllByTag**(`tagName`): [`ToolFunc`](ToolFunc.md)[]

#### Parameters

• **tagName**: `string`

#### Returns

[`ToolFunc`](ToolFunc.md)[]

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`getAllByTag`](ResClientTools.md#getallbytag)

#### Defined in

[packages/ai-tool/src/tool-func.ts:105](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L105)

***

### getByTag()

> `static` **getByTag**(`tagName`): `undefined` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

• **tagName**: `string`

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`getByTag`](ResClientTools.md#getbytag)

#### Defined in

[packages/ai-tool/src/tool-func.ts:85](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L85)

***

### getFunc()

> `static` **getFunc**(`name`): `any`

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`getFunc`](ResClientTools.md#getfunc-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:146](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L146)

***

### getFuncWithPos()

> `static` **getFuncWithPos**(`name`): `any`

#### Parameters

• **name**: `string`

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`getFuncWithPos`](ResClientTools.md#getfuncwithpos-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:167](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L167)

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

[`ResClientTools`](ResClientTools.md).[`getOwnPropertyDescriptor`](ResClientTools.md#getownpropertydescriptor)

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

[`ResClientTools`](ResClientTools.md).[`getOwnPropertyDescriptors`](ResClientTools.md#getownpropertydescriptors)

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

[`ResClientTools`](ResClientTools.md).[`getOwnPropertyNames`](ResClientTools.md#getownpropertynames)

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

[`ResClientTools`](ResClientTools.md).[`getOwnPropertySymbols`](ResClientTools.md#getownpropertysymbols)

#### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:319

***

### getProperties()

> `static` **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`getProperties`](ResClientTools.md#getproperties-1)

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

[`ResClientTools`](ResClientTools.md).[`getPrototypeOf`](ResClientTools.md#getprototypeof)

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

[`ResClientTools`](ResClientTools.md).[`hasAsyncFeature`](ResClientTools.md#hasasyncfeature-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:123](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L123)

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

[`ResClientTools`](ResClientTools.md).[`hasOwn`](ResClientTools.md#hasown)

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

[`ResClientTools`](ResClientTools.md).[`is`](ResClientTools.md#is)

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

[`ResClientTools`](ResClientTools.md).[`isExtensible`](ResClientTools.md#isextensible)

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

[`ResClientTools`](ResClientTools.md).[`isFrozen`](ResClientTools.md#isfrozen)

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

[`ResClientTools`](ResClientTools.md).[`isSealed`](ResClientTools.md#issealed)

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

[`ResClientTools`](ResClientTools.md).[`keys`](ResClientTools.md#keys)

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

[`ResClientTools`](ResClientTools.md).[`keys`](ResClientTools.md#keys)

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:325

***

### list()

> `static` **list**(): [`Funcs`](../interfaces/Funcs.md)

#### Returns

[`Funcs`](../interfaces/Funcs.md)

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`list`](ResClientTools.md#list-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:81](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L81)

***

### loadFrom()

> `static` **loadFrom**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`loadFrom`](ResClientTools.md#loadfrom)

#### Defined in

[packages/ai-tool/src/client-tools.ts:29](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/client-tools.ts#L29)

***

### loadFromSync()

> `static` **loadFromSync**(`items`): `void`

#### Parameters

• **items**: [`Funcs`](../interfaces/Funcs.md)

#### Returns

`void`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`loadFromSync`](ResClientTools.md#loadfromsync)

#### Defined in

[packages/ai-tool/src/client-tools.ts:41](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/client-tools.ts#L41)

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

[`ResClientTools`](ResClientTools.md).[`preventExtensions`](ResClientTools.md#preventextensions)

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

[`ResClientTools`](ResClientTools.md).[`register`](ResClientTools.md#register-1)

##### Defined in

[packages/ai-tool/src/tool-func.ts:172](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L172)

#### register(func, options)

> `static` **register**(`func`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

##### Parameters

• **func**: `Function`

• **options**: [`FuncItem`](../interfaces/FuncItem.md)

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

##### Inherited from

[`ResClientTools`](ResClientTools.md).[`register`](ResClientTools.md#register-1)

##### Defined in

[packages/ai-tool/src/tool-func.ts:173](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L173)

#### register(name, options)

> `static` **register**(`name`, `options`?): `boolean` \| [`ToolFunc`](ToolFunc.md)

##### Parameters

• **name**: `string` \| `Function` \| [`ToolFunc`](ToolFunc.md) \| [`FuncItem`](../interfaces/FuncItem.md)

• **options?**: [`FuncItem`](../interfaces/FuncItem.md)

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

##### Inherited from

[`ResClientTools`](ResClientTools.md).[`register`](ResClientTools.md#register-1)

##### Defined in

[packages/ai-tool/src/tool-func.ts:174](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L174)

***

### run()

> `static` **run**(`name`, `params`?): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`run`](ResClientTools.md#run-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:130](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L130)

***

### runSync()

> `static` **runSync**(`name`, `params`?): `any`

#### Parameters

• **name**: `string`

• **params?**: `any`

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`runSync`](ResClientTools.md#runsync-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:138](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L138)

***

### runWithPos()

> `static` **runWithPos**(`name`, ...`params`): `Promise`\<`any`\>

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`runWithPos`](ResClientTools.md#runwithpos-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:151](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L151)

***

### runWithPosSync()

> `static` **runWithPosSync**(`name`, ...`params`): `any`

#### Parameters

• **name**: `string`

• ...**params**: `any`[]

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`runWithPosSync`](ResClientTools.md#runwithpossync-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:159](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L159)

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

[`ResClientTools`](ResClientTools.md).[`seal`](ResClientTools.md#seal)

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

[`ResClientTools`](ResClientTools.md).[`setApiRoot`](ResClientTools.md#setapiroot)

#### Defined in

[packages/ai-tool/src/client-tools.ts:23](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/client-tools.ts#L23)

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

[`ResClientTools`](ResClientTools.md).[`setPrototypeOf`](ResClientTools.md#setprototypeof)

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

[`ResClientTools`](ResClientTools.md).[`unregister`](ResClientTools.md#unregister-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:202](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/tool-func.ts#L202)

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

[`ResClientTools`](ResClientTools.md).[`values`](ResClientTools.md#values)

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

[`ResClientTools`](ResClientTools.md).[`values`](ResClientTools.md#values)

##### Defined in

node\_modules/.pnpm/typescript@5.6.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:30
