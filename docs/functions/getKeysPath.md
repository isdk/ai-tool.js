[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / getKeysPath

# Function: getKeysPath()

> **getKeysPath**\<`TValue`\>(`value`): `string`[]

Retrieves an array of all key paths as strings for a nested object or array.

## Type Parameters

• **TValue** *extends* `object`

## Parameters

• **value**: `TValue`

The object or array to extract the paths from.

## Returns

`string`[]

- An array of strings containing all the key paths.

## Example

```
const obj = { a: { b: { c: 1 } }, d: [0, { e: 2 }] };
console.log(getKeysPath(obj)); // Output: ['a.b.c', 'd[0]', 'd[1].e']
```

## Defined in

[packages/ai-tool/src/utils/get-keys-path.ts:16](https://github.com/isdk/ai-tool.js/blob/5f9f0083c734722103ff5468e424b48c212a55f0/src/utils/get-keys-path.ts#L16)
