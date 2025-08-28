import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { findPort } from '../src/utils/find-port';
import { NotFoundError } from '../src/utils';

import { ServerTools } from '../src/server-tools';
import { ClientTools } from '../src/client-tools';
import { ResServerTools, ResServerFuncParams } from '../src/res-server-tools';
import { ResClientTools } from '../src/res-client-tools';
import { RpcMethodsServerTool } from '../src/rpc-methods-server-tool';
import { RpcMethodsClientTool } from '../src/rpc-methods-client-tool';

import { FastifyRestfulToolTransport } from '../src/transports/fastify-restful-server';
import { HttpClientToolTransport } from '../src/transports/client';
import type { FastifyInstance } from 'fastify';

// Server-side implementation of a resource tool for testing
class TestResTool extends ResServerTools {
  action = 'res' as const;
  items: Record<string, any> = {
    '1': { id: '1', name: 'Item 1' },
    '2': { id: '2', name: 'Item 2' },
  };

  $customMethod({ id }: ResServerFuncParams) {
    if (id) {
      const item = this.items[id as string];
      if (!item) {
        throw new NotFoundError(id, 'res');
      }
      return { ...item, custom: true };
    }
    throw new Error('id is required for customMethod');
  }

  get({ id }: ResServerFuncParams) {
    if (id) {
      const item = this.items[id as string];
      if (!item) {
        throw new NotFoundError(id, 'res');
      }
      return item;
    }
  }

  post({ id, val }: ResServerFuncParams) {
    if (id !== undefined && val !== undefined) {
      this.items[id as string] = val;
      return { id, status: 'created' };
    } else {
      throw new Error('id or val is undefined');
    }
  }

  list() {
    return this.items;
  }

  delete({ id }: ResServerFuncParams) {
    if (id) {
      const item = this.items[id as string];
      if (item === undefined) {
        throw new NotFoundError(id, 'res');
      }
      delete this.items[id as string];
      return { id, status: 'deleted' };
    }
     throw new Error('id is required for delete');
  }
}

// Server-side implementation of a generic RPC tool for testing
class TestRpcTool extends RpcMethodsServerTool {
    $add({a, b}: {a: number, b: number}) {
        return a + b;
    }
}

describe('FastifyRestfulToolTransport', () => {
  let serverTransport: FastifyRestfulToolTransport;
  let apiRoot: string;

  beforeAll(async () => {
    // 1. Register server-side tools
    ServerTools.items = {};
    ClientTools.items = {};
    new TestResTool('resTest');
    new TestRpcTool('rpcTest');

    // 2. Use the new, specialized transport to mount all tools
    serverTransport = new FastifyRestfulToolTransport();
    serverTransport.mount(ServerTools, '/api');

    const port = await findPort(3003);
    await serverTransport.start({ port });
    apiRoot = `http://localhost:${port}/api`;

    // 3. Setup the client transport and load tools
    const clientTransport = new HttpClientToolTransport(apiRoot);
    ClientTools.setTransport(clientTransport);

    // DEBUG: Check what the discovery endpoint returns
    const discoveryResp = await fetch(apiRoot);
    const discoveredItems = await discoveryResp.json();
    console.log('--- Discovered Items from Server ---', discoveredItems);

    // The key fix: Use the specific class to load the tools.
    // This ensures the correct client-side classes are instantiated.
    ClientTools.loadFromSync(discoveredItems);
  });

  afterAll(async () => {
    await (serverTransport.getRaw() as FastifyInstance).close();
  });

  describe('ResServerTools mounted via transport', () => {
    it('should instantiate TestResTool as ResClientTools', () => {
      const resTool = ClientTools.get('resTest');
      expect(resTool).toBeInstanceOf(ResClientTools);
    });

    it('should call the list method via GET /resTest', async () => {
      const resTool = ClientTools.get('resTest') as ResClientTools;
      const result = await resTool.list!();
      expect(Object.keys(result).length).toBe(2);
      expect(result['1']).toEqual({ id: '1', name: 'Item 1' });
    });
  });

  describe('RpcMethodsServerTool mounted via transport', () => {
    it('should instantiate TestRpcTool as RpcMethodsClientTool', () => {
      const rpcTool = ClientTools.get('rpcTest');
      expect(rpcTool).toBeInstanceOf(RpcMethodsClientTool);
    });

    it('should call a method via POST /rpcTest', async () => {
        const rpcTool = ClientTools.get('rpcTest') as RpcMethodsClientTool & { add: Function };
        const result = await rpcTool.add({a: 100, b: 50});
        expect(result).toBe(150);
    });
  });
});