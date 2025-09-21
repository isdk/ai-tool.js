[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / toDate

# Function: toDate()

> **toDate**\<`DateType`, `ResultDate`\>(`argument`, `context?`): `ResultDate`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/date-fns@4.1.0/node\_modules/date-fns/toDate.d.ts:40

## Type Parameters

### DateType

`DateType` *extends* `Date` \| `ConstructableDate`

The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).

### ResultDate

`ResultDate` *extends* `Date` = `DateType`

The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.

## Parameters

### argument

`DateArg`\<`DateType`\>

The value to convert

### context?

`ContextFn`\<`ResultDate`\>

## Returns

`ResultDate`

The parsed date in the local time zone

## Name

toDate

## Description

Convert the given argument to an instance of Date.

If the argument is an instance of Date, the function returns its clone.

If the argument is a number, it is treated as a timestamp.

If the argument is none of the above, the function returns Invalid Date.

Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
enabling to transfer extra properties from the reference date to the new date.
It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
that accept a time zone as a constructor argument.

**Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.

## Examples

```ts
// Clone the date:
const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
//=> Tue Feb 11 2014 11:30:30
```

```ts
// Convert the timestamp to date:
const result = toDate(1392098430000)
//=> Tue Feb 11 2014 11:30:30
```
