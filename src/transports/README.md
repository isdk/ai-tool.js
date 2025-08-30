# Transports Layer

The `transports` layer provides a flexible mechanism for communication between `ServerTools` and `ClientTools`. It decouples the core tool-handling logic from the underlying network protocol (e.g., HTTP, WebSockets), allowing for different communication strategies to be implemented and swapped easily.

## Core Concepts

The layer is built around two main interfaces:

- **`IServerToolTransport`**: Defines the contract for server-side transports. Its primary responsibility is to expose `ServerTools` to the network. This involves:
  - A `mount()` method to register the `ServerTools` and create the necessary API endpoints (e.g., a discovery endpoint to list tools and RPC endpoints to execute them).
  - A `start()` method to begin listening for incoming connections.

- **`IClientToolTransport`**: Defines the contract for client-side transports. Its role is to communicate with a server transport to execute tools remotely. This involves:
  - A `load()` method to connect to the server's discovery endpoint and retrieve the list of available tool definitions.
  - A `run()` method to execute a specific tool on the server by name, passing the required parameters.

## Implementations

This directory includes the following concrete implementations:

### Server-Side

- **`ServerToolTransport`**: An abstract base class that provides the generic logic for mounting `ServerTools`. It iterates through the registered tools and maps them to RPC handlers.
- **`FastifyServerToolTransport`**: A concrete implementation based on the [Fastify](https://www.fastify.io/) web framework. It creates HTTP `GET` and `POST` routes for tool discovery and execution.

### Client-Side

- **`HttpClientToolTransport`**: A concrete implementation that uses the standard `fetch` API to communicate with an HTTP-based server transport. It's compatible with browsers and Node.js environments.

## End-to-End Usage Example

Here’s how to expose `ServerTools` with `FastifyServerToolTransport` and call them from a client using `HttpClientToolTransport`.

### 1. Server-Side Setup

Create a server file to register your tools and start the transport.

```ts
// server.ts
import { ServerTools } from '../server-tools';
import { FastifyServerToolTransport } from './fastify-server';
import { findPort } from '../utils/find-port';

// Register a tool to be exposed
ServerTools.register({
  name: 'calculator',
  isApi: true,
  func: ({ a, b }: { a: number; b: number }) => {
    return a + b;
  },
});

async function startServer() {
  // Initialize the Fastify transport
  const serverTransport = new FastifyServerToolTransport();

  // Mount the ServerTools. This creates:
  // 1. A discovery endpoint at GET /api
  // 2. An RPC endpoint for each tool, e.g., POST /api/calculator
  serverTransport.mount(ServerTools, '/api');

  // Find an available port and start the server
  const port = await findPort(3000);
  await serverTransport.start({ port });
  console.log(`Server listening on http://localhost:${port}`);
  return `http://localhost:${port}/api`;
}

// You can export the start function to use in tests or other modules
// startServer();
```

### 2. Client-Side Setup

Create a client file to connect to the server and execute the remote tool.

```ts
// client.ts
import { ClientTools } from '../client-tools';
import { HttpClientToolTransport } from './client';

async function runClient() {
  const apiRoot = 'http://localhost:3000/api'; // URL from the running server

  // 1. Initialize the HTTP client transport with the server's API root
  const clientTransport = new HttpClientToolTransport(apiRoot);

  // 2. Set the transport on ClientTools
  ClientTools.setTransport(clientTransport);

  // 3. Load tool definitions from the server's discovery endpoint
  await ClientTools.loadFrom();

  // 4. Get the dynamically created client-side stub for the remote tool
  const calculatorTool = ClientTools.get('calculator');

  if (!calculatorTool) {
    throw new Error('"calculator" tool not found on server.');
  }

  // 5. Run the tool. This triggers the client transport to make an HTTP POST call.
  const result = await calculatorTool.run({ a: 40, b: 2 });

  console.log('Result from remote tool:', result); // Outputs: 42
}

runClient();
```
