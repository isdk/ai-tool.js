// @vitest-environment node
// import { describe, expect, it } from 'vitest'
import { Funcs, ToolFunc } from '../src/tool-func'
import { ServerTools } from "../src/server-tools"
import { ClientTools } from '../src/client-tools'
import { findPort } from '../src/utils/find-port'
import { HttpClientToolTransport, HttpServerToolTransport } from '../src/transports'

describe('ServerTools', () => {
  beforeEach(()=>{
    // ServerTools.items = {}
    ToolFunc.items = {}
  })

  it('should visit func which registered on ToolFunc', async () => {
    const params = {"a": "any", b: "any"}
    ToolFunc.register({
      name: 'testCli',
      params,
      func: ({a, b}: {a: any, b: any}) => {
        return a >15 ? b : a
      }
    })
    ServerTools.register({
      name: 'testServer',
      params,
      func: ({a, b}: {a: any, b: any}) => {
        return a >15 ? b : a
      }
    })
    const fn = ServerTools.get('testCli')
    expect(fn).toBeInstanceOf(ToolFunc)
    const fns = ServerTools.list()
    expect(Object.keys(fns)).toStrictEqual(['testCli', 'testServer'])
  })

  it('should register a func with named params', async () => {
    const params = {"a": "any", b: "any"}
    ServerTools.register({
      name: 'test',
      params,
      func: ({a, b}: {a: any, b: any}) => {
        return a >15 ? b : a
      }
    })
    expect(ServerTools.items['test']).toBeInstanceOf(ServerTools)
    const result = ServerTools.get('test')
    expect(result).toBeInstanceOf(ServerTools)
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
    ServerTools.unregister('test')
  })

  it('should register a func with position params', async () => {
    const params = [{name: "a", type: "any"}, {name: "b", type: "any"}]
    ServerTools.register({
      name: 'test',
      params,
      func: (a:any, b:any) => {
        return a >15 ? b : a
      }
    })
    const result = ServerTools.get('test')
    expect(result).toBeInstanceOf(ServerTools)
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

    ServerTools.unregister('test')
  })

})

describe('server api', () => {
  let apiRoot: string // = 'http://localhost:3000/api'
  let server: HttpServerToolTransport

  beforeAll(async () => {
    const ServerToolItems: {[name:string]: ServerTools|ToolFunc} = {}
    Object.setPrototypeOf(ServerToolItems, ToolFunc.items)
    ServerTools.items = ServerToolItems

    const ClientToolItems: Funcs = {}
    Object.setPrototypeOf(ClientToolItems, ToolFunc.items)
    ClientTools.items = ClientToolItems

    const params = {"a": "number", b: "any"}

    const testToolAsApi = new ToolFunc({
      name: 'test-cli',
      params,
      func: ({a, b}: {a: number, b: any}) => {
        return a >15 ? b : a
      },
      result: 'number',
      isApi: true,
    })

    ServerTools.register(testToolAsApi)

    ServerTools.register({
      name: 'test-get',
      params,
      action: 'get',
      func: ({a, b}: {a: number, b: any}) => {
        return a >15 ? b : a
      },
      result: 'number',
    })

    ServerTools.register({
      name: 'test-post',
      params,
      func: ({a, b}: {a: number, b: any}) => {
        return a >15 ? b : a
      },
      result: 'number',
    })

    server = new HttpServerToolTransport()
    await server.mount(ServerTools, '/api')
    const port = await findPort(3000)
    const result = await server.start({port})
    // console.log('server listening on ', result)
    apiRoot = `http://localhost:${port}/api`

    // ServerTools.setApiRoot(apiRoot)
    const clientTransport = new HttpClientToolTransport(apiRoot);
    ClientTools.setTransport(clientTransport);

    // ClientTools.setApiRoot(apiRoot)
    await ClientTools.loadFrom()
  })

  afterAll(async () => {
    await server.stop()
    delete (ClientTools as any).items
    delete (ServerTools as any).items
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

  it('should work with test-cli', async () => {
    const result = ClientTools.get('test-cli')
    expect(result).toBeInstanceOf(ClientTools)
    expect(await result.run({a: 10})).toStrictEqual(10)
    expect(await result.run({a: 18, b: 'hi world'})).toStrictEqual('hi world')

    // const res = await fetch(apiRoot + '/test?as=1&toolId=6', {
    // });
    // console.log(await res.json())
  })
});
