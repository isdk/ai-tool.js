[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / nanoid

# Function: nanoid()

> **nanoid**\<`Type`\>(`size?`): `Type`

Defined in: @isdk/ai-tools/node\_modules/.pnpm/nanoid@5.1.6/node\_modules/nanoid/index.d.ts:28

Generate secure URL-friendly unique ID.

By default, the ID will have 21 symbols to have a collision probability
similar to UUID v4.

```js
import { nanoid } from 'nanoid'
model.id = nanoid() //=> "Uakgb_J5m9g-0JDMbcJqL"
```

## Type Parameters

### Type

`Type` *extends* `string`

## Parameters

### size?

`number`

Size of the ID. The default size is 21.

## Returns

`Type`

A random string.

## Typeparam

Type The ID type to replace `string` with some opaque type.
