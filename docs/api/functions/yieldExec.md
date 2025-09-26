[**@isdk/ai-tool**](../README.md)

***

[@isdk/ai-tool](../globals.md) / yieldExec

# Function: yieldExec()

> **yieldExec**(): `Promise`\<`void`\>

Defined in: [@isdk/ai-tools/packages/ai-tool/src/utils/wait.ts:37](https://github.com/isdk/ai-tool.js/blob/e883e341c67e937e7d3a3e95e8bc56844896f5a3/src/utils/wait.ts#L37)

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
