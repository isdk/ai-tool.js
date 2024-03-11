import { AdvancePropertyManager } from 'property-manager';
import { _createFunction } from 'util-ex';
import { AlreadyExistsError, NotFoundError } from './base-error';

interface FuncParam {
  name: string;
  type?: string;
  required?: boolean;
  description?: string;
}

interface FuncItem {
  func: Function;
  name?: string;
  params?: FuncParam[];
  result?: string;
  scope?: any;
  setup?: (this: ToolFunc, options?: FuncItem) => void;
}

interface Funcs {
  [name: string]: ToolFunc
}

export declare interface ToolFunc extends FuncItem {
  [name: string]: any;
}

export class ToolFunc extends AdvancePropertyManager {
  static items: Funcs = {};
  static dataPath: string;

  static get(name: string) {
    return this.items[name]
  }

  static async run(name: string, ...params: any[]) {
    const func = this.items[name]
    if (func) {
      return await func.run(...params)
    }
    throw new NotFoundError(`${name} to run`, 'ToolFunc');
  }

  static runSync(name: string, ...params: any[]) {
    const func = this.items[name]
    if (func) {
      return func.runSync(...params)
    }
    throw new NotFoundError(`${name} to run`, 'ToolFunc');
  }

  static getFunc(name: string) {
    const func = this.items[name]
    if (func) {
      return func.func.bind(func)
    }
  }

  static register(item: ToolFunc|FuncItem): boolean
  static register(name: string, options: FuncItem): boolean
  static register(func: Function, options: FuncItem): boolean
  static register(name: ToolFunc|string|Function|FuncItem, options: FuncItem|any = {}) {
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

    name = options.name as string

    let result = !!this.items[name!]
    // console.log('🚀 ~ ToolFunc ~ register ~ result:',name, result)
    if (!result) {
      if (!(options instanceof ToolFunc)) { options = new ToolFunc(options) }
      this.items[name] = options
      result = true
    } else {result = false}
    return result
  }

  static unregister(name: string) {
    delete this.items[name]
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
    if (ToolFunc.items[name]) {
      throw new AlreadyExistsError(`Function ${name}`, ToolFunc.name)
    }
    if (options.scope) {this.scope = options.scope}
    if (typeof options.setup === 'function') {options.setup.call(this, options)}

    // initialize ProperManager
    this.initialize(options)
    // ToolFunc.items[name] = this
  }

  register() {return ToolFunc.register(this)}

  runSync(...params:any[]) {
    return this.func(...params)
  }

  runAsSync(name: string, ...params: any[]) {
    return ToolFunc.runSync(name, ...params)
  }

  async run(...params: any[]) {
    // console.log('🚀 ~ ToolFunc ~ run ~ params:', this.name, params)
    const result = await (Array.isArray(params) ? this.func(...params) : this.func())
    return result
  }

  async runAs(name:string, ...params: any[]) {
    const result = await ToolFunc.run(name, ...params)
    return result
  }

  getFunc(name?: string) {
    const result = name ? ToolFunc.getFunc(name) : this.func.bind(this)
    return result
  }
}

export const ToolFuncSchema = {
  name: {type: 'string'},
  description: {type: 'string'},
  func: {
    type: 'function',
    required: true,
    assign(value: Function|string, dest:ToolFunc, src?:ToolFunc, name?: string, options?: any) {
      let result = value;
      const valueType = typeof value;
      const isExported = options.isExported
      if (isExported) {
        result = valueType === 'function' ? value.toString() : value;
      } else {
        if (valueType !== 'string') {value = value.toString()}
        result = _createFunction(value as string, dest.scope)
      }
      return result;
    },
  },
  params: {type: 'array'},
  result: {type: 'array'},
}

ToolFunc.defineProperties(ToolFunc, ToolFuncSchema)
