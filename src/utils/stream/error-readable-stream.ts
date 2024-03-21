import { BaseError } from "../base-error"

export const RStreamErrCode = 600
export const ResponseRStreamErrCode = 601

export class ReadableStreamError extends BaseError {
  constructor(msg: string, code = RStreamErrCode) {
    super(msg, 500)
  }
}

export function getResponseErrorReadableStream(body?: ReadableStream<Uint8Array>|null) {
  if (body) {
    const reader = body.getReader();
    return new ReadableStream({
      async start(controller) {
        const { done, value } = await reader.read();
        if (!done) {
          const errorText = new TextDecoder().decode(value);
          controller.error(new ReadableStreamError(`Response error: ${errorText}`, ResponseRStreamErrCode));
        }
      },
    });
  } else {
    return new ReadableStream({
      start(controller) {
        controller.error(new ReadableStreamError('Response error: No response body', ResponseRStreamErrCode));
      },
    });
  }
}