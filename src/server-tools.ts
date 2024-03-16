import { ToolFunc } from "./tool-func";
import { RemoteToolFuncSchema, RemoteFuncItem } from "./utils/consts";

export interface ServerFuncItem extends RemoteFuncItem {
  allowExportFunc?: boolean
}

export declare interface ServerTools extends ServerFuncItem {
  [name: string]: any;
}

const ServerToolItems: {[name:string]: ServerTools} = {}
Object.setPrototypeOf(ServerToolItems, ToolFunc.items)

export class ServerTools extends ToolFunc {
  static apiRoot?: string;
  static items = ServerToolItems;

  static toJSON() {
    const result:{[name:string]: ServerTools} = {}
    for (const name in this.items) {
      let item: any = this.items[name];
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
