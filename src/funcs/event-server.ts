import { EventName, EventBusName } from '../utils/event';
import { event } from './event'
import { SSEChannel } from '../utils/event/sse-channel';
import { type ServerFuncParams } from '../server-tools';
import type { IncomingMessage, ServerResponse } from 'http';
import type { Event } from 'events-ex';
import { ResServerTools } from '../res-server-tools';
import { ErrorCode, throwError } from '../utils';

const eventBus = event.runSync()

export interface EventServerFuncParams extends ServerFuncParams {
  event?: string | string[]
  data?: any
  act?: 'sub' | 'pub' | 'unsub'
}

export class EventServer extends ResServerTools {
  static _sse: SSEChannel | undefined
  static get sse() {
    if (!this._sse) {
      this._sse = new SSEChannel()
    }
    return this._sse
  }

  name = EventName
  description = 'subscribe server sent event'
  result = 'event'
  depends = { [EventBusName]: event }

  get sse() {
    return (this.constructor as unknown as any).sse
  }

  static publish(data: any, event: string) {
    // console.log('event-server rePub', event, data)
    return EventServer.sse.publish(data, event)
  }

  // the local event-bus listener to forward to SSE
  static ebListener = function ebListener(this: Event,...data: any[]) {
    EventServer.sse.publish(data, this.type)
  }

  static subscribe(req: IncomingMessage, res: ServerResponse, events?: string[]) {
    return EventServer.sse.subscribe(req, res, events)
  }

  static alreadyForward(event: string) {
    const listeners = eventBus.listeners(event)
    for (const listener of listeners) {
      if (listener === EventServer.ebListener) { return true }
    }
  }

  publishSSE(data: any, event: string) {
    return (this.constructor as any).publish(data, event)
  }

  subscribeSSE(req: IncomingMessage, res: ServerResponse, events?: string|string[]) {
    if (typeof events === 'string') {
      events = [events]
    }
    return (this.constructor as any).subscribe(req, res, events)
  }

  // forward the events on the event-bus to client
  forward(events: string|string[]) {
    if (!Array.isArray(events)) {
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

  list({ _req, _res, event}: EventServerFuncParams) {
    if (_req && _res) {
      this.subscribeSSE(_req, _res, event)
    }
  }

  $sub({event}: EventServerFuncParams) {
    if (event) {
      this.forward(event)
      return {event}
    } else {
      throwError('event is required', 'sub', ErrorCode.InvalidArgument)
    }
  }

  $unsub({event}: EventServerFuncParams) {
    if (event) {
      this.unforward(event)
      return {event}
    } else {
      throwError('event is required', 'unsub', ErrorCode.InvalidArgument)
    }
  }

  $publish({event: events, data}: EventServerFuncParams) {
    if (events && data) {
      if (typeof events === 'string') {
        events = [events]
      }
      for (const event of events) {
        this.publishSSE(data, event)
      }
      return {event: events}
    } else {
      throwError('event or data is required', 'pub', ErrorCode.InvalidArgument)
    }
  }

  isStream(params: ServerFuncParams) {
    const method = this.getMethodFromParams(params)
    return (method === 'list')
  }
}

export const eventServer = new EventServer(EventName)
