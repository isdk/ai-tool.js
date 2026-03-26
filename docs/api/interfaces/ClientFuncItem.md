[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / ClientFuncItem

# Interface: ClientFuncItem

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:191

Alias for `RemoteFuncItem` on the client side.

## Extends

- [`RemoteFuncItem`](RemoteFuncItem.md)

## Extended by

- [`ClientTools`](../classes/ClientTools.md)

## Properties

### action?

> `optional` **action**: `"get"` \| `"post"` \| `"put"` \| `"delete"` \| `"patch"` \| `"list"` \| `"res"`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:82

The action to be used for the remote call. This typically represents an RPC method name.
Only for RESTful HTTP transports, it might be mapped to a standard HTTP method (e.g., GET, POST)

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`action`](RemoteFuncItem.md#action)

***

### alias?

> `optional` **alias**: `string` \| `string`[]

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:258

Optional aliases for the function name.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`alias`](RemoteFuncItem.md#alias)

***

### ~~apiRoot?~~

> `optional` **apiRoot**: `string`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:76

The root endpoint for the remote service.

#### Deprecated

Use `transport` instead.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`apiRoot`](RemoteFuncItem.md#apiroot)

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

[`RemoteFuncItem`](RemoteFuncItem.md).[`asyncFeatures`](RemoteFuncItem.md#asyncfeatures)

***

### depends?

> `optional` **depends**: `object`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:295

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

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:302

A detailed description of what the function does.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`description`](RemoteFuncItem.md#description)

***

### expectedDuration?

> `optional` **expectedDuration**: `number`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:102

The expected duration of the remote call in milliseconds.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`expectedDuration`](RemoteFuncItem.md#expectedduration)

***

### fetchOptions?

> `optional` **fetchOptions**: `any`

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:87

Addtional options to be passed to the underlying `fetch` call in a transport.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`fetchOptions`](RemoteFuncItem.md#fetchoptions)

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:247

If true, indicates that this function should be treated as a server-side API.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`isApi`](RemoteFuncItem.md#isapi)

***

### name?

> `optional` **name**: `string`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:204

The unique name of the function.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`name`](RemoteFuncItem.md#name)

***

### params?

> `optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:209

Parameter definitions, which can be an object mapping names to definitions or an array for positional parameters.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`params`](RemoteFuncItem.md#params)

***

### result?

> `optional` **result**: `string` \| `Record`\<`string`, `any`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:214

The expected return type of the function, described as a string or a JSON schema object.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`result`](RemoteFuncItem.md#result)

***

### scope?

> `optional` **scope**: `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:219

The execution scope or context (`this`) for the function.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`scope`](RemoteFuncItem.md#scope)

***

### setup()?

> `optional` **setup**: (`this`, `options?`) => `void`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:242

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

Defined in: @isdk/ai-tools/packages/tool-rpc/dist/index-359784IS.d.ts:106

Whether the tool returns a stream.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`stream`](RemoteFuncItem.md#stream)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:224

Tags for grouping or filtering functions.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`tags`](RemoteFuncItem.md#tags)

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

[`RemoteFuncItem`](RemoteFuncItem.md).[`timeout`](RemoteFuncItem.md#timeout)

***

### title?

> `optional` **title**: `string`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:307

A concise, human-readable title for the function, often used in UI or by AI.

#### Inherited from

[`RemoteFuncItem`](RemoteFuncItem.md).[`title`](RemoteFuncItem.md#title)
