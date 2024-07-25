/**
 * Configuration options and helper callback methods for stream lifecycle events.
 * @interface
 */
export interface StreamCallbacksAndOptions<I = any, O = any> {
  /** `onStart`: Called once when the stream is initialized. */
  onStart?: (controller: TransformStreamDefaultController) => Promise<void> | void;
  /** `onToken`: Called for each tokenized message. */
  onTransform?: (chunk: I, controller: TransformStreamDefaultController) => Promise<O|void> | O|void;
  /** `onFinal`: Called once when the stream is closed with the final completion message. */
  onFinal?: (controller: TransformStreamDefaultController) => Promise<void> | void;
  onError?: (error: Error) => Promise<void> | void;
}

/**
 * Creates a transform stream that invokes optional callback functions.
 * The transform stream uses the provided callbacks to execute custom logic at different stages of the stream's lifecycle.
 * - `onStart`: Called once when the stream is initialized.
 * - `onTransform`: Called for each tokenized message.
 * - `onCompletion`: Called every time an AIStream completion message is received. This can occur multiple times when using e.g. OpenAI functions
 * - `onFinal`: Called once when the stream is closed with the final completion message.
 *
 * This function is useful when you want to process a stream of messages and perform specific actions during the stream's lifecycle.
 *
 * @param [callbacks] - An object containing the callback functions.
 * @return A transform stream that encodes input messages as Uint8Array and allows the execution of custom logic through callbacks.
 *
 * @example
* const callbacks = {
*   onStart: async () => console.log('Stream started'),
*   onTransform: async (chunk) => console.log('Token:',chunk),
*   onFinal: async () => data.close()
* };
* const transformer = createCallbacksTransformer(callbacks);
*/
export function createCallbacksTransformer<I = any, O = any>(
 cb: StreamCallbacksAndOptions<I, O> | undefined,
): TransformStream<I, O> {
  const callbacks = cb || {};

  const result = new TransformStream({
    async start(controller): Promise<void> {
      const _controllerError = controller.error
      controller.error = (error: any) => {
        _controllerError.call(controller, error);
        if (callbacks.onError) {
          callbacks.onError(error);
        }
      };

      if (callbacks.onStart) {
        try {
          await callbacks.onStart(controller);
        } catch (error) {
          controller.error(error);
        }
      }
    },

    async transform(chunk, controller): Promise<void> {
      try {
        let result: any
        if (callbacks.onTransform) {
          result = await callbacks.onTransform(chunk, controller)
        }
        if (!result) {result = chunk}
        controller.enqueue(result)
      } catch (error) {
        controller.error(error)
      }
    },

    async flush(controller): Promise<void> {
      if (callbacks.onFinal) {
        try {
          await callbacks.onFinal(controller);
        }catch (err) {
          return controller.error(err);
        }
      }
      controller.terminate();
    },
  });
  return result;
}

