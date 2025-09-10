import { v1 as uuidv1, v5 as uuidv5, v4 as uuidv4, v6 as uuidv6, v7 as uuidv7 } from 'uuid';
import * as base32768 from 'base32768';

export {v1 as uuidv1,v4 as uuidv4, v5 as uuidv5, v6 as uuidv6, v7 as uuidv7, stringify as uuidStringify, parse as uuidParse, validate as uuidValidate, version as uuidVersion, NIL as uuidNIL } from 'uuid'

const uuids = {1: uuidv1, 4: uuidv4, 5: uuidv5, 6: uuidv6, 7: uuidv7};

export type UUIDVersions = keyof typeof uuids;

/**
 * Generates a UUID (Universally Unique Identifier) based on the specified version and encoding options.
 *
 * @param encode - Whether to encode the generated UUID using Base32768 encoding. Defaults to `false`.
 *
 * @returns A string representing the generated UUID. If `encode` is `true`, the UUID will be encoded in Base32768 format.
 *
 * @example
 * // Generate an encoded UUID version 1 using Base32768
 * const encodedUuid1 = uuid(true);
 */
export function uuid(encode?: boolean): string;

/**
 * Generates a UUID (Universally Unique Identifier) based on the specified version and encoding options.
 *
 * @param ver - The version of the UUID to generate. Accepts values `1`, `4`, `5`, `6`, or `7`.
 *              If not provided or invalid, defaults to `1`.
 *              If `true` is passed, it enables encoding (`encode` is set to `true`).
 * @param encode - Whether to encode the generated UUID using Base32768 encoding. Defaults to `false`.
 *
 * @returns A string representing the generated UUID. If `encode` is `true`, the UUID will be encoded in Base32768 format.
 *
 * @example
 * // Generate a standard UUID version 4
 * const uuid4 = uuid(4);
 *
 * @example
 * // Generate an encoded UUID version 1 using Base32768
 * const encodedUuid1 = uuid(1, true);
 */
export function uuid(ver?: UUIDVersions|boolean, encode?: boolean): string {
  if (ver === true) {
    encode = true;
  }
  if (typeof ver !== 'number' || !uuids[ver]) {ver = 1}

  const exec = uuids[ver] as Function;
  return encode ? base32768.encode(exec(null, new Uint8Array(16))) : exec();
}
