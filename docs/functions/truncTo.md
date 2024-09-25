[**@isdk/ai-tool**](../README.md) • **Docs**

***

[@isdk/ai-tool](../globals.md) / truncTo

# Function: truncTo()

> **truncTo**(`n`, `dec`, `up`): `number`

Truncates(Round) a number to a specified number of decimal places.

## Parameters

• **n**: `number`

The number to truncate.

• **dec**: `number` = `2`

The number of decimal places to truncate to (default is 2).

• **up**: `number` = `0.5`

The amount to round up by before truncating (default is 0.5).

## Returns

`number`

The truncated number.

## Examples

```ts
// returns 1.235
truncTo(1.2345, 3)
```

```ts
// returns 1.24
truncTo(1.2345, 2, 0.6)
```

## Defined in

[packages/ai-tool/src/utils/trunc-to.ts:19](https://github.com/isdk/ai-tool.js/blob/37ada542a786fbbc770f2d61beb564f6e603941d/src/utils/trunc-to.ts#L19)
