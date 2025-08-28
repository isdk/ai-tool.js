import fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';
import { ServerToolTransport } from './server';
import type { RpcMethodHandler } from './index';

/**
 * A concrete server transport implementation for Fastify.
 */
export class FastifyServerToolTransport extends ServerToolTransport {
  public server: FastifyInstance;

  constructor(options?: FastifyServerOptions) {
    super();
    this.server = fastify(options);
  }

  public addDiscoveryHandler(path: string, handler: () => any): void {
    this.server.get(path, async (request, reply) => {
      const result = handler();
      reply.send(result);
    });
    console.log(`[FastifyServerTransport] Mapped GET ${path} for discovery`);
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
    console.log(`[FastifyServerTransport] Mapped POST ${path}`);
  }

  public async start(options: { port: number; host?: string }): Promise<void> {
    const { port, host = '0.0.0.0' } = options;
    try {
      await this.server.listen({ port, host });
      console.log(`[FastifyServerTransport] Server listening on http://${host}:${port}`);
    } catch (err) {
      this.server.log.error(err);
      process.exit(1);
    }
  }

  public getRaw(): FastifyInstance {
    return this.server;
  }
}
