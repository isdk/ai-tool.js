**@isdk/ai-tool**

***

# @isdk/ai-tool

A powerful TypeScript framework for creating, managing, and communicating with modular functions. It's perfect for building AI agent tools, backend services, and extensible plugin systems with a clean, decoupled architecture.

## Core Features

- **Modular & Inheritable Tools:** Define functions in a structured way with a clear class hierarchy (`ToolFunc` -> `ServerTools` -> `ResServerTools`).
- **Pluggable RPC Transport:** Decouple your business logic from the network layer. Communicate between client and server using HTTP, IPC, or any custom protocol.
- **Pluggable PubSub Transport:** Create real-time, bidirectional event buses for features like notifications and live updates. Implementations for SSE (Server-Sent Events) and Electron IPC are included.
- **Global Registry:** Easily access any registered function from anywhere in your application.

## Installation

```bash
npm install @isdk/ai-tool
```

## Core Architecture: Tool Inheritance

`@isdk/ai-tool` is built on a foundation of extensible classes. Understanding their hierarchy and design is key to using the library effectively.

### Design Philosophy: Static vs. Instance

A key design principle in `ToolFunc` is the separation of roles between the static class and its instances:

- **The Static Class as Manager:** The static side of `ToolFunc` (e.g., `ToolFunc.register`, `ToolFunc.run`, `ToolFunc.get`) acts as a global **registry** and **executor**. It manages all tool definitions, allowing any part of your application to discover and run tools by name without needing a direct reference to the tool's instance.

- **The Instance as the Tool:** An instance (`new ToolFunc(...)`) represents a single, concrete **tool**. It holds the actual function logic, all its metadata (name, description, parameters), and any internal state.

This separation provides the best of both worlds: the power of object-oriented encapsulation for defining individual tools and the convenience of a globally accessible service for managing and executing them.

### Tool Inheritance Hierarchy

The library follows a clear inheritance path, adding specialized features at each level. For a detailed breakdown of each type and how they separate business logic from communication, see the [**Guide to Server & Client Tools**](_media/server_client_tools.md).

**Server-Side Inheritance:**
`ToolFunc` -> `ServerTools` -> `RpcMethodsServerTool` -> `ResServerTools`

- **`ToolFunc`**: The base for any function, containing core logic and metadata. For more details, see the [ToolFunc Guide](_media/toolFunc.md).
- **`ServerTools`**: Extends `ToolFunc` to be discoverable and callable by remote clients.
- **`RpcMethodsServerTool`**: Extends `ServerTools` to allow a single tool to expose multiple methods (e.g., a `Math` tool with `add` and `subtract` methods).
- **`ResServerTools`**: Extends `RpcMethodsServerTool` to automatically provide a resource-oriented (CRUD) interface.

**Client-Side Inheritance:**
A parallel hierarchy exists for the client, designed to seamlessly call the server-side tools.
`ToolFunc` -> `ClientTools` -> `RpcMethodsClientTool` -> `ResClientTools`

## Client-Server RPC with Transports

The framework shines in a client-server setup, allowing you to call backend functions as if they were local.

### Server-Side Example

Use `ServerTools` to define a backend function and `FastifyServerToolTransport` to expose it over HTTP.

```typescript
// server.ts
import { ServerTools, FastifyServerToolTransport } from '@isdk/ai-tool';

// Define a tool that can be called remotely
ServerTools.register({
  name: 'getUserProfile',
  params: { id: { type: 'string' } },
  func: async ({ id }: { id: string }) => {
    return { id, name: 'Jane Doe', email: 'jane.doe@example.com' };
  },
});

// Create a transport and mount the tools under the '/api' prefix
const serverTransport = new FastifyServerToolTransport();
serverTransport.mount(ServerTools, '/api');

// Start the server
serverTransport.start({ port: 3000 });
```

### Client-Side Example

The `mount` method handles both setting the transport and loading tool definitions from the server in one step.

```typescript
// client.ts
import { ClientTools, HttpClientToolTransport } from '@isdk/ai-tool';

async function main() {
  const apiRoot = 'http://localhost:3000/api';

  // 1. Setup the client transport and mount the tools
  const clientTransport = new HttpClientToolTransport(apiRoot);
  await clientTransport.mount(ClientTools);

  // 2. Get the remote tool and run it
  const getUserProfile = ClientTools.get('getUserProfile');
  const profile = await getUserProfile.run({ id: '123' });

  console.log(profile);
}
main();
```

> For a deeper dive into how transports work, see the [Transport Layer Guide](_media/transport.md).

## Real-Time Events with PubSub

`@isdk/ai-tool` includes a powerful event system for real-time communication, built on a pluggable PubSub transport layer.

### Quick Example: SSE (Server-Sent Events)

**Server-Side:**
```typescript
// server.ts (additions)
import { EventServer, SseServerPubSubTransport, eventServer } from '@isdk/ai-tool';

// Set the PubSub transport for the EventServer
EventServer.setPubSubTransport(new SseServerPubSubTransport());
eventServer.register(); // Register the default event tool

// Now you can publish events from anywhere in your backend
setInterval(() => {
  EventServer.publish('server-time', { time: new Date().toISOString() });
}, 2000);
```

**Client-Side:**
```typescript
// client.ts (additions)
import { EventClient, SseClientPubSubTransport, eventClient, backendEventable } from '@isdk/ai-tool';

// Set the PubSub transport for the EventClient
EventClient.setPubSubTransport(new SseClientPubSubTransport());

// Make the client event-aware and register it
backendEventable(EventClient);
eventClient.setApiRoot('http://localhost:3000/api'); // Your API root
eventClient.register();

// Subscribe to and listen for server events
await eventClient.subscribe('server-time');
eventClient.on('server-time', (data) => {
  console.log('Live time from server:', data.time);
});
```

> For more detailed examples, including the Electron IPC transport, see the [**Real-time Events (PubSub) Guide**](_media/pubsub.md).

## Contribution

If you would like to contribute to the project, please read the [CONTRIBUTING.md](_media/CONTRIBUTING.md) file for guidelines on how to get started.

## License

The project is licensed under the MIT License. See the [LICENSE-MIT](_media/LICENSE-MIT) file for more details.

## Credit

This project is inspired by and uses code from several excellent open-source projects:

* [@huggingface/jinja](https://github.com/huggingface/huggingface.js)
* [eventsource-parser](https://github.com/rexxars/eventsource-parser)
* [async-sema](https://github.com/vercel/async-sema)
* [modelfusion](https://github.com/vercel/modelfusion)
