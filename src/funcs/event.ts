import { EventEmitter } from 'events-ex';
import { ToolFunc } from '../tool-func';
import { EventBusName } from '../utils/event';

export class EventToolFunc extends ToolFunc {
  // static _emitter = wrapEventEmitter()
  _emitter = new EventEmitter()// wrapEventEmitter()

  description = 'Return event bus'
  result = 'event'

  get emitter() {
    // return (this.constructor as unknown as any)._emitter
    return this._emitter
  }

  func() {
    return this.emitter
  }
}

export const event = new EventToolFunc(EventBusName)
