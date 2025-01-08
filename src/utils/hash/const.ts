import { createMD5, createRIPEMD160, createSHA1, createSHA224, createSHA256, createSHA512, createXXHash128, createXXHash32, createXXHash64 } from 'hash-wasm';

export const SEED = 588213;

export enum HashAlgorithm {
  md5     = 1,
  sha1    = 2,
  ripemd  = 3,
  sha256  = 8,
  sha384  = 9,
  sha512  = 10,
  sha224  = 11,
  xxhash  = 111,
  xxhash64= 111,
  xxhash32= 112,
  xxhash128= 113,
}

export const HASH_ALGOS = {
  [HashAlgorithm.md5]: createMD5,
  [HashAlgorithm.sha1]: createSHA1,
  [HashAlgorithm.sha256]: createSHA256,
  [HashAlgorithm.sha512]: createSHA512,
  [HashAlgorithm.sha224]: createSHA224,
  [HashAlgorithm.ripemd]: createRIPEMD160,
  [HashAlgorithm.xxhash32]: createXXHash32,
  [HashAlgorithm.xxhash64]: createXXHash64,
  [HashAlgorithm.xxhash128]: createXXHash128,
};

