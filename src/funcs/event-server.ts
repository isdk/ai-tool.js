import { EventName, EventBusName } from '../utils/event';
import { event } from './event'
import { type ServerFuncParams } from '../server-tools';
import type { Event } from 'events-ex';
import { ResServerTools } from '../res-server-tools';
import { ErrorCode, throwError } from '../utils';
import type { IPubSubServerTransport } from '../transports/pubsub/server';

// the singleton instance of event-bus
const eventBus = event.runSync()

export const ClientEventPrefix = 'client:'

export interface EventServerFuncParams extends ServerFuncParams {
  event?: string | string[]
  data?: any
  act?: 'sub' | 'pub' | 'unsub'
  clientId?: string
}

export class EventServer extends ResServerTools {
  /**
   * Controls whether to forward events published by clients to the server-side event bus.
   * Defaults to false for security. Must be explicitly enabled for 'client:' prefixed events to be emitted.
   */
  public static forwardClientPublishes = false;

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

  // forward the events on the server event-bus to client
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
      this.forward(event);

      const session = _req && this.pubSubTransport.getSessionFromReq?.(_req);
      if (session) {
        this.pubSubTransport.subscribe(session, Array.isArray(event) ? event : [event]);
        return { forward: true, subscribed: true, event, clientId: session.clientId };
      } else {
        if (this.pubSubTransport.getSessionFromReq) {
          console.warn('$sub: No session found for request');
        } else if (!_req) {
          console.warn(`$sub: missing _req`);
        } else {
          console.warn(`$sub: The ${this.pubSubTransport.name} Transport does not support dynamic subscription`);
        }
        return { forward: true, event };
      }
    } else {
      throwError('event is required', 'sub', ErrorCode.InvalidArgument);
    }
  }

  $unsub({event, _req}: EventServerFuncParams) {
    if (!this.pubSubTransport) {
      throwError('PubSub transport not available', 'unsub', ErrorCode.NotImplemented);
    }

    if (event) {
      this.unforward(event);
      const session = _req && this.pubSubTransport.getSessionFromReq?.(_req);

      if (session) {
        this.pubSubTransport.unsubscribe(session, Array.isArray(event) ? event : [event]);
        return { forward: false, subscribed: false, event, clientId: session.clientId };
      } else {
        if (this.pubSubTransport.getSessionFromReq) {
          console.warn('$unsub: No session found for request');
        } else if (!_req) {
          console.warn(`$sub: missing _req`);
        } else {
          console.warn(`$unsub: The ${this.pubSubTransport.name} Transport does not support dynamic subscription`);
        }
        return { forward: false, event };
      }
    } else {
      throwError('event is required', 'unsub', ErrorCode.InvalidArgument)
    }
  }

  $publish({event: events, data, _req}: EventServerFuncParams) {
    if (events && data) {
      // Get the session and clientId from the transport, not from the client payload.
      // This is a critical security measure to prevent impersonation.
      const session = _req && this.pubSubTransport?.getSessionFromReq?.(_req);
      const senderId = session?.clientId;
      const ctor = this.constructor as typeof EventServer;

      if (typeof events === 'string') {
        events = [events]
      }
      for (const event of events) {
        // Only forward to internal bus if the feature is enabled.
        if (ctor.forwardClientPublishes) {
          // Emit the prefixed event on the server-side bus for internal listeners.
          // A listener for 'my-event' will NOT receive 'client:my-event'.
          eventBus.emit(ClientEventPrefix + event, data, {event, sender: session });
        }

        // Broadcast the ORIGINAL event name to other clients, as they are not
        // aware of the server's internal prefixing convention.
        this.publishServerEvent(event, data)
      }
      return {event: events, senderId} // Return the trusted clientId
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
