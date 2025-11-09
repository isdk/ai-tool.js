[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / sleep

# Function: sleep()

> **sleep**(`ms`): `Promise`\<`void`\>

Defined in: @isdk/util/dist/index.d.ts:604

Suspends execution for a specified number of milliseconds

## Parameters

### ms

`number`

The number of milliseconds to pause execution

## Returns

`Promise`\<`void`\>

## Example

```ts
await sleep(500); // Pause for half a second
```

## Remarks

This implementation uses `setTimeout` under the hood and is more precise
for longer durations than `setImmediate`-based approaches
