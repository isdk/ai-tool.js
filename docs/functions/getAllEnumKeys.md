[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / getAllEnumKeys

# Function: getAllEnumKeys()

> **getAllEnumKeys**\<`T`\>(`enumType`): keyof *typeof* `enumType`[]

Retrieves all string keys from the given enumeration(number).

## Type Parameters

• **T** *extends* `object`

## Parameters

• **enumType**: `T`

The enumeration type with numeric values for which to retrieve keys.

## Returns

keyof *typeof* `enumType`[]

An array containing all string keys of the specified enumeration.

## Defined in

[packages/ai-tool/src/utils/get-all-enum-keys.ts:7](https://github.com/isdk/ai-tool.js/blob/b0813174e9b350ae47231f8e5f885150313123b0/src/utils/get-all-enum-keys.ts#L7)
