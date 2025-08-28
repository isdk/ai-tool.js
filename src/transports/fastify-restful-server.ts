import fastify, { FastifyInstance, FastifyReply, FastifyRequest, FastifyServerOptions } from 'fastify';
import { ServerToolTransport } from './server';
import { ServerTools } from '../server-tools';
import { ResServerTools } from '../res-server-tools';
import { RpcMethodHandler } from './index';

/**
 * A server transport implementation for Fastify that is specialized
 * for handling RESTful tools (ResServerTools).
 */
export class FastifyRestfulToolTransport extends ServerToolTransport {
  public server: FastifyInstance;

  constructor(options?: FastifyServerOptions) {
    super();
    this.server = fastify(options);
  }

  /**
   * This mount method is specialized for RESTful tools.
   * It discovers tools and mounts ResServerTools with RESTful routes.
   */
  public mount(serverTools: typeof ServerTools, apiPrefix: string = '/api'): void {
    this.addDiscoveryHandler(apiPrefix, () => serverTools.toJSON());

    const apiMetaList = serverTools.toJSON();
    for (const toolName in apiMetaList) {
      const toolInstance = serverTools.get(toolName);

      if (toolInstance instanceof ResServerTools) {
        this.mountResTool(toolInstance, apiPrefix);
      } else if (toolInstance) {
        // For non-Res tools, use the standard RPC method mounting
        const path = `${apiPrefix}/${toolInstance.name}`;
        const handler = toolInstance.run.bind(toolInstance);
        this.addRpcMethod(path, handler);
      }
    }
  }

  private mountResTool(tool: ResServerTools, apiPrefix: string): void {
    const basePath = `${apiPrefix}/${tool.name}`;

    const createHandler = async (request: FastifyRequest, reply: FastifyReply) => {
      const { id } = request.params as any;
      let params: any;
      const method = request.method.toUpperCase();

      if (method === 'GET' || method === 'DELETE') {
        params = (request.query as any).p ? JSON.parse((request.query as any).p) : {};
      } else {
        params = request.body ?? {};
      }

      if (id !== undefined) { params.id = id; }

      try {
        const result = await tool.run(params, { req: request, reply });
        if (!reply.sent) {
          reply.send(result);
        }
      } catch (e: any) {
        if (e.code) {
          reply.code(e.code).send({ error: e.message, data: e.data, name: e.name });
        } else {
          reply.code(500).send({ error: e.message });
        }
      }
    };

    this.server.get(basePath, createHandler);
    this.server.get(`${basePath}/:id`, createHandler);
    this.server.delete(`${basePath}/:id`, createHandler);
    this.server.post(basePath, createHandler);
    this.server.put(`${basePath}/:id`, createHandler);

    console.log(`[FastifyRestfulToolTransport] Mapped RESTful routes for ${tool.name} at ${basePath}`);
  }

  public addDiscoveryHandler(path: string, handler: () => any): void {
    this.server.get(path, async (request, reply) => {
      const result = handler();
      reply.send(result);
    });
    console.log(`[FastifyRestfulToolTransport] Mapped GET ${path} for discovery`);
  }

  public addRpcMethod(path: string, handler: RpcMethodHandler): void {
    this.server.post(path, async (request, reply) => {
      try {
        const result = await handler(request.body, { req: request, reply });
        reply.send(result);
      } catch (error: any) {
        reply.status(500).send({ error: error.message });
      }
    });
    console.log(`[FastifyRestfulToolTransport] Mapped POST ${path} for RPC`);
  }

  public async start(options: { port: number; host?: string }): Promise<void> {
    const { port, host = '0.0.0.0' } = options;
    try {
      await this.server.listen({ port, host });
      console.log(`[FastifyRestfulToolTransport] Server listening on http://${host}:${port}`);
    } catch (err) {
      this.server.log.error(err);
      process.exit(1);
    }
  }

  public getRaw(): FastifyInstance {
    return this.server;
  }
}
