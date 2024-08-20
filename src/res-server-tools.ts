import { type FuncParams, type FuncItem } from "./tool-func";
import { type ActionName, ActionNames } from "./utils/consts";
import { RpcMethodsServerFuncParams, RpcMethodsServerTool } from './rpc-methods-server-tool';

export interface ResServerFuncParams extends RpcMethodsServerFuncParams {
  id?: string|number
  // the value
  val?: any
}

export interface ResServerTools {
  get?({id}: ResServerFuncParams): any
  post?(options: ResServerFuncParams): any
  put?({id}: ResServerFuncParams): any
  delete?({id}: ResServerFuncParams): any
  list?(options?: ResServerFuncParams): any
}

export class ResServerTools extends RpcMethodsServerTool {
  static SpecialRpcMethodNames = ActionNames as any
  action: ActionName = 'res'
  params: FuncParams = {
    'id': {type: 'string'},
    'val': {type: 'any'},
  }

  constructor(name: string|Function|FuncItem, options: FuncItem|any = {}) {
    super(name, options)
  }

  getMethodFromParams(params: ResServerFuncParams) {
    let method = params?._req?.method?.toLowerCase()
    if (method === 'get' && params.id === undefined) {method = 'list'}
    if (method === 'post' && params.act) {
      method = params.act
    }
    return method
  }

  castParams(params: RpcMethodsServerFuncParams) {
    if (params.id !== undefined) {
      params.id = this.cast('id', params.id)
    }
    return params
  }
}
