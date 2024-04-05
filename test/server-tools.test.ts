// @vitest-environment node
// import { describe, expect, it } from 'vitest'
import fastify from 'fastify'

import { ServerTools as ToolFunc } from "../src/server-tools"
import { ClientTools } from '../src/client-tools'
import { findPort } from './find-port'

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

describe('server api', () => {
  let apiRoot: string // = 'http://localhost:3000/api'
  const server = fastify()

  beforeAll(async () => {
    const params = {"a": "number", b: "any"}

    ToolFunc.register({
      name: 'test-get',
      params,
      action: 'get',
      func: ({a, b}: {a: number, b: any}) => {
        return a >15 ? b : a
      },
      result: 'number',
    })

    ToolFunc.register({
      name: 'test-post',
      params,
      func: ({a, b}: {a: number, b: any}) => {
        return a >15 ? b : a
      },
      result: 'number',
    })

    server.get('/api', async function(request, reply){
      reply.send(ToolFunc.toJSON())
    })

    server.get('/api/:toolId', async function(request, reply){
      const { toolId } = request.params as any;
      const func = ToolFunc.get(toolId)
      if (!func) {
        reply.code(404).send({error: toolId + ' Not Found'})
      }
      let params: any = (request.query as any).p
      if (params) {
        params = JSON.parse(params)
      } else {
        params = {}
      }
      params._req = request.raw
      params._res = reply.raw

      const result = JSON.stringify(await func.run(params))
      reply.send(result)
      // reply.send({params: request.params as any, query: request.query, url: request.url})
    })

    server.post('/api/:toolId', async function(request, reply){
      const { toolId } = request.params as any;
      const func = ToolFunc.get(toolId)
      if (!func) {
        reply.code(404).send({error: toolId + ' Not Found'})
      }
      let body: any = request.body;
      if (typeof body === 'string') {body = JSON.parse(body)}
      body._req = request.raw
      body._res = reply.raw
      let result = await func.run(body)
      result = JSON.stringify(result)
      reply.send(result)
      // reply.send({params: request.params as any, query: request.query, url: request.url})
    })
    const port = await findPort(3000)
    const result = await server.listen({port})
    console.log('server listening on ', result)
    apiRoot = `http://localhost:${port}/api`

    ToolFunc.apiRoot = apiRoot
    ClientTools.apiRoot = apiRoot
    await ClientTools.loadFrom()
  })

  afterAll(async () => {
    await server.close()
  })

  it('should work on get', async () => {
    const result = ClientTools.get('test-get')
    expect(result).toBeInstanceOf(ClientTools)
    expect(await result.run({a: 10})).toStrictEqual(10)
    expect(await result.run({a: 18, b: 'hi world'})).toStrictEqual('hi world')

    // const res = await fetch(apiRoot + '/test?as=1&toolId=6', {
    // });
    // console.log(await res.json())
  })

  it('should work on post', async () => {
    const result = ClientTools.get('test-post')
    expect(result).toBeInstanceOf(ClientTools)
    expect(await result.run({a: 10})).toStrictEqual(10)
    expect(await result.run({a: 18, b: 5})).toStrictEqual(5)
    expect(await result.run({a: 18, b: 'hi world'})).toStrictEqual('hi world')

    // const res = await fetch(apiRoot + '/test?as=1&toolId=6', {
    // });
    // console.log(await res.json())
  })
});
