import { Funcs } from '../tool-func';
import { ActionName } from '../utils';
import { ClientTools } from "../client-tools";
import { IToolTransport, ToolTransport } from "./base";

/**
 * Defines the public interface for a client-side transport,
 * responsible for communicating with a ServerTransport.
 */
export interface IClientToolTransport extends IToolTransport {
  /**
   * Connects to the server's discovery endpoint to get the list of available tools.
   * @returns A promise that resolves to a map of tool function metadata.
   */
  loadApis(): Promise<Funcs>;

  mount(clientTools: typeof ClientTools, apiPrefix?: string, options?: any): any|Promise<any>;

  /**
   * Fetches data from the server.
   * @param name The name of the tool function to fetch.
   * @param args The object parameters to pass to the server.
   * @param act The action to perform on the server.
   * @param subName The name of the sub-resource to fetch.
   * @param options Additional options for the fetch call.
   * @returns A promise that resolves with the fetched data.
   */
  fetch(name: string, args?: any, act?: ActionName | string, subName?: any, options?: any): any|Promise<any>;

  [name: string]: any;
}

/**
 * A concrete client transport implementation that uses the browser/node `fetch` API.
 */
export abstract class ClientToolTransport extends ToolTransport implements IClientToolTransport {
  declare apiRoot: string;
  declare Tools: typeof ClientTools


  constructor(apiRoot: string) {
    if (!apiRoot) {
      throw new Error('apiRoot is required for HttpClientTransport');
    }
    super();
    this.apiRoot = apiRoot;
  }

  async _mount(clientTools: typeof ClientTools, apiPrefix: string, options?: any) {
    clientTools.setTransport(this);
    return clientTools.loadFrom();
  }

  /**
   * Connects to the server's discovery endpoint to get the list of available tools.
   * @returns A promise that resolves to a map of tool function metadata.
   */
  public async loadApis(): Promise<Funcs> {
    return this.fetch('', undefined, 'get', undefined, {
      headers: { 'Content-Type': 'application/json' },
    })
  }

  async fetch(name: string, args?: any, act?: ActionName | string, subName?: any, fetchOptions?: any) {
    fetchOptions = {...this.options, ...fetchOptions}
    const res = await this._fetch(name, args, act, subName, fetchOptions)

    if (args?.stream) {
      return res
    }
    const result = await this.toObject(res, args)
    return result
  }

  public abstract _fetch(name: string, args?: any, act?: ActionName | string, subName?: any, fetchOptions?: any): any|Promise<any>;
  public abstract toObject(res: any, args?: any): any|Promise<any>;
}
