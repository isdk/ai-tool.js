import { Funcs, ToolFunc } from "./tool-func";
import { RemoteToolFuncSchema, RemoteFuncItem } from "./utils/consts";

export interface ClientFuncItem extends RemoteFuncItem {
}

export class ClientTools extends ToolFunc {
  static items: Funcs = {};
  static get(name: string) {
    const result = ToolFunc.get(name) || this.items[name];
    return result;
  }

  static loadFrom(items: Funcs) {
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
      res = await fetch(`${this.apiRoot}/${this.name}?${objParam}`, fetchOptions)
    } else {
      // defaults to post
      res = await fetch(`${this.apiRoot}/${this.name}`, {
        ...fetchOptions,
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
