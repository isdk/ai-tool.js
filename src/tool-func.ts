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
 * Describes a single function parameter, including its name, type, and description.
 * @interface
 */
export interface FuncParam {
  /**
   * The name of the parameter.
   * @type {string}
   */
  name?: string;

  /**
   * The data type of the parameter, represented as a string identifier (e.g., 'string', 'number').
   * @type {FuncParamType}
   */
  type?: FuncParamType;

  /**
   * Indicates whether the parameter is required.
   * @type {boolean}
   */
  required?: boolean;

  /**
   * A description of the parameter, explaining its purpose and usage.
   * @type {string}
   */
  description?: string;
}

/**
 * A map of function parameters, where each key is the parameter name.
 * The value can be either a detailed `FuncParam` object or a simple type string.
 *
 * @example
 * const params: FuncParams = {
 *   userId: 'string',
 *   profile: {
 *     type: 'object',
 *     description: 'User profile data'
 *   }
 * };
 */
export interface FuncParams {
  [name: string]: FuncParam|FuncParamType;
}

/**
 * Defines the signature for a tool function's implementation.
 *
 * @param {ToolFunc} this - The `this` context is bound to the `ToolFunc` instance.
 * @param {...any[]} params - Variadic arguments passed to the function.
 * @returns {any} The result of the function's execution.
 */
export type TFunc = (this:ToolFunc, ...params:any[]) => any

/**
 * Base configuration for defining a tool function.
 * @interface
 */
export interface BaseFuncItem {
  /**
   * The unique name of the function.
   * @type {string}
   */
  name?: string;
  /**
   * Parameter definitions, which can be an object mapping names to definitions or an array for positional parameters.
   * @type {FuncParams | FuncParam[]}
   */
  params?: FuncParams | FuncParam[];
  /**
   * The expected return type of the function, described as a string or a JSON schema object.
   * @type {string | Record<string, any>}
   */
  result?: string|Record<string, any>;
  /**
   * The execution scope or context (`this`) for the function.
   * @type {any}
   */
  scope?: any;
  /**
   * Tags for grouping or filtering functions.
   * @type {string | string[]}
   */
  tags?: string|string[];
  /**
   * A lifecycle hook called once during the `ToolFunc` instance's initialization.
   * It allows for initial setup, state configuration, or property modification on the instance
   * before it is used or registered. The `this` context is the `ToolFunc` instance itself.
   *
   * @param {FuncItem} [options] - The configuration options for the function.
   * @example
   * const myFunc = new ToolFunc({
   *   name: 'myFunc',
   *   customState: 'initial',
   *   setup() {
   *     // `this` is the myFunc instance
   *     this.customState = 'configured';
   *   }
   * });
   * console.log(myFunc.customState); // Outputs: 'configured'
   */
  setup?: (this: ToolFunc, options?: FuncItem) => void;
  /**
   * If true, indicates that this function should be treated as a server-side API.
   * @type {boolean}
   */
  isApi?: boolean;
  /**
   * If true, indicates that the function has the *capability* to stream its output.
   * Whether a specific call is streamed is determined by a `stream` property in the runtime parameters.
   * @type {boolean}
   */
  stream?: boolean;
  /**
   * Optional aliases for the function name.
   * @type {string | string[]}
   */
  alias?: string|string[];
  /**
   * A bitmask representing asynchronous features supported by the function, built from `AsyncFeatureBits`.
   * This allows the system to understand if a function supports capabilities like cancellation or multi-tasking.
   * @see AsyncFeatureBits from `@src/utils/cancelable-ability.ts`
   * @type {number}
   * @example
   * import { AsyncFeatures } from './utils';
   * const func = new ToolFunc({
   *   name: 'cancellableTask',
   *   asyncFeatures: AsyncFeatures.Cancelable | AsyncFeatures.MultiTask,
   *   // ...
   * });
   */
  asyncFeatures?: number;
  /**
   * A map of dependencies this function has on other tool functions.
   * Declaring dependencies ensures that they are automatically registered when this function is registered.
   * This is crucial for building modular functions that rely on each other without needing to manage registration order manually.
   *
   * @type {{ [name: string]: ToolFunc }}
   * @example
   * const helperFunc = new ToolFunc({ name: 'helper', func: () => 'world' });
   * const mainFunc = new ToolFunc({
   *   name: 'main',
   *   depends: {
   *     helper: helperFunc,
   *   },
   *   func() {
   *     // We can now safely run the dependency
   *     const result = this.runSync('helper');
   *     return `Hello, ${result}`;
   *   }
   * });
   * // When mainFunc is registered, helperFunc will be registered automatically.
   * mainFunc.register();
   */
  depends?: {[name: string]: ToolFunc};
  /**
   * A detailed description of what the function does.
   * @type {string}
   */
  description?: string;
  /**
   * A concise, human-readable title for the function, often used in UI or by AI.
   * @type {string}
   */
  title?: string;
}

/**
 * Extends `BaseFuncItem` to include the actual function implementation.
 * @interface
 */
export interface FuncItem extends BaseFuncItem {
  /**
   * The implementation of the tool function.
   * @type {TFunc}
   */
  func?: TFunc;
}

/**
 * Represents a fully-defined tool function where the implementation is mandatory.
 * @interface
 */
export interface BaseFunc extends BaseFuncItem {
  /**
   * The actual function implementation.
   * @param {...any} params - The parameters for the function.
   * @returns {any} The result of the function.
   */
  func(...params: any): any;
}

/**
 * A map of registered `ToolFunc` instances, indexed by their names.
 */
export interface Funcs {
  [name: string]: ToolFunc
}

/**
 * Describes a package of tool functions, including methods for registration and unregistration.
 * @interface
 */
export interface ToolFuncPackage {
  /**
   * The name of the tool function package.
   * @type {string}
   */
  name: string
  /**
   * A method to register all functions within the package.
   * @param {any} [data] - Optional data to pass to the registration process.
   */
  register: (data?: any) => void;
  /**
   * An optional method to unregister all functions within the package.
   */
  unregister?: () => void;
}

/**
 * Declaration merging to extend the `ToolFunc` class with `BaseFunc` properties and allow arbitrary properties.
 */
export declare interface ToolFunc extends BaseFunc {
  [name: string]: any;
}

/**
 * A manager for creating, registering, and executing reusable tool functions.
 *
 * `ToolFunc` provides a robust framework for defining functions with rich metadata,
 * managing their lifecycle, and executing them through a centralized registry.
 * It is the core component for creating modular and discoverable tools.
 *
 * Key Features:
 * - **Rich Metadata**: Define functions with descriptions, parameters, tags, and titles, making them self-documenting.
 * - **Static Registry**: A global, static registry (`ToolFunc.items`) allows any part of an application to access and run registered functions by name.
 * - **Dependency Management**: Use the `depends` property to declare dependencies on other `ToolFunc`s, which are then auto-registered.
 * - **Aliasing**: Assign multiple names to a function for flexibility.
 * - **Lifecycle Hooks**: Use the `setup` method for one-time initialization logic when a `ToolFunc` instance is created.
 * - **Parameter Handling**: Automatically handles both positional and named parameters.
 *
 * @extends AdvancePropertyManager
 *
 * @example
 * // 1. Define a helper function
 * const getUser = new ToolFunc({
 *   name: 'getUser',
 *   description: 'Retrieves a user by ID.',
 *   params: { id: { type: 'string', required: true } },
 *   func: (params) => ({ id: params.id, name: 'John Doe' }),
 * });
 *
 * // 2. Define a main function that depends on the helper
 * const welcomeUser = new ToolFunc({
 *   name: 'welcomeUser',
 *   title: 'Welcome User',
 *   description: 'Generates a welcome message for a user.',
 *   params: { userId: 'string' },
 *   depends: {
 *     // By declaring this dependency, `getUser` will be auto-registered
 *     // when `welcomeUser` is registered.
 *     userFetcher: getUser,
 *   },
 *   func: function(params) {
 *     // `this` is the ToolFunc instance, so we can use `runSync`
 *     const user = this.runSync('userFetcher', { id: params.userId });
 *     return `Hello, ${user.name}!`;
 *   },
 * });
 *
 * // 3. Register the main function. The dependency is registered automatically.
 * welcomeUser.register();
 *
 * // 4. Run the function from anywhere using the static runner.
 * async function main() {
 *   const message = await ToolFunc.run('welcomeUser', { userId: '123' });
 *   console.log(message); // Outputs: "Hello, John Doe!"
 * }
 *
 * main();
 */
export class ToolFunc extends AdvancePropertyManager {
  /**
   * A static registry of all `ToolFunc` instances, indexed by name.
   * @type {Funcs}
   */
  static items: Funcs = {};
  /**
   * A static map of aliases to their corresponding function names.
   * @type {{ [name: string]: string }}
   */
  static aliases: {[name: string]: string} = {};
  /**
   * A conventional property to designate a file path for saving the registered `ToolFunc` data.
   * Note: The `ToolFunc` class itself does not implement persistence logic. It is up to the
   * developer to use this path to save and load the `ToolFunc.items` registry if needed.
   * @type {string}
   */
  static dataPath: string;

  /**
   * Retrieves a registered function by its name or alias.
   * @param {string} name - The name or alias of the function to retrieve.
   * @returns {ToolFunc | undefined} The `ToolFunc` instance if found, otherwise `undefined`.
   */
  static get(name: string) {
    let result = this.items[name];
    if (!result && (name = this.aliases[name])) {
      result = this.items[name]
    }
    return result
  }

  /**
   * Returns the complete map of all registered functions.
   * @returns {Funcs} The map of `ToolFunc` instances.
   */
  static list() {
    return this.items
  }

  /**
   * Finds the first registered function that has a specific tag.
   * @param {string} tagName - The tag to search for.
   * @returns {ToolFunc | undefined} The first matching `ToolFunc` instance, or `undefined` if none is found.
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
   * Retrieves all registered functions that have a specific tag.
   * @param {string} tagName - The tag to search for.
   * @returns {ToolFunc[]} An array of matching `ToolFunc` instances.
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
   * Checks if any registered function has a specific asynchronous feature.
   * @param {AsyncFeatureBits} feature - The async feature bit to check for.
   * @returns {boolean} `true` if the feature is present in any function, otherwise `false`.
   */
  static hasAsyncFeature(feature: AsyncFeatureBits) {
    const proto = this.prototype
    let features = proto.asyncFeatures ?? 0
    if (proto._asyncFeatures) { features |= proto._asyncFeatures }
    return IntSet.has(features, feature)
  }

  /**
   * Asynchronously executes a registered function by name with named parameters.
   * @param {string} name - The name of the function to run.
   * @param {any} [params] - The parameters object for the function.
   * @returns {Promise<any>} A promise that resolves with the function's result.
   * @throws {NotFoundError} If the function with the given name is not found.
   */
  static run(name: string, params?: any): Promise<any> {
    const func = this.get(name)
    if (func) {
      return func.run(params)
    }
    throw new NotFoundError(`${name} to run`, this.name);
  }

  /**
   * Synchronously executes a registered function by name with named parameters.
   * @param {string} name - The name of the function to run.
   * @param {any} [params] - The parameters object for the function.
   * @returns {any} The result of the function's execution.
   * @throws {NotFoundError} If the function with the given name is not found.
   */
  static runSync(name: string, params?: any) {
    const func = this.get(name)
    if (func) {
      return func.runSync(params)
    }
    throw new NotFoundError(`${name} to run`, this.name);
  }

  /**
   * Retrieves a bound, runnable function reference for a registered function.
   * This reference is suitable for execution with an object of named parameters.
   * @param {string} name - The name of the function.
   * @returns {Function | undefined} A bound function reference, or `undefined` if not found.
   */
  static getFunc(name: string) {
    const func = this.get(name)
    return func?.getFunc()
  }

  /**
   * Asynchronously executes a function using positional arguments.
   * @param {string} name - The name of the function to run.
   * @param {...any[]} params - Positional arguments to pass to the function.
   * @returns {Promise<any>} A promise that resolves with the function's result.
   * @throws {NotFoundError} If the function with the given name is not found.
   */
  static runWithPos(name: string, ...params: any[]): Promise<any> {
    const func = this.get(name)
    if (func) {
      return func.runWithPos(...params)
    }
    throw new NotFoundError(`${name} to run`, this.name);
  }

  /**
   * Synchronously executes a function using positional arguments.
   * @param {string} name - The name of the function to run.
   * @param {...any[]} params - Positional arguments to pass to the function.
   * @returns {any} The result of the function's execution.
   * @throws {NotFoundError} If the function with the given name is not found.
   */
  static runWithPosSync(name: string, ...params: any[]) {
    const func = this.get(name)
    if (func) {
      return func.runWithPosSync(...params)
    }
    throw new NotFoundError(`${name} to run`, this.name);
  }

  /**
   * Retrieves a bound, runnable function reference for a registered function.
   * This reference is suitable for execution with positional arguments.
   * @param {string} name - The name of the function.
   * @returns {Function | undefined} A bound function reference, or `undefined` if not found.
   */
  static getFuncWithPos(name: string) {
    const func = this.get(name)
    return func?.getFuncWithPos()
  }

  /**
   * Registers a new tool function.
   *
   * @overload
   * @param {string} name - The name of the function.
   * @param {FuncItem} options - The function's configuration.
   * @returns {boolean | ToolFunc} The new `ToolFunc` instance, or `false` if a function with that name already exists.
   *
   * @overload
   * @param {Function} func - The function implementation.
   * @param {FuncItem} options - The function's configuration.
   * @returns {boolean | ToolFunc} The new `ToolFunc` instance, or `false` if a function with that name already exists.
   *
   * @overload
   * @param {string | ToolFunc | Function | FuncItem} name - A name, `ToolFunc` instance, function, or configuration object.
   * @param {FuncItem} [options] - Additional configuration.
   * @returns {boolean | ToolFunc} The new `ToolFunc` instance, or `false` if a function with that name already exists.
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
   * Unregisters a function by its name, also removing any associated aliases.
   * @param {string} name - The name of the function to unregister.
   * @returns {ToolFunc | undefined} The unregistered `ToolFunc` instance, or `undefined` if it was not found.
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
   * Initializes a new `ToolFunc` instance.
   *
   * @param {string | Function | FuncItem} name - Can be a function name, a function implementation, or a configuration object.
   * @param {FuncItem | any} [options={}] - Configuration options if not provided in the first argument.
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
  }

  /**
   * Registers the current `ToolFunc` instance into the static registry.
   * Also registers any declared dependencies.
   * @returns {boolean | ToolFunc} The instance itself upon successful registration, or `false` if it already exists.
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
   * Removes the current `ToolFunc` instance from the static registry.
   * @returns {ToolFunc | undefined} The instance that was unregistered.
   */
  unregister() {
    return (this.constructor as any).unregister(this.name)
  }

  /**
   * Converts an array of positional arguments into a named parameters object.
   * This is used internally to support functions defined with named parameters.
   * @param {any[]} params - An array of positional arguments.
   * @returns {any[]} An array containing a single parameters object.
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
   * Converts a named parameters object into an array of positional arguments.
   * This is used for functions defined with positional parameters.
   * @param {any} [params] - A named parameters object.
   * @returns {any[]} An array of positional arguments.
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
   * Executes the function synchronously with a named parameters object.
   * @param {any} [params] - The parameters object for the function.
   * @returns {any} The result of the function execution.
   * @throws Will throw an error if an array of parameters is passed to a function that expects an object.
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
   * Executes the function asynchronously with a named parameters object.
   * @param {any} [params] - The parameters object for the function.
   * @returns {Promise<any>} A promise that resolves with the function's result.
   */
  run(params?: any): Promise<any> {
    return this.runSync(params)
  }

  /**
   * Asynchronously executes another registered function by name.
   * This method delegates to `runAsSync()` internally.
   * @param {string} name - The name of the target function to run.
   * @param {any} [params] - Optional parameters to pass to the function.
   * @returns {Promise<any>} A promise that resolves with the result of the function execution.
   */
  runAs(name:string, params?: any): Promise<any> {
    return this.runAsSync(name, params)
  }

  /**
   * Synchronously executes another registered function by name.
   * This is a convenience method that forwards the call to the static `runSync()` method.
   * @param {string} name - The name of the target function to run.
   * @param {any} [params] - Optional parameters to pass to the function.
   * @returns {any} The result of the function execution.
   */
  runAsSync(name:string, params?: any) {
    const result = (this.constructor as any).runSync(name, params)
    return result
  }

  /**
   * Gets a bound function reference for execution with named parameters.
   * If a name is provided, it retrieves a different function from the registry.
   * Otherwise, it returns a bound version of this instance's `runSync`.
   * @param {string} [name] - Optional name of the function to retrieve.
   * @returns {Function | undefined} A function reference or `undefined` if not found.
   */
  getFunc(name?: string) {
    const result = name ? (this.constructor as typeof ToolFunc).getFunc(name) : this.runSync.bind(this)
    return result
  }

  /**
   * Executes the function synchronously using positional arguments.
   * If the function expects named parameters, it converts the arguments automatically.
   * @param {...any[]} params - Positional arguments passed to the function.
   * @returns {any} The result of the function execution.
   */
  runWithPosSync(...params:any[]) {
    if (this.params && !Array.isArray(this.params)) {
      params = this.arr2ObjParams(params)
    }
    return this.func!(...params)
  }

  /**
   * Synchronously executes another function by name using positional arguments.
   * This is a convenience wrapper around the static `runWithPosSync()` method.
   * @param {string} name - The name of the target function to run.
   * @param {...any[]} params - Positional arguments to pass to the function.
   * @returns {any} The result of the function execution.
   */
  runWithPosAsSync(name: string, ...params: any[]) {
    return (this.constructor as any).runWithPosSync(name, ...params)
  }

  /**
   * Executes the function asynchronously using positional arguments.
   * Delegates to `runWithPosSync()` internally.
   * @param {...any[]} params - Positional arguments passed to the function.
   * @returns {Promise<any>} A promise that resolves with the result of the function execution.
   */
  runWithPos(...params: any[]): Promise<any> {
    return this.runWithPosSync(...params)
  }

  /**
   * Asynchronously executes another function by name using positional arguments.
   * Delegates to `runWithPosAsSync()` internally.
   * @param {string} name - The name of the target function to run.
   * @param {...any[]} params - Positional arguments to pass to the function.
   * @returns {Promise<any>} A promise that resolves with the result of the function execution.
   */
  runWithPosAs(name:string, ...params: any[]): Promise<any> {
    return this.runWithPosAsSync(name, ...params)
  }

  /**
   * Gets a bound function reference suitable for positional argument execution.
   * If a name is provided, it retrieves a different function from the registry.
   * Otherwise, it returns a bound version of this instance's `runWithPosSync`.
   * @param {string} [name] - Optional name of the function to retrieve.
   * @returns {Function | undefined} A function reference or `undefined` if not found.
   */
  getFuncWithPos(name?: string) {
    const result = name ? (this.constructor as any).getFuncWithPos(name) : this.runWithPosSync.bind(this)
    return result
  }

  /**
   * Checks if the current function instance supports a specific async feature.
   * @param {AsyncFeatureBits} feature - The async feature bit to check for.
   * @returns {boolean} `true` if the feature is supported, otherwise `false`.
   */
  hasAsyncFeature(feature: AsyncFeatureBits) {
    let features = this.asyncFeatures ?? 0
    if (this._asyncFeatures) { features |= this._asyncFeatures }
    return IntSet.has(features, feature)
  }

  /**
   * Determines if a function call should produce a stream.
   *
   * The logic is as follows:
   * 1. It first checks if the function is generally capable of streaming (`this.stream`).
   * 2. If it is, it then checks if a `stream` parameter is formally declared in the function's `params` definition.
   * 3. If both are true, the method returns the value of the `stream` property from the runtime `params` object.
   * Otherwise, it returns the function's static `stream` capability.
   *
   * @param {any} params - The runtime parameters passed to the function call.
   * @returns {boolean | undefined} `true` if the call should be streamed, `false` or `undefined` otherwise.
   */
  isStream(params: any) {
    let result = this.stream
    if (result) {
      const paramsDecl = this.params as any
      if (paramsDecl?.stream) {result = params?.stream}
    }
    return result
  }

}

/**
 * Defines the schema for `ToolFunc` properties, used by `AdvancePropertyManager`.
 * This controls how properties are assigned and exported.
 * @internal
 */
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

/**
 * A unique symbol used to attach metadata to a function object.
 * @internal
 */
export const FuncMetaSymbol = Symbol('meta')
/**
 * Attaches metadata to a function or `ToolFunc` object.
 *
 * This utility merges the provided metadata with any existing metadata on the target.
 *
 * @param {Function | ToolFunc} fn - The function or `ToolFunc` instance to which metadata will be added.
 * @param {any} meta - The metadata object to attach. The operation is skipped if this is not a non-null object.
 * @param {boolean} [ignoreExists=true] - If `true`, new metadata overwrites existing keys. If `false`, it merges deeply, preserving existing values.
 * @returns {Function | ToolFunc | undefined} The updated function or `ToolFunc` with metadata, or `undefined` if the operation was skipped.
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
 * Retrieves metadata associated with a function or `ToolFunc` instance.
 *
 * @param {Function | ToolFunc} fn - The function or `ToolFunc` instance from which to retrieve metadata.
 * @returns {any} The metadata as a plain object, or `undefined` if no metadata is found.
 */
export function funcGetMeta(fn: Function | ToolFunc) {
  if (typeof fn === 'function') {
    return fn[FuncMetaSymbol]
  } else if (fn instanceof ToolFunc) {
    return fn.toObject()
  }
}
