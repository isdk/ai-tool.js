import { ToolFunc } from "./tool-func";
import { RemoteToolFuncSchema } from "./utils/consts";

export class ServerTools extends ToolFunc {
  declare apiRoot: string;
  declare action: string;
  declare allowExportFunc: boolean;

  static apiRoot?: string;
  static items: {[name:string]: ServerTools} = {}

  static get(name: string) {
    const result = ToolFunc.get(name) || this.items[name];
    return result;
  }

  static toJSON() {
    const result:{[name:string]: ServerTools} = {}
    for (const name in this.items) {
      let item = this.items[name];
      if (!item.allowExportFunc) {
        item = item.toJSON()
        delete item.func;
      }
      result[name] = item;
    }
    return result
  }
}

export const ServerToolFuncSchema = { ...RemoteToolFuncSchema }

ServerTools.defineProperties(ServerTools, ServerToolFuncSchema)
