[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / uuid

# Function: uuid()

> **uuid**(`encode?`): `string`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/hash/uuid.ts:21](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/utils/hash/uuid.ts#L21)

Generates a UUID (Universally Unique Identifier) based on the specified version and encoding options.

## Parameters

### encode?

`boolean`

Whether to encode the generated UUID using Base32768 encoding. Defaults to `false`.

## Returns

`string`

A string representing the generated UUID. If `encode` is `true`, the UUID will be encoded in Base32768 format.

## Example

```ts
// Generate an encoded UUID version 1 using Base32768
const encodedUuid1 = uuid(true);
```
