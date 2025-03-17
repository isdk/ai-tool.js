[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / getKeysPath

# Function: getKeysPath()

> **getKeysPath**\<`TValue`\>(`value`): `string`[]

Defined in: [packages/ai-tool/src/utils/get-keys-path.ts:21](https://github.com/isdk/ai-tool.js/blob/760349925bceb5de6b4188926a13bfb3f0ce4ced/src/utils/get-keys-path.ts#L21)

Retrieves an array of all key paths as strings for a nested object or array.

## Type Parameters

• **TValue** *extends* `object`

## Parameters

### value

`TValue`

The object or array to extract the paths from.

## Returns

`string`[]

- An array of strings containing all the key paths.

## Example

```
const obj = { a: { b: { c: 1 } }, d: [0, { e: 2 }] };
console.log(getKeysPath(obj)); // Output: ['a.b.c', 'd[0]', 'd[1].e']
```
