import { AdvancePropertyManager } from 'property-manager';
import { _createFunction } from 'util-ex';
import { NotFoundError, throwError } from './base-error';

export type FuncParamType = string
export interface FuncParam {
  name: string;
  type?: FuncParamType;
  required?: boolean;
  description?: string;
  depends?: ToolFunc[];
}

export interface FuncParams {
  [name: string]: FuncParam|FuncParamType;
}

export type TFunc = (this:ToolFunc, ...params:any[]) => any

export interface FuncItem {
  func?: TFunc;
  name?: string;
  params?: FuncParams | FuncParam[];
  result?: string;
  scope?: any;
  setup?: (this: ToolFunc, options?: FuncItem) => void;
}

export interface Funcs {
  [name: string]: ToolFunc
}

export declare interface ToolFunc {
  [name: string]: any;
}

export class ToolFunc extends AdvancePropertyManager {
  static items: Funcs = {};
  static dataPath: string;

  static get(name: string) {
    return this.items[name]
  }

  static async run(name: string, params: any) {
    const func = this.get(name)
    if (func) {
      return await func.run(params)
    }
    throw new NotFoundError(`${name} to run`, 'ToolFunc');
  }

  static runSync(name: string, params: any) {
    const func = this.get(name)
    if (func) {
      return func.runSync(params)
    }
    throw new NotFoundError(`${name} to run`, 'ToolFunc');
  }

  static getFunc(name: string) {
    const func = this.get(name)
    return func?.getFunc()
  }

  static async runWithPos(name: string, ...params: any[]) {
    const func = this.get(name)
    if (func) {
      return await func.runWithPos(...params)
    }
    throw new NotFoundError(`${name} to run`, 'ToolFunc');
  }

  static runWithPosSync(name: string, ...params: any[]) {
    const func = this.get(name)
    if (func) {
      return func.runWithPosSync(...params)
    }
    throw new NotFoundError(`${name} to run`, 'ToolFunc');
  }

  static getFuncWithPos(name: string) {
    const func = this.get(name)
    return func?.getFuncWithPos()
  }

  static register(name: string, options: FuncItem): boolean|ToolFunc
  static register(func: Function, options: FuncItem): boolean|ToolFunc
  static register(name: string|ToolFunc|Function|FuncItem, options?: FuncItem): boolean|ToolFunc
  static register(name: ToolFunc|string|Function|FuncItem, options: FuncItem|ToolFunc = {} as any) {
    switch (typeof name) {
      case 'string':
        options.name = name
        break
      case 'function':
        options.func = name as TFunc
        break
      case 'object':
        options = name
        break
    }

    name = options.name as string

    let result: boolean|ToolFunc = !!this.get(name)
    if (!result) {
      if (!(options instanceof ToolFunc)) {
        options = new this(options)
        return options.register()
      }
      this.items[name] = options as ToolFunc
      result = options as ToolFunc
    } else {result = false}
    return result
  }

  static unregister(name: string): ToolFunc|undefined {
    const result = this.items[name]
    if (result) {
      delete this.items[name]
    }
    return result
  }

  constructor(name: string|Function|FuncItem, options: FuncItem|any = {}) {
    super()

    switch (typeof name) {
      case 'string':
        options.name = name
        break
      case 'function':
        options.func = name
        break
      case 'object':
        options = name
        break
    }
    this.name = name = options.name as string
    // const ctor = this.constructor as unknown as typeof ToolFunc;
    // if (ctor.items[name]) {
    //   throw new AlreadyExistsError(`Function ${name}`, ToolFunc.name)
    // }
    if (options.scope) {this.scope = options.scope}
    if (typeof options.setup === 'function') {options.setup.call(this, options)}

    // initialize ProperManager
    this.initialize(options)
    // ToolFunc.items[name] = this
  }

  register() {
    const Tools = (this.constructor as unknown as typeof ToolFunc)
    if (Array.isArray(this.depends)) {
      for (const dep of this.depends) {
        if (dep instanceof ToolFunc) { dep.register() }
      }
    }
    return Tools.register(this)
  }

  unregister() {
    return (this.constructor as any).unregister(this.name)
  }

  arr2ObjParams(params: any[]) {
    if (this.params && (params.length > 1 || Array.isArray(params[0]) || (params[0] && typeof params[0] !== 'object'))) {
      const _p: any = {}
      const keys = Object.keys(this.params)
      let len = Math.min(keys.length, params.length)
      for (let i = 0; i < len; i++) {
        _p[keys[i]] = params[i]
      }
      params=[_p]
    }
    return params
  }

  obj2ArrParams(params: any): any[] {
    const result: any[] = []
    if (params && this.params && Array.isArray(this.params)) {
      const keys = Object.keys(params)
      let len = Math.min(keys.length, this.params.length)
      for (let i = 0; i < len; i++) {
        result.push(params[keys[i]])
      }
    }
    return result;

  }

  runSync(params: any) {
    const isPosParams = this.params && Array.isArray(this.params)
    if (Array.isArray(params)) {
      if (isPosParams) return this.func!(...params)
      throwError('the function is not support array params, the params must be object!', this.name)
    }
    if (isPosParams) {
      params = this.obj2ArrParams(params) as any[]
      console.warn('Warning:Use runWithPos() instead of run() for the "'+this.name+'" is function with position params')
      return this.func!(...params)
    }
    return this.func!(params)
  }

  async run(params: any) {
    return await this.runSync(params)
  }

  async runAs(name:string, params: any) {
    const result = await (this.constructor as any).run(name, params)
    return result
  }

  runAsSync(name:string, params: any) {
    const result = (this.constructor as any).runSync(name, params)
    return result
  }

  getFunc(name?: string) {
    const result = name ? (this.constructor as any).getFunc(name) : this.runSync.bind(this)
    return result
  }

  runWithPosSync(...params:any[]) {
    if (this.params && !Array.isArray(this.params)) {
      params = this.arr2ObjParams(params)
    }
    return this.func!(...params)
  }

  runWithPosAsSync(name: string, ...params: any[]) {
    return (this.constructor as any).runWithPosSync(name, ...params)
  }

  async runWithPos(...params: any[]) {
    const result = await this.runWithPosSync(...params)
    return result
  }

  async runWithPosAs(name:string, ...params: any[]) {
    const result = await (this.constructor as any).runWithPos(name, ...params)
    return result
  }

  getFuncWithPos(name?: string) {
    const result = name ? (this.constructor as any).getFuncWithPos(name) : this.runWithPosSync.bind(this)
    return result
  }
}

export const ToolFuncSchema = {
  name: {type: 'string'},
  description: {type: 'string'},
  func: {
    type: 'function',
    assign(value: Function|string, dest:ToolFunc, src?:ToolFunc, name?: string, options?: any) {
      let result = value;
      const valueType = typeof value;
      const isExported = options.isExported
      if (isExported) {
        result = valueType === 'function' ? value.toString() : value;
      } else if (value) {
        if (valueType !== 'string') {value = value.toString()}
        result = _createFunction(value as string, dest.scope)
      }
      return result;
    },
  },
  params: {type: 'object'},
  result: {type: 'any'},
  depends: {type: 'array'},
}

ToolFunc.defineProperties(ToolFunc, ToolFuncSchema)
