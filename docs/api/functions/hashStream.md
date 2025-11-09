[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / hashStream

# Function: hashStream()

> **hashStream**(`stream`, `options?`): `Promise`\<`string` \| `Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: @isdk/ai-tools/packages/hash/dist/index.d.ts:198

Hashes a readable stream of data.

This function is useful for hashing large files or data streams without loading the entire
content into memory.

## Parameters

### stream

`ReadableStream`

The readable stream to hash.

### options?

[`HashAlgoParams`](../interfaces/HashAlgoParams.md)

Hashing options.

## Returns

`Promise`\<`string` \| `Uint8Array`\<`ArrayBufferLike`\>\>

A promise that resolves to the hash result.

## Example

```typescript
// In Node.js
import { createReadStream } from 'fs';
const stream = createReadStream('path/to/file');
const fileHash = await hashStream(stream);
console.log(fileHash);
```
