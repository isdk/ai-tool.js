// @vitest-environment node
// import { describe, expect, it } from 'vitest'
import fastify from 'fastify'
import EventSource from 'eventsource'
global.EventSource = EventSource
import { ServerTools } from "../src/server-tools"
import { ClientTools } from '../src/client-tools'
import { EventServer, EventClient } from '../src/funcs'
import { EventBusName, backendEventable } from "../src/utils/event"
import { wait } from '../src/utils'
import { findPort } from './find-port'
backendEventable(EventClient)

describe('Event Server api', () => {
  let apiRoot: string // = 'http://localhost:3000/api'
  const server = fastify()

  beforeAll(async () => {
    const params = {"a": "number", b: "any"}
    const eventServer = new EventServer('event')
    const eventClient = new EventClient('event')
    eventServer.register()
    eventClient.register()

    EventClient.register({
      name: 'test-post',
      params,
      func: function ({a, b}: {a: number, b: any}) {
        this.emit('before', a, b)
        return a >15 ? b : a
      },
      result: 'number',
    })


    server.get('/api', async function(request, reply){
      reply.send(ServerTools.toJSON())
    })

    server.get('/api/:toolId', async function(request, reply){
      const { toolId } = request.params as any;
      const func = ServerTools.get(toolId)
      if (!func) {
        reply.code(404).send({error: toolId + ' Not Found'})
      }
      let params: any = (request.query as any).p
      if (params) {
        params = JSON.parse(params)
      } else {
        params = {}
      }
      // console.log('🚀 ~ server.get ~ param:', params)
      params._req = request.raw
      params._res = reply.raw

      const res = await func.run(params)
      if (!func.stream) {
        const result = JSON.stringify(await func.run(params))
        reply.send(result)
      } else if (res) {
        reply.send(res)
      }


      // reply.send({params: request.params as any, query: request.query, url: request.url})
    })

    server.post('/api/:toolId', async function(request, reply){
      const { toolId } = request.params as any;
      const func = ServerTools.get(toolId)
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

    ServerTools.apiRoot = apiRoot
    ClientTools.apiRoot = apiRoot
    await ClientTools.loadFrom()
  })

  afterAll(async () => {
    await server.close()
  })

  it('should subscribe event', async () => {
    const event = ClientTools.get('event') as EventClient
    expect(event).toBeInstanceOf(EventClient)
    // init the EventSource to listen the t1 and t2 event
    await event.run({event: ['t1', 't2'], act: 'init'})
    let i = 0
    event.on('t1', function(...data: any[]) {
      i++
      expect(data).toMatch(`[1, 2, 3]`)
    })

    // publish the t1 event to the server
    await event.run({event: 't1', act: 'pub', data: [1, 2, 3]})
    await wait(10)
    expect(i).toBe(1)

    event.on('t2', function(...data: any[]) {
      i++
      expect(data).toMatch(`["event", 4, 5, 6, ]`)
    })

    let j = 0
    // listen all the events from server
    const es = new EventSource(ClientTools.apiRoot + '/event')
    es.addEventListener('t2', function(e: MessageEvent) {
      j++
      expect(e.data).toMatch(`["event",4,5,6]`)
    })
    es.onmessage = function(e: any) {
      // it should not be here
      j++
    }
    await wait(10)

    // forward the local t2 event to server
    event.forwardEvent('t2')
    // emit the t2 event
    event.emit('t2', 4,5,6)
    await wait(10)
    expect(i).toBe(2)
    expect(j).toBe(1)
    event.active = false
    es.close()
    // expect(await event.run({a: 10})).toStrictEqual(10)
    // expect(await event.run({a: 18, b: 'hi world'})).toStrictEqual('hi world')

    // const res = await fetch(apiRoot + '/test?as=1&toolId=6', {
    // });
    // console.log(await res.json())
  })

});
