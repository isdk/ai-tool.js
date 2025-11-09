[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / hash

# Function: hash()

> **hash**(`value`, `options?`): `Promise`\<`string` \| `Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: @isdk/ai-tools/packages/hash/dist/index.d.ts:218

Hashes a given value.

The value can be a string, Buffer, ArrayBuffer, or any other type supported by `hash-wasm`.

## Parameters

### value

`IDataType`

The value to hash.

### options?

[`HashAlgoParams`](../interfaces/HashAlgoParams.md)

Hashing options.

## Returns

`Promise`\<`string` \| `Uint8Array`\<`ArrayBufferLike`\>\>

A promise that resolves to the hash result.

## Example

```typescript
const textHash = await hash('hello world');

const textHashAsHex = await hash('hello world', {
  hashAlgo: HashAlgorithm.sha256,
  outputType: 'hex'
});
```
