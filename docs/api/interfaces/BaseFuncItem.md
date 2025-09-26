[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / BaseFuncItem

# Interface: BaseFuncItem

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:71](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/tool-func.ts#L71)

Base configuration for defining a tool function.

## Extended by

- [`RemoteFuncItem`](RemoteFuncItem.md)
- [`FuncItem`](FuncItem.md)
- [`BaseFunc`](BaseFunc.md)

## Properties

### alias?

> `optional` **alias**: `string` \| `string`[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:130](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/tool-func.ts#L130)

Optional aliases for the function name.

***

### asyncFeatures?

> `optional` **asyncFeatures**: `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:144](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/tool-func.ts#L144)

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

***

### depends?

> `optional` **depends**: `object`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:167](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/tool-func.ts#L167)

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

***

### description?

> `optional` **description**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:172](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/tool-func.ts#L172)

A detailed description of what the function does.

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:119](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/tool-func.ts#L119)

If true, indicates that this function should be treated as a server-side API.

***

### name?

> `optional` **name**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:76](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/tool-func.ts#L76)

The unique name of the function.

***

### params?

> `optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:81](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/tool-func.ts#L81)

Parameter definitions, which can be an object mapping names to definitions or an array for positional parameters.

***

### result?

> `optional` **result**: `string` \| `Record`\<`string`, `any`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:86](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/tool-func.ts#L86)

The expected return type of the function, described as a string or a JSON schema object.

***

### scope?

> `optional` **scope**: `any`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:91](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/tool-func.ts#L91)

The execution scope or context (`this`) for the function.

***

### setup()?

> `optional` **setup**: (`this`, `options?`) => `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:114](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/tool-func.ts#L114)

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

***

### stream?

> `optional` **stream**: `boolean`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:125](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/tool-func.ts#L125)

If true, indicates that the function has the *capability* to stream its output.
Whether a specific call is streamed is determined by a `stream` property in the runtime parameters.

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:96](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/tool-func.ts#L96)

Tags for grouping or filtering functions.

***

### title?

> `optional` **title**: `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/tool-func.ts:177](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/tool-func.ts#L177)

A concise, human-readable title for the function, often used in UI or by AI.
