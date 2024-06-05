import { ClientTools } from "./client-tools";
import { throwError } from "./utils";
import type { ActionName } from "./utils/consts";

export interface ResClientFuncParams {
  id?: string|number
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

export const ResClientToolsSchema = {
  methods: {
    type: 'array',
    assign(value: string[], dest: any, src?: any, name?: string, options?: any) {
      if (!options?.isExported) {
        dest.assignMethods(value)
      }
    },
  },
}

ResClientTools.defineProperties(ResClientTools, ResClientToolsSchema)
