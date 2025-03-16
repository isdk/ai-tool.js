[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / createCallbacksTransformer

# Function: createCallbacksTransformer()

> **createCallbacksTransformer**\<`I`, `O`\>(`cb`): `TransformStream`\<`I`, `O`\>

Defined in: [packages/ai-tool/src/utils/stream/create-callbacks-stream.ts:36](https://github.com/isdk/ai-tool.js/blob/62dd65284e1c50d2e8546a14ae292154369bdb2c/src/utils/stream/create-callbacks-stream.ts#L36)

Creates a transform stream that invokes optional callback functions.
The transform stream uses the provided callbacks to execute custom logic at different stages of the stream's lifecycle.
- `onStart`: Called once when the stream is initialized.
- `onTransform`: Called for each tokenized message.
- `onCompletion`: Called every time an AIStream completion message is received. This can occur multiple times when using e.g. OpenAI functions
- `onFinal`: Called once when the stream is closed with the final completion message.

This function is useful when you want to process a stream of messages and perform specific actions during the stream's lifecycle.

## Type Parameters

• **I** = `any`

• **O** = `any`

## Parameters

### cb

`undefined` | [`StreamCallbacksAndOptions`](../interfaces/StreamCallbacksAndOptions.md)\<`I`, `O`\>

## Returns

`TransformStream`\<`I`, `O`\>

A transform stream that encodes input messages as Uint8Array and allows the execution of custom logic through callbacks.

## Example

```ts
const callbacks = {
  onStart: async () => console.log('Stream started'),
  onTransform: async (chunk) => console.log('Token:',chunk),
  onFinal: async () => data.close()
};
const transformer = createCallbacksTransformer(callbacks);
```
