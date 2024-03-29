import { h64, h32 } from 'xxhashjs';
import * as _base32768 from 'base32768';
import { canonicalize } from 'json-canonicalize';

export const base32768 = _base32768
export * from 'json-canonicalize'

const SEED = 588213;

export function xxhash32(value: string|object, radix= 16) {
  if (typeof value === 'object') {
    value = canonicalize(value);
  }
  return h32(value, SEED).toString(radix);
}

export function xxhash64(value: string|object, radix= 16) {
  if (typeof value === 'object') {
    value = canonicalize(value);
  }
  return h64(value, SEED).toString(radix);
}

export enum XXHashAlgorithm {
  xxhash64 = 111,
  xxhash32 = 112,
}

type HashValue = string|ArrayBuffer|Buffer;

export function xxhash(value: HashValue,
                       hashAlgo = XXHashAlgorithm.xxhash64, seed = SEED): Uint8Array {
  if ((value as any).buffer) value = (value as any).buffer;
  let result;
  if (hashAlgo !== XXHashAlgorithm.xxhash32) {
    result = h64(value, seed);
    result = new Uint16Array([result._a00, result._a16, result._a32, result._a48]);
    result = new Uint8Array(result.buffer);
  } else {
    result = h32(value, seed);
    result = new Uint16Array([result._low, result._high]);
    result = new Uint8Array(result.buffer);
  }
  return result;
}

export function xxhashAsStr(value: string|Uint8Array,
                            hashAlgo = XXHashAlgorithm.xxhash64, seed = SEED): string {
  return _base32768.encode(xxhash(value, hashAlgo, seed));
}
