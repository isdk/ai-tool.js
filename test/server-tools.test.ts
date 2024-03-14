// @vitest-environment node
// import { describe, expect, it } from 'vitest'
import fastify from 'fastify'

import { ServerTools as ToolFunc } from "../src/server-tools"
import { ClientTools } from '../src/client-tools'

describe('ServerTools', () => {
  beforeEach(()=>{
    ToolFunc.items = {}
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
    expect(ToolFunc.items['test']).toBeInstanceOf(ToolFunc)
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

})

describe.only('server api', () => {
  const apiRoot = 'http://localhost:3000/api'
  const server = fastify()

  beforeAll(async () => {
    ToolFunc.apiRoot = apiRoot
    const params = {"a": "number", b: "any"}

    ToolFunc.register({
      name: 'test-get',
      params,
      action: 'get',
      func: ({a, b}: {a: number, b: any}) => {
        return a >15 ? b : a
      }
    })

    server.get('/api/:toolId', async function(request, reply){
      const { toolId } = request.params as any;
      const func = ToolFunc.get(toolId)
      console.log('TCL:: ~ server.post ~ func:', toolId, func);
      if (!func) {
        reply.code(404).send({error: toolId + ' Not Found'})
      }
      reply.send(await func.run(request.query))
      // reply.send({params: request.params as any, query: request.query, url: request.url})
    })
    const result = await server.listen({port: 3000})
    console.log('server listening on ', result)
  })

  afterAll(() => {
    server.close()
  })

  it('should work on get', async () => {
    const result = ClientTools.get('test-get')
    expect(result).toBeInstanceOf(ClientTools)
    expect(await result.run({a: 10})).toStrictEqual(10)

    // const res = await fetch(apiRoot + '/test?as=1&toolId=6', {
    // });
    // console.log(await res.json())
  })
});
