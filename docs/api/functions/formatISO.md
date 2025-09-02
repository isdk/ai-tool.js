[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / formatISO

# Function: formatISO()

> **formatISO**(`date`, `options`?): `string`

Defined in: ai-tools/node\_modules/.pnpm/date-fns@4.1.0/node\_modules/date-fns/formatISO.d.ts:43

## Parameters

### date

The original date

`string` | `number` | `Date`

### options?

`FormatISOOptions`

An object with options.

## Returns

`string`

The formatted date string (in local time zone)

## Name

formatISO

## Description

Return the formatted date string in ISO 8601 format. Options may be passed to control the parts and notations of the date.

## Throws

`date` must not be Invalid Date

## Examples

```ts
// Represent 18 September 2019 in ISO 8601 format (local time zone is UTC):
const result = formatISO(new Date(2019, 8, 18, 19, 0, 52))
//=> '2019-09-18T19:00:52Z'
```

```ts
// Represent 18 September 2019 in ISO 8601, short format (local time zone is UTC):
const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
//=> '20190918T190052'
```

```ts
// Represent 18 September 2019 in ISO 8601 format, date only:
const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
//=> '2019-09-18'
```

```ts
// Represent 18 September 2019 in ISO 8601 format, time only (local time zone is UTC):
const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
//=> '19:00:52Z'
```
