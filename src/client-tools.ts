import { createError, throwError } from "./utils/base-error";
import { Funcs, ToolFunc } from "./tool-func";
import { RemoteToolFuncSchema, type RemoteFuncItem, type ActionName } from "./utils/consts";

export interface ClientFuncItem extends RemoteFuncItem {
}

export declare interface ClientTools extends ClientFuncItem {
  [name: string]: any;
}

// const ClientToolItems: Funcs = {}
// Object.setPrototypeOf(ClientToolItems, ToolFunc.items)

export class ClientTools extends ToolFunc {
  declare apiRoot: string|undefined;

  private static _apiRoot?: string;
  static get apiRoot() {
    return ClientTools._apiRoot
  }

  static setApiRoot(v: string) {
    ClientTools._apiRoot = v
  }

  // static items = ClientToolItems;

  static async loadFrom() {
    if (this._apiRoot) {
      const res = await fetch(this._apiRoot, {headers: {
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
      const item = this.get(name)
      const funcItem = items[name] as ClientFuncItem;
      if (!item) {
        this.register(funcItem);
      } else if (item instanceof ClientTools) {
        item.assign(funcItem)
        // console.warn('🚀 ~ ClientTools ~ loadFromSync:', name, 'already registered', item.apiRoot, this.apiRoot)
      } else {
        throwError(`${name} already registered as ${item.constructor.name}`, 'ClientTools')
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

  async fetch(objParam?: any, act?: ActionName, subName?: any) {
    const fetchOptions = {...this.fetchOptions}
    const HasContentMethods = ['post', 'put', 'patch']
    if (!act) { act = this.action || 'post'}
    if (act === 'res') { act = 'get' }

    if ((!fetchOptions.headers || !fetchOptions.headers['Content-Type']) && HasContentMethods.includes(act)) {
      fetchOptions.headers = {
        "Content-Type": "application/json",
        ...fetchOptions.headers,
      }
    }
    if (objParam?.stream && !fetchOptions.headers.Connection) {
      fetchOptions.headers.Connection = 'keep-alive'
    }
    if (subName) {
      if (typeof subName !== 'string') {subName = JSON.stringify(subName)}
      subName = this.name + '/' + subName

    } else {
      subName = this.name
    }

    fetchOptions.method =act.toUpperCase()
    let urlPart: string
    if (act === 'get' || act === 'delete') {
      urlPart  = subName + this.getUrlParams(objParam)
    } else {
      fetchOptions.body = JSON.stringify(objParam)
      urlPart = subName!
    }

    if (fetchOptions.headers && !HasContentMethods.includes(act)) {
      delete fetchOptions.headers['Content-Type']
    }

    const res = await fetch(`${this.apiRoot}/${urlPart}`, fetchOptions)
    if (!res.ok) {
      const err = await this.errorFrom(res)
      throw err
    }
    return res
  }

  async errorFrom(res: Response) {
    let errCode = res.status
    let errMsg = res.statusText
    let name = this.name
    let data: any
    if (res.body) {
      const text = await res.text()
      try {
        const body = JSON.parse(text)
        if (body) {
          if (body.error) {errMsg = body.error}
          if (body.name) {name = body.name}
          if (body.data) {
            data = body.data
            data.name = name
            if (data.what) {
              data.msg = errMsg
              errMsg = data.what
            }
          }
          if (body.message) {
            errMsg = errMsg + ':' + body.message;
          }
        }
      } catch (e) {
        console.warn('🚀 ~ parse error body to json:', e)
      }
    }
    return createError(errMsg, name, errCode)
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
