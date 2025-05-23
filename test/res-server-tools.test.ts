// @vitest-environment node
// import { describe, expect, it } from 'vitest'
import fastify from 'fastify'

import { type ResServerFuncParams, ResServerTools } from "../src/res-server-tools"
import { ResClientTools } from '../src/res-client-tools'
import { BaseError, ErrorCode, NotFoundError, throwError } from '../src/utils/base-error'
import { type FuncParams, ToolFunc, Funcs } from '../src/tool-func'
import { findPort } from '../src/utils/find-port'
import { wait } from '../src/utils'
import { ServerTools } from '../src/server-tools'
import { ClientTools } from '../src/client-tools'
import { omit } from 'lodash-es'

class TestResTool extends ResServerTools {
  items: any = {}

  params: FuncParams = {
    'id': {type: 'number'},
    'val': {type: 'any'},
  }

  cast(key: string, value: any) {
    if (key === 'id' && typeof value === 'string' && (value[0] === '[' || value[0] === '{')) {
      return JSON.parse(value)
    }
    return super.cast(key, value)
  }

  $customMethod({id}: ResServerFuncParams) {
    if (id) {
      const item = this.items[id]
      if (!item) {
        throw new NotFoundError(id, 'res')
      }
      return {name: 'customMethod', id, item}
    }
  }

  get({id}: ResServerFuncParams) {
    if (Array.isArray(id)) {
      return id.map(id => this.items[id])
    }

    if (id) {
      const item = this.items[id]
      if (!item) {
        throw new NotFoundError(id, 'res')
      }
      return item
    }
  }
  post({id, val}: ResServerFuncParams) {
    if (id !== undefined && val !== undefined) {
      this.items[id] = val
      return {id}
    } else {
      throwError('id or val is undefined')
    }
  }
  list() {
    return Object.keys(this.items)
  }
  delete({id}: ResServerFuncParams) {
    if (id) {
      const item = this.items[id]
      if (item === undefined) {
        throw new NotFoundError(id, 'res')
      }
      delete this.items[id]
      return {id}
    }
  }
}

describe('res server api', () => {
  let apiRoot: string // = 'http://localhost:3000/api'
  const server = fastify()

  beforeAll(async () => {
    const ServerToolItems: {[name:string]: ServerTools|ToolFunc} = {}
    Object.setPrototypeOf(ServerToolItems, ToolFunc.items)
    ServerTools.items = ServerToolItems

    const ClientToolItems: Funcs = {}
    Object.setPrototypeOf(ClientToolItems, ToolFunc.items)
    ClientTools.items = ClientToolItems

    server.get('/api', async function(request, reply){
      reply.send(ResServerTools.toJSON())
    })

    server.all('/api/:toolId/:id?', async function(request, reply){
      const { toolId, id } = request.params as any;
      const func = ResServerTools.get(toolId)
      // console.log('🚀 ~ server.all ~ func param:', toolId, id, request.method, func)
      if (!func) {
        reply.code(404).send({error: toolId + ' Not Found', data: {what: toolId}})
      }
      let params: any
      const method = request.method
      if (method === 'GET' || method == 'DELETE') {
        params = (request.query as any).p
        if (params) {
          params = JSON.parse(params)
        } else {
          params = {}
        }
      } else {
        params = request.body;
        if (typeof params === 'string') {params = JSON.parse(params)}
      }
      params._req = request.raw
      params._res = reply.raw
      if (id !== undefined) {params.id = id}

      // const result = JSON.stringify(await func.run(params))
      try {
        // console.log('🚀 ~ server.all ~ params:', method, omit(params, ['_req', '_res']))
        let result = await func.run(params)
        // console.log('🚀 ~ server.all ~ result:', method, omit(params, ['_req', '_res']), result)
        if (!func.isStream(params)) {
          result = JSON.stringify(result)
          reply.send(result)
        } else if (result) {
          reply.send(result)
        }
        // reply.send({params: request.params as any, query: request.query, url: request.url})
      } catch(e) {
        // console.log('🚀 ~ server.all ~ e:', e)
        if (e.code !== undefined) {
          if (e.stack) {e.stack = undefined}
          reply.code(e.code).send(JSON.stringify(e))
        } else if (e.message) {
          reply.code(500).send({error: e.message})
        } else {
          reply.code(500).send({error: e})
        }
      }
    })
    await wait(10)
    const port = await findPort(3001)
    const result = await server.listen({port})
    console.log('server listening on ', result)
    apiRoot = `http://localhost:${port}/api`

    ResServerTools.setApiRoot(apiRoot)
    const res = new TestResTool('res')
    res.register()

    ResClientTools.setApiRoot(apiRoot)
    await ResClientTools.loadFrom()
  })

  afterAll(async () => {
    await server.close()
    delete (ClientTools as any).items
    delete (ServerTools as any).items
  })

  it('should work on res', async () => {
    const result = ResClientTools.get('res')
    expect(result).toBeInstanceOf(ResClientTools)
    let res = await result.post({id: 1, val: 10})
    expect(res).toStrictEqual({id: 1})
    res = await result.get({id: 1})
    expect(res).toStrictEqual(10)
    res = await result.post({id: 2, val: 20})
    expect(res).toStrictEqual({id: 2})
    res = await result.list()
    expect(res).toStrictEqual(['1', '2'])
    res = await result.get({id: ['1', '2']})
    expect(res).toStrictEqual([10, 20])

    res = await result.delete({id: 1})
    expect(res).toStrictEqual({id: 1})
    res = await result.list()
    expect(res).toStrictEqual(['2'])
    // expect(()=>result.get({id: 1})).rejects.toThrow(NotFoundError)
    // expect(()=>result.get({id: 1})).rejects.toThrow('Could not find 1.')
    let err: any
    try {
      res = await result.get({id: 1})
    } catch(e) {
      err = e
    }
    expect(err).toBeInstanceOf(NotFoundError)
    expect(err.message).toBe('Could not find 1.')
    expect(err.code).toBe(ErrorCode.NotFound)
    expect(err.data).toStrictEqual({what: 1})
    expect(err.name).toBe('res')
    expect(result.customMethod).toBeInstanceOf(Function)
    res = await result.customMethod({id: 2})
    expect(res).toStrictEqual({name: 'customMethod', id: 2, item: 20})
    const resServer = ResServerTools.get('res')
    expect(resServer).toBeInstanceOf(TestResTool)
    expect(resServer).toHaveProperty('customMethod')
    res = await resServer.customMethod({id: 2})
    expect(res).toStrictEqual({name: 'customMethod', id: 2, item: 20})
    // expect(await result.run({a: 10})).toStrictEqual(10)
    // expect(await result.run({a: 18, b: 'hi world'})).toStrictEqual('hi world')

    // const res = await fetch(apiRoot + '/test?as=1&toolId=6', {
    // });
    // console.log(await res.json())
  })

});
