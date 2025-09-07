[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / RpcMethodsClientTool

# Class: RpcMethodsClientTool

Defined in: [@isdk/ai-tools/packages/ai-tool/src/rpc-methods-client-tool.ts:9](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/rpc-methods-client-tool.ts#L9)

Represents a client-side proxy for a remote tool function.

A `ClientTools` instance is a `ToolFunc` that, when executed, does not run
local code. Instead, it serializes the parameters and uses an injected
transport layer (`IClientToolTransport`) to make a remote procedure call
to its corresponding `ServerTools` counterpart.

These tools are typically created dynamically by loading definitions from a server.

## Extends

- [`ClientTools`](ClientTools.md)

## Extended by

- [`ResClientTools`](ResClientTools.md)

## Indexable

\[`name`: `string`\]: `any`

## Constructors

### new RpcMethodsClientTool()

> **new RpcMethodsClientTool**(`name`, `options`?): [`RpcMethodsClientTool`](RpcMethodsClientTool.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:571](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L571)

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Parameters

##### name

Can be a function name, a function implementation, or a configuration object.

`string` | `Function` | [`FuncItem`](../interfaces/FuncItem.md)

##### options?

`any` = `{}`

Configuration options if not provided in the first argument.

#### Returns

[`RpcMethodsClientTool`](RpcMethodsClientTool.md)

#### Inherited from

[`ClientTools`](ClientTools.md).[`constructor`](ClientTools.md#constructors)

## Properties

### $attributes

> **$attributes**: `Properties`

Defined in: [property-manager.js/src/advance.d.ts:5](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/advance.d.ts#L5)

#### Inherited from

[`ClientTools`](ClientTools.md).[`$attributes`](ClientTools.md#$attributes)

***

### action?

> `optional` **action**: `"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/consts.ts:95](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/consts.ts#L95)

The action to be used for the remote call. This typically represents an RPC method name.
Only for RESTful HTTP transports, it might be mapped to a standard HTTP method (e.g., GET, POST)

#### Inherited from

[`ClientTools`](ClientTools.md).[`action`](ClientTools.md#action)

***

### alias?

> `optional` **alias**: `string` \| `string`[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:130](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L130)

Optional aliases for the function name.

#### Inherited from

[`ClientTools`](ClientTools.md).[`alias`](ClientTools.md#alias)

***

### asyncFeatures?

> `optional` **asyncFeatures**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:144](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L144)

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

[`ClientTools`](ClientTools.md).[`asyncFeatures`](ClientTools.md#asyncfeatures)

***

### constructor

> **constructor**: `Function`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:125

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Inherited from

`ClientTools.constructor`

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

[`ClientTools`](ClientTools.md).[`defaultOptions`](ClientTools.md#defaultoptions)

***

### depends?

> `optional` **depends**: `object`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:167](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L167)

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

[`ClientTools`](ClientTools.md).[`depends`](ClientTools.md#depends)

***

### description?

> `optional` **description**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:172](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L172)

A detailed description of what the function does.

#### Inherited from

[`ClientTools`](ClientTools.md).[`description`](ClientTools.md#description)

***

### ~~fetchOptions?~~

> `optional` **fetchOptions**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/consts.ts:101](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/consts.ts#L101)

Options to be passed to the underlying `fetch` call in an HTTP transport.

#### Deprecated

Use `transport` instead.

#### Inherited from

[`ClientTools`](ClientTools.md).[`fetchOptions`](ClientTools.md#fetchoptions)

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:119](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L119)

If true, indicates that this function should be treated as a server-side API.

#### Inherited from

[`ClientTools`](ClientTools.md).[`isApi`](ClientTools.md#isapi)

***

### name?

> `optional` **name**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:76](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L76)

The unique name of the function.

#### Inherited from

[`ClientTools`](ClientTools.md).[`name`](ClientTools.md#name-3)

***

### nonExported1stChar

> **nonExported1stChar**: `string`

Defined in: [property-manager.js/src/abstract.d.ts:78](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L78)

the property with the default prefix '$' will not be exported.

#### Inherited from

[`ClientTools`](ClientTools.md).[`nonExported1stChar`](ClientTools.md#nonexported1stchar)

***

### params?

> `optional` **params**: [`FuncParams`](../interfaces/FuncParams.md) \| [`FuncParam`](../interfaces/FuncParam.md)[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:81](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L81)

Parameter definitions, which can be an object mapping names to definitions or an array for positional parameters.

#### Inherited from

[`ClientTools`](ClientTools.md).[`params`](ClientTools.md#params)

***

### result?

> `optional` **result**: `string` \| `Record`\<`string`, `any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:86](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L86)

The expected return type of the function, described as a string or a JSON schema object.

#### Inherited from

[`ClientTools`](ClientTools.md).[`result`](ClientTools.md#result)

***

### scope?

> `optional` **scope**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:91](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L91)

The execution scope or context (`this`) for the function.

#### Inherited from

[`ClientTools`](ClientTools.md).[`scope`](ClientTools.md#scope)

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:114](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L114)

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

[`ClientTools`](ClientTools.md).[`setup`](ClientTools.md#setup)

***

### stream?

> `optional` **stream**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:125](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L125)

If true, indicates that the function has the *capability* to stream its output.
Whether a specific call is streamed is determined by a `stream` property in the runtime parameters.

#### Inherited from

[`ClientTools`](ClientTools.md).[`stream`](ClientTools.md#stream)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:96](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L96)

Tags for grouping or filtering functions.

#### Inherited from

[`ClientTools`](ClientTools.md).[`tags`](ClientTools.md#tags)

***

### title?

> `optional` **title**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:177](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L177)

A concise, human-readable title for the function, often used in UI or by AI.

#### Inherited from

[`ClientTools`](ClientTools.md).[`title`](ClientTools.md#title)

***

### action?

> `static` `optional` **action**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/client-tools.ts:32](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/client-tools.ts#L32)

#### Inherited from

[`ClientTools`](ClientTools.md).[`action`](ClientTools.md#action-1)

***

### aliases

> `static` **aliases**: `object` = `{}`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:305](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L305)

A static map of aliases to their corresponding function names.

#### Index Signature

\[`name`: `string`\]: `string`

#### Inherited from

[`ClientTools`](ClientTools.md).[`aliases`](ClientTools.md#aliases)

***

### dataPath

> `static` **dataPath**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:312](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L312)

A conventional property to designate a file path for saving the registered `ToolFunc` data.
Note: The `ToolFunc` class itself does not implement persistence logic. It is up to the
developer to use this path to save and load the `ToolFunc.items` registry if needed.

#### Inherited from

[`ClientTools`](ClientTools.md).[`dataPath`](ClientTools.md#datapath)

***

### items

> `static` **items**: [`Funcs`](../interfaces/Funcs.md) = `{}`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:300](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L300)

A static registry of all `ToolFunc` instances, indexed by name.

#### Inherited from

[`ClientTools`](ClientTools.md).[`items`](ClientTools.md#items)

## Accessors

### ~~apiRoot~~

#### Get Signature

> **get** **apiRoot**(): `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/client-tools.ts:109](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/client-tools.ts#L109)

##### Deprecated

This property is now mainly for informational purposes.
The actual endpoint is managed by the transport.

##### Returns

`string`

The root endpoint for the remote service.

#### Deprecated

Use `transport` instead.

#### Inherited from

[`ClientTools`](ClientTools.md).[`apiRoot`](ClientTools.md#apiroot)

***

### apiRoot

#### Get Signature

> **get** `static` **apiRoot**(): `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/client-tools.ts:40](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/client-tools.ts#L40)

##### Deprecated

This property is now mainly for informational purposes.
The actual endpoint is managed by the transport.

##### Returns

`string`

#### Inherited from

[`ClientTools`](ClientTools.md).[`apiRoot`](ClientTools.md#apiroot-2)

***

### transport

#### Get Signature

> **get** `static` **transport**(): [`IClientToolTransport`](../interfaces/IClientToolTransport.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/client-tools.ts:60](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/client-tools.ts#L60)

##### Returns

[`IClientToolTransport`](../interfaces/IClientToolTransport.md)

#### Inherited from

[`ClientTools`](ClientTools.md).[`transport`](ClientTools.md#transport)

## Methods

### \_func()

> **\_func**(`action`, `options`): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/rpc-methods-client-tool.ts:19](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/rpc-methods-client-tool.ts#L19)

#### Parameters

##### action

`"get"` | `"post"` | `"put"` | `"delete"` | `"patch"` | `"list"` | `"res"`

##### options

[`RpcMethodsClientFuncParams`](../interfaces/RpcMethodsClientFuncParams.md)

#### Returns

`Promise`\<`any`\>

***

### arr2ObjParams()

> **arr2ObjParams**(`params`): `any`[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:629](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L629)

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

[`ClientTools`](ClientTools.md).[`arr2ObjParams`](ClientTools.md#arr2objparams)

***

### assign()

> **assign**(`src`, `options`?): `this`

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

[`ClientTools`](ClientTools.md).[`assign`](ClientTools.md#assign)

***

### assignMethods()

> **assignMethods**(`methods`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/rpc-methods-client-tool.ts:32](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/rpc-methods-client-tool.ts#L32)

#### Parameters

##### methods

`string`[]

#### Returns

`void`

***

### assignProperty()

> **assignProperty**(`src`, `name`, `value`, `attrs`?, `options`?): `void`

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

[`ClientTools`](ClientTools.md).[`assignProperty`](ClientTools.md#assignproperty)

***

### assignPropertyTo()

> `abstract` **assignPropertyTo**(`dest`, `src`, `name`, `value`, `attrs`?, `options`?): `void`

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

[`ClientTools`](ClientTools.md).[`assignPropertyTo`](ClientTools.md#assignpropertyto)

***

### assignTo()

> **assignTo**(`dest`?, `options`?): `any`

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

[`ClientTools`](ClientTools.md).[`assignTo`](ClientTools.md#assignto)

***

### clone()

> **clone**(`options`?): `any`

Defined in: [property-manager.js/src/abstract.d.ts:155](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L155)

Create a new object with the same values of attributes.

#### Parameters

##### options?

`IMergeOptions`

#### Returns

`any`

the new object

#### Inherited from

[`ClientTools`](ClientTools.md).[`clone`](ClientTools.md#clone)

***

### cloneTo()

> **cloneTo**(`dest`, `options`?): `any`

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

[`ClientTools`](ClientTools.md).[`cloneTo`](ClientTools.md#cloneto)

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

[`ClientTools`](ClientTools.md).[`defineProperties`](ClientTools.md#defineproperties)

***

### exportTo()

> **exportTo**(`dest`, `options`?): `any`

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

[`ClientTools`](ClientTools.md).[`exportTo`](ClientTools.md#exportto)

***

### fetch()

> **fetch**(`options`, `action`, `subName`?): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/rpc-methods-client-tool.ts:10](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/rpc-methods-client-tool.ts#L10)

#### Parameters

##### options

[`RpcMethodsClientFuncParams`](../interfaces/RpcMethodsClientFuncParams.md)

##### action

`"get"` | `"post"` | `"put"` | `"delete"` | `"patch"` | `"list"` | `"res"`

##### subName?

`any`

#### Returns

`Promise`\<`any`\>

#### Overrides

[`ClientTools`](ClientTools.md).[`fetch`](ClientTools.md#fetch)

***

### func()

> **func**(`options`): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/rpc-methods-client-tool.ts:24](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/rpc-methods-client-tool.ts#L24)

The core implementation for a client-side tool. When a `ClientTools` instance
is "run", this `func` method is executed. It delegates the call to the
configured transport, which handles the network communication.

#### Parameters

##### options

[`RpcMethodsClientFuncParams`](../interfaces/RpcMethodsClientFuncParams.md)

#### Returns

`Promise`\<`any`\>

The result from the remote tool.

#### Overrides

[`ClientTools`](ClientTools.md).[`func`](ClientTools.md#func)

***

### getFunc()

> **getFunc**(`name`?): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:720](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L720)

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

[`ClientTools`](ClientTools.md).[`getFunc`](ClientTools.md#getfunc)

***

### getFuncWithPos()

> **getFuncWithPos**(`name`?): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:777](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L777)

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

[`ClientTools`](ClientTools.md).[`getFuncWithPos`](ClientTools.md#getfuncwithpos)

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Defined in: [property-manager.js/src/abstract.d.ts:98](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L98)

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

#### Inherited from

[`ClientTools`](ClientTools.md).[`getProperties`](ClientTools.md#getproperties)

***

### hasAsyncFeature()

> **hasAsyncFeature**(`feature`): `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:787](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L787)

Checks if the current function instance supports a specific async feature.

#### Parameters

##### feature

[`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

The async feature bit to check for.

#### Returns

`boolean`

`true` if the feature is supported, otherwise `false`.

#### Inherited from

[`ClientTools`](ClientTools.md).[`hasAsyncFeature`](ClientTools.md#hasasyncfeature)

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

[`ClientTools`](ClientTools.md).[`hasOwnProperty`](ClientTools.md#hasownproperty)

***

### initialize()

> **initialize**(`src`?): `this`

Defined in: [property-manager.js/src/abstract.d.ts:139](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L139)

Initialize object and assign attribute values from src if src exists.

#### Parameters

##### src?

`any`

#### Returns

`this`

this object.

#### Inherited from

[`ClientTools`](ClientTools.md).[`initialize`](ClientTools.md#initialize)

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

[`ClientTools`](ClientTools.md).[`isPrototypeOf`](ClientTools.md#isprototypeof)

***

### isSame()

> **isSame**(`src`, `options`?): `boolean`

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

[`ClientTools`](ClientTools.md).[`isSame`](ClientTools.md#issame)

***

### isStream()

> **isStream**(`params`): `undefined` \| `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:805](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L805)

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

[`ClientTools`](ClientTools.md).[`isStream`](ClientTools.md#isstream)

***

### mergeTo()

> **mergeTo**(`dest`, `options`?): `any`

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

[`ClientTools`](ClientTools.md).[`mergeTo`](ClientTools.md#mergeto)

***

### obj2ArrParams()

> **obj2ArrParams**(`params`?): `any`[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:648](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L648)

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

[`ClientTools`](ClientTools.md).[`obj2ArrParams`](ClientTools.md#obj2arrparams)

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

[`ClientTools`](ClientTools.md).[`propertyIsEnumerable`](ClientTools.md#propertyisenumerable)

***

### register()

> **register**(): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:602](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L602)

Registers the current `ToolFunc` instance into the static registry.
Also registers any declared dependencies.

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

The instance itself upon successful registration, or `false` if it already exists.

#### Inherited from

[`ClientTools`](ClientTools.md).[`register`](ClientTools.md#register)

***

### run()

> **run**(`params`?): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:686](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L686)

Executes the function asynchronously with a named parameters object.

#### Parameters

##### params?

`any`

The parameters object for the function.

#### Returns

`Promise`\<`any`\>

A promise that resolves with the function's result.

#### Inherited from

[`ClientTools`](ClientTools.md).[`run`](ClientTools.md#run)

***

### runAs()

> **runAs**(`name`, `params`?): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:697](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L697)

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

[`ClientTools`](ClientTools.md).[`runAs`](ClientTools.md#runas)

***

### runAsSync()

> **runAsSync**(`name`, `params`?): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:708](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L708)

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

[`ClientTools`](ClientTools.md).[`runAsSync`](ClientTools.md#runassync)

***

### runSync()

> **runSync**(`params`?): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:667](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L667)

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

[`ClientTools`](ClientTools.md).[`runSync`](ClientTools.md#runsync)

***

### runWithPos()

> **runWithPos**(...`params`): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:755](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L755)

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

[`ClientTools`](ClientTools.md).[`runWithPos`](ClientTools.md#runwithpos)

***

### runWithPosAs()

> **runWithPosAs**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:766](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L766)

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

[`ClientTools`](ClientTools.md).[`runWithPosAs`](ClientTools.md#runwithposas)

***

### runWithPosAsSync()

> **runWithPosAsSync**(`name`, ...`params`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:745](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L745)

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

[`ClientTools`](ClientTools.md).[`runWithPosAsSync`](ClientTools.md#runwithposassync)

***

### runWithPosSync()

> **runWithPosSync**(...`params`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:731](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L731)

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

[`ClientTools`](ClientTools.md).[`runWithPosSync`](ClientTools.md#runwithpossync)

***

### toJSON()

> **toJSON**(): `any`

Defined in: [property-manager.js/src/abstract.d.ts:182](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L182)

#### Returns

`any`

#### Inherited from

[`ClientTools`](ClientTools.md).[`toJSON`](ClientTools.md#tojson)

***

### toLocaleString()

> **toLocaleString**(): `string`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:131

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

[`ClientTools`](ClientTools.md).[`toLocaleString`](ClientTools.md#tolocalestring)

***

### toObject()

> **toObject**(`options`?): `any`

Defined in: [property-manager.js/src/abstract.d.ts:181](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L181)

Convert the attributes to the json object

#### Parameters

##### options?

`any`

#### Returns

`any`

the json object.

#### Inherited from

[`ClientTools`](ClientTools.md).[`toObject`](ClientTools.md#toobject)

***

### toString()

> **toString**(): `string`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:128

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

[`ClientTools`](ClientTools.md).[`toString`](ClientTools.md#tostring)

***

### unregister()

> **unregister**(): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:619](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L619)

Removes the current `ToolFunc` instance from the static registry.

#### Returns

`any`

The instance that was unregistered.

#### Inherited from

[`ClientTools`](ClientTools.md).[`unregister`](ClientTools.md#unregister)

***

### valueOf()

> **valueOf**(): `Object`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:134

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

[`ClientTools`](ClientTools.md).[`valueOf`](ClientTools.md#valueof)

***

### assign()

#### Call Signature

> `static` **assign**\<`T`, `U`\>(`target`, `source`): `T` & `U`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:286

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

[`ClientTools`](ClientTools.md).[`assign`](ClientTools.md#assign-2)

#### Call Signature

> `static` **assign**\<`T`, `U`, `V`\>(`target`, `source1`, `source2`): `T` & `U` & `V`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:295

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

[`ClientTools`](ClientTools.md).[`assign`](ClientTools.md#assign-2)

#### Call Signature

> `static` **assign**\<`T`, `U`, `V`, `W`\>(`target`, `source1`, `source2`, `source3`): `T` & `U` & `V` & `W`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:305

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

[`ClientTools`](ClientTools.md).[`assign`](ClientTools.md#assign-2)

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

[`ClientTools`](ClientTools.md).[`assign`](ClientTools.md#assign-2)

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

[`ClientTools`](ClientTools.md).[`create`](ClientTools.md#create)

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

[`ClientTools`](ClientTools.md).[`create`](ClientTools.md#create)

***

### defineProperties()

> `static` **defineProperties**(`aTarget`, `aProperties`, `recreate`?): `any`

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

[`ClientTools`](ClientTools.md).[`defineProperties`](ClientTools.md#defineproperties-2)

***

### defineProperty()

> `static` **defineProperty**\<`T`\>(`o`, `p`, `attributes`): `T`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:203

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

[`ClientTools`](ClientTools.md).[`defineProperty`](ClientTools.md#defineproperty)

***

### entries()

#### Call Signature

> `static` **entries**\<`T`\>(`o`): \[`string`, `T`\][]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:36

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

[`ClientTools`](ClientTools.md).[`entries`](ClientTools.md#entries)

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

[`ClientTools`](ClientTools.md).[`entries`](ClientTools.md#entries)

***

### fetch()

> `static` **fetch**(`name`, `objParam`?, ...`args`?): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/client-tools.ts:98](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/client-tools.ts#L98)

#### Parameters

##### name

`string`

##### objParam?

`any`

##### args?

...`any`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`ClientTools`](ClientTools.md).[`fetch`](ClientTools.md#fetch-2)

***

### freeze()

#### Call Signature

> `static` **freeze**\<`T`\>(`f`): `T`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:222

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

[`ClientTools`](ClientTools.md).[`freeze`](ClientTools.md#freeze)

#### Call Signature

> `static` **freeze**\<`T`, `U`\>(`o`): `Readonly`\<`T`\>

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:228

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

[`ClientTools`](ClientTools.md).[`freeze`](ClientTools.md#freeze)

#### Call Signature

> `static` **freeze**\<`T`\>(`o`): `Readonly`\<`T`\>

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:234

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

[`ClientTools`](ClientTools.md).[`freeze`](ClientTools.md#freeze)

***

### fromEntries()

#### Call Signature

> `static` **fromEntries**\<`T`\>(`entries`): `object`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2019.object.d.ts:26

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

[`ClientTools`](ClientTools.md).[`fromEntries`](ClientTools.md#fromentries)

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

[`ClientTools`](ClientTools.md).[`fromEntries`](ClientTools.md#fromentries)

***

### get()

> `static` **get**(`name`): [`ToolFunc`](ToolFunc.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:319](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L319)

Retrieves a registered function by its name or alias.

#### Parameters

##### name

`string`

The name or alias of the function to retrieve.

#### Returns

[`ToolFunc`](ToolFunc.md)

The `ToolFunc` instance if found, otherwise `undefined`.

#### Inherited from

[`ClientTools`](ClientTools.md).[`get`](ClientTools.md#get)

***

### getAllByTag()

> `static` **getAllByTag**(`tagName`): [`ToolFunc`](ToolFunc.md)[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:365](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L365)

Retrieves all registered functions that have a specific tag.

#### Parameters

##### tagName

`string`

The tag to search for.

#### Returns

[`ToolFunc`](ToolFunc.md)[]

An array of matching `ToolFunc` instances.

#### Inherited from

[`ClientTools`](ClientTools.md).[`getAllByTag`](ClientTools.md#getallbytag)

***

### getByTag()

> `static` **getByTag**(`tagName`): `undefined` \| [`ToolFunc`](ToolFunc.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:340](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L340)

Finds the first registered function that has a specific tag.

#### Parameters

##### tagName

`string`

The tag to search for.

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

The first matching `ToolFunc` instance, or `undefined` if none is found.

#### Inherited from

[`ClientTools`](ClientTools.md).[`getByTag`](ClientTools.md#getbytag)

***

### getFunc()

> `static` **getFunc**(`name`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:431](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L431)

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

[`ClientTools`](ClientTools.md).[`getFunc`](ClientTools.md#getfunc-2)

***

### getFuncWithPos()

> `static` **getFuncWithPos**(`name`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:472](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L472)

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

[`ClientTools`](ClientTools.md).[`getFuncWithPos`](ClientTools.md#getfuncwithpos-2)

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

[`ClientTools`](ClientTools.md).[`getOwnPropertyDescriptor`](ClientTools.md#getownpropertydescriptor)

***

### getOwnPropertyDescriptors()

> `static` **getOwnPropertyDescriptors**\<`T`\>(`o`): \{ \[P in string \| number \| symbol\]: TypedPropertyDescriptor\<T\[P\]\> \} & `object`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:48

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

[`ClientTools`](ClientTools.md).[`getOwnPropertyDescriptors`](ClientTools.md#getownpropertydescriptors)

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

[`ClientTools`](ClientTools.md).[`getOwnPropertyNames`](ClientTools.md#getownpropertynames)

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

[`ClientTools`](ClientTools.md).[`getOwnPropertySymbols`](ClientTools.md#getownpropertysymbols)

***

### getProperties()

> `static` **getProperties**(): `PropDescriptors`

Defined in: [property-manager.js/src/advance.d.ts:10](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/advance.d.ts#L10)

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

[`ClientTools`](ClientTools.md).[`getProperties`](ClientTools.md#getproperties-2)

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

[`ClientTools`](ClientTools.md).[`getPrototypeOf`](ClientTools.md#getprototypeof)

***

### hasAsyncFeature()

> `static` **hasAsyncFeature**(`feature`): `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:388](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L388)

Checks if any registered function has a specific asynchronous feature.

#### Parameters

##### feature

[`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

The async feature bit to check for.

#### Returns

`boolean`

`true` if the feature is present in any function, otherwise `false`.

#### Inherited from

[`ClientTools`](ClientTools.md).[`hasAsyncFeature`](ClientTools.md#hasasyncfeature-2)

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

[`ClientTools`](ClientTools.md).[`hasOwn`](ClientTools.md#hasown)

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

[`ClientTools`](ClientTools.md).[`is`](ClientTools.md#is)

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

[`ClientTools`](ClientTools.md).[`isExtensible`](ClientTools.md#isextensible)

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

[`ClientTools`](ClientTools.md).[`isFrozen`](ClientTools.md#isfrozen)

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

[`ClientTools`](ClientTools.md).[`isSealed`](ClientTools.md#issealed)

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

[`ClientTools`](ClientTools.md).[`keys`](ClientTools.md#keys)

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

[`ClientTools`](ClientTools.md).[`keys`](ClientTools.md#keys)

***

### list()

> `static` **list**(): [`Funcs`](../interfaces/Funcs.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:331](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L331)

Returns the complete map of all registered functions.

#### Returns

[`Funcs`](../interfaces/Funcs.md)

The map of `ToolFunc` instances.

#### Inherited from

[`ClientTools`](ClientTools.md).[`list`](ClientTools.md#list)

***

### loadFrom()

> `static` **loadFrom**(`items`?): `Promise`\<[`Funcs`](../interfaces/Funcs.md)\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/client-tools.ts:68](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/client-tools.ts#L68)

Loads tool definitions from the remote server via the configured transport.
This method populates the local `ToolFunc` registry with `ClientTools` stubs.

#### Parameters

##### items?

[`Funcs`](../interfaces/Funcs.md)

#### Returns

`Promise`\<[`Funcs`](../interfaces/Funcs.md)\>

#### Inherited from

[`ClientTools`](ClientTools.md).[`loadFrom`](ClientTools.md#loadfrom)

***

### loadFromSync()

> `static` **loadFromSync**(`items`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/client-tools.ts:84](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/client-tools.ts#L84)

Synchronously loads tool definitions from a provided object, registering
each one as a `ClientTools` instance.

#### Parameters

##### items

[`Funcs`](../interfaces/Funcs.md)

A map of tool function metadata, typically from a server.

#### Returns

`void`

#### Inherited from

[`ClientTools`](ClientTools.md).[`loadFromSync`](ClientTools.md#loadfromsync)

***

### preventExtensions()

> `static` **preventExtensions**\<`T`\>(`o`): `T`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:240

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

[`ClientTools`](ClientTools.md).[`preventExtensions`](ClientTools.md#preventextensions)

***

### register()

#### Call Signature

> `static` **register**(`name`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:495](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L495)

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

The new `ToolFunc` instance, or `false` if a function with that name already exists.

The new `ToolFunc` instance, or `false` if a function with that name already exists.

##### Inherited from

[`ClientTools`](ClientTools.md).[`register`](ClientTools.md#register-2)

#### Call Signature

> `static` **register**(`func`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:496](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L496)

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

The new `ToolFunc` instance, or `false` if a function with that name already exists.

The new `ToolFunc` instance, or `false` if a function with that name already exists.

##### Inherited from

[`ClientTools`](ClientTools.md).[`register`](ClientTools.md#register-2)

#### Call Signature

> `static` **register**(`name`, `options`?): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:497](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L497)

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

The new `ToolFunc` instance, or `false` if a function with that name already exists.

The new `ToolFunc` instance, or `false` if a function with that name already exists.

##### Inherited from

[`ClientTools`](ClientTools.md).[`register`](ClientTools.md#register-2)

***

### run()

> `static` **run**(`name`, `params`?): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:402](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L402)

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

[`ClientTools`](ClientTools.md).[`run`](ClientTools.md#run-2)

***

### runSync()

> `static` **runSync**(`name`, `params`?): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:417](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L417)

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

[`ClientTools`](ClientTools.md).[`runSync`](ClientTools.md#runsync-2)

***

### runWithPos()

> `static` **runWithPos**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:443](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L443)

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

[`ClientTools`](ClientTools.md).[`runWithPos`](ClientTools.md#runwithpos-2)

***

### runWithPosSync()

> `static` **runWithPosSync**(`name`, ...`params`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:458](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L458)

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

[`ClientTools`](ClientTools.md).[`runWithPosSync`](ClientTools.md#runwithpossync-2)

***

### seal()

> `static` **seal**\<`T`\>(`o`): `T`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:216

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

[`ClientTools`](ClientTools.md).[`seal`](ClientTools.md#seal)

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

[`ClientTools`](ClientTools.md).[`setPrototypeOf`](ClientTools.md#setprototypeof)

***

### setTransport()

> `static` **setTransport**(`transport`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/client-tools.ts:50](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/client-tools.ts#L50)

Injects the client-side transport implementation. This is a crucial step
to enable communication with the server.

#### Parameters

##### transport

[`IClientToolTransport`](../interfaces/IClientToolTransport.md)

The transport instance to use for all client-server communication.

#### Returns

`void`

#### Inherited from

[`ClientTools`](ClientTools.md).[`setTransport`](ClientTools.md#settransport)

***

### unregister()

> `static` **unregister**(`name`): `undefined` \| [`ToolFunc`](ToolFunc.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:547](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/tool-func.ts#L547)

Unregisters a function by its name, also removing any associated aliases.

#### Parameters

##### name

`string`

The name of the function to unregister.

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

The unregistered `ToolFunc` instance, or `undefined` if it was not found.

#### Inherited from

[`ClientTools`](ClientTools.md).[`unregister`](ClientTools.md#unregister-2)

***

### values()

#### Call Signature

> `static` **values**\<`T`\>(`o`): `T`[]

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es2017.object.d.ts:24

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

[`ClientTools`](ClientTools.md).[`values`](ClientTools.md#values)

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

[`ClientTools`](ClientTools.md).[`values`](ClientTools.md#values)
