import { type ServerFuncParams, ServerTools } from "./server-tools";
import { type FuncParams, type FuncItem } from "./tool-func";
import { NotFoundError } from "./utils";
import { type ActionName, ActionNames } from "./utils/consts";

export interface ResServerFuncParams extends ServerFuncParams {
  id?: string
  // the value
  val?: any
}

export interface ResServerTools {
  methods: ActionName[]
  get?({id}: ResServerFuncParams): any
  post?(options: ResServerFuncParams): any
  put?({id}: ResServerFuncParams): any
  delete?({id}: ResServerFuncParams): any
  list?(options: ResServerFuncParams): any
}

export class ResServerTools extends ServerTools {
  action: ActionName = 'res'
  params: FuncParams = {
    'id': {type: 'string'},
    'val': {type: 'any'},
  }

  constructor(name: string|Function|FuncItem, options: FuncItem|any = {}) {
    super(name, options)
    const methods = this.methods = [] as ActionName[]
    for (const action of ActionNames) {
      if (typeof this[action] === 'function') {
        methods.push(action)
      }
    }
  }

  cast(key: string, value: any) {
    let vType = this.params[key]
    if (vType) {
      if (typeof vType !== 'string') {vType = vType.type as string}
      if (vType === 'number') {
        value = Number(value)
      }
    }
    return value
  }

  func(params: ResServerFuncParams) {
    let method = params?._req?.method?.toLowerCase()
    if (method === 'get' && params.id === undefined) {method = 'list'}
    if (method && typeof this[method] === 'function') {
      if (params.id !== undefined) {
        params.id = this.cast('id', params.id)
      }
      return this[method](params)
    } else {throw new NotFoundError(method!, this.name)}
  }
}

export const ResServerToolsSchema = {
  methods: {
    type: 'array',
  },
}

ResServerTools.defineProperties(ResServerTools, ResServerToolsSchema)
