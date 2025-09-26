[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / StreamCallbacksAndOptions

# Interface: StreamCallbacksAndOptions\<I, O\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/stream/create-callbacks-stream.ts:5](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/stream/create-callbacks-stream.ts#L5)

Configuration options and helper callback methods for stream lifecycle events.

## Type Parameters

### I

`I` = `any`

### O

`O` = `any`

## Properties

### onError()?

> `optional` **onError**: (`error`) => `void` \| `Promise`\<`void`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/stream/create-callbacks-stream.ts:12](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/stream/create-callbacks-stream.ts#L12)

#### Parameters

##### error

`Error`

#### Returns

`void` \| `Promise`\<`void`\>

***

### onFinal()?

> `optional` **onFinal**: (`controller`) => `void` \| `Promise`\<`void`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/stream/create-callbacks-stream.ts:11](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/stream/create-callbacks-stream.ts#L11)

`onFinal`: Called once when the stream is closed with the final completion message.

#### Parameters

##### controller

`TransformStreamDefaultController`

#### Returns

`void` \| `Promise`\<`void`\>

***

### onStart()?

> `optional` **onStart**: (`controller`) => `void` \| `Promise`\<`void`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/stream/create-callbacks-stream.ts:7](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/stream/create-callbacks-stream.ts#L7)

`onStart`: Called once when the stream is initialized.

#### Parameters

##### controller

`TransformStreamDefaultController`

#### Returns

`void` \| `Promise`\<`void`\>

***

### onTransform()?

> `optional` **onTransform**: (`chunk`, `controller`) => `void` \| `O` \| `Promise`\<`void` \| `O`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/stream/create-callbacks-stream.ts:9](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/stream/create-callbacks-stream.ts#L9)

`onToken`: Called for each tokenized message.

#### Parameters

##### chunk

`I`

##### controller

`TransformStreamDefaultController`

#### Returns

`void` \| `O` \| `Promise`\<`void` \| `O`\>
