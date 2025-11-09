[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / yieldExec

# Function: yieldExec()

> **yieldExec**(): `Promise`\<`void`\>

Defined in: @isdk/util/dist/index.d.ts:617

Yields execution control to the event loop, allowing pending I/O operations
and scheduled tasks to run before continuing.

## Returns

`Promise`\<`void`\>

## Remarks

This method creates a microtask checkpoint using `setImmediate`, which helps:
- Interleave CPU-intensive work with I/O events
- Prevent event loop blocking
- Maintain application responsiveness

Particularly useful for breaking up long synchronous operations in Node.js.
