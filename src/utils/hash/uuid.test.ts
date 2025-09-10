import * as base32768 from 'base32768';

import { uuid, uuidValidate, uuidStringify } from './uuid'

describe("uuid", () => {
  it("should gen uuid", () => {
    let result = uuid()
    expect(result).toBeDefined()
    expect(result).toHaveLength(36)
    expect(uuidValidate(result)).toBe(true)
  })

  it("should gen uuid with encoding", () => {
    let result = uuid(true)
    expect(result).toBeDefined()
    const uuidStr = uuidStringify(base32768.decode(result))
    expect(uuidStr).toHaveLength(36)
    expect(uuidValidate(uuidStr)).toBe(true)
  })
})