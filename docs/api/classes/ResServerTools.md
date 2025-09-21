[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ResServerTools

# Class: ResServerTools

Defined in: [@isdk/ai-tools/packages/ai-tool/src/res-server-tools.ts:11](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/res-server-tools.ts#L11)

Represents a function that runs on a server and can be exposed to clients.

`ServerTools` extends `ToolFunc` by adding logic for serialization and handling
server-side execution contexts. It is designed to work with a transport layer
(see `transports`) to expose its registered functions over a network.

## Extends

- [`RpcMethodsServerTool`](RpcMethodsServerTool.md)

## Extended by

- [`EventServer`](EventServer.md)

## Indexable

\[`name`: `string`\]: `any`

## Constructors

### Constructor

> **new ResServerTools**(`name`, `options`): `ResServerTools`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/res-server-tools.ts:27](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/res-server-tools.ts#L27)

The initial value of Object.prototype.constructor is the standard built-in Object constructor.

#### Parameters

##### name

`string` | `Function` | [`FuncItem`](../interfaces/FuncItem.md)

##### options

`any` = `{}`

#### Returns

`ResServerTools`

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`constructor`](RpcMethodsServerTool.md#constructor)

## Properties

### $attributes

> **$attributes**: `Properties`

Defined in: [property-manager.js/src/advance.d.ts:5](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/advance.d.ts#L5)

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`$attributes`](RpcMethodsServerTool.md#attributes)

***

### action

> **action**: `"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"` = `'res'`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/res-server-tools.ts:21](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/res-server-tools.ts#L21)

The action to be used for the remote call. This typically represents an RPC method name.
Only for RESTful HTTP transports, it might be mapped to a standard HTTP method (e.g., GET, POST)

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`action`](RpcMethodsServerTool.md#action)

***

### alias?

> `optional` **alias**: `string` \| `string`[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:130](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L130)

Optional aliases for the function name.

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`alias`](RpcMethodsServerTool.md#alias)

***

### allowExportFunc?

> `optional` **allowExportFunc**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/server-tools.ts:35](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/server-tools.ts#L35)

If set to true, the body of the function (`func`) will be serialized and sent
to the client when tools are loaded. This allows the client to execute the
function locally instead of making a remote call. Defaults to false.

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`allowExportFunc`](RpcMethodsServerTool.md#allowexportfunc)

***

### ~~apiRoot?~~

> `optional` **apiRoot**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/consts.ts:89](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/consts.ts#L89)

The root endpoint for the remote service.

#### Deprecated

Use `transport` instead.

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`apiRoot`](RpcMethodsServerTool.md#apiroot)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`asyncFeatures`](RpcMethodsServerTool.md#asyncfeatures)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`defaultOptions`](RpcMethodsServerTool.md#defaultoptions)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`depends`](RpcMethodsServerTool.md#depends)

***

### description?

> `optional` **description**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:172](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L172)

A detailed description of what the function does.

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`description`](RpcMethodsServerTool.md#description)

***

### fetchOptions?

> `optional` **fetchOptions**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/consts.ts:100](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/utils/consts.ts#L100)

Addtional options to be passed to the underlying `fetch` call in a transport.

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`fetchOptions`](RpcMethodsServerTool.md#fetchoptions)

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:119](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L119)

If true, indicates that this function should be treated as a server-side API.

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`isApi`](RpcMethodsServerTool.md#isapi)

***

### methods

> **methods**: `string`[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/rpc-methods-server-tool.ts:11](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/rpc-methods-server-tool.ts#L11)

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`methods`](RpcMethodsServerTool.md#methods)

***

### name?

> `optional` **name**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:76](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L76)

The unique name of the function.

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`name`](RpcMethodsServerTool.md#name)

***

### nonExported1stChar

> **nonExported1stChar**: `string`

Defined in: [property-manager.js/src/abstract.d.ts:78](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L78)

the property with the default prefix '$' will not be exported.

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`nonExported1stChar`](RpcMethodsServerTool.md#nonexported1stchar)

***

### params

> **params**: [`FuncParams`](../interfaces/FuncParams.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/res-server-tools.ts:22](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/res-server-tools.ts#L22)

Parameter definitions, which can be an object mapping names to definitions or an array for positional parameters.

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`params`](RpcMethodsServerTool.md#params)

***

### result?

> `optional` **result**: `string` \| `Record`\<`string`, `any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:86](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L86)

The expected return type of the function, described as a string or a JSON schema object.

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`result`](RpcMethodsServerTool.md#result)

***

### scope?

> `optional` **scope**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:91](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L91)

The execution scope or context (`this`) for the function.

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`scope`](RpcMethodsServerTool.md#scope)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`setup`](RpcMethodsServerTool.md#setup)

***

### stream?

> `optional` **stream**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:125](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L125)

If true, indicates that the function has the *capability* to stream its output.
Whether a specific call is streamed is determined by a `stream` property in the runtime parameters.

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`stream`](RpcMethodsServerTool.md#stream)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:96](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L96)

Tags for grouping or filtering functions.

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`tags`](RpcMethodsServerTool.md#tags)

***

### title?

> `optional` **title**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:177](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L177)

A concise, human-readable title for the function, often used in UI or by AI.

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`title`](RpcMethodsServerTool.md#title)

***

### aliases

> `static` **aliases**: `object` = `{}`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:305](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L305)

A static map of aliases to their corresponding function names.

#### Index Signature

\[`name`: `string`\]: `string`

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`aliases`](RpcMethodsServerTool.md#aliases)

***

### dataPath

> `static` **dataPath**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:312](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L312)

A conventional property to designate a file path for saving the registered `ToolFunc` data.
Note: The `ToolFunc` class itself does not implement persistence logic. It is up to the
developer to use this path to save and load the `ToolFunc.items` registry if needed.

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`dataPath`](RpcMethodsServerTool.md#datapath)

***

### items

> `static` **items**: [`Funcs`](../interfaces/Funcs.md) = `{}`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:300](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L300)

A static registry of all `ToolFunc` instances, indexed by name.

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`items`](RpcMethodsServerTool.md#items)

***

### SpecialRpcMethodNames

> `static` **SpecialRpcMethodNames**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/res-server-tools.ts:20](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/res-server-tools.ts#L20)

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`SpecialRpcMethodNames`](RpcMethodsServerTool.md#specialrpcmethodnames)

## Accessors

### SpecialRpcMethodNames

#### Get Signature

> **get** **SpecialRpcMethodNames**(): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/rpc-methods-server-tool.ts:22](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/rpc-methods-server-tool.ts#L22)

##### Returns

`any`

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`SpecialRpcMethodNames`](RpcMethodsServerTool.md#specialrpcmethodnames-1)

***

### apiRoot

#### Get Signature

> **get** `static` **apiRoot**(): `undefined` \| `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/server-tools.ts:57](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/server-tools.ts#L57)

The conventional root path for the API endpoint.

##### Returns

`undefined` \| `string`

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`apiRoot`](RpcMethodsServerTool.md#apiroot-1)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`arr2ObjParams`](RpcMethodsServerTool.md#arr2objparams)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`assign`](RpcMethodsServerTool.md#assign)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`assignProperty`](RpcMethodsServerTool.md#assignproperty)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`assignPropertyTo`](RpcMethodsServerTool.md#assignpropertyto)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`assignTo`](RpcMethodsServerTool.md#assignto)

***

### cast()

> **cast**(`key`, `value`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/rpc-methods-server-tool.ts:48](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/rpc-methods-server-tool.ts#L48)

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`any`

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`cast`](RpcMethodsServerTool.md#cast)

***

### castParams()

> **castParams**(`params`): [`RpcMethodsServerFuncParams`](../interfaces/RpcMethodsServerFuncParams.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/res-server-tools.ts:40](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/res-server-tools.ts#L40)

#### Parameters

##### params

[`RpcMethodsServerFuncParams`](../interfaces/RpcMethodsServerFuncParams.md)

#### Returns

[`RpcMethodsServerFuncParams`](../interfaces/RpcMethodsServerFuncParams.md)

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`castParams`](RpcMethodsServerTool.md#castparams)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`clone`](RpcMethodsServerTool.md#clone)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`cloneTo`](RpcMethodsServerTool.md#cloneto)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`defineProperties`](RpcMethodsServerTool.md#defineproperties)

***

### delete()?

> `optional` **delete**(`__namedParameters`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/res-server-tools.ts:15](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/res-server-tools.ts#L15)

#### Parameters

##### \_\_namedParameters

[`ResServerFuncParams`](../interfaces/ResServerFuncParams.md)

#### Returns

`any`

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`exportTo`](RpcMethodsServerTool.md#exportto)

***

### func()

> **func**(`params`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/rpc-methods-server-tool.ts:68](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/rpc-methods-server-tool.ts#L68)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`func`](RpcMethodsServerTool.md#func)

***

### get()?

> `optional` **get**(`__namedParameters`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/res-server-tools.ts:12](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/res-server-tools.ts#L12)

#### Parameters

##### \_\_namedParameters

[`ResServerFuncParams`](../interfaces/ResServerFuncParams.md)

#### Returns

`any`

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`getFunc`](RpcMethodsServerTool.md#getfunc)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`getFuncWithPos`](RpcMethodsServerTool.md#getfuncwithpos)

***

### getMethodFromParams()

> **getMethodFromParams**(`params`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/res-server-tools.ts:31](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/res-server-tools.ts#L31)

#### Parameters

##### params

[`ResServerFuncParams`](../interfaces/ResServerFuncParams.md)

#### Returns

`any`

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`getMethodFromParams`](RpcMethodsServerTool.md#getmethodfromparams)

***

### getProperties()

> `abstract` **getProperties**(): `PropDescriptors`

Defined in: [property-manager.js/src/abstract.d.ts:98](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L98)

Get the defined attributes.

#### Returns

`PropDescriptors`

the descriptors of properties object

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`getProperties`](RpcMethodsServerTool.md#getproperties)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`hasAsyncFeature`](RpcMethodsServerTool.md#hasasyncfeature)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`hasOwnProperty`](RpcMethodsServerTool.md#hasownproperty)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`initialize`](RpcMethodsServerTool.md#initialize)

***

### initRpcMethods()

> **initRpcMethods**(`methods`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/rpc-methods-server-tool.ts:27](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/rpc-methods-server-tool.ts#L27)

#### Parameters

##### methods

`string`[] = `...`

#### Returns

`void`

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`initRpcMethods`](RpcMethodsServerTool.md#initrpcmethods)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`isPrototypeOf`](RpcMethodsServerTool.md#isprototypeof)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`isSame`](RpcMethodsServerTool.md#issame)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`isStream`](RpcMethodsServerTool.md#isstream)

***

### list()?

> `optional` **list**(`options?`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/res-server-tools.ts:16](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/res-server-tools.ts#L16)

#### Parameters

##### options?

[`ResServerFuncParams`](../interfaces/ResServerFuncParams.md)

#### Returns

`any`

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`mergeTo`](RpcMethodsServerTool.md#mergeto)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`obj2ArrParams`](RpcMethodsServerTool.md#obj2arrparams)

***

### post()?

> `optional` **post**(`options`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/res-server-tools.ts:13](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/res-server-tools.ts#L13)

#### Parameters

##### options

[`ResServerFuncParams`](../interfaces/ResServerFuncParams.md)

#### Returns

`any`

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`propertyIsEnumerable`](RpcMethodsServerTool.md#propertyisenumerable)

***

### put()?

> `optional` **put**(`__namedParameters`): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/res-server-tools.ts:14](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/res-server-tools.ts#L14)

#### Parameters

##### \_\_namedParameters

[`ResServerFuncParams`](../interfaces/ResServerFuncParams.md)

#### Returns

`any`

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`register`](RpcMethodsServerTool.md#register)

***

### run()

> **run**(`params`, `context?`): `Promise`\<`any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/server-tools.ts:98](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/server-tools.ts#L98)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`run`](RpcMethodsServerTool.md#run)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`runAs`](RpcMethodsServerTool.md#runas)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`runAsSync`](RpcMethodsServerTool.md#runassync)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`runSync`](RpcMethodsServerTool.md#runsync)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`runWithPos`](RpcMethodsServerTool.md#runwithpos)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`runWithPosAs`](RpcMethodsServerTool.md#runwithposas)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`runWithPosAsSync`](RpcMethodsServerTool.md#runwithposassync)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`runWithPosSync`](RpcMethodsServerTool.md#runwithpossync)

***

### toJSON()

> **toJSON**(): `any`

Defined in: [property-manager.js/src/abstract.d.ts:182](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/abstract.d.ts#L182)

#### Returns

`any`

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`toJSON`](RpcMethodsServerTool.md#tojson)

***

### toLocaleString()

> **toLocaleString**(): `string`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:131

Returns a date converted to a string using the current locale.

#### Returns

`string`

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`toLocaleString`](RpcMethodsServerTool.md#tolocalestring)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`toObject`](RpcMethodsServerTool.md#toobject)

***

### toString()

> **toString**(): `string`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:128

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`toString`](RpcMethodsServerTool.md#tostring)

***

### unregister()

> **unregister**(): `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:619](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L619)

Removes the current `ToolFunc` instance from the static registry.

#### Returns

`any`

The instance that was unregistered.

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`unregister`](RpcMethodsServerTool.md#unregister)

***

### valueOf()

> **valueOf**(): `Object`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/typescript@5.7.3/node\_modules/typescript/lib/lib.es5.d.ts:134

Returns the primitive value of the specified object.

#### Returns

`Object`

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`valueOf`](RpcMethodsServerTool.md#valueof)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`assign`](RpcMethodsServerTool.md#assign-2)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`assign`](RpcMethodsServerTool.md#assign-2)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`assign`](RpcMethodsServerTool.md#assign-2)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`assign`](RpcMethodsServerTool.md#assign-2)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`create`](RpcMethodsServerTool.md#create)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`create`](RpcMethodsServerTool.md#create)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`defineProperties`](RpcMethodsServerTool.md#defineproperties-2)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`defineProperty`](RpcMethodsServerTool.md#defineproperty)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`entries`](RpcMethodsServerTool.md#entries)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`entries`](RpcMethodsServerTool.md#entries)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`freeze`](RpcMethodsServerTool.md#freeze)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`freeze`](RpcMethodsServerTool.md#freeze)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`freeze`](RpcMethodsServerTool.md#freeze)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`fromEntries`](RpcMethodsServerTool.md#fromentries)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`fromEntries`](RpcMethodsServerTool.md#fromentries)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`get`](RpcMethodsServerTool.md#get)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`getAllByTag`](RpcMethodsServerTool.md#getallbytag)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`getByTag`](RpcMethodsServerTool.md#getbytag)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`getFunc`](RpcMethodsServerTool.md#getfunc-2)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`getFuncWithPos`](RpcMethodsServerTool.md#getfuncwithpos-2)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`getOwnPropertyDescriptor`](RpcMethodsServerTool.md#getownpropertydescriptor)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`getOwnPropertyDescriptors`](RpcMethodsServerTool.md#getownpropertydescriptors)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`getOwnPropertyNames`](RpcMethodsServerTool.md#getownpropertynames)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`getOwnPropertySymbols`](RpcMethodsServerTool.md#getownpropertysymbols)

***

### getProperties()

> `static` **getProperties**(): `PropDescriptors`

Defined in: [property-manager.js/src/advance.d.ts:10](https://github.com/snowyu/property-manager.js/blob/e9ebf4c62be9b6d84e5868ed098df041a53bb90a/src/advance.d.ts#L10)

get all properties descriptor include inherited.

#### Returns

`PropDescriptors`

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`getProperties`](RpcMethodsServerTool.md#getproperties-2)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`getPrototypeOf`](RpcMethodsServerTool.md#getprototypeof)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`hasAsyncFeature`](RpcMethodsServerTool.md#hasasyncfeature-2)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`hasOwn`](RpcMethodsServerTool.md#hasown)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`is`](RpcMethodsServerTool.md#is)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`isExtensible`](RpcMethodsServerTool.md#isextensible)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`isFrozen`](RpcMethodsServerTool.md#isfrozen)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`isSealed`](RpcMethodsServerTool.md#issealed)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`keys`](RpcMethodsServerTool.md#keys)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`keys`](RpcMethodsServerTool.md#keys)

***

### list()

> `static` **list**(): [`Funcs`](../interfaces/Funcs.md)

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:331](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/tool-func.ts#L331)

Returns the complete map of all registered functions.

#### Returns

[`Funcs`](../interfaces/Funcs.md)

The map of `ToolFunc` instances.

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`list`](RpcMethodsServerTool.md#list)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`preventExtensions`](RpcMethodsServerTool.md#preventextensions)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`register`](RpcMethodsServerTool.md#register-2)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`register`](RpcMethodsServerTool.md#register-2)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`register`](RpcMethodsServerTool.md#register-2)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`run`](RpcMethodsServerTool.md#run-2)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`runSync`](RpcMethodsServerTool.md#runsync-2)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`runWithPos`](RpcMethodsServerTool.md#runwithpos-2)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`runWithPosSync`](RpcMethodsServerTool.md#runwithpossync-2)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`seal`](RpcMethodsServerTool.md#seal)

***

### setApiRoot()

> `static` **setApiRoot**(`v`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/server-tools.ts:61](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/server-tools.ts#L61)

#### Parameters

##### v

`string`

#### Returns

`void`

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`setApiRoot`](RpcMethodsServerTool.md#setapiroot)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`setPrototypeOf`](RpcMethodsServerTool.md#setprototypeof)

***

### toJSON()

> `static` **toJSON**(): `object`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/server-tools.ts:74](https://github.com/isdk/ai-tool.js/blob/d0765f898f217d97c57c6949502b4a7bef5dce5e/src/server-tools.ts#L74)

Serializes all registered `ServerTools` instances into a JSON object.
This method is typically called by a transport's discovery endpoint.

It filters for tools that are instances of `ServerTools` or marked as `isApi`.
It omits the `func` body from the output unless `allowExportFunc` is true.

#### Returns

`object`

A map of serializable tool definitions.

#### Inherited from

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`toJSON`](RpcMethodsServerTool.md#tojson-2)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`unregister`](RpcMethodsServerTool.md#unregister-2)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`values`](RpcMethodsServerTool.md#values)

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

[`RpcMethodsServerTool`](RpcMethodsServerTool.md).[`values`](RpcMethodsServerTool.md#values)
