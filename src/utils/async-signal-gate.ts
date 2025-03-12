import { AbortError } from "@isdk/common-error";

/**
 * An asynchronous signal gate that blocks operations until a signal is emitted.
 * This class allows multiple awaiters to wait for a signal and resolves all pending promises with the emitted value.
 * The gate can be reset to reuse for subsequent signals.
 *
 * @example
 *
 * ```typescript
 * // Default type is void, can call signal() without parameters
 * const gate = new SignalGate();
 * gate.signal(); // No parameters required
 *
 * // Example with explicit type
 * const valueGate = new SignalGate<number>();
 * valueGate.signal(42); // Must provide a number value
 * ```
 */
export class SignalGate<T = void> {
  protected _isSignaled = false;
  protected _signalValue: T | undefined;
  protected waitQueue: Array<{
    resolve: (value: T) => void;
    reject: (error: any) => void;
  }> = [];

  get signaled() {
    return this._isSignaled;
  }

  /**
   * Emits the signal with an optional value, resolving all pending {@link wait} promises.
   * Subsequent calls have no effect until {@link reset} is called.
   *
   * @param value The value to emit with the signal (only required if T is not void).
   */
  signal(value?: T) {
    if (this._isSignaled) return;
    this._isSignaled = true;
    this._signalValue = value as T;
    const queue = this.waitQueue.slice();
    this.waitQueue.length = 0;
    while (queue.length > 0) {
      const item = queue.shift();
      item?.resolve(this._signalValue!);
    }
  }

  /**
   * Resets the gate to its initial state, allowing a new signal to be emitted.
   */
  reset() {
    this._isSignaled = false;
    this._signalValue = undefined;
    this.waitQueue.length = 0;
  }

  /**
   * Aborts all pending waits, rejecting their promises with an error.
   * This does **not** reset the signal state (the gate remains signaled or unsignaled).
   *
   * @param reason The reason for aborting the waits.
   */
  abort(reason?: any) {
    if (this.waitQueue.length) {
      const queue = this.waitQueue.slice();
      this.waitQueue.length = 0;
      const error = new AbortError(reason);
      while (queue.length > 0) {
        const { reject } = queue.shift()!;
        reject(error);
      }
    }
  }

  /**
   * Returns a promise that resolves with the emitted signal value.
   * If called after the signal has been emitted, resolves immediately with the stored value.
   *
   * @returns A promise resolving to the signal value (type T).
   */
  async wait(): Promise<T> {
    return new Promise((resolve, reject) => {
      if (this._isSignaled) {
        resolve(this._signalValue!);
      } else {
        this.waitQueue.push({ resolve, reject });
      }
    });
  }
}
