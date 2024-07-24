import { AdvancePropertyManager } from 'property-manager';
import { _createFunction } from 'util-ex';
import { NotFoundError, throwError } from './utils/base-error';
import { IntSet } from './utils';

// the binary bit position
export const ToolAsyncMultiTask = 0
export const ToolAsyncCancelableBit = 1
export const ToolAsyncPriorityBit = 2

export enum AsyncFeatureBits {
  MultiTask = ToolAsyncMultiTask,
  Cancelable = ToolAsyncCancelableBit,
  Priority = ToolAsyncPriorityBit,
}

// bit fields
export enum AsyncFeatures {
  MultiTask = 1 << ToolAsyncMultiTask, // B0001
  Cancelable = 1 << ToolAsyncCancelableBit, // B010
  Priority = 1 << ToolAsyncPriorityBit, // B0100
}

export type FuncParamType = string
export interface FuncParam {
  name?: string;
  type?: FuncParamType;
  required?: boolean;
  description?: string;
  asyncFeatures?: number;
  depends?: {[name: string]: ToolFunc};
}

export interface FuncParams {
  [name: string]: FuncParam|FuncParamType;
}

export type TFunc = (this:ToolFunc, ...params:any[]) => any

export interface BaseFuncItem {
  name?: string;
  params?: FuncParams | FuncParam[];
  result?: string;
  scope?: any;
  tags?: string|string[];
  setup?: (this: ToolFunc, options?: FuncItem) => void;
}

export interface FuncItem extends BaseFuncItem {
  func?: TFunc;
}

export interface BaseFunc extends BaseFuncItem {
  func(...params: any): any;
}

export interface Funcs {
  [name: string]: ToolFunc
}

export declare interface ToolFunc extends BaseFunc {
  [name: string]: any;
}

export class ToolFunc extends AdvancePropertyManager {
  static items: Funcs = {};
  static dataPath: string;

  static get(name: string) {
    return this.items[name]
  }

  static list() {
    return this.items
  }

  static getByTag(tagName: string) {
    let result: ToolFunc|undefined;
    for (const name in this.list()) {
      const item = this.get(name)
      let tags = item.tags
      if (typeof tags === 'string') {
        if (tags === tagName) {
          result = item
          break
        }
      } else if (Array.isArray(tags)) {
        if (tags.indexOf(tagName) >= 0) {
          result = item
          break
        }
      }
    }
    return result
  }

  static getAllByTag(tagName: string) {
    let result: ToolFunc[] = [];
    for (const name in this.list()) {
      const item = this.get(name)
      let tags = item.tags
      if (typeof tags === 'string') {
        if (tags === tagName) {
          result.push(item)
        }
      } else if (Array.isArray(tags)) {
        if (tags.indexOf(tagName) >= 0) {
          result.push(item)
        }
      }
    }
    return result
  }

  static hasAsyncFeature(feature: AsyncFeatureBits) {
    const proto = this.prototype
    let features = proto.asyncFeatures
    if (proto._asyncFeatures) { features |= proto._asyncFeatures }
    return IntSet.has(features, feature)
  }

  static run(name: string, params?: any): Promise<any> {
    const func = this.get(name)
    if (func) {
      return func.run(params)
    }
    throw new NotFoundError(`${name} to run`, this.name);
  }

  static runSync(name: string, params?: any) {
    const func = this.get(name)
    if (func) {
      return func.runSync(params)
    }
    throw new NotFoundError(`${name} to run`, this.name);
  }

  static getFunc(name: string) {
    const func = this.get(name)
    return func?.getFunc()
  }

  static runWithPos(name: string, ...params: any[]): Promise<any> {
    const func = this.get(name)
    if (func) {
      return func.runWithPos(...params)
    }
    throw new NotFoundError(`${name} to run`, this.name);
  }

  static runWithPosSync(name: string, ...params: any[]) {
    const func = this.get(name)
    if (func) {
      return func.runWithPosSync(...params)
    }
    throw new NotFoundError(`${name} to run`, this.name);
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
        result = new this(options)
        return result.register()
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

    // initialize PropertyManager
    this.initialize(options)
    // ToolFunc.items[name] = this
  }

  register() {
    const Tools = (this.constructor as unknown as typeof ToolFunc)
    const depends = this.depends
    if (depends) {
      const keys = Object.keys(depends)
      for (const k of keys) {
        const dep = depends[k]
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

  obj2ArrParams(params?: any): any[] {
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

  runSync(params?: any) {
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

  run(params?: any): Promise<any> {
    return this.runSync(params)
  }

  runAs(name:string, params?: any): Promise<any> {
    return this.runAsSync(name, params)
  }

  runAsSync(name:string, params?: any) {
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

  runWithPos(...params: any[]): Promise<any> {
    return this.runWithPosSync(...params)
  }

  runWithPosAs(name:string, ...params: any[]): Promise<any> {
    return this.runWithPosAsSync(name, ...params)
  }

  getFuncWithPos(name?: string) {
    const result = name ? (this.constructor as any).getFuncWithPos(name) : this.runWithPosSync.bind(this)
    return result
  }

  hasAsyncFeature(feature: AsyncFeatureBits) {
    let features = this.asyncFeatures
    if (this._asyncFeatures) { features |= this._asyncFeatures }
    return IntSet.has(features, feature)
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
  setup: {type: 'function'},
  depends: {type: 'object', exported: false},
  tags: {type: ['array', 'string']},
  asyncFeatures: {
    type: 'number',
    // assign(value: IntSet|string|number, dest:ToolFunc, src?:ToolFunc, name?: string, options?: any) {
    //   let result = value;
    //   const valueType = typeof value;
    //   const isExported = options.isExported
    //   if (!isExported) {
    //     let initValue: number = 0
    //     if (value instanceof IntSet) {
    //       initValue = value.valueOf()
    //     } else {
    //       if (valueType === 'string') { initValue = parseInt(value as string) }
    //       else if (valueType === 'number') { initValue = value as number }
    //     }
    //     result = new IntSet(initValue)
    //   }
    //   return result;
    // },
  },
}

ToolFunc.defineProperties(ToolFunc, ToolFuncSchema)
