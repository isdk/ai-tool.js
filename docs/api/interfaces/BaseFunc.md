[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / BaseFunc

# Interface: BaseFunc

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:196](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L196)

Represents a fully-defined tool function where the implementation is mandatory.

## Extends

- [`BaseFuncItem`](BaseFuncItem.md)

## Extended by

- [`ToolFunc`](../classes/ToolFunc.md)

## Properties

### alias?

> `optional` **alias**: `string` \| `string`[]

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:130](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L130)

Optional aliases for the function name.

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`alias`](BaseFuncItem.md#alias)

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

[`BaseFuncItem`](BaseFuncItem.md).[`asyncFeatures`](BaseFuncItem.md#asyncfeatures)

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

[`BaseFuncItem`](BaseFuncItem.md).[`depends`](BaseFuncItem.md#depends)

***

### description?

> `optional` **description**: `string`

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:172](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L172)

A detailed description of what the function does.

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`description`](BaseFuncItem.md#description)

***

### isApi?

> `optional` **isApi**: `boolean`

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:119](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L119)

If true, indicates that this function should be treated as a server-side API.

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`isApi`](BaseFuncItem.md#isapi)

***

### name?

> `optional` **name**: `string`

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:76](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L76)

The unique name of the function.

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`name`](BaseFuncItem.md#name-2)

***

### params?

> `optional` **params**: [`FuncParams`](FuncParams.md) \| [`FuncParam`](FuncParam.md)[]

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:81](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L81)

Parameter definitions, which can be an object mapping names to definitions or an array for positional parameters.

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`params`](BaseFuncItem.md#params)

***

### result?

> `optional` **result**: `string` \| `Record`\<`string`, `any`\>

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:86](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L86)

The expected return type of the function, described as a string or a JSON schema object.

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`result`](BaseFuncItem.md#result)

***

### scope?

> `optional` **scope**: `any`

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:91](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L91)

The execution scope or context (`this`) for the function.

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`scope`](BaseFuncItem.md#scope)

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

[`BaseFuncItem`](BaseFuncItem.md).[`setup`](BaseFuncItem.md#setup)

***

### stream?

> `optional` **stream**: `boolean`

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:125](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L125)

If true, indicates that the function has the *capability* to stream its output.
Whether a specific call is streamed is determined by a `stream` property in the runtime parameters.

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`stream`](BaseFuncItem.md#stream)

***

### tags?

> `optional` **tags**: `string` \| `string`[]

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:96](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L96)

Tags for grouping or filtering functions.

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`tags`](BaseFuncItem.md#tags)

***

### title?

> `optional` **title**: `string`

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:177](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L177)

A concise, human-readable title for the function, often used in UI or by AI.

#### Inherited from

[`BaseFuncItem`](BaseFuncItem.md).[`title`](BaseFuncItem.md#title)

## Methods

### func()

> **func**(...`params`): `any`

Defined in: [ai-tools/packages/ai-tool/src/tool-func.ts:202](https://github.com/isdk/ai-tool.js/blob/a24331161aecd2d7bbd8dc9f9cd3d984871261cb/src/tool-func.ts#L202)

The actual function implementation.

#### Parameters

##### params

...`any`

The parameters for the function.

#### Returns

`any`

The result of the function.
