import { EventName, EventBusName } from '../utils/event';
import { event } from './event'
// import { SSEChannel } from '../utils/event/sse-channel';
import { type ServerFuncParams } from '../server-tools';
import type { IncomingMessage, ServerResponse } from 'http';
import type { Event } from 'events-ex';
import { ResServerTools } from '../res-server-tools';
import { ErrorCode, throwError } from '../utils';
import type { IPubSubServerTransport } from '../transports/pubsub/server';

// the singleton instance of event-bus
const eventBus = event.runSync()

export interface EventServerFuncParams extends ServerFuncParams {
  event?: string | string[]
  data?: any
  act?: 'sub' | 'pub' | 'unsub'
}

export class EventServer extends ResServerTools {
  private static _boundEbListener?: (this: Event, ...data: any[]) => any;

  static _pubSubTransport: IPubSubServerTransport | undefined
  static setPubSubTransport(t?: IPubSubServerTransport) { this._pubSubTransport = t }
  static get pubSubTransport() {
    if (!this._pubSubTransport) {
      // keep compatibility 兼容的话就设置
      // this._pubSubTransport = new SSEChannel()
      // throw new Error('EventServer pubSubTransport not set')
      console.warn('EventServer pubSubTransport not set')
    }
    return this._pubSubTransport
  }

  description = 'subscribe server event'
  result = 'event'
  depends = { [EventBusName]: event }

  get pubSubTransport() {
    return (this.constructor as typeof EventServer).pubSubTransport
  }

  static publish(data: any, event: string, target?: {
    clientId?: string | string[]}) {
    // console.log('event-server rePub', event, data)
    return this.pubSubTransport?.publish(event, data, target)
  }

  // the local event-bus listener to forward to SSE
  static ebListener(eventType: string,...data: any[]) {
    this.pubSubTransport?.publish(eventType, data)
  }

  static subscribe(req: IncomingMessage, res: ServerResponse, events?: string[], options?: any) {
    return this.pubSubTransport?.subscribe(events, {...options, req, res})
  }

  static alreadyForward(event: string) {
    const listeners = eventBus.listeners(event)
    for (const listener of listeners) {
      if (listener === this._boundEbListener) { return true }
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
    const ctor = this.constructor as typeof EventServer
    if (!ctor._boundEbListener) {
      ctor._boundEbListener = function _ebListener(this: Event, ...data: any[]) {
        return ctor.ebListener(this.type, ...data)
      }
    }
    for (const event of events) {
      if (!EventServer.alreadyForward(event)) {
        eventBus.on(event, ctor._boundEbListener)
      }
    }
  }

  unforward(events: string|string[]) {
    if (typeof events === 'string') {
      events = [events]
    }
    const ctor = this.constructor as typeof EventServer
    if (ctor._boundEbListener) {
      for (const event of events) {
        eventBus.off(event, ctor._boundEbListener)
      }
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
