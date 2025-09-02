import { BaseFuncItem } from "../tool-func"

/**
 * A constant representing a passing score, likely used for similarity or relevance thresholds.
 */
export const PASSING_SCORE = 0.618

/**
 * A tuple of supported action names for remote tool interactions.
 */
export const ActionNames = ['get', 'post', 'put', 'delete', 'patch', 'list', 'res'] as const
/**
 * Represents a valid action name for a remote tool, derived from the `ActionNames` tuple.
 */
export type ActionName = typeof ActionNames[number]

/**
 * Defines the signature for a function that processes an AI model's name,
 * typically for matching or validation purposes.
 * @param name - The model name string.
 * @returns A string, a RegExp execution array, or undefined if no match is found.
 */
export type AIModelNameRuleFn = (name: string) => string|RegExpExecArray|undefined

/**
 * Defines a single rule for matching an AI model name. It can be a simple string,
 * a regular expression, or a custom function.
 */
export type AIModelNameRule = string|RegExp|AIModelNameRuleFn
/**
 * Represents a collection of one or more AI model name matching rules.
 */
export type AIModelNameRules = AIModelNameRule|AIModelNameRule[]

/**
 * A schema object defining properties common to all remote tool functions.
 * This is used by `AdvancePropertyManager` to define how these properties are handled.
 * @internal
 */
export const RemoteToolFuncSchema = {
  // /**
  //  * The root endpoint for the remote service.
  //  * For HTTP, this is a URL. For IPC, it could be a channel name.
  //  * @deprecated Use `transport` instead.
  //  */
  // apiRoot: {
  //   type: 'string',
  //   get(this: any){
  //     return this._apiRoot ?? (this.constructor as any).apiRoot
  //   },
  //   set(this: any, value: string) {
  //     this._apiRoot = value
  //   },
  // },
  /**
   * The action for the remote call. This is primarily interpreted as an RPC method name.
   * For HTTP transports, it defaults to being sent as a custom RPC method name (e.g., via POST).
   * Only specific RESTful server implementations might map certain 'action' values (like 'get', 'delete')
   * to corresponding HTTP methods. Defaults to 'post'.
   */
  action: {
    type: 'string',
    assign(value: ActionName, dest: any, src?: any, name?: string, options?: any) {
      return value || 'post'
    },
  },
  /**
   * Optional fetch options, primarily for use with HTTP-based transports.
   * @deprecated Use `transport` instead.
   */
  fetchOptions: { type: 'object' },
  /**
   * If true, allows the function's body to be exported to the client for local execution.
   * This is a server-side setting.
   */
  allowExportFunc: { type: 'boolean' },
}

/**
 * Base interface for a remote function's configuration, extending `BaseFuncItem`
 * with properties required for remote execution.
 */
export interface RemoteFuncItem extends BaseFuncItem {
  /**
   * The root endpoint for the remote service.
   * @type {string}
   * @deprecated Use `transport` instead.
   */
  apiRoot?: string
  /**
   * The action to be used for the remote call. This typically represents an RPC method name.
   * Only for RESTful HTTP transports, it might be mapped to a standard HTTP method (e.g., GET, POST)
   * @type {ActionName}
   */
  action?: ActionName
  /**
   * Options to be passed to the underlying `fetch` call in an HTTP transport.
   * @type {any}
   * @deprecated Use `transport` instead.
   */
  fetchOptions?: any
}
