// @vitest-environment node
// import { describe, expect, it } from 'vitest'
import { ServerTools } from "../src/server-tools"
import { ClientTools } from '../src/client-tools'
import { EventServer, EventClient, event, EventToolFunc } from '../src/funcs'
import { EventBusName, EventName, backendEventable } from "../src/utils/event"
import { sleep } from '../src/utils'
import { findPort } from '../src/utils/find-port'
import { Funcs, ToolFunc } from '../src/tool-func'
import { HttpServerToolTransport, HttpClientToolTransport } from '../src/transports'
import { SseClientPubSubTransport, SseServerPubSubTransport } from "../src/transports/pubsub"

backendEventable(EventClient)
backendEventable(EventServer)

const event4Client = new EventToolFunc(EventBusName)

describe('Event Server api', () => {
  let apiRoot: string // = 'http://localhost:3000/api'
  let server: any

  beforeAll(async () => {
    const ServerToolItems: {[name:string]: ServerTools|ToolFunc} = {}
    Object.setPrototypeOf(ServerToolItems, ToolFunc.items)
    ServerTools.items = ServerToolItems

    const ClientToolItems: Funcs = {}
    Object.setPrototypeOf(ClientToolItems, ToolFunc.items)
    ClientTools.items = ClientToolItems

    ClientTools.register(event4Client)

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

    const port = await findPort(3002)
    server = new HttpServerToolTransport()
    await server.mount(ServerTools, '/api')
    server.start({ port })
    // const result = await server.listen({ port })
    // console.log('server listening on ', result)
    apiRoot = `http://localhost:${port}/api`

    ServerTools.setApiRoot(apiRoot)
    const clientTransport = new HttpClientToolTransport(apiRoot);
    await clientTransport.mount(ClientTools)

    EventClient.setPubSubTransport(new SseClientPubSubTransport())
    EventServer.setPubSubTransport(new SseServerPubSubTransport())
  })

  afterAll(async () => {
    const event = ClientTools.get('event') as EventClient
    event.close()
    EventClient.setPubSubTransport(undefined)
    EventServer.setPubSubTransport(undefined)
    await server.stop(true)
    delete (ClientTools as any).items
    delete (ServerTools as any).items
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
      await sleep(10)
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
      await sleep(10)

      // forward the local t2 event to server
      event.forwardEvent('t2')
      // emit the t2 event
      event.emit('t2', 4, 5, 6)
      await sleep(250)
      expect(t1).toBe(1)
      expect(t2).toBe(1)
      expect(t2j).toBe(1)
      // await event.run({event: 't1', act: 'pub', data: [1, 2, 3]})
      await event.publish({ event: 't1', data: [1, 2, 3] })
      await sleep(10)
      expect(t1).toBe(2)
      // await event.run({event: ['t1', 't2'], act: 'unsub'})
      await event.unsubscribe(['t1', 't2'])
      // await event.run({event: 't1', act: 'pub', data: [1, 2, 3]})
      await event.publish({ event: 't1', data: [1, 2, 3] })
      await sleep(10)
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
    await sleep(10) // the eventsource need time to connect
    expect(res).toMatchObject({ event: 't1' })
    try {
      let t1 = 0
      let t2 = 0
      let data: any
      event.on('t1', function (...dat: any[]) {
        t1++
        data = dat
      })
      eventServer.emit('t1', 1, 2, 3)
      await sleep(380)
      expect(t1).toBe(1)
      expect(data).toStrictEqual([EventName, 1, 2, 3])
      await event.publish({ event: 't1', data: [2, 3] })
      await sleep(1)
      expect(t1).toBe(2)
      expect(data).toStrictEqual([2, 3])
      eventServer.emit('t1', 'hi')
      await sleep(1)
      expect(t1).toBe(3)
      expect(data).toStrictEqual([EventName, 'hi'])
      res = await event.unsubscribe('t1')
      eventServer.emit('t1', 'hi')
      await sleep(1)
      expect(t1).toBe(3)
    } finally {
      event.active = false
    }
  })
  it('should publish event via static EventServer.publish', async () => {
    const event = ClientTools.get('event') as EventClient

    let t3 = 0
    let receivedData: any
    event.on('t3', (data: any) => {
      t3++
      receivedData = data
    })

    // With the new logic, subscribe should be sufficient
    await event.subscribe('t3')
    await sleep(50); // wait for connection

    try {
      const eventData = { message: 'hello from static publish' }
      EventServer.publish('t3', eventData)
      await sleep(50)

      expect(t3).toBe(1)
      expect(receivedData).toEqual(eventData)
    } finally {
      event.active = false
    }
  })
});
