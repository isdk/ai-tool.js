import { createAbilityInjector } from 'custom-ability'
import type { Event, EventEmitter } from 'events-ex';
import type { ToolFunc } from '../../tool-func'

export { EventEmitter, eventable, states as EventStates, wrapEventEmitter } from 'events-ex';


export const EventName = 'event'
export const EventBusName = 'event-bus'
export type EventListenerFn = (this: Event, name: string, ...args: any) => any;
export type EventErrorListenerFn = (this: Event, err: Error, name: string, ...args: any) => any;

function getEventableClass(Backend: any) {

  class BackendEventable {
    declare name: string
    declare _events: any

    // the event bus
    static _emitter: any;

    static get emitter() {
      if (!this._emitter) {
        const emitter = (this as unknown as typeof ToolFunc).get(EventBusName)?.emitter
        if (emitter) {
          this._emitter = emitter;
          this.prototype._events = emitter._events;
        }
      }
      return this._emitter;
    }


    public get emitter() {
      const ctor = (this.constructor as unknown as typeof BackendEventable)
      return ctor._emitter
    }


    on(eventName: string, listener: EventListenerFn): EventEmitter | void {
      const emitter = Backend.emitter;
      if (!emitter) {throw new TypeError('EventBackend required')}
      return emitter.on(eventName, listener);
    }

    once(eventName: string, listener: EventListenerFn): EventEmitter | void {
      const emitter = Backend.emitter;
      if (!emitter) {throw new TypeError('EventBackend required')}
      return emitter.once(eventName, listener);
    }

    off(type: string, listener: EventListenerFn): EventEmitter {
      const emitter = Backend.emitter;
      if (!emitter) {throw new TypeError('EventBackend required')}
      return emitter.off(type, listener);
    }

    emit(eventName: string, ...args: any[]): any {
      const emitter = Backend.emitter;
      if (!emitter) {throw new TypeError('EventBackend required')}
      if (eventName === 'error') { return this.emitError.apply(this, args as any)}
      return emitter.emit.call(this, eventName, this.name, ...args);
    }

    emitError(err: any, ...args: any[]): any {
      const emitter = Backend.emitter;
      const eventName = 'error';
      if (!emitter) {throw new TypeError('EventBackend required')}
      return emitter.emit.call(this, eventName, err, this.name, ...args);
    }

    async emitAsync(eventName: string, ...args: any[]): Promise<any> {
      const emitter = Backend.emitter;
      if (!emitter) {throw new TypeError('EventBackend required')}
      return emitter.emitAsync.call(this, eventName, this.name, ...args);
    }
  }

  return BackendEventable;
}

export const backendEventable = createAbilityInjector(getEventableClass, true);