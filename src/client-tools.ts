import { Funcs, ToolFunc } from "./tool-func";

export class ClientTools extends ToolFunc {
  static items: Funcs = {};
  static get(name: string) {
    const result = ToolFunc.get(name) || this.items[name];
    return result;
  }
}
