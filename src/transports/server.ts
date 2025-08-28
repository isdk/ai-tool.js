import type { ServerTools } from '../server-tools';
import type { RpcMethodHandler } from './index';

/**
 * Defines the public interface for a server-side transport,
 * responsible for exposing ServerTools to the network.
 */
export interface IServerToolTransport {
  /**
   * Mounts the ServerTools registry, creating the necessary API routes.
   * @param serverTools The ServerTools class.
   * @param apiPrefix An optional prefix for all API routes.
   */
  mount(serverTools: typeof ServerTools, apiPrefix?: string): void;

  /**
   * Starts the transport layer, making it listen for incoming connections.
   * @param options Protocol-specific options (e.g., { port, host }).
   */
  start(options?: any): Promise<void>;

  /**
   * Gets the underlying raw server instance.
   */
  getRaw?(): any;
}

/**
 * An abstract base class for server-side transport implementations.
 * It provides the generic tool-mounting logic.
 */
export abstract class ServerToolTransport implements IServerToolTransport {
  public mount(serverTools: typeof ServerTools, apiPrefix: string = '/api'): void {
    // Mount the discovery endpoint first.
    this.addDiscoveryHandler(apiPrefix, () => serverTools.toJSON());

    const apiMetaList = serverTools.toJSON();

    for (const toolName in apiMetaList) {
      const toolInstance = serverTools.get(toolName);

      if (toolInstance) {
        const path = `${apiPrefix}/${toolInstance.name}`;
        const handler = toolInstance.run.bind(toolInstance);
        this.addRpcMethod(path, handler);
      }
    }
  }

  public abstract addDiscoveryHandler(path: string, handler: () => any): void;
  public abstract addRpcMethod(path: string, handler: RpcMethodHandler): void;
  public abstract start(options?: any): Promise<void>;
  public abstract getRaw?(): any;
}
