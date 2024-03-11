// @vitest-environment node
import { ToolFunc } from "../src/tool-func"
import { lrucache } from '../src/funcs/lrucache'

ToolFunc.register(lrucache)

describe('tool.lrucache', () => {
  it('should set lrucache options', async() => {
    let result = await ToolFunc.run('lrucache',
      undefined, undefined,
      {capacity: 2, expires:120000, cleanInterval: 0}
    )
    expect(result.maxCapacity).toBe(2)
    expect(result.maxAge).toBe(120000)
    expect(result.cleanInterval).toBe(0)
  })

  it('should get lrucache key', async() => {
    const cache = await ToolFunc.run('lrucache');
    cache.set('key', 'ValueMy')
    let result = await ToolFunc.run('lrucache', 'key')
    expect(result).toBe('ValueMy')
  })

  it('should set lrucache key', async() => {
    await ToolFunc.run('lrucache', 'key2', 'value2')
    expect(ToolFunc.runSync('lrucache', 'key2')).toBe('value2')
  })

  it('should set lrucache key with expires', async() => {
    const cache = await ToolFunc.run('lrucache');
    await ToolFunc.run('lrucache', 'key_expires', 'value2', 1000)
    expect(ToolFunc.runSync('lrucache', 'key2')).toBe('value2')
    await sleep(500)
    expect(cache.isExists('key_expires')).toBeTruthy()
    await sleep(500)
    expect(cache.isExists('key_expires')).toBeFalsy()
  })

  it('should del lrucache key', async() => {
    const cache = ToolFunc.runSync('lrucache');
    await ToolFunc.run('lrucache', 'key2', 'value2')
    expect(ToolFunc.runSync('lrucache', 'key2')).toBe('value2')
    await ToolFunc.run('lrucache', 'key2', null)
    expect(ToolFunc.runSync('lrucache', 'key2')).toBeUndefined()
    expect(cache.isExists('key2')).toBeFalsy()
  })
})

async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

