[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / RpcMethodsServerTool

# Class: RpcMethodsServerTool

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:27

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

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:35

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

### $attributes

> **$attributes**: `Properties`

Defined in: [property-manager.js/src/advance.d.ts:5](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/advance.d.ts#L5)

#### Inherited from

[`ServerTools`](ServerTools.md).[`$attributes`](ServerTools.md#attributes)

***

### action?

> `optional` **action**: `"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:60

The action to be used for the remote call. This typically represents an RPC method name.
Only for RESTful HTTP transports, it might be mapped to a standard HTTP method (e.g., GET, POST)

#### Inherited from

[`ServerTools`](ServerTools.md).[`action`](ServerTools.md#action)

***

### alias?

> `optional` **alias**: `string` \| `string`[]

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:232

Optional aliases for the function name.

#### Inherited from

[`ServerTools`](ServerTools.md).[`alias`](ServerTools.md#alias)

***

### allowExportFunc?

> `optional` **allowExportFunc**: `boolean`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:255

If set to true, the body of the function (`func`) will be serialized and sent
to the client when tools are loaded. This allows the client to execute the
function locally instead of making a remote call. Defaults to false.

#### Inherited from

[`ServerTools`](ServerTools.md).[`allowExportFunc`](ServerTools.md#allowexportfunc)

***

### ~~apiRoot?~~

> `optional` **apiRoot**: `string`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:54

The root endpoint for the remote service.

#### Deprecated

Use `transport` instead.

#### Inherited from

[`ServerTools`](ServerTools.md).[`apiRoot`](ServerTools.md#apiroot)

***

### asyncFeatures?

> `optional` **asyncFeatures**: `number`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:246

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

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:269

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

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:276

A detailed description of what the function does.

#### Inherited from

[`ServerTools`](ServerTools.md).[`description`](ServerTools.md#description)

***

### fetchOptions?

> `optional` **fetchOptions**: `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:65

Addtional options to be passed to the underlying `fetch` call in a transport.

#### Inherited from

[`ServerTools`](ServerTools.md).[`fetchOptions`](ServerTools.md#fetchoptions)

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:221

If true, indicates that this function should be treated as a server-side API.

#### Inherited from

[`ServerTools`](ServerTools.md).[`isApi`](ServerTools.md#isapi)

***

### methods

> **methods**: `string`[]

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:28

***

### name?

> `optional` **name**: `string`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:178

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

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:32

Parameter definitions, which can be an object mapping names to definitions or an array for positional parameters.

#### Inherited from

[`ServerTools`](ServerTools.md).[`params`](ServerTools.md#params)

***

### result?

> `optional` **result**: `string` \| `Record`\<`string`, `any`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:188

The expected return type of the function, described as a string or a JSON schema object.

#### Inherited from

[`ServerTools`](ServerTools.md).[`result`](ServerTools.md#result)

***

### scope?

> `optional` **scope**: `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:193

The execution scope or context (`this`) for the function.

#### Inherited from

[`ServerTools`](ServerTools.md).[`scope`](ServerTools.md#scope)

***

### setup()?

> `optional` **setup**: (`this`, `options?`) => `void`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:216

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

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:227

If true, indicates that the function has the *capability* to stream its output.
Whether a specific call is streamed is determined by a `stream` property in the runtime parameters.

#### Inherited from

[`ServerTools`](ServerTools.md).[`stream`](ServerTools.md#stream)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:198

Tags for grouping or filtering functions.

#### Inherited from

[`ServerTools`](ServerTools.md).[`tags`](ServerTools.md#tags)

***

### title?

> `optional` **title**: `string`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:281

A concise, human-readable title for the function, often used in UI or by AI.

#### Inherited from

[`ServerTools`](ServerTools.md).[`title`](ServerTools.md#title)

***

### aliases

> `static` **aliases**: `object`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:403

A static map of aliases to their corresponding function names.

#### Index Signature

\[`name`: `string`\]: `string`

#### Inherited from

[`ServerTools`](ServerTools.md).[`aliases`](ServerTools.md#aliases)

***

### dataPath

> `static` **dataPath**: `string`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:412

A conventional property to designate a file path for saving the registered `ToolFunc` data.
Note: The `ToolFunc` class itself does not implement persistence logic. It is up to the
developer to use this path to save and load the `ToolFunc.items` registry if needed.

#### Inherited from

[`ServerTools`](ServerTools.md).[`dataPath`](ServerTools.md#datapath)

***

### items

> `static` **items**: [`Funcs`](../interfaces/Funcs.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:398

A static registry of all `ToolFunc` instances, indexed by name.

#### Inherited from

[`ServerTools`](ServerTools.md).[`items`](ServerTools.md#items)

***

### SpecialRpcMethodNames?

> `static` `optional` **SpecialRpcMethodNames**: `string`[]

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:31

## Accessors

### SpecialRpcMethodNames

#### Get Signature

> **get** **SpecialRpcMethodNames**(): `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:33

##### Returns

`any`

***

### apiRoot

#### Get Signature

> **get** `static` **apiRoot**(): `undefined` \| `string`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:275

The conventional root path for the API endpoint.

##### Returns

`undefined` \| `string`

#### Inherited from

[`ServerTools`](ServerTools.md).[`apiRoot`](ServerTools.md#apiroot-1)

## Methods

### arr2ObjParams()

> **arr2ObjParams**(`params`): `any`[]

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:539

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

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:36

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

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:38

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

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:39

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

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:583

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

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:621

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

> **getMethodFromParams**(`params`): `undefined` \| `string`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:37

#### Parameters

##### params

[`RpcMethodsServerFuncParams`](../interfaces/RpcMethodsServerFuncParams.md)

#### Returns

`undefined` \| `string`

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

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:627

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

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index.d.ts:34

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

> **isStream**(`params`): `undefined` \| `boolean`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:640

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

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:546

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

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:527

Registers the current `ToolFunc` instance into the static registry.
Also registers any declared dependencies.

#### Returns

`boolean` \| [`ToolFunc`](ToolFunc.md)

The instance itself upon successful registration, or `false` if it already exists.

#### Inherited from

[`ServerTools`](ServerTools.md).[`register`](ServerTools.md#register)

***

### run()

> **run**(`params`, `context?`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:298

Overrides the base `run` method to inject transport-specific context.
If a `context` object containing `req` and `reply` is provided, these are
added to the parameters as `_req` and `_res` before execution.

#### Parameters

##### params

[`ServerFuncParams`](../interfaces/ServerFuncParams.md)

The parameters for the function.

##### context?

The transport-level context.

###### reply

`any`

###### req

`any`

#### Returns

`Promise`\<`any`\>

The result of the function execution.

#### Inherited from

[`ServerTools`](ServerTools.md).[`run`](ServerTools.md#run)

***

### runAs()

> **runAs**(`name`, `params?`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:567

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

[`ServerTools`](ServerTools.md).[`runAs`](ServerTools.md#runas)

***

### runAsSync()

> **runAsSync**(`name`, `params?`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:575

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

[`ServerTools`](ServerTools.md).[`runAsSync`](ServerTools.md#runassync)

***

### runSync()

> **runSync**(`params?`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:553

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

[`ServerTools`](ServerTools.md).[`runSync`](ServerTools.md#runsync)

***

### runWithPos()

> **runWithPos**(...`params`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:605

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

[`ServerTools`](ServerTools.md).[`runWithPos`](ServerTools.md#runwithpos)

***

### runWithPosAs()

> **runWithPosAs**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:613

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

[`ServerTools`](ServerTools.md).[`runWithPosAs`](ServerTools.md#runwithposas)

***

### runWithPosAsSync()

> **runWithPosAsSync**(`name`, ...`params`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:598

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

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:590

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

> **unregister**(): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:532

Removes the current `ToolFunc` instance from the static registry.

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

[`ServerTools`](ServerTools.md).[`create`](ServerTools.md#create)

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

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:418

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

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:435

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

> `static` **getByTag**(`tagName`): `undefined` \| [`ToolFunc`](ToolFunc.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:429

Finds the first registered function that has a specific tag.

#### Parameters

##### tagName

`string`

The tag to search for.

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

The first matching `ToolFunc` instance, or `undefined` if none is found.

#### Inherited from

[`ServerTools`](ServerTools.md).[`getByTag`](ServerTools.md#getbytag)

***

### getFunc()

> `static` **getFunc**(`name`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:464

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

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:487

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

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:441

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

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:423

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

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:506

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

[`ServerTools`](ServerTools.md).[`register`](ServerTools.md#register-2)

#### Call Signature

> `static` **register**(`func`, `options`): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:507

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

[`ServerTools`](ServerTools.md).[`register`](ServerTools.md#register-2)

#### Call Signature

> `static` **register**(`name`, `options?`): `boolean` \| [`ToolFunc`](ToolFunc.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:508

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

[`ServerTools`](ServerTools.md).[`register`](ServerTools.md#register-2)

***

### run()

> `static` **run**(`name`, `params?`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:449

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

[`ServerTools`](ServerTools.md).[`run`](ServerTools.md#run-2)

***

### runSync()

> `static` **runSync**(`name`, `params?`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:457

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

[`ServerTools`](ServerTools.md).[`runSync`](ServerTools.md#runsync-2)

***

### runWithPos()

> `static` **runWithPos**(`name`, ...`params`): `Promise`\<`any`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:472

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

[`ServerTools`](ServerTools.md).[`runWithPos`](ServerTools.md#runwithpos-2)

***

### runWithPosSync()

> `static` **runWithPosSync**(`name`, ...`params`): `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:480

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

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:276

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

`null` | `object`

#### Returns

`any`

#### Inherited from

[`ServerTools`](ServerTools.md).[`setPrototypeOf`](ServerTools.md#setprototypeof)

***

### toJSON()

> `static` **toJSON**(): `object`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-Bh16e\_Wg.d.ts:286

Serializes all registered `ServerTools` instances into a JSON object.
This method is typically called by a transport's discovery endpoint.

It filters for tools that are instances of `ServerTools` or marked as `isApi`.
It omits the `func` body from the output unless `allowExportFunc` is true.

#### Returns

`object`

A map of serializable tool definitions.

#### Inherited from

[`ServerTools`](ServerTools.md).[`toJSON`](ServerTools.md#tojson-2)

***

### unregister()

> `static` **unregister**(`name`): `undefined` \| [`ToolFunc`](ToolFunc.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:514

Unregisters a function by its name, also removing any associated aliases.

#### Parameters

##### name

`string`

The name of the function to unregister.

#### Returns

`undefined` \| [`ToolFunc`](ToolFunc.md)

The unregistered `ToolFunc` instance, or `undefined` if it was not found.

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
