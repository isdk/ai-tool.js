[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / findPort

# Function: findPort()

> **findPort**(`port`, `options?`): `Promise`\<`number`\>

Defined in: @isdk/util/dist/index.d.ts:1044

Finds an available port.

## Parameters

### port

The starting port number or a string representation of it. Defaults to 0 (random port).

`string` | `number` | `undefined`

### options?

Either the retry count (number) or an options object.

`number` | `FindPortOptions`

## Returns

`Promise`\<`number`\>

A promise that resolves to the available port number.
