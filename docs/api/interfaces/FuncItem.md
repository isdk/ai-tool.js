[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / FuncItem

# Interface: FuncItem

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:287

Extends `BaseFuncItem` to include the actual function implementation.

## Extends

- [`BaseFuncItem`](BaseFuncItem.md)

## Properties

### alias?

> `optional` **alias**: `string` \| `string`[]

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:232

Optional aliases for the function name.

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`alias`](BaseFuncItem.md#alias)

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

[`BaseFuncItem`](BaseFuncItem.md).[`asyncFeatures`](BaseFuncItem.md#asyncfeatures)

***

### depends?

> `optional` **depends**: `object`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:269

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

[`BaseFuncItem`](BaseFuncItem.md).[`depends`](BaseFuncItem.md#depends)

***

### description?

> `optional` **description**: `string`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:276

A detailed description of what the function does.

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`description`](BaseFuncItem.md#description)

***

### func?

> `optional` **func**: [`TFunc`](../type-aliases/TFunc.md)

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:292

The implementation of the tool function.

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:221

If true, indicates that this function should be treated as a server-side API.

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`isApi`](BaseFuncItem.md#isapi)

***

### name?

> `optional` **name**: `string`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:178

The unique name of the function.

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`name`](BaseFuncItem.md#name)

***

### params?

> `optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:183

Parameter definitions, which can be an object mapping names to definitions or an array for positional parameters.

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`params`](BaseFuncItem.md#params)

***

### result?

> `optional` **result**: `string` \| `Record`\<`string`, `any`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:188

The expected return type of the function, described as a string or a JSON schema object.

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`result`](BaseFuncItem.md#result)

***

### scope?

> `optional` **scope**: `any`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:193

The execution scope or context (`this`) for the function.

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`scope`](BaseFuncItem.md#scope)

***

### setup()?

> `optional` **setup**: (`this`, `options?`) => `void`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:216

A lifecycle hook called once during the `ToolFunc` instance's initialization.
It allows for initial setup, state configuration, or property modification on the instance
before it is used or registered. The `this` context is the `ToolFunc` instance itself.

#### Parameters

##### this

[`ToolFunc`](../classes/ToolFunc.md)

##### options?

`FuncItem`

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

[`BaseFuncItem`](BaseFuncItem.md).[`setup`](BaseFuncItem.md#setup)

***

### stream?

> `optional` **stream**: `boolean`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:227

If true, indicates that the function has the *capability* to stream its output.
Whether a specific call is streamed is determined by a `stream` property in the runtime parameters.

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`stream`](BaseFuncItem.md#stream)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:198

Tags for grouping or filtering functions.

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`tags`](BaseFuncItem.md#tags)

***

### title?

> `optional` **title**: `string`

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:281

A concise, human-readable title for the function, often used in UI or by AI.

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`title`](BaseFuncItem.md#title)
