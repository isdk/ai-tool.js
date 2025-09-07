import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { findPort } from '../src/utils/find-port';
import { NotFoundError, sleep } from '../src/utils';

import { ToolFunc, Funcs } from '../src/tool-func'
import { ServerTools } from '../src/server-tools';
import { ClientTools } from '../src/client-tools';
import { ResServerTools, ResServerFuncParams } from '../src/res-server-tools';
import { ResClientTools } from '../src/res-client-tools';
import { RpcMethodsServerTool } from '../src/rpc-methods-server-tool';
import { RpcMethodsClientTool } from '../src/rpc-methods-client-tool';

import { HttpServerToolTransport, HttpClientToolTransport } from '../src/transports';

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
  let serverTransport: HttpServerToolTransport;
  let apiRoot: string;

  beforeAll(async () => {
    // 让 items 属性继承 ToolFunc.items
    const ServerToolItems: {[name:string]: ServerTools|ToolFunc} = {}
    Object.setPrototypeOf(ServerToolItems, ToolFunc.items)
    ServerTools.items = ServerToolItems

    const ClientToolItems: Funcs = {}
    Object.setPrototypeOf(ClientToolItems, ToolFunc.items)
    ClientTools.items = ClientToolItems

    const res = new TestResTool('resTest')
    res.register()
    const rpc = new TestRpcTool('rpcTest')
    ResServerTools.register(rpc)

    // 2. Use the new, specialized transport to mount all tools
    serverTransport = new HttpServerToolTransport();
    serverTransport.mount(ResServerTools, '/api');

    const port = await findPort(3003);
    await serverTransport.start({ port, host: 'localhost' });
    apiRoot = `http://localhost:${port}/api`;


    // 3. Setup the client transport and load tools
    const clientTransport = new HttpClientToolTransport(apiRoot);
    // ResClientTools.setTransport(clientTransport);
    // await ResClientTools.loadFrom();
    await clientTransport.mount(ResClientTools)
  });

  afterAll(async () => {
    await serverTransport.stop();
  });

  describe('ResServerTools mounted via transport', () => {
    it('should instantiate TestResTool as ResClientTools', () => {
      const resTool = ResClientTools.get('resTest');
      expect(resTool).toBeInstanceOf(ResClientTools);
    });

    it('should call the list method', async () => {
      const resTool = ResClientTools.get('resTest') as ResClientTools;
      const result = await resTool.list!();
      expect(Object.keys(result).length).toBe(2);
      expect(result['1']).toEqual({ id: '1', name: 'Item 1' });
    });

    it('should call the get method', async () => {
      const resTool = ResClientTools.get('resTest') as ResClientTools;
      const result = await resTool.get!({id: 1});
      expect(result).toEqual({ id: '1', name: 'Item 1' });
    });

    it('should call customMethod', async () => {
      const resTool = ResClientTools.get('resTest') as ResClientTools;
      const result = await resTool.customMethod({id: 2});
      expect(result).toEqual({ id: '2', name: 'Item 2', custom: true });
    });
  });

  describe('RpcMethodsServerTool mounted via transport', () => {
    it('should instantiate TestRpcTool as RpcMethodsClientTool', () => {
      const rpcTool = RpcMethodsClientTool.get('rpcTest');
      expect(rpcTool).toBeInstanceOf(RpcMethodsClientTool);
    });

    it('should call a method via POST /rpcTest', async () => {
      const rpcTool = RpcMethodsClientTool.get('rpcTest') as RpcMethodsClientTool & { add: Function };
      const result = await rpcTool.add({a: 100, b: 50});
      expect(result).toBe(150);
    });
  });
});