# ToolFunc: Client-Server Communication

This guide provides a comprehensive overview of the `ai-tool` transport layer, a powerful system designed to facilitate communication between server-side functions and client-side applications. It enables seamless Remote Procedure Calls (RPC) by abstracting the underlying network protocol.

This system is composed of two main parts:

1.  **Tools (`ServerTools`/`ClientTools`):** Classes that define the functions to be executed.
2.  **The Transport Layer:** The underlying bridge that handles network communication.

**Prerequisite:** This document assumes you have a basic understanding of the `ToolFunc` framework. If not, please review the [`toolFunc.md`](./toolFunc.md) first.

## 1. `ServerTools`: Defining Backend Functions

`ServerTools` is the base class for any function you want to make available for remote clients. It extends `ToolFunc`, inheriting all its features, but is specifically designed to be discovered and executed via the transport layer.

Think of a `ServerTools` instance as a single, network-addressable endpoint for a specific function.

### Basic Example

Here is the most basic example of defining a server tool. Note that at this stage, it's just a definition; it can't be reached by a client until a transport is set up.

```typescript
import { ServerTools } from '@isdk/ai-tool';

// Define a tool that can be called remotely
ServerTools.register({
  name: 'getUserProfile',
  description: 'Fetches a user profile by ID.',
  params: { id: { type: 'string' } },
  func: async ({ id }: { id: string }) => {
    // In a real app, you'd fetch this from a database
    return { id, name: 'Jane Doe', email: 'jane.doe@example.com' };
  },
});
```

## 2. The Transport Layer: Bridging Client and Server

The transport layer's primary purpose is to **decouple your tool's business logic from the network protocol**. It acts as a bridge, allowing a client to execute a function on a server as if it were a local method.

The transport layer makes `ServerTools` accessible over a network and allows `ClientTools` to call them.

- **The Server Transport (`IServerToolServerTransport`)**
  - Its job is to listen for incoming network requests (e.g., over HTTP).
  - It finds the correct registered `ServerTools` instance by its name.
  - It executes the tool and sends the result back in a response.

- **The Client Transport (`IClientToolTransport`)**
  - Its job is to connect to a server's `apiRoot`.
  - It uses a `mount()` helper to fetch all available tool definitions from the server and automatically create local proxy `ClientTools` for them.

### End-to-End Transport Example

This example shows how to use the `Fastify` (server) and `HttpClient` (client) transports to bring the `getUserProfile` tool online.

**Server-Side Setup:**

```typescript
// server.ts
import { ServerTools, FastifyServerToolTransport } from '@isdk/ai-tool';

// (Your ServerTools.register call from above)

// 1. Create a server transport instance.
const serverTransport = new FastifyServerToolTransport();

// 2. Mount the ServerTools class. The transport finds all registered tools
//    and exposes them under the '/api' prefix.
serverTransport.mount(ServerTools, '/api');

// 3. Start the server.
serverTransport.start({ port: 3000 });
```

**Client-Side Setup:**

```typescript
// client.ts
import { ClientTools, HttpClientToolTransport } from '@isdk/ai-tool';

async function main() {
  const apiRoot = 'http://localhost:3000/api';

  // 1. Create a client transport pointing to the server.
  const clientTransport = new HttpClientToolTransport(apiRoot);

  // 2. Mount ClientTools. This crucial step connects to the server,
  //    fetches the definitions for all available ServerTools (like 'getUserProfile'),
  //    and creates the local ClientTools proxies.
  await clientTransport.mount(ClientTools);

  // 3. Get the proxy tool and run it as if it were local.
  const getUserProfile = ClientTools.get('getUserProfile');
  const profile = await getUserProfile.run({ id: '123' });

  console.log(profile);
}
main();
```

## 3. Advanced Tool Types & Transport Interaction

The framework provides specialized subclasses of `ServerTools` for common API patterns. A key concept is that the **transport layer remains agnostic** to these types. It always just finds a tool by its name and executes its main `func`. The tool itself is responsible for any internal logic, like routing to sub-methods.

### `RpcMethodsServerTool`

This class allows you to group multiple related functions into a single tool, like methods on a class.

- **How it works:** You define methods in your class with a `$` prefix (e.g., `$add`, `$subtract`). The tool's main `func` acts as a dispatcher, using an `act` parameter from the client to call the correct internal method.
- **Transport Interaction:** The transport is unaware of this. It just calls the main `func` of the `calculator` tool. The tool's internal dispatcher does the rest.

**Example:**

```typescript
// tools/CalculatorTool.ts
import { RpcMethodsServerTool } from '@isdk/ai-tool';

export class CalculatorTool extends RpcMethodsServerTool {
  $add({ a, b }: { a: number, b: number }) { return a + b; }
  $subtract({ a, b }: { a: number, b: number }) { return a - b; }
}

// server.ts - You would register this tool:
// new CalculatorTool('calculator').register();

// client.ts - The client-side proxy would have .add() and .subtract() methods:
// const sum = await calculator.add({ a: 10, b: 5 });
```

### `ResServerTools`

This class extends `RpcMethodsServerTool` to provide a conventional, resource-oriented (CRUD) API.

- **How it works:** It maps standard method names like `get`, `list`, `post`, `put`, and `delete` to different HTTP verbs and URL patterns.
- **Transport Interaction:** Just like with `RpcMethodsServerTool`, the transport remains agnostic. For example, a `GET /api/myResource/123` request is routed by the `Fastify` transport to the `myResource` tool. The tool's internal logic then identifies the `GET` verb and the `id` parameter and calls its own `get()` method.

This architecture provides a clean, powerful, and extensible way to build and consume APIs, clearly separating your business logic from the complexities of network communication.