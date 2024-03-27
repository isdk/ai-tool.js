import { throwError } from "./utils/base-error";
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
      if (!this.get(name)) {
        const funcItem = items[name] as ClientFuncItem;
        this.register(funcItem);
      }
    }
  }

  static async fetch(name: string, objParam?: any) {
    const func = this.get(name)
    if (func && func.fetch) {
      return func.fetch(objParam)
    }
  }

  getUrlParams(objParam: any) {
    return objParam !== undefined ? '?p=' + encodeURIComponent(JSON.stringify(objParam)) : ''
  }

  async fetch(objParam?: any) {
    const fetchOptions = {...this.fetchOptions}
    if (!fetchOptions.headers || !fetchOptions.headers['Content-Type']) {
      fetchOptions.headers = {
        "Content-Type": "application/json",
        ...fetchOptions.headers,
      }
    }
    let urlPart: string
    if (this.action === 'get') {
      urlPart  = this.name + this.getUrlParams(objParam)
    } else {
      fetchOptions.method = 'POST'
      fetchOptions.body = JSON.stringify(objParam)
      urlPart = this.name!
      // defaults to post
    }

    console.log('🚀 ~ ClientTools ~ fetch:', `${this.apiRoot}/${urlPart}`)
    const res = await fetch(`${this.apiRoot}/${urlPart}`, fetchOptions)
    return res
  }

  async func(objParam: any) {
    const res = await this.fetch(objParam)
    const result = await res.json()
    return result
  }
}

export const ClientToolFuncSchema =  { ...RemoteToolFuncSchema }

ClientTools.defineProperties(ClientTools, ClientToolFuncSchema)
