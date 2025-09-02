import { defaultsDeep } from 'lodash-es';
import type { ServerTools } from '../server-tools';
import { ToolTransport, type IToolTransport } from './base';

/**
 * Defines the public interface for a server-side transport,
 * responsible for exposing ServerTools to the network.
 */
export interface IServerToolTransport extends IToolTransport{
  /**
   * Mounts the ServerTools registry, creating the necessary API routes.
   * @param serverTools The ServerTools class.
   * @param apiPrefix An optional prefix for all API routes.
   * @param options Additional options for the transport start.
   */
  mount(serverTools: typeof ServerTools, apiPrefix?: string, options?: any): void;

  /**
   * Starts the transport layer, making it listen for incoming connections.
   * @param options Protocol-specific options (e.g., { port, host }).
   */
  start(options?: any): Promise<any>;

  /**
   * Stops the server instance gracefully.
   * @param force - Optional flag to force shutdown immediately
   * @returns Promise<void> when server is fully stopped
   */
  stop(force?: boolean): Promise<void>;

  /**
   * Gets the underlying raw server instance.
   */
  getRaw?(): any;
}

/**
 * An abstract base class for server-side transport implementations.
 * It provides the generic tool-mounting logic.
 */
export abstract class ServerToolTransport extends ToolTransport implements IServerToolTransport {
  declare apiRoot: string;
  declare Tools: typeof ServerTools;
  declare options?: any;

  public _mount(Tools: typeof ServerTools, apiPrefix: string, options?: any): void {
    // Mount the discovery endpoint first.
    this.addDiscoveryHandler(apiPrefix, () => Tools);
    this.addRpcHandler(Tools, apiPrefix, options);
  }

  public start(options?: any): Promise<any> {
    if (this.options) {options = defaultsDeep(options, this.options)}
    return this._start(options);
  };

  public abstract addDiscoveryHandler(path: string, handler: () => any): void;
  public abstract addRpcHandler(serverTools: typeof ServerTools, apiPrefix: string, options?: any): void;
  public abstract _start(options?: any): Promise<any>;
  public abstract stop(force?: boolean): Promise<void>;
  public abstract getRaw?(): any;
}
