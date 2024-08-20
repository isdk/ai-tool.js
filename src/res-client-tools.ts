import { RpcMethodsClientFuncParams, RpcMethodsClientTool } from "./rpc-methods-client-tool";
import { throwError } from "./utils";
import type { ActionName } from "./utils/consts";

export interface ResClientFuncParams extends RpcMethodsClientFuncParams{
  id?: string|number
}

export interface ResClientTools {
  get?({id}: ResClientFuncParams): any
  post?(options: ResClientFuncParams): any
  put?({id}: ResClientFuncParams): any
  delete?({id}: ResClientFuncParams): any
  list?(options: ResClientFuncParams): any
}

export class ResClientTools extends RpcMethodsClientTool {
  async fetch(options: ResClientFuncParams, action: ActionName) {
    if (!options) {options = {} as any}
    if (action && this.action === 'res') {
      if (action === 'get' || action === 'delete') {
        let id = options.id
        if (!id) {throwError('id is required')}
        if (typeof id === 'string') {id = encodeURIComponent(id)}
        delete options.id
        return super.fetch(options, action, id)
      } else if (action === 'list') {
        action = 'get'
      } else if (action.startsWith('$')) {
        options.act = action
        action = 'post'
      }
    }
    return await super.fetch(options, action)
  }
}
