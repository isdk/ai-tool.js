import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { findPort, sleep } from '../src/utils';
import { EventEmitter } from 'events-ex';

import { ToolFunc, Funcs } from '../src/tool-func';
import { ResServerTools } from '../src/res-server-tools';
import { ResClientTools } from '../src/res-client-tools';
import { EventServer } from '../src/funcs/event-server';
import { EventClient } from '../src/funcs/event-client';
import { event as eventBusProvider } from '../src/funcs/event';

import { HttpServerToolTransport, HttpClientToolTransport } from '../src/transports';
import { SseClientPubSubTransport, SseServerPubSubTransport } from "../src/transports/pubsub"


// Helper to make a tool eventable for testing
function makeEventable(tool: any) {
  const emitter = new EventEmitter();
  tool.on = emitter.on.bind(emitter);
  tool.off = emitter.off.bind(emitter);
  tool.emit = emitter.emit.bind(emitter);
  tool.emitter = emitter;
  return tool;
}

describe('EventTransport End-to-End Test', () => {
  let serverTransport: HttpServerToolTransport;
  let apiRoot: string;
  const eventServer1 = new EventServer('events1');
  const eventServer2 = new EventServer('events2');

  beforeAll(async () => {
    // Isolate the tool registries for this test suite to prevent name collisions
    const ServerToolItems: {[name:string]: ResServerTools|ToolFunc} = {}
    Object.setPrototypeOf(ServerToolItems, ToolFunc.items)
    ResServerTools.items = ServerToolItems

    const ClientToolItems: Funcs = {}
    Object.setPrototypeOf(ClientToolItems, ToolFunc.items)
    ResClientTools.items = ClientToolItems

    // Register two distinct EventServer instances using the static method
    ResServerTools.register(eventServer1);
    ResServerTools.register(eventServer2);

    serverTransport = new HttpServerToolTransport();
    serverTransport.mount(ResServerTools, '/api');

    const port = await findPort(3004);
    await serverTransport.start({ port, host: 'localhost' });
    apiRoot = `http://localhost:${port}/api`;

    const clientTransport = new HttpClientToolTransport(apiRoot);
    // Mount ResClientTools as the base class, since EventClient extends it.
    await clientTransport.mount(EventClient);

    EventClient.setPubSubTransport(new SseClientPubSubTransport())
    EventServer.setPubSubTransport(new SseServerPubSubTransport())
  });

  afterAll(async () => {
    ResServerTools.unregister(eventServer1.name!);
    ResServerTools.unregister(eventServer2.name!);
    EventClient.setPubSubTransport(undefined)
    EventServer.setPubSubTransport(undefined)
    await serverTransport.stop(true);
    // Unregister using the static method as well
  });

  it('should receive a server-sent event from a specific event server', async () => {
    const client1 = EventClient.get('events1') as EventClient;
    expect(client1).toBeInstanceOf(EventClient);
    makeEventable(client1);

    const received = new Promise(resolve => {
      client1.on('news', (data) => {
        resolve(data);
      });
    });

    await client1.init(['news']);
    await sleep(50); // Allow time for connection to establish

    // Publish only on server1
    eventServer1.publish({data: { message: 'hello from server 1' }, event: 'news'});

    const data = await received;
    expect(data).toEqual({ message: 'hello from server 1' });

    client1.close();
  });

  it('should forward a client event to the server', async () => {
    const eventBus = eventBusProvider.runSync();
    const client2 = ResClientTools.get('events2') as EventClient;
    expect(client2).toBeInstanceOf(EventClient);
    makeEventable(client2);

    const receivedOnServer = new Promise(resolve => {
      client2.on('client-action', (data) => {
        resolve(data);
      });
    });

    await client2.init([]); // Init without specific subscriptions
    client2.forwardEvent('client-action');
    // await sleep(50);

    client2.emit('client-action', { user: 'tester' });

    const data = await receivedOnServer;
    expect(data).toEqual({ user: 'tester' });

    client2.close();
  });

  it('should isolate events between two different event servers', async () => {
    const client1 = makeEventable(ResClientTools.get('events1') as EventClient);
    const client2 = makeEventable(ResClientTools.get('events2') as EventClient);

    const received1 = new Promise(resolve => client1.on('event1-only', resolve));
    const received2 = new Promise(resolve => client2.on('event2-only', resolve));

    let client1ReceivedFrom2 = false;
    let client2ReceivedFrom1 = false;
    client1.on('event2-only', () => { client1ReceivedFrom2 = true; });
    client2.on('event1-only', () => { client2ReceivedFrom1 = true; });

    await client1.init(['event1-only']);
    await client2.init(['event2-only']);
    await sleep(50);

    // Publish to each server
    eventServer1.publish({data: { from: 1 }, event: 'event1-only'});
    eventServer2.publish({data: { from: 2 }, event: 'event2-only'});

    const data1 = await received1;
    const data2 = await received2;

    // Assert correct data was received
    expect(data1).toEqual({ from: 1 });
    expect(data2).toEqual({ from: 2 });

    // Assert that clients did not receive events from the other server
    expect(client1ReceivedFrom2).toBe(false);
    expect(client2ReceivedFrom1).toBe(false);

    client1.close();
    client2.close();
  });
});
