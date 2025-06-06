/**
 * Suspends execution for a specified number of milliseconds
 * @param ms - The number of milliseconds to pause execution
 * @example
 * ```ts
 * await sleep(500); // Pause for half a second
 * ```
 * @remarks
 * This implementation uses `setTimeout` under the hood and is more precise
 * for longer durations than `setImmediate`-based approaches
 */
export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * @alias sleep
 * @deprecated Use {@link sleep} for clearer intent
 *
 * Legacy alias maintained for backward compatibility.
 * Prefer the more explicit `sleep` naming in new code.
 */
export const wait = sleep

/**
 * Yields execution control to the event loop, allowing pending I/O operations
 * and scheduled tasks to run before continuing.
 *
 * @remarks
 * This method creates a microtask checkpoint using `setImmediate`, which helps:
 * - Interleave CPU-intensive work with I/O events
 * - Prevent event loop blocking
 * - Maintain application responsiveness
 *
 * Particularly useful for breaking up long synchronous operations in Node.js.
 */
export async function yieldExec(): Promise<void> {
  return new Promise<void>(resolve => {
    setImmediate(resolve);
  });
}
