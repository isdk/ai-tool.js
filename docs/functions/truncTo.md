[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / truncTo

# Function: truncTo()

> **truncTo**(`n`, `dec`, `up`): `number`

Defined in: [packages/ai-tool/src/utils/trunc-to.ts:19](https://github.com/isdk/ai-tool.js/blob/077730e62e6c723611b64a587e36b69766741af4/src/utils/trunc-to.ts#L19)

Truncates(Round) a number to a specified number of decimal places.

## Parameters

### n

`number`

The number to truncate.

### dec

`number` = `2`

The number of decimal places to truncate to (default is 2).

### up

`number` = `0.5`

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
