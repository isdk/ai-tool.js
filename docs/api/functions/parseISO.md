[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / parseISO

# Function: parseISO()

> **parseISO**\<`DateType`, `ResultDate`\>(`argument`, `options?`): `ResultDate`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/date-fns@4.1.0/node\_modules/date-fns/parseISO.d.ts:43

## Type Parameters

### DateType

`DateType` *extends* `Date`

The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).

### ResultDate

`ResultDate` *extends* `Date` = `DateType`

The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.

## Parameters

### argument

`string`

The value to convert

### options?

`ParseISOOptions`\<`ResultDate`\>

An object with options

## Returns

`ResultDate`

The parsed date in the local time zone

## Name

parseISO

## Description

Parse the given string in ISO 8601 format and return an instance of Date.

Function accepts complete ISO 8601 formats as well as partial implementations.
ISO 8601: http://en.wikipedia.org/wiki/ISO_8601

If the argument isn't a string, the function cannot parse the string or
the values are invalid, it returns Invalid Date.

## Examples

```ts
// Convert string '2014-02-11T11:30:30' to date:
const result = parseISO('2014-02-11T11:30:30')
//=> Tue Feb 11 2014 11:30:30
```

```ts
// Convert string '+02014101' to date,
// if the additional number of digits in the extended year format is 1:
const result = parseISO('+02014101', { additionalDigits: 1 })
//=> Fri Apr 11 2014 00:00:00
```
