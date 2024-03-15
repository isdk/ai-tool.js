import { FuncItem } from "../tool-func"

export const PASSING_SCORE = 0.618

export const RemoteToolFuncSchema = {
  apiRoot: {
    type: 'string',
    get(this: any){
      return this._apiRoot ?? (this.constructor as any).apiRoot
    },
    set(this: any, value: string) {
      this._apiRoot = value
    },
  },
  action: {
    type: 'string',
    assign(value: string, dest: any, src?: any, name?: string, options?: any) {
      return value || 'post'
    },
  },
  fetchOptions: { type: 'object' },
  allowExportFunc: { type: 'boolean' },
}

export interface RemoteFuncItem extends FuncItem {
  apiRoot?: string
  action?: 'get'|'post'
  fetchOptions?: any
}
