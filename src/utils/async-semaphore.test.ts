import { vi } from 'vitest'
import { EventEmitter } from './event'
import { wait } from './wait'
import { BinarySemaphore, Semaphore } from './async-semaphore'
import { AbortError } from '@isdk/common-error';

describe('BinarySemaphore', () => {
  test('acquire and release work correctly', async () => {
    const s = new BinarySemaphore({ capacity: 10 });

    const release1 = await s.acquire();
    expect(s.pendingCount()).toEqual(0);

    s.acquire().catch(console.error);
    expect(s.pendingCount()).toEqual(1);

    release1();

    expect(s.pendingCount()).toEqual(0);

    s.release();
    expect(s.pendingCount()).toEqual(0);
  });

  test('tryAcquire returns undefined when no tokens are available', async () => {
    const s = new BinarySemaphore({ capacity: 1 });

    const release = await s.acquire();
    expect(s.tryAcquire()).toBeUndefined();

    release();
    expect(s.tryAcquire()).toBeDefined();
  });

  test('pendingCount returns the correct number of pending tasks', async () => {
    const s = new BinarySemaphore({ capacity: 1 });

    await s.acquire();
    expect(s.pendingCount()).toEqual(0);

    s.acquire().catch(console.error);
    expect(s.pendingCount()).toEqual(1);

    s.release();
    expect(s.pendingCount()).toEqual(0);
  });

  test('concurrent acquire and release work correctly', async () => {
    const s = new BinarySemaphore({ capacity: 2 });

    const promises = [
      s.acquire(),
      s.acquire(),
      s.acquire().catch(console.error),
      s.acquire().catch(console.error),
    ];

    expect(s.pendingCount()).toEqual(3);
    expect(s.activeCount).toEqual(4);

    setTimeout(async () => {
      await Promise.all(promises);
    }, 0);

    s.release();
    expect(s.pendingCount()).toEqual(2);
    expect(s.activeCount).toEqual(3);

    s.release();
    expect(s.pendingCount()).toEqual(1);
    expect(s.activeCount).toEqual(2);

    s.release();
    expect(s.pendingCount()).toEqual(0);
    expect(s.activeCount).toEqual(1);
  });

  test('pauseFn and resumeFn are called correctly', () => {
    const pauseFn = vi.fn();
    const resumeFn = vi.fn();
    const s = new BinarySemaphore({ capacity: 1, pauseFn, resumeFn });

    s.acquire().catch(console.error);
    // caall pauseFn when waitting
    expect(pauseFn).not.toHaveBeenCalled();
    expect(resumeFn).not.toHaveBeenCalled();

    s.acquire().catch(console.error);
    expect(pauseFn).toHaveBeenCalled();
    expect(resumeFn).not.toHaveBeenCalled();

    s.release();
    s.release();
    // after all waiting task is done, call resumeFn
    expect(resumeFn).toHaveBeenCalled();
  });

  test('initFn is called properly', () => {
    const initFn = vi.fn(() => 't');
    const s = new BinarySemaphore({ capacity: 3, initFn });

    expect(initFn).toHaveReturnedTimes(1);
  });

  test('AbortSignal is handled correctly', async () => {
    const s = new BinarySemaphore({ capacity: 1 });

    const abortController = new AbortController();
    const signal = abortController.signal;

    s.acquire().catch(console.error);
    const promise = s.acquire({ signal });

    abortController.abort('Test abort');

    await expect(promise).rejects.toThrow('Test abort');
    expect(s.pendingCount()).toEqual(1);
    s.release();
    expect(s.pendingCount()).toEqual(0);
  });

  test('abort method clears all pending tasks', async () => {
    const s = new BinarySemaphore({ capacity: 1 });

    const promises = [
      s.acquire().catch(error => error),
      s.acquire().catch(error => error),
      s.acquire().catch(error => error),
    ];

    expect(s.pendingCount()).toEqual(2);
    expect(s.activeCount).toEqual(3);

    s.abort('Test abort');

    const results = await Promise.all(promises);
    expect(results[0]).toBeInstanceOf(Function);
    expect(results[0].token).toBe('1');
    results.slice(1).forEach(result => {
      expect(result).toBeInstanceOf(AbortError);
      expect(result.message).toMatch(/Test abort/);
    });
    expect(s.pendingCount()).toEqual(0);
    expect(s.activeCount).toEqual(3);
    s.release();
    expect(s.activeCount).toEqual(2);
  });

  test('drain method returns all initialized tokens', async () => {
    const s = new BinarySemaphore({ capacity: 3 });

    const tokens = await s.drain();
    expect(tokens[0]).toBeInstanceOf(Function);
    expect(tokens[0].token).toBe('1');
    // expect(tokens.every(t => typeof t === 'function')).toBe(true);
  });

  test('release without token works correctly', async () => {
    const s = new BinarySemaphore({ capacity: 1 });

    await s.acquire();
    s.release();

    const token = await s.acquire();
    expect(token).toBeDefined();
  });

  test('release with token works correctly', async () => {
    const s = new BinarySemaphore({ capacity: 1 });

    const token = await s.acquire();
    s.release({ token });

    const newToken = await s.acquire();
    expect(newToken).toBeDefined();
  });
});

describe('Semaphore', () => {

  test('pendingCount() is sane', async () => {
    const s = new Semaphore(1);

    await s.acquire();
    expect(s.pendingCount()).toEqual(0);
    expect(s.activeCount).toEqual(1);

    // This would block with await
    s.acquire().catch(console.error);
    expect(s.pendingCount()).toEqual(1);
    expect(s.activeCount).toEqual(2);

    s.release();
    expect(s.pendingCount()).toEqual(0);
    expect(s.activeCount).toEqual(1);
    s.release();
    expect(s.pendingCount()).toEqual(0);
    expect(s.activeCount).toEqual(0);
  });

  test('nr of available semas seems correct', async () => {
    const s = new Semaphore(3);

    await s.acquire();
    expect(s.pendingCount()).toEqual(0);
    expect(s.activeCount).toEqual(1);

    await s.acquire();
    expect(s.pendingCount()).toEqual(0);
    expect(s.activeCount).toEqual(2);

    await s.acquire();
    expect(s.pendingCount()).toEqual(0);
    expect(s.activeCount).toEqual(3);
  });

  test('tryAcquire returns undefined', async () => {
    const s = new Semaphore(2);

    await s.acquire();
    expect(await s.tryAcquire()).toBeDefined();
    expect(await s.tryAcquire()).toBeUndefined();

    s.release();
    expect(await s.tryAcquire()).toBeDefined();
    expect(await s.tryAcquire()).toBeUndefined();
  });

  test('Pausing works', () => {
    const pauseFn = vi.fn();
    const resumeFn = vi.fn();
    const s = new Semaphore(5, { pauseFn, resumeFn });

    for (let i = 0; i < 5; i++) {
      s.acquire().catch(console.error);
    }

    expect(pauseFn).not.toHaveBeenCalled();
    expect(resumeFn).not.toHaveBeenCalled();

    s.acquire().catch(console.error);
    expect(pauseFn).toHaveBeenCalled();
    s.release();
    s.release();
    expect(resumeFn).toHaveBeenCalled();
  });

  test('initFn is called properly', () => {
    const initFn = vi.fn(() => 't');
    new Semaphore(3, { initFn });

    expect(initFn).toHaveReturnedTimes(3);
  });

  test('Tokens are returned properly', async () => {
    let nrTokens = 0;
    const s = new Semaphore(3, {
      initFn: () => nrTokens++,
    });

    const tokens = await Promise.all([s.acquire(), s.acquire(), s.acquire()]);
    // expect tokens are functions
    expect(tokens.every(t => typeof t === 'function')).toBe(true);
    expect(tokens).toHaveLength(3);
    // expect tokens have property token: 0,1,2
    expect(tokens.map(t => t.token)).toEqual(expect.arrayContaining([0, 1, 2]))
  });

  test('isReadyFn async', async () => {
    let ready = false;
    let called = 0;

    const isReadyFn = async () => {
      called++;
      let maxCount = 100;
      while (!ready && maxCount--) {
        await wait(5)
      }
      return true;
    }
    const s = new Semaphore(1, {
      isReadyFn,
    });
    // setTimeout(() => {
    // 	ready = true;
    // }, 100);
    s.acquire().catch(console.error);
    expect(s.pendingCount()).toEqual(0);
    expect(s.activeCount).toEqual(1);
    expect(called).toEqual(1);
    ready = true;
    await wait(10)
    expect(s.pendingCount()).toEqual(0);
  })

  test('isReadyFn async when maxConcurrency=0', async () => {
    let ready = false;
    let called = 0;

    const isReadyFn: any = new Promise<boolean>((resolve, reject) => {
    	called++;
    	if (ready) {resolve(ready)}
    	const timeId = setInterval(() => {
    		if (ready) {
    			clearInterval(timeId);
    			resolve(true);
    		}
    	}, 1);
    });
    const s = new Semaphore({
      maxConcurrency: 0,
      isReadyFn,
    });
    // setTimeout(() => {
    // 	ready = true;
    // }, 100);
    s.acquire().catch(console.error);
    expect(s.pendingCount()).toEqual(0);
    expect(s.activeCount).toEqual(1);
    expect(called).toEqual(1);
    ready = true;
    await wait(10)
    expect(s.pendingCount()).toEqual(0);
  })

});
