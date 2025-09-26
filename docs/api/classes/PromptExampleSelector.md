[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / PromptExampleSelector

# Class: PromptExampleSelector\<T\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:46](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/prompt/prompt-example-selector.ts#L46)

The `PromptExampleSelector` class provides a mechanism to selectively choose examples from a given set based on
configurable options such as maximum length and probability threshold. This class is meant to be extended and customized
with an implementation of the `selectExample` method.

## Example

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

## Type Parameters

### T

`T` = `any`

The type of the prompt examples.

## Constructors

### Constructor

> **new PromptExampleSelector**\<`T`\>(`examples`, `options?`): `PromptExampleSelector`\<`T`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:62](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/prompt/prompt-example-selector.ts#L62)

Constructs a new `PromptExampleSelector` instance with the given examples and options.

#### Parameters

##### examples

[`PromptExamples`](../type-aliases/PromptExamples.md)\<`T`\>

The prompt examples to select from.

##### options?

[`PromptExampleSelectorOptions`](../interfaces/PromptExampleSelectorOptions.md)

An optional configuration object.

#### Returns

`PromptExampleSelector`\<`T`\>

## Properties

### examples

> **examples**: [`PromptExamples`](../type-aliases/PromptExamples.md)\<`T`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:55](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/prompt/prompt-example-selector.ts#L55)

The collection of prompt examples.

***

### maxLength

> **maxLength**: `undefined` \| `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:47](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/prompt/prompt-example-selector.ts#L47)

***

### threshold

> **threshold**: `undefined` \| `number`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:51](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/prompt/prompt-example-selector.ts#L51)

The probability threshold (0-1) for selecting an example. If `undefined`, no filtering by probability occurs.

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncGenerator`\<`Awaited`\<`T`\>, `void`, `unknown`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:119](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/prompt/prompt-example-selector.ts#L119)

Returns an asynchronous iterator for the selected examples.

#### Returns

`AsyncGenerator`\<`Awaited`\<`T`\>, `void`, `unknown`\>

An asynchronous iterator over the selected examples.

***

### initialize()

> **initialize**(`examples`, `options?`): `void`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:71](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/prompt/prompt-example-selector.ts#L71)

Initializes the selector with examples and options.

#### Parameters

##### examples

[`PromptExamples`](../type-aliases/PromptExamples.md)\<`T`\>

The prompt examples to select from.

##### options?

[`PromptExampleSelectorOptions`](../interfaces/PromptExampleSelectorOptions.md)

An optional configuration object.

#### Returns

`void`

***

### selectExample()

> **selectExample**(`example`, `threshold?`): `void` \| `T`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:92](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/prompt/prompt-example-selector.ts#L92)

Select an example. Can overwrite this in subclasses.

#### Parameters

##### example

`T`

The example to potentially select.

##### threshold?

`number`

report the current probability [0-1) for the selecting example.

#### Returns

`void` \| `T`

The selected example, or `undefined` if not selected.

***

### selectExamples()

> **selectExamples**(`examples`): `AsyncGenerator`\<`Awaited`\<`T`\>, `void`, `unknown`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/prompt/prompt-example-selector.ts:103](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/prompt/prompt-example-selector.ts#L103)

Asynchronously selects examples from the given examples, applying the configured threshold (if any).

#### Parameters

##### examples

[`PromptExamples`](../type-aliases/PromptExamples.md)\<`T`\> = `...`

The examples to select from. Defaults to the selector's examples if not provided.

#### Returns

`AsyncGenerator`\<`Awaited`\<`T`\>, `void`, `unknown`\>

An asynchronous iterator yielding selected examples.
