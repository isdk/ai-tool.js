import { ClientTools } from "./client-tools";
import type { ResServerFuncParams } from "./res-server-tools";
import { throwError } from "./utils";
import type { ActionName } from "./utils/consts";

export interface ResClientTools {
  get?({id}: ResServerFuncParams): any
  post?(options: ResServerFuncParams): any
  put?({id}: ResServerFuncParams): any
  delete?({id}: ResServerFuncParams): any
  list?(options: ResServerFuncParams): any
}

export class ResClientTools extends ClientTools {
  async fetch(options: ResServerFuncParams, action: ActionName) {
    if (action && this.action === 'res') {
      if (action === 'get' || action === 'delete') {
        const id = options.id
        if (!id) {throwError('id is required')}
        delete options.id
        return super.fetch(options, action, id)
      } else if (action === 'list') {
        action = 'get'
      }
    }
    return await super.fetch(options, action)
  }

  async _func(action: ActionName, options: ResServerFuncParams) {
    const res = await this.fetch(options, action)
    if (options?.stream) {
      return res
    }
    const result = await res.json()
    return result
  }

  async func(options: ResServerFuncParams) {
    const action = options.action
    if (action) {
      delete options.action
    }
    return this._func(action, options)
  }
}

export const ResClientToolsSchema = {
  methods: {
    type: 'array',
    assign(value: ActionName[], dest: any, src?: any, name?: string, options?: any) {
      if (Array.isArray(value) && !options?.isExported) {
        for (const action of value) {
          if (!dest[action]) {
            dest[action] = ((act: ActionName) => dest._func.bind(dest, act))(action)
          }
        }
      }
    },
  },
}

ResClientTools.defineProperties(ResClientTools, ResClientToolsSchema)
