import { BaseFuncItem } from "../tool-func"

export const PASSING_SCORE = 0.618

export const ActionNames = ['get', 'post', 'put', 'delete', 'patch', 'list', 'res'] as const
export type ActionName = typeof ActionNames[number]

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
    assign(value: ActionName, dest: any, src?: any, name?: string, options?: any) {
      return value || 'post'
    },
  },
  fetchOptions: { type: 'object' },
  allowExportFunc: { type: 'boolean' },
  stream: { type: 'boolean' },
}

export interface RemoteFuncItem extends BaseFuncItem {
  apiRoot?: string
  action?: ActionName
  fetchOptions?: any
  stream?: boolean
}
