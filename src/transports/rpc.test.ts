import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import fastify, { FastifyInstance } from 'fastify';
import { findPort } from '../utils/find-port';

import { ServerTools } from '../server-tools';
import { ClientTools } from '../client-tools';
import { ToolFunc } from '../tool-func';

import { FastifyServerToolTransport } from './fastify-server';
import { HttpClientToolTransport } from './http-client';

describe('RPC End-to-End Test', () => {
  let serverInstance: FastifyInstance;
  let serverTransport: FastifyServerToolTransport;
  let apiRoot: string;

  beforeAll(async () => {
    ServerTools.items = {};
    ClientTools.items = {};
    // 1. Register a tool on the server side
    ServerTools.register({
      name: 'calculator',
      isApi: true,
      func: ({ a, b }: { a: number; b: number }) => {
        return a + b;
      },
    });

    // Register a tool that throws an error
    ServerTools.register({
        name: 'divider',
        isApi: true,
        func: () => { throw new Error('test error from server') },
    });

    // 2. Setup the server transport
    serverInstance = fastify();
    serverTransport = new FastifyServerToolTransport(serverInstance);
    serverTransport.mount(ServerTools, '/api');

    const port = await findPort(3000);
    await serverTransport.start({ port });
    apiRoot = `http://localhost:${port}/api`;
  });

  afterAll(async () => {
    await serverInstance.close();
  });

  it('should correctly call a remote tool from the client', async () => {
    // 1. Setup the client transport
    const clientTransport = new HttpClientToolTransport(apiRoot);
    ClientTools.setTransport(clientTransport);

    // 2. Load tool definitions from the server
    await ClientTools.loadFrom();

    // 3. Get the dynamically created client-side tool stub
    const calculatorTool = ClientTools.get('calculator');
    expect(calculatorTool).toBeInstanceOf(ClientTools);

    // 4. Run the tool. This will trigger the client transport to make an HTTP call.
    const result = await calculatorTool!.run({ a: 40, b: 2 });

    // 5. Assert the result returned from the server
    expect(result).toBe(42);
  });

  it('should handle remote errors correctly', async () => {
    const clientTransport = new HttpClientToolTransport(apiRoot);
    await clientTransport.mount(ClientTools);

    const dividerTool = ClientTools.get('divider');

    // Expect the run command to reject with an error from the server
    await expect(dividerTool!.run({})).rejects.toThrow('test error from server');
  });
});
