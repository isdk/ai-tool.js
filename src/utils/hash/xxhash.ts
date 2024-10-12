import { createXXHash32, createXXHash64 } from 'hash-wasm';
import _xxhashjs from 'xxhashjs';
import * as _base32768 from 'base32768';
import { canonicalize } from 'json-canonicalize';

export const base32768 = _base32768
export { canonicalize }

const {h32,h64} = _xxhashjs;
const SEED = 588213;

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

export enum HashAlgorithm {
  xxhash64 = 111,
  xxhash32 = 112,
}

const HASH_ALGOS = {
  [HashAlgorithm.xxhash32]: createXXHash32,
  [HashAlgorithm.xxhash64]: createXXHash64,
};

type HashValue = string|ArrayBuffer|Buffer;

export function xxhash(value: HashValue,
                       hashAlgo = HashAlgorithm.xxhash64, seed = SEED): Uint8Array {
  if ((value as any).buffer) value = (value as any).buffer;
  let result;
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
  return _base32768.encode(xxhash(value, hashAlgo, seed));
}

export interface HashAlgoParams {
  hashAlgo?: HashAlgorithm;
  seed?: number;
  outputType?: 'hex'|'binary'|'string';
}

export async function hashStream(stream: ReadableStream,
                               {hashAlgo = HashAlgorithm.xxhash64, seed = SEED, outputType = 'string'}: HashAlgoParams = {})
{
  const hash = await HASH_ALGOS[hashAlgo](seed);
  hash.init()
  const reader = stream.getReader();
  while (true) {
    const {done, value} = await reader.read();
    if (done) break;
    hash.update(value);
  }
  const result: string|Uint8Array = outputType !== 'string' ? hash.digest(outputType as any) : _base32768.encode(hash.digest('binary'))
  return result
}
