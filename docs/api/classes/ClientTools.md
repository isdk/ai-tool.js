[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ClientTools

# Class: ClientTools

Defined in: [@isdk/ai-tools/packages/ai-tool/src/client-tools.ts:10](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/client-tools.ts#L10)

Represents a client-side proxy for a remote tool function.

A `ClientTools` instance is a `ToolFunc` that, when executed, does not run
local code. Instead, it serializes the parameters and uses an injected
transport layer (`IClientToolTransport`) to make a remote procedure call
to its corresponding `ServerTools` counterpart.

These tools are typically created dynamically by loading definitions from a server.

## Extends

- [`ClientFuncItem`](../interfaces/ClientFuncItem.md).[`ToolFunc`](ToolFunc.md)

## Extended by

- [`RpcMethodsClientTool`](RpcMethodsClientTool.md)

## Indexable

\[`name`: `string`\]: `any`

## Constructors

### Constructor

> **new ClientTools**(`name`, `options?`): `ClientTools`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:571](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L571)

Initializes a new `ToolFunc` instance.

#### Parameters

##### name

Can be a function name, a function implementation, or a configuration object.

`string` | `Function` | [`FuncItem`](../interfaces/FuncItem.md)

##### options?

`any` = `{}`

Configuration options if not provided in the first argument.

#### Returns

`ClientTools`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`constructor`](ToolFunc.md#constructor)

## Properties

### $attributes

> **$attributes**: `Properties`

Defined in: [property-manager.js/src/advance.d.ts:5](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/advance.d.ts#L5)

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`$attributes`](ToolFunc.md#attributes)

***

### action?

> `optional` **action**: `"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/consts.ts:95](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/consts.ts#L95)

The action to be used for the remote call. This typically represents an RPC method name.
Only for RESTful HTTP transports, it might be mapped to a standard HTTP method (e.g., GET, POST)

#### Inherited from

[`ClientFuncItem`](../interfaces/ClientFuncItem.md).[`action`](../interfaces/ClientFuncItem.md#action)

***

### alias?

> `optional` **alias**: `string` \| `string`[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:130](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L130)

Optional aliases for the function name.

#### Inherited from

[`ClientFuncItem`](../interfaces/ClientFuncItem.md).[`alias`](../interfaces/ClientFuncItem.md#alias)

***

### asyncFeatures?

> `optional` **asyncFeatures**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:144](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L144)

A bitmask representing asynchronous features supported by the function, built from `AsyncFeatureBits`.
This allows the system to understand if a function supports capabilities like cancellation or multi-tasking.

#### See

AsyncFeatureBits from `@src/utils/cancelable-ability.ts`

#### Example

```ts
import { AsyncFeatures } from './utils';
const func = new ToolFunc({
  name: 'cancellableTask',
  asyncFeatures: AsyncFeatures.Cancelable | AsyncFeatures.MultiTask,
  // ...
});
```

#### Inherited from

[`ClientFuncItem`](../interfaces/ClientFuncItem.md).[`asyncFeatures`](../interfaces/ClientFuncItem.md#asyncfeatures)

***

### constructor

> **constructor**: `Function`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:125

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

***

### defaultOptions

> **defaultOptions**: `object`

Defined in: [property-manager.js/src/abstract.d.ts:74](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L74)

The default options for export and assign

#### assign?

> `optional` **assign**: `IMergeOptions`

#### export?

> `optional` **export**: `IMergeOptions`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`defaultOptions`](ToolFunc.md#defaultoptions)

***

### depends?

> `optional` **depends**: `object`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:167](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L167)

A map of dependencies this function has on other tool functions.
Declaring dependencies ensures that they are automatically registered when this function is registered.
This is crucial for building modular functions that rely on each other without needing to manage registration order manually.

#### Index Signature

\[`name`: `string`\]: [`ToolFunc`](ToolFunc.md)

#### Example

```ts
const helperFunc = new ToolFunc({ name: 'helper', func: () => 'world' });
const mainFunc = new ToolFunc({
  name: 'main',
  depends: {
    helper: helperFunc,
  },
  func() {
    // We can now safely run the dependency
    const result = this.runSync('helper');
    return `Hello, ${result}`;
  }
});
// When mainFunc is registered, helperFunc will be registered automatically.
mainFunc.register();
```

#### Inherited from

[`ClientFuncItem`](../interfaces/ClientFuncItem.md).[`depends`](../interfaces/ClientFuncItem.md#depends)

***

### description?

> `optional` **description**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:172](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L172)

A detailed description of what the function does.

#### Inherited from

[`ClientFuncItem`](../interfaces/ClientFuncItem.md).[`description`](../interfaces/ClientFuncItem.md#description)

***

### fetchOptions?

> `optional` **fetchOptions**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/consts.ts:100](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/consts.ts#L100)

Addtional options to be passed to the underlying `fetch` call in a transport.

#### Inherited from

[`ClientFuncItem`](../interfaces/ClientFuncItem.md).[`fetchOptions`](../interfaces/ClientFuncItem.md#fetchoptions)

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:119](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L119)

If true, indicates that this function should be treated as a server-side API.

#### Inherited from

[`ClientFuncItem`](../interfaces/ClientFuncItem.md).[`isApi`](../interfaces/ClientFuncItem.md#isapi)

***

### name?

> `optional` **name**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:76](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L76)

The unique name of the function.

#### Inherited from

[`ClientFuncItem`](../interfaces/ClientFuncItem.md).[`name`](../interfaces/ClientFuncItem.md#name)

***

### nonExported1stChar

> **nonExported1stChar**: `string`

Defined in: [property-manager.js/src/abstract.d.ts:78](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L78)

the property with the default prefix '$' will not be exported.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`nonExported1stChar`](ToolFunc.md#nonexported1stchar)

***

### params?

> `optional` **params**: [`FuncParams`](../interfaces/FuncParams.md) \| [`FuncParam`](../interfaces/FuncParam.md)[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:81](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L81)

Parameter definitions, which can be an object mapping names to definitions or an array for positional parameters.

#### Inherited from

[`ClientFuncItem`](../interfaces/ClientFuncItem.md).[`params`](../interfaces/ClientFuncItem.md#params)

***

### result?

> `optional` **result**: `string` \| `Record`\<`string`, `any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:86](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L86)

The expected return type of the function, described as a string or a JSON schema object.

#### Inherited from

[`ClientFuncItem`](../interfaces/ClientFuncItem.md).[`result`](../interfaces/ClientFuncItem.md#result)

***

### scope?

> `optional` **scope**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:91](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L91)

The execution scope or context (`this`) for the function.

#### Inherited from

[`ClientFuncItem`](../interfaces/ClientFuncItem.md).[`scope`](../interfaces/ClientFuncItem.md#scope)

***

### setup()?

> `optional` **setup**: (`this`, `options?`) => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:114](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L114)

A lifecycle hook called once during the `ToolFunc` instance's initialization.
It allows for initial setup, state configuration, or property modification on the instance
before it is used or registered. The `this` context is the `ToolFunc` instance itself.

#### Parameters

##### this

[`ToolFunc`](ToolFunc.md)

##### options?

[`FuncItem`](../interfaces/FuncItem.md)

The configuration options for the function.

#### Returns

`void`

#### Example

```ts
const myFunc = new ToolFunc({
  name: 'myFunc',
  customState: 'initial',
  setup() {
    // `this` is the myFunc instance
    this.customState = 'configured';
  }
});
console.log(myFunc.customState); // Outputs: 'configured'
```

#### Inherited from

[`ClientFuncItem`](../interfaces/ClientFuncItem.md).[`setup`](../interfaces/ClientFuncItem.md#setup)

***

### stream?

> `optional` **stream**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:125](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L125)

If true, indicates that the function has the *capability* to stream its output.
Whether a specific call is streamed is determined by a `stream` property in the runtime parameters.

#### Inherited from

[`ClientFuncItem`](../interfaces/ClientFuncItem.md).[`stream`](../interfaces/ClientFuncItem.md#stream)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:96](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L96)

Tags for grouping or filtering functions.

#### Inherited from

[`ClientFuncItem`](../interfaces/ClientFuncItem.md).[`tags`](../interfaces/ClientFuncItem.md#tags)

***

### title?

> `optional` **title**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:177](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L177)

A concise, human-readable title for the function, often used in UI or by AI.

#### Inherited from

[`ClientFuncItem`](../interfaces/ClientFuncItem.md).[`title`](../interfaces/ClientFuncItem.md#title)

***

### action?

> `static` `optional` **action**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/client-tools.ts:33](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/client-tools.ts#L33)

#### Inherited from

`ClientFuncItem.action`

***

### aliases

> `static` **aliases**: `object` = `{}`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:305](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L305)

A static map of aliases to their corresponding function names.

#### Index Signature

\[`name`: `string`\]: `string`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`aliases`](ToolFunc.md#aliases)

***

### dataPath

> `static` **dataPath**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:312](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L312)

A conventional property to designate a file path for saving the registered `ToolFunc` data.
Note: The `ToolFunc` class itself does not implement persistence logic. It is up to the
developer to use this path to save and load the `ToolFunc.items` registry if needed.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`dataPath`](ToolFunc.md#datapath)

***

### items

> `static` **items**: [`Funcs`](../interfaces/Funcs.md) = `{}`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:300](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L300)

A static registry of all `ToolFunc` instances, indexed by name.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`items`](ToolFunc.md#items)

## Accessors

### ~~apiRoot~~

#### Get Signature

> **get** **apiRoot**(): `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/client-tools.ts:110](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/client-tools.ts#L110)

Gets the root URL for API endpoints from the configured transport.
This is used as the base for constructing request URLs.

##### Returns

`string`

The root endpoint for the remote service.

#### Deprecated

Use `transport` instead.

#### Inherited from

[`ClientFuncItem`](../interfaces/ClientFuncItem.md).[`apiRoot`](../interfaces/ClientFuncItem.md#apiroot)

***

### apiRoot

#### Get Signature

> **get** `static` **apiRoot**(): `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/client-tools.ts:41](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/client-tools.ts#L41)

Gets the root URL for API endpoints from the configured transport.
This is used as the base for constructing request URLs.

##### Returns

`string`

#### Inherited from

`ClientFuncItem.apiRoot`

***

### transport

#### Get Signature

> **get** `static` **transport**(): [`IClientToolTransport`](../interfaces/IClientToolTransport.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/client-tools.ts:61](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/client-tools.ts#L61)

##### Returns

[`IClientToolTransport`](../interfaces/IClientToolTransport.md)

## Methods

### arr2ObjParams()

> **arr2ObjParams**(`params`): `any`[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:629](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L629)

Converts an array of positional arguments into a named parameters object.
This is used internally to support functions defined with named parameters.

#### Parameters

##### params

`any`[]

An array of positional arguments.

#### Returns

`any`[]

An array containing a single parameters object.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`arr2ObjParams`](ToolFunc.md#arr2objparams)

***

### assign()

> **assign**(`src`, `options?`): `this`

Defined in: [property-manager.js/src/abstract.d.ts:106](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L106)

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

> **assignProperty**(`src`, `name`, `value`, `attrs?`, `options?`): `void`

Defined in: [property-manager.js/src/abstract.d.ts:117](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L117)

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

> `abstract` **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs?`, `options?`): `void`

Defined in: [property-manager.js/src/abstract.d.ts:131](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L131)

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

> **assignTo**(`dest?`, `options?`): `any`

Defined in: [property-manager.js/src/abstract.d.ts:191](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L191)

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

> **clone**(`options?`): `any`

Defined in: [property-manager.js/src/abstract.d.ts:155](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L155)

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

> **cloneTo**(`dest`, `options?`): `any`

Defined in: [property-manager.js/src/abstract.d.ts:148](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L148)

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

Defined in: [property-manager.js/src/abstract.d.ts:89](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L89)

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

> **exportTo**(`dest`, `options?`): `any`

Defined in: [property-manager.js/src/abstract.d.ts:173](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L173)

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

### fetch()

> **fetch**(`objParam?`, `act?`, `subName?`, `fetchOptions?`): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/client-tools.ts:115](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/client-tools.ts#L115)

#### Parameters

##### objParam?

`any`

##### act?

`"get"` | `"post"` | `"put"` | `"delete"` | `"patch"` | `"list"` | `"res"`

##### subName?

`any`

##### fetchOptions?

`any`

#### Returns

`Promise`\<`any`\>

***

### func()

> **func**(`objParam`): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/client-tools.ts:134](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/client-tools.ts#L134)

The core implementation for a client-side tool. When a `ClientTools` instance
is "run", this `func` method is executed. It delegates the call to the
configured transport, which handles the network communication.

#### Parameters

##### objParam

`any`

The parameters to send to the remote tool.

#### Returns

`Promise`\<`any`\>

The result from the remote tool.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`func`](ToolFunc.md#func)

***

### getFunc()

> **getFunc**(`name?`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:720](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L720)

Gets a bound function reference for execution with named parameters.
If a name is provided, it retrieves a different function from the registry.
Otherwise, it returns a bound version of this instance's `runSync`.

#### Parameters

##### name?

`string`

Optional name of the function to retrieve.

#### Returns

`any`

A function reference or `undefined` if not found.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getFunc`](ToolFunc.md#getfunc)

***

### getFuncWithPos()

> **getFuncWithPos**(`name?`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:777](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L777)

Gets a bound function reference suitable for positional argument execution.
If a name is provided, it retrieves a different function from the registry.
Otherwise, it returns a bound version of this instance's `runWithPosSync`.

#### Parameters

##### name?

`string`

Optional name of the function to retrieve.

#### Returns

`any`

A function reference or `undefined` if not found.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getFuncWithPos`](ToolFunc.md#getfuncwithpos)

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Defined in: [property-manager.js/src/abstract.d.ts:98](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L98)

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getProperties`](ToolFunc.md#getproperties)

***

### hasAsyncFeature()

> **hasAsyncFeature**(`feature`): `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:787](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L787)

Checks if the current function instance supports a specific async feature.

#### Parameters

##### feature

[`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

The async feature bit to check for.

#### Returns

`boolean`

`true` if the feature is supported, otherwise `false`.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`hasAsyncFeature`](ToolFunc.md#hasasyncfeature)

***

### hasOwnProperty()

> **hasOwnProperty**(`v`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:140

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

> **initialize**(`src?`): `this`

Defined in: [property-manager.js/src/abstract.d.ts:139](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L139)

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:146

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

> **isSame**(`src`, `options?`): `boolean`

Defined in: [property-manager.js/src/abstract.d.ts:200](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L200)

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:805](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L805)

Determines if a function call should produce a stream.

The logic is as follows:
1. It first checks if the function is generally capable of streaming (`this.stream`).
2. If it is, it then checks if a `stream` parameter is formally declared in the function's `params` definition.
3. If both are true, the method returns the value of the `stream` property from the runtime `params` object.
Otherwise, it returns the function's static `stream` capability.

#### Parameters

##### params

`any`

The runtime parameters passed to the function call.

#### Returns

`undefined` \| `boolean`

`true` if the call should be streamed, `false` or `undefined` otherwise.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`isStream`](ToolFunc.md#isstream)

***

### mergeTo()

> **mergeTo**(`dest`, `options?`): `any`

Defined in: [property-manager.js/src/abstract.d.ts:164](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L164)

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

> **obj2ArrParams**(`params?`): `any`[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:648](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L648)

Converts a named parameters object into an array of positional arguments.
This is used for functions defined with positional parameters.

#### Parameters

##### params?

`any`

A named parameters object.

#### Returns

`any`[]

An array of positional arguments.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`obj2ArrParams`](ToolFunc.md#obj2arrparams)

***

### propertyIsEnumerable()

> **propertyIsEnumerable**(`v`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:152

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:602](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L602)

Registers the current `ToolFunc` instance into the static registry.
Also registers any declared dependencies.

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

The instance itself upon successful registration, or `false` if it already exists.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`register`](ToolFunc.md#register)

***

### run()

> **run**(`params?`): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:686](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L686)

Executes the function asynchronously with a named parameters object.

#### Parameters

##### params?

`any`

The parameters object for the function.

#### Returns

`Promise`\<`any`\>

A promise that resolves with the function's result.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`run`](ToolFunc.md#run)

***

### runAs()

> **runAs**(`name`, `params?`): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:697](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L697)

Asynchronously executes another registered function by name.
This method delegates to `runAsSync()` internally.

#### Parameters

##### name

`string`

The name of the target function to run.

##### params?

`any`

Optional parameters to pass to the function.

#### Returns

`Promise`\<`any`\>

A promise that resolves with the result of the function execution.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runAs`](ToolFunc.md#runas)

***

### runAsSync()

> **runAsSync**(`name`, `params?`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:708](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L708)

Synchronously executes another registered function by name.
This is a convenience method that forwards the call to the static `runSync()` method.

#### Parameters

##### name

`string`

The name of the target function to run.

##### params?

`any`

Optional parameters to pass to the function.

#### Returns

`any`

The result of the function execution.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runAsSync`](ToolFunc.md#runassync)

***

### runSync()

> **runSync**(`params?`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:667](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L667)

Executes the function synchronously with a named parameters object.

#### Parameters

##### params?

`any`

The parameters object for the function.

#### Returns

`any`

The result of the function execution.

#### Throws

Will throw an error if an array of parameters is passed to a function that expects an object.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runSync`](ToolFunc.md#runsync)

***

### runWithPos()

> **runWithPos**(...`params`): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:755](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L755)

Executes the function asynchronously using positional arguments.
Delegates to `runWithPosSync()` internally.

#### Parameters

##### params

...`any`[]

Positional arguments passed to the function.

#### Returns

`Promise`\<`any`\>

A promise that resolves with the result of the function execution.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runWithPos`](ToolFunc.md#runwithpos)

***

### runWithPosAs()

> **runWithPosAs**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:766](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L766)

Asynchronously executes another function by name using positional arguments.
Delegates to `runWithPosAsSync()` internally.

#### Parameters

##### name

`string`

The name of the target function to run.

##### params

...`any`[]

Positional arguments to pass to the function.

#### Returns

`Promise`\<`any`\>

A promise that resolves with the result of the function execution.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runWithPosAs`](ToolFunc.md#runwithposas)

***

### runWithPosAsSync()

> **runWithPosAsSync**(`name`, ...`params`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:745](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L745)

Synchronously executes another function by name using positional arguments.
This is a convenience wrapper around the static `runWithPosSync()` method.

#### Parameters

##### name

`string`

The name of the target function to run.

##### params

...`any`[]

Positional arguments to pass to the function.

#### Returns

`any`

The result of the function execution.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runWithPosAsSync`](ToolFunc.md#runwithposassync)

***

### runWithPosSync()

> **runWithPosSync**(...`params`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:731](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L731)

Executes the function synchronously using positional arguments.
If the function expects named parameters, it converts the arguments automatically.

#### Parameters

##### params

...`any`[]

Positional arguments passed to the function.

#### Returns

`any`

The result of the function execution.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runWithPosSync`](ToolFunc.md#runwithpossync)

***

### toJSON()

> **toJSON**(): `any`

Defined in: [property-manager.js/src/abstract.d.ts:182](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L182)

#### Returns

`any`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`toJSON`](ToolFunc.md#tojson)

***

### toLocaleString()

> **toLocaleString**(): `string`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:131

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`toLocaleString`](ToolFunc.md#tolocalestring)

***

### toObject()

> **toObject**(`options?`): `any`

Defined in: [property-manager.js/src/abstract.d.ts:181](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L181)

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:128

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`toString`](ToolFunc.md#tostring)

***

### unregister()

> **unregister**(): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:619](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L619)

Removes the current `ToolFunc` instance from the static registry.

#### Returns

`any`

The instance that was unregistered.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`unregister`](ToolFunc.md#unregister)

***

### valueOf()

> **valueOf**(): `Object`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:134

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`valueOf`](ToolFunc.md#valueof)

***

### assign()

#### Call Signature

> `static` **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:286

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

###### T

`T` *extends* `object`

###### U

`U`

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:295

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

###### T

`T` *extends* `object`

###### U

`U`

###### V

`V`

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:305

Copy the values of all of the enumerable own properties from one or more source objects to a
target object. Returns the target object.

##### Type Parameters

###### T

`T` *extends* `object`

###### U

`U`

###### V

`V`

###### W

`W`

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:313

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:188

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:195

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

> `static` **defineProperties**(`aTarget`, `aProperties`, `recreate?`): `any`

Defined in: [property-manager.js/src/advance.d.ts:11](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/advance.d.ts#L11)

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:203

Adds a property to an object, or modifies attributes of an existing property.

#### Type Parameters

##### T

`T`

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:36

Returns an array of key/values of the enumerable own properties of an object

##### Type Parameters

###### T

`T`

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

\{\[`s`: `string`\]: `T`; \} | `ArrayLike`\<`T`\>

##### Returns

\[`string`, `T`\][]

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`entries`](ToolFunc.md#entries)

#### Call Signature

> `static` **entries**(`o`): \[`string`, `any`\][]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:42

Returns an array of key/values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

\[`string`, `any`\][]

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`entries`](ToolFunc.md#entries)

***

### fetch()

> `static` **fetch**(`name`, `objParam?`, ...`args?`): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/client-tools.ts:99](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/client-tools.ts#L99)

#### Parameters

##### name

`string`

##### objParam?

`any`

##### args?

...`any`[]

#### Returns

`Promise`\<`any`\>

***

### freeze()

#### Call Signature

> `static` **freeze**\<`T`\>(`f`): `T`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:222

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

###### T

`T` *extends* `Function`

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:228

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

###### T

`T` *extends* `object`

###### U

`U` *extends* `string` \| `number` \| `bigint` \| `boolean` \| `symbol`

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:234

Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

##### Type Parameters

###### T

`T`

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2019.object.d.ts:26

Returns an object created by key-value entries for properties and methods

##### Type Parameters

###### T

`T` = `any`

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2019.object.d.ts:32

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:319](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L319)

Retrieves a registered function by its name or alias.

#### Parameters

##### name

`string`

The name or alias of the function to retrieve.

#### Returns

[`ToolFunc`](ToolFunc.md)

The `ToolFunc` instance if found, otherwise `undefined`.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`get`](ToolFunc.md#get)

***

### getAllByTag()

> `static` **getAllByTag**(`tagName`): [`ToolFunc`](ToolFunc.md)[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:365](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L365)

Retrieves all registered functions that have a specific tag.

#### Parameters

##### tagName

`string`

The tag to search for.

#### Returns

[`ToolFunc`](ToolFunc.md)[]

An array of matching `ToolFunc` instances.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getAllByTag`](ToolFunc.md#getallbytag)

***

### getByTag()

> `static` **getByTag**(`tagName`): `undefined` \| [`ToolFunc`](ToolFunc.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:340](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L340)

Finds the first registered function that has a specific tag.

#### Parameters

##### tagName

`string`

The tag to search for.

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

The first matching `ToolFunc` instance, or `undefined` if none is found.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getByTag`](ToolFunc.md#getbytag)

***

### getFunc()

> `static` **getFunc**(`name`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:431](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L431)

Retrieves a bound, runnable function reference for a registered function.
This reference is suitable for execution with an object of named parameters.

#### Parameters

##### name

`string`

The name of the function.

#### Returns

`any`

A bound function reference, or `undefined` if not found.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getFunc`](ToolFunc.md#getfunc-2)

***

### getFuncWithPos()

> `static` **getFuncWithPos**(`name`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:472](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L472)

Retrieves a bound, runnable function reference for a registered function.
This reference is suitable for execution with positional arguments.

#### Parameters

##### name

`string`

The name of the function.

#### Returns

`any`

A bound function reference, or `undefined` if not found.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getFuncWithPos`](ToolFunc.md#getfuncwithpos-2)

***

### getOwnPropertyDescriptor()

> `static` **getOwnPropertyDescriptor**(`o`, `p`): `undefined` \| `PropertyDescriptor`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:175

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:48

Returns an object containing all own property descriptors of an object

#### Type Parameters

##### T

`T`

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:182

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:319

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

Defined in: [property-manager.js/src/advance.d.ts:10](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/advance.d.ts#L10)

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`getProperties`](ToolFunc.md#getproperties-2)

***

### getPrototypeOf()

> `static` **getPrototypeOf**(`o`): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:167

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:388](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L388)

Checks if any registered function has a specific asynchronous feature.

#### Parameters

##### feature

[`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

The async feature bit to check for.

#### Returns

`boolean`

`true` if the feature is present in any function, otherwise `false`.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`hasAsyncFeature`](ToolFunc.md#hasasyncfeature-2)

***

### hasOwn()

> `static` **hasOwn**(`o`, `v`): `boolean`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2022.object.d.ts:25

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:332

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:258

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:252

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:246

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:264

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:325

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:331](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L331)

Returns the complete map of all registered functions.

#### Returns

[`Funcs`](../interfaces/Funcs.md)

The map of `ToolFunc` instances.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`list`](ToolFunc.md#list)

***

### loadFrom()

> `static` **loadFrom**(`items?`): `Promise`\<[`Funcs`](../interfaces/Funcs.md)\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/client-tools.ts:69](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/client-tools.ts#L69)

Loads tool definitions from the remote server via the configured transport.
This method populates the local `ToolFunc` registry with `ClientTools` stubs.

#### Parameters

##### items?

[`Funcs`](../interfaces/Funcs.md)

#### Returns

`Promise`\<[`Funcs`](../interfaces/Funcs.md)\>

***

### loadFromSync()

> `static` **loadFromSync**(`items`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/client-tools.ts:85](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/client-tools.ts#L85)

Synchronously loads tool definitions from a provided object, registering
each one as a `ClientTools` instance.

#### Parameters

##### items

[`Funcs`](../interfaces/Funcs.md)

A map of tool function metadata, typically from a server.

#### Returns

`void`

***

### preventExtensions()

> `static` **preventExtensions**\<`T`\>(`o`): `T`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:240

Prevents the addition of new properties to an object.

#### Type Parameters

##### T

`T`

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

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:495](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L495)

Registers a new tool function.

##### Parameters

###### name

`string`

The name of the function.

###### options

[`FuncItem`](../interfaces/FuncItem.md)

The function's configuration.

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

The new `ToolFunc` instance, or `false` if a function with that name already exists.

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`register`](ToolFunc.md#register-2)

#### Call Signature

> `static` **register**(`func`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:496](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L496)

Registers a new tool function.

##### Parameters

###### func

`Function`

The function implementation.

###### options

[`FuncItem`](../interfaces/FuncItem.md)

The function's configuration.

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

The new `ToolFunc` instance, or `false` if a function with that name already exists.

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`register`](ToolFunc.md#register-2)

#### Call Signature

> `static` **register**(`name`, `options?`): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:497](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L497)

Registers a new tool function.

##### Parameters

###### name

The name of the function.

`string` | `Function` | [`ToolFunc`](ToolFunc.md) | [`FuncItem`](../interfaces/FuncItem.md)

###### options?

[`FuncItem`](../interfaces/FuncItem.md)

The function's configuration.

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

The new `ToolFunc` instance, or `false` if a function with that name already exists.

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`register`](ToolFunc.md#register-2)

***

### run()

> `static` **run**(`name`, `params?`): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:402](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L402)

Asynchronously executes a registered function by name with named parameters.

#### Parameters

##### name

`string`

The name of the function to run.

##### params?

`any`

The parameters object for the function.

#### Returns

`Promise`\<`any`\>

A promise that resolves with the function's result.

#### Throws

If the function with the given name is not found.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`run`](ToolFunc.md#run-2)

***

### runSync()

> `static` **runSync**(`name`, `params?`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:417](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L417)

Synchronously executes a registered function by name with named parameters.

#### Parameters

##### name

`string`

The name of the function to run.

##### params?

`any`

The parameters object for the function.

#### Returns

`any`

The result of the function's execution.

#### Throws

If the function with the given name is not found.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runSync`](ToolFunc.md#runsync-2)

***

### runWithPos()

> `static` **runWithPos**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:443](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L443)

Asynchronously executes a function using positional arguments.

#### Parameters

##### name

`string`

The name of the function to run.

##### params

...`any`[]

Positional arguments to pass to the function.

#### Returns

`Promise`\<`any`\>

A promise that resolves with the function's result.

#### Throws

If the function with the given name is not found.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runWithPos`](ToolFunc.md#runwithpos-2)

***

### runWithPosSync()

> `static` **runWithPosSync**(`name`, ...`params`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:458](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L458)

Synchronously executes a function using positional arguments.

#### Parameters

##### name

`string`

The name of the function to run.

##### params

...`any`[]

Positional arguments to pass to the function.

#### Returns

`any`

The result of the function's execution.

#### Throws

If the function with the given name is not found.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`runWithPosSync`](ToolFunc.md#runwithpossync-2)

***

### seal()

> `static` **seal**\<`T`\>(`o`): `T`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:216

Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

#### Type Parameters

##### T

`T`

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

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:339

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

### setTransport()

> `static` **setTransport**(`transport`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/client-tools.ts:51](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/client-tools.ts#L51)

Injects the client-side transport implementation. This is a crucial step
to enable communication with the server.

#### Parameters

##### transport

[`IClientToolTransport`](../interfaces/IClientToolTransport.md)

The transport instance to use for all client-server communication.

#### Returns

`void`

***

### unregister()

> `static` **unregister**(`name`): `undefined` \| [`ToolFunc`](ToolFunc.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:547](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L547)

Unregisters a function by its name, also removing any associated aliases.

#### Parameters

##### name

`string`

The name of the function to unregister.

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

The unregistered `ToolFunc` instance, or `undefined` if it was not found.

#### Inherited from

[`ToolFunc`](ToolFunc.md).[`unregister`](ToolFunc.md#unregister-2)

***

### values()

#### Call Signature

> `static` **values**\<`T`\>(`o`): `T`[]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:24

Returns an array of values of the enumerable own properties of an object

##### Type Parameters

###### T

`T`

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

\{\[`s`: `string`\]: `T`; \} | `ArrayLike`\<`T`\>

##### Returns

`T`[]

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`values`](ToolFunc.md#values)

#### Call Signature

> `static` **values**(`o`): `any`[]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:30

Returns an array of values of the enumerable own properties of an object

##### Parameters

###### o

Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.

##### Returns

`any`[]

##### Inherited from

[`ToolFunc`](ToolFunc.md).[`values`](ToolFunc.md#values)
