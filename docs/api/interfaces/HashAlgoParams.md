[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / HashAlgoParams

# Interface: HashAlgoParams

Defined in: @isdk/ai-tools/packages/hash/dist/index.d.ts:153

Defines the parameters for a hashing operation.

 HashAlgoParams

## Properties

### hashAlgo?

> `optional` **hashAlgo**: [`HashAlgorithm`](../enumerations/HashAlgorithm.md)

Defined in: @isdk/ai-tools/packages/hash/dist/index.d.ts:160

The hashing algorithm to use.

#### Default

```ts
HashAlgorithm.xxhash64
```

***

### outputType?

> `optional` **outputType**: `"string"` \| `"binary"` \| `"hex"`

Defined in: @isdk/ai-tools/packages/hash/dist/index.d.ts:177

The desired output type for the hash.
- `hex`: A hexadecimal string.
- `binary`: A Uint8Array.
- `string`: A base32768 encoded string (default).

#### Default

```ts
'string'
```

***

### seed?

> `optional` **seed**: `number`

Defined in: @isdk/ai-tools/packages/hash/dist/index.d.ts:167

The seed for the hashing algorithm. Used by algorithms like xxhash.

#### Default

```ts
SEED
```
