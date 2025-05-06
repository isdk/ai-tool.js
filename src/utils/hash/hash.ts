import { canonicalize } from 'json-canonicalize';
import * as _base32768 from 'base32768';
import { HashAlgorithm, HASH_ALGOS, SEED } from './const';

import type { IDataType, IHasher } from 'hash-wasm';

export const base32768 = _base32768
export { HashAlgorithm, canonicalize }

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

export async function hash(value: IDataType,
                           {hashAlgo = HashAlgorithm.xxhash64, seed = SEED, outputType = 'string'}: HashAlgoParams = {})
{
  const hash: IHasher = await HASH_ALGOS[hashAlgo](seed);
  hash.init()
  hash.update(value);
  const result: string|Uint8Array = outputType !== 'string'? hash.digest(outputType as any) : _base32768.encode(hash.digest('binary'))
  return result
}

export async function hashObject(value: any, options?: HashAlgoParams) {
  value = canonicalize(value)
  return hash(value, options)
}
