[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / hashObject

# Function: hashObject()

> **hashObject**(`value`, `options?`): `Promise`\<`string` \| `Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: @isdk/ai-tools/packages/hash/dist/index.d.ts:239

Hashes a JavaScript object by first converting it to a canonical JSON string.

This ensures that objects with the same properties but different key order produce the same hash.

## Parameters

### value

`any`

The object to hash.

### options?

[`HashAlgoParams`](../interfaces/HashAlgoParams.md)

Hashing options.

## Returns

`Promise`\<`string` \| `Uint8Array`\<`ArrayBufferLike`\>\>

A promise that resolves to the hash result.

## Example

```typescript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };

const hash1 = await hashObject(obj1);
const hash2 = await hashObject(obj2);

console.log(hash1 === hash2); // true
```
