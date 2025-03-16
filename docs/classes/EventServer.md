[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / EventServer

# Class: EventServer

Defined in: [packages/ai-tool/src/funcs/event-server.ts:18](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-server.ts#L18)

## Extends

- [`ResServerTools`](ResServerTools.md)

## Indexable

\[`name`: `string`\]: `any`

## Constructors

### new EventServer()

> **new EventServer**(`name`, `options`): [`EventServer`](EventServer.md)

Defined in: [packages/ai-tool/src/res-server-tools.ts:27](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/res-server-tools.ts#L27)

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Parameters

##### name

`string` | `Function` | [`FuncItem`](../interfaces/FuncItem.md)

##### options

`any` = `{}`

#### Returns

[`EventServer`](EventServer.md)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`constructor`](ResServerTools.md#constructors)

## Properties

### $attributes

> **$attributes**: `Properties`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:5

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`$attributes`](ResServerTools.md#$attributes)

***

### action

> **action**: `"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"` = `'res'`

Defined in: [packages/ai-tool/src/res-server-tools.ts:21](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/res-server-tools.ts#L21)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`action`](ResServerTools.md#action)

***

### allowExportFunc?

> `optional` **allowExportFunc**: `boolean`

Defined in: [packages/ai-tool/src/server-tools.ts:14](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/server-tools.ts#L14)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`allowExportFunc`](ResServerTools.md#allowexportfunc)

***

### apiRoot?

> `optional` **apiRoot**: `string`

Defined in: [packages/ai-tool/src/utils/consts.ts:34](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/consts.ts#L34)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`apiRoot`](ResServerTools.md#apiroot)

***

### constructor

> **constructor**: `Function`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:125

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

`ResServerTools.constructor`

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

[`ResServerTools`](ResServerTools.md).[`defaultOptions`](ResServerTools.md#defaultoptions)

***

### depends

> **depends**: `object`

Defined in: [packages/ai-tool/src/funcs/event-server.ts:30](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-server.ts#L30)

#### event-bus

> **event-bus**: [`EventToolFunc`](EventToolFunc.md) = `event`

***

### description

> **description**: `string` = `'subscribe server sent event'`

Defined in: [packages/ai-tool/src/funcs/event-server.ts:28](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-server.ts#L28)

***

### fetchOptions?

> `optional` **fetchOptions**: `any`

Defined in: [packages/ai-tool/src/utils/consts.ts:36](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/utils/consts.ts#L36)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`fetchOptions`](ResServerTools.md#fetchoptions)

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:29](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L29)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`isApi`](ResServerTools.md#isapi)

***

### methods

> **methods**: `string`[]

Defined in: [packages/ai-tool/src/rpc-methods-server-tool.ts:11](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/rpc-methods-server-tool.ts#L11)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`methods`](ResServerTools.md#methods)

***

### name

> **name**: `string` = `EventName`

Defined in: [packages/ai-tool/src/funcs/event-server.ts:27](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-server.ts#L27)

#### Overrides

[`ResServerTools`](ResServerTools.md).[`name`](ResServerTools.md#name-1)

***

### nonExported1stChar

> **nonExported1stChar**: `string`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:78

the property with the default prefix '$' will not be exported.

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`nonExported1stChar`](ResServerTools.md#nonexported1stchar)

***

### params

> **params**: [`FuncParams`](../interfaces/FuncParams.md)

Defined in: [packages/ai-tool/src/res-server-tools.ts:22](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/res-server-tools.ts#L22)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`params`](ResServerTools.md#params)

***

### result

> **result**: `string` = `'event'`

Defined in: [packages/ai-tool/src/funcs/event-server.ts:29](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-server.ts#L29)

#### Overrides

[`ResServerTools`](ResServerTools.md).[`result`](ResServerTools.md#result)

***

### scope?

> `optional` **scope**: `any`

Defined in: [packages/ai-tool/src/tool-func.ts:26](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L26)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`scope`](ResServerTools.md#scope)

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

Defined in: [packages/ai-tool/src/tool-func.ts:28](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L28)

#### Parameters

##### this

[`ToolFunc`](ToolFunc.md)

##### options?

[`FuncItem`](../interfaces/FuncItem.md)

#### Returns

`void`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`setup`](ResServerTools.md#setup)

***

### stream?

> `optional` **stream**: `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:30](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L30)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`stream`](ResServerTools.md#stream)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: [packages/ai-tool/src/tool-func.ts:27](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L27)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`tags`](ResServerTools.md#tags)

***

### \_sse

> `static` **\_sse**: `undefined` \| [`SSEChannel`](SSEChannel.md)

Defined in: [packages/ai-tool/src/funcs/event-server.ts:19](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-server.ts#L19)

***

### dataPath

> `static` **dataPath**: `string`

Defined in: [packages/ai-tool/src/tool-func.ts:57](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L57)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`dataPath`](ResServerTools.md#datapath)

***

### ebListener()

> `static` **ebListener**: (`this`, ...`data`) => `void`

Defined in: [packages/ai-tool/src/funcs/event-server.ts:42](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-server.ts#L42)

#### Parameters

##### this

`Event`

##### data

...`any`[]

#### Returns

`void`

***

### items

> `static` **items**: [`Funcs`](../interfaces/Funcs.md) = `{}`

Defined in: [packages/ai-tool/src/tool-func.ts:56](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L56)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`items`](ResServerTools.md#items)

***

### SpecialRpcMethodNames

> `static` **SpecialRpcMethodNames**: `any`

Defined in: [packages/ai-tool/src/res-server-tools.ts:20](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/res-server-tools.ts#L20)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`SpecialRpcMethodNames`](ResServerTools.md#specialrpcmethodnames)

## Accessors

### SpecialRpcMethodNames

#### Get Signature

> **get** **SpecialRpcMethodNames**(): `any`

Defined in: [packages/ai-tool/src/rpc-methods-server-tool.ts:22](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/rpc-methods-server-tool.ts#L22)

##### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`SpecialRpcMethodNames`](ResServerTools.md#specialrpcmethodnames-1)

***

### sse

#### Get Signature

> **get** **sse**(): `any`

Defined in: [packages/ai-tool/src/funcs/event-server.ts:32](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-server.ts#L32)

##### Returns

`any`

***

### apiRoot

#### Get Signature

> **get** `static` **apiRoot**(): `undefined` \| `string`

Defined in: [packages/ai-tool/src/server-tools.ts:26](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/server-tools.ts#L26)

##### Returns

`undefined` \| `string`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`apiRoot`](ResServerTools.md#apiroot-1)

***

### sse

#### Get Signature

> **get** `static` **sse**(): [`SSEChannel`](SSEChannel.md)

Defined in: [packages/ai-tool/src/funcs/event-server.ts:20](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-server.ts#L20)

##### Returns

[`SSEChannel`](SSEChannel.md)

## Methods

### $publish()

> **$publish**(`__namedParameters`): `undefined` \| \{ `event`: `string`[]; \}

Defined in: [packages/ai-tool/src/funcs/event-server.ts:113](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-server.ts#L113)

#### Parameters

##### \_\_namedParameters

[`EventServerFuncParams`](../interfaces/EventServerFuncParams.md)

#### Returns

`undefined` \| \{ `event`: `string`[]; \}

***

### $sub()

> **$sub**(`__namedParameters`): `undefined` \| \{ `event`: `string` \| `string`[]; \}

Defined in: [packages/ai-tool/src/funcs/event-server.ts:95](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-server.ts#L95)

#### Parameters

##### \_\_namedParameters

[`EventServerFuncParams`](../interfaces/EventServerFuncParams.md)

#### Returns

`undefined` \| \{ `event`: `string` \| `string`[]; \}

***

### $unsub()

> **$unsub**(`__namedParameters`): `undefined` \| \{ `event`: `string` \| `string`[]; \}

Defined in: [packages/ai-tool/src/funcs/event-server.ts:104](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-server.ts#L104)

#### Parameters

##### \_\_namedParameters

[`EventServerFuncParams`](../interfaces/EventServerFuncParams.md)

#### Returns

`undefined` \| \{ `event`: `string` \| `string`[]; \}

***

### arr2ObjParams()

> **arr2ObjParams**(`params`): `any`[]

Defined in: [packages/ai-tool/src/tool-func.ts:236](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L236)

#### Parameters

##### params

`any`[]

#### Returns

`any`[]

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`arr2ObjParams`](ResServerTools.md#arr2objparams)

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

[`ResServerTools`](ResServerTools.md).[`assign`](ResServerTools.md#assign)

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

[`ResServerTools`](ResServerTools.md).[`assignProperty`](ResServerTools.md#assignproperty)

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

[`ResServerTools`](ResServerTools.md).[`assignPropertyTo`](ResServerTools.md#assignpropertyto)

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

[`ResServerTools`](ResServerTools.md).[`assignTo`](ResServerTools.md#assignto)

***

### cast()

> **cast**(`key`, `value`): `any`

Defined in: [packages/ai-tool/src/rpc-methods-server-tool.ts:48](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/rpc-methods-server-tool.ts#L48)

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`cast`](ResServerTools.md#cast)

***

### castParams()

> **castParams**(`params`): `RpcMethodsServerFuncParams`

Defined in: [packages/ai-tool/src/res-server-tools.ts:40](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/res-server-tools.ts#L40)

#### Parameters

##### params

`RpcMethodsServerFuncParams`

#### Returns

`RpcMethodsServerFuncParams`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`castParams`](ResServerTools.md#castparams)

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

[`ResServerTools`](ResServerTools.md).[`clone`](ResServerTools.md#clone)

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

[`ResServerTools`](ResServerTools.md).[`cloneTo`](ResServerTools.md#cloneto)

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

[`ResServerTools`](ResServerTools.md).[`defineProperties`](ResServerTools.md#defineproperties)

***

### delete()?

> `optional` **delete**(`__namedParameters`): `any`

Defined in: [packages/ai-tool/src/res-server-tools.ts:15](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/res-server-tools.ts#L15)

#### Parameters

##### \_\_namedParameters

[`ResServerFuncParams`](../interfaces/ResServerFuncParams.md)

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`delete`](ResServerTools.md#delete)

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

[`ResServerTools`](ResServerTools.md).[`exportTo`](ResServerTools.md#exportto)

***

### forward()

> **forward**(`events`): `void`

Defined in: [packages/ai-tool/src/funcs/event-server.ts:69](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-server.ts#L69)

#### Parameters

##### events

`string` | `string`[]

#### Returns

`void`

***

### func()

> **func**(`params`): `any`

Defined in: [packages/ai-tool/src/rpc-methods-server-tool.ts:68](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/rpc-methods-server-tool.ts#L68)

#### Parameters

##### params

`RpcMethodsServerFuncParams`

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`func`](ResServerTools.md#func)

***

### get()?

> `optional` **get**(`__namedParameters`): `any`

Defined in: [packages/ai-tool/src/res-server-tools.ts:12](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/res-server-tools.ts#L12)

#### Parameters

##### \_\_namedParameters

[`ResServerFuncParams`](../interfaces/ResServerFuncParams.md)

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`get`](ResServerTools.md#get)

***

### getFunc()

> **getFunc**(`name`?): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:289](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L289)

#### Parameters

##### name?

`string`

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`getFunc`](ResServerTools.md#getfunc)

***

### getFuncWithPos()

> **getFuncWithPos**(`name`?): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:313](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L313)

#### Parameters

##### name?

`string`

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`getFuncWithPos`](ResServerTools.md#getfuncwithpos)

***

### getMethodFromParams()

> **getMethodFromParams**(`params`): `undefined` \| `string`

Defined in: [packages/ai-tool/src/res-server-tools.ts:31](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/res-server-tools.ts#L31)

#### Parameters

##### params

[`ResServerFuncParams`](../interfaces/ResServerFuncParams.md)

#### Returns

`undefined` \| `string`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`getMethodFromParams`](ResServerTools.md#getmethodfromparams)

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:98

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`getProperties`](ResServerTools.md#getproperties)

***

### hasAsyncFeature()

> **hasAsyncFeature**(`feature`): `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:318](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L318)

#### Parameters

##### feature

[`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

#### Returns

`boolean`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`hasAsyncFeature`](ResServerTools.md#hasasyncfeature)

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

[`ResServerTools`](ResServerTools.md).[`hasOwnProperty`](ResServerTools.md#hasownproperty)

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

[`ResServerTools`](ResServerTools.md).[`initialize`](ResServerTools.md#initialize)

***

### initRpcMethods()

> **initRpcMethods**(`methods`): `void`

Defined in: [packages/ai-tool/src/rpc-methods-server-tool.ts:27](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/rpc-methods-server-tool.ts#L27)

#### Parameters

##### methods

`string`[] = `...`

#### Returns

`void`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`initRpcMethods`](ResServerTools.md#initrpcmethods)

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

[`ResServerTools`](ResServerTools.md).[`isPrototypeOf`](ResServerTools.md#isprototypeof)

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

[`ResServerTools`](ResServerTools.md).[`isSame`](ResServerTools.md#issame)

***

### isStream()

> **isStream**(`params`): `boolean`

Defined in: [packages/ai-tool/src/funcs/event-server.ts:127](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-server.ts#L127)

#### Parameters

##### params

[`ServerFuncParams`](../interfaces/ServerFuncParams.md)

#### Returns

`boolean`

#### Overrides

[`ResServerTools`](ResServerTools.md).[`isStream`](ResServerTools.md#isstream)

***

### list()

> **list**(`__namedParameters`): `void`

Defined in: [packages/ai-tool/src/funcs/event-server.ts:89](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-server.ts#L89)

#### Parameters

##### \_\_namedParameters

[`EventServerFuncParams`](../interfaces/EventServerFuncParams.md)

#### Returns

`void`

#### Overrides

[`ResServerTools`](ResServerTools.md).[`list`](ResServerTools.md#list)

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

[`ResServerTools`](ResServerTools.md).[`mergeTo`](ResServerTools.md#mergeto)

***

### obj2ArrParams()

> **obj2ArrParams**(`params`?): `any`[]

Defined in: [packages/ai-tool/src/tool-func.ts:249](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L249)

#### Parameters

##### params?

`any`

#### Returns

`any`[]

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`obj2ArrParams`](ResServerTools.md#obj2arrparams)

***

### post()?

> `optional` **post**(`options`): `any`

Defined in: [packages/ai-tool/src/res-server-tools.ts:13](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/res-server-tools.ts#L13)

#### Parameters

##### options

[`ResServerFuncParams`](../interfaces/ResServerFuncParams.md)

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`post`](ResServerTools.md#post)

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

[`ResServerTools`](ResServerTools.md).[`propertyIsEnumerable`](ResServerTools.md#propertyisenumerable)

***

### publishSSE()

> **publishSSE**(`data`, `event`): `any`

Defined in: [packages/ai-tool/src/funcs/event-server.ts:57](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-server.ts#L57)

#### Parameters

##### data

`any`

##### event

`string`

#### Returns

`any`

***

### put()?

> `optional` **put**(`__namedParameters`): `any`

Defined in: [packages/ai-tool/src/res-server-tools.ts:14](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/res-server-tools.ts#L14)

#### Parameters

##### \_\_namedParameters

[`ResServerFuncParams`](../interfaces/ResServerFuncParams.md)

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`put`](ResServerTools.md#put)

***

### register()

> **register**(): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:219](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L219)

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`register`](ResServerTools.md#register)

***

### run()

> **run**(`params`?): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:276](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L276)

#### Parameters

##### params?

`any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`run`](ResServerTools.md#run)

***

### runAs()

> **runAs**(`name`, `params`?): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:280](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L280)

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`runAs`](ResServerTools.md#runas)

***

### runAsSync()

> **runAsSync**(`name`, `params`?): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:284](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L284)

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`runAsSync`](ResServerTools.md#runassync)

***

### runSync()

> **runSync**(`params`?): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:262](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L262)

#### Parameters

##### params?

`any`

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`runSync`](ResServerTools.md#runsync)

***

### runWithPos()

> **runWithPos**(...`params`): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:305](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L305)

#### Parameters

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`runWithPos`](ResServerTools.md#runwithpos)

***

### runWithPosAs()

> **runWithPosAs**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:309](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L309)

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`runWithPosAs`](ResServerTools.md#runwithposas)

***

### runWithPosAsSync()

> **runWithPosAsSync**(`name`, ...`params`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:301](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L301)

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`runWithPosAsSync`](ResServerTools.md#runwithposassync)

***

### runWithPosSync()

> **runWithPosSync**(...`params`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:294](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L294)

#### Parameters

##### params

...`any`[]

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`runWithPosSync`](ResServerTools.md#runwithpossync)

***

### subscribeSSE()

> **subscribeSSE**(`req`, `res`, `events`?): `any`

Defined in: [packages/ai-tool/src/funcs/event-server.ts:61](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-server.ts#L61)

#### Parameters

##### req

`IncomingMessage`

##### res

`ServerResponse`

##### events?

`string` | `string`[]

#### Returns

`any`

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/abstract.d.ts:182

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`toJSON`](ResServerTools.md#tojson)

***

### toLocaleString()

> **toLocaleString**(): `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:131

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`toLocaleString`](ResServerTools.md#tolocalestring)

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

[`ResServerTools`](ResServerTools.md).[`toObject`](ResServerTools.md#toobject)

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:128

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`toString`](ResServerTools.md#tostring)

***

### unforward()

> **unforward**(`events`): `void`

Defined in: [packages/ai-tool/src/funcs/event-server.ts:80](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-server.ts#L80)

#### Parameters

##### events

`string` | `string`[]

#### Returns

`void`

***

### unregister()

> **unregister**(): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:232](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L232)

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`unregister`](ResServerTools.md#unregister)

***

### valueOf()

> **valueOf**(): `Object`

Defined in: node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:134

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`valueOf`](ResServerTools.md#valueof)

***

### alreadyForward()

> `static` **alreadyForward**(`event`): `undefined` \| `true`

Defined in: [packages/ai-tool/src/funcs/event-server.ts:50](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-server.ts#L50)

#### Parameters

##### event

`string`

#### Returns

`undefined` \| `true`

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

[`ResServerTools`](ResServerTools.md).[`assign`](ResServerTools.md#assign-2)

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

[`ResServerTools`](ResServerTools.md).[`assign`](ResServerTools.md#assign-2)

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

[`ResServerTools`](ResServerTools.md).[`assign`](ResServerTools.md#assign-2)

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

[`ResServerTools`](ResServerTools.md).[`assign`](ResServerTools.md#assign-2)

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

[`ResServerTools`](ResServerTools.md).[`create`](ResServerTools.md#create)

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

[`ResServerTools`](ResServerTools.md).[`create`](ResServerTools.md#create)

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

[`ResServerTools`](ResServerTools.md).[`defineProperties`](ResServerTools.md#defineproperties-2)

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

[`ResServerTools`](ResServerTools.md).[`defineProperty`](ResServerTools.md#defineproperty)

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

[`ResServerTools`](ResServerTools.md).[`entries`](ResServerTools.md#entries)

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

[`ResServerTools`](ResServerTools.md).[`entries`](ResServerTools.md#entries)

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

[`ResServerTools`](ResServerTools.md).[`freeze`](ResServerTools.md#freeze)

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

[`ResServerTools`](ResServerTools.md).[`freeze`](ResServerTools.md#freeze)

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

[`ResServerTools`](ResServerTools.md).[`freeze`](ResServerTools.md#freeze)

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

[`ResServerTools`](ResServerTools.md).[`fromEntries`](ResServerTools.md#fromentries)

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

[`ResServerTools`](ResServerTools.md).[`fromEntries`](ResServerTools.md#fromentries)

***

### get()

> `static` **get**(`name`): [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:59](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L59)

#### Parameters

##### name

`string`

#### Returns

[`ToolFunc`](ToolFunc.md)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`get`](ResServerTools.md#get-2)

***

### getAllByTag()

> `static` **getAllByTag**(`tagName`): [`ToolFunc`](ToolFunc.md)[]

Defined in: [packages/ai-tool/src/tool-func.ts:87](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L87)

#### Parameters

##### tagName

`string`

#### Returns

[`ToolFunc`](ToolFunc.md)[]

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`getAllByTag`](ResServerTools.md#getallbytag)

***

### getByTag()

> `static` **getByTag**(`tagName`): `undefined` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:67](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L67)

#### Parameters

##### tagName

`string`

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`getByTag`](ResServerTools.md#getbytag)

***

### getFunc()

> `static` **getFunc**(`name`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:128](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L128)

#### Parameters

##### name

`string`

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`getFunc`](ResServerTools.md#getfunc-2)

***

### getFuncWithPos()

> `static` **getFuncWithPos**(`name`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:149](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L149)

#### Parameters

##### name

`string`

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`getFuncWithPos`](ResServerTools.md#getfuncwithpos-2)

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

[`ResServerTools`](ResServerTools.md).[`getOwnPropertyDescriptor`](ResServerTools.md#getownpropertydescriptor)

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

[`ResServerTools`](ResServerTools.md).[`getOwnPropertyDescriptors`](ResServerTools.md#getownpropertydescriptors)

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

[`ResServerTools`](ResServerTools.md).[`getOwnPropertyNames`](ResServerTools.md#getownpropertynames)

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

[`ResServerTools`](ResServerTools.md).[`getOwnPropertySymbols`](ResServerTools.md#getownpropertysymbols)

***

### getProperties()

> `static` **getProperties**(): `PropDescriptors`

Defined in: node\_modules/.pnpm/property-manager@2.0.0/node\_modules/property-manager/lib/advance.d.ts:10

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`getProperties`](ResServerTools.md#getproperties-2)

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

[`ResServerTools`](ResServerTools.md).[`getPrototypeOf`](ResServerTools.md#getprototypeof)

***

### hasAsyncFeature()

> `static` **hasAsyncFeature**(`feature`): `boolean`

Defined in: [packages/ai-tool/src/tool-func.ts:105](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L105)

#### Parameters

##### feature

[`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

#### Returns

`boolean`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`hasAsyncFeature`](ResServerTools.md#hasasyncfeature-2)

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

[`ResServerTools`](ResServerTools.md).[`hasOwn`](ResServerTools.md#hasown)

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

[`ResServerTools`](ResServerTools.md).[`is`](ResServerTools.md#is)

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

[`ResServerTools`](ResServerTools.md).[`isExtensible`](ResServerTools.md#isextensible)

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

[`ResServerTools`](ResServerTools.md).[`isFrozen`](ResServerTools.md#isfrozen)

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

[`ResServerTools`](ResServerTools.md).[`isSealed`](ResServerTools.md#issealed)

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

[`ResServerTools`](ResServerTools.md).[`keys`](ResServerTools.md#keys)

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

[`ResServerTools`](ResServerTools.md).[`keys`](ResServerTools.md#keys)

***

### list()

> `static` **list**(): [`Funcs`](../interfaces/Funcs.md)

Defined in: [packages/ai-tool/src/tool-func.ts:63](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L63)

#### Returns

[`Funcs`](../interfaces/Funcs.md)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`list`](ResServerTools.md#list-2)

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

[`ResServerTools`](ResServerTools.md).[`preventExtensions`](ResServerTools.md#preventextensions)

***

### publish()

> `static` **publish**(`data`, `event`): `undefined` \| `number`

Defined in: [packages/ai-tool/src/funcs/event-server.ts:36](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-server.ts#L36)

#### Parameters

##### data

`any`

##### event

`string`

#### Returns

`undefined` \| `number`

***

### register()

#### Call Signature

> `static` **register**(`name`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:154](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L154)

##### Parameters

###### name

`string`

###### options

[`FuncItem`](../interfaces/FuncItem.md)

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

##### Inherited from

[`ResServerTools`](ResServerTools.md).[`register`](ResServerTools.md#register-2)

#### Call Signature

> `static` **register**(`func`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:155](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L155)

##### Parameters

###### func

`Function`

###### options

[`FuncItem`](../interfaces/FuncItem.md)

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

##### Inherited from

[`ResServerTools`](ResServerTools.md).[`register`](ResServerTools.md#register-2)

#### Call Signature

> `static` **register**(`name`, `options`?): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:156](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L156)

##### Parameters

###### name

`string` | `Function` | [`ToolFunc`](ToolFunc.md) | [`FuncItem`](../interfaces/FuncItem.md)

###### options?

[`FuncItem`](../interfaces/FuncItem.md)

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

##### Inherited from

[`ResServerTools`](ResServerTools.md).[`register`](ResServerTools.md#register-2)

***

### run()

> `static` **run**(`name`, `params`?): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:112](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L112)

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`run`](ResServerTools.md#run-2)

***

### runSync()

> `static` **runSync**(`name`, `params`?): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:120](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L120)

#### Parameters

##### name

`string`

##### params?

`any`

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`runSync`](ResServerTools.md#runsync-2)

***

### runWithPos()

> `static` **runWithPos**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: [packages/ai-tool/src/tool-func.ts:133](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L133)

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`runWithPos`](ResServerTools.md#runwithpos-2)

***

### runWithPosSync()

> `static` **runWithPosSync**(`name`, ...`params`): `any`

Defined in: [packages/ai-tool/src/tool-func.ts:141](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L141)

#### Parameters

##### name

`string`

##### params

...`any`[]

#### Returns

`any`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`runWithPosSync`](ResServerTools.md#runwithpossync-2)

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

[`ResServerTools`](ResServerTools.md).[`seal`](ResServerTools.md#seal)

***

### setApiRoot()

> `static` **setApiRoot**(`v`): `void`

Defined in: [packages/ai-tool/src/server-tools.ts:30](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/server-tools.ts#L30)

#### Parameters

##### v

`string`

#### Returns

`void`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`setApiRoot`](ResServerTools.md#setapiroot)

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

[`ResServerTools`](ResServerTools.md).[`setPrototypeOf`](ResServerTools.md#setprototypeof)

***

### subscribe()

> `static` **subscribe**(`req`, `res`, `events`?): `object`

Defined in: [packages/ai-tool/src/funcs/event-server.ts:46](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/funcs/event-server.ts#L46)

#### Parameters

##### req

`IncomingMessage`

##### res

`ServerResponse`

##### events?

`string`[]

#### Returns

`object`

##### events

> **events**: `undefined` \| `Events`

##### req

> **req**: `IncomingMessage`

##### res

> **res**: `ServerResponse`\<`IncomingMessage`\>

***

### toJSON()

> `static` **toJSON**(): `object`

Defined in: [packages/ai-tool/src/server-tools.ts:44](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/server-tools.ts#L44)

#### Returns

`object`

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`toJSON`](ResServerTools.md#tojson-2)

***

### unregister()

> `static` **unregister**(`name`): `undefined` \| [`ToolFunc`](ToolFunc.md)

Defined in: [packages/ai-tool/src/tool-func.ts:184](https://github.com/isdk/ai-tool.js/blob/79d5773fa454dc7789b1291b1ebd73e4c1b93154/src/tool-func.ts#L184)

#### Parameters

##### name

`string`

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[`ResServerTools`](ResServerTools.md).[`unregister`](ResServerTools.md#unregister-2)

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

[`ResServerTools`](ResServerTools.md).[`values`](ResServerTools.md#values)

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

[`ResServerTools`](ResServerTools.md).[`values`](ResServerTools.md#values)
