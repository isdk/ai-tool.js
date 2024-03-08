import { ToolFunc } from "../tool-func";
import { similarity } from './similarity';

export * from './similarity';

export function registerTools() {
  ToolFunc.register(similarity);
}
