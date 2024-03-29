import { v1 as uuidv1, v5 as uuidv5, v4 as uuidv4 } from 'uuid';
import * as base32768 from 'base32768';

export {v1 as uuidv1,v4 as uuidv4, v5 as uuidv5, stringify as uuidStringify, parse as uuidParse, validate as uuidValidate, version as uuidVersion, NIL as uuidNIL } from 'uuid'

const uuids = {1: uuidv1, 4: uuidv4, 5: uuidv5};

export function uuid(ver: 1|4|5 = 1, encode?: boolean): string {
  const exec = uuids[ver] as Function;
  return encode ? base32768.encode(exec(null, [])) : exec();
}

