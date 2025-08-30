// import type { IncomingMessage, ServerResponse } from "http";
import { ToolFunc } from "./tool-func";
import { RemoteToolFuncSchema, RemoteFuncItem } from "./utils/consts";

/**
 * Defines the structure for parameters passed to a `ServerTools` function.
 * By convention, it includes optional `_req` and `_res` properties for direct
 * access to the underlying transport's request and response objects (e.g., from Node.js http).
 */
export interface ServerFuncParams {
  /**
   * The underlying request object from the transport layer (e.g., `IncomingMessage`).
   * @type {any}
   */
  _req?: any
  /**
   * The underlying response or reply object from the transport layer (e.g., `ServerResponse`).
   * @type {any}
   */
  _res?: any
  [name: string]: any
}

/**
 * Configuration interface for a `ServerTools` item.
 * Extends `RemoteFuncItem` with server-specific options.
 */
export interface ServerFuncItem extends RemoteFuncItem {
  /**
   * If set to true, the body of the function (`func`) will be serialized and sent
   * to the client when tools are loaded. This allows the client to execute the
   * function locally instead of making a remote call. Defaults to false.
   * @type {boolean}
   */
  allowExportFunc?: boolean
}

/**
 * Declaration merging to extend the `ServerTools` class with `ServerFuncItem` properties.
 */
export declare interface ServerTools extends ServerFuncItem {
  [name: string]: any;
}

/**
 * Represents a function that runs on a server and can be exposed to clients.
 *
 * `ServerTools` extends `ToolFunc` by adding logic for serialization and handling
 * server-side execution contexts. It is designed to work with a transport layer
 * (see `transports`) to expose its registered functions over a network.
 */
export class ServerTools extends ToolFunc {
  private static _apiRoot?: string;
  /**
   * The conventional root path for the API endpoint.
   */
  static get apiRoot() {
    return this._apiRoot
  }

  static setApiRoot(v: string) {
    this._apiRoot = v
  }

  /**
   * Serializes all registered `ServerTools` instances into a JSON object.
   * This method is typically called by a transport's discovery endpoint.
   *
   * It filters for tools that are instances of `ServerTools` or marked as `isApi`.
   * It omits the `func` body from the output unless `allowExportFunc` is true.
   *
   * @returns A map of serializable tool definitions.
   */
  static toJSON() {
    const result:{[name:string]: ServerTools} = {}
    for (const name in this.items) {
      let item: any = this.items[name];
      if ((item instanceof ServerTools) || item.isApi) {
        if (!item.allowExportFunc) {
          item = item.toJSON()
          delete item.func;
        }
        result[name] = item;
      }
    }
    return result
  }

  /**
   * Overrides the base `run` method to inject transport-specific context.
   * If a `context` object containing `req` and `reply` is provided, these are
   * added to the parameters as `_req` and `_res` before execution.
   *
   * @param {ServerFuncParams} params - The parameters for the function.
   * @param {{ req: any, reply: any }} [context] - The transport-level context.
   * @returns The result of the function execution.
   */
  run(params: ServerFuncParams, context?: { req: any, reply: any }) {
    if (context) {
      params._req = context.req;
      params._res = context.reply;
    }
    return super.run(params);
  }

  /**
   * Placeholder for the actual server-side function implementation.
   * This method is intended to be defined when a `ServerTools` instance is created.
   * @param params - The parameters for the function.
   * @returns The result of the function.
   */
  func(params: ServerFuncParams): Promise<any>|any {}
}

/**
 * The schema definition for `ServerTools` properties.
 * @internal
 */
export const ServerToolFuncSchema = { ...RemoteToolFuncSchema }

ServerTools.defineProperties(ServerTools, ServerToolFuncSchema)
