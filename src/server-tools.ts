import { ToolFunc } from "./tool-func";
import { RemoteToolFuncSchema, RemoteFuncItem } from "./utils/consts";

export interface ServerFuncItem extends RemoteFuncItem {
  allowExportFunc?: boolean
}

export declare interface ServerTools extends ServerFuncItem {
  [name: string]: any;
}

export class ServerTools extends ToolFunc {
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
