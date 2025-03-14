// Modified from https://gist.github.com/nfantone/1eaa803772025df69d07f4dbf5df7e58
// import { wait } from "@isdk/ai-tool";

const { exit } = process;

let isShuttingDown = false;

// hack to wait until all BeforeShutdownListener done
(process as any).exit = (code?: number | string | null) => {
  if (!isShuttingDown) {
    shutdown(undefined, code).then();
  }
}



/**
 * @callback BeforeShutdownListener
 * @param {string} [signalOrEvent] The exit signal or event name received on the process.
 */
export type BeforeShutdownListener = (signalOrEvent: string) => Promise<void>|void;

/**
 * System signals the app will listen to initiate shutdown.
 * @const {string[]}
 *
 * SIGINT, a.k.a Ctrl + C, and SIGTERM by default
 */
export const SHUTDOWN_SIGNALS = ['SIGINT', 'SIGTERM', 'exit'];

/**
 * Time in milliseconds to wait before forcing shutdown.
 * @const {number}
 */
const SHUTDOWN_TIMEOUT = 1000 * 60 * 5;

/**
 * A queue of listener callbacks to execute before shutting
 * down the process.
 * @type {BeforeShutdownListener[]}
 */
const shutdownListeners: BeforeShutdownListener[] = [];

/**
 * Listen for signals and execute given `fn` function once.
 * @param  {string[]} signals System signals to listen to.
 * @param  {function(...args: any[])} fn Function to execute on shutdown.
 */
const processOnce = (signals: string[], fn: (...args: any[]) => void) => {
  return signals.forEach(sig => process.once(sig, fn));
};

/**
 * Sets a forced shutdown mechanism that will exit the process after `timeout` milliseconds.
 * @param {number} timeout Time to wait before forcing shutdown (milliseconds)
 */
const forceExitAfter = (timeout: number) => () => {
  setTimeout(() => {
    // Force shutdown after timeout
    console.warn(`Could not close resources gracefully after ${timeout}ms: forcing shutdown`);
    return exit(1);
  }, timeout).unref();
};

/**
 * Main process shutdown handler. Will invoke every previously registered async shutdown listener
 * in the queue and exit with a code of `0`. Any `Promise` rejections from any listener will
 * be logged out as a warning, but won't prevent other callbacks from executing.
 * @param {string} signalOrEvent The exit signal or event name received on the process, defaults to shutdown.
 * @param {number|string|null} exitCode The optional exit code, defaults to 0.
 */
export async function shutdown(signalOrEvent: string|number = 'shutdown', exitCode: number|string|null = 0) {
  if (isShuttingDown) {
    console.warn(`Shutdown already in progress, ignoring [${signalOrEvent}] signal`);
    return;
  }
  isShuttingDown = true;
  if (typeof signalOrEvent === 'number') {
    exitCode = signalOrEvent;
    signalOrEvent = 'shutdown';
  }
  // console.warn(`Shutting down: received [${signalOrEvent}] signal`);

  for (const listener of shutdownListeners) {
    try {
      await listener(signalOrEvent);
    } catch (err: any) {
      console.warn(`A shutdown handler failed before completing with: ${err.message || err}`);
    }
  }
  // console.warn(`Shutting down: [${signalOrEvent}] signal OK.`);

  return exit(exitCode);
}

/**
 * Registers a new shutdown listener to be invoked before exiting
 * the main process. Listener handlers are guaranteed to be called in the order
 * they were registered.
 * @param {BeforeShutdownListener} listener The shutdown listener to register.
 * @returns {BeforeShutdownListener} Echoes back the supplied `listener`.
 */
export function beforeShutdown(listener: BeforeShutdownListener) {
  if (!shutdownListeners.some((fn) => fn === listener)) {
    shutdownListeners.push(listener);
    return listener;
  }
}

// Register shutdown callback that kills the process after `SHUTDOWN_TIMEOUT` milliseconds
// This prevents custom shutdown handlers from hanging the process indefinitely
processOnce(SHUTDOWN_SIGNALS, forceExitAfter(SHUTDOWN_TIMEOUT));

// Register process shutdown callback
// Will listen to incoming signal events and execute all registered handlers in the stack
processOnce(SHUTDOWN_SIGNALS, shutdown);
