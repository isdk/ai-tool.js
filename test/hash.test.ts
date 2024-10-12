import { xxhash, uuid, HashAlgorithm, xxhashAsStr, base32768, uuidValidate } from '../src/utils'

describe("hash", () => {
  it("should hash a string", () => {
    // Arrange
    const input = "hello world"
    let result = xxhash(input)
    expect(result).toBeInstanceOf(Uint8Array)
    expect(result.length).toBe(8)
    expect(xxhash(input)).toStrictEqual(result)
    expect(xxhashAsStr(input)).toStrictEqual(base32768.encode(result))
    expect(xxhash("hello worldx")).not.toStrictEqual(result)
    result = xxhash(input, HashAlgorithm.xxhash32)
    expect(result).toBeInstanceOf(Uint8Array)
    expect(result.length).toBe(4)
    expect(xxhash(input, HashAlgorithm.xxhash32)).toStrictEqual(result)
    expect(xxhashAsStr(input, HashAlgorithm.xxhash32)).toStrictEqual(base32768.encode(result))
    expect(xxhash("hello worldx", HashAlgorithm.xxhash32)).not.toStrictEqual(result)
  })
})

describe("uuid", () => {
  it("should gen uuid", () => {
    let result = uuid()
    expect(result).toBeDefined()
    expect(result).toHaveLength(36)
    expect(uuidValidate(result)).toBe(true)
  })
})