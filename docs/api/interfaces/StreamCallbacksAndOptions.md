[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / StreamCallbacksAndOptions

# Interface: StreamCallbacksAndOptions\<I, O\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:23

Configuration options and helper callback methods for stream lifecycle events.

This interface provides hooks into every significant stage of a TransformStream's life,
designed for robust resource management and telemetry.

## Type Parameters

### I

`I` = `any`

The input chunk type.

### O

`O` = `any`

The output chunk type.

## Properties

### onCancel()?

> `optional` **onCancel**: (`reason`) => `void` \| `Promise`\<`void`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:50

`onCancel`: Called when the stream is cancelled by the reader side (e.g., client disconnect).
In RPC/Dispatcher scenarios, this is the primary hook for handling aborted requests.

#### Parameters

##### reason

`any`

The cancellation reason provided by the reader.

#### Returns

`void` \| `Promise`\<`void`\>

***

### onClose()?

> `optional` **onClose**: (`status`, `reason?`) => `void` \| `Promise`\<`void`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:63

`onClose`: Unified cleanup hook called exactly once, regardless of how the stream ended.
This is the recommended place for resource deallocation (e.g., releasing handles, closing DB connections).

#### Parameters

##### status

[`StreamCloseStatus`](../type-aliases/StreamCloseStatus.md)

The termination state: 'final', 'error', or 'cancel'.

##### reason?

`any`

The error object or cancel reason, if applicable.

#### Returns

`void` \| `Promise`\<`void`\>

***

### onError()?

> `optional` **onError**: (`error`) => `void` \| `Promise`\<`void`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:55

`onError`: Called when an error occurs during stream processing or in other callbacks.
This provides a specific hook for error telemetry before the stream is closed.

#### Parameters

##### error

`Error`

#### Returns

`void` \| `Promise`\<`void`\>

***

### onFinal()?

> `optional` **onFinal**: (`controller`) => `void` \| `Promise`\<`void`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:44

`onFinal`: Called once when the stream is closed normally (upstream close).
Note: This is NOT called if the stream is cancelled or errors out.

#### Parameters

##### controller

`TransformStreamDefaultController`

#### Returns

`void` \| `Promise`\<`void`\>

***

### onStart()?

> `optional` **onStart**: (`controller`) => `void` \| `Promise`\<`void`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:28

`onStart`: Called once when the stream is initialized.
Useful for protocol handshakes, injecting headers, or setting up local state.

#### Parameters

##### controller

`TransformStreamDefaultController`

#### Returns

`void` \| `Promise`\<`void`\>

***

### onTransform()?

> `optional` **onTransform**: (`chunk`, `controller`) => `void` \| `O` \| `Promise`\<`void` \| `O`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:39

`onTransform`: Called for each data chunk received from the upstream.
If this callback is NOT provided, the transformer acts as a high-performance
"Identity Transform" (zero-copy bypass).

#### Parameters

##### chunk

`I`

The input data chunk.

##### controller

`TransformStreamDefaultController`

The stream controller for manual enqueuing or error triggering.

#### Returns

`void` \| `O` \| `Promise`\<`void` \| `O`\>

If returns a value (other than undefined), it will be enqueued as the output.
         If returns undefined, the original chunk is passed through.
