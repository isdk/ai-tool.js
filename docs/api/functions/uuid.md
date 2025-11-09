[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / uuid

# Function: uuid()

> **uuid**(`encode?`): `string`

Defined in: @isdk/ai-tools/packages/hash/dist/index.d.ts:32

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
