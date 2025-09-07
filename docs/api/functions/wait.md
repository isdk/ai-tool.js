[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / wait

# Function: ~~wait()~~

> **wait**(`ms`): `Promise`\<`void`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/wait.ts:23](https://github.com/isdk/ai-tool.js/blob/4ebf370aaec9c78535cb40ffc19656d7bddcb145/src/utils/wait.ts#L23)

## Parameters

### ms

`number`

The number of milliseconds to pause execution

## Returns

`Promise`\<`void`\>

## Alias

sleep

## Deprecated

Use [sleep](sleep.md) for clearer intent

Legacy alias maintained for backward compatibility.
Prefer the more explicit `sleep` naming in new code.

## Example

```ts
await sleep(500); // Pause for half a second
```

## Remarks

This implementation uses `setTimeout` under the hood and is more precise
for longer durations than `setImmediate`-based approaches
