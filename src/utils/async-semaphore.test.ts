import { vi } from 'vitest'
import { Semaphore } from './async-semaphore'

test('pendingCount() is sane', async () => {
	const s = new Semaphore(1);

	await s.acquire();
	expect(s.pendingCount()).toEqual(0);

	// This would block with await
	s.acquire().catch(console.error);
	expect(s.pendingCount()).toEqual(1);

	s.release();
	expect(s.pendingCount()).toEqual(0);
	s.release();
	expect(s.pendingCount()).toEqual(0);
});

test('nr of available semas seems correct', async () => {
	const s = new Semaphore(3);

	await s.acquire();
	expect(s.pendingCount()).toEqual(0);

	await s.acquire();
	expect(s.pendingCount()).toEqual(0);

	await s.acquire();
	expect(s.pendingCount()).toEqual(0);
});

test('tryAcquire returns undefined', async () => {
	const s = new Semaphore(2);

	await s.acquire();
	expect(s.tryAcquire()).toBeDefined();
	expect(s.tryAcquire()).toBeUndefined();

	s.release();
	expect(s.tryAcquire()).toBeDefined();
	expect(s.tryAcquire()).toBeUndefined();
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
	expect(tokens).toEqual(expect.arrayContaining([0, 1, 2]));
});
