import { sleep } from '@isdk/util'

export { sleep, yieldExec } from '@isdk/util'
/**
 * @alias sleep
 * @deprecated Use {@link sleep} for clearer intent
 *
 * Legacy alias maintained for backward compatibility.
 * Prefer the more explicit `sleep` naming in new code.
 */
export const wait = sleep
