import { event } from "@isdk/tool-event";
import { lrucache } from "./lrucache";

export * from '@isdk/tool-event';
export * from './lrucache';

export function registerCoreTools() {
  event.register();
  lrucache.register();
}
