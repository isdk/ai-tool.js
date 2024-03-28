import { event } from './event'
import { ClientTools } from '../client-tools'
import { EventBusName, EventName } from '../utils'
import type { Event } from 'events-ex'

const eventBus = event.runSync()

export interface EventClientFuncParams {
  event?: string | string[]
  data?: any
  act?: 'sub' | 'pub' | 'unsub' | 'init'
  listener?: (...args: any[]) => void
}

export class EventClient extends ClientTools {
  _es: EventSource|undefined
  // the events on _es
  _esEvents: string[]|undefined
  // subscribed sse events
  _sseEvents: Record<string, (e: MessageEvent)=>void> = {}
  _forwardEvents: Set<string> = new Set()

  get evtSource() {
    let result = this._es
    if (!result || result.readyState === EventSource.CLOSED) {
      result = this.initEventSource(this._esEvents)
    }

    return result as EventSource
  }

  get active() {
    return !!this._es && (this._es.readyState !== EventSource.CLOSED)
  }

  set active(v : boolean) {
    if (v !== this.active) {
      if (v) {
        this.initEventSource(this._esEvents)
      } else if (this._es) {
        this._es.close()
        this._es = undefined
      }
    }
  }

  name = EventName
  description = 'subscribe server sent event'
  params = {
    event: { type: 'string' },
    act: { type: 'string' },
    listener: {type: 'function'},
  }
  depends = { [EventBusName]: event }
  stream = true

  async publish(data: any, event: string|string[]) {
    await this.fetch({event, data, act: 'pub'})
  }

  initEventSource(events?: string|string[]) {
    if (typeof events === 'string') { events = [events] }
    if (this._es && this._es.readyState !== EventSource.CLOSED) {
      // check whether _esEvents include events
      if (!this._esEvents || (events && events.every(e => this._esEvents!.includes(e)))) {
        return this._es
      } else {
        this._es.close()
      }
    }
    const urlParams = events ? this.getUrlParams({event: events}) : ''
    const url = `${this.apiRoot}/${this.name}${urlParams}`
    const evtSource = this._es = new EventSource(url)
    // re-add the subscribed events
    Object.entries(this._sseEvents).forEach(([event, listener]) => {
      evtSource.addEventListener(event, listener)
    })
    this._esEvents = events
    return evtSource
  }

  // pass server sent event to eventBus
  esListener(event: MessageEvent) {
    const data = event.data ? JSON.parse(event.data) : undefined
    const evtType = event.type
    if (!this._forwardEvents.has(evtType)) {
      // console.log(event))
      if (data && evtType) {
        if (Array.isArray(data)) {
          eventBus.emit(evtType, ...data)
        } else {
          eventBus.emit(evtType, data)
        }
      }
    }
  }

  // pass event-bus event to server
  ebListener = async function(this: Event, ...data: any[]) {
    const event = this.type
    // when receive the event from SSE, the target is no publish method.
    if (this.target.publish) {
      await this.target.publish(data, event)
    }
  }

  subscribeSSE(events: string|string[]) {
    if (typeof events === 'string') {
      events = [events]
    }
    const evtSource = this.evtSource
    for (const event of events) {
      if (!this._sseEvents[event]) {
        const listener = this._sseEvents[event] = this.esListener.bind(this)
        evtSource.addEventListener(event, listener)
      }
    }
  }

  unsubscribeSSE(events: string|string[]) {
    if (typeof events === 'string') {
      events = [events]
    }
    for (const event of events) {
      const listener = this._sseEvents[event]
      if (listener) {
        delete this._sseEvents[event]
        this.evtSource.removeEventListener(event, listener)
      }
    }
  }

  // subscribe these local events, forward/publish to server
  forwardEvent(events: string|string[]) {
    if (typeof events === 'string') {
      events = [events]
    }
    for (const event of events) {
      if (!this._forwardEvents.has(event)) {
        this._forwardEvents.add(event)
        eventBus.on(event, this.ebListener)
      }
    }
  }

  unforwardEvent(events: string|string[]) {
    if (typeof events === 'string') {
      events = [events]
    }
    for (const event of events) {
      if (this._forwardEvents.has(event)) {
        this._forwardEvents.delete(event)
        eventBus.off(event, this.ebListener)
      }
    }
  }

  async func({event, data, act}: EventClientFuncParams = {}) {
    if (event) {
      if (act === 'pub') {
        return await this.publish(data, event)
      } else if (act === 'unsub') {
        return this.unsubscribeSSE(event)
      } else if (act === 'sub') {
        return this.subscribeSSE(event)
      }
    }
    // close eventsource and re-init event source
    this.active = false
    this.initEventSource(event)
    if (event) {this.subscribeSSE(event)}
  }
}

export const eventClient = new EventClient(EventName)
