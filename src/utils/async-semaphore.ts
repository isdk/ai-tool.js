import { isAsync } from 'util-ex';
import { EventEmitter } from 'events-ex';
import { Deque } from './deque'
import { AbortError } from '@isdk/common-error';

// async-sema Released under MIT
// https://github.com/vercel/async-sema/blob/main/src/index.ts

export const DefaultAsyncSemaphoreCapacity = 32;

export type SemaphoreIsReadyFuncType = () => Promise<boolean> | boolean;

function isFn(x: any) {
  return typeof x === 'function';
}

function defaultInit() {
  return '1';
}

export interface BinarySemaphoreOptions {
  initFn?: () => any;
  pauseFn?: () => void;
  resumeFn?: () => void;
  capacity?: number;
}

export interface BinarySemaphoreAcquireOptions {
  signal?: AbortSignal;
  [n: string]: any;
}

export interface BinarySemaphoreReleaseOptions {
  token?: any;
  [n: string]: any;
}

export interface BinarySemaphoreReleaserFunc extends BinarySemaphoreReleaseOptions {
  (): void;
}

export interface SemaphoreOptions extends BinarySemaphoreOptions {
  maxConcurrency?: number;
  isReadyFn?: SemaphoreIsReadyFuncType;
}

// export interface SemaphoreAcquireOptions {
// 	signal?: AbortSignal;
// 	priority?: number;
// }

export interface SemaphoreTaskItem extends BinarySemaphoreAcquireOptions {
  resolve: (value: any) => void;
  reject: (reason?: any) => void;
  token?: any;
}

/**
 * A binary semaphore implementation for managing concurrency in asynchronous operations.
 * Unlike a general semaphore, a binary semaphore allows only one caller to acquire the semaphore at a time.
 * It provides methods to acquire, release, and manage waiting tasks efficiently.
 *
 * Example usage:
 *
 * ```typescript
 * const semaphore = new Semaphore(5); // Allows 5 concurrent operations.
 *
 * const semaphore = new Semaphore(
 *   4, // Allow 4 concurrent async calls
 *   {
 *     capacity: 100 // Prealloc space for 100 tokens
 *   }
 * );
 *
 * async function fetchData(x) {
 *   await semaphore.acquire()
 *   try {
 *     console.log(semaphore.pendingCount + ' calls to fetch are waiting')
 *     // ... do some async stuff with x
 *   } finally {
 *     semaphore.release();
 *   }
 * }
 *
 * const data = await Promise.all(array.map(fetchData));
 * ```
 */
export class BinarySemaphore {
  readonly waiting: Deque<SemaphoreTaskItem | undefined>;
  protected free: any;
  protected emitter: EventEmitter;
  protected useDefaultTokens: boolean;
  protected pauseFn?: () => void;
  protected resumeFn?: () => void;
  protected initTokenFn: (token?: any) => void;
  protected paused: boolean;
  protected _activeCount: number;

  /**
   * Creates a binary semaphore object for managing concurrency in asynchronous operations.
   *
   * @param options.initFn Function that is used to initialize the tokens used to manage the semaphore. The default is () => '1'.
   * @param options.pauseFn An optional fuction that is called to opportunistically request pausing the the incoming stream of data,
   *    instead of piling up waiting promises and possibly running out of memory. See examples/pausing.js.
   * @param options.resumeFn An optional function that is called when there is room again to accept new waiters on the semaphore.
   *    This function must be declared if a pauseFn is declared.
   * @param options.capacity Sets the size of the preallocated waiting list inside the semaphore.
   *    This is typically used by high performance where the developer can make a rough estimate of the number of concurrent users of a semaphore.
   *
   * ```ts
   * const readline = require('readline');
   *
   * const rl = readline.createInterface({
   * 	input: process.stdin,
   * 	output: process.stdout,
   * 	terminal: false
   * });
   *
   * function pause() {
   * 	console.log('Pausing the stream');
   * 	rl.pause();
   * }
   *
   * function resume() {
   * 	console.log('Resuming the stream');
   * 	rl.resume();
   * }
   *
   * const s = new BinarySemaphore({ pauseFn: pause, resumeFn: resume });
   *
   * async function parse(line) {
   * 	await s.acquire();
   *
   * 	console.log(line);
   *
   * 	s.release();
   * }
   *
   * rl.on('line', line => {
   * 	parse(line).catch(console.error);
   * });
   * ```
   *
   */
  constructor(
    options: BinarySemaphoreOptions = {}
  ) {
    const {
      initFn = defaultInit,
      pauseFn,
      resumeFn,
      capacity = DefaultAsyncSemaphoreCapacity,
    } = options;

    if (isFn(pauseFn) !== isFn(resumeFn)) {
      throw new Error(
        'pauseFn and resumeFn must be both set for pausing'
      );
    }

    this.waiting = new Deque(capacity);
    this.emitter = new EventEmitter();
    this.useDefaultTokens = initFn === defaultInit;
    this.pauseFn = pauseFn;
    this.resumeFn = resumeFn;
    this.initTokenFn = initFn;
    this.paused = false;
    this._activeCount = 0;
    this.initFree(options);
    this.init(options);
  }

  initFree(options?: BinarySemaphoreOptions) {
    this.free = this.initTokenFn();
  }

  onReleased(options?: BinarySemaphoreReleaseOptions) {
    const token = options?.token
    const task = this.waiting.shift(true);

    if (task) {
      this._dispatchTask(task, options);
    } else {
      if (this.resumeFn && this.paused) {
        this.paused = false;
        this.resumeFn();
      }

      this.unlock(token);
    }
  }

  init(options: BinarySemaphoreOptions) {
    this.emitter.on('release', (item?: Partial<SemaphoreTaskItem>) => {
      this.onReleased(item);
    });
  }

  _newReleaser(options?: BinarySemaphoreReleaseOptions) {
    let called = false;
    const releaser = () => {
      if (called) return;
      called = true;

      this.release(options);
    };
    if (options) {Object.assign(releaser, options)};

    return releaser as BinarySemaphoreReleaserFunc;
  }

  _dispatchTask(task: SemaphoreTaskItem, options?: BinarySemaphoreReleaseOptions) {
    const { resolve } = task;
    resolve(this._newReleaser(options));
  }

  lock(options?: BinarySemaphoreAcquireOptions) {
    let free = this.free
    if (free) {
      this.free = undefined
      return free
    }
  }

  unlock(token?: any) {
    this.free = this.useDefaultTokens ? '1' : token ?? this.initTokenFn()
  }

  /**
   * Attempt to acquire a token from the semaphore, if one is available immediately. Otherwise, return undefined.
   *
   * @return Returns a token if the semaphore is not full; otherwise, returns `undefined`.
   */
  tryAcquire(options?: BinarySemaphoreAcquireOptions): any | undefined {
    return this.lock(options);
  }

  /**
   * Acquire a token from the semaphore, thus decrement the number of available execution slots. If initFn is not used then the return value of the function can be discarded.
   * @param options.signal An optional AbortSignal to abort the acquisition process. If aborted, the promise will reject with an AbortError.
   * @return A promise that resolves to a release function when a token is acquired. If the semaphore is full, the caller will be added to a waiting queue.
   */
  async acquire(options?: BinarySemaphoreAcquireOptions) {
    this._activeCount++;
    const signal = options?.signal;
    const addTaskToWait = (task: SemaphoreTaskItem) => {
      if (this.pauseFn && !this.paused) {
        this.paused = true;
        this.pauseFn();
      }

      const index = this.waiting.push(task);
      const reject = task.reject;
      if (signal) {
        signal.addEventListener('abort', () => {
          this.waiting[index] = undefined;
          const reason = signal.reason instanceof Error ? signal.reason : new AbortError(signal.reason || 'aborted');
          (signal as any).alreadyRejected = true;
          reject(reason);
        });
      }
      return index
    };

    let token = this.tryAcquire(options);
    const isAsyncToken = token && isAsync(token);
    const newPromise = (token?: any) =>
      new Promise<BinarySemaphoreReleaserFunc>((resolve, reject) => {
        const task: SemaphoreTaskItem = { ...options, resolve, reject, token };
        if (token === undefined) {
          addTaskToWait(task)
        } else {
          this._dispatchTask(task, {...options, token})
        }
      })


    // token !== undefined means that the semaphore is not full, so we can resolve the promise immediately.
    //const result = token !== undefined ? Promise.resolve(token) : new Promise(addWait);
    const result = isAsyncToken ? token.then(token => newPromise(token)) : newPromise(token);
    return result as Promise<BinarySemaphoreReleaserFunc>;
  }

  /**
   * Releases the semaphore, incrementing the number of free execution slots. If there are tasks in the waiting queue, the next task will be dispatched.
   * @param options.token Optional token returned by `acquire()` when using a custom `initFn`. If provided, it will be used to unlock the semaphore.
   */
  release(options?: BinarySemaphoreReleaseOptions): void {
    this._activeCount--;
    this.emitter.emit('release', options);
  }

  /**
   * Drains the semaphore and returns all the initialized tokens in an array. Draining is an ideal way to ensure there are no pending async tasks, for example before a process will terminate.
   */
  drain(): Promise<any[]> {
    const a = [this.acquire()]
    return Promise.all(a);
  }

  abort(reason?: any): void {
    let p: SemaphoreTaskItem | undefined;
    while (p = this.waiting.shift(true)) {
      p.reject(new AbortError(reason));
      // this.unlock(p.token);
    }
  }

  /**
   * Get the total count of all active operations.
   *
   * This method returns the number of operations that are either:
   * - Waiting in the queue to acquire the semaphore (`pendingCount`).
   * - Already acquired the semaphore but have not yet released it.
   *
   * @returns {number} The total count of active operations, including both waiting and ongoing tasks.
   */
  get activeCount(): number {
    return this._activeCount;
  }

  /**
   * Get the number of callers waiting on the semaphore, i.e. the number of pending promises.
   *
   * @returns The number of waiters in the waiting list.
   */
  get pendingCount(): number {
    return this.waiting.size;
  }
}

/**
 * A Semaphore implementation for managing concurrency in asynchronous operations.
 * Semaphores allow a fixed number of resources to be accessed concurrently.
 * This class extends BinarySemaphore and adds support for a maximum concurrency limit and an optional readiness check.
 *
 * Example usage:
 *
 * ```typescript
 * const semaphore = new Semaphore(5); // Allows 5 concurrent operations.
 *
 * const semaphore = new Semaphore(
 *   4, // Allow 4 concurrent async calls
 *   {
 *     capacity: 100, // Prealloc space for 100 tokens
 *     isReadyFn: async () => {
 *       // Check if the system is ready to handle more requests
 *       return true;
 *     },
 *     pauseFn: () => {
 *       console.log('Pausing the stream');
 *     },
 *     resumeFn: () => {
 *       console.log('Resuming the stream');
 *     }
 *   }
 * );
 *
 * async function fetchData(x) {
 *   await semaphore.acquire()
 *   try {
 *     console.log(semaphore.pendingCount() + ' calls to fetch are waiting')
 *     // ... do some async stuff with x
 *   } finally {
 *     semaphore.release();
 *   }
 * }
 *
 * const data = await Promise.all(array.map(fetchData));
 * ```
 */
export class Semaphore extends BinarySemaphore {
  readonly maxConcurrency: number;
  protected free: Deque<any>;
  private isReady?: SemaphoreIsReadyFuncType;

  /**
   * Creates a semaphore object. The first argument is the maximum concurrently number and the second argument is optional.
   *
   * @param maxConcurrency The maximum number of callers allowed to acquire the semaphore concurrently.
   * @param options.initFn Function that is used to initialize the tokens used to manage the semaphore. The default is () => '1'.
   * @param options.pauseFn An optional function that is called to opportunistically request pausing the incoming stream of data,
   *    instead of piling up waiting promises and possibly running out of memory. See examples/pausing.js.
   * @param options.resumeFn An optional function that is called when there is room again to accept new waiters on the semaphore.
   *    This function must be declared if a pauseFn is declared.
   * @param options.capacity Sets the size of the preallocated waiting list inside the semaphore.
   *    This is typically used by high performance where the developer can make a rough estimate of the number of concurrent users of a semaphore.
   * @param options.isReadyFn An optional function that returns a boolean or a promise that resolves to a boolean indicating whether the semaphore is ready to accept new requests.
   */
  constructor(
    maxConcurrency: number | SemaphoreOptions,
    options?: SemaphoreOptions,
  ) {
    if (typeof maxConcurrency === 'number') {
      options = options || {};
      options.maxConcurrency = maxConcurrency;
    } else {
      options = maxConcurrency;
      if (typeof options.maxConcurrency !== 'number') {
        throw new Error('maxConcurrency must be set');
      }
      maxConcurrency = options.maxConcurrency;
    }
    super(options)
    this.maxConcurrency = options.maxConcurrency
		if (options.isReadyFn) this.isReady = options.isReadyFn;
  }
  initFree(options: SemaphoreOptions) {
    const maxConcurrency = options.maxConcurrency = Math.max(1, options.maxConcurrency!);
    this.free = new Deque(maxConcurrency);
    for (let i = 0; i < maxConcurrency; i++) {
      this.free.push(this.initTokenFn());
    }
  }

  tryAcquire(options?: BinarySemaphoreAcquireOptions): Promise<any | undefined>|any | undefined {
		let isReady = this.isReady as unknown as Promise<boolean>;
		if (isReady && isAsync(isReady)) {
			const isPromise = isReady instanceof Promise;
			if (!isPromise) {isReady = (isReady as any)() as Promise<boolean>}
			return isReady.then((ready: boolean) => {
				if (ready) {
					return this.lock(options);
				}
			});
		} else if (!isReady || (isReady as any)()) {
      return this.lock(options);
		}
	}

  unlock(token?: any) {
    this.free.push(this.useDefaultTokens ? '1' : token ?? this.initTokenFn())
  }

  lock(options?: BinarySemaphoreAcquireOptions) {
    return this.free.pop();
  }

  drain(): Promise<any[]> {
    const a = new Array(this.maxConcurrency);
    for (let i = 0; i < this.maxConcurrency; i++) {
      a[i] = this.acquire();
    }
    return Promise.all(a);
  }
}

/**
 * Creates a rate limiter function that blocks with a promise whenever the rate limit is hit and resolves the promise once the call rate is within the limit set by rps. The second argument is optional.
 *
 * @param rps
 * @param options.timeUnit The `timeUnit` is an optional argument setting the width of the rate limiting window in milliseconds.
 *    The default `timeUnit` is 1000 ms, therefore making the rps argument act as requests per second limit.
 * @param options.uniformDistribution  The `uniformDistribution` argument enforces a discrete uniform distribution over time,
 *    instead of the default that allows hitting the function rps time and then pausing for timeWindow milliseconds. Setting
 *    the `uniformDistribution` option is mainly useful in a situation where the flow of rate limit function calls is continuous
 *    and and occuring faster than timeUnit (e.g. reading a file) and not enabling it would cause the maximum number of calls to
 *    resolve immediately (thus exhaust the limit immediately) and therefore the next bunch calls would need to wait for timeWindow
 *    milliseconds. However if the flow is sparse then this option may make the code run slower with no advantages.
 *
 * Examples:
 *
 * ```ts
 * async function f() {
 *   const lim = RateLimit(5); // rps
 *
 *   for (let i = 0; i < n; i++) {
 *     await lim();
 *     // ... do something async
 *   }
 * }
 * ```
 *
 *
 */
export function RateLimit(
  rps: number,
  {
    timeUnit = 1000,
    uniformDistribution = false,
  }: {
    timeUnit?: number;
    uniformDistribution?: boolean;
  } = {}
) {
  const sema = new Semaphore(uniformDistribution ? 1 : rps);
  const delay = uniformDistribution ? timeUnit / rps : timeUnit;

  return async function rl() {
    await sema.acquire();
    setTimeout(() => sema.release(), delay);
  };
}
