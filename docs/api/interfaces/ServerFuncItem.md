[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ServerFuncItem

# Interface: ServerFuncItem

Defined in: [ai-tools/packages/ai-tool/src/server-tools.ts:28](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/server-tools.ts#L28)

Configuration interface for a `ServerTools` item.
Extends `RemoteFuncItem` with server-specific options.

## Extends

- [`RemoteFuncItem`](RemoteFuncItem.md)

## Extended by

- [`ServerTools`](../classes/ServerTools.md)

## Properties

### action?

> `optional` **action**: `"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"`

Defined in: [ai-tools/packages/ai-tool/src/utils/consts.ts:95](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/consts.ts#L95)

The action to be used for the remote call. This typically represents an RPC method name.
Only for RESTful HTTP transports, it might be mapped to a standard HTTP method (e.g., GET, POST)

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`action`](RemoteFuncItem.md#action)

***

### alias?

> `optional` **alias**: `string` \| `string`[]

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:130](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L130)

Optional aliases for the function name.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`alias`](RemoteFuncItem.md#alias)

***

### allowExportFunc?

> `optional` **allowExportFunc**: `boolean`

Defined in: [ai-tools/packages/ai-tool/src/server-tools.ts:35](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/server-tools.ts#L35)

If set to true, the body of the function (`func`) will be serialized and sent
to the client when tools are loaded. This allows the client to execute the
function locally instead of making a remote call. Defaults to false.

***

### ~~apiRoot?~~

> `optional` **apiRoot**: `string`

Defined in: [ai-tools/packages/ai-tool/src/utils/consts.ts:89](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/consts.ts#L89)

The root endpoint for the remote service.

#### Deprecated

Use `transport` instead.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`apiRoot`](RemoteFuncItem.md#apiroot)

***

### asyncFeatures?

> `optional` **asyncFeatures**: `number`

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:144](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L144)

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

[`RemoteFuncItem`](RemoteFuncItem.md).[`asyncFeatures`](RemoteFuncItem.md#asyncfeatures)

***

### depends?

> `optional` **depends**: `object`

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:167](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L167)

A map of dependencies this function has on other tool functions.
Declaring dependencies ensures that they are automatically registered when this function is registered.
This is crucial for building modular functions that rely on each other without needing to manage registration order manually.

#### Index Signature

\[`name`: `string`\]: [`ToolFunc`](../classes/ToolFunc.md)

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

[`RemoteFuncItem`](RemoteFuncItem.md).[`depends`](RemoteFuncItem.md#depends)

***

### description?

> `optional` **description**: `string`

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:172](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L172)

A detailed description of what the function does.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`description`](RemoteFuncItem.md#description)

***

### ~~fetchOptions?~~

> `optional` **fetchOptions**: `any`

Defined in: [ai-tools/packages/ai-tool/src/utils/consts.ts:101](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/utils/consts.ts#L101)

Options to be passed to the underlying `fetch` call in an HTTP transport.

#### Deprecated

Use `transport` instead.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`fetchOptions`](RemoteFuncItem.md#fetchoptions)

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:119](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L119)

If true, indicates that this function should be treated as a server-side API.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`isApi`](RemoteFuncItem.md#isapi)

***

### name?

> `optional` **name**: `string`

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:76](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L76)

The unique name of the function.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`name`](RemoteFuncItem.md#name-2)

***

### params?

> `optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:81](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L81)

Parameter definitions, which can be an object mapping names to definitions or an array for positional parameters.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`params`](RemoteFuncItem.md#params)

***

### result?

> `optional` **result**: `string` \| `Record`\<`string`, `any`\>

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:86](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L86)

The expected return type of the function, described as a string or a JSON schema object.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`result`](RemoteFuncItem.md#result)

***

### scope?

> `optional` **scope**: `any`

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:91](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L91)

The execution scope or context (`this`) for the function.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`scope`](RemoteFuncItem.md#scope)

***

### setup()?

> `optional` **setup**: (`this`, `options`?) => `void`

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:114](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L114)

A lifecycle hook called once during the `ToolFunc` instance's initialization.
It allows for initial setup, state configuration, or property modification on the instance
before it is used or registered. The `this` context is the `ToolFunc` instance itself.

#### Parameters

##### this

[`ToolFunc`](../classes/ToolFunc.md)

##### options?

[`FuncItem`](FuncItem.md)

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

[`RemoteFuncItem`](RemoteFuncItem.md).[`setup`](RemoteFuncItem.md#setup)

***

### stream?

> `optional` **stream**: `boolean`

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:125](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L125)

If true, indicates that the function has the *capability* to stream its output.
Whether a specific call is streamed is determined by a `stream` property in the runtime parameters.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`stream`](RemoteFuncItem.md#stream)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:96](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L96)

Tags for grouping or filtering functions.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`tags`](RemoteFuncItem.md#tags)

***

### title?

> `optional` **title**: `string`

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:177](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L177)

A concise, human-readable title for the function, often used in UI or by AI.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`title`](RemoteFuncItem.md#title)
