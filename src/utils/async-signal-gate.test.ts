import { SignalGate } from "./async-signal-gate";
import { AbortError } from "@isdk/common-error";

describe("SignalGate", () => {
  describe("Basic functionality", () => {
    test("should resolve pending promises when signal is emitted", async () => {
      const gate = new SignalGate();
      let resolved = 0;

      gate.wait().then(() => (++resolved));
      gate.wait().then(() => (++resolved));

      gate.signal();
      await new Promise(setImmediate); // Allow microtasks to flush

      expect(resolved).toBe(2);
    });

    test("should handle multiple async waits", async () => {
      const gate = new SignalGate();
      const promises = Array.from({ length: 5 }, () => gate.wait());
      let resolvedCount = 0;

      promises.forEach(p => p.then(() => resolvedCount++));
      gate.signal();

      await Promise.all(promises);
      expect(resolvedCount).toBe(5);
    });
  });

  describe("Type-specific tests", () => {
    test("should return correct value with typed signal", async () => {
      const gate = new SignalGate<number>();
      const value = 42;
      let result: number | undefined;

      gate.wait().then((value) => (result = value));
      expect(result).toBeUndefined(); // Before signal

      gate.signal(value);
      await new Promise(setImmediate); // Allow microtasks to flush
      expect(result).toBe(value);
      const resultAfter = await gate.wait();
      expect(resultAfter).toBe(value);
    });
  });

  describe("Abort functionality", () => {
    test("should reject pending promises when aborted", async () => {
      const gate = new SignalGate();
      let errorCaught = 0;

      gate.wait().catch(() => (errorCaught++));
      gate.wait().catch(() => (errorCaught++));

      gate.abort();
      await new Promise(setImmediate);

      expect(errorCaught).toBe(2);
    });

    test("aborted promises should receive AbortError", async () => {
      const gate = new SignalGate();
      let errorCaught: any;
      gate.wait().catch(err => (errorCaught = err));

      gate.abort();
      await new Promise(setImmediate);
      expect(errorCaught).toBeInstanceOf(AbortError);
    });
  });

  describe("Reset functionality", () => {
    test("reset should allow re-signaling", async () => {
      const gate = new SignalGate<number>();
      let resolveCount = 0;

      gate.signal(1);
      let result = await gate.wait(); // Consume initial signal
      expect(result).toBe(1);

      gate.reset();
      gate.signal(2);

      result = await gate.wait();
      expect(result).toBe(2);
    });

    test("reset does not affect already resolved promises", async () => {
      const gate = new SignalGate();
      let resolveCount = 0;
      gate.signal();
      gate.reset();

      gate.wait().then(() => (resolveCount++));
      await new Promise(setImmediate);
      expect(resolveCount).toBe(0);
    });
  });

  describe("Edge cases", () => {
    test("calling signal multiple times has no effect", async () => {
      const gate = new SignalGate<number>();
      gate.signal(1);
      gate.signal(2); // No-op

      const result = await gate.wait();
      expect(result).toBe(1);
    });

    test("wait after signal resolves immediately", async () => {
      const gate = new SignalGate();
      gate.signal();

      const startTime = Date.now();
      await gate.wait();
      const duration = Date.now() - startTime;
      expect(duration).toBeLessThan(10); // Should resolve instantly
    });

    test("abort after signal does not affect resolved promises", async () => {
      const gate = new SignalGate();
      gate.signal();
      gate.abort(); // Should have no effect

      const result = await gate.wait();
      expect(result).toBeUndefined();
    });
  });

  describe("Timeout scenarios", () => {
    test("wait with timeout", async () => {
      const gate = new SignalGate();
      let timedOut = false;

      await Promise.race([
        gate.wait(),
        new Promise((_, reject) => setTimeout(() => reject("Timeout"), 100)),
      ]).catch(() => (timedOut = true));

      expect(timedOut).toBe(true);
    });
  });
});