import {
  createParser,
  type EventSourceParser,
  type ParsedEvent,
  type ReconnectInterval,
} from 'eventsource-parser';
import { getResponseErrorReadableStream } from './error-readable-stream'
import { AIResult } from '../chat';

/**
 * Options for the AIStreamParser.
 * @interface
 * @property {string} event - The event (type) from the server side event stream.
 */
export interface AIStreamParserOptions {
  event?: string;
}

/**
 * Custom parser for AIStream data.
 * @interface
 * @param {string} data - The data to be parsed.
 * @param {AIStreamParserOptions} options - The options for the parser.
 * @returns The parsed data or void.
 */
export interface AIStreamParser<T = any, TOptions = any> {
  (data: string, options: AIStreamParserOptions):
    | AIResult<T, TOptions>
    | void
}

/**
 * Creates a TransformStream that parses events from an EventSource stream using a custom parser.
 * @param {AIStreamParser} customParser - Function to handle event data.
 * @returns TransformStream parsing events.
 */
export function createEventStreamTransformer<TValue = any, TOptions = any>(
  customParser?: AIStreamParser,
): TransformStream<Uint8Array, AIResult<TValue, TOptions>> {
  const textDecoder = new TextDecoder();
  let eventSourceParser: EventSourceParser;

  return new TransformStream({
    async start(controller): Promise<void> {
      eventSourceParser = createParser(
        (event: ParsedEvent | ReconnectInterval) => {
          if (
            ('data' in event &&
              event.type === 'event' &&
              event.data === '[DONE]') ||
            // Replicate doesn't send [DONE] but does send a 'done' event
            // @see https://replicate.com/docs/streaming
            (event as any).event === 'done'
          ) {
            controller.terminate();
            return;
          }

          if ('data' in event) {
            const parsedMessage = customParser
              ? customParser(event.data, {
                  event: event.event,
                })
              : event.data;
            if (parsedMessage) {controller.enqueue(parsedMessage as any)}
          }
        },
      );
    },

    transform(chunk) {
      eventSourceParser.feed(textDecoder.decode(chunk));
    },
  });
}

/**
 * Returns a stateful function that, when invoked, trims leading whitespace
 * from the input text. The trimming only occurs on the first invocation, ensuring that
 * subsequent calls do not alter the input text. This is particularly useful in scenarios
 * where a text stream is being processed and only the initial whitespace should be removed.
 *
 * @return {function(string): string} A function that takes a string as input and returns a string
 * with leading whitespace removed if it is the first invocation; otherwise, it returns the input unchanged.
 *
 * @example
 * const trimStart = trimStartOfStreamHelper();
 * const output1 = trimStart("   text"); // "text"
 * const output2 = trimStart("   text"); // "   text"
 *
 */
export function trimStartOfStreamHelper(): (text: string) => string {
  let isStreamStart = true;

  return (text: string): string => {
    if (isStreamStart) {
      text = text.trimStart();
      if (text) isStreamStart = false;
    }
    return text;
  };
}

/**
 * Returns a ReadableStream created from the response, parsed and handled with custom logic.
 * The stream goes through two transformation stages, first parsing the events and then
 * invoking the provided callbacks.
 *
 * For 2xx HTTP responses:
 * - The function continues with standard stream processing.
 *
 * For non-2xx HTTP responses:
 * - If the response body is defined, it asynchronously extracts and decodes the response body.
 * - It then creates a custom ReadableStream to propagate a detailed error message.
 *
 * @param {Response} response - The response.
 * @param {AIStreamParser} customParser - The custom parser function.
 * @param {AIStreamCallbacksAndOptions} callbacks - The callbacks.
 * @return {ReadableStream} The AIStream.
 * @throws Will throw an error if the response is not OK.
 */
export function AIStream<T=any, TOptions=any>(
  response: Response,
  customParser?: AIStreamParser<T, TOptions>,
): ReadableStream<AIResult<T, TOptions>> {
  if (!response.ok) {
    return getResponseErrorReadableStream(response.body)
  }

  // if (response.stream)
  let responseBodyStream = response.body || createEmptyReadableStream();
  if (!(responseBodyStream instanceof ReadableStream)) {
    // for NODEJS >= 20
    responseBodyStream = (ReadableStream as any).from(responseBodyStream)
  }

  return responseBodyStream
    .pipeThrough(createEventStreamTransformer<T, TOptions>(customParser))
}

// outputs lines like
// 0: chunk
// 0: more chunk
// 1: a fct call
// z: added data from Data

/**
 * Creates an empty ReadableStream that immediately closes upon creation.
 * This function is used as a fallback for creating a ReadableStream when the response body is null or undefined,
 * ensuring that the subsequent pipeline processing doesn't fail due to a lack of a stream.
 *
 * @returns {ReadableStream} An empty and closed ReadableStream instance.
 */
function createEmptyReadableStream(): ReadableStream {
  return new ReadableStream({
    start(controller) {
      controller.close();
    },
  });
}

/**
 * Implements ReadableStream.from(asyncIterable), which isn't documented in MDN and isn't implemented in node.
 * https://github.com/whatwg/streams/commit/8d7a0bf26eb2cc23e884ddbaac7c1da4b91cf2bc
 */
export function readableFromAsyncIterable<T>(iterable: AsyncIterable<T>) {
  let it = iterable[Symbol.asyncIterator]();
  return new ReadableStream<T>({
    async pull(controller) {
      const { done, value } = await it.next();
      if (done) controller.close();
      else controller.enqueue(value);
    },

    async cancel(reason) {
      await it.return?.(reason);
    },
  });
}
