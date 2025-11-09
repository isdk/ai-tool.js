[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / xxhashAsStr

# Function: xxhashAsStr()

> **xxhashAsStr**(`value`, `hashAlgo?`, `seed?`): `string`

Defined in: @isdk/ai-tools/packages/hash/dist/index.d.ts:144

Computes an XXHash for a given value and returns the result as a base32768 encoded string.

This function is a convenience wrapper around `xxhash` that automatically encodes the
resulting byte array into a compact, URL-friendly string.

## Parameters

### value

The value to hash (string or Uint8Array).

`string` | `Uint8Array`\<`ArrayBufferLike`\>

### hashAlgo?

[`HashAlgorithm`](../enumerations/HashAlgorithm.md)

The XXHash algorithm to use (xxhash32 or xxhash64).

### seed?

`number`

The seed for the hashing algorithm.

## Returns

`string`

The XXHash result as a base32768 encoded string.

## Example

```typescript
const data = 'hello world';
const hashString = xxhashAsStr(data, HashAlgorithm.xxhash64);
console.log(hashString); // Base32768 encoded string
```
