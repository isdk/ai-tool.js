[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / readTextFileChunks

# Function: readTextFileChunks()

> **readTextFileChunks**(`filePath`, `options`?): `AsyncIterable`\<`string`\>

Defined in: [packages/ai-tool/src/utils/read-text-file-chunks.ts:41](https://github.com/isdk/ai-tool.js/blob/6a89194ac34437a1bc58f7ec590cd22976939ca6/src/utils/read-text-file-chunks.ts#L41)

Reads a text file and yields chunks of text that are within a specified token limit.
This function supports both small files that can be read entirely into memory,
and large files that require streaming.

Note: The specified `size` must not be less than the token count of the longest sentence.
If the `size` is less than the token count of the longest sentence, some sentences may not
fit completely into a single chunk.
Without completeSentence and corrected Only!

## Parameters

### filePath

`string`

The path to the text file to be read.

### options?

[`IReadTextFileChunksOptions`](../interfaces/IReadTextFileChunksOptions.md)

optional Options for reading the file.

## Returns

`AsyncIterable`\<`string`\>

## Example

```typescript
const filePath = 'path/to/file.txt';
const options = {
  size: 2048,
  modelId: 'gpt-3.5',
  metaInfo: { size: 10240 }
};

for await (const chunk of readTextFileChunks(filePath, options)) {
  console.log('Chunk:', chunk);
}
```
