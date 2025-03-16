[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / toRegExp

# Function: toRegExp()

> **toRegExp**(`value`): `RegExp`

Defined in: node\_modules/.pnpm/util-ex@2.2.1/node\_modules/util-ex/lib/to-regexp.d.ts:9

create or clone RegExp

## Parameters

### value

create a new RegExp from.

`string` | `RegExp`

## Returns

`RegExp`

- new RegExp instance.

## Example

```ts
toRegExp('/[a-z]/g') // new RegExp(/[a-z]/g)
toRegExp(/[a-z]/g)  // new RegExp(/[a-z]/g)
```
