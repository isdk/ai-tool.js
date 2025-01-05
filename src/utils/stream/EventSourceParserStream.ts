import {
  EventSourceParser,
  type EventSourceMessage,
  createParser,
} from "eventsource-parser";

/**
 * A TransformStream that ingests a stream of strings and produces a stream of ParsedEvents.
 *
 * @example
 * ```
 * const eventStream =
 *   response.body
 *     .pipeThrough(new TextDecoderStream())
 *     .pipeThrough(new EventSourceParserStream())
 * ```
 */
// Copied from https://github.com/rexxars/eventsource-parser/blob/main/src/stream.ts to avoid issues with the commonjs build.
export class EventSourceParserStream extends TransformStream<
  string,
  EventSourceMessage
> {
  constructor() {
    let parser!: EventSourceParser;

    super({
      start(controller) {
        parser = createParser({
          onEvent: (event) => {
            controller.enqueue(event);
          },
        });
      },
      transform(chunk) {
        parser.feed(chunk);
      },
    });
  }
}
