import _memoize, {type Options} from 'memoizee'
import { xxhashAsStr } from './hash'
import { canonicalize } from 'json-canonicalize'

// export interface IMemoizeFnOptions {
//   // Whether to memoize the function
//   memoize?: boolean
//   // Memoizing asynchronous function
//   // promise?: boolean | "then" | "done" | "done:finally"
//   // the object instance for method call
//   this?: any
// }

export function memoize<F extends (...args: any[]) => any>(fn: any, options?: Options<F>) {
  if (options?.promise === undefined && (isAsyncFunction(fn) || isPromise(fn))) {
    options = {promise: true, ...options}
  }

  if (options?.length === undefined) {
    // defaults to Dynamic arguments length
    options = {length: false, ...options}

  }
  const normalizer = options?.normalizer

  return _memoize<F>(fn, {
    normalizer: (args) => {
      if (normalizer) {
        const s = normalizer(args);
        if (s !== 'string') {
          if (s) args = s as any
        } else {
          return s
        }
      }
      return xxhashAsStr(canonicalize(args));
    },
    ...options
  })
}

function isPromise(value: any) {
  return (
    value &&
    (typeof value === 'object' || typeof value === 'function') &&
    typeof value.then === 'function'
  );
}

function isAsyncFunction(fn: any) {
  return typeof fn === 'function' && fn.constructor.name === 'AsyncFunction';
}
