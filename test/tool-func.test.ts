// @vitest-environment node
// import { describe, expect, it } from 'vitest'

import { ToolFunc } from "../src/tool-func"

describe('ToolFunc', () => {
  beforeEach(()=>{
    for (const n of Object.keys(ToolFunc.items)) {
      delete ToolFunc.items[n]
    }
  })

  it('should register a func with alias', async () => {
    const params = {"a": "any", b: "any"}
    ToolFunc.register({
      name: 'test',
      params,
      func: ({a, b}: {a: any, b: any}) => {
        return a >15 ? b : a
      },
      alias: ['test2', 'test3']
    })
    check(ToolFunc.get('test'))
    check(ToolFunc.get('test2'))
    check(ToolFunc.get('test3'))
    ToolFunc.unregister('test')

    function check(result: ToolFunc) {
      expect(result).toBeInstanceOf(ToolFunc)
      expect(result.name).toBe('test')
      expect(result.params).toStrictEqual(params)
      expect(result.func).toBeInstanceOf(Function)
    }
  })

  it('should register a func with named params', async () => {
    const params = {"a": "any", b: "any"}
    ToolFunc.register({
      name: 'test',
      params,
      func: ({a, b}: {a: any, b: any}) => {
        return a >15 ? b : a
      }
    })
    const result = ToolFunc.get('test')
    expect(result).toBeInstanceOf(ToolFunc)
    expect(result.name).toBe('test')
    expect(result.params).toStrictEqual(params)
    expect(result.func).toBeInstanceOf(Function)

    expect(result.runWithPosSync(1)).toStrictEqual(1)
    expect(await result.runWithPos(12)).toStrictEqual(12)
    expect(await result.runWithPos(118, 6)).toStrictEqual(6)

    expect(result.runWithPosSync({"a": 1})).toStrictEqual(1)
    expect(await result.runWithPos({"a": 12})).toStrictEqual(12)
    expect(await result.runWithPos({"a": 118, b:6})).toStrictEqual(6)

    expect(result.runSync({"a": 1})).toStrictEqual(1)
    expect(await result.run({"a": 12})).toStrictEqual(12)
    expect(await result.run({"a": 118, b:6})).toStrictEqual(6)

    expect(result.runAsSync('test', {"a": 1, "b": 2})).toStrictEqual(1)
    expect(await result.runWithPosAs('test', 118, 6)).toStrictEqual(6)
    expect(await result.runWithPosAs('test', {"a": 118, b:6})).toStrictEqual(6)

    let fn = result.getFuncWithPos()
    expect(fn(118,6)).toStrictEqual(6)
    expect(fn({"a": 1})).toStrictEqual(1)

    fn = result.getFunc()
    expect(fn({"a": 118, b:6})).toStrictEqual(6)
    expect(fn({"a": 1})).toStrictEqual(1)
    expect(()=>fn([1])).toThrow('the function is not support array params')
    ToolFunc.unregister('test')
  })

  it('should register a func with position params', async () => {
    const params = [{name: "a", type: "any"}, {name: "b", type: "any"}]
    ToolFunc.register({
      name: 'test',
      params,
      func: (a:any, b:any) => {
        return a >15 ? b : a
      }
    })
    const result = ToolFunc.get('test')
    expect(result).toBeInstanceOf(ToolFunc)
    expect(result.name).toBe('test')
    expect(result.params).toStrictEqual(params)
    expect(result.func).toBeInstanceOf(Function)

    expect(result.runWithPosSync(1)).toStrictEqual(1)
    expect(await result.runWithPos(12)).toStrictEqual(12)
    expect(await result.runWithPos(118, 6)).toStrictEqual(6)

    expect(result.runSync({"a": 1})).toStrictEqual(1)
    expect(await result.run({"a": 12})).toStrictEqual(12)
    expect(await result.run({"a": 118, b:6})).toStrictEqual(6)

    expect(result.runAsSync('test', {"a": 1, "b": 2})).toStrictEqual(1)
    expect(await result.runAs('test', {"a": 118, b:6})).toStrictEqual(6)
    expect(await result.runWithPosAs('test', 118, 6)).toStrictEqual(6)

    let fn = result.getFuncWithPos()
    expect(fn(118,6)).toStrictEqual(6)

    fn = result.getFunc()
    expect(fn({"a": 118, b:6})).toStrictEqual(6)
    expect(fn({"a": 1})).toStrictEqual(1)
    expect(fn([1])).toStrictEqual(1)

    ToolFunc.unregister('test')
  })

  it('should get ByTag', async () => {
    // const params = {"a": "any", b: "any"}
    registerFuncs(3)
    const result = ToolFunc.getByTag('tag2')
    expect(result).toBeInstanceOf(ToolFunc)
    expect(result).toHaveProperty('name', 'name2')
  })

  it('should get all ByTag', async () => {
    // const params = {"a": "any", b: "any"}
    registerFuncs(3)
    const result = ToolFunc.getAllByTag('tag0')
    expect(result).toBeInstanceOf(Array)
    expect(result.map(it=>it.name)).toEqual(['name0', 'name'])
  })
})

function registerFuncs(count = 3,name='name', tag='tag', options = {}) {
  for(let i=0; i<count;i++) {
    ToolFunc.register({
      ...options,
      name: name+i,
      tags: tag+i,
    })
  }
  ToolFunc.register({
    ...options,
    name: name,
    tags: [tag, tag + 0],
  })
}