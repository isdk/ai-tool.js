/**
 * @file Defines common types used across transports.
 */

import { ToolFunc } from "../tool-func";

/**
 * The generic handler for a remote procedure call (RPC) method.
 * It receives the parameters and returns the result.
 * @param params - The parameters for the RPC method.
 * @param context - Optional context, like the raw request object from the underlying framework.
 * @returns The result of the RPC method.
 */
export type RpcMethodHandler = (params: any, context?: any) => Promise<any> | any;

export interface IToolTransport {
  Tools: typeof ToolFunc;
  /**
   * The root endpoint for the remote service.
   * For HTTP, this is a URL. For IPC, it could be a channel name.
   */
  apiRoot: string;
  /**
   * Additional options for the transport start or fetch, passed by mount.
   */
  options?: any;

  mount(Tools: typeof ToolFunc, apiRoot?: string, options?: any): any|Promise<any>;

  [name: string]: any;
}

export abstract class ToolTransport implements IToolTransport {
  declare apiRoot: string;
  declare Tools: typeof ToolFunc;
  declare options?: any;

  public mount(Tools: typeof ToolFunc, apiRoot?: string, options?: any) {
    if (!apiRoot) {
      apiRoot = this.apiRoot
      if (!apiRoot) {
        throw new Error('apiRoot is required');
      }
    } else {
      this.apiRoot = apiRoot;
    }

    this.Tools = Tools;
    this.options = options;
    return this._mount(Tools, apiRoot, options);
  }

  public abstract _mount(Tools: typeof ToolFunc, apiRoot: string, options?: any): any|Promise<any>;
}
