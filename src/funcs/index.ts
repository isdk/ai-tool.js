import { event } from "./event";
import { isSimilar } from "./is-similar";
import { lrucache } from "./lrucache";
import { mergeSegments } from "./merge-segments";
import { segments } from "./segments";
import { similarity } from './similarity';
import { splitSegments } from "./split-segments";

export * from './event';
export * from './lrucache';
export * from './similarity';
export * from './is-similar';
export * from './split-segments';
export * from './merge-segments';
export * from './segments';

export function registerCoreTools() {
  event.register();
  lrucache.register();
  similarity.register();
  isSimilar.register();
  splitSegments.register();
  mergeSegments.register();
  segments.register();
}
