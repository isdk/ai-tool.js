// @vitest-environment node
// import { describe, expect, it } from 'vitest'
import fastify from 'fastify'
import EventSource from 'eventsource'
global.EventSource = EventSource
import { ServerTools } from "../src/server-tools"
import { ClientTools } from '../src/client-tools'
import { EventServer, EventClient, event, EventToolFunc } from '../src/funcs'
import { EventBusName, EventName, backendEventable } from "../src/utils/event"
import { wait } from '../src/utils'
import { findPort } from './util/find-port'
backendEventable(EventClient)
backendEventable(EventServer)

const event4Client = new EventToolFunc(EventBusName)
ClientTools.register(event4Client)

describe('Event Server api', () => {
  let apiRoot: string // = 'http://localhost:3000/api'
  const server = fastify()

  beforeAll(async () => {
    const params = { "a": "number", b: "any" }
    const eventServer = new EventServer('event')
    const eventClient = new EventClient('event')
    eventServer.register()
    eventClient.register()

    EventClient.register({
      name: 'test-post',
      params,
      func: function ({ a, b }: { a: number, b: any }) {
        this.emit('before', a, b)
        return a > 15 ? b : a
      },
      result: 'number',
    })


    server.get('/api', async function (request, reply) {
      reply.send(ServerTools)
    })

    server.all('/api/:toolId/:id?', async function (request, reply) {
      const { toolId, id } = request.params as any;
      const func = ServerTools.get(toolId)
      if (!func) {
        reply.code(404).send({ error: toolId + ' Not Found', data: { what: toolId } })
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
        if (typeof params === 'string') { params = JSON.parse(params) }
      }
      // console.log('🚀 ~ server.all ~ toolId:', toolId, params, id)
      params._req = request.raw
      params._res = reply.raw
      if (id !== undefined) { params.id = id }

      // const result = JSON.stringify(await func.run(params))
      try {
        let result = await func.run(params)
        if (!func.isStream(params)) {
          result = JSON.stringify(result)
          // console.log('🚀 ~ server.all ~ result:', result)
          reply.send(result)
          // reply.send({params: request.params as any, query: request.query, url: request.url})
        } else if (result) {
          reply.send(result)
          // } else if (func.result && func.result !== 'any' && func.result !== 'void') {
          //   // maybe should valid result type
          //   reply.code(500).send({error: 'no result'})
          // } else {
          //   reply.send()
        }
      } catch (e) {
        if (e.code !== undefined) {
          const err: any = { ...e, error: e.message }
          // console.log('🚀 ~ server.all ~ err:', err)
          if (err.stack) { delete err.stack }
          if (typeof err.code === 'number') {
            reply.code(err.code).send(JSON.stringify(err))
          } else {
            reply.code(500).send(JSON.stringify(err))
          }
        } else if (e.message) {
          reply.code(500).send({ error: e.message })
        } else {
          reply.code(500).send({ error: e })
        }
      }
    })

    const port = await findPort(3002)
    const result = await server.listen({ port })
    console.log('server listening on ', result)
    apiRoot = `http://localhost:${port}/api`

    ServerTools.setApiRoot(apiRoot)
    ClientTools.setApiRoot(apiRoot)
    await ClientTools.loadFrom()
  })

  afterAll(async () => {
    await server.close()
  })

  it('should subscribe/publish events through server forwarding', async () => {
    //  which means the local client events can be passed to another client.
    const event = ClientTools.get('event') as EventClient
    expect(event).toBeInstanceOf(EventClient)
    // init the EventSource to listen the t1 and t2 event only
    // await event.run({event: ['t1', 't2'], act: 'init'})
    await event.init(['t1', 't2'])
    const es = new EventSource(ClientTools.apiRoot + '/event')
    try {
      let t1 = 0
      let t2 = 0
      event.on('t1', function (...data: any[]) {
        t1++
        expect(data).toMatch(`[1, 2, 3]`)
      })

      // publish the t1 event to the server
      // await event.run({event: 't1', act: 'pub', data: [1, 2, 3]})
      await event.publish({ event: 't1', data: [1, 2, 3] })
      await wait(10)
      expect(t1).toBe(1)

      event.on('t2', function (...data: any[]) {
        t2++
        expect(data).toMatch(`["event", 4, 5, 6, ]`)
      })

      let t2j = 0
      // listen all the events from server
      es.addEventListener('t2', function (e: MessageEvent) {
        t2j++
        expect(e.data).toMatch(`["event",4,5,6]`)
      })
      es.onmessage = function (e: any) {
        // it should not be here
        t2j++
      }
      await wait(10)

      // forward the local t2 event to server
      event.forwardEvent('t2')
      // emit the t2 event
      event.emit('t2', 4, 5, 6)
      await wait(150)
      expect(t1).toBe(1)
      expect(t2).toBe(1)
      expect(t2j).toBe(1)
      // await event.run({event: 't1', act: 'pub', data: [1, 2, 3]})
      await event.publish({ event: 't1', data: [1, 2, 3] })
      await wait(10)
      expect(t1).toBe(2)
      // await event.run({event: ['t1', 't2'], act: 'unsub'})
      await event.unsubscribe(['t1', 't2'])
      // await event.run({event: 't1', act: 'pub', data: [1, 2, 3]})
      await event.publish({ event: 't1', data: [1, 2, 3] })
      await wait(10)
      expect(t1).toBe(2)
    } finally {
      event.active = false
      es.close()
    }
    // expect(await event.run({a: 10})).toStrictEqual(10)
    // expect(await event.run({a: 18, b: 'hi world'})).toStrictEqual('hi world')

    // const res = await fetch(apiRoot + '/test?as=1&toolId=6', {
    // });
    // console.log(await res.json())
  })
  it('should subscribe server events', async () => {
    const event = ClientTools.get('event') as EventClient
    const eventServer = ServerTools.get('event') as EventServer
    // subscribe the t1 and t2 event on the server
    // await event.run({event: ['t1', 't2'], act: 'sub'})
    let res = await event.subscribe('t1')
    await wait(10) // the eventsource need time to connect
    expect(res).toStrictEqual({ event: 't1' })
    try {
      let t1 = 0
      let t2 = 0
      let data: any
      event.on('t1', function (...dat: any[]) {
        t1++
        data = dat
      })
      eventServer.emit('t1', 1, 2, 3)
      await wait(150)
      expect(t1).toBe(1)
      expect(data).toStrictEqual([EventName, 1, 2, 3])
      await event.publish({ event: 't1', data: [2, 3] })
      await wait(1)
      expect(t1).toBe(2)
      expect(data).toStrictEqual([2, 3])
      eventServer.emit('t1', 'hi')
      await wait(1)
      expect(t1).toBe(3)
      expect(data).toStrictEqual([EventName, 'hi'])
      res = await event.unsubscribe('t1')
      eventServer.emit('t1', 'hi')
      await wait(1)
      expect(t1).toBe(3)
    } finally {
      event.active = false
    }
  })
});
