import fastify from 'fastify';
import { ServerToolTransport } from './server';
import { defaultsDeep } from 'lodash-es';
// import type { FastifyInstance, FastifyServerOptions } from 'fastify';

import { ServerTools } from '../server-tools';


/**
 * A concrete server transport implementation for Fastify.
 */
export class FastifyServerToolTransport extends ServerToolTransport {
  public server: any;

  constructor(options?: any) {
    super();
    this.server = fastify(options);
  }

  public addDiscoveryHandler(apiPrefix: string, handler: () => any): void {
    this.server.get(apiPrefix, async (request, reply) => {
      const result = handler();
      reply.send(result);
    });
    console.log(`[FastifyServerTransport] Mapped GET ${apiPrefix} for discovery`);
  }

  public addRpcHandler(serverTools: typeof ServerTools, apiPrefix: string, options?: any) {
    if (!apiPrefix.endsWith('/')) {apiPrefix += '/';}
    apiPrefix += ':toolId/:id?'

    this.server.all(apiPrefix, async (request, reply) => {
      const { toolId, id } = request.params as any;
      const func = serverTools.get(toolId)
      if (!func) {
        reply.code(404).send({error: toolId + ' Not Found', data: {what: toolId}})
      }
      let params: any
      const method = request.method
      if (method === 'GET' || method == 'DELETE') {
        params = (request.query as any).p
        if (params) {
          params = JSON.parse(params)
        } else {
          params = {}
        }
      } else {
        params = request.body;
        if (typeof params === 'string') {params = JSON.parse(params)}
      }
      params._req = request.raw
      params._res = reply.raw
      if (id !== undefined) {params.id = id}
      try {
        let result = await func.run(params)
        if (!func.isStream(params)) {
          result = JSON.stringify(result)
          reply.send(result)
        } else if (result) {
          reply.send(result)
        }
        // reply.send({params: request.params as any, query: request.query, url: request.url})
      } catch(e: any) {
        // console.log('🚀 ~ server.all ~ e:', e)
        if (e.code !== undefined) {
          if (e.stack) {e.stack = undefined}
          reply.code(e.code).send(JSON.stringify(e))
        } else if (e.message) {
          reply.code(500).send({error: e.message})
        } else {
          reply.code(500).send({error: e})
        }
      }
    })
  }

  public async _start(options: { port: number; host?: string }): Promise<void> {
    options = defaultsDeep(options, { port: 3000, host: '0.0.0.0' });
    try {
      const result = await this.server.listen(options);
      console.log(`[FastifyServerTransport] Server listening on ${result}`);
    } catch (err) {
      this.server.log.error(err);
      process.exit(1);
    }
  }

  public async stop(force?: boolean): Promise<void> {
    return this.server.close();
  }

  public getRaw(): any {
    return this.server;
  }
}
