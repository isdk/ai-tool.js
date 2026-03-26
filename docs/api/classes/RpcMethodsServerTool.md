[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / RpcMethodsServerTool

# Class: RpcMethodsServerTool

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:28

Represents a function that runs on a server and can be exposed to clients.

`ServerTools` extends `ToolFunc` by adding logic for serialization and handling
server-side execution contexts. It is designed to work with a transport layer
(see `transports`) to expose its registered functions over a network.

## Extends

- [`ServerTools`](ServerTools.md)

## Extended by

- [`ResServerTools`](ResServerTools.md)

## Indexable

\[`name`: `string`\]: `any`

## Constructors

### Constructor

> **new RpcMethodsServerTool**(`name`, `options?`): `RpcMethodsServerTool`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:36

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Parameters

##### name

`string` | `Function` | [`FuncItem`](../interfaces/FuncItem.md)

##### options?

`any`

#### Returns

`RpcMethodsServerTool`

#### Inherited from

[`ServerTools`](ServerTools.md).[`constructor`](ServerTools.md#constructor)

## Properties

### \_registry?

> `optional` **\_registry**: *typeof* [`ToolFunc`](ToolFunc.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:496

**`Internal`**

The registry class where this tool was originally registered.

#### Inherited from

[`ServerTools`](ServerTools.md).[`_registry`](ServerTools.md#_registry)

***

### $attributes

> **$attributes**: `Properties`

Defined in: [property-manager.js/src/advance.d.ts:5](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/advance.d.ts#L5)

#### Inherited from

[`ServerTools`](ServerTools.md).[`$attributes`](ServerTools.md#attributes)

***

### action?

> `optional` **action**: `"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:82

The action to be used for the remote call. This typically represents an RPC method name.
Only for RESTful HTTP transports, it might be mapped to a standard HTTP method (e.g., GET, POST)

#### Inherited from

[`ServerTools`](ServerTools.md).[`action`](ServerTools.md#action)

***

### alias?

> `optional` **alias**: `string` \| `string`[]

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:258

Optional aliases for the function name.

#### Inherited from

[`ServerTools`](ServerTools.md).[`alias`](ServerTools.md#alias)

***

### allowExportFunc?

> `optional` **allowExportFunc**: `boolean`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:319

If set to true, the body of the function (`func`) will be serialized and sent
to the client when tools are loaded. This allows the client to execute the
function locally instead of making a remote call. Defaults to false.

#### Inherited from

[`ServerTools`](ServerTools.md).[`allowExportFunc`](ServerTools.md#allowexportfunc)

***

### ~~apiRoot?~~

> `optional` **apiRoot**: `string`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:76

The root endpoint for the remote service.

#### Deprecated

Use `transport` instead.

#### Inherited from

[`ServerTools`](ServerTools.md).[`apiRoot`](ServerTools.md#apiroot)

***

### asyncFeatures?

> `optional` **asyncFeatures**: `number`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:272

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

[`ServerTools`](ServerTools.md).[`asyncFeatures`](ServerTools.md#asyncfeatures)

***

### constructor

> **constructor**: `Function`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:125

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

***

### ctx?

> `optional` **ctx**: [`ToolFuncContext`](../interfaces/ToolFuncContext.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:547

The execution context for the current function call.
Only available when isolated execution is enabled.

#### Inherited from

[`ServerTools`](ServerTools.md).[`ctx`](ServerTools.md#ctx)

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

[`ServerTools`](ServerTools.md).[`defaultOptions`](ServerTools.md#defaultoptions)

***

### depends?

> `optional` **depends**: `object`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:295

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

[`ServerTools`](ServerTools.md).[`depends`](ServerTools.md#depends)

***

### description?

> `optional` **description**: `string`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:302

A detailed description of what the function does.

#### Inherited from

[`ServerTools`](ServerTools.md).[`description`](ServerTools.md#description)

***

### expectedDuration?

> `optional` **expectedDuration**: `number`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:102

The expected duration of the remote call in milliseconds.

#### Inherited from

[`ServerTools`](ServerTools.md).[`expectedDuration`](ServerTools.md#expectedduration)

***

### fetchOptions?

> `optional` **fetchOptions**: `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:87

Addtional options to be passed to the underlying `fetch` call in a transport.

#### Inherited from

[`ServerTools`](ServerTools.md).[`fetchOptions`](ServerTools.md#fetchoptions)

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:247

If true, indicates that this function should be treated as a server-side API.

#### Inherited from

[`ServerTools`](ServerTools.md).[`isApi`](ServerTools.md#isapi)

***

### methods

> **methods**: `string`[]

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:29

***

### name?

> `optional` **name**: `string`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:204

The unique name of the function.

#### Inherited from

[`ServerTools`](ServerTools.md).[`name`](ServerTools.md#name)

***

### nonExported1stChar

> **nonExported1stChar**: `string`

Defined in: [property-manager.js/src/abstract.d.ts:78](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L78)

the property with the default prefix '$' will not be exported.

#### Inherited from

[`ServerTools`](ServerTools.md).[`nonExported1stChar`](ServerTools.md#nonexported1stchar)

***

### params

> **params**: [`FuncParams`](../interfaces/FuncParams.md)

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:33

Parameter definitions, which can be an object mapping names to definitions or an array for positional parameters.

#### Inherited from

[`ServerTools`](ServerTools.md).[`params`](ServerTools.md#params)

***

### result?

> `optional` **result**: `string` \| `Record`\<`string`, `any`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:214

The expected return type of the function, described as a string or a JSON schema object.

#### Inherited from

[`ServerTools`](ServerTools.md).[`result`](ServerTools.md#result)

***

### scope?

> `optional` **scope**: `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:219

The execution scope or context (`this`) for the function.

#### Inherited from

[`ServerTools`](ServerTools.md).[`scope`](ServerTools.md#scope)

***

### setup()?

> `optional` **setup**: (`this`, `options?`) => `void`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:242

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

[`ServerTools`](ServerTools.md).[`setup`](ServerTools.md#setup)

***

### stream?

> `optional` **stream**: `boolean`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:253

If true, indicates that the function has the *capability* to stream its output.
Whether a specific call is streamed is determined by a `stream` property in the runtime parameters.

#### Inherited from

[`ServerTools`](ServerTools.md).[`stream`](ServerTools.md#stream)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:224

Tags for grouping or filtering functions.

#### Inherited from

[`ServerTools`](ServerTools.md).[`tags`](ServerTools.md#tags)

***

### timeout?

> `optional` **timeout**: `number` \| \{ `keepAliveOnTimeout?`: `boolean`; `streamIdleTimeout?`: `number`; `value`: `number`; \}

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:91

The timeout configuration for the remote call.

#### Type Declaration

`number`

\{ `keepAliveOnTimeout?`: `boolean`; `streamIdleTimeout?`: `number`; `value`: `number`; \}

#### keepAliveOnTimeout?

> `optional` **keepAliveOnTimeout**: `boolean`

Whether to keep the server-side function running after a timeout.

#### streamIdleTimeout?

> `optional` **streamIdleTimeout**: `number`

The idle timeout for streaming responses in milliseconds.

#### value

> **value**: `number`

The hard timeout in milliseconds.

#### Inherited from

[`ServerTools`](ServerTools.md).[`timeout`](ServerTools.md#timeout)

***

### title?

> `optional` **title**: `string`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:307

A concise, human-readable title for the function, often used in UI or by AI.

#### Inherited from

[`ServerTools`](ServerTools.md).[`title`](ServerTools.md#title)

***

### \_refCounts

> `protected` `static` **\_refCounts**: `object`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:489

Tracks the number of active registration holds on each function name.
A function is truly removed only when its reference count drops to zero.

#### Index Signature

\[`name`: `string`\]: `number`

#### Inherited from

[`ServerTools`](ServerTools.md).[`_refCounts`](ServerTools.md#_refcounts)

***

### aliases

> `static` **aliases**: `object`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:480

A static map of aliases to their corresponding primary function names.

#### Index Signature

\[`name`: `string`\]: `string`

#### Inherited from

[`ServerTools`](ServerTools.md).[`aliases`](ServerTools.md#aliases)

***

### ctx?

> `static` `optional` **ctx**: [`ToolFuncContext`](../interfaces/ToolFuncContext.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:508

The static execution context for proxy classes created via ToolFunc.with().

#### Inherited from

[`ServerTools`](ServerTools.md).[`ctx`](ServerTools.md#ctx-1)

***

### dataPath

> `static` **dataPath**: `string`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:503

A conventional property to designate a file path for saving the registered `ToolFunc` data.
Note: The `ToolFunc` class itself does not implement persistence logic. It is up to the
developer to use this path to save and load the `ToolFunc.items` registry if needed.

#### Inherited from

[`ServerTools`](ServerTools.md).[`dataPath`](ServerTools.md#datapath)

***

### items

> `static` **items**: [`Funcs`](../interfaces/Funcs.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:475

A static registry of all `ToolFunc` implementations, indexed by their primary name.

#### Inherited from

[`ServerTools`](ServerTools.md).[`items`](ServerTools.md#items)

***

### SpecialRpcMethodNames?

> `static` `optional` **SpecialRpcMethodNames**: `string`[]

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:32

## Accessors

### SpecialRpcMethodNames

#### Get Signature

> **get** **SpecialRpcMethodNames**(): `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:34

##### Returns

`any`

***

### apiRoot

#### Get Signature

> **get** `static` **apiRoot**(): `string` \| `undefined`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:336

The conventional root path for the API endpoint.

##### Returns

`string` \| `undefined`

#### Inherited from

[`ServerTools`](ServerTools.md).[`apiRoot`](ServerTools.md#apiroot-1)

## Methods

### \_prepareContext()

> `protected` **\_prepareContext**(`params?`, `ctx?`): [`ToolFuncContext`](../interfaces/ToolFuncContext.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:806

Creates the final execution context (`this.ctx`) for a Shadow Instance.

NOTE: We MUST use 'this._prepareContext' (instance path) instead of
'Static._prepareContext' to allow AOP plugins (like CancelableAbility)
to hook into context preparation via method overloading ($_prepareContext).

#### Parameters

##### params?

`any`

##### ctx?

[`ToolFuncContext`](../interfaces/ToolFuncContext.md)

#### Returns

[`ToolFuncContext`](../interfaces/ToolFuncContext.md)

#### Inherited from

[`ServerTools`](ServerTools.md).[`_prepareContext`](ServerTools.md#_preparecontext)

***

### \_shouldIsolate()

> `protected` **\_shouldIsolate**(`params?`, `ctx?`): `boolean`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:798

Determines if the function execution should be isolated into a "Shadow Instance".

PRIORITY LOGIC:
1. Explicit 'ctx.isolated' in the current call (Highest).
2. Any explicit 'ctx' provided (Safe default: isolate to apply new overrides).
3. Prevention of recursion (If already an own 'ctx' property exists).
4. Inherited 'this.ctx.isolated' configuration.
5. Presence of any inherited context (Default: isolate for concurrency safety).

#### Parameters

##### params?

`any`

##### ctx?

[`ToolFuncContext`](../interfaces/ToolFuncContext.md)

#### Returns

`boolean`

#### Inherited from

[`ServerTools`](ServerTools.md).[`_shouldIsolate`](ServerTools.md#_shouldisolate)

***

### arr2ObjParams()

> **arr2ObjParams**(`params`): `any`[]

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:770

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

[`ServerTools`](ServerTools.md).[`arr2ObjParams`](ServerTools.md#arr2objparams)

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

[`ServerTools`](ServerTools.md).[`assign`](ServerTools.md#assign)

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

[`ServerTools`](ServerTools.md).[`assignProperty`](ServerTools.md#assignproperty)

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

[`ServerTools`](ServerTools.md).[`assignPropertyTo`](ServerTools.md#assignpropertyto)

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

[`ServerTools`](ServerTools.md).[`assignTo`](ServerTools.md#assignto)

***

### cast()

> **cast**(`key`, `value`): `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:37

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`any`

***

### castParams()

> **castParams**(`params`): [`RpcMethodsServerFuncParams`](../interfaces/RpcMethodsServerFuncParams.md)

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:39

#### Parameters

##### params

[`RpcMethodsServerFuncParams`](../interfaces/RpcMethodsServerFuncParams.md)

#### Returns

[`RpcMethodsServerFuncParams`](../interfaces/RpcMethodsServerFuncParams.md)

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

[`ServerTools`](ServerTools.md).[`clone`](ServerTools.md#clone)

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

[`ServerTools`](ServerTools.md).[`cloneTo`](ServerTools.md#cloneto)

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

[`ServerTools`](ServerTools.md).[`defineProperties`](ServerTools.md#defineproperties)

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

[`ServerTools`](ServerTools.md).[`exportTo`](ServerTools.md#exportto)

***

### func()

> **func**(`params`): `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:40

Placeholder for the actual server-side function implementation.
This method is intended to be defined when a `ServerTools` instance is created.

#### Parameters

##### params

[`RpcMethodsServerFuncParams`](../interfaces/RpcMethodsServerFuncParams.md)

The parameters for the function.

#### Returns

`any`

The result of the function.

#### Inherited from

[`ServerTools`](ServerTools.md).[`func`](ServerTools.md#func)

***

### getFunc()

> **getFunc**(`name?`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:866

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

[`ServerTools`](ServerTools.md).[`getFunc`](ServerTools.md#getfunc)

***

### getFuncWithPos()

> **getFuncWithPos**(`name?`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:910

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

[`ServerTools`](ServerTools.md).[`getFuncWithPos`](ServerTools.md#getfuncwithpos)

***

### getMethodFromParams()

> **getMethodFromParams**(`params`): `string` \| `undefined`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:38

#### Parameters

##### params

[`RpcMethodsServerFuncParams`](../interfaces/RpcMethodsServerFuncParams.md)

#### Returns

`string` \| `undefined`

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Defined in: [property-manager.js/src/abstract.d.ts:98](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L98)

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

#### Inherited from

[`ServerTools`](ServerTools.md).[`getProperties`](ServerTools.md#getproperties)

***

### hasAsyncFeature()

> **hasAsyncFeature**(`feature`): `boolean`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:916

Checks if the current function instance supports a specific async feature.

#### Parameters

##### feature

[`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

The async feature bit to check for.

#### Returns

`boolean`

`true` if the feature is supported, otherwise `false`.

#### Inherited from

[`ServerTools`](ServerTools.md).[`hasAsyncFeature`](ServerTools.md#hasasyncfeature)

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

[`ServerTools`](ServerTools.md).[`hasOwnProperty`](ServerTools.md#hasownproperty)

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

[`ServerTools`](ServerTools.md).[`initialize`](ServerTools.md#initialize)

***

### initRpcMethods()

> **initRpcMethods**(`methods?`): `void`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:35

#### Parameters

##### methods?

`string`[]

#### Returns

`void`

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

[`ServerTools`](ServerTools.md).[`isPrototypeOf`](ServerTools.md#isprototypeof)

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

[`ServerTools`](ServerTools.md).[`isSame`](ServerTools.md#issame)

***

### isStream()

> **isStream**(`params`): `boolean` \| `undefined`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:929

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

`boolean` \| `undefined`

`true` if the call should be streamed, `false` or `undefined` otherwise.

#### Inherited from

[`ServerTools`](ServerTools.md).[`isStream`](ServerTools.md#isstream)

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

[`ServerTools`](ServerTools.md).[`mergeTo`](ServerTools.md#mergeto)

***

### obj2ArrParams()

> **obj2ArrParams**(`params?`): `any`[]

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:777

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

[`ServerTools`](ServerTools.md).[`obj2ArrParams`](ServerTools.md#obj2arrparams)

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

[`ServerTools`](ServerTools.md).[`propertyIsEnumerable`](ServerTools.md#propertyisenumerable)

***

### register()

> **register**(): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:757

Registers the current `ToolFunc` instance into the static registry.
Also registers any declared dependencies.

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

The instance itself upon successful registration, or `false` if it already exists.

#### Inherited from

[`ServerTools`](ServerTools.md).[`register`](ServerTools.md#register)

***

### run()

> **run**(`params`, `options?`): `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:360

Overrides the base `run` method to inject transport-specific context.
If a `context` object containing `req`, `reply`, and `signal` is provided,
these are added to the parameters as `_req`, `_res`, and `_signal` before execution.

#### Parameters

##### params

[`ServerFuncParams`](../interfaces/ServerFuncParams.md)

The parameters for the function.

##### options?

`any`

The transport-level context or options.

#### Returns

`any`

The result of the function execution.

#### Inherited from

[`ServerTools`](ServerTools.md).[`run`](ServerTools.md#run)

***

### runAs()

> **runAs**(`name`, `params?`, `ctx?`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:837

Asynchronously executes another registered function by name.

Note: This method returns a `Promise` if the underlying function is asynchronous,
otherwise it may return the result synchronously.

#### Parameters

##### name

`string`

The name of the target function to run.

##### params?

`any`

Optional parameters to pass to the function.

##### ctx?

[`ToolFuncContext`](../interfaces/ToolFuncContext.md)

The execution context.

#### Returns

`any`

A promise or the direct result of the function's execution.

#### Inherited from

[`ServerTools`](ServerTools.md).[`runAs`](ServerTools.md#runas)

***

### runAsSync()

> **runAsSync**(`name`, `params?`, `ctx?`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:858

Executes another registered function by name, using hierarchical dependency resolution.

This method supports **Late-Binding Polymorphism**. It uses the `rootRegistry` and
`binding` strategy from the execution context to resolve dependencies.

### Binding Modes:
- `'auto'` (Default): **Lineage-Aware**. Uses late-binding only if the `rootRegistry`
  is a descendant of the tool's definition registry and has shadowed the dependency.
  Otherwise, uses early-binding for stability.
- `'early'`: **Safety First**. Always prefers the pre-bound instance from `depends`.
- `'late'`: **Forced Polymorphism**. Always resolves from the `rootRegistry`,
  ignoring the definer's environment.

#### Parameters

##### name

`string`

The name or alias of the target function to run.

##### params?

`any`

Optional parameters to pass to the target function.

##### ctx?

[`ToolFuncContext`](../interfaces/ToolFuncContext.md)

The execution context.

#### Returns

`any`

The result of the target function execution.

#### Throws

If the target function cannot be found in the current lineage.

#### Inherited from

[`ServerTools`](ServerTools.md).[`runAsSync`](ServerTools.md#runassync)

***

### runSync()

> **runSync**(`params?`, `ctx?`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:814

Executes the function synchronously with a named parameters object.

#### Parameters

##### params?

`any`

The parameters object for the function.

##### ctx?

[`ToolFuncContext`](../interfaces/ToolFuncContext.md)

The execution context.

#### Returns

`any`

The result of the function execution.

#### Throws

Will throw an error if an array of parameters is passed to a function that expects an object.

#### Inherited from

[`ServerTools`](ServerTools.md).[`runSync`](ServerTools.md#runsync)

***

### runWithPos()

> **runWithPos**(...`params`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:891

Executes the function asynchronously using positional arguments.

Note: This method returns a `Promise` if the underlying function is asynchronous,
otherwise it may return the result synchronously.

#### Parameters

##### params

...`any`[]

Positional arguments passed to the function.

#### Returns

`any`

A promise or the direct result of the function's execution.

#### Inherited from

[`ServerTools`](ServerTools.md).[`runWithPos`](ServerTools.md#runwithpos)

***

### runWithPosAs()

> **runWithPosAs**(`name`, ...`params`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:902

Asynchronously executes another function by name using positional arguments.

Note: This method returns a `Promise` if the underlying function is asynchronous,
otherwise it may return the result synchronously.

#### Parameters

##### name

`string`

The name of the target function to run.

##### params

...`any`[]

Positional arguments to pass to the function.

#### Returns

`any`

A promise or the direct result of the function's execution.

#### Inherited from

[`ServerTools`](ServerTools.md).[`runWithPosAs`](ServerTools.md#runwithposas)

***

### runWithPosAsSync()

> **runWithPosAsSync**(`name`, ...`params`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:881

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

[`ServerTools`](ServerTools.md).[`runWithPosAsSync`](ServerTools.md#runwithposassync)

***

### runWithPosSync()

> **runWithPosSync**(...`params`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:873

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

[`ServerTools`](ServerTools.md).[`runWithPosSync`](ServerTools.md#runwithpossync)

***

### toJSON()

> **toJSON**(): `any`

Defined in: [property-manager.js/src/abstract.d.ts:182](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L182)

#### Returns

`any`

#### Inherited from

[`ServerTools`](ServerTools.md).[`toJSON`](ServerTools.md#tojson)

***

### toLocaleString()

> **toLocaleString**(): `string`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:131

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

[`ServerTools`](ServerTools.md).[`toLocaleString`](ServerTools.md#tolocalestring)

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

[`ServerTools`](ServerTools.md).[`toObject`](ServerTools.md#toobject)

***

### toString()

> **toString**(): `string`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:128

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

[`ServerTools`](ServerTools.md).[`toString`](ServerTools.md#tostring)

***

### unregister()

> **unregister**(`options?`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:763

Removes the current `ToolFunc` instance from the static registry.

#### Parameters

##### options?

Unregistration options or a boolean force flag.

`boolean` | [`UnregisterOptions`](../interfaces/UnregisterOptions.md)

#### Returns

`any`

The instance that was unregistered.

#### Inherited from

[`ServerTools`](ServerTools.md).[`unregister`](ServerTools.md#unregister)

***

### valueOf()

> **valueOf**(): `Object`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:134

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

[`ServerTools`](ServerTools.md).[`valueOf`](ServerTools.md#valueof)

***

### with()

> **with**(`ctx`): `this`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:542

Returns an isolated instance with the provided context.

#### Parameters

##### ctx

[`ToolFuncContext`](../interfaces/ToolFuncContext.md)

The context to use.

#### Returns

`this`

An isolated ToolFunc instance.

#### Inherited from

[`ServerTools`](ServerTools.md).[`with`](ServerTools.md#with)

***

### \_acquireDependencies()

> `protected` `static` **\_acquireDependencies**(`inst`, `stack?`): `void`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:740

#### Parameters

##### inst

[`ToolFunc`](ToolFunc.md)

##### stack?

`Set`\<`string`\>

#### Returns

`void`

#### Inherited from

[`ServerTools`](ServerTools.md).[`_acquireDependencies`](ServerTools.md#_acquiredependencies)

***

### \_decRefCount()

> `protected` `static` **\_decRefCount**(`name`): `number`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:739

#### Parameters

##### name

`string`

#### Returns

`number`

#### Inherited from

[`ServerTools`](ServerTools.md).[`_decRefCount`](ServerTools.md#_decrefcount)

***

### \_getRegistrationAction()

> `protected` `static` **\_getRegistrationAction**(`name`, `override`): `"replace"` \| `"create"` \| `"shadow"` \| `"increment"`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:670

Analyzes the registration context and determines the appropriate action.

#### Parameters

##### name

`string`

The function name to register.

##### override

Override options.

###### name?

`boolean`

#### Returns

`"replace"` \| `"create"` \| `"shadow"` \| `"increment"`

The determined registration action.

#### Inherited from

[`ServerTools`](ServerTools.md).[`_getRegistrationAction`](ServerTools.md#_getregistrationaction)

***

### \_incRefCount()

> `protected` `static` **\_incRefCount**(`name`): `void`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:738

#### Parameters

##### name

`string`

#### Returns

`void`

#### Inherited from

[`ServerTools`](ServerTools.md).[`_incRefCount`](ServerTools.md#_increfcount)

***

### \_normalizeArguments()

> `protected` `static` **\_normalizeArguments**(`name`, `options?`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:643

**`Internal`**

Internal helper to normalize arguments from various input patterns.
Priority: name (arg1) > options (arg2).

#### Parameters

##### name

Primary config.

`string` | `Function` | [`ToolFunc`](ToolFunc.md) | [`FuncItem`](../interfaces/FuncItem.md)

##### options?

`any`

Default config.

#### Returns

`any`

Normalized options object.

#### Inherited from

[`ServerTools`](ServerTools.md).[`_normalizeArguments`](ServerTools.md#_normalizearguments)

***

### \_normalizeRegisterArguments()

> `protected` `static` **\_normalizeRegisterArguments**(`name`, `options?`): [`RegisterOptions`](../interfaces/RegisterOptions.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:682

**`Internal`**

Normalizes the arguments passed to the `register` method into a unified `RegisterOptions` object.

#### Parameters

##### name

The primary identification or implementation.

`string` | `Function` | [`ToolFunc`](ToolFunc.md) | [`RegisterOptions`](../interfaces/RegisterOptions.md)

##### options?

[`RegisterOptions`](../interfaces/RegisterOptions.md)

Additional or overriding configuration.

#### Returns

[`RegisterOptions`](../interfaces/RegisterOptions.md)

A normalized options object ready for registration.

#### Inherited from

[`ServerTools`](ServerTools.md).[`_normalizeRegisterArguments`](ServerTools.md#_normalizeregisterarguments)

***

### \_prepareContext()

> `static` **\_prepareContext**(`parentCtx?`, `ctx?`): [`ToolFuncContext`](../interfaces/ToolFuncContext.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:535

**`Internal`**

Internal helper to prepare the execution context, maintaining the prototype chain.

#### Parameters

##### parentCtx?

[`ToolFuncContext`](../interfaces/ToolFuncContext.md)

The parent context to inherit from.

##### ctx?

[`ToolFuncContext`](../interfaces/ToolFuncContext.md)

The new context properties to apply.

#### Returns

[`ToolFuncContext`](../interfaces/ToolFuncContext.md)

The merged context.

DANGER - DO NOT "OPTIMIZE" UNLESS YOU UNDERSTAND:
1. Why NOT Object.assign(target, ctx) alone?
   Object.assign only copies 'own' properties. In nested calls (e.g., .with().with()),
   parent properties exist on the prototype. Using assign would drop all inherited
   context data (like traceId from a parent runner).
2. Why NOT Object.setPrototypeOf?
   It's a heavy performance killer in V8. We use Object.create(proto) instead.
3. Why check isPrototypeOf?
   If ctx is already in the chain, we return it to maintain identity and avoid
   redundant shadow layers, which is required by many AOP plugins and unit tests.

#### Inherited from

[`ServerTools`](ServerTools.md).[`_prepareContext`](ServerTools.md#_preparecontext-2)

***

### \_releaseDependencies()

> `protected` `static` **\_releaseDependencies**(`inst`): `void`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:741

#### Parameters

##### inst

[`ToolFunc`](ToolFunc.md)

#### Returns

`void`

#### Inherited from

[`ServerTools`](ServerTools.md).[`_releaseDependencies`](ServerTools.md#_releasedependencies)

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

[`ServerTools`](ServerTools.md).[`assign`](ServerTools.md#assign-2)

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

[`ServerTools`](ServerTools.md).[`assign`](ServerTools.md#assign-2)

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

[`ServerTools`](ServerTools.md).[`assign`](ServerTools.md#assign-2)

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

[`ServerTools`](ServerTools.md).[`assign`](ServerTools.md#assign-2)

***

### clear()

> `static` **clear**(): `void`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:661

Resets the local registry by clearing all registered items, aliases, and reference counts.

In a hierarchical registry, this only clears properties "owned" by the current
layer. Inherited items from parent registries remain visible through the prototype chain.

#### Returns

`void`

#### Inherited from

[`ServerTools`](ServerTools.md).[`clear`](ServerTools.md#clear)

***

### create()

#### Call Signature

> `static` **create**(`o`): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:188

Creates an object that has the specified prototype or that has null prototype.

##### Parameters

###### o

Object to use as a prototype. May be null.

`object` | `null`

##### Returns

`any`

##### Inherited from

[`ServerTools`](ServerTools.md).[`create`](ServerTools.md#create)

#### Call Signature

> `static` **create**(`o`, `properties`): `any`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:195

Creates an object that has the specified prototype, and that optionally contains specified properties.

##### Parameters

###### o

Object to use as a prototype. May be null

`object` | `null`

###### properties

`PropertyDescriptorMap` & `ThisType`\<`any`\>

JavaScript object that contains one or more property descriptors.

##### Returns

`any`

##### Inherited from

[`ServerTools`](ServerTools.md).[`create`](ServerTools.md#create)

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

[`ServerTools`](ServerTools.md).[`defineProperties`](ServerTools.md#defineproperties-2)

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

[`ServerTools`](ServerTools.md).[`defineProperty`](ServerTools.md#defineproperty)

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

[`ServerTools`](ServerTools.md).[`entries`](ServerTools.md#entries)

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

[`ServerTools`](ServerTools.md).[`entries`](ServerTools.md#entries)

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

[`ServerTools`](ServerTools.md).[`freeze`](ServerTools.md#freeze)

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

[`ServerTools`](ServerTools.md).[`freeze`](ServerTools.md#freeze)

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

[`ServerTools`](ServerTools.md).[`freeze`](ServerTools.md#freeze)

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

[`ServerTools`](ServerTools.md).[`fromEntries`](ServerTools.md#fromentries)

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

[`ServerTools`](ServerTools.md).[`fromEntries`](ServerTools.md#fromentries)

***

### get()

> `static` **get**(`name`): [`ToolFunc`](ToolFunc.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:553

Retrieves a registered function by its name or alias.

#### Parameters

##### name

`string`

The name or alias of the function to retrieve.

#### Returns

[`ToolFunc`](ToolFunc.md)

The `ToolFunc` instance if found, otherwise `undefined`.

#### Inherited from

[`ServerTools`](ServerTools.md).[`get`](ServerTools.md#get)

***

### getAllByTag()

> `static` **getAllByTag**(`tagName`): [`ToolFunc`](ToolFunc.md)[]

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:570

Retrieves all registered functions that have a specific tag.

#### Parameters

##### tagName

`string`

The tag to search for.

#### Returns

[`ToolFunc`](ToolFunc.md)[]

An array of matching `ToolFunc` instances.

#### Inherited from

[`ServerTools`](ServerTools.md).[`getAllByTag`](ServerTools.md#getallbytag)

***

### getByTag()

> `static` **getByTag**(`tagName`): [`ToolFunc`](ToolFunc.md) \| `undefined`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:564

Finds the first registered function that has a specific tag.

#### Parameters

##### tagName

`string`

The tag to search for.

#### Returns

[`ToolFunc`](ToolFunc.md) \| `undefined`

The first matching `ToolFunc` instance, or `undefined` if none is found.

#### Inherited from

[`ServerTools`](ServerTools.md).[`getByTag`](ServerTools.md#getbytag)

***

### getFunc()

> `static` **getFunc**(`name`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:605

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

[`ServerTools`](ServerTools.md).[`getFunc`](ServerTools.md#getfunc-2)

***

### getFuncWithPos()

> `static` **getFuncWithPos**(`name`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:632

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

[`ServerTools`](ServerTools.md).[`getFuncWithPos`](ServerTools.md#getfuncwithpos-2)

***

### getOwnPropertyDescriptor()

> `static` **getOwnPropertyDescriptor**(`o`, `p`): `PropertyDescriptor` \| `undefined`

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

`PropertyDescriptor` \| `undefined`

#### Inherited from

[`ServerTools`](ServerTools.md).[`getOwnPropertyDescriptor`](ServerTools.md#getownpropertydescriptor)

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

[`ServerTools`](ServerTools.md).[`getOwnPropertyDescriptors`](ServerTools.md#getownpropertydescriptors)

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

[`ServerTools`](ServerTools.md).[`getOwnPropertyNames`](ServerTools.md#getownpropertynames)

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

[`ServerTools`](ServerTools.md).[`getOwnPropertySymbols`](ServerTools.md#getownpropertysymbols)

***

### getProperties()

> `static` **getProperties**(): `PropDescriptors`

Defined in: [property-manager.js/src/advance.d.ts:10](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/advance.d.ts#L10)

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

[`ServerTools`](ServerTools.md).[`getProperties`](ServerTools.md#getproperties-2)

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

[`ServerTools`](ServerTools.md).[`getPrototypeOf`](ServerTools.md#getprototypeof)

***

### hasAsyncFeature()

> `static` **hasAsyncFeature**(`feature`): `boolean`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:576

Checks if any registered function has a specific asynchronous feature.

#### Parameters

##### feature

[`AsyncFeatureBits`](../enumerations/AsyncFeatureBits.md)

The async feature bit to check for.

#### Returns

`boolean`

`true` if the feature is present in any function, otherwise `false`.

#### Inherited from

[`ServerTools`](ServerTools.md).[`hasAsyncFeature`](ServerTools.md#hasasyncfeature-2)

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

[`ServerTools`](ServerTools.md).[`hasOwn`](ServerTools.md#hasown)

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

[`ServerTools`](ServerTools.md).[`is`](ServerTools.md#is)

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

[`ServerTools`](ServerTools.md).[`isExtensible`](ServerTools.md#isextensible)

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

[`ServerTools`](ServerTools.md).[`isFrozen`](ServerTools.md#isfrozen)

***

### isolateRegistry()

> `static` **isolateRegistry**(`options?`): `void`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:654

Isolates the current registry layer by branching off its parent using prototype shadowing.

This creates a new "scope" where:
1. New registrations are stored only in the local layer, supporting tool shadowing.
2. Parent tools remain accessible via the prototype chain (read-only) unless shadowed.
3. Reference counting is isolated, enabling clean per-layer lifecycle management.

#### Parameters

##### options?

[`ToolFuncRegistryIsolateOptions`](../interfaces/ToolFuncRegistryIsolateOptions.md)

Options to selectively isolate specific maps (items, aliases, refCounts).

#### Returns

`void`

#### Inherited from

[`ServerTools`](ServerTools.md).[`isolateRegistry`](ServerTools.md#isolateregistry)

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

[`ServerTools`](ServerTools.md).[`isSealed`](ServerTools.md#issealed)

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

[`ServerTools`](ServerTools.md).[`keys`](ServerTools.md#keys)

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

[`ServerTools`](ServerTools.md).[`keys`](ServerTools.md#keys)

***

### list()

> `static` **list**(): [`Funcs`](../interfaces/Funcs.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:558

Returns the complete map of all registered functions.

#### Returns

[`Funcs`](../interfaces/Funcs.md)

The map of `ToolFunc` instances.

#### Inherited from

[`ServerTools`](ServerTools.md).[`list`](ServerTools.md#list)

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

[`ServerTools`](ServerTools.md).[`preventExtensions`](ServerTools.md#preventextensions)

***

### register()

#### Call Signature

> `static` **register**(`name`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:718

**`Internal`**

Registers a `ToolFunc` instance into the registry.

This method supports multiple overloads and handles hierarchical registration,
alias collision protection, and automatic dependency registration with cycle detection.

### Hierarchical Behavior:
- In an isolated registry, items are stored locally, shadowing parent items with the same name.
- Alias consistency is enforced across the hierarchy: registering a colliding alias throws an error
  unless `allowOverride.alias` is explicitly granted.

### Circular Dependencies:
Automatically detects and manages circular dependency chains using an internal stack.
Reference counts are precisely managed (count=1 for back-edges) to prevent memory leaks
and enable clean group unregistration.

##### Parameters

###### name

`string`

The tool instance, function, or name to register.

###### options

[`RegisterOptions`](../interfaces/RegisterOptions.md)

Configuration or implementation for the tool.

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

The registered ToolFunc instance on success (creation, shadowing, or override),
or `false` if registration was ignored (e.g., ref-count increment only).

##### Example

```ts
// 1. Registering with explicit name and function
ToolFunc.register('add', { func: (a, b) => a + b });

// 2. Registering with shadowing permission in an isolated registry
MyPluginTools.register('calc', { func: () => 2 }, { allowOverride: true });

// 3. Registering an existing ToolFunc instance
const tool = new ToolFunc({ name: 'my-tool', func: () => 'ok' });
ToolFunc.register(tool);
```

##### Throws

If name is missing, or if an alias collision occurs without permission.

##### Inherited from

[`ServerTools`](ServerTools.md).[`register`](ServerTools.md#register-2)

#### Call Signature

> `static` **register**(`func`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:719

**`Internal`**

Registers a `ToolFunc` instance into the registry.

This method supports multiple overloads and handles hierarchical registration,
alias collision protection, and automatic dependency registration with cycle detection.

### Hierarchical Behavior:
- In an isolated registry, items are stored locally, shadowing parent items with the same name.
- Alias consistency is enforced across the hierarchy: registering a colliding alias throws an error
  unless `allowOverride.alias` is explicitly granted.

### Circular Dependencies:
Automatically detects and manages circular dependency chains using an internal stack.
Reference counts are precisely managed (count=1 for back-edges) to prevent memory leaks
and enable clean group unregistration.

##### Parameters

###### func

`Function`

###### options

[`RegisterOptions`](../interfaces/RegisterOptions.md)

Configuration or implementation for the tool.

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

The registered ToolFunc instance on success (creation, shadowing, or override),
or `false` if registration was ignored (e.g., ref-count increment only).

##### Example

```ts
// 1. Registering with explicit name and function
ToolFunc.register('add', { func: (a, b) => a + b });

// 2. Registering with shadowing permission in an isolated registry
MyPluginTools.register('calc', { func: () => 2 }, { allowOverride: true });

// 3. Registering an existing ToolFunc instance
const tool = new ToolFunc({ name: 'my-tool', func: () => 'ok' });
ToolFunc.register(tool);
```

##### Throws

If name is missing, or if an alias collision occurs without permission.

##### Inherited from

[`ServerTools`](ServerTools.md).[`register`](ServerTools.md#register-2)

#### Call Signature

> `static` **register**(`name`, `options?`, `_stack?`): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:720

**`Internal`**

Registers a `ToolFunc` instance into the registry.

This method supports multiple overloads and handles hierarchical registration,
alias collision protection, and automatic dependency registration with cycle detection.

### Hierarchical Behavior:
- In an isolated registry, items are stored locally, shadowing parent items with the same name.
- Alias consistency is enforced across the hierarchy: registering a colliding alias throws an error
  unless `allowOverride.alias` is explicitly granted.

### Circular Dependencies:
Automatically detects and manages circular dependency chains using an internal stack.
Reference counts are precisely managed (count=1 for back-edges) to prevent memory leaks
and enable clean group unregistration.

##### Parameters

###### name

The tool instance, function, or name to register.

`string` | `Function` | [`ToolFunc`](ToolFunc.md) | [`RegisterOptions`](../interfaces/RegisterOptions.md)

###### options?

[`RegisterOptions`](../interfaces/RegisterOptions.md)

Configuration or implementation for the tool.

###### \_stack?

`Set`\<`string`\>

Used for cycle detection during recursive registration.

##### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

The registered ToolFunc instance on success (creation, shadowing, or override),
or `false` if registration was ignored (e.g., ref-count increment only).

##### Example

```ts
// 1. Registering with explicit name and function
ToolFunc.register('add', { func: (a, b) => a + b });

// 2. Registering with shadowing permission in an isolated registry
MyPluginTools.register('calc', { func: () => 2 }, { allowOverride: true });

// 3. Registering an existing ToolFunc instance
const tool = new ToolFunc({ name: 'my-tool', func: () => 'ok' });
ToolFunc.register(tool);
```

##### Throws

If name is missing, or if an alias collision occurs without permission.

##### Inherited from

[`ServerTools`](ServerTools.md).[`register`](ServerTools.md#register-2)

***

### run()

> `static` **run**(`name`, `params?`, `ctx?`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:589

Asynchronously executes a registered function by name with named parameters.

Note: This method returns a `Promise` if the underlying function is asynchronous,
otherwise it may return the result synchronously.

#### Parameters

##### name

`string`

The name of the function to run.

##### params?

`any`

The parameters object for the function.

##### ctx?

[`ToolFuncContext`](../interfaces/ToolFuncContext.md)

The execution context.

#### Returns

`any`

A promise or the direct result of the function's execution.

#### Throws

If the function with the given name is not found.

#### Inherited from

[`ServerTools`](ServerTools.md).[`run`](ServerTools.md#run-2)

***

### runSync()

> `static` **runSync**(`name`, `params?`, `ctx?`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:598

Synchronously executes a registered function by name with named parameters.

#### Parameters

##### name

`string`

The name of the function to run.

##### params?

`any`

The parameters object for the function.

##### ctx?

[`ToolFuncContext`](../interfaces/ToolFuncContext.md)

The execution context.

#### Returns

`any`

The result of the function's execution.

#### Throws

If the function with the given name is not found.

#### Inherited from

[`ServerTools`](ServerTools.md).[`runSync`](ServerTools.md#runsync-2)

***

### runWithPos()

> `static` **runWithPos**(`name`, ...`params`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:617

Asynchronously executes a function using positional arguments.

Note: This method returns a `Promise` if the underlying function is asynchronous,
otherwise it may return the result synchronously.

#### Parameters

##### name

`string`

The name of the function to run.

##### params

...`any`[]

Positional arguments to pass to the function.

#### Returns

`any`

A promise or the direct result of the function's execution.

#### Throws

If the function with the given name is not found.

#### Inherited from

[`ServerTools`](ServerTools.md).[`runWithPos`](ServerTools.md#runwithpos-2)

***

### runWithPosSync()

> `static` **runWithPosSync**(`name`, ...`params`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:625

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

[`ServerTools`](ServerTools.md).[`runWithPosSync`](ServerTools.md#runwithpossync-2)

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

[`ServerTools`](ServerTools.md).[`seal`](ServerTools.md#seal)

***

### setApiRoot()

> `static` **setApiRoot**(`v`): `void`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:337

#### Parameters

##### v

`string`

#### Returns

`void`

#### Inherited from

[`ServerTools`](ServerTools.md).[`setApiRoot`](ServerTools.md#setapiroot)

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

`object` | `null`

#### Returns

`any`

#### Inherited from

[`ServerTools`](ServerTools.md).[`setPrototypeOf`](ServerTools.md#setprototypeof)

***

### toJSON()

> `static` **toJSON**(): `object`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:41

Serializes all registered `ServerTools` instances into a JSON object.
This method is typically called by a transport's discovery endpoint.

It filters for tools that are instances of `this` (the current class)
or marked as `isApi` but NOT an instance of `ServerTools` (e.g., base ToolFunc).
It omits the `func` body from the output unless `allowExportFunc` is true.

#### Returns

`object`

A map of serializable tool definitions.

#### Inherited from

[`ServerTools`](ServerTools.md).[`toJSON`](ServerTools.md#tojson-2)

***

### unregister()

> `static` **unregister**(`target`, `options?`): [`ToolFunc`](ToolFunc.md) \| `undefined`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:737

Unregisters a tool function implementation from the registry by its name, alias, or instance.

This method supports hierarchical unregistration. If a function's reference count
reaches zero, it is physically removed from the registry and its dependencies are released.

#### Parameters

##### target

The name, alias, or implementation instance.

`string` | [`ToolFunc`](ToolFunc.md)

##### options?

Options or a simple 'force' boolean flag.

`boolean` | [`UnregisterOptions`](../interfaces/UnregisterOptions.md)

#### Returns

[`ToolFunc`](ToolFunc.md) \| `undefined`

The unregistered ToolFunc instance, or `undefined` if not found.

#### Inherited from

[`ServerTools`](ServerTools.md).[`unregister`](ServerTools.md#unregister-2)

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

[`ServerTools`](ServerTools.md).[`values`](ServerTools.md#values)

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

[`ServerTools`](ServerTools.md).[`values`](ServerTools.md#values)

***

### with()

> `static` **with**(`ctx`): *typeof* [`ToolFunc`](ToolFunc.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:515

Returns a static proxy with the provided context.

#### Parameters

##### ctx

[`ToolFuncContext`](../interfaces/ToolFuncContext.md)

The context to use.

#### Returns

*typeof* [`ToolFunc`](ToolFunc.md)

A static proxy of ToolFunc class.

#### Inherited from

[`ServerTools`](ServerTools.md).[`with`](ServerTools.md#with-2)
