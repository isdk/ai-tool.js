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

  static async run(name: string, params?: any[]) {
    const func = this.items[name]
    if (func) {
      return await func.run(params)
    }
    throw new NotFoundError(`${name} to run`, 'ToolFunc');
  }

  static register(item: ToolFunc) {
    let result = !!this.items[item.name!]
    if (!result) {
      this.items[item.name!] = item
      result = true
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
    if (ToolFunc.items[name]) {
      throw new AlreadyExistsError(`Function ${name}`, ToolFunc.name)
    }
    if (options.scope) {this.scope = options.scope}
    if (typeof options.setup === 'function') {options.setup.call(this, options)}

    // initialize ProperManager
    this.initialize(options)
  }

  async run(params?: any[]) {
    return await this.func.apply(this, params)
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
        result =  _createFunction(value as string, dest.scope)
      }
      return result;
    },
  },
  params: {type: 'array'},
  result: {type: 'array'},
}

ToolFunc.defineProperties(ToolFunc, ToolFuncSchema)
