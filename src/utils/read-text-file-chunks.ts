import fs from 'fs'
import type { RequireAtLeastOne } from 'type-fest'
import {countLLMTokens, decodeCharset, truncateToTokenLimit, IFileMetaInfo, splitSentence, ITruncateToTokenLimitOptions} from './'

export interface IReadTextFileChunksOptions extends ITruncateToTokenLimitOptions {
  size?: number
  modelId?: string
  metaInfo?: RequireAtLeastOne<Partial<IFileMetaInfo>, 'size'>
}

/**
 * Reads a text file and yields chunks of text that are within a specified token limit.
 * This function supports both small files that can be read entirely into memory,
 * and large files that require streaming.
 *
 * Note: The specified `size` must not be less than the token count of the longest sentence.
 * If the `size` is less than the token count of the longest sentence, some sentences may not
 * fit completely into a single chunk.
 *
 * @param filePath - The path to the text file to be read.
 * @param options - optional Options for reading the file.
 * @param options.size - optional The maximum token size per chunk. Default is 1984.
 * @param options.modelId - optional The ID of the model used for token counting.
 * @param options.metaInfo - optional Metadata about the file, including its size.
 *
 * @example
 * ```typescript
 * const filePath = 'path/to/file.txt';
 * const options = {
 *   size: 2048,
 *   modelId: 'gpt-3.5',
 *   metaInfo: { size: 10240 }
 * };
 *
 * for await (const chunk of readTextFileChunks(filePath, options)) {
 *   console.log('Chunk:', chunk);
 * }
 * ```
 */
export async function* readTextFileChunks(filePath: string, options?: IReadTextFileChunksOptions): AsyncIterable<string> {
  // the max token size per chunk
  const size = options?.size ?? 1984;
  const modelId = options?.modelId;

  // const fileMetaInfo = await getFileMetaInfo(filePath);
  const fileSize = options?.metaInfo?.size ?? (await fs.promises.stat(filePath)).size;

  // Estimated file token size
  let len = Math.trunc(fileSize / 2);
  if (len <= size) {
    let content = decodeCharset(await fs.promises.readFile(filePath));
    len = await countLLMTokens(content, modelId);
    if (len <= size) {
      yield content;
    } else {
      do {
        const chunk = await truncateToTokenLimit(content, {...options, modelId, size});
        yield chunk;
        content = content.slice(chunk.length);
      } while (content);
    }
  } else {
    const stream = (ReadableStream as any).from(fs.createReadStream(filePath));
    const reader = stream.getReader();
    let content = '';

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      content += decodeCharset(value);
      const sentences = splitSentence(content);
      let last = sentences.pop();
      if (last) {
        const ix = content.lastIndexOf(last);
        last = content.slice(ix);
        content = content.slice(0, ix);
      }

      if (content.length >= size) {
        const chunk = await truncateToTokenLimit(content, { ...options, modelId, size, sentences });
        content = content.slice(chunk.length)
        yield chunk;
      }

      // the cache block could be much larger than the size
      while (content.length > size) {
        const chunk = await truncateToTokenLimit(content, { ...options, modelId, size });
        content = content.slice(chunk.length);
        yield chunk;
      }

      if (last !== undefined) content += last;
    }

    while (content) {
      const chunk = await truncateToTokenLimit(content, { ...options, modelId, size });
      content = content.slice(chunk.length);
      yield chunk;
    }
  }
}