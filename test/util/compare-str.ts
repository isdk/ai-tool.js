export function compareStr(src: Buffer, dest: Buffer) {
  expect(src.length).toBeGreaterThanOrEqual(dest.length)

  for (let i = 0; i < dest.length; i++) {
    if (src[i] !== dest[i]) {
      // console.log('🚀 ~ compareStr ~ src[i]:', i, src[i], dest[i], dest.length)
      return false
    }
  }
  return true
}
