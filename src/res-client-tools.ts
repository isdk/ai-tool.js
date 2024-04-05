import { ClientTools } from "./client-tools";
import { throwError } from "./utils";
import type { ActionName } from "./utils/consts";

export interface ResClientFuncParams {
  id?: string
  act?: string
  [name: string]: any
}

export interface ResClientTools {
  get?({id}: ResClientFuncParams): any
  post?(options: ResClientFuncParams): any
  put?({id}: ResClientFuncParams): any
  delete?({id}: ResClientFuncParams): any
  list?(options: ResClientFuncParams): any
}

export class ResClientTools extends ClientTools {
  async fetch(options: ResClientFuncParams, action: ActionName) {
    if (!options) {options = {} as any}
    if (action && this.action === 'res') {
      if (action === 'get' || action === 'delete') {
        const id = options.id
        if (!id) {throwError('id is required')}
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

  async _func(action: ActionName, options: ResClientFuncParams) {
    const res = await this.fetch(options, action)
    if (options?.stream) {
      return res
    }
    const result = await res.json()
    return result
  }

  async func(options: ResClientFuncParams) {
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
    assign(value: string[], dest: any, src?: any, name?: string, options?: any) {
      if (Array.isArray(value) && !options?.isExported) {
        for (const action of value) {
          const name = action.startsWith('$') ? action.slice(1) : action
          if (!dest[name]) {
            dest[name] = ((act: string) => dest._func.bind(dest, act))(action)
          }
        }
      }
    },
  },
}

ResClientTools.defineProperties(ResClientTools, ResClientToolsSchema)
