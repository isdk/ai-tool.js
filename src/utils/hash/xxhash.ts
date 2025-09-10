import _xxhashjs from 'xxhashjs';
import * as _base32768 from 'base32768';
import { canonicalize } from 'json-canonicalize';
import { HashAlgorithm, SEED } from './const';

const {h32,h64} = _xxhashjs;

export function xxhash32(value: string|object, radix= 16) {
  if (typeof value === 'object') {
    value = canonicalize(value);
  }
  return h32(value.normalize(), SEED).toString(radix);
}

export function xxhash64(value: string|object, radix= 16) {
  if (typeof value === 'object') {
    value = canonicalize(value);
  }
  return h64(value.normalize(), SEED).toString(radix);
}

type HashValue = string|ArrayBuffer|Buffer;

export function xxhash(value: HashValue,
                       hashAlgo = HashAlgorithm.xxhash64, seed = SEED): Uint8Array {
  if ((value as any).buffer) value = (value as any).buffer;
  let result: any;
  if (hashAlgo !== HashAlgorithm.xxhash32) {
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
                            hashAlgo = HashAlgorithm.xxhash64, seed = SEED): string {
  return _base32768.encode(xxhash(value as any, hashAlgo, seed));
}
