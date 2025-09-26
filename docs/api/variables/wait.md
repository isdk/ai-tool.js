[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / wait

# ~~Variable: wait()~~

> `const` **wait**: (`ms`) => `Promise`\<`void`\> = `sleep`

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/wait.ts:23](https://github.com/isdk/ai-tool.js/blob/fb1809b53cc75a30928176c26910792b6b8a96e1/src/utils/wait.ts#L23)

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

## Alias

sleep

## Deprecated

Use [sleep](../functions/sleep.md) for clearer intent

Legacy alias maintained for backward compatibility.
Prefer the more explicit `sleep` naming in new code.
