import { uuid, uuidValidate } from './uuid'

describe("uuid", () => {
  it("should gen uuid", () => {
    let result = uuid()
    expect(result).toBeDefined()
    expect(result).toHaveLength(36)
    expect(uuidValidate(result)).toBe(true)
  })
})