[@isdk/ai-tool](../README.md) / [Exports](../modules.md) / PromptExampleSelector

# Class: PromptExampleSelector\<T\>

The `PromptExampleSelector` class provides a mechanism to selectively choose examples from a given set based on
configurable options such as maximum length and probability threshold. This class is meant to be extended and customized
with an implementation of the `selectExample` method.

**`Example`**

```ts
// Custom selector that selects examples based on a custom condition
class MyPromptExampleSelector extends PromptExampleSelector<string> {
  selectExample(example: string, threshold?: number): string | void {
    if (example.includes('keyword')) {
      return super.selectExample(example, threshold);
    }
  }
}

// Create an instance with examples and options
const examples = ['example1', 'keyword1', 'keyword2', 'keyword3', 'example2', 'keyword4'];
const selector = new MyPromptExampleSelector(examples, { maxLength: 2, threshold: 0.8 });

// Iterate through selected examples
for await (const selectedExample of selector) {
  console.log(selectedExample);
}
```

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `any` | The type of the prompt examples. |

## Table of contents

### Constructors

- [constructor](PromptExampleSelector.md#constructor)

### Properties

- [examples](PromptExampleSelector.md#examples)
- [maxLength](PromptExampleSelector.md#maxlength)
- [threshold](PromptExampleSelector.md#threshold)

### Methods

- [[asyncIterator]](PromptExampleSelector.md#[asynciterator])
- [initialize](PromptExampleSelector.md#initialize)
- [selectExample](PromptExampleSelector.md#selectexample)
- [selectExamples](PromptExampleSelector.md#selectexamples)

## Constructors

### constructor

• **new PromptExampleSelector**\<`T`\>(`examples`, `options?`): [`PromptExampleSelector`](PromptExampleSelector.md)\<`T`\>

Constructs a new `PromptExampleSelector` instance with the given examples and options.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `examples` | [`PromptExamples`](../modules.md#promptexamples)\<`T`\> | The prompt examples to select from. |
| `options?` | [`PromptExampleSelectorOptions`](../interfaces/PromptExampleSelectorOptions.md) | An optional configuration object. |

#### Returns

[`PromptExampleSelector`](PromptExampleSelector.md)\<`T`\>

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:62](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/utils/prompt/prompt-example-selector.ts#L62)

## Properties

### examples

• **examples**: [`PromptExamples`](../modules.md#promptexamples)\<`T`\>

The collection of prompt examples.

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:55](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/utils/prompt/prompt-example-selector.ts#L55)

___

### maxLength

• **maxLength**: `undefined` \| `number`

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:47](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/utils/prompt/prompt-example-selector.ts#L47)

___

### threshold

• **threshold**: `undefined` \| `number`

The probability threshold (0-1) for selecting an example. If `undefined`, no filtering by probability occurs.

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:51](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/utils/prompt/prompt-example-selector.ts#L51)

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncGenerator`\<`Awaited`\<`T`\>, `void`, `unknown`\>

Returns an asynchronous iterator for the selected examples.

#### Returns

`AsyncGenerator`\<`Awaited`\<`T`\>, `void`, `unknown`\>

An asynchronous iterator over the selected examples.

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:119](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/utils/prompt/prompt-example-selector.ts#L119)

___

### initialize

▸ **initialize**(`examples`, `options?`): `void`

Initializes the selector with examples and options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `examples` | [`PromptExamples`](../modules.md#promptexamples)\<`T`\> | The prompt examples to select from. |
| `options?` | [`PromptExampleSelectorOptions`](../interfaces/PromptExampleSelectorOptions.md) | An optional configuration object. |

#### Returns

`void`

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:71](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/utils/prompt/prompt-example-selector.ts#L71)

___

### selectExample

▸ **selectExample**(`example`, `threshold?`): `void` \| `T`

Select an example. Can overwrite this in subclasses.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `example` | `T` | The example to potentially select. |
| `threshold?` | `number` | report the current probability [0-1) for the selecting example. |

#### Returns

`void` \| `T`

The selected example, or `undefined` if not selected.

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:92](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/utils/prompt/prompt-example-selector.ts#L92)

___

### selectExamples

▸ **selectExamples**(`examples?`): `AsyncGenerator`\<`Awaited`\<`T`\>, `void`, `unknown`\>

Asynchronously selects examples from the given examples, applying the configured threshold (if any).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `examples` | [`PromptExamples`](../modules.md#promptexamples)\<`T`\> | The examples to select from. Defaults to the selector's examples if not provided. |

#### Returns

`AsyncGenerator`\<`Awaited`\<`T`\>, `void`, `unknown`\>

An asynchronous iterator yielding selected examples.

#### Defined in

[packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:103](https://github.com/isdk/ai-tool.js/blob/8de1e0420acc6b174e70aae08e16e1ba780f842c/src/utils/prompt/prompt-example-selector.ts#L103)
