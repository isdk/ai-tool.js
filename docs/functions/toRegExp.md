[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / toRegExp

# Function: toRegExp()

> **toRegExp**(`value`): `RegExp`

create or clone RegExp

## Parameters

• **value**: `string` \| `RegExp`

create a new RegExp from.

## Returns

`RegExp`

- new RegExp instance.

## Example

```ts
toRegExp('/[a-z]/g') // new RegExp(/[a-z]/g)
toRegExp(/[a-z]/g)  // new RegExp(/[a-z]/g)
```

## Defined in

node\_modules/.pnpm/util-ex@2.0.0/node\_modules/util-ex/lib/to-regexp.d.ts:9
