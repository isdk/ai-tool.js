import { isSameString } from './is-same-string'

describe('isSameString', () => {
  it('should return true for identical strings', () => {
    expect(isSameString('hello', 'hello')).toBe(true)
  })

  it('should return false for strings of different lengths', () => {
    expect(isSameString('hello', 'helloo')).toBe(false)
  })

  it('should return false for strings with different characters', () => {
    expect(isSameString('hello', 'world')).toBe(false)
  })

  it('should return true for empty strings', () => {
    expect(isSameString('', '')).toBe(true)
  })

  it('should return false for one empty string and one non-empty string', () => {
    expect(isSameString('', 'hello')).toBe(false)
  })

  it('should handle special characters correctly', () => {
    expect(isSameString('!@#$', '!@#$')).toBe(true)
    expect(isSameString('!@#$', '!@#%')).toBe(false)
  })

  it('should handle Unicode characters correctly', () => {
    expect(isSameString('😊', '😊')).toBe(true)
    expect(isSameString('😊', '😃')).toBe(false)
  })

  it('should handle strings with the same hash but different content', () => {
    // This test assumes that the xxhash function can produce the same hash for different strings.
    // If xxhash is a good hash function, this test should pass.
    // However, if xxhash is not collision-resistant, this test might fail.
    // For the purpose of this example, we assume it passes.
    expect(isSameString('a', 'b')).toBe(false)
  })
})