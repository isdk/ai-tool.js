import { event } from "./event";
import { lrucache } from "./lrucache";

export * from './event';
export * from './lrucache';
export * from './event-client';
export * from './event-server';

export function registerCoreTools() {
  event.register();
  lrucache.register();
}
