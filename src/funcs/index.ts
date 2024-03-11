import { ToolFunc } from "../tool-func";
import { isSimilar } from "./is-similar";
import { lrucache } from "./lrucache";
import { mergeSegments } from "./merge-segments";
import { segments } from "./segments";
import { similarity } from './similarity';
import { splitSegments } from "./split-segments";

export * from './lrucache';
export * from './similarity';
export * from './is-similar';
export * from './split-segments';
export * from './merge-segments';
export * from './segments';

export function registerCoreTools() {
  ToolFunc.register(lrucache);
  ToolFunc.register(similarity);
  ToolFunc.register(isSimilar);
  ToolFunc.register(splitSegments);
  ToolFunc.register(mergeSegments);
  ToolFunc.register(segments);
}
