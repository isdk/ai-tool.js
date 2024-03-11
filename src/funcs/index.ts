import { ToolFunc } from "../tool-func";
import { similarity } from './similarity';

export * from './similarity';
export * from '../utils/split-sentence';

export function registerCoreTools() {
  ToolFunc.register(similarity);
}
