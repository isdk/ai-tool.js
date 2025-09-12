import { ClientTools } from "./client-tools";
import type { ActionName } from "./utils/consts";

export interface RpcMethodsClientFuncParams {
  act?: string
  [name: string]: any
}

export class RpcMethodsClientTool extends ClientTools {
  async fetch(options: RpcMethodsClientFuncParams, action: ActionName, subName?: any, fetchOptions?: any) {
    if (!options) {options = {} as any}
    if (action?.startsWith('$')) {
      options.act = action
      action = 'post'
    }
    return await super.fetch(options, action, subName, fetchOptions)
  }

  async _func(action: ActionName, options: RpcMethodsClientFuncParams, fetchOptions?: any) {
    const result = await this.fetch(options, action, null, fetchOptions);
    return result;
  }

  async func(options: RpcMethodsClientFuncParams) {
    const action = options.action
    if (action) {
      delete options.action
    }
    return this._func(action, options)
  }

  assignMethods(methods: string[]) {
    if (Array.isArray(methods)) {
      for (const action of methods) {
        const name = action.startsWith('$') ? action.slice(1) : action
        if (!this[name]) {
          this[name] = ((act: any) => this._func.bind(this, act))(action)
        }
      }
    }
  }
}

export const RpcMethodsClientToolSchema = {
  methods: {
    type: 'array',
    assign(value: string[], dest: RpcMethodsClientTool, src?: any, name?: string, options?: any) {
      if (!options?.isExported) {
        dest.assignMethods(value)
      }
    },
  },
}

RpcMethodsClientTool.defineProperties(RpcMethodsClientTool, RpcMethodsClientToolSchema)
