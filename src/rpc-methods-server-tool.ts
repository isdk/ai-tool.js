import { getAllNames } from 'util-ex'
import { type ServerFuncParams, ServerTools } from "./server-tools";
import { type FuncParams, type FuncItem } from "./tool-func";
import { NotFoundError } from "./utils";

export interface RpcMethodsServerFuncParams extends ServerFuncParams {
  act?: string
}

export interface RpcMethodsServerTool {
  methods: string[]
}

export class RpcMethodsServerTool extends ServerTools {
  declare static SpecialRpcMethodNames?: string[]

  params: FuncParams = {
    'act': {type: 'string'},
  }

  // these special RPC methods are without prefix `$`
  get SpecialRpcMethodNames() {
    const ctor = this.constructor as unknown as RpcMethodsServerTool
    return ctor.SpecialRpcMethodNames
  }

  initRpcMethods(methods = this.methods) {
    const ActionNames = this.SpecialRpcMethodNames
    if (Array.isArray(ActionNames))
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

  constructor(name: string|Function|FuncItem, options: FuncItem|any = {}) {
    super(name, options)
    const methods = this.methods = [] as string[]
    this.initRpcMethods(methods)
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

  getMethodFromParams(params: RpcMethodsServerFuncParams) {
    const method = params?.act
    return method
  }

  castParams(params: RpcMethodsServerFuncParams) {
    return params
  }

  func(params: RpcMethodsServerFuncParams) {
    const method = this.getMethodFromParams(params)

    if (method && typeof this[method] === 'function') {
      params = this.castParams(params)
      return this[method](params)
    } else {throw new NotFoundError(method!, this.name)}
  }
}

export const RpcMethodsServerToolSchema = {
  methods: {
    type: 'array',
  },
}

RpcMethodsServerTool.defineProperties(RpcMethodsServerTool, RpcMethodsServerToolSchema)
