// src/transports/http-server.ts

import http from 'http';
import { URL } from 'url';
import { ServerToolTransport } from './server';
import { defaultsDeep } from 'lodash-es';
import { ServerTools } from '../server-tools';

/**
 * A concrete server transport implementation using Node.js's built-in HTTP server.
 */
export class HttpServerToolTransport extends ServerToolTransport {
  public server: http.Server;
  private discoveryHandlerInfo: { prefix: string; handler: () => any } | null = null;
  private rpcHandlerInfo: { prefix: string, serverTools: typeof ServerTools, options?: any } | null = null;

  constructor(options?: http.ServerOptions) {
    super();
    if (options) {
      this.server = http.createServer(options, this.requestListener.bind(this));
    } else {
      this.server = http.createServer(this.requestListener.bind(this));
    }
  }

  private async requestListener(req: http.IncomingMessage, res: http.ServerResponse) {
    const { url, method } = req;
    if (!url) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Bad Request' }));
      return;
    }

    // Discovery Handler
    if (this.discoveryHandlerInfo && method === 'GET' && url === this.discoveryHandlerInfo.prefix) {
      try {
        const result = this.discoveryHandlerInfo.handler();
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify(result));
        console.log(`[HttpServerTransport] Handled GET ${url} for discovery`);
      } catch (e: any) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: e.message || 'Internal Server Error' }));
      }
      return;
    }

    // RPC Handler
    if (this.rpcHandlerInfo && url.startsWith(this.rpcHandlerInfo.prefix)) {
        await this.handleRpcRequest(req, res);
        return;
    }

    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Not Found' }));
  }

  public addDiscoveryHandler(apiPrefix: string, handler: () => any): void {
    this.discoveryHandlerInfo = { prefix: apiPrefix, handler };
    console.log(`[HttpServerTransport] Mapped GET ${apiPrefix} for discovery`);
  }

  public addRpcHandler(serverTools: typeof ServerTools, apiPrefix: string, options?: any) {
    if (!apiPrefix.endsWith('/')) {
      apiPrefix += '/';
    }
    this.rpcHandlerInfo = { prefix: apiPrefix, serverTools, options };
    console.log(`[HttpServerTransport] Mapped RPC calls for prefix ${apiPrefix}`);
  }

  private async handleRpcRequest(request: http.IncomingMessage, reply: http.ServerResponse) {
    if (!this.rpcHandlerInfo || !request.url) {
        reply.statusCode = 500;
        reply.setHeader('Content-Type', 'application/json');
        reply.end(JSON.stringify({ error: 'RPC handler not configured' }));
        return;
    }
    const { serverTools, prefix } = this.rpcHandlerInfo;

    // remove query string from url before splitting
    const urlPath = request.url.split('?')[0].substring(prefix.length);
    const [toolId, id] = urlPath.split('/').map(s => s === undefined ? s : decodeURIComponent(s));

    const func = serverTools.get(toolId);

    if (!func) {
      reply.statusCode = 404;
      reply.setHeader('Content-Type', 'application/json');
      reply.end(JSON.stringify({ error: `${toolId} Not Found`, data: { what: toolId } }));
      return;
    }

    let params: any;
    const method = request.method;

    try {
        if (method === 'GET' || method === 'DELETE') {
            const requestUrl = new URL(request.url, `http://${request.headers.host}`);
            const p = requestUrl.searchParams.get('p');
            params = p ? JSON.parse(p) : {};
        } else {
            const body = await this.getRequestBody(request);
            params = body ? JSON.parse(body) : {};
        }

        params._req = request;
        params._res = reply;
        if (id !== undefined) { params.id = id; }

        let result = await func.run(params);

        if (func.isStream(params)) {
            if (result && typeof result.pipe === 'function') {
                result.pipe(reply);
            } else if (!reply.writableEnded) {
                // If it's a stream but no result, or result is not a stream, just end.
                // The function might have handled the response itself.
                // reply.end();
            }
        } else {
            reply.setHeader('Content-Type', 'application/json');
            reply.statusCode = 200;
            reply.end(JSON.stringify(result));
        }
    } catch (e: any) {
        console.error('Error during RPC execution:', e);
        if (reply.headersSent) return;

        reply.setHeader('Content-Type', 'application/json');
        if (e.code && typeof e.code === 'number') {
            reply.statusCode = e.code;
            if (e.stack) { e.stack = undefined; } // Don't leak stack traces
            reply.end(JSON.stringify(e));
        } else {
            reply.statusCode = 500;
            reply.end(JSON.stringify({ error: e.message || 'Internal Server Error' }));
        }
    }
  }

  private getRequestBody(req: http.IncomingMessage): Promise<string> {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            resolve(body);
        });
        req.on('error', (err) => {
            reject(err);
        });
    });
  }

  public async _start(options: { port: number; host?: string }): Promise<void> {
    const { port, host = '0.0.0.0' } = defaultsDeep(options, { port: 3000 });
    return new Promise((resolve, reject) => {
        this.server.on('error', (err) => {
            console.error('[HttpServerTransport] Server error:', err);
            reject(err);
        });
        this.server.listen(port, host, () => {
            const address = this.server.address();
            const addressString = typeof address === 'string' ? address : `${address?.address}:${address?.port}`;
            console.log(`[HttpServerTransport] Server listening on ${addressString}`);
            resolve();
        });
    });
  }

  public async stop(force?: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
        if (!this.server || !this.server.listening) {
            return resolve();
        }
        if (force) {
          this.server.closeAllConnections();
        }
        this.server.close((err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
  }

  public getRaw(): http.Server {
    return this.server;
  }
}
