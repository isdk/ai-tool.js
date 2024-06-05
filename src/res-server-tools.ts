import { getAllNames } from 'util-ex'
import { type ServerFuncParams, ServerTools } from "./server-tools";
import { type FuncParams, type FuncItem } from "./tool-func";
import { NotFoundError } from "./utils";
import { type ActionName, ActionNames } from "./utils/consts";

export interface ResServerFuncParams extends ServerFuncParams {
  id?: string|number
  // the value
  val?: any
  act?: string
}

export interface ResServerTools {
  methods: string[]
  get?({id}: ResServerFuncParams): any
  post?(options: ResServerFuncParams): any
  put?({id}: ResServerFuncParams): any
  delete?({id}: ResServerFuncParams): any
  list?(options?: ResServerFuncParams): any
}

export class ResServerTools extends ServerTools {
  action: ActionName = 'res'
  params: FuncParams = {
    'id': {type: 'string'},
    'val': {type: 'any'},
  }

  constructor(name: string|Function|FuncItem, options: FuncItem|any = {}) {
    super(name, options)
    const methods = this.methods = [] as string[]
    for (const action of ActionNames) {
      if (typeof this[action] === 'function') {
        methods.push(action)
      }
    }
    getAllNames(Object.getPrototypeOf(this)).filter(name => name.startsWith('$') && typeof this[name] === 'function').forEach(name => {
      methods.push(name)
      const n = name.slice(1)
      if (this[n] === undefined) {this[n] = this[name]}
    })
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

  getMethodFromParams(params: ResServerFuncParams) {
    let method = params?._req?.method?.toLowerCase()
    if (method === 'get' && params.id === undefined) {method = 'list'}
    if (method === 'post' && params.act) {
      method = params.act
    }
    return method
  }

  func(params: ResServerFuncParams) {
    const method = this.getMethodFromParams(params)

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
