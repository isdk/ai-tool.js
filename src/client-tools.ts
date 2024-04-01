import { throwError } from "./utils/base-error";
import { Funcs, ToolFunc } from "./tool-func";
import { RemoteToolFuncSchema, type RemoteFuncItem, type ActionName } from "./utils/consts";

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
    if (objParam !== undefined) {
      const objParamStr = JSON.stringify(objParam)
      if (objParamStr !== '{}' && objParamStr !== '[]' && objParamStr !== '""') {
        // not empty params
        return '?p=' + encodeURIComponent(objParamStr)
      }
    }
    return ''
  }

  async fetch(objParam?: any, act?: ActionName, subName?: string) {
    const fetchOptions = {...this.fetchOptions}
    if (!fetchOptions.headers || !fetchOptions.headers['Content-Type']) {
      fetchOptions.headers = {
        "Content-Type": "application/json",
        ...fetchOptions.headers,
      }
    }
    if (objParam?.stream && !fetchOptions.headers.Connection) {
      fetchOptions.headers.Connection = 'keep-alive'
    }
    if (!act) { act = this.action!}
    if (act === 'res') { act = 'get' }
    subName = subName ? this.name + '/' + subName : this.name

    fetchOptions.method =act.toUpperCase()
    let urlPart: string
    if (act === 'get' || act === 'delete') {
      urlPart  = subName + this.getUrlParams(objParam)
    } else {
      fetchOptions.body = JSON.stringify(objParam)
      urlPart = subName!
    }

    console.log('🚀 ~ ClientTools ~ fetch:', fetchOptions.method, `${this.apiRoot}/${urlPart}`)
    const res = await fetch(`${this.apiRoot}/${urlPart}`, fetchOptions)
    return res
  }

  async func(objParam: any) {
    const res = await this.fetch(objParam)
    if (objParam?.stream) {
      return res
    }
    const result = await res.json()
    return result
  }
}

export const ClientToolFuncSchema =  { ...RemoteToolFuncSchema }

ClientTools.defineProperties(ClientTools, ClientToolFuncSchema)
