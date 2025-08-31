import { EventEmitter } from 'events-ex';
import { ToolFunc } from '../tool-func';
import { EventBusName } from '../utils/event';

// the singleton event bus
export class EventToolFunc extends ToolFunc {
  _emitter = new EventEmitter()

  description = 'Return event bus'
  result = 'event'

  get emitter() {
    return this._emitter
  }

  func() {
    return this.emitter
  }
}

export const event = new EventToolFunc(EventBusName)
