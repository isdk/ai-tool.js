[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / EventClient

# Class: EventClient

## Hierarchy

- [`ResClientTools`](ResClientTools.md)

  ↳ **`EventClient`**

## Table of contents

### Constructors

- [constructor](EventClient.md#constructor)

### Properties

- [$attributes](EventClient.md#$attributes)
- [\_es](EventClient.md#_es)
- [\_esEvents](EventClient.md#_esevents)
- [\_forwardEvents](EventClient.md#_forwardevents)
- [\_sseEvents](EventClient.md#_sseevents)
- [action](EventClient.md#action)
- [apiRoot](EventClient.md#apiroot)
- [constructor](EventClient.md#constructor-1)
- [defaultOptions](EventClient.md#defaultoptions)
- [description](EventClient.md#description)
- [ebListener](EventClient.md#eblistener)
- [fetchOptions](EventClient.md#fetchoptions)
- [name](EventClient.md#name)
- [nonExported1stChar](EventClient.md#nonexported1stchar)
- [params](EventClient.md#params)
- [result](EventClient.md#result)
- [scope](EventClient.md#scope)
- [setup](EventClient.md#setup)
- [should](EventClient.md#should)
- [stream](EventClient.md#stream)
- [tags](EventClient.md#tags)
- [dataPath](EventClient.md#datapath)
- [items](EventClient.md#items)

### Accessors

- [active](EventClient.md#active)
- [evtSource](EventClient.md#evtsource)
- [apiRoot](EventClient.md#apiroot-1)

### Methods

- [\_func](EventClient.md#_func)
- [arr2ObjParams](EventClient.md#arr2objparams)
- [assign](EventClient.md#assign)
- [assignMethods](EventClient.md#assignmethods)
- [assignProperty](EventClient.md#assignproperty)
- [assignPropertyTo](EventClient.md#assignpropertyto)
- [assignTo](EventClient.md#assignto)
- [clone](EventClient.md#clone)
- [cloneTo](EventClient.md#cloneto)
- [defineProperties](EventClient.md#defineproperties)
- [delete](EventClient.md#delete)
- [errorFrom](EventClient.md#errorfrom)
- [esListener](EventClient.md#eslistener)
- [exportTo](EventClient.md#exportto)
- [fetch](EventClient.md#fetch)
- [forwardEvent](EventClient.md#forwardevent)
- [func](EventClient.md#func)
- [get](EventClient.md#get)
- [getFunc](EventClient.md#getfunc)
- [getFuncWithPos](EventClient.md#getfuncwithpos)
- [getProperties](EventClient.md#getproperties)
- [getUrlParams](EventClient.md#geturlparams)
- [hasAsyncFeature](EventClient.md#hasasyncfeature)
- [hasOwnProperty](EventClient.md#hasownproperty)
- [init](EventClient.md#init)
- [initEventSource](EventClient.md#initeventsource)
- [initialize](EventClient.md#initialize)
- [isPrototypeOf](EventClient.md#isprototypeof)
- [isSame](EventClient.md#issame)
- [list](EventClient.md#list)
- [mergeTo](EventClient.md#mergeto)
- [obj2ArrParams](EventClient.md#obj2arrparams)
- [post](EventClient.md#post)
- [propertyIsEnumerable](EventClient.md#propertyisenumerable)
- [put](EventClient.md#put)
- [register](EventClient.md#register)
- [run](EventClient.md#run)
- [runAs](EventClient.md#runas)
- [runAsSync](EventClient.md#runassync)
- [runSync](EventClient.md#runsync)
- [runWithPos](EventClient.md#runwithpos)
- [runWithPosAs](EventClient.md#runwithposas)
- [runWithPosAsSync](EventClient.md#runwithposassync)
- [runWithPosSync](EventClient.md#runwithpossync)
- [subscribe](EventClient.md#subscribe)
- [toJSON](EventClient.md#tojson)
- [toLocaleString](EventClient.md#tolocalestring)
- [toObject](EventClient.md#toobject)
- [toString](EventClient.md#tostring)
- [unforwardEvent](EventClient.md#unforwardevent)
- [unregister](EventClient.md#unregister)
- [unsubscribe](EventClient.md#unsubscribe)
- [valueOf](EventClient.md#valueof)
- [assign](EventClient.md#assign-1)
- [create](EventClient.md#create)
- [defineProperties](EventClient.md#defineproperties-1)
- [defineProperty](EventClient.md#defineproperty)
- [entries](EventClient.md#entries)
- [fetch](EventClient.md#fetch-1)
- [freeze](EventClient.md#freeze)
- [fromEntries](EventClient.md#fromentries)
- [get](EventClient.md#get-1)
- [getAllByTag](EventClient.md#getallbytag)
- [getByTag](EventClient.md#getbytag)
- [getFunc](EventClient.md#getfunc-1)
- [getFuncWithPos](EventClient.md#getfuncwithpos-1)
- [getOwnPropertyDescriptor](EventClient.md#getownpropertydescriptor)
- [getOwnPropertyDescriptors](EventClient.md#getownpropertydescriptors)
- [getOwnPropertyNames](EventClient.md#getownpropertynames)
- [getOwnPropertySymbols](EventClient.md#getownpropertysymbols)
- [getProperties](EventClient.md#getproperties-1)
- [getPrototypeOf](EventClient.md#getprototypeof)
- [hasAsyncFeature](EventClient.md#hasasyncfeature-1)
- [hasOwn](EventClient.md#hasown)
- [is](EventClient.md#is)
- [isExtensible](EventClient.md#isextensible)
- [isFrozen](EventClient.md#isfrozen)
- [isSealed](EventClient.md#issealed)
- [keys](EventClient.md#keys)
- [list](EventClient.md#list-1)
- [loadFrom](EventClient.md#loadfrom)
- [loadFromSync](EventClient.md#loadfromsync)
- [preventExtensions](EventClient.md#preventextensions)
- [register](EventClient.md#register-1)
- [run](EventClient.md#run-1)
- [runSync](EventClient.md#runsync-1)
- [runWithPos](EventClient.md#runwithpos-1)
- [runWithPosSync](EventClient.md#runwithpossync-1)
- [seal](EventClient.md#seal)
- [setApiRoot](EventClient.md#setapiroot)
- [setPrototypeOf](EventClient.md#setprototypeof)
- [unregister](EventClient.md#unregister-1)
- [values](EventClient.md#values)

## Constructors

### constructor

• **new EventClient**(`name`, `options?`): [`EventClient`](EventClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| [`FuncItem`](../interfaces/FuncItem.md) |
| `options` | `any` |

#### Returns

[`EventClient`](EventClient.md)

#### Inherited from

[ResClientTools](ResClientTools.md).[constructor](ResClientTools.md#constructor)

#### Defined in

[packages/ai-tool/src/tool-func.ts:208](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L208)

## Properties

### $attributes

• **$attributes**: `Properties`

#### Inherited from

[ResClientTools](ResClientTools.md).[$attributes](ResClientTools.md#$attributes)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/advance.d.ts:5

___

### \_es

• **\_es**: `undefined` \| `EventSource`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:13](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/funcs/event-client.ts#L13)

___

### \_esEvents

• **\_esEvents**: `undefined` \| `string`[]

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:15](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/funcs/event-client.ts#L15)

___

### \_forwardEvents

• **\_forwardEvents**: `Set`\<`string`\>

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:18](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/funcs/event-client.ts#L18)

___

### \_sseEvents

• **\_sseEvents**: `Record`\<`string`, (`e`: `MessageEvent`\<`any`\>) => `void`\> = `{}`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:17](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/funcs/event-client.ts#L17)

___

### action

• `Optional` **action**: ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"list"`` \| ``"res"``

#### Inherited from

[ResClientTools](ResClientTools.md).[action](ResClientTools.md#action)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:36](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/utils/consts.ts#L36)

___

### apiRoot

• **apiRoot**: `undefined` \| `string`

#### Inherited from

[ResClientTools](ResClientTools.md).[apiRoot](ResClientTools.md#apiroot)

#### Defined in

[packages/ai-tool/src/client-tools.ts:16](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/client-tools.ts#L16)

___

### constructor

• **constructor**: `Function`

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

ResClientTools.constructor

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

[ResClientTools](ResClientTools.md).[defaultOptions](ResClientTools.md#defaultoptions)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:74

___

### description

• **description**: `string` = `'subscribe server sent event'`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:45](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/funcs/event-client.ts#L45)

___

### ebListener

• **ebListener**: (`this`: `Event`, ...`data`: `any`[]) => `Promise`\<`void`\>

#### Type declaration

▸ (`this`, `...data`): `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `Event` |
| `...data` | `any`[] |

##### Returns

`Promise`\<`void`\>

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:86](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/funcs/event-client.ts#L86)

___

### fetchOptions

• `Optional` **fetchOptions**: `any`

#### Inherited from

[ResClientTools](ResClientTools.md).[fetchOptions](ResClientTools.md#fetchoptions)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:37](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/utils/consts.ts#L37)

___

### name

• **name**: `string` = `EventName`

#### Overrides

[ResClientTools](ResClientTools.md).[name](ResClientTools.md#name)

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:44](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/funcs/event-client.ts#L44)

___

### nonExported1stChar

• **nonExported1stChar**: `string`

the property with the default prefix '$' will not be exported.

#### Inherited from

[ResClientTools](ResClientTools.md).[nonExported1stChar](ResClientTools.md#nonexported1stchar)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:78

___

### params

• `Optional` **params**: [`FuncParams`](../interfaces/FuncParams.md) \| [`FuncParam`](../interfaces/FuncParam.md)[]

#### Inherited from

[ResClientTools](ResClientTools.md).[params](ResClientTools.md#params)

#### Defined in

[packages/ai-tool/src/tool-func.ts:42](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L42)

___

### result

• `Optional` **result**: `string`

#### Inherited from

[ResClientTools](ResClientTools.md).[result](ResClientTools.md#result)

#### Defined in

[packages/ai-tool/src/tool-func.ts:43](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L43)

___

### scope

• `Optional` **scope**: `any`

#### Inherited from

[ResClientTools](ResClientTools.md).[scope](ResClientTools.md#scope)

#### Defined in

[packages/ai-tool/src/tool-func.ts:44](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L44)

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

[ResClientTools](ResClientTools.md).[setup](ResClientTools.md#setup)

#### Defined in

[packages/ai-tool/src/tool-func.ts:46](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L46)

___

### should

• **should**: `Assertion`

#### Inherited from

[ResClientTools](ResClientTools.md).[should](ResClientTools.md#should)

#### Defined in

node_modules/.pnpm/@types+chai@4.3.16/node_modules/@types/chai/index.d.ts:2100

___

### stream

• `Optional` **stream**: `boolean`

#### Inherited from

[ResClientTools](ResClientTools.md).[stream](ResClientTools.md#stream)

#### Defined in

[packages/ai-tool/src/utils/consts.ts:38](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/utils/consts.ts#L38)

___

### tags

• `Optional` **tags**: `string` \| `string`[]

#### Inherited from

[ResClientTools](ResClientTools.md).[tags](ResClientTools.md#tags)

#### Defined in

[packages/ai-tool/src/tool-func.ts:45](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L45)

___

### dataPath

▪ `Static` **dataPath**: `string`

#### Inherited from

[ResClientTools](ResClientTools.md).[dataPath](ResClientTools.md#datapath)

#### Defined in

[packages/ai-tool/src/tool-func.ts:73](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L73)

___

### items

▪ `Static` **items**: [`Funcs`](../interfaces/Funcs.md) = `{}`

#### Inherited from

[ResClientTools](ResClientTools.md).[items](ResClientTools.md#items)

#### Defined in

[packages/ai-tool/src/tool-func.ts:72](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L72)

## Accessors

### active

• `get` **active**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:29](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/funcs/event-client.ts#L29)

• `set` **active**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:33](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/funcs/event-client.ts#L33)

___

### evtSource

• `get` **evtSource**(): `EventSource`

#### Returns

`EventSource`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:20](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/funcs/event-client.ts#L20)

___

### apiRoot

• `get` **apiRoot**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

ResClientTools.apiRoot

#### Defined in

[packages/ai-tool/src/client-tools.ts:19](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/client-tools.ts#L19)

## Methods

### \_func

▸ **_func**(`action`, `options`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"list"`` \| ``"res"`` |
| `options` | [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md) |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[ResClientTools](ResClientTools.md).[_func](ResClientTools.md#_func)

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:39](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/res-client-tools.ts#L39)

___

### arr2ObjParams

▸ **arr2ObjParams**(`params`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any`[] |

#### Returns

`any`[]

#### Inherited from

[ResClientTools](ResClientTools.md).[arr2ObjParams](ResClientTools.md#arr2objparams)

#### Defined in

[packages/ai-tool/src/tool-func.ts:252](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L252)

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

[ResClientTools](ResClientTools.md).[assign](ResClientTools.md#assign)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:106

___

### assignMethods

▸ **assignMethods**(`methods`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `methods` | `string`[] |

#### Returns

`void`

#### Inherited from

[ResClientTools](ResClientTools.md).[assignMethods](ResClientTools.md#assignmethods)

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:56](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/res-client-tools.ts#L56)

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

[ResClientTools](ResClientTools.md).[assignProperty](ResClientTools.md#assignproperty)

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

[ResClientTools](ResClientTools.md).[assignPropertyTo](ResClientTools.md#assignpropertyto)

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

[ResClientTools](ResClientTools.md).[assignTo](ResClientTools.md#assignto)

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

[ResClientTools](ResClientTools.md).[clone](ResClientTools.md#clone)

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

[ResClientTools](ResClientTools.md).[cloneTo](ResClientTools.md#cloneto)

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

[ResClientTools](ResClientTools.md).[defineProperties](ResClientTools.md#defineproperties)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:89

___

### delete

▸ **delete**(`«destructured»`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md) |

#### Returns

`any`

#### Inherited from

[ResClientTools](ResClientTools.md).[delete](ResClientTools.md#delete)

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:15](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/res-client-tools.ts#L15)

___

### errorFrom

▸ **errorFrom**(`res`): `Promise`\<[`CommonError`](CommonError.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | `Response` |

#### Returns

`Promise`\<[`CommonError`](CommonError.md)\>

#### Inherited from

[ResClientTools](ResClientTools.md).[errorFrom](ResClientTools.md#errorfrom)

#### Defined in

[packages/ai-tool/src/client-tools.ts:112](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/client-tools.ts#L112)

___

### esListener

▸ **esListener**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MessageEvent`\<`any`\> |

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:69](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/funcs/event-client.ts#L69)

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

[ResClientTools](ResClientTools.md).[exportTo](ResClientTools.md#exportto)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:173

___

### fetch

▸ **fetch**(`options`, `action`): `Promise`\<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md) |
| `action` | ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"list"`` \| ``"res"`` |

#### Returns

`Promise`\<`Response`\>

#### Inherited from

[ResClientTools](ResClientTools.md).[fetch](ResClientTools.md#fetch)

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:20](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/res-client-tools.ts#L20)

___

### forwardEvent

▸ **forwardEvent**(`events`): `void`

forward local event(s) to server

subscribe these local events to forward/publish to server

Note: pls backendEventable(ClientTools or EventClient) first

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` \| `string`[] |

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:140](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/funcs/event-client.ts#L140)

___

### func

▸ **func**(`options`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md) |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[ResClientTools](ResClientTools.md).[func](ResClientTools.md#func)

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:48](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/res-client-tools.ts#L48)

___

### get

▸ **get**(`«destructured»`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md) |

#### Returns

`any`

#### Inherited from

[ResClientTools](ResClientTools.md).[get](ResClientTools.md#get)

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:12](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/res-client-tools.ts#L12)

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

[ResClientTools](ResClientTools.md).[getFunc](ResClientTools.md#getfunc)

#### Defined in

[packages/ai-tool/src/tool-func.ts:305](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L305)

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

[ResClientTools](ResClientTools.md).[getFuncWithPos](ResClientTools.md#getfuncwithpos)

#### Defined in

[packages/ai-tool/src/tool-func.ts:329](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L329)

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

**`Abstract`**

#### Inherited from

[ResClientTools](ResClientTools.md).[getProperties](ResClientTools.md#getproperties)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:98

___

### getUrlParams

▸ **getUrlParams**(`objParam`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `objParam` | `any` |

#### Returns

`string`

#### Inherited from

[ResClientTools](ResClientTools.md).[getUrlParams](ResClientTools.md#geturlparams)

#### Defined in

[packages/ai-tool/src/client-tools.ts:63](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/client-tools.ts#L63)

___

### hasAsyncFeature

▸ **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | [`AsyncFeatureBits`](../enums/AsyncFeatureBits.md) |

#### Returns

`boolean`

#### Inherited from

[ResClientTools](ResClientTools.md).[hasAsyncFeature](ResClientTools.md#hasasyncfeature)

#### Defined in

[packages/ai-tool/src/tool-func.ts:334](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L334)

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

[ResClientTools](ResClientTools.md).[hasOwnProperty](ResClientTools.md#hasownproperty)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:140

___

### init

▸ **init**(`events`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` \| `string`[] |

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:172](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/funcs/event-client.ts#L172)

___

### initEventSource

▸ **initEventSource**(`events?`): `EventSource`

#### Parameters

| Name | Type |
| :------ | :------ |
| `events?` | `string` \| `string`[] |

#### Returns

`EventSource`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:47](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/funcs/event-client.ts#L47)

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

[ResClientTools](ResClientTools.md).[initialize](ResClientTools.md#initialize)

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

[ResClientTools](ResClientTools.md).[isPrototypeOf](ResClientTools.md#isprototypeof)

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

[ResClientTools](ResClientTools.md).[isSame](ResClientTools.md#issame)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:200

___

### list

▸ **list**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md) |

#### Returns

`any`

#### Inherited from

[ResClientTools](ResClientTools.md).[list](ResClientTools.md#list)

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:16](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/res-client-tools.ts#L16)

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

[ResClientTools](ResClientTools.md).[mergeTo](ResClientTools.md#mergeto)

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

[ResClientTools](ResClientTools.md).[obj2ArrParams](ResClientTools.md#obj2arrparams)

#### Defined in

[packages/ai-tool/src/tool-func.ts:265](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L265)

___

### post

▸ **post**(`options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md) |

#### Returns

`any`

#### Inherited from

[ResClientTools](ResClientTools.md).[post](ResClientTools.md#post)

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:13](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/res-client-tools.ts#L13)

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

[ResClientTools](ResClientTools.md).[propertyIsEnumerable](ResClientTools.md#propertyisenumerable)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:152

___

### put

▸ **put**(`«destructured»`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ResClientFuncParams`](../interfaces/ResClientFuncParams.md) |

#### Returns

`any`

#### Inherited from

[ResClientTools](ResClientTools.md).[put](ResClientTools.md#put)

#### Defined in

[packages/ai-tool/src/res-client-tools.ts:14](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/res-client-tools.ts#L14)

___

### register

▸ **register**(): `boolean` \| [`ToolFunc`](ToolFunc.md)

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[ResClientTools](ResClientTools.md).[register](ResClientTools.md#register)

#### Defined in

[packages/ai-tool/src/tool-func.ts:235](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L235)

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

[ResClientTools](ResClientTools.md).[run](ResClientTools.md#run)

#### Defined in

[packages/ai-tool/src/tool-func.ts:292](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L292)

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

[ResClientTools](ResClientTools.md).[runAs](ResClientTools.md#runas)

#### Defined in

[packages/ai-tool/src/tool-func.ts:296](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L296)

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

[ResClientTools](ResClientTools.md).[runAsSync](ResClientTools.md#runassync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:300](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L300)

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

[ResClientTools](ResClientTools.md).[runSync](ResClientTools.md#runsync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:278](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L278)

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

[ResClientTools](ResClientTools.md).[runWithPos](ResClientTools.md#runwithpos)

#### Defined in

[packages/ai-tool/src/tool-func.ts:321](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L321)

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

[ResClientTools](ResClientTools.md).[runWithPosAs](ResClientTools.md#runwithposas)

#### Defined in

[packages/ai-tool/src/tool-func.ts:325](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L325)

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

[ResClientTools](ResClientTools.md).[runWithPosAsSync](ResClientTools.md#runwithposassync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:317](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L317)

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

[ResClientTools](ResClientTools.md).[runWithPosSync](ResClientTools.md#runwithpossync)

#### Defined in

[packages/ai-tool/src/tool-func.ts:310](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L310)

___

### subscribe

▸ **subscribe**(`events`): `Promise`\<`any`\>

subscribe server sent event(SSE)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` \| `string`[] |

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:98](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/funcs/event-client.ts#L98)

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

[ResClientTools](ResClientTools.md).[toJSON](ResClientTools.md#tojson)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:182

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

[ResClientTools](ResClientTools.md).[toLocaleString](ResClientTools.md#tolocalestring)

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

[ResClientTools](ResClientTools.md).[toObject](ResClientTools.md#toobject)

#### Defined in

node_modules/.pnpm/property-manager@2.0.0-alpha.5/node_modules/property-manager/lib/abstract.d.ts:181

___

### toString

▸ **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

[ResClientTools](ResClientTools.md).[toString](ResClientTools.md#tostring)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:128

___

### unforwardEvent

▸ **unforwardEvent**(`events`): `void`

unforward local event(s) to server

unsubscribe these local events not to forward/publish to server

Note: pls backendEventable(ClientTools or EventClient) first

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` \| `string`[] |

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:160](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/funcs/event-client.ts#L160)

___

### unregister

▸ **unregister**(): `any`

#### Returns

`any`

#### Inherited from

[ResClientTools](ResClientTools.md).[unregister](ResClientTools.md#unregister)

#### Defined in

[packages/ai-tool/src/tool-func.ts:248](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L248)

___

### unsubscribe

▸ **unsubscribe**(`events`): `Promise`\<`any`\>

unsubscribe server sent event(SSE)

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `string` \| `string`[] |

#### Returns

`Promise`\<`any`\>

#### Defined in

[packages/ai-tool/src/funcs/event-client.ts:117](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/funcs/event-client.ts#L117)

___

### valueOf

▸ **valueOf**(): `Object`

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

[ResClientTools](ResClientTools.md).[valueOf](ResClientTools.md#valueof)

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

[ResClientTools](ResClientTools.md).[assign](ResClientTools.md#assign-1)

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

[ResClientTools](ResClientTools.md).[assign](ResClientTools.md#assign-1)

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

[ResClientTools](ResClientTools.md).[assign](ResClientTools.md#assign-1)

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

[ResClientTools](ResClientTools.md).[assign](ResClientTools.md#assign-1)

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

[ResClientTools](ResClientTools.md).[create](ResClientTools.md#create)

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

[ResClientTools](ResClientTools.md).[create](ResClientTools.md#create)

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

[ResClientTools](ResClientTools.md).[defineProperties](ResClientTools.md#defineproperties-1)

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

[ResClientTools](ResClientTools.md).[defineProperty](ResClientTools.md#defineproperty)

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

[ResClientTools](ResClientTools.md).[entries](ResClientTools.md#entries)

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

[ResClientTools](ResClientTools.md).[entries](ResClientTools.md#entries)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:42

___

### fetch

▸ **fetch**(`name`, `objParam?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `objParam?` | `any` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[ResClientTools](ResClientTools.md).[fetch](ResClientTools.md#fetch-1)

#### Defined in

[packages/ai-tool/src/client-tools.ts:56](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/client-tools.ts#L56)

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

[ResClientTools](ResClientTools.md).[freeze](ResClientTools.md#freeze)

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

[ResClientTools](ResClientTools.md).[freeze](ResClientTools.md#freeze)

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

[ResClientTools](ResClientTools.md).[freeze](ResClientTools.md#freeze)

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

[ResClientTools](ResClientTools.md).[fromEntries](ResClientTools.md#fromentries)

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

[ResClientTools](ResClientTools.md).[fromEntries](ResClientTools.md#fromentries)

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

[ResClientTools](ResClientTools.md).[get](ResClientTools.md#get-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:75](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L75)

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

[ResClientTools](ResClientTools.md).[getAllByTag](ResClientTools.md#getallbytag)

#### Defined in

[packages/ai-tool/src/tool-func.ts:103](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L103)

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

[ResClientTools](ResClientTools.md).[getByTag](ResClientTools.md#getbytag)

#### Defined in

[packages/ai-tool/src/tool-func.ts:83](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L83)

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

[ResClientTools](ResClientTools.md).[getFunc](ResClientTools.md#getfunc-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:144](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L144)

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

[ResClientTools](ResClientTools.md).[getFuncWithPos](ResClientTools.md#getfuncwithpos-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:165](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L165)

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

[ResClientTools](ResClientTools.md).[getOwnPropertyDescriptor](ResClientTools.md#getownpropertydescriptor)

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

[ResClientTools](ResClientTools.md).[getOwnPropertyDescriptors](ResClientTools.md#getownpropertydescriptors)

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

[ResClientTools](ResClientTools.md).[getOwnPropertyNames](ResClientTools.md#getownpropertynames)

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

[ResClientTools](ResClientTools.md).[getOwnPropertySymbols](ResClientTools.md#getownpropertysymbols)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:317

___

### getProperties

▸ **getProperties**(): `PropDescriptors`

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

[ResClientTools](ResClientTools.md).[getProperties](ResClientTools.md#getproperties-1)

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

[ResClientTools](ResClientTools.md).[getPrototypeOf](ResClientTools.md#getprototypeof)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:167

___

### hasAsyncFeature

▸ **hasAsyncFeature**(`feature`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | [`AsyncFeatureBits`](../enums/AsyncFeatureBits.md) |

#### Returns

`boolean`

#### Inherited from

[ResClientTools](ResClientTools.md).[hasAsyncFeature](ResClientTools.md#hasasyncfeature-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:121](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L121)

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

[ResClientTools](ResClientTools.md).[hasOwn](ResClientTools.md#hasown)

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

[ResClientTools](ResClientTools.md).[is](ResClientTools.md#is)

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

[ResClientTools](ResClientTools.md).[isExtensible](ResClientTools.md#isextensible)

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

[ResClientTools](ResClientTools.md).[isFrozen](ResClientTools.md#isfrozen)

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

[ResClientTools](ResClientTools.md).[isSealed](ResClientTools.md#issealed)

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

[ResClientTools](ResClientTools.md).[keys](ResClientTools.md#keys)

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

[ResClientTools](ResClientTools.md).[keys](ResClientTools.md#keys)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2015.core.d.ts:323

___

### list

▸ **list**(): [`Funcs`](../interfaces/Funcs.md)

#### Returns

[`Funcs`](../interfaces/Funcs.md)

#### Inherited from

[ResClientTools](ResClientTools.md).[list](ResClientTools.md#list-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:79](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L79)

___

### loadFrom

▸ **loadFrom**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[ResClientTools](ResClientTools.md).[loadFrom](ResClientTools.md#loadfrom)

#### Defined in

[packages/ai-tool/src/client-tools.ts:29](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/client-tools.ts#L29)

___

### loadFromSync

▸ **loadFromSync**(`items`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | [`Funcs`](../interfaces/Funcs.md) |

#### Returns

`void`

#### Inherited from

[ResClientTools](ResClientTools.md).[loadFromSync](ResClientTools.md#loadfromsync)

#### Defined in

[packages/ai-tool/src/client-tools.ts:41](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/client-tools.ts#L41)

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

[ResClientTools](ResClientTools.md).[preventExtensions](ResClientTools.md#preventextensions)

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

[ResClientTools](ResClientTools.md).[register](ResClientTools.md#register-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:170](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L170)

▸ **register**(`func`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |
| `options` | [`FuncItem`](../interfaces/FuncItem.md) |

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[ResClientTools](ResClientTools.md).[register](ResClientTools.md#register-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:171](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L171)

▸ **register**(`name`, `options?`): `boolean` \| [`ToolFunc`](ToolFunc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Function` \| [`ToolFunc`](ToolFunc.md) \| [`FuncItem`](../interfaces/FuncItem.md) |
| `options?` | [`FuncItem`](../interfaces/FuncItem.md) |

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

#### Inherited from

[ResClientTools](ResClientTools.md).[register](ResClientTools.md#register-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:172](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L172)

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

[ResClientTools](ResClientTools.md).[run](ResClientTools.md#run-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:128](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L128)

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

[ResClientTools](ResClientTools.md).[runSync](ResClientTools.md#runsync-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:136](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L136)

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

[ResClientTools](ResClientTools.md).[runWithPos](ResClientTools.md#runwithpos-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:149](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L149)

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

[ResClientTools](ResClientTools.md).[runWithPosSync](ResClientTools.md#runwithpossync-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:157](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L157)

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

[ResClientTools](ResClientTools.md).[seal](ResClientTools.md#seal)

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

[ResClientTools](ResClientTools.md).[setApiRoot](ResClientTools.md#setapiroot)

#### Defined in

[packages/ai-tool/src/client-tools.ts:23](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/client-tools.ts#L23)

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

[ResClientTools](ResClientTools.md).[setPrototypeOf](ResClientTools.md#setprototypeof)

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

[ResClientTools](ResClientTools.md).[unregister](ResClientTools.md#unregister-1)

#### Defined in

[packages/ai-tool/src/tool-func.ts:200](https://github.com/isdk/ai-tool.js/blob/c2cbe6039817535b740ff3ca5f97829770039649/src/tool-func.ts#L200)

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

[ResClientTools](ResClientTools.md).[values](ResClientTools.md#values)

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

[ResClientTools](ResClientTools.md).[values](ResClientTools.md#values)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es2017.object.d.ts:30
