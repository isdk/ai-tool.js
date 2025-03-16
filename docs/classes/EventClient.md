[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / EventClient

# Class: EventClient

Defined in: [packages/ai-tool/src/funcs/event-client.ts:12](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/funcs/event-client.ts#L12)

## Extends

- [`ResClientTools`](ResClientTools.md)

## Indexable

\[`name`: `string`\]: `any`

## Constructors

### new EventClient()

> **new EventClient**(`name`, `options`): [`EventClient`](EventClient.md)

Defined in: [packages/ai-tool/src/tool-func.ts:192](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L192)

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Parameters

##### name

`string` | `Function` | [`FuncItem`](../interfaces/FuncItem.md)

##### options

`any` = `{}`

#### Returns

[`EventClient`](EventClient.md)

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`constructor`](ResClientTools.md#constructors)

## Properties

### \_es

> **\_es**: `undefined` \| `EventSource`

Defined in: [packages/ai-tool/src/funcs/event-client.ts:13](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/funcs/event-client.ts#L13)

***

### \_esEvents

> **\_esEvents**: `undefined` \| `string`[]

Defined in: [packages/ai-tool/src/funcs/event-client.ts:15](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/funcs/event-client.ts#L15)

***

### \_forwardEvents

> **\_forwardEvents**: `Set`\<`string`\>

Defined in: [packages/ai-tool/src/funcs/event-client.ts:18](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/funcs/event-client.ts#L18)

***

### \_sseEvents

> **\_sseEvents**: `Record`\<`string`, (`e`) => `void`\> = `{}`

Defined in: [packages/ai-tool/src/funcs/event-client.ts:17](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/funcs/event-client.ts#L17)

***

### $attributes

> **$attributes**: `Properties`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:5

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`$attributes`](ResClientTools.md#$attributes)

***

### action?

> `optional` **action**: `"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"`

Defined in: [packages/ai-tool/src/utils/consts.ts:35](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/utils/consts.ts#L35)

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`action`](ResClientTools.md#action)

***

### apiRoot

> **apiRoot**: `undefined` \| `string`

Defined in: [packages/ai-tool/src/client-tools.ts:16](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/client-tools.ts#L16)

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`apiRoot`](ResClientTools.md#apiroot)

***

### constructor

> **constructor**: `Function`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:125

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

`ResClientTools.constructor`

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

[`ResClientTools`](ResClientTools.md).[`defaultOptions`](ResClientTools.md#defaultoptions)

***

### description

> **description**: `string` = `'subscribe server sent event'`

Defined in: [packages/ai-tool/src/funcs/event-client.ts:45](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/funcs/event-client.ts#L45)

***

### ebListener()

> **ebListener**: (`this`, ...`data`) => `Promise`\<`void`\>

Defined in: [packages/ai-tool/src/funcs/event-client.ts:86](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/funcs/event-client.ts#L86)

#### Parameters

##### this

`Event`

##### data

...`any`[]

#### Returns

`Promise`\<`void`\>

***

### fetchOptions?

> `optional` **fetchOptions**: `any`

Defined in: [packages/ai-tool/src/utils/consts.ts:36](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/utils/consts.ts#L36)

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`fetchOptions`](ResClientTools.md#fetchoptions)

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:29](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L29)

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`isApi`](ResClientTools.md#isapi)

***

### name

> **name**: `string` = `EventName`

Defined in: [packages/ai-tool/src/funcs/event-client.ts:44](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/funcs/event-client.ts#L44)

#### Overrides

[`ResClientTools`](ResClientTools.md).[`name`](ResClientTools.md#name-1)

***

### nonExported1stChar

> **nonExported1stChar**: `string`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:78

the property with the default prefix '$' will not be exported.

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`nonExported1stChar`](ResClientTools.md#nonexported1stchar)

***

### params?

> `optional` **params**: [`FuncParams`](../interfaces/FuncParams.md) \| [`FuncParam`](../interfaces/FuncParam.md)[]

Defined in: [packages/ai-tool/src/tool-func.ts:24](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L24)

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`params`](ResClientTools.md#params)

***

### result?

> `optional` **result**: `string`

Defined in: [packages/ai-tool/src/tool-func.ts:25](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L25)

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`result`](ResClientTools.md#result)

***

### scope?

> `optional` **scope**: `any`

Defined in: [packages/ai-tool/src/tool-func.ts:26](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L26)

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`scope`](ResClientTools.md#scope)

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

Defined in: [packages/ai-tool/src/tool-func.ts:28](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L28)

#### Parameters

##### this

[`ToolFunc`](ToolFunc.md)

##### options?

[`FuncItem`](../interfaces/FuncItem.md)

#### Returns

`void`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`setup`](ResClientTools.md#setup)

***

### stream?

> `optional` **stream**: `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:30](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L30)

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`stream`](ResClientTools.md#stream)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: [packages/ai-tool/src/tool-func.ts:27](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L27)

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`tags`](ResClientTools.md#tags)

***

### dataPath

> `static` **dataPath**: `string`

Defined in: [packages/ai-tool/src/tool-func.ts:57](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L57)

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`dataPath`](ResClientTools.md#datapath)

***

### items

> `static` **items**: [`Funcs`](../interfaces/Funcs.md) = `{}`

Defined in: [packages/ai-tool/src/tool-func.ts:56](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L56)

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`items`](ResClientTools.md#items)

## Accessors

### active

#### Get Signature

> **get** **active**(): `boolean`

Defined in: [packages/ai-tool/src/funcs/event-client.ts:29](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/funcs/event-client.ts#L29)

##### Returns

`boolean`

#### Set Signature

> **set** **active**(`v`): `void`

Defined in: [packages/ai-tool/src/funcs/event-client.ts:33](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/funcs/event-client.ts#L33)

##### Parameters

###### v

`boolean`

##### Returns

`void`

***

### evtSource

#### Get Signature

> **get** **evtSource**(): `EventSource`

Defined in: [packages/ai-tool/src/funcs/event-client.ts:20](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/funcs/event-client.ts#L20)

##### Returns

`EventSource`

***

### apiRoot

#### Get Signature

> **get** `static` **apiRoot**(): `undefined` \| `string`

Defined in: [packages/ai-tool/src/client-tools.ts:19](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/client-tools.ts#L19)

##### Returns

`undefined` \| `string`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`apiRoot`](ResClientTools.md#apiroot-1)

## Methods

### \_func()

> **\_func**(`action`, `options`): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/rpc-methods-client-tool.ts:10](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/rpc-methods-client-tool.ts#L10)

#### Parameters

##### action

`"get"` | `"post"` | `"put"` | `"delete"` | `"patch"` | `"list"` | `"res"`

##### options

`RpcMethodsClientFuncParams`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`_func`](ResClientTools.md#_func)

***

### arr2ObjParams()

> **arr2ObjParams**(`params`): `any`[]

Defined in: [packages/ai-tool/src/tool-func.ts:236](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L236)

#### Parameters

##### params

`any`[]

#### Returns

`any`[]

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`arr2ObjParams`](ResClientTools.md#arr2objparams)

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

[`ResClientTools`](ResClientTools.md).[`assign`](ResClientTools.md#assign)

***

### assignMethods()

> **assignMethods**(`methods`): `void`

Defined in: [packages/ai-tool/src/rpc-methods-client-tool.ts:27](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/rpc-methods-client-tool.ts#L27)

#### Parameters

##### methods

`string`[]

#### Returns

`void`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`assignMethods`](ResClientTools.md#assignmethods)

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

[`ResClientTools`](ResClientTools.md).[`assignProperty`](ResClientTools.md#assignproperty)

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

[`ResClientTools`](ResClientTools.md).[`assignPropertyTo`](ResClientTools.md#assignpropertyto)

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

[`ResClientTools`](ResClientTools.md).[`assignTo`](ResClientTools.md#assignto)

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

[`ResClientTools`](ResClientTools.md).[`clone`](ResClientTools.md#clone)

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

[`ResClientTools`](ResClientTools.md).[`cloneTo`](ResClientTools.md#cloneto)

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

[`ResClientTools`](ResClientTools.md).[`defineProperties`](ResClientTools.md#defineproperties)

***

### delete()?

> `optional` **delete**(`__namedParameters`): `any`

Defined in: [packages/ai-tool/src/res-client-tools.ts:13](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/res-client-tools.ts#L13)

#### Parameters

##### \_\_namedParameters

[`ResClientFuncParams`](../interfaces/ResClientFuncParams.md)

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`delete`](ResClientTools.md#delete)

***

### errorFrom()

> **errorFrom**(`res`): `Promise`\<[`CommonError`](CommonError.md)\>

Defined in: [packages/ai-tool/src/client-tools.ts:118](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/client-tools.ts#L118)

#### Parameters

##### res

`Response`

#### Returns

`Promise`\<[`CommonError`](CommonError.md)\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`errorFrom`](ResClientTools.md#errorfrom)

***

### esListener()

> **esListener**(`event`): `void`

Defined in: [packages/ai-tool/src/funcs/event-client.ts:69](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/funcs/event-client.ts#L69)

#### Parameters

##### event

`MessageEvent`

#### Returns

`void`

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

[`ResClientTools`](ResClientTools.md).[`exportTo`](ResClientTools.md#exportto)

***

### fetch()

> **fetch**(`options`, `action`): `Promise`\<`Response`\>

Defined in: [packages/ai-tool/src/res-client-tools.ts:18](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/res-client-tools.ts#L18)

#### Parameters

##### options

[`ResClientFuncParams`](../interfaces/ResClientFuncParams.md)

##### action

`"get"` | `"post"` | `"put"` | `"delete"` | `"patch"` | `"list"` | `"res"`

#### Returns

`Promise`\<`Response`\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`fetch`](ResClientTools.md#fetch)

***

### forwardEvent()

> **forwardEvent**(`events`): `void`

Defined in: [packages/ai-tool/src/funcs/event-client.ts:140](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/funcs/event-client.ts#L140)

forward local event(s) to server

subscribe these local events to forward/publish to server

Note: pls backendEventable(ClientTools or EventClient) first

#### Parameters

##### events

`string` | `string`[]

#### Returns

`void`

***

### func()

> **func**(`options`): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/rpc-methods-client-tool.ts:19](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/rpc-methods-client-tool.ts#L19)

#### Parameters

##### options

`RpcMethodsClientFuncParams`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`func`](ResClientTools.md#func)

***

### get()?

> `optional` **get**(`__namedParameters`): `any`

Defined in: [packages/ai-tool/src/res-client-tools.ts:10](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/res-client-tools.ts#L10)

#### Parameters

##### \_\_namedParameters

[`ResClientFuncParams`](../interfaces/ResClientFuncParams.md)

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`get`](ResClientTools.md#get)

***

### getFunc()

> **getFunc**(`name`?): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:289](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L289)

#### Parameters

##### name?

`string`

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`getFunc`](ResClientTools.md#getfunc)

***

### getFuncWithPos()

> **getFuncWithPos**(`name`?): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:313](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L313)

#### Parameters

##### name?

`string`

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`getFuncWithPos`](ResClientTools.md#getfuncwithpos)

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:98

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`getProperties`](ResClientTools.md#getproperties)

***

### getUrlParams()

> **getUrlParams**(`objParam`): `string`

Defined in: [packages/ai-tool/src/client-tools.ts:63](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/client-tools.ts#L63)

#### Parameters

##### objParam

`any`

#### Returns

`string`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`getUrlParams`](ResClientTools.md#geturlparams)

***

### hasAsyncFeature()

> **hasAsyncFeature**(`feature`): `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:318](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L318)

#### Parameters

##### feature

[`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

#### Returns

`boolean`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`hasAsyncFeature`](ResClientTools.md#hasasyncfeature)

***

### hasOwnProperty()

> **hasOwnProperty**(`v`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:140

Determines whether an object has a property with the specified name.

#### Parameters

##### v

`PropertyKey`

A property name.

#### Returns

`boolean`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`hasOwnProperty`](ResClientTools.md#hasownproperty)

***

### init()

> **init**(`events`): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/funcs/event-client.ts:172](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/funcs/event-client.ts#L172)

#### Parameters

##### events

`string` | `string`[]

#### Returns

`Promise`\<`any`\>

***

### initEventSource()

> **initEventSource**(`events`?): `EventSource`

Defined in: [packages/ai-tool/src/funcs/event-client.ts:47](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/funcs/event-client.ts#L47)

#### Parameters

##### events?

`string` | `string`[]

#### Returns

`EventSource`

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

[`ResClientTools`](ResClientTools.md).[`initialize`](ResClientTools.md#initialize)

***

### isPrototypeOf()

> **isPrototypeOf**(`v`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:146

Determines whether an object exists in another object's prototype chain.

#### Parameters

##### v

`Object`

Another object whose prototype chain is to be checked.

#### Returns

`boolean`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`isPrototypeOf`](ResClientTools.md#isprototypeof)

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

[`ResClientTools`](ResClientTools.md).[`isSame`](ResClientTools.md#issame)

***

### isStream()

> **isStream**(`params`): `undefined` \| `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:324](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L324)

#### Parameters

##### params

`any`

#### Returns

`undefined` \| `boolean`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`isStream`](ResClientTools.md#isstream)

***

### list()?

> `optional` **list**(`options`): `any`

Defined in: [packages/ai-tool/src/res-client-tools.ts:14](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/res-client-tools.ts#L14)

#### Parameters

##### options

[`ResClientFuncParams`](../interfaces/ResClientFuncParams.md)

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`list`](ResClientTools.md#list)

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

[`ResClientTools`](ResClientTools.md).[`mergeTo`](ResClientTools.md#mergeto)

***

### obj2ArrParams()

> **obj2ArrParams**(`params`?): `any`[]

Defined in: [packages/ai-tool/src/tool-func.ts:249](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L249)

#### Parameters

##### params?

`any`

#### Returns

`any`[]

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`obj2ArrParams`](ResClientTools.md#obj2arrparams)

***

### post()?

> `optional` **post**(`options`): `any`

Defined in: [packages/ai-tool/src/res-client-tools.ts:11](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/res-client-tools.ts#L11)

#### Parameters

##### options

[`ResClientFuncParams`](../interfaces/ResClientFuncParams.md)

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`post`](ResClientTools.md#post)

***

### propertyIsEnumerable()

> **propertyIsEnumerable**(`v`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:152

Determines whether a specified property is enumerable.

#### Parameters

##### v

`PropertyKey`

A property name.

#### Returns

`boolean`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`propertyIsEnumerable`](ResClientTools.md#propertyisenumerable)

***

### put()?

> `optional` **put**(`__namedParameters`): `any`

Defined in: [packages/ai-tool/src/res-client-tools.ts:12](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/res-client-tools.ts#L12)

#### Parameters

##### \_\_namedParameters

[`ResClientFuncParams`](../interfaces/ResClientFuncParams.md)

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`put`](ResClientTools.md#put)

***

### register()

> **register**(): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:219](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L219)

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`register`](ResClientTools.md#register)

***

### run()

> **run**(`params`?): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:276](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L276)

#### Parameters

##### params?

`any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`run`](ResClientTools.md#run)

***

### runAs()

> **runAs**(`name`, `params`?): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:280](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L280)

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`runAs`](ResClientTools.md#runas)

***

### runAsSync()

> **runAsSync**(`name`, `params`?): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:284](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L284)

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`runAsSync`](ResClientTools.md#runassync)

***

### runSync()

> **runSync**(`params`?): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:262](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L262)

#### Parameters

##### params?

`any`

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`runSync`](ResClientTools.md#runsync)

***

### runWithPos()

> **runWithPos**(...`params`): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:305](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L305)

#### Parameters

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`runWithPos`](ResClientTools.md#runwithpos)

***

### runWithPosAs()

> **runWithPosAs**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:309](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L309)

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`runWithPosAs`](ResClientTools.md#runwithposas)

***

### runWithPosAsSync()

> **runWithPosAsSync**(`name`, ...`params`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:301](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L301)

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`runWithPosAsSync`](ResClientTools.md#runwithposassync)

***

### runWithPosSync()

> **runWithPosSync**(...`params`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:294](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L294)

#### Parameters

##### params

...`any`[]

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`runWithPosSync`](ResClientTools.md#runwithpossync)

***

### subscribe()

> **subscribe**(`events`): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/funcs/event-client.ts:98](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/funcs/event-client.ts#L98)

subscribe server sent event(SSE)

#### Parameters

##### events

`string` | `string`[]

#### Returns

`Promise`\<`any`\>

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:182

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`toJSON`](ResClientTools.md#tojson)

***

### toLocaleString()

> **toLocaleString**(): `string`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:131

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`toLocaleString`](ResClientTools.md#tolocalestring)

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

[`ResClientTools`](ResClientTools.md).[`toObject`](ResClientTools.md#toobject)

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:128

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`toString`](ResClientTools.md#tostring)

***

### unforwardEvent()

> **unforwardEvent**(`events`): `void`

Defined in: [packages/ai-tool/src/funcs/event-client.ts:160](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/funcs/event-client.ts#L160)

unforward local event(s) to server

unsubscribe these local events not to forward/publish to server

Note: pls backendEventable(ClientTools or EventClient) first

#### Parameters

##### events

`string` | `string`[]

#### Returns

`void`

***

### unregister()

> **unregister**(): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:232](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L232)

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`unregister`](ResClientTools.md#unregister)

***

### unsubscribe()

> **unsubscribe**(`events`): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/funcs/event-client.ts:117](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/funcs/event-client.ts#L117)

unsubscribe server sent event(SSE)

#### Parameters

##### events

`string` | `string`[]

#### Returns

`Promise`\<`any`\>

***

### valueOf()

> **valueOf**(): `Object`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:134

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`valueOf`](ResClientTools.md#valueof)

***

### assign()

#### Call Signature

> `static` **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:286

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

[`ResClientTools`](ResClientTools.md).[`assign`](ResClientTools.md#assign-2)

#### Call Signature

> `static` **assign**\<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:295

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

[`ResClientTools`](ResClientTools.md).[`assign`](ResClientTools.md#assign-2)

#### Call Signature

> `static` **assign**\<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:305

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

[`ResClientTools`](ResClientTools.md).[`assign`](ResClientTools.md#assign-2)

#### Call Signature

> `static` **assign**(`target`, ...`sources`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:313

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

[`ResClientTools`](ResClientTools.md).[`assign`](ResClientTools.md#assign-2)

***

### create()

#### Call Signature

> `static` **create**(`o`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:188

Creates an object that has the specified prototype or that has null prototype.

##### Parameters

###### o

Object to use as a prototype. May be null.

`null` | `object`

##### Returns

`any`

##### Inherited from

[`ResClientTools`](ResClientTools.md).[`create`](ResClientTools.md#create)

#### Call Signature

> `static` **create**(`o`, `properties`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:195

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

[`ResClientTools`](ResClientTools.md).[`create`](ResClientTools.md#create)

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

[`ResClientTools`](ResClientTools.md).[`defineProperties`](ResClientTools.md#defineproperties-2)

***

### defineProperty()

> `static` **defineProperty**\<`T`\>(`o`, `p`, `attributes`): `T`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:203

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

[`ResClientTools`](ResClientTools.md).[`defineProperty`](ResClientTools.md#defineproperty)

***

### entries()

#### Call Signature

> `static` **entries**\<`T`\>(`o`): \[`string`, `T`\][]

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:36

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

[`ResClientTools`](ResClientTools.md).[`entries`](ResClientTools.md#entries)

#### Call Signature

> `static` **entries**(`o`): \[`string`, `any`\][]

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:42

Returns an array of key/values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

\[`string`, `any`\][]

##### Inherited from

[`ResClientTools`](ResClientTools.md).[`entries`](ResClientTools.md#entries)

***

### fetch()

> `static` **fetch**(`name`, `objParam`?): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/client-tools.ts:56](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/client-tools.ts#L56)

#### Parameters

##### name

`string`

##### objParam?

`any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`fetch`](ResClientTools.md#fetch-2)

***

### freeze()

#### Call Signature

> `static` **freeze**\<`T`\>(`f`): `T`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:222

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

[`ResClientTools`](ResClientTools.md).[`freeze`](ResClientTools.md#freeze)

#### Call Signature

> `static` **freeze**\<`T`, `U`\>(`o`): `Readonly`\<`T`\>

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:228

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

[`ResClientTools`](ResClientTools.md).[`freeze`](ResClientTools.md#freeze)

#### Call Signature

> `static` **freeze**\<`T`\>(`o`): `Readonly`\<`T`\>

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:234

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

[`ResClientTools`](ResClientTools.md).[`freeze`](ResClientTools.md#freeze)

***

### fromEntries()

#### Call Signature

> `static` **fromEntries**\<`T`\>(`entries`): `object`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2019.object.d.ts:26

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

[`ResClientTools`](ResClientTools.md).[`fromEntries`](ResClientTools.md#fromentries)

#### Call Signature

> `static` **fromEntries**(`entries`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2019.object.d.ts:32

Returns an object created by key-value entries for properties and methods

##### Parameters

###### entries

`Iterable`\<readonly `any`[]\>

An iterable object that contains key-value entries for properties and methods.

##### Returns

`any`

##### Inherited from

[`ResClientTools`](ResClientTools.md).[`fromEntries`](ResClientTools.md#fromentries)

***

### get()

> `static` **get**(`name`): [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:59](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L59)

#### Parameters

##### name

`string`

#### Returns

[`ToolFunc`](ToolFunc.md)

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`get`](ResClientTools.md#get-2)

***

### getAllByTag()

> `static` **getAllByTag**(`tagName`): [`ToolFunc`](ToolFunc.md)[]

Defined in: [packages/ai-tool/src/tool-func.ts:87](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L87)

#### Parameters

##### tagName

`string`

#### Returns

[`ToolFunc`](ToolFunc.md)[]

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`getAllByTag`](ResClientTools.md#getallbytag)

***

### getByTag()

> `static` **getByTag**(`tagName`): `undefined` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:67](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L67)

#### Parameters

##### tagName

`string`

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`getByTag`](ResClientTools.md#getbytag)

***

### getFunc()

> `static` **getFunc**(`name`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:128](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L128)

#### Parameters

##### name

`string`

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`getFunc`](ResClientTools.md#getfunc-2)

***

### getFuncWithPos()

> `static` **getFuncWithPos**(`name`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:149](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L149)

#### Parameters

##### name

`string`

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`getFuncWithPos`](ResClientTools.md#getfuncwithpos-2)

***

### getOwnPropertyDescriptor()

> `static` **getOwnPropertyDescriptor**(`o`, `p`): `undefined` \| `PropertyDescriptor`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:175

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

[`ResClientTools`](ResClientTools.md).[`getOwnPropertyDescriptor`](ResClientTools.md#getownpropertydescriptor)

***

### getOwnPropertyDescriptors()

> `static` **getOwnPropertyDescriptors**\<`T`\>(`o`): \{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:48

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

[`ResClientTools`](ResClientTools.md).[`getOwnPropertyDescriptors`](ResClientTools.md#getownpropertydescriptors)

***

### getOwnPropertyNames()

> `static` **getOwnPropertyNames**(`o`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:182

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

#### Parameters

##### o

`any`

Object that contains the own properties.

#### Returns

`string`[]

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`getOwnPropertyNames`](ResClientTools.md#getownpropertynames)

***

### getOwnPropertySymbols()

> `static` **getOwnPropertySymbols**(`o`): `symbol`[]

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:319

Returns an array of all symbol properties found directly on object o.

#### Parameters

##### o

`any`

Object to retrieve the symbols from.

#### Returns

`symbol`[]

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`getOwnPropertySymbols`](ResClientTools.md#getownpropertysymbols)

***

### getProperties()

> `static` **getProperties**(): `PropDescriptors`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:10

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`getProperties`](ResClientTools.md#getproperties-2)

***

### getPrototypeOf()

> `static` **getPrototypeOf**(`o`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:167

Returns the prototype of an object.

#### Parameters

##### o

`any`

The object that references the prototype.

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`getPrototypeOf`](ResClientTools.md#getprototypeof)

***

### hasAsyncFeature()

> `static` **hasAsyncFeature**(`feature`): `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:105](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L105)

#### Parameters

##### feature

[`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

#### Returns

`boolean`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`hasAsyncFeature`](ResClientTools.md#hasasyncfeature-2)

***

### hasOwn()

> `static` **hasOwn**(`o`, `v`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2022.object.d.ts:25

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

[`ResClientTools`](ResClientTools.md).[`hasOwn`](ResClientTools.md#hasown)

***

### is()

> `static` **is**(`value1`, `value2`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:332

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

[`ResClientTools`](ResClientTools.md).[`is`](ResClientTools.md#is)

***

### isExtensible()

> `static` **isExtensible**(`o`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:258

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

##### o

`any`

Object to test.

#### Returns

`boolean`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`isExtensible`](ResClientTools.md#isextensible)

***

### isFrozen()

> `static` **isFrozen**(`o`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:252

Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.

#### Parameters

##### o

`any`

Object to test.

#### Returns

`boolean`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`isFrozen`](ResClientTools.md#isfrozen)

***

### isSealed()

> `static` **isSealed**(`o`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:246

Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.

#### Parameters

##### o

`any`

Object to test.

#### Returns

`boolean`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`isSealed`](ResClientTools.md#issealed)

***

### keys()

#### Call Signature

> `static` **keys**(`o`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:264

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

###### o

`object`

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

##### Inherited from

[`ResClientTools`](ResClientTools.md).[`keys`](ResClientTools.md#keys)

#### Call Signature

> `static` **keys**(`o`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:325

Returns the names of the enumerable string properties and methods of an object.

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`string`[]

##### Inherited from

[`ResClientTools`](ResClientTools.md).[`keys`](ResClientTools.md#keys)

***

### list()

> `static` **list**(): [`Funcs`](../interfaces/Funcs.md)

Defined in: [packages/ai-tool/src/tool-func.ts:63](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L63)

#### Returns

[`Funcs`](../interfaces/Funcs.md)

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`list`](ResClientTools.md#list-2)

***

### loadFrom()

> `static` **loadFrom**(): `Promise`\<`void`\>

Defined in: [packages/ai-tool/src/client-tools.ts:29](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/client-tools.ts#L29)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`loadFrom`](ResClientTools.md#loadfrom)

***

### loadFromSync()

> `static` **loadFromSync**(`items`): `void`

Defined in: [packages/ai-tool/src/client-tools.ts:41](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/client-tools.ts#L41)

#### Parameters

##### items

[`Funcs`](../interfaces/Funcs.md)

#### Returns

`void`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`loadFromSync`](ResClientTools.md#loadfromsync)

***

### preventExtensions()

> `static` **preventExtensions**\<`T`\>(`o`): `T`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:240

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

[`ResClientTools`](ResClientTools.md).[`preventExtensions`](ResClientTools.md#preventextensions)

***

### register()

#### Call Signature

> `static` **register**(`name`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:154](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L154)

##### Parameters

###### name

`string`

###### options

[`FuncItem`](../interfaces/FuncItem.md)

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

##### Inherited from

[`ResClientTools`](ResClientTools.md).[`register`](ResClientTools.md#register-2)

#### Call Signature

> `static` **register**(`func`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:155](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L155)

##### Parameters

###### func

`Function`

###### options

[`FuncItem`](../interfaces/FuncItem.md)

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

##### Inherited from

[`ResClientTools`](ResClientTools.md).[`register`](ResClientTools.md#register-2)

#### Call Signature

> `static` **register**(`name`, `options`?): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:156](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L156)

##### Parameters

###### name

`string` | `Function` | [`ToolFunc`](ToolFunc.md) | [`FuncItem`](../interfaces/FuncItem.md)

###### options?

[`FuncItem`](../interfaces/FuncItem.md)

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

##### Inherited from

[`ResClientTools`](ResClientTools.md).[`register`](ResClientTools.md#register-2)

***

### run()

> `static` **run**(`name`, `params`?): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:112](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L112)

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`run`](ResClientTools.md#run-2)

***

### runSync()

> `static` **runSync**(`name`, `params`?): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:120](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L120)

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`runSync`](ResClientTools.md#runsync-2)

***

### runWithPos()

> `static` **runWithPos**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:133](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L133)

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`runWithPos`](ResClientTools.md#runwithpos-2)

***

### runWithPosSync()

> `static` **runWithPosSync**(`name`, ...`params`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:141](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L141)

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`any`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`runWithPosSync`](ResClientTools.md#runwithpossync-2)

***

### seal()

> `static` **seal**\<`T`\>(`o`): `T`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es5.d.ts:216

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

[`ResClientTools`](ResClientTools.md).[`seal`](ResClientTools.md#seal)

***

### setApiRoot()

> `static` **setApiRoot**(`v`): `void`

Defined in: [packages/ai-tool/src/client-tools.ts:23](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/client-tools.ts#L23)

#### Parameters

##### v

`string`

#### Returns

`void`

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`setApiRoot`](ResClientTools.md#setapiroot)

***

### setPrototypeOf()

> `static` **setPrototypeOf**(`o`, `proto`): `any`

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:339

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

[`ResClientTools`](ResClientTools.md).[`setPrototypeOf`](ResClientTools.md#setprototypeof)

***

### unregister()

> `static` **unregister**(`name`): `undefined` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:184](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/tool-func.ts#L184)

#### Parameters

##### name

`string`

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[`ResClientTools`](ResClientTools.md).[`unregister`](ResClientTools.md#unregister-2)

***

### values()

#### Call Signature

> `static` **values**\<`T`\>(`o`): `T`[]

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:24

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

[`ResClientTools`](ResClientTools.md).[`values`](ResClientTools.md#values)

#### Call Signature

> `static` **values**(`o`): `any`[]

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2017.object.d.ts:30

Returns an array of values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`any`[]

##### Inherited from

[`ResClientTools`](ResClientTools.md).[`values`](ResClientTools.md#values)
