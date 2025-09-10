import { EventName, EventBusName } from '../utils/event';
import { event } from './event'
import { type ServerFuncParams } from '../server-tools';
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
  clientId?: string
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

  static publish(event: string, data: any, target?: {
    clientId?: string | string[]}) {
    return this.pubSubTransport?.publish(event, data, target)
  }

  // the local event-bus listener to forward to the transport
  static ebListener(eventType: string,...data: any[]) {
    this.pubSubTransport?.publish(eventType, data)
  }

  static alreadyForward(event: string) {
    const listeners = eventBus.listeners(event)
    for (const listener of listeners) {
      if (listener === this._boundEbListener) { return true }
    }
  }

  publishServerEvent(event: string, data: any) {
    return (this.constructor as any).publish(event, data)
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
    if (this.pubSubTransport) {
      return this.pubSubTransport.connect({ req: _req, res: _res, events: event as string[] })
    } else {
      throwError('PubSub transport not available', 'list', ErrorCode.NotImplemented)
    }
  }

  $sub({event, _req}: EventServerFuncParams) {
    if (!this.pubSubTransport) {
      throwError('PubSub transport not available', 'sub', ErrorCode.NotImplemented);
    }

    if (event) {
      this.forward(event)

      const { remoteAddress, remotePort } = _req.socket;
      if (event && remoteAddress && remotePort) {
        const clientId = `${remoteAddress}:${remotePort}`;
        // TODO: transport should support addSubscription
        const result = (this.pubSubTransport as any).subscribe?.(clientId, event as string[]);
        return { subscribed: result, event, clientId };
      } else {
        throwError('event and a valid client request are required', 'sub', ErrorCode.InvalidArgument)
      }
    }
  }

  $unsub({event, _req}: EventServerFuncParams) {
    if (!this.pubSubTransport) {
      throwError('PubSub transport not available', 'unsub', ErrorCode.NotImplemented);
    }

    if (event) {
      this.unforward(event)
      const { remoteAddress, remotePort } = _req.socket;
      if (event && remoteAddress && remotePort) {
        const clientId = `${remoteAddress}:${remotePort}`;
        // TODO: transport should support removeSubscription
        const result = (this.pubSubTransport as any).unsubscribe?.(clientId, event as string[]);
        return { unsubscribed: result, event, clientId };
      } else {
        throwError('event and a valid client request are required', 'unsub', ErrorCode.InvalidArgument)
      }

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
        this.publishServerEvent(event, data)
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
