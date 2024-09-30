[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / StreamCallbacksAndOptions

# Interface: StreamCallbacksAndOptions\<I, O\>

Configuration options and helper callback methods for stream lifecycle events.

## Type Parameters

• **I** = `any`

• **O** = `any`

## Properties

### onError()?

> `optional` **onError**: (`error`) => `void` \| `Promise`\<`void`\>

#### Parameters

• **error**: `Error`

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[packages/ai-tool/src/utils/stream/create-callbacks-stream.ts:12](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/stream/create-callbacks-stream.ts#L12)

***

### onFinal()?

> `optional` **onFinal**: (`controller`) => `void` \| `Promise`\<`void`\>

`onFinal`: Called once when the stream is closed with the final completion message.

#### Parameters

• **controller**: `TransformStreamDefaultController`\<`any`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[packages/ai-tool/src/utils/stream/create-callbacks-stream.ts:11](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/stream/create-callbacks-stream.ts#L11)

***

### onStart()?

> `optional` **onStart**: (`controller`) => `void` \| `Promise`\<`void`\>

`onStart`: Called once when the stream is initialized.

#### Parameters

• **controller**: `TransformStreamDefaultController`\<`any`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[packages/ai-tool/src/utils/stream/create-callbacks-stream.ts:7](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/stream/create-callbacks-stream.ts#L7)

***

### onTransform()?

> `optional` **onTransform**: (`chunk`, `controller`) => `void` \| `O` \| `Promise`\<`void` \| `O`\>

`onToken`: Called for each tokenized message.

#### Parameters

• **chunk**: `I`

• **controller**: `TransformStreamDefaultController`\<`any`\>

#### Returns

`void` \| `O` \| `Promise`\<`void` \| `O`\>

#### Defined in

[packages/ai-tool/src/utils/stream/create-callbacks-stream.ts:9](https://github.com/isdk/ai-tool.js/blob/fe6b47f429fb128627d2210e367fa914b891d314/src/utils/stream/create-callbacks-stream.ts#L9)
