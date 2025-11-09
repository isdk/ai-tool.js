[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / xxhash

# Function: xxhash()

> **xxhash**(`value`, `hashAlgo?`, `seed?`): `Uint8Array`

Defined in: @isdk/ai-tools/packages/hash/dist/index.d.ts:125

Computes an XXHash (32-bit or 64-bit) for a given value and returns the result as a Uint8Array.

This function provides a lower-level interface to XXHash, allowing for direct manipulation
of the hash output as a byte array.

## Parameters

### value

`HashValue`

The value to hash (string, ArrayBuffer, or Buffer).

### hashAlgo?

[`HashAlgorithm`](../enumerations/HashAlgorithm.md)

The XXHash algorithm to use (xxhash32 or xxhash64).

### seed?

`number`

The seed for the hashing algorithm.

## Returns

`Uint8Array`

The XXHash result as a Uint8Array.

## Example

```typescript
const data = 'hello world';
const hashBytes = xxhash(data, HashAlgorithm.xxhash64);
console.log(hashBytes); // Uint8Array representation of the hash
```
