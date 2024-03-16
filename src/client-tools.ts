import { throwError } from "./base-error";
import { Funcs, ToolFunc } from "./tool-func";
import { RemoteToolFuncSchema, RemoteFuncItem } from "./utils/consts";

export interface ClientFuncItem extends RemoteFuncItem {
}

export declare interface ClientTools extends ClientFuncItem {
  [name: string]: any;
}

const ClientToolItems: Funcs = {}
Object.setPrototypeOf(ClientToolItems, ToolFunc.items)

export class ClientTools extends ToolFunc {
  declare static apiRoot: string|undefined

  static items = ClientToolItems;

  static async loadFrom() {
    if (this.apiRoot) {
      const res = await fetch(this.apiRoot, {headers: {
        "Content-Type": "application/json",
      },})
      const items = await res.json()
      if (items) this.loadFromSync(items)
    } else {
      throwError('missing apiRoot to load tools', 'ClientTools')
    }
  }

  static loadFromSync(items: Funcs) {
    for (const name in items) {
      const funcItem = items[name] as ClientFuncItem;
      ToolFunc.register.call(this, funcItem);
    }
  }

  async func(objParam: any) {
    let res: Response
    const fetchOptions = this.fetchOptions || {}
    if (this.action === 'get') {
      if (objParam) {
        // all params change to string here
        // objParam = Object.entries(objParam)
        //   .map(([key, value]: any[]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        //   .join('&');
        objParam = 'p='+encodeURIComponent(JSON.stringify(objParam))
      }
      res = await fetch(`${this.apiRoot}/${this.name}?${objParam}`, {
        ...fetchOptions,
        headers: {
          "Content-Type": "application/json",
        },
      })
    } else {
      // defaults to post
      res = await fetch(`${this.apiRoot}/${this.name}`, {
        ...fetchOptions,
        headers: {
          "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify(objParam),
      })
    }
    const result = await res.json()
    return result
  }
}

export const ClientToolFuncSchema =  { ...RemoteToolFuncSchema }

ClientTools.defineProperties(ClientTools, ClientToolFuncSchema)
