[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / StreamCallbacksAndOptions

# Interface: StreamCallbacksAndOptions\<I, O\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:10

Configuration options and helper callback methods for stream lifecycle events.

## Type Parameters

### I

`I` = `any`

### O

`O` = `any`

## Properties

### onError()?

> `optional` **onError**: (`error`) => `void` \| `Promise`\<`void`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:17

#### Parameters

##### error

`Error`

#### Returns

`void` \| `Promise`\<`void`\>

***

### onFinal()?

> `optional` **onFinal**: (`controller`) => `void` \| `Promise`\<`void`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:16

`onFinal`: Called once when the stream is closed with the final completion message.

#### Parameters

##### controller

`TransformStreamDefaultController`

#### Returns

`void` \| `Promise`\<`void`\>

***

### onStart()?

> `optional` **onStart**: (`controller`) => `void` \| `Promise`\<`void`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:12

`onStart`: Called once when the stream is initialized.

#### Parameters

##### controller

`TransformStreamDefaultController`

#### Returns

`void` \| `Promise`\<`void`\>

***

### onTransform()?

> `optional` **onTransform**: (`chunk`, `controller`) => `void` \| `O` \| `Promise`\<`void` \| `O`\>

Defined in: @isdk/ai-tools/packages/tool-func/dist/index.d.ts:14

`onToken`: Called for each tokenized message.

#### Parameters

##### chunk

`I`

##### controller

`TransformStreamDefaultController`

#### Returns

`void` \| `O` \| `Promise`\<`void` \| `O`\>
