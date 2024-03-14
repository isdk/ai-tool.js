import { FuncItem, ToolFunc } from "./tool-func";
import { ClientTools } from "./client-tools";
import { throwError } from "./base-error";

interface ServerFuncItem extends FuncItem {
  apiRoot?: string
  action?: 'get'|'post'
  fetchOptions?: any
  disableClient?: boolean
}

async function runClient(this: ClientTools, objParam: any) {
  let res: Response
  const fetchOptions = this.fetchOptions || {}
  if (this.action === 'get') {
    if (objParam) {
      objParam = Object.entries(objParam)
        .map(([key, value]: any[]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
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
  return res.json()
}

export class ServerTools extends ToolFunc {
  declare apiRoot: string;
  declare action: string;

  static apiRoot?: string;
  static items: {[name:string]: ServerTools} = {}

  static get(name: string) {
    const result = ToolFunc.get(name) || this.items[name];
    return result;
  }

  static register(name: ToolFunc|string|Function|ServerFuncItem, options: ServerFuncItem = {} as any): ServerTools {
    let result: boolean|ServerTools = ToolFunc.register.call(this, name, options) as ServerTools
    if (result && !result.disableClient) {
      const clientFn = ClientTools.register(result.name!, {
        func: runClient,
        params: result.params,
        result: result.result,
      }) as ToolFunc
      if (clientFn) {
        clientFn.apiRoot = result.apiRoot
        clientFn.action = result.action
        clientFn.fetchOptions = result.fetchOptions
      } else {
        result.unregister()
        throwError('can not register "' + result.name! + '" to ClientTools', 'ServerTools')
      }
    }
    return result
  }

  static unregister(name: string): ServerTools | undefined {
    const result = ToolFunc.unregister.call(this, name) as ServerTools
    if (result && !result.disableClient) {
      ClientTools.unregister(name)
    }
    return result
  }

  constructor(name: string|Function|ServerFuncItem, options: ServerFuncItem|any = {}) {
    super(name, options)
    if (this.action == null) {this.action = 'post' }
  }
}

export const ServerToolFuncSchema = {
  apiRoot: {
    type: 'string',
    get(this: ServerTools){
      return this._apiRoot ?? (this.constructor as any).apiRoot
    },
    set(this: ServerTools, value: string) {
      this._apiRoot = value
    },
  },
  action: {
    type: 'string',
    assign(value: string, dest:ServerTools, src?:ToolFunc, name?: string, options?: any) {
      return value || 'post'
    },
  },
  fetchOptions: { type: 'string' },
  disableClient: { type: 'boolean' },
}

ServerTools.defineProperties(ServerTools, ServerToolFuncSchema)
