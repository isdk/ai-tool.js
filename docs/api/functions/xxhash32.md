[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / xxhash32

# Function: xxhash32()

> **xxhash32**(`value`, `radix?`): `string`

Defined in: @isdk/ai-tools/packages/hash/dist/index.d.ts:82

Computes a 32-bit XXHash for a given string or object.

If the input is an object, it will be canonicalized to a JSON string before hashing.
The result is returned as a hexadecimal string.

## Parameters

### value

The string or object to hash.

`string` | `object`

### radix?

`number`

The radix for the output string (e.g., 16 for hexadecimal).

## Returns

`string`

The 32-bit XXHash as a string.

## Example

```typescript
const hash1 = xxhash32('hello world'); // 'f2902a24'
const hash2 = xxhash32({ a: 1, b: 2 }); // Consistent hash for objects
```
