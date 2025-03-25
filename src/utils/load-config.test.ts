import {expandPath} from './load-config'

describe('load-config', () => {
  it('should expandPath', () => {
    const s = expandPath('$A', {A: 12})
    expect(s).toBe('12')
  })
})