[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / addDate

# Function: addDate()

> **addDate**\<`DateType`, `ResultDate`\>(`date`, `duration`, `options`?): `ResultDate`

Defined in: ai-tools/node\_modules/.pnpm/date-fns@4.1.0/node\_modules/date-fns/add.d.ts:37

## Type Parameters

• **DateType** *extends* `Date`

The `Date` type the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).

• **ResultDate** *extends* `Date` = `DateType`

The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.

## Parameters

### date

`DateArg`\<`DateType`\>

The date to be changed

### duration

`Duration`

The object with years, months, weeks, days, hours, minutes, and seconds to be added.

### options?

`AddOptions`\<`ResultDate`\>

An object with options

## Returns

`ResultDate`

The new date with the seconds added

## Name

add

## Description

Add the specified years, months, weeks, days, hours, minutes, and seconds to the given date.

## Example

```ts
// Add the following duration to 1 September 2014, 10:19:50
const result = add(new Date(2014, 8, 1, 10, 19, 50), {
  years: 2,
  months: 9,
  weeks: 1,
  days: 7,
  hours: 5,
  minutes: 9,
  seconds: 30,
})
//=> Thu Jun 15 2017 15:29:20
```
