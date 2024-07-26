import {EventEmitter} from 'events-ex';

// async-sema Released under MIT
// https://github.com/vercel/async-sema/blob/main/src/index.ts

export const DefaultAsyncSemaphoreCapacity = 32;

function arrayMove(
	src: any[],
	srcIndex: number,
	dst: any[],
	dstIndex: number,
	len: number
) {
	for (let j = 0; j < len; ++j) {
		dst[j + dstIndex] = src[j + srcIndex];
		src[j + srcIndex] = undefined;
	}
}

function pow2AtLeast(n: number) {
	n = n >>> 0;
	n = n - 1;
	n = n | (n >> 1);
	n = n | (n >> 2);
	n = n | (n >> 4);
	n = n | (n >> 8);
	n = n | (n >> 16);
	return n + 1;
}

function getCapacity(capacity: number) {
	return pow2AtLeast(Math.min(Math.max(16, capacity), 1073741824));
}

// Deque is based on https://github.com/petkaantonov/deque/blob/master/js/deque.js
// Released under the MIT License: https://github.com/petkaantonov/deque/blob/6ef4b6400ad3ba82853fdcc6531a38eb4f78c18c/LICENSE
class Deque {
	private _capacity: number;
	private _length: number;
	private _front: number;
	private arr: Array<any>;

	constructor(capacity: number) {
		this._capacity = getCapacity(capacity);
		this._length = 0;
		this._front = 0;
		this.arr = [];
	}

	push(item: any): number {
		const length = this._length;

		this.checkCapacity(length + 1);
		const i = (this._front + length) & (this._capacity - 1);
		this.arr[i] = item;
		this._length = length + 1;

		return i;
	}

	pop() {
		const length = this._length;
		if (length === 0) {
			return undefined;
		}
		const i = (this._front + length - 1) & (this._capacity - 1);
		const ret = this.arr[i];
		this.arr[i] = undefined;
		this._length = length - 1;

		return ret;
	}

	shift() {
		const length = this._length;
		if (length === 0) {
			return undefined;
		}
		const front = this._front;
		const ret = this.arr[front];
		this.arr[front] = undefined;
		this._front = (front + 1) & (this._capacity - 1);
		this._length = length - 1;

		return ret;
	}

	get length(): number {
		return this._length;
	}

	private checkCapacity(size: number) {
		if (this._capacity < size) {
			this.resizeTo(getCapacity(this._capacity * 1.5 + 16));
		}
	}

	private resizeTo(capacity: number) {
		const oldCapacity = this._capacity;
		this._capacity = capacity;
		const front = this._front;
		const length = this._length;
		if (front + length > oldCapacity) {
			const moveItemsCount = (front + length) & (oldCapacity - 1);
			arrayMove(this.arr, 0, this.arr, oldCapacity, moveItemsCount);
		}
	}
}

class ReleaseEmitter extends EventEmitter {}

function isFn(x: any) {
	return typeof x === 'function';
}

function defaultInit() {
	return '1';
}

/**
 * A Semaphore implementation for managing concurrency in asynchronous operations.
 * Semaphores allow a fixed number of resources to be accessed concurrently.
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
export class Semaphore {
	readonly maxConcurrency: number;
	readonly waiting: Deque;
	private free: Deque;
	private releaseEmitter: EventEmitter;
	private useDefaultTokens: boolean;
	private pauseFn?: () => void;
	private resumeFn?: () => void;
	private paused: boolean;

	/**
   * Creates a semaphore object. The first argument is the maximum concurrently number and the second argument is optional.
   *
   * @param maxConcurrency The maximum number of callers allowed to acquire the semaphore concurrently.
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
   * const s = new Semaphore(5, { pauseFn: pause, resumeFn: resume });
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
		maxConcurrency: number,
		{
			initFn = defaultInit,
			pauseFn,
			resumeFn,
			capacity = DefaultAsyncSemaphoreCapacity,
		}: {
			initFn?: () => any;
			pauseFn?: () => void;
			resumeFn?: () => void;
			capacity?: number;
		} = {}
	) {
		if (isFn(pauseFn) !== isFn(resumeFn)) {
			throw new Error(
				'pauseFn and resumeFn must be both set for pausing'
			);
		}

		this.maxConcurrency = maxConcurrency;
		this.free = new Deque(maxConcurrency);
		this.waiting = new Deque(capacity);
		this.releaseEmitter = new ReleaseEmitter();
		this.useDefaultTokens = initFn === defaultInit;
		this.pauseFn = pauseFn;
		this.resumeFn = resumeFn;
		this.paused = false;

		this.releaseEmitter.on('release', (token) => {
			const p = this.waiting.shift();
			if (p) {
				p.resolve(token);
			} else {
				if (this.resumeFn && this.paused) {
					this.paused = false;
					this.resumeFn();
				}

				this.free.push(token);
			}
		});

		for (let i = 0; i < maxConcurrency; i++) {
			this.free.push(initFn());
		}
	}

	/**
   * Attempt to acquire a token from the semaphore, if one is available immediately. Otherwise, return undefined.
   */
	tryAcquire(): any | undefined {
		return this.free.pop();
	}

  /**
   * Acquire a token from the semaphore, thus decrement the number of available execution slots. If initFn is not used then the return value of the function can be discarded.
   */
  acquire(signal?: AbortSignal): Promise<any> {
		let token = this.tryAcquire();

		if (token !== undefined) {
			return Promise.resolve(token);
		}

		return new Promise((resolve, reject) => {
			if (this.pauseFn && !this.paused) {
				this.paused = true;
				this.pauseFn();
			}

			const index = this.waiting.push({ resolve, reject });
			if (signal) {
				signal.addEventListener('abort', () => {
					this.waiting[index] = undefined;
					const reason = signal.reason instanceof Error ? signal.reason : new Error(signal.reason || 'aborted');
					(signal as any).alreadyRejected = true;
					reject(reason);
				});
			}
			return index
		});
	}

	/**
   * Release the semaphore, thus increment the number of free execution slots. If initFn is used then the token returned by acquire() should be given as an argument when calling this function.
   */
  release(token?: any): void {
		this.releaseEmitter.emit('release', this.useDefaultTokens ? '1' : token);
	}

	/**
   * Drains the semaphore and returns all the initialized tokens in an array. Draining is an ideal way to ensure there are no pending async tasks, for example before a process will terminate.
   */
  drain(): Promise<any[]> {
		const a = new Array(this.maxConcurrency);
		for (let i = 0; i < this.maxConcurrency; i++) {
			a[i] = this.acquire();
		}
		return Promise.all(a);
	}

	/**
   * Returns the number of callers waiting on the semaphore, i.e. the number of pending promises.
   *
   * @returns The number of waiters in the waiting list.
   */
  pendingCount(): number {
		return this.waiting.length;
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