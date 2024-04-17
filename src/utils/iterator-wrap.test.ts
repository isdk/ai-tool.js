import { vi } from 'vitest'
import { asyncFromSync, asyncWrap, iteratorWrap } from "./iterator-wrap"

async function asyncToArray<T>(it: AsyncIterable<T>): Promise<T[]> {
	const ret: T[] = []
	for await (const x of it) {
		ret.push(x)
	}
	return ret
}

describe("asyncFromSync", () => {
	test("asyncFromSync calls finally", async () => {
		expect.assertions(2)
		const isCalledOnce = vi.fn()
		await expect(
			asyncToArray(
				asyncFromSync(
					(function* () {
						try {
							yield 2
							yield 4
							yield Promise.reject(new Error("42"))
						} finally {
							isCalledOnce()
						}
					})(),
				),
			),
		).rejects.toThrow("42")
		expect(isCalledOnce).toHaveBeenCalledTimes(1)
	})

	test("asyncFromSync waits for return", async () => {
		expect.assertions(1)
		await expect(
			asyncToArray(
				asyncFromSync(
					(function* () {
						yield 2
						yield 4
						return Promise.reject(new Error("42"))
					})(),
				),
			),
		).rejects.toThrow("42")
	})
})

describe("asyncWrap", () => {
	test("asyncWrap calls finally", async () => {
		expect.assertions(2)
		const isCalledOnce = vi.fn()
		await expect(
			asyncToArray(
				asyncWrap(
					(function* () {
						try {
							yield 2
							yield 4
							yield Promise.reject(new Error("42"))
						} finally {
							isCalledOnce()
						}
					})(),
				),
			),
		).rejects.toThrow("42")
		expect(isCalledOnce).toHaveBeenCalledTimes(1)
	})

	test("asyncWrap waits for return", async () => {
		expect.assertions(1)
		await expect(
			asyncToArray(
				asyncWrap(
					(function* () {
						yield 2
						yield 4
						return Promise.reject(new Error("42"))
					})(),
				),
			),
		).rejects.toThrow("42")
	})

	test("asyncWrap does not change async iterator", async () => {
		const async = (async function* () {})()
		expect(asyncWrap(async)).toBe(async)
	})
})

describe("iteratorWrap", () => {
	test("iteratorWrap calls finally", async () => {
		expect.assertions(2)
		const isCalledOnce = vi.fn()
		await expect(
			asyncToArray(
				(iteratorWrap as any)(
					(function* () {
						try {
							yield 2
							yield 4
							yield Promise.reject(new Error("42"))
						} finally {
							isCalledOnce()
						}
					})(),
				),
			),
		).rejects.toThrow("42")
		expect(isCalledOnce).toHaveBeenCalledTimes(1)
	})

	test("iteratorWrap waits for return", async () => {
		expect.assertions(1)
		await expect(
			asyncToArray(
				(iteratorWrap as any)(
					(function* () {
						yield 2
						yield 4
						return Promise.reject(new Error("42"))
					})(),
				),
			),
		).rejects.toThrow("42")
	})

	test("iteratorWrap does not change async iterator", async () => {
		const async = (async function* () {})()
		expect(asyncWrap(async)).toBe(async)
	})
})