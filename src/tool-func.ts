import { assign, defaultsDeep } from 'lodash-es';
import { AdvancePropertyManager } from 'property-manager';
import { _createFunction } from 'util-ex';
import { NotFoundError, throwError } from './utils/base-error';
import { AsyncFeatureBits, IntSet } from './utils';

/**
 * Represents the data type of a function parameter as a string (e.g., `'string'`, `'number'`).
 */
export type FuncParamType = string
/**
 * Describes a single function parameter.
 */
export interface FuncParam {
  /**
   * The name of the parameter.
   */
  name?: string;

  /**
   * The data type of the parameter (as a string identifier).
   */
  type?: FuncParamType;

  /**
   * Whether the parameter is required.
   */
  required?: boolean;

  /**
   * A description of the parameter.
   */
  description?: string;
}

/**
 * A map of function parameters, where each key is the parameter name and the value is either:
 * - A FuncParam object
 * - Or a simple type string
 */
export interface FuncParams {
  [name: string]: FuncParam|FuncParamType;
}

/**
 * Signature of a tool function.
 *
 * @param this - Bound context to the ToolFunc instance.
 * @param params - Variadic arguments passed to the function.
 * @returns Function result.
 */
export type TFunc = (this:ToolFunc, ...params:any[]) => any

/**
 * Base configuration item for a tool function.
 */
export interface BaseFuncItem {
  /**
   * Name of the function.
   */
  name?: string;
  /**
   * Parameter definitions, either as an object or array.
   */
  params?: FuncParams | FuncParam[];
  /**
   * Expected return type of the function (as a string or JSON schema object)
   */
  result?: string|Record<string, any>;
  /**
   * Execution scope/context for the function.
   */
  scope?: any;
  /**
   * Tags used for grouping or filtering functions.
   */
  tags?: string|string[];
  /**
   * Setup method called during initialization.
   */
  setup?: (this: ToolFunc, options?: FuncItem) => void;
  /**
   * Whether this function should be treated as a server-side API.
   */
  isApi?: boolean;
  /**
   * Whether this function supports streaming output.
   */
  stream?: boolean;
  /**
   * Optional aliases for the function. Can be a string or array.
   */
  alias?: string|string[];
  /**
   * Async feature flags represented as bitmasks.
   */
  asyncFeatures?: number;
  /**
   * Map of dependencies this function has on other tool functions.
   */
  depends?: {[name: string]: ToolFunc};
  /**
   * Description of the function.
   */
  description?: string;
  /**
   * Title of the function (for UI display and AI used).
   */
  title?: string;
}

/**
 * Extends BaseFuncItem with an optional function implementation.
 */
export interface FuncItem extends BaseFuncItem {
  /**
   * Implementation of the tool function.
   */
  func?: TFunc;
}

/**
 * Enforces that the function implementation must be present.
 */
export interface BaseFunc extends BaseFuncItem {
  /**
   * The actual function implementation.
   */
  func(...params: any): any;
}

/**
 * A map of registered ToolFunc instances indexed by name.
 */
export interface Funcs {
  [name: string]: ToolFunc
}

/**
 * Interface representing a package of tool functions with registration lifecycle methods.
 */
export interface ToolFuncPackage {
  /**
   * Name of the package.
   */
  name: string
  /**
   * Method to register functions from the package.
   */
  register: (data?: any) => void;
  /**
   * Optional method to unregister functions.
   */
  unregister?: () => void;
}

export declare interface ToolFunc extends BaseFunc {
  [name: string]: any;
}

/**
 * A class for managing reusable tool functions with advanced features such as:
 * - Metadata
 * - Dependency resolution
 * - Tag-based querying
 * - Async feature detection
 * - Aliasing
 *
 * @extends AdvancePropertyManager
 */
export class ToolFunc extends AdvancePropertyManager {
  /**
   * Stores all registered ToolFunc instances.
   */
  static items: Funcs = {};
  /**
   * Maps aliases to actual function names.
   */
  static aliases: {[name: string]: string} = {};
  static dataPath: string;

  /**
   * Retrieves a function by name or alias.
   */
  static get(name: string) {
    let result = this.items[name];
    if (!result && (name = this.aliases[name])) {
      result = this.items[name]
    }
    return result
  }

  /**
   * Returns all registered functions.
   */
  static list() {
    return this.items
  }

  /**
   * Gets the first registered function with the given tag.
   */
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

  /**
   * Gets all functions with the specified tag.
   */
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

  /**
   * Checks whether any registered function has the specified async feature bit.
   */
  static hasAsyncFeature(feature: AsyncFeatureBits) {
    const proto = this.prototype
    let features = proto.asyncFeatures ?? 0
    if (proto._asyncFeatures) { features |= proto._asyncFeatures }
    return IntSet.has(features, feature)
  }

  /**
   * Asynchronously runs a function by name.
   */
  static run(name: string, params?: any): Promise<any> {
    const func = this.get(name)
    if (func) {
      return func.run(params)
    }
    throw new NotFoundError(`${name} to run`, this.name);
  }

  /**
   * Synchronously runs a function by name.
   */
  static runSync(name: string, params?: any) {
    const func = this.get(name)
    if (func) {
      return func.runSync(params)
    }
    throw new NotFoundError(`${name} to run`, this.name);
  }

  /**
   * Gets the raw function reference for a registered function.
   */
  static getFunc(name: string) {
    const func = this.get(name)
    return func?.getFunc()
  }

  /**
   * Executes the function using positional arguments asynchronously.
   */
  static runWithPos(name: string, ...params: any[]): Promise<any> {
    const func = this.get(name)
    if (func) {
      return func.runWithPos(...params)
    }
    throw new NotFoundError(`${name} to run`, this.name);
  }

  /**
   * Executes the function using positional arguments synchronously.
   */
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

  /**
   * Registers a new tool function with optional metadata.
   *
   * Supports multiple overloads:
   * - `register(name: string, options: FuncItem)`
   * - `register(func: Function, options: FuncItem)`
   * - `register(name: string|Function|FuncItem, options?: FuncItem)`
   */
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

      if (options.alias) {
        const aliases = options.alias
        if (typeof aliases === 'string') {
          if (this.aliases[aliases]) {
            throwError(`Alias ${aliases} already exists for ${name}`)
          }
          this.aliases[aliases] = name
        } else if (Array.isArray(aliases)) {
          for (const alias of aliases) {
            if (this.aliases[alias]) {
              throwError(`Alias ${alias} already exists for ${name}`)
            }
            this.aliases[alias] = name
          }
        }
      }
      result = options as ToolFunc
    } else {result = false}
    return result
  }

  /**
   * Unregisters a function by name.
   */
  static unregister(name: string): ToolFunc|undefined {
    const result = this.get(name)
    if (result) {
      delete this.items[name]
      if (result.alias) {
        const aliases = result.alias
        if (typeof aliases === 'string') {
          delete this.aliases[aliases]
        } else if (Array.isArray(aliases)) {
          for (const alias of aliases) {
            delete this.aliases[alias]
          }
        }
      }
    }
    return result
  }

  /**
   * Initializes a new ToolFunc instance.
   *
   * @param name - Either a function name, function body, or config object.
   * @param options - Optional configuration object.
   */
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

  /**
   * Registers the current instance into the global registry.
   */
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

  /**
   * Removes the current instance from the global registry.
   */
  unregister() {
    return (this.constructor as any).unregister(this.name)
  }

  /**
   * Converts positional arguments into an object format based on declared parameters.
   */
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

  /**
   * Converts an object of parameters into an array format.
   */
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

  /**
   * Executes the function synchronously with the provided parameters.
   */
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

  /**
   * Executes the function asynchronously.
   */
  run(params?: any): Promise<any> {
    return this.runSync(params)
  }

  /**
   * Asynchronously runs the function as another registered function by name.
   *
   * This method delegates to `runAsSync()` internally.
   *
   * @param name - The name of the target function to run.
   * @param params - Optional parameters to pass to the function.
   * @returns A promise that resolves with the result of the function execution.
   */
  runAs(name:string, params?: any): Promise<any> {
    return this.runAsSync(name, params)
  }

  /**
   * Synchronously runs the function as another registered function by name.
   *
   * This is a convenience method that forwards the call to the static `runSync()` method.
   *
   * @param name - The name of the target function to run.
   * @param params - Optional parameters to pass to the function.
   * @returns The result of the function execution.
   */
  runAsSync(name:string, params?: any) {
    const result = (this.constructor as any).runSync(name, params)
    return result
  }

  /**
   * Gets a bound function reference for execution.
   *
   * If a name is provided, it retrieves the function via the class-level `getFunc()` method.
   * Otherwise, it returns a bound version of `runSync` with `this` context preserved.
   *
   * @param name - Optional name of the function to retrieve.
   * @returns A function reference or `undefined` if not found.
   */
  getFunc(name?: string) {
    const result = name ? (this.constructor as typeof ToolFunc).getFunc(name) : this.runSync.bind(this)
    return result
  }

  /**
   * Executes the function synchronously using positional arguments.
   *
   * If the declared parameters are not in array form, it first converts the positional arguments
   * into an object format using `arr2ObjParams()`.
   *
   * @param params - Positional arguments passed to the function.
   * @returns The result of the function execution.
   */
  runWithPosSync(...params:any[]) {
    if (this.params && !Array.isArray(this.params)) {
      params = this.arr2ObjParams(params)
    }
    return this.func!(...params)
  }

  /**
   * Synchronously runs another function by name using positional arguments.
   *
   * This is a convenience wrapper around the static `runWithPosSync()` method.
   *
   * @param name - The name of the target function to run.
   * @param params - Positional arguments to pass to the function.
   * @returns The result of the function execution.
   */
  runWithPosAsSync(name: string, ...params: any[]) {
    return (this.constructor as any).runWithPosSync(name, ...params)
  }

  /**
   * Executes the function asynchronously using positional arguments.
   *
   * Delegates to `runWithPosSync()` internally since async behavior is not yet implemented separately.
   *
   * @param params - Positional arguments passed to the function.
   * @returns A promise that resolves with the result of the function execution.
   */
  runWithPos(...params: any[]): Promise<any> {
    return this.runWithPosSync(...params)
  }

  /**
   * Asynchronously runs another function by name using positional arguments.
   *
   * Delegates to `runWithPosAsSync()` internally.
   *
   * @param name - The name of the target function to run.
   * @param params - Positional arguments to pass to the function.
   * @returns A promise that resolves with the result of the function execution.
   */
  runWithPosAs(name:string, ...params: any[]): Promise<any> {
    return this.runWithPosAsSync(name, ...params)
  }

  /**
   * Gets a bound function reference suitable for positional argument execution.
   *
   * If a name is provided, it retrieves the function via the class-level `getFuncWithPos()` method.
   * Otherwise, it returns a bound version of `runWithPosSync` with `this` context preserved.
   *
   * @param name - Optional name of the function to retrieve.
   * @returns A function reference or `undefined` if not found.
   */
  getFuncWithPos(name?: string) {
    const result = name ? (this.constructor as any).getFuncWithPos(name) : this.runWithPosSync.bind(this)
    return result
  }

  /**
   * Checks if the current function supports the specified async feature.
   */
  hasAsyncFeature(feature: AsyncFeatureBits) {
    let features = this.asyncFeatures ?? 0
    if (this._asyncFeatures) { features |= this._asyncFeatures }
    return IntSet.has(features, feature)
  }

  /**
   * Checks if the current function with params is a stream output.
   *
   */
  isStream(params: any) {
    return this.stream
  }

}

export const ToolFuncSchema = {
  name: {type: 'string'},
  description: {type: 'string'},
  title: {type: 'string'},
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
  isApi: {type: 'boolean'},
  stream: { type: 'boolean' },
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
  alias: {type: ['array', 'string']},
}

ToolFunc.defineProperties(ToolFunc, ToolFuncSchema)

export const FuncMetaSymbol = Symbol('meta')
/**
 * Adds metadata to a function or ToolFunc object.
 *
 * This function attaches additional metadata to the provided function or ToolFunc.
 * Metadata is only merged if the second argument is a non-null object.
 *
 * @param fn - The function or ToolFunc to which metadata will be added.
 * @param meta - The metadata to attach. Must be a non-null object for the operation to succeed.
 * @param ignoreExists - If true, existing metadata will be ignored and the new metadata will be used. defaults to true
 * @returns The updated function or ToolFunc with metadata if successful; otherwise, `undefined`.
 */
export function funcWithMeta(fn: Function | ToolFunc, meta: any, ignoreExists: boolean = true) {
  if (meta && typeof meta === 'object') {
    if (typeof fn === 'function') {
      meta = ignoreExists ? assign({}, fn[FuncMetaSymbol], meta) : defaultsDeep({}, fn[FuncMetaSymbol], meta)
      fn[FuncMetaSymbol] = meta
      return fn
    } else if (fn instanceof ToolFunc) {
      return fn.assign(meta)
    }
  }
}

/**
 * Retrieves metadata associated with a function or ToolFunc instance.
 *
 * If the provided value is a function, it returns the metadata stored under the `FuncMetaSymbol` symbol.
 * If the provided value is a ToolFunc instance, it converts and returns the metadata as a plain object.
 *
 * @param fn - The function or ToolFunc instance from which to retrieve metadata.
 * @returns The metadata as a plain object, or `undefined` if no metadata is found.
 */
export function funcGetMeta(fn: Function | ToolFunc) {
  if (typeof fn === 'function') {
    return fn[FuncMetaSymbol]
  } else if (fn instanceof ToolFunc) {
    return fn.toObject()
  }
}
