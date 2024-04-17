// extract from https://github.com/vadzim/async-from-sync

export async function* asyncFromSync<T>(iterable: Iterable<PromiseLike<T> | T>): AsyncGenerator<T> {
	const it = iterable[Symbol.iterator]()
	let needToClose
	try {
		for (;;) {
			needToClose = false
			const rec = it.next()
			needToClose = true
			if (rec.done) {
				needToClose = false
				return await rec.value
			}
			yield await rec.value
		}
	} finally {
		if (needToClose) {
			await it.return?.().value
		}
	}
}

export function asyncWrap<T>(iterable: Iterable<PromiseLike<T> | T> | AsyncIterable<T>): AsyncIterable<T> {
	return isIterable(iterable) ? asyncFromSync(iterable) : iterable
}

export function isAsyncIterable<T = any>(value: object): value is AsyncIterable<T> {
  return !!value && typeof (value as AsyncIterable<T>)[Symbol.asyncIterator] === 'function'
}

export function isIterable<T = any>(value: object): value is Iterable<T> {
	return !!value && typeof (value as Iterable<T>)[Symbol.iterator] === "function"
}

export function iteratorWrap<T>(
	iterable: Iterable<PromiseLike<T> | T> | AsyncIterable<T>,
): Iterable<PromiseLike<T> | T> | AsyncIterable<T> {
	// istanbul ignore next
	return engineValid ? iterable : asyncWrap(iterable)
}

let engineValid = false

isEngineValid().then(valid => {
	engineValid = valid
})

async function isEngineValid() {
	let finallyCalled = false
	let catchCalled = false
	try {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		for await (const _x of (function* () {
			try {
				yield Promise.reject()
			} finally {
				// istanbul ignore next
				finallyCalled = true
			}
		})()) {
			// istanbul ignore next
			throw new Error("impossible")
		}
	} catch {
		catchCalled = true
	}
	return catchCalled && finallyCalled
}
