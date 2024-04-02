// @vitest-environment node
// import { describe, expect, it } from 'vitest'
import fastify from 'fastify'

import { type ResServerFuncParams, ResServerTools as ToolFunc } from "../src/res-server-tools"
import { ResClientTools as ClientTools } from '../src/res-client-tools'
import { BaseError, ErrorCode, NotFoundError, throwError } from '../src/utils/base-error'
import type { FuncParams } from '../src/tool-func'
import { findPort } from './find-port'
import { wait } from '../src/utils'

class TestResTool extends ToolFunc {
  items: any = {}

  params: FuncParams = {
    'id': {type: 'number'},
    'val': {type: 'any'},
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
    server.get('/api', async function(request, reply){
      reply.send(ToolFunc.toJSON())
    })

    server.all('/api/:toolId/:id?', async function(request, reply){
      const { toolId, id } = request.params as any;
      const func = ToolFunc.get(toolId)
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
        let result = await func.run(params)
        result = JSON.stringify(result)
        // console.log('🚀 ~ server.all ~ result:', result)

        reply.send(result)
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
    const port = await findPort(3000)
    const result = await server.listen({port})
    console.log('server listening on ', result)
    apiRoot = `http://localhost:${port}/api`

    ToolFunc.apiRoot = apiRoot
    const res = new TestResTool('res')
    res.register()

    ClientTools.apiRoot = apiRoot
    await ClientTools.loadFrom()
  })

  afterAll(() => {
    server.close()
  })

  it('should work on res', async () => {
    const result = ClientTools.get('res')
    expect(result).toBeInstanceOf(ClientTools)
    let res = await result.post({id: 1, val: 10})
    expect(res).toStrictEqual({id: 1})
    res = await result.get({id: 1})
    expect(res).toStrictEqual(10)
    res = await result.post({id: 2, val: 20})
    expect(res).toStrictEqual({id: 2})
    res = await result.list()
    expect(res).toStrictEqual(['1', '2'])
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

    // expect(await result.run({a: 10})).toStrictEqual(10)
    // expect(await result.run({a: 18, b: 'hi world'})).toStrictEqual('hi world')

    // const res = await fetch(apiRoot + '/test?as=1&toolId=6', {
    // });
    // console.log(await res.json())
  })

});
