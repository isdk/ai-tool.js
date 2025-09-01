import { EventName, genUrlParamsStr } from '../utils'
import type { Event } from 'events-ex'
import { ResClientTools } from '../res-client-tools'
import { PubSubCtx, IPubSubClientTransport, PubSubClientStream } from '../transports/pubsub'

export interface EventClientFuncParams {
  event?: string | string[]
  data?: any
  act?: 'sub' | 'pub' | 'unsub' | 'init'
  listener?: (...args: any[]) => void
}

export class EventClient extends ResClientTools {
  static _pubSubTransport: IPubSubClientTransport | undefined
  static setPubSubTransport(t?: IPubSubClientTransport) { this._pubSubTransport = t }
  static get pubSubTransport(): IPubSubClientTransport {
    if (!this._pubSubTransport) throw new Error('EventClient pubSubTransport not set')
    return this._pubSubTransport
  }

  _stream: PubSubClientStream | undefined
  _streamEvents: string[] | undefined

   _sseListeners: Record<string, (data:any, ctx?: PubSubCtx)=>void> = {}
  _forwardEvents: Set<string> = new Set()

  get evtSource() {
    let result = this._stream
    if (!result || result.readyState === 2 /* CLOSED */) {
      result = this.initEventStream(this._streamEvents)
    }
    return result as PubSubClientStream
  }

  get active() {
    return !!this._stream && (this._stream.readyState !== 2 /* CLOSED */)
  }

  set active(v : boolean) {
    if (v !== this.active) {
      if (v) {
        this.initEventStream(this._streamEvents)
      } else if (this._stream) {
        (this.constructor as typeof EventClient).pubSubTransport.disconnect?.(this._stream) ?? this._stream.close()
        this._stream = undefined
      }
    }
  }

  description = 'subscribe server event'

  initEventStream(events?: string|string[]) {
    const list = typeof events === 'string' ? [events] : events
    if (this._stream && this._stream.readyState !== 2 /* CLOSED */) {
      if (!this._streamEvents || (list && list.every(e => this._streamEvents!.includes(e)))) {
        return this._stream
      } else {
        this._stream.close()
      }
    }
    const urlParams = list ? genUrlParamsStr({event: list}) : ''
    const url = `${this.apiRoot}/${this.name}${urlParams}`
    const stream = this._stream = (this.constructor as typeof EventClient).pubSubTransport.connect(url)
    // 重新挂载已订阅事件
    Object.entries(this._sseListeners).forEach(([event, listener]) => {
      stream.on(event, listener)
    })
    this._streamEvents = list
    return stream
  }

  // pass server sent event to eventBus if any
  esListener(evtType: string, data: any, ctx?: PubSubCtx) {
    if (!this._forwardEvents.has(evtType)) {
      const emitter = this.emitter
      if (emitter && evtType) {
        if (Array.isArray(data)) emitter.emit(evtType, ...data)
        else emitter.emit(evtType, data)
      }
    }
  }

  // pass event-bus event to server
  ebListener = async function(this: Event, ...data: any[]) {
    const event = this.type
    // when receive the event from SSE, the target is no publish method.
    if (this.target.publish) {
      await this.target.publish({data, event})
    }
  }

  /**
   * subscribe server sent event(SSE)
   * @param events
   */
  async subscribe(events: string|string[]) {
    const result = await this.sub({event: events})
    if (typeof events === 'string') {
      events = [events]
    }
    const evtSource = this.evtSource
    for (const event of events) {
      if (!this._sseListeners[event]) {
        const listener = this._sseListeners[event] = (data:any, ctx?: PubSubCtx) => this.esListener(event, data, ctx);
        evtSource.on(event, listener)
      }
    }
    return result
  }

  /**
   * unsubscribe server sent event(SSE)
   * @param events
   */
  async unsubscribe(events: string|string[]) {
    if (typeof events === 'string') {
      events = [events]
    }
    const result = await this.unsub({event: events})
    const evtSource = this.evtSource
    for (const event of events) {
      const listener = this._sseListeners[event]
      if (listener) {
        delete this._sseListeners[event]
        evtSource.off(event, listener)
      }
    }
    return result
  }

  /**
   * forward local event(s) to server
   *
   * subscribe these local events to forward/publish to server
   *
   * Note: pls backendEventable(ClientTools or EventClient) first
   * @param events
   */
  forwardEvent(events: string|string[]) {
    if (typeof events === 'string') {
      events = [events]
    }
    for (const event of events) {
      if (!this._forwardEvents.has(event)) {
        this._forwardEvents.add(event)
        if (this.on) this.on(event, this.ebListener)
      }
    }
  }

  /**
   * unforward local event(s) to server
   *
   * unsubscribe these local events not to forward/publish to server
   *
   * Note: pls backendEventable(ClientTools or EventClient) first
   * @param events
   */
  unforwardEvent(events: string|string[]) {
    if (typeof events === 'string') {
      events = [events]
    }
    for (const event of events) {
      if (this._forwardEvents.has(event)) {
        this._forwardEvents.delete(event)
        if (this.off) this.off(event, this.ebListener)
      }
    }
  }

  async init(events: string|string[]) {
    // close eventsource and re-init event source
    this.active = false
    this.initEventStream(events)
    if (events) {return await this.subscribe(events)}
  }

  close() {
    return this._stream?.close()
  }
}

export const eventClient = new EventClient(EventName)
