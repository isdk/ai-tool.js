import { EventName, EventBusName } from '../utils/event';
import { event } from './event'
import { SSEChannel } from '../utils/event/sse-channel';
import { type ServerFuncParams, ServerTools } from '../server-tools';
import type { IncomingMessage, ServerResponse } from 'http';
import type { Event } from 'events-ex';

const eventBus = event.runSync()

export interface EventServerFuncParams extends ServerFuncParams {
  event?: string | string[]
  data?: any
  act?: 'sub' | 'pub' | 'unsub'
}

export class EventServer extends ServerTools {
  static sse: SSEChannel = new SSEChannel()

  name = EventName
  description = 'subscribe server sent event'
  params = {
    event: { type: 'string' },
    data: { type: 'any'},
    act: { type: 'string' },
  }
  result = 'event'
  depends = { [EventBusName]: event }
  stream = true

  get sse() {
    return (this.constructor as unknown as any).sseChannel
  }

  static publish(data: any, event: string) {
    // console.log('event-server rePub', event, data)
    return EventServer.sse.publish(data, event)
  }

  // the local event-bus listener to forward to SSE
  static ebListener = function ebListener(this: Event,...data: any[]) {
    // console.log('event-server reEB', ...data)
    EventServer.sse.publish(data, this.type)
  }

  static subscribe(req: IncomingMessage, res: ServerResponse, events?: string[]) {
    return EventServer.sse.subscribe(req, res, events)
  }

  static alreadyForward(event: string) {
    const listeners = eventBus.listener(event)
    for (const listener of listeners) {
      if (listener === EventServer.ebListener) { return true }
    }
  }

  publishSSE(data: any, event: string) {
    return (this.constructor as any).publish(data, event)
  }

  subscribeSSE(req: IncomingMessage, res: ServerResponse, events?: string[]) {
    return (this.constructor as any).subscribe(req, res, events)
  }

  // 转发 event-bus 事件
  forward(events: string|string[]) {
    if (typeof events === 'string') {
      events = [events]
    }
    for (const event of events) {
      if (!EventServer.alreadyForward(event)) {
        eventBus.on(event, EventServer.ebListener)
      }
    }
  }

  unforward(events: string|string[]) {
    if (typeof events === 'string') {
      events = [events]
    }
    for (const event of events) {
      eventBus.off(event, EventServer.ebListener)
    }
  }

  func({ _req, _res, event: events, data, act }: EventServerFuncParams) {
    if (events) {
      if (typeof events === 'string') {
        events = [events]
      }
      if (act === 'pub') {
        if (data != null) {
          for (const event of events) {
            this.publishSSE(data, event)
          }
        }
        return
      }
      if (act === 'sub') {
        return this.forward(events)
      } else if (act === 'unsub') {
        return this.unforward(events)
      }
    }

    // for new client coming on server
    if (_req && _res) {
      this.subscribeSSE(_req, _res, events as any)
    }
  }
}

export const eventServer = new EventServer(EventName)
